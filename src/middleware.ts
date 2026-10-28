import { NextResponse, type NextRequest } from 'next/server';

// Cheap gate only: the session token is fully validated against the DB in requireUser().
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/admin/login') return NextResponse.next();
  if (!req.cookies.get('admin_session')) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
