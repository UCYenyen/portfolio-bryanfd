import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/lib/password';

// Usage: ADMIN_USERNAME=… ADMIN_EMAIL=… ADMIN_PASSWORD=… pnpm db:seed-admin
const prisma = new PrismaClient();

async function main() {
  const { ADMIN_USERNAME: username, ADMIN_EMAIL: rawEmail, ADMIN_PASSWORD: password } = process.env;
  if (!username || !rawEmail || !password) throw new Error('ADMIN_USERNAME, ADMIN_EMAIL and ADMIN_PASSWORD are required');
  const email = rawEmail.toLowerCase();
  const passwordHash = await hashPassword(password);
  await prisma.user.upsert({ where: { username }, update: { email, passwordHash }, create: { username, email, passwordHash } });
  console.log(`Admin user "${username}" ready`);
}

main().finally(() => prisma.$disconnect());
