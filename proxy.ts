import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// WordPress-era spam/hacked content (chat/adult/gambling/tech-junk pages) that
// Google still crawls — 90+ URLs found in GSC with ~58k clicks over 12 months.
// A 410 Gone is the strongest de-index signal; a plain 404 keeps the URL in the
// index far longer, and redirecting to "/" passes the spam association to the
// homepage.
//
// Keyword safety: patterns are chosen so no legitimate route matches —
// avoid bare "cam" (ai-dental-CAMpus), bare "bet" (dia-BET-es-day),
// bare "sex" (the sexual-harassment-committee page is legitimate).
// Verified against all 217 app/ route folders: zero false positives.
const SPAM_PATTERN = new RegExp(
  [
    // chat / random-video-chat family (bare "chat" covers chathub, chatiw,
    // chaturbate, ai-chat, chatbots, free-chat-rooms, etc.)
    'omegle', 'chat', 'stranger', 'video-chat', 'video-call', 'random-video',
    'webcam', 'camgo', 'camloo', 'camsoda', 'cam-site', 'adult-cam',
    'luckycrush', 'lucky-crush', 'justalk', 'ometv', 'monkey-app', 'monkey-free',
    // adult / dating spam
    'jerkmate', 'dirtyroulette', 'roulette', 'bedpage', 'hookup', 'dating',
    'flirt', 'migliori', 'citas',
    // gambling / betting spam
    'casino', 'gambling', 'kazino', 'betting', 'mostbet', 'elonbet', 'elon-bet',
    '1xbet', '1win', '20bet', 'bukmeker', 'sportsbook', 'free-spins', 'spinslot',
    'spins-by', 'slot-madness', 'position-madness', '777', 'poker', 'gembling',
    'wms-harbors', 'fairspin',
    // Russian/Spanish-language spam (gambling, crypto, chat)
    'obzor', 'rassmotrenie', 'algotrejding', 'bitkoiny', 'majnit',
    'mejores', 'videollamadas', 'extranos', 'european-economic-union',
    // injected tech-blog junk
    'intel-core', 'kaby-lake', 'iphone-7', 'macos-sierra', 'playstation',
    'shadow-tactics', 'last-guardian',
  ].join('|')
);

// Legacy WordPress taxonomy prefixes. Spam taxonomies (e.g. /category/omegle-cc/)
// must 410 via SPAM_PATTERN above; the rest redirect home. Handled here instead
// of next.config.ts redirects() because config redirects run BEFORE the proxy,
// which would have let /category/omegle-cc/ escape the 410.
const WP_TAXONOMY_PREFIX = /^\/(category|tag|author)(\/|$)/;

function goneResponse() {
  return new NextResponse(
    '<!DOCTYPE html><html><head><title>410 Gone</title><meta name="robots" content="noindex"></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>',
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
      },
    }
  );
}

function setSecurityHeaders(response: NextResponse) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://*.facebook.net; script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://*.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://www.facebook.com https://*.facebook.com; frame-src 'self' https://www.google.com; object-src 'none';"
  );
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );
  return response;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  // WordPress-era spam pages → 410 Gone (also covers the previously hardcoded
  // /7-greatest-free-ai-chatbots-… URL via the "chat" pattern)
  if (SPAM_PATTERN.test(lowerPath)) {
    return goneResponse();
  }

  // Legacy WP taxonomy pages (non-spam) → homepage
  if (WP_TAXONOMY_PREFIX.test(lowerPath)) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  // Match the admin panel WITHOUT colliding with public sections that merely
  // share the "admin" prefix (e.g. /administration/*). A bare startsWith('/admin')
  // would wrongly capture /administration/principals-message and redirect logged-out
  // visitors (and crawlers) to /admin/login. Require an exact /admin or a /admin/ path.
  const isProtectedAdminRoute =
    (pathname === '/admin' || pathname.startsWith('/admin/')) &&
    !pathname.startsWith('/admin/login');

  let supabaseResponse = NextResponse.next({ request });

  // Skip Supabase auth if env vars are not configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            supabaseResponse = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();

    // Protect /admin routes — redirect unauthenticated users to login
    if (isProtectedAdminRoute) {
      if (!user) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }
  } else if (isProtectedAdminRoute) {
    // No Supabase configured — block admin access
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  setSecurityHeaders(supabaseResponse);
  return supabaseResponse;
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
