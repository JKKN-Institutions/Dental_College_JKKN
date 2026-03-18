// =============================================================================
// robots.ts — JKKN Dental College & Hospital
// Website: https://dental.jkkn.ac.in
// Framework: Next.js (App Router — Metadata API)
// Last Updated: 2026-03-14
// Version: 4.0 (Migrated from static robots.txt to dynamic app/robots.ts)
// =============================================================================
// AI Crawler Strategy: ALLOW ALL — maximises brand presence in AI-generated
// answers across ChatGPT, Gemini, Claude, Perplexity, Grok, Copilot, Siri,
// Meta AI, and all emerging AI search platforms.
// =============================================================================
// NOTE: robots.txt controls CRAWLING, not INDEXING. Pages like /thank-you,
// /confirmation, /success still need <meta name="robots" content="noindex">
// in their HTML to prevent indexing if discovered via links.
// =============================================================================

import type { MetadataRoute } from 'next'

const SITE_URL = 'https://dental.jkkn.ac.in'

// ---------------------------------------------------------------------------
// Shared Disallow Lists (DRY — reused across Googlebot, Bingbot, general)
// ---------------------------------------------------------------------------

// Next.js internal/build paths
const NEXTJS_DISALLOW = [
  '/_next/',               // Block /_next/* (data, webpack, etc.)
  '/api/',                 // API routes — server-side only
  '/_error',               // Next.js error boundary
  '/_not-found',           // Next.js 404 catch-all (App Router)
]

// Next.js static assets — MUST be allowed for rendering
const NEXTJS_ALLOW = [
  '/_next/static/',        // CSS, JS, fonts — REQUIRED for Googlebot rendering
  '/_next/image',          // Next.js Image component — REQUIRED for image SEO
]

// Admin, CMS & internal paths (trailing slash to avoid prefix collisions)
// IMPORTANT: /admin/ not /admin — /admin blocks /admissions!
const ADMIN_DISALLOW = [
  '/admin/',               // Admin panel (NOT /admin — would block /admissions!)
  '/login/',
  '/signin/',
  '/signup/',
  '/register/',
  '/dashboard/',
  '/cms/',
  '/panel/',
  '/preview/',
  '/draft/',
  '/staging/',
  '/test/',
  '/debug/',
  '/tmp/',
  '/temp/',
  '/private/',
  '/internal/',
  '/staff/',
  '/student-portal/',
  '/faculty-portal/',
]

// Duplicate content & parameter pollution
const PARAMS_DISALLOW = [
  '/search/',              // Internal site search (thin/duplicate)
  '/*?q=',
  '/*?s=',
  '/*?ref=',
  '/*?utm_source=',
  '/*?utm_medium=',
  '/*?utm_campaign=',
  '/*?fbclid=',
  '/*?gclid=',
  '/*?gad_source=',
  '/*?msclkid=',
  '/*?mc_cid=',
  '/*?mc_eid=',
  '/*?_ga=',
  '/*?_gl=',
  '/*?sort=',
  '/*?filter=',
  '/*?order=',
  '/*?page=0',
  '/*?sessionid=',
  '/*?sid=',
  '/*?preview=',
  '/*?draft=',
]

// Print, feed & utility pages
const UTILITY_DISALLOW = [
  '/print/',
  '/*?print=',
  '/feed/',                // NOT /feed — would block /feedback!
  '/rss/',
  '/atom/',
  '/trackback/',
  '/embed/',
  '/thank-you/',
  '/thankyou/',
  '/confirmation/',
  '/success/',
  '/unsubscribe/',
  '/redirect/',
  '/go/',
  '/out/',
]

// Error & status pages
const ERROR_DISALLOW = [
  '/404',
  '/500',
  '/403',
  '/error/',
  '/maintenance/',
  '/offline/',
]

// Source code & sensitive files (security hardening)
const SECURITY_DISALLOW = [
  '/.git/',
  '/.git',
  '/.env',
  '/.next/',
  '/node_modules/',
  '/.vscode/',
  '/.idea/',
  '/package.json',
  '/package-lock.json',
  '/tsconfig.json',
  '/next.config.js',
  '/next.config.mjs',
  '/.htaccess',
  '/web.config',
  '/server.js',
  '/Dockerfile',
  '/docker-compose.yml',
]

