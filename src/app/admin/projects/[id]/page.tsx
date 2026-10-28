import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { requireUser } from '@/lib/auth';
import ProjectForm from './ProjectForm';

export const dynamic = 'force-dynamic';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;

  const initial =
    id === 'new'
      ? { slug: '', title: '', imageUrl: '', description: '', images: [], order: await prisma.project.count() }
      : await prisma.project.findUnique({ where: { id: Number(id) || -1 } });
  if (!initial) notFound();

  return (
    <main className="min-h-screen w-full flex flex-col items-center pt-32 pb-24">
      <div className="w-[85%] max-w-3xl flex flex-col gap-8">
        <h1 className="text-white font-futura-condensed font-extrabold text-5xl md:text-7xl">
          {id === 'new' ? 'NEW PROJECT' : 'EDIT PROJECT'}
        </h1>
        <ProjectForm initial={initial} />
      </div>
    </main>
  );
}
