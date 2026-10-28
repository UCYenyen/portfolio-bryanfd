import { PrismaClient } from '@prisma/client';
import { projects } from '../src/types/projects.md';

const prisma = new PrismaClient();

async function main() {
  for (const [order, p] of projects.entries()) {
    const data = {
      title: p.title,
      imageUrl: p.imageUrl,
      description: p.description,
      images: p.images ?? [],
      order,
    };
    await prisma.project.upsert({ where: { slug: p.href }, update: data, create: { slug: p.href, ...data } });
  }
  console.log(`Seeded ${projects.length} projects`);
}

main().finally(() => prisma.$disconnect());