// Legacy CMS paths (defensive)
const LEGACY_CMS_DISALLOW = [
  '/wp-admin/',
  '/wp-login.php',
  '/wp-content/',
  '/wp-includes/',
  '/wp-json/',
  '/xmlrpc.php',
  '/cgi-bin/',
  '/phpmyadmin/',
]

// Full disallow list for general + Googlebot
const FULL_DISALLOW = [
  ...NEXTJS_DISALLOW,
  ...ADMIN_DISALLOW,
  ...PARAMS_DISALLOW,
  ...UTILITY_DISALLOW,
  ...ERROR_DISALLOW,
  ...SECURITY_DISALLOW,
  ...LEGACY_CMS_DISALLOW,
]

// ---------------------------------------------------------------------------
// AI Crawlers — ALLOW ALL (AEO + GEO + LLMO + AAO Strategy)
// ---------------------------------------------------------------------------
// BLOCKING these = invisible in AI-generated answers.

// [VERIFIED] — Official bot names confirmed
const VERIFIED_AI_CRAWLERS = [
  'Google-Extended',       // Google AI (Gemini, AI Overviews, SGE)
  'GPTBot',                // OpenAI (ChatGPT, GPT-4)
  'OAI-SearchBot',         // OpenAI search crawler
  'ChatGPT-User',          // ChatGPT browsing
  'ClaudeBot',             // Anthropic (Claude AI)
  'anthropic-ai',          // Anthropic user-agent
  'PerplexityBot',         // Perplexity AI
  'FacebookBot',           // Meta (Facebook, Instagram, WhatsApp)
  'meta-externalagent',    // Meta AI agent
  'meta-externalfetcher',  // Meta fetcher
  'Applebot',              // Apple (Siri, Safari Suggestions)
  'Applebot-Extended',     // Apple AI training
  'Amazonbot',             // Amazon (Alexa, Amazon Q)
  'cohere-ai',             // Cohere AI
  'YouBot',                // You.com (YouChat)
  'AI2Bot',                // Allen Institute for AI
  'AI2Bot-Dolma',          // AI2 Dolma dataset
  'CCBot',                 // Common Crawl (open dataset — trains many AI models)
  'Bytespider',            // ByteDance (TikTok, Doubao AI)
  'Diffbot',               // Diffbot (AI web data extraction)
  'Timpibot',              // Timpi (decentralised search)
  'omgili',                // Omgili (blog/forum indexer)
]

// [UNVERIFIED] — Speculative bot names (defensive allow)
const UNVERIFIED_AI_CRAWLERS = [
  'Google-CloudVertexBot',
  'Claude-User',
  'Claude-SearchBot',
  'claude-web',
  'Perplexity-User',
  'GrokBot',               // xAI / Grok
  'xAI-Grok',
  'DuckAssistBot',         // DuckDuckGo AI
  'MistralAI-User',        // Mistral AI
  'webzio-extended',       // Webz.io
  'ImagesiftBot',          // AI image indexing
]

// Social media crawlers (link previews)
const SOCIAL_CRAWLERS = [
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'Slackbot',
  'TelegramBot',
  'Discordbot',
  'PinterestBot',
  'Quora-Bot',
]

// Blocked spam/scraper bots (zero SEO value, waste server resources)
const BLOCKED_BOTS = [
  'MauiBot',
  'SeznamBot',
  'SemrushBot-BA',
  'SemrushBot-OCOB',
  'BLEXBot',
  'DataForSeoBot',
  'magpie-crawler',
  'AhrefsSiteAudit',
  'Sogou',
  'AspiegelBot',
  'PanguBot',
  'Sentibot',
  'AwarioBot',
  'AwarioSmartBot',
  'AwarioRssBot',
  'VelenPublicWebCrawler',
  'TurnitinBot',
  'img2dataset',
  'Kangaroo Bot',
  'zoominfobot',
  'Seekport',
  'Buck',
  'newspaper',
]

