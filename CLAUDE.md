# CLAUDE.md — JKKN Dental College & Hospital Website

> **Project:** dental.jkkn.ac.in | **Framework:** Next.js 16 (App Router) | **Updated:** 2026-03-16

---

## PROJECT OVERVIEW

Production dental college website with 100+ pages, 40+ components, SEO-first architecture. Serves as the primary digital presence for JKKN Dental College & Hospital, Komarapalayam, Namakkal, Tamil Nadu 638183.

**Live URL:** https://dental.jkkn.ac.in/
**GBP:** https://maps.app.goo.gl/mXx6rFRqpS9U76BK6

---

## TECH STACK

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Server Components default) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 + Radix UI primitives + shadcn/ui |
| State | Zustand 5.0 |
| Animation | Framer Motion 12.29 |
| Icons | Lucide React 0.563 |
| Backend | Supabase (SSR + supabase-js) |
| SEO | JSON-LD schema, dynamic sitemaps, robots.ts |
| Fonts | Poppins (Google Fonts) |

---

## ARCHITECTURE

```
app/                    # Next.js App Router — file-based routing
  layout.tsx            # Root layout (metadata, fonts, analytics)
  page.tsx              # Home page
  globals.css           # Global Tailwind styles
  robots.ts             # SEO robots directives
  sitemap.ts            # Dynamic sitemap generation
  [section]/            # Route groups (about/, academics/, etc.)
    page.tsx            # Route page
    layout.tsx          # Optional nested layout

components/             # React components (40+)
  Header.tsx            # Main navigation (complex — mega menu)
  Footer.tsx            # Site footer
  BottomNav/            # Mobile bottom navigation system
  ui/                   # Shadcn/Radix UI primitives

data/                   # Content & configuration
  content.ts            # Navigation, hero, about, programs, faculty, news
  siteData.ts           # Site config & feature flags
  collegeFacts.ts       # Statistics (placements, accreditations, fees)

lib/                    # Utilities & helpers
  metadata.ts           # SEO metadata + JSON-LD schema generators
  navigationMenuLink.ts # Menu structure & URL config
  utils.ts              # cn() class merger
  supabase/             # Supabase client setup

hooks/                  # Custom React hooks
  use-mobile.tsx        # Mobile breakpoint detection (640px)
  use-bottom-nav.ts     # Zustand bottom nav state

public/                 # Static assets
  images/               # Optimized images (jpg, png, webp)
  pdf/                  # PDF documents
  llms.txt              # LLM training data directives
```

### Data Flow

```
data/content.ts → lib/metadata.ts → components/*.tsx → app/[route]/page.tsx
                → lib/navigationMenuLink.ts → Header.tsx + BottomNav/
```

### Component Patterns

- **Server Components (default):** All page.tsx and layout.tsx files
- **Client Components:** Interactive features marked with `"use client"` (Header, FAQ accordion, carousels, WhatsApp widget)
- **Composition:** Server wraps Client — never the reverse

---

## THEME & DESIGN TOKENS

| Token | Value | Usage |
|-------|-------|-------|
| Primary (Dark Green) | `#1B5E20` | Headers, buttons, links |
| Secondary (Gold) | `#FFC107` | Accents, highlights, CTAs |
| Accent (Light Green) | `#8BC34A` | Badges, success states |
| Cream | `#FBF8F3` | Background sections |
| Touch target minimum | 44px | All interactive elements |
| Mobile breakpoint | 640px (sm) | `use-mobile.tsx` hook |

---

## KEY FILE LOCATIONS

| What | File | Notes |
|------|------|-------|
| Root metadata & SEO | `app/layout.tsx` | Global title, OG, Twitter cards |
| Home page | `app/page.tsx` | Main landing page |
| All site content | `data/content.ts` | Navigation, hero text, programs, faculty |
| College statistics | `data/collegeFacts.ts` | Placements, accreditations, fees |
| Organization schema | `lib/metadata.ts` | JSON-LD, breadcrumb schema |
| Navigation config | `lib/navigationMenuLink.ts` | 100+ menu links |
| Tailwind theme | `tailwind.config.ts` | Colors, spacing, animations |
| Next.js config | `next.config.ts` | Redirects, rewrites, security headers |
| Header component | `components/Header.tsx` | Complex mega menu — HIGH RISK |
| FAQ component | `components/FAQSection.tsx` | Radix UI accordion |
| Mobile nav | `components/BottomNav/` | Zustand-powered bottom nav |
| Sitemap | `app/sitemap.ts` | Dynamic XML sitemap |
| Global styles | `app/globals.css` | Tailwind base + custom styles |

---

