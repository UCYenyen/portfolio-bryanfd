import { NextResponse } from 'next/server';
import { login } from '@/lib/auth';

// curl -c cookies.txt -F identifier=<username|email> -F password=<password> https://ucyenyen.dev/api/admin/login
export async function POST(req: Request) {
  const form = await req.formData();
  const ok = await login(String(form.get('identifier') ?? ''), String(form.get('password') ?? ''));
  if (!ok) return NextResponse.json({ error: 'Invalid username/email or password.' }, { status: 401 });
  return NextResponse.json({ ok: true });
}
