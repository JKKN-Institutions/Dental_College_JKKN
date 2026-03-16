# JKKN Dental College — Complete Issues Fix Plan

**Date:** 2026-03-16
**Scope:** Fix all 16 original issues + 25 codebase issues discovered during exploration
**Principle:** Fix WITHOUT introducing new issues — multi-dimensional validation after each phase

---

## Issue Inventory (41 Total Issues)

### From Original 16 Issues Split (Code-Fixable Only)
| # | Issue | Severity | Can Fix in Code? |
|---|-------|----------|-----------------|
| 1 | Security Hack (casino spam) | CRITICAL | NO — needs IT/server access |
| 2 | Google AI Defamation | CRITICAL | NO — needs manual Google filing |
| 3 | Zero Search Visibility | CRITICAL | YES — fixed by addressing all other issues |
| 4 | Review Crisis (2 Shiksha reviews) | HIGH | NO — needs human outreach |
| 5 | Missing Meta Tags & H1 | HIGH | YES |
| 6 | Schema.org Missing | HIGH | PARTIAL — already exists, needs cleanup |
| 7 | Data Inconsistencies (18 items) | HIGH | PARTIAL — some need user verification |
| 8 | Content Hub Pages | HIGH | PARTIAL — some exist, can improve |
| 9 | GBP Incomplete | HIGH | NO — external platform |
| 10 | Technical SEO | MEDIUM-HIGH | YES — partial |
| 11 | Subdomain Authority | MEDIUM | NO — infrastructure decision |
| 12 | llms.txt Missing | MEDIUM | YES |
| 13 | Education Portal Profiles | MEDIUM | NO — external platforms |
| 14 | Entity Authority Weak | MEDIUM | NO — Wikipedia, PR |
| 15 | AEO Not Started | MEDIUM | PARTIAL — schema/content |
| 16 | Tamil-Language GEO | LOW | SKIP — Phase 2 |

### Codebase Issues Found During Exploration (25 New)
| # | Issue | File | Severity |
|---|-------|------|----------|
| 17 | Root layout title 74 chars (limit 60) | `app/layout.tsx:15` | HIGH |
| 18 | Root layout description 294 chars (limit 155) | `app/layout.tsx:18` | HIGH |
| 19 | Google verification placeholder | `app/layout.tsx:62` | HIGH |
| 20 | Duplicate FAQPage schema on homepage | `app/page.tsx` + `components/FAQSection.tsx` | HIGH |
| 21 | Duplicate BreadcrumbList on homepage | `app/page.tsx` (inline + component) | HIGH |
| 22 | Duplicate LocalBusiness/Dentist schemas | `app/page.tsx` | MEDIUM |
| 23 | 5 city pages `use client` — zero metadata/schema | `app/salem/`, `erode/`, etc. | CRITICAL |
| 24 | `/bds` page — schema-only, NO HTML content, NO metadata | `app/bds/page.tsx` | HIGH |
| 25 | `/mds` page — schema-only, NO HTML content, NO metadata | `app/mds/page.tsx` | HIGH |
| 26 | `blog/[slug]` `use client` — zero metadata | `app/blog/[slug]/page.tsx` | MEDIUM |
| 27 | Blog index page missing H1 + metadata | `app/blog/page.tsx` | MEDIUM |
| 28 | `/best-dental-college-tamil-nadu` description 218 chars | Page file | MEDIUM |
| 29 | `/ai-dental-campus` has metadata but zero schema | Page file | MEDIUM |
| 30 | SearchAction urlTemplate blocked by robots | `app/page.tsx` + `app/robots.ts` | LOW |
| 31 | `numberOfBeds` as string "100+" | `app/page.tsx` | LOW |
| 32 | NAAC grade inconsistent "A+" vs "A" | Multiple files | HIGH |
| 33 | AggregateRating hardcoded/unverified | `app/page.tsx` | MEDIUM |
| 34 | Principal schema commented out | `app/page.tsx` | LOW |
| 35 | Duplicate `public/robots.txt` (redundant with `app/robots.ts`) | `public/robots.txt` | MEDIUM |
| 36 | Sitemap missing pages (best-dental, ai-campus) | `app/sitemap.ts` | HIGH |
| 37 | Sitemap `lastModified: now` — bad practice | `app/sitemap.ts` | MEDIUM |
| 38 | Canonical URL inconsistencies | Multiple files | MEDIUM |
| 39 | B.Ed blog post on dental site — wrong institution | `app/blog/` | LOW |
| 40 | `remotePatterns: []` — external images blocked | `next.config.ts` | MEDIUM |
| 41 | CSP `connect-src` missing Supabase | `next.config.ts` | LOW |

---

## Execution Plan — 7 Phases

### PHASE 1: Root Layout & Global Config Fixes (Zero Risk — Metadata Only)