## COMMANDS

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Production build (catches type errors)
npm start        # Start production server
npm run lint     # ESLint check
```

---

## ROUTING STRUCTURE (100+ PAGES)

### Main Sections
- `/about/` — Vision, approvals, accreditation, annual reports
- `/academics/` — BDS, MDS (5 specializations), syllabi, calendars, faculty
- `/accreditation/` — NAAC, NIRF (2024, 2025)
- `/administration/` — Trust, management, governing body, committees
- `/admission/` — Process, fees, scholarships, refund policy
- `/committee/` — 20+ institutional committees
- `/facilities/` — Hostel, library, labs, transport, sports, health
- `/research/` — R&D, publications, IIC, ethics, MoU, startups
- `/information-center/` — News, events, careers, downloads, feedback
- `/alumni/` — Association, registration

### SEO & Geo Landing Pages
- `/best-dental-college-tamil-nadu/` — Local SEO landing
- `/ai-dental-campus/` — AI integration landing
- `/blog/` — Blog section
- `/coimbatore/`, `/erode/`, `/namakkal/`, `/salem/`, `/tiruppur/` — Geo-targeted pages
- `/fees-structure/` — Consolidated fee page

### URL Conventions
- Trailing slashes enabled (`trailingSlash: true` in next.config.ts)
- WordPress legacy redirects handled in next.config.ts (20+ redirects)
- Rewrites for URL conflict resolution (90+ rewrites)

---

## CODING CONVENTIONS

### General
- TypeScript strict mode — no `any` types without justification
- Path alias: `@/` maps to project root (`@/components/Header`, `@/lib/utils`)
- Class merging: Always use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Component files: PascalCase (`WhyChooseJKKN.tsx`)
- Hook files: camelCase with `use-` prefix (`use-mobile.tsx`)

### Components
- Default to Server Components — add `"use client"` only when needed (hooks, event handlers, browser APIs)
- Props interfaces defined in the same file, named `{ComponentName}Props`
- Radix UI for accessible primitives (accordion, dialog, scroll-area, sheet)
- Use shadcn/ui variants from `components/ui/` — don't create custom primitives

### Styling
- Tailwind utility classes only — no inline styles, no CSS modules
- Responsive: mobile-first (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- Custom breakpoint: `xs: 375px` defined in tailwind.config.ts
- Animation: Framer Motion for page transitions and interactive animations

### SEO
- Every page MUST have metadata (title ≤60 chars, description ≤155 chars)
- JSON-LD schema on all main pages (Organization, BreadcrumbList, Course, FAQPage)
- Breadcrumb component + BreadcrumbSchema on all inner pages
- Image alt text mandatory — descriptive, keyword-aware
- Use `generateBreadcrumbSchema()` from `lib/metadata.ts`

### Data Management
- Site content lives in `data/content.ts` — NOT hardcoded in components
- Statistics and facts in `data/collegeFacts.ts`
- When adding new content sections, add to data files first, then reference in components

---

## HIGH-RISK FILES (EDIT WITH CAUTION)

| File | Risk Level | Reason |
|------|-----------|--------|
| `components/Header.tsx` | CRITICAL | Complex mega menu — used on EVERY page |
| `components/Footer.tsx` | CRITICAL | Used on every page |
| `app/layout.tsx` | CRITICAL | Root layout — affects all routes |
| `app/globals.css` | HIGH | Global styles — affects everything |
| `tailwind.config.ts` | HIGH | Theme changes cascade everywhere |
| `next.config.ts` | HIGH | Redirects, rewrites, security headers |
| `data/content.ts` | HIGH | All site content — one typo breaks multiple pages |
| `lib/metadata.ts` | HIGH | SEO schema — affects search appearance |
| `components/BottomNav/` | MEDIUM | Mobile navigation — test on mobile after changes |
| `components/ClientLayoutWrapper.tsx` | MEDIUM | Wraps all client-side providers |

### Before Editing Any High-Risk File
1. `grep` all usages first — understand blast radius
2. Check all breakpoints after layout changes (320px, 640px, 768px, 1024px, 1536px)
3. Verify JSON-LD schema validity after metadata changes
4. Test navigation on both mobile and desktop after Header/Footer/BottomNav changes

---

## CONTENT ARCHITECTURE

### Institution Data
- **Name:** JKKN Dental College & Hospital
- **Affiliation:** TN Dr. MGR Medical University
- **Programs:** BDS (100 seats) + MDS (5 specializations)
- **Hospital:** 200+ dental chairs, 100+ beds, 500+ daily patients
- **Contact:** +91 9345855001 | info@jkkn.ac.in
- **Address:** Natarajapuram, NH-544, Komarapalayam, Namakkal, TN 638183

### Schema Strategy
- `EducationalOrganization` — Root entity
- `Course` — BDS, MDS specializations
- `FAQPage` — FAQ sections
- `LocalBusiness` — GBP alignment
- `BreadcrumbList` — Navigation hierarchy
- `Article` — Blog posts

---

## COMMON TASKS

### Add a New Page
1. Create `app/[section]/[page-name]/page.tsx`
2. Export metadata (title, description, openGraph)
3. Add JSON-LD schema if applicable
4. Add to `data/content.ts` navigation if it should appear in menus
5. Add breadcrumb via `<Breadcrumb />` + `<BreadcrumbSchema />`
6. Update `app/sitemap.ts` if not auto-discovered

### Add a New Component
1. Create in `components/` with PascalCase name
2. Use `"use client"` only if interactive
3. Style with Tailwind — use `cn()` for conditional classes
4. Import in the target page

### Update Navigation Menu
1. Edit `data/content.ts` → `navigation` array
2. If URL rewrite needed, add to `next.config.ts` rewrites
3. Test Header dropdown on desktop + BottomNav on mobile

### Add SEO Schema
1. Use `lib/metadata.ts` helpers
2. Add `<StructuredData />` component to the page
3. Validate at https://validator.schema.org/

---

## DEPENDENCIES (KEY PACKAGES)

```json
{
  "next": "^16",
  "react": "^19",
  "typescript": "^5",
  "tailwindcss": "^3.4",
  "framer-motion": "^12.29",
  "zustand": "^5.0",
  "@radix-ui/react-accordion": "latest",
  "@radix-ui/react-dialog": "latest",
  "@radix-ui/react-scroll-area": "latest",
  "@supabase/supabase-js": "latest",
  "lucide-react": "^0.563",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

---

## ENVIRONMENT VARIABLES

Required in `.env.local` (never committed to git):

| Variable | Purpose | Used In |
|----------|---------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `lib/supabase/client.ts`, `lib/supabase/server.ts` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `lib/supabase/client.ts`, `lib/supabase/server.ts` |
| `NEXT_PUBLIC_COLLEGE_ID` | College identifier for Supabase queries | `app/blog/page.tsx`, `app/gallery/page.tsx` |

### Setup
```bash
# Create .env.local in project root
cp .env.example .env.local  # if example exists, otherwise create manually
```

### Rules
- Never commit `.env.local` or any file with actual keys
- All env vars use `NEXT_PUBLIC_` prefix (client-accessible)
- Missing env vars will cause build failures in blog and gallery pages

---

## DEPLOYMENT

| Setting | Value |
|---------|-------|
| Hosting | DigitalOcean |
| Build command | `npm run build` |
| Start command | `npm start` |
| Node version | 18+ |
| Image optimizer | `sharp` (installed as devDependency) |

### Pre-Deployment Checklist
1. `npm run lint` — no ESLint errors
2. `npm run build` — successful production build (catches TypeScript errors)
3. Verify all env vars are set on the server
4. Check redirects/rewrites in `next.config.ts` if URLs changed

---

## SECURITY HEADERS

Configured in `next.config.ts` → `headers()` for all routes `/(.*)`):

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Content-Security-Policy` | `default-src 'self'` + GTM, GA, Google Fonts allowed |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Camera/mic blocked, geolocation self-only |

### CSP Allowed Sources
- **Scripts:** self, GTM, Google Analytics, unsafe-inline/eval (Next.js requirement)
- **Styles:** self, Google Fonts, unsafe-inline
- **Fonts:** self, Google Fonts (gstatic)
- **Images:** self, data URIs, all HTTPS
- **Frames:** self only
- **Objects:** none

---

## TESTING

> **No test framework configured.** No Jest, Vitest, or Playwright setup exists.

### Current Validation Methods
- `npm run build` — TypeScript type checking + Next.js build validation
- `npm run lint` — ESLint rules (next/core-web-vitals)
- Manual browser testing across breakpoints

### Recommended Breakpoints for Manual Testing
| Device | Width | Tailwind |
|--------|-------|----------|
| Mobile S | 320px | default |
| Mobile M | 375px | xs |
| Mobile L | 425px | xs-sm |
| Tablet | 768px | md |
| Laptop | 1024px | lg |
| Desktop | 1280px | xl |
| Large | 1536px | 2xl |

---

## GIT WORKFLOW

- **Branch:** `main` (single branch)
- **Commits:** Descriptive, one fix per commit
- **No force-push** to main
- **Trailing slash** in all URLs (enforced by Next.js config)

---

## KNOWN ISSUES & NOTES

- `public/robots.txt` deleted — using `app/robots.ts` instead (dynamic generation)
- WordPress legacy URLs handled via redirects in `next.config.ts`
- No `.env` file committed — Supabase keys needed for backend features
- No CRM integration — leads managed manually
- NAAC grade listed as "A" — `[UNVERIFIED — Awaiting admin confirmation]`
- NBA: Not accredited (confirmed Feb 2026)
