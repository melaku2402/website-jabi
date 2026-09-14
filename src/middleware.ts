
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bypass next-intl completely for any /admin path
  if (pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    // Exclude admin from the matcher regex
    '/((?!api|_next|_vercel|admin|.*\\..*).*)',
    '/',
    '/(am|en)/:path*'
  ]
};