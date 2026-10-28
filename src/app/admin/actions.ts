'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { login, logout, requireUser } from '@/lib/auth';
import { isUpload, saveImageAsWebp } from '@/lib/images';

export async function loginAction(_: string | null, formData: FormData) {
  const ok = await login(String(formData.get('identifier') ?? ''), String(formData.get('password') ?? ''));
  if (!ok) return 'Invalid username/email or password.';
  redirect('/admin');
}

export async function logoutAction() {
  await logout();
  redirect('/admin/login');
}

function revalidateSite(slug?: string) {
  revalidatePath('/');
  revalidatePath('/projects');
  if (slug) revalidatePath(`/projects/${slug}`);
}

export async function saveProjectAction(_: string | null, formData: FormData) {
  await requireUser();
  const id = Number(formData.get('id')) || null;
  const slug = String(formData.get('slug') ?? '').trim().toLowerCase();
  const data = {
    slug,
    title: String(formData.get('title') ?? '').trim(),
    imageUrl: String(formData.get('imageUrl') ?? '').trim(),
    description: String(formData.get('description') ?? '').replace(/\r\n/g, '\n').trim(),
    images: String(formData.get('images') ?? '').split('\n').map((s) => s.trim()).filter(Boolean),
    order: Number(formData.get('order')) || 0,
  };
  try {
    const cover = formData.get('coverFile');
    if (isUpload(cover)) data.imageUrl = await saveImageAsWebp(cover);
    for (const file of formData.getAll('galleryFiles')) {
      if (isUpload(file)) data.images.push(await saveImageAsWebp(file));
    }
  } catch {
    return 'One of the uploaded files is not a valid image.';
  }
  if (!data.title || !data.imageUrl || !data.description) return 'Title, cover image and description are required.';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return 'Slug must be lowercase letters, numbers and dashes.';

  try {
    if (id) await prisma.project.update({ where: { id }, data });
    else await prisma.project.create({ data });
  } catch {
    return 'Could not save project (is the slug already used?).';
  }
  revalidateSite(slug);
  redirect('/admin');
}

export async function deleteProjectAction(formData: FormData) {
  await requireUser();
  const project = await prisma.project.delete({ where: { id: Number(formData.get('id')) } });
  revalidateSite(project.slug);
  redirect('/admin');
}