**Goal:** Fix global metadata that affects ALL pages. Highest impact, lowest risk.

**Tasks:**

1.1. **Fix root layout title** (`app/layout.tsx:15`)
   - Current: "JKKN Dental College & Hospital | India's 1st Human-AI AGI Dental Campus" (74 chars)
   - New: "JKKN Dental College & Hospital | Best Dental College Tamil Nadu" (≤60 chars)
   - Validation: Count chars ≤ 60

1.2. **Fix root layout description** (`app/layout.tsx:18`)
   - Current: 294 chars
   - New: ≤155 chars — "JKKN Dental College & Hospital, Komarapalayam — DCI approved, NAAC accredited. BDS & MDS programs with clinical training at 200+ chair hospital. Since 1987."
   - Validation: Count chars ≤ 155

1.3. **Fix NAAC grade to "A"** across ALL files (Issues #32)
   - `app/layout.tsx:18` — says "NAAC A+" → change to "NAAC A"
   - `app/layout.tsx:30` (OG description) — same fix
   - `lib/metadata.ts:11` — says "NAAC A grade" → already correct
   - Search ALL files for "NAAC A+" and change to "NAAC A" (per CLAUDE.md: NAAC A confirmed, A+ UNVERIFIED)
   - Validation: Grep "NAAC A\+" should return 0 results after fix

1.4. **Remove Google verification placeholder** (`app/layout.tsx:62`)
   - Current: `'your-google-verification-code'`
   - Action: Remove the entire `verification` block (placeholder does nothing, may confuse)
   - Note: The real GSC verification is done via `public/googlee5e5c9d47bc383e1.html` (file exists)
   - Validation: No `your-google-verification-code` in codebase

1.5. **Delete redundant `public/robots.txt`** (Issue #35)
   - `app/robots.ts` (v4.0) takes precedence in Next.js App Router
   - `public/robots.txt` (v2.0) is outdated and redundant
   - Action: Delete `public/robots.txt`
   - Validation: Only `app/robots.ts` exists, `next build` succeeds

**Multi-Dimension Check After Phase 1:**
- [ ] `next build` compiles without errors
- [ ] All titles ≤60 chars (grep check)
- [ ] All descriptions ≤155 chars (grep check)
- [ ] NAAC consistently "A" everywhere
- [ ] No placeholder text in metadata
- [ ] `public/robots.txt` deleted, `app/robots.ts` intact

---

### PHASE 2: Homepage Schema Cleanup (Fix Duplicates — Issue #20, #21, #22)

**Goal:** Remove duplicate schemas from homepage. Currently has 11 schemas with 3 duplicates.

**Tasks:**

2.1. **Fix duplicate FAQPage schema** (Issue #20)
   - Problem: `app/page.tsx` defines `faqSchema` (7 Q&A) AND `<FAQSection>` component injects its own FAQPage schema (6 Q&A) — 2 FAQPage schemas on one page
   - Solution: Remove inline faqSchema from FAQSection.tsx — make it accept FAQs as props instead of hardcoding
   - Refactor `components/FAQSection.tsx`:
     - Accept `faqs` prop: `{ question: string; answer: string }[]`
     - Accept `includeSchema?: boolean` prop (default false)
     - Remove the hardcoded `faqs` array
     - Only render inline `<script>` if `includeSchema=true`
   - Update `app/page.tsx`:
     - Pass FAQ data as prop to `<FAQSection>`
     - Keep the single `faqSchema` in page.tsx (rendered via `<StructuredData>`)
     - Don't pass `includeSchema` (defaults to false)
   - Validation: Only ONE FAQPage schema in homepage HTML output

2.2. **Fix duplicate BreadcrumbList** (Issue #21)
   - Problem: Homepage has both inline `homeBreadcrumbSchema` AND `<BreadcrumbSchema>` component
   - Solution: Remove inline `homeBreadcrumbSchema` object, keep `<BreadcrumbSchema>` component only
   - Validation: Only ONE BreadcrumbList schema in homepage HTML output

2.3. **Fix duplicate Dentist/LocalBusiness** (Issue #22)
   - Problem: `dentistLocalSchema` AND `localBusinessSchema` are both `@type: Dentist`
   - Solution: Keep `dentistLocalSchema` (has AggregateRating), remove `localBusinessSchema`
   - Validation: Only ONE Dentist LocalBusiness schema

2.4. **Fix `numberOfBeds` data type** (Issue #31)
   - Current: `"numberOfBeds": "100+"`
   - Fix: `"numberOfBeds": 100`
   - Validation: schema.org validator passes

2.5. **Remove SearchAction or unblock /search** (Issue #30)
   - Problem: WebSite schema has SearchAction pointing to `/search?q=` but robots.ts blocks `/search/`
   - Solution: Remove SearchAction from websiteSchema (site has no actual search page)
   - Validation: No SearchAction in schema, no conflict with robots.ts

**Multi-Dimension Check After Phase 2:**
- [ ] `next build` compiles without errors
- [ ] Homepage has exactly 1 FAQPage, 1 BreadcrumbList, 1 Dentist schema
- [ ] Schema.org validator passes for all homepage schemas
- [ ] FAQSection component still renders correctly (UI not broken)
- [ ] No runtime errors in dev mode

---

### PHASE 3: City Pages Metadata (5 Pages — Issue #23)

**Goal:** Add metadata to all 5 city SEO pages that currently have ZERO metadata.

**Approach:** Create `layout.tsx` wrapper for each city page (same pattern as MDS pages).

**Tasks:**

3.1. Create `app/salem/layout.tsx` with metadata:
   - Title: "Best Dental College Near Salem | JKKN Dental College"
   - Description: ≤155 chars with Salem-specific keywords
   - Canonical: `/salem/`
   - OG tags

3.2. Create `app/erode/layout.tsx` with metadata

3.3. Create `app/namakkal/layout.tsx` with metadata

3.4. Create `app/coimbatore/layout.tsx` with metadata

3.5. Create `app/tiruppur/layout.tsx` with metadata

3.6. Add FAQ schema to each city layout (the FAQs already exist in the client pages)
   - Extract FAQ data to a shared data file or inline in layout
   - Add FAQPage JSON-LD via `<StructuredData>` in layout
   - Add BreadcrumbList schema

3.7. Add all 5 city pages to sitemap with proper trailing slashes

**Multi-Dimension Check After Phase 3:**
- [ ] `next build` compiles without errors
- [ ] Each city page has `<title>`, `<meta description>`, OG tags in HTML output
- [ ] Each city page has FAQPage + BreadcrumbList schema
- [ ] Titles ≤60 chars, descriptions ≤155 chars
- [ ] City pages appear in sitemap.xml
- [ ] UI renders correctly (layout doesn't break client page)

---

### PHASE 4: Sitemap & Structural Fixes

**Goal:** Fix sitemap, canonical URLs, and add missing pages.

**Tasks:**

4.1. **Add missing pages to sitemap** (Issue #36)
   - Add `/best-dental-college-tamil-nadu/` (priority 0.9)
   - Verify `/ai-dental-campus/` is present (already there)
   - Add `/bds/` and `/mds/` root-level pages if they serve content

4.2. **Fix `lastModified: now`** (Issue #37)
   - Replace `new Date()` with static dates per section:
   - High-frequency pages (homepage, blog): keep `new Date()` (weekly builds)
   - Static pages (committee, admin): use fixed date `new Date('2026-03-16')`
   - Validation: Not ALL entries have identical timestamps

4.3. **Fix `/best-dental-college-tamil-nadu` description** (Issue #28)
   - Current: 218 chars
   - Trim to ≤155 chars
   - Validation: Char count check

4.4. **Add Schema to `/ai-dental-campus`** (Issue #29)
   - Add EducationalOrganization schema with AI focus
   - Add BreadcrumbList schema
   - Add WebPage schema
   - Validation: schema.org validator

4.5. **Fix canonical URL inconsistencies** (Issue #38)
   - Audit all `canonical` values: ensure trailing slash consistency (since `trailingSlash: true`)
   - `app/accreditation/naac/layout.tsx` uses `'./'` — change to `/accreditation/naac/`
   - Validation: All canonical URLs are absolute paths with trailing slashes

4.6. **Fix `next.config.ts` — add Supabase to remotePatterns** (Issue #40)
   - Add Supabase hostname pattern for blog images
   - Validation: External images load without errors

4.7. **Fix CSP connect-src for Supabase** (Issue #41)
   - Add `https://*.supabase.co` to CSP connect-src
   - Validation: No CSP errors in browser console

**Multi-Dimension Check After Phase 4:**
- [ ] `next build` compiles without errors
- [ ] Sitemap contains all important pages
- [ ] All canonical URLs use consistent format
- [ ] No CSP or image loading errors
- [ ] Schema validates on all modified pages

---

### PHASE 5: Create llms.txt (Issue #12)

**Goal:** Create llms.txt for AI crawlers.

**Tasks:**

5.1. Create `public/llms.txt` with JKKN Dental College information
   - College name, programs, accreditation, location
   - Only include VERIFIED data (no [VERIFY] markers)
   - Follow llms.txt standard format
   - Validation: File accessible at /llms.txt

5.2. Add llms.txt reference to robots.ts (optional — not standard yet)

**Multi-Dimension Check After Phase 5:**
- [ ] `public/llms.txt` exists and contains valid content
- [ ] No [VERIFY] or [UPDATE] markers in the file
- [ ] All facts match `lib/metadata.ts` organizationInfo
- [ ] File is accessible in dev mode at localhost:3000/llms.txt

---

### PHASE 6: FAQSection Component Refactor (Enable Reuse)

**Goal:** Make FAQSection accept props so it can be reused across ALL pages without duplicate schemas.

**Tasks:**

6.1. **Refactor FAQSection.tsx:**
   - Accept props: `faqs: { question: string; answer: string }[]`
   - Accept optional: `includeSchema?: boolean` (default: false)
   - Accept optional: `title?: string`, `subtitle?: string`
   - Remove hardcoded FAQ data
   - Only inject JSON-LD `<script>` when `includeSchema=true`

6.2. **Update homepage (app/page.tsx):**
   - Move FAQ data to a constant
   - Pass FAQ data as prop to `<FAQSection faqs={homeFaqs} />`
   - Keep faqSchema rendered via `<StructuredData>` (not inside FAQSection)

6.3. **Update city pages (if they use FAQSection):**
   - Each city page already has inline FAQ data
   - If they render a FAQSection-like accordion, use the refactored component

**Multi-Dimension Check After Phase 6:**
- [ ] FAQSection renders correctly with props
- [ ] Homepage FAQ renders same content as before
- [ ] No duplicate FAQPage schemas anywhere
- [ ] All FAQ accordions open/close correctly
- [ ] Build succeeds

---

### PHASE 7: Blog Metadata Fix (Issue #26, #27)

**Goal:** Fix blog pages that have zero metadata.

**Tasks:**

7.1. **Fix blog index page** (`app/blog/page.tsx`)
   - Add metadata export (title, description, canonical)
   - Add H1 tag to the page
   - Add BreadcrumbList schema

7.2. **Fix dynamic blog `[slug]` page** (`app/blog/[slug]/page.tsx`)
   - If it's `use client`, create `app/blog/[slug]/layout.tsx` OR
   - Convert to server component with `generateMetadata()` for dynamic metadata
   - Add Article schema per blog post
   - Add BreadcrumbList schema

**Multi-Dimension Check After Phase 7:**
- [ ] Blog index has title, description, H1
- [ ] Blog posts have dynamic title/description from Supabase data
- [ ] Blog pages have Article + BreadcrumbList schema
- [ ] Build succeeds
- [ ] Blog posts still load correctly (Supabase data fetches work)

---

## Items NOT Fixed in Code (Require Human Action)

| # | Issue | Required Action | Who |
|---|-------|----------------|-----|
| 1 | Security Hack | Server audit, malware removal, password change | IT Security |
| 2 | Google AI Defamation | File Google AI feedback form | Director/CAIO |
| 4 | Review Crisis | Alumni outreach via WhatsApp groups | Placement Officer |
| 9 | GBP Incomplete | Create/claim Google Business Profile | SEO Team |
| 11 | Subdomain Authority | Infrastructure decision for future | Management |
| 13 | Education Portal Profiles | Complete profiles on Shiksha, etc. | SEO Team |
| 14 | Entity Authority | Wikipedia, news coverage, PR | Marketing |
| 16 | Tamil-Language GEO | Phase 2 — after English GEO done | SEO Team |
| 19 | Google Verification | Need actual GSC verification code from admin | IT/Admin |

## Items Requiring User Verification Before Fix

| # | Data Point | Question | Options |
|---|-----------|----------|---------|
| 32 | NAAC Grade | Is it "A" or "A+"? | A (per CLAUDE.md) vs A+ (per layout.tsx) |
| 33 | AggregateRating | Are 350 ratings / 280 reviews accurate? | Verify vs remove |
| 34 | Principal Name | Who is current Principal? | Need name for schema |
| 7.1 | MDS Specializations | Periodontics or Oral Pathology as 5th spec? | Confirm |
| 7.2 | Phone Numbers | Which is canonical? | +91-4288-234030 vs +91-9345855001 |

---

## Validation Protocol (After ALL Phases)

### Final Multi-Dimension Check:
1. **Build Check:** `next build` succeeds with zero errors
2. **Schema Check:** No duplicate schemas on any page (grep for `@type.*FAQPage`, `BreadcrumbList`)
3. **Metadata Check:** All pages have title ≤60, description ≤155
4. **Consistency Check:** NAAC grade same everywhere, phone number same everywhere
5. **Link Check:** All canonical URLs valid, no broken internal links
6. **Runtime Check:** `next dev` — navigate all pages, check console for errors
7. **Lighthouse Check:** Run Lighthouse on homepage, BDS, city pages
8. **Schema Validator:** Test homepage, BDS, city pages on Google Rich Results Test
9. **Sitemap Check:** All important pages in sitemap.xml
10. **Robots Check:** AI crawlers allowed, spam bots blocked
