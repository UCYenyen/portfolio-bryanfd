import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const image = await prisma.image.findUnique({ where: { id } });
  if (!image) return new Response('Not found', { status: 404 });
  return new Response(new Uint8Array(image.data), {
    headers: {
      'Content-Type': image.mimeType,
      'Content-Length': String(image.size),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
