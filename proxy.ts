import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function setSecurityHeaders(response: NextResponse) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none';"
  );
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Block spam URL - return 410 Gone status
  if (pathname === '/7-greatest-free-ai-chatbots-ive-tried-and-loved-for-2025') {
    return new NextResponse(null, { status: 410 });
  }

  const response = NextResponse.next();
  setSecurityHeaders(response);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, pdf (static assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|pdf).*)',
  ],
};
