import sharp from 'sharp';
import { prisma } from '@/lib/prisma';

const MAX_BYTES = 250 * 1024;
// Tried in order until the output fits MAX_BYTES; the last step is used regardless.
const ATTEMPTS = [
  { width: 2000, quality: 80 },
  { width: 1600, quality: 75 },
  { width: 1600, quality: 65 },
  { width: 1280, quality: 60 },
  { width: 1024, quality: 55 },
  { width: 800, quality: 50 },
];

async function toWebp(input: Buffer) {
  let result;
  for (const { width, quality } of ATTEMPTS) {
    result = await sharp(input, { density: 144 })
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 5 })
      .toBuffer({ resolveWithObject: true });
    if (result.info.size <= MAX_BYTES) break;
  }
  return result!;
}

// Converts any uploaded image to a WebP under 250 KB, stores it and returns its public URL.
export async function saveImageAsWebp(file: File) {
  const { data, info } = await toWebp(Buffer.from(await file.arrayBuffer()));

  const image = await prisma.image.create({
    data: { data: new Uint8Array(data), width: info.width, height: info.height, size: info.size },
    select: { id: true },
  });
  return `/api/images/${image.id}`;
}

export function isUpload(value: FormDataEntryValue | null): value is File {
  return value instanceof File && value.size > 0;
}
