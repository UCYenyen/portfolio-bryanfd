import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { isUpload, saveImageAsWebp } from '@/lib/images';

// curl -b cookies.txt -F file=@cover.png https://ucyenyen.dev/api/images
export async function POST(req: Request) {
  if (!(await getCurrentUser())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const file = (await req.formData()).get('file');
  if (!isUpload(file)) return NextResponse.json({ error: 'Send an image in the "file" field.' }, { status: 400 });
  try {
    return NextResponse.json({ url: await saveImageAsWebp(file) }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Not a valid image.' }, { status: 400 });
  }
}
