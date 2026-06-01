import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip if it's a static asset, login page, or auth API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/staging-auth') ||
    pathname === '/staging-login' ||
    pathname === '/favicon.ico' ||
    pathname.includes('.') // Crude check for file extensions (images, etc.)
  ) {
    return NextResponse.next();
  }

  // 2. Identify the hostname
  const host = request.headers.get('host') || '';

  // 3. Define staging domains
  // Matches staging.sherylthompson.ca or anything ending with .vercel.app
  const isStaging = 
    host === 'staging.sherylthompson.ca' || 
    host.endsWith('.vercel.app');

  // 4. If it's staging, check authentication
  if (isStaging) {
    const isAuthenticated = request.cookies.has('staging_authenticated');

    if (!isAuthenticated) {
      const loginUrl = new URL('/staging-login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Ensure middleware runs for all relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes, except our staging-auth)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
