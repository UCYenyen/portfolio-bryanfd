import { prisma } from '@/lib/prisma';
import projectInterface, { projects as fallbackProjects } from '@/types/projects.md';

// Reads projects from Postgres; falls back to the static list when the DB is unreachable
// (e.g. during CI builds) so the site never renders empty.
export async function getProjects(): Promise<projectInterface[]> {
  try {
    const rows = await prisma.project.findMany({ orderBy: [{ order: 'asc' }, { id: 'asc' }] });
    if (rows.length === 0) return fallbackProjects;
    return rows.map((r) => ({
      title: r.title,
      imageUrl: r.imageUrl,
      description: r.description,
      href: r.slug,
      images: r.images,
    }));
  } catch (err) {
    console.error('getProjects: falling back to static projects', err);
    return fallbackProjects;
  }
}
