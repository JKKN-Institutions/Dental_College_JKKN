import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Block spam URL - return 410 Gone status
  if (pathname === '/7-greatest-free-ai-chatbots-ive-tried-and-loved-for-2025') {
    return new NextResponse(null, { status: 410 });
  }

  // Protect /admin routes — redirect unauthenticated users to login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const hasSession = request.cookies.getAll().some(
      (cookie) => cookie.name.startsWith('sb-') && cookie.name.endsWith('-auth-token')
    );
    if (!hasSession) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