// ---------------------------------------------------------------------------
// Dynamic robots.ts — Next.js Metadata API
// ---------------------------------------------------------------------------

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ----- 1. GENERAL RULES (All Crawlers) -----
      {
        userAgent: '*',
        allow: ['/', ...NEXTJS_ALLOW],
        disallow: FULL_DISALLOW,
      },

      // ----- 2. GOOGLEBOT (Primary — #1 Traffic Source) -----
      // When bot-specific section exists, Google IGNORES User-agent: *
      // This section MUST contain ALL rules Googlebot needs
      {
        userAgent: 'Googlebot',
        allow: ['/', ...NEXTJS_ALLOW],
        disallow: [
          ...NEXTJS_DISALLOW.filter((p) => p !== '/api/'), // Keep /api/ blocked
          '/api/',
          ...ADMIN_DISALLOW,
          ...PARAMS_DISALLOW,
          ...UTILITY_DISALLOW,
          ...ERROR_DISALLOW,
          ...SECURITY_DISALLOW,
          ...LEGACY_CMS_DISALLOW.filter((p) => !p.includes('cgi-bin') && !p.includes('phpmyadmin')),
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/', '/_next/image', '/_next/static/'],
        disallow: ['/_next/', '/admin/', '/private/', '/internal/'],
      },
      {
        userAgent: 'Googlebot-Video',
        allow: ['/', '/_next/static/'],
        disallow: ['/_next/', '/admin/', '/private/', '/internal/'],
      },
      {
        userAgent: 'Googlebot-News',
        allow: ['/blog/', '/news/', '/events/'],
      },

      // ----- 3. BINGBOT (Bing + Microsoft Copilot + DuckDuckGo) -----
      {
        userAgent: 'Bingbot',
        allow: ['/', ...NEXTJS_ALLOW],
        disallow: [
          '/_next/',
          '/api/',
          ...ADMIN_DISALLOW.filter((p) =>
            ['/admin/', '/login/', '/signin/', '/dashboard/', '/preview/',
             '/draft/', '/staging/', '/private/', '/internal/',
             '/student-portal/', '/faculty-portal/'].includes(p)
          ),
          '/search/',
          '/*?q=',
          '/*?utm_source=',
          '/*?utm_medium=',
          '/*?utm_campaign=',
          '/*?fbclid=',
          '/*?msclkid=',
          '/*?sessionid=',
          '/print/',
          '/thank-you/',
          '/feed/',
          '/404',
          '/500',
          '/.git/',
          '/.env',
          '/.next/',
          '/wp-admin/',
        ],
        crawlDelay: 2,
      },

      // ----- 4. AI CRAWLERS — ALLOW ALL -----
      // Verified + Unverified AI crawlers — full access
      {
        userAgent: [...VERIFIED_AI_CRAWLERS, ...UNVERIFIED_AI_CRAWLERS],
        allow: ['/'],
      },

      // AI crawlers with crawl-delay
      {
        userAgent: 'YandexBot',
        allow: ['/'],
        crawlDelay: 5,
      },
      {
        userAgent: 'Baiduspider',
        allow: ['/'],
        crawlDelay: 5,
      },
      {
        userAgent: 'Yeti', // Naver (Korean search + HyperCLOVA AI)
        allow: ['/'],
        crawlDelay: 5,
      },
      {
        userAgent: 'PetalBot', // Huawei (Petal Search)
        allow: ['/'],
        crawlDelay: 3,
      },

      // ----- 5. SOCIAL MEDIA CRAWLERS (Link Previews) -----
      {
        userAgent: SOCIAL_CRAWLERS,
        allow: ['/'],
      },

      // ----- 6. SEO TOOL CRAWLERS -----
      {
        userAgent: 'Screaming Frog SEO Spider',
        allow: ['/'],
      },
      {
        userAgent: ['SemrushBot', 'AhrefsBot', 'SiteAuditBot', 'Moz'],
        allow: ['/'],
        crawlDelay: 3,
      },
      {
        userAgent: ['DotBot', 'MJ12bot'],
        allow: ['/'],
        crawlDelay: 5,
      },

      // ----- 7. BLOCKED SPAM / SCRAPER BOTS -----
      {
        userAgent: BLOCKED_BOTS,
        disallow: ['/'],
      },
    ],

    // ----- 8. SITEMAP & HOST -----
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
