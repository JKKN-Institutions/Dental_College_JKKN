# MDS Page Optimization Plan — Phase-Wise Implementation Roadmap

> **Reference Spec:** `mds-page-optimization-spec.md`
> **Target Page:** `/academics/details-of-academic-programs/mds/`
> **Primary Goal:** #1 Google ranking for `mds colleges in tamilnadu` + AI citation dominance
> **Plan Horizon:** 12 weeks (3-month sprint) + 12-month sustain
> **Updated:** 2026-04-09

---

## PLAN OVERVIEW

| Phase | Duration | Objective | Exit Criteria |
|-------|----------|-----------|---------------|
| **Phase 1: Foundation** | Week 1 | Fix P0 technical + schema gaps | All critical schemas live, H1 updated, FAQPage active |
| **Phase 2: Content Expansion** | Week 2–3 | Expand to 3,500+ words with tables, direct answers | Word count hit, 4 tables live, 20 PAA covered |
| **Phase 3: Entity & Authority** | Week 4–5 | Boost E-E-A-T, entity signals, internal linking | EducationalOrganization schema, 25+ internal links, sameAs complete |
| **Phase 4: AEO Deep-Dive** | Week 6–7 | Optimize for snippets, AI Overview, voice | 5 snippet-eligible blocks, 20 PAA covered, speakable ready |
| **Phase 5: GEO & AI Distribution** | Week 8–12 | Multi-platform AI visibility, backlinks, monitoring | Cited in 2+ AI platforms, 10 backlinks, rank tracking live |

---

## PHASE 1 — FOUNDATION (Week 1)

### Goal
Fix all P0 technical and schema gaps. Establish schema baseline before content work. No content expansion yet — just structural fixes.

### Deliverables
1. H1 rewrite with primary keyword
2. FAQPage JSON-LD schema added
3. EducationalOrganization schema added
4. LocalBusiness schema added
5. Course schema enriched (offers, provider address, educationalLevel)
6. LCP optimization (preload hero image)
7. "Last updated" timestamp added

### Step-by-Step

**Step 1.1 — H1 Rewrite (Day 1, 30 min)**
- File: `app/academics/details-of-academic-programs/mds/page.tsx` line 71
- Current: `Master of Dental Surgery (MDS)`
- New: `MDS Colleges in Tamil Nadu — JKKN Dental College Admissions 2026`
- Validate: Visual check on dev server at localhost:3000
- Test: All breakpoints (320px, 640px, 1024px, 1536px)

**Step 1.2 — FAQPage Schema (Day 1, 1 hour)**
- File: `app/academics/details-of-academic-programs/mds/page.tsx`
- Add: New `faqSchema` object after existing `mdsSchema`
- Add: `<StructuredData data={faqSchema} />` after existing StructuredData calls
- Source: Extract the 5 FAQs already in the page (lines 705–757)
- Validate: Run https://validator.schema.org/ on generated JSON-LD
- Validate: Check Google Rich Results Test

**Step 1.3 — EducationalOrganization Schema (Day 2, 1 hour)**
- File: `lib/metadata.ts`
- Add: New helper `generateEducationalOrganizationSchema()` (reusable across all course pages)
- Data source: `data/collegeFacts.ts` + `data/content.ts`
- Required fields: @type, name, url, logo, description, address (PostalAddress), contactPoint, sameAs, founder, foundingDate, hasCredential, alumni (optional)
- Import: Use in `app/academics/details-of-academic-programs/mds/page.tsx`
- Validate: Schema validator

**Step 1.4 — LocalBusiness Schema (Day 2, 45 min)**
- File: `lib/metadata.ts`
- Add: `generateLocalBusinessSchema()` helper (reusable)
- Required fields: @type=Dentist, name, image, address, geo, telephone, url, openingHours, priceRange, aggregateRating (if data available)
- Import: Use in MDS page
- Validate: Schema validator + https://search.google.com/test/rich-results

**Step 1.5 — Course Schema Enrichment (Day 3, 45 min)**
- File: `app/academics/details-of-academic-programs/mds/page.tsx` (lines 10–31)
- Add fields: `offers` (Offer object with fees), `educationalLevel` ("Postgraduate"), `timeToComplete` ("P3Y" — already present as `timeRequired`), `numberOfCredits`, `educationalProgramMode` ("onsite"), `courseCode` ("MDS"), `provider.address` (PostalAddress)
- Add: `aggregateRating` placeholder (to be filled when reviews are collected)
- Validate: Rich Results Test for Course

**Step 1.6 — LCP Optimization (Day 3, 30 min)**
- File: `app/academics/details-of-academic-programs/mds/page.tsx` (hero section around line 62)
- Current issue: LCP at 2.6s (just over 2.5s threshold)
- Fix: Ensure hero image (if any) has `priority={true}` on Next.js `<Image />`
- Alternative: Preload critical font
- Test: Re-run PageSpeed Insights after deploy

**Step 1.7 — "Last Updated" Timestamp (Day 4, 15 min)**
- File: `app/academics/details-of-academic-programs/mds/page.tsx`
- Add: Small visible timestamp near H1 "Last updated: April 2026"
- Add: `dateModified` field to Course schema and WebPage schema
- Value: Current date in ISO format (auto-update via build time or manual)

**Step 1.8 — Phase 1 Validation Checkpoint (Day 5, 2 hours)**
- Run `npm run build` — verify no TypeScript errors
- Run `npm run lint` — no ESLint warnings
- Deploy to staging or dev environment
- Validate all 6 schemas at https://validator.schema.org/
- Run Google Rich Results Test
- PageSpeed Insights re-test — verify LCP improved
- Visual QA at all breakpoints

### Phase 1 Approval Checkpoint
- ✓ All schemas validate
- ✓ H1 contains primary keyword
- ✓ No visual regressions
- ✓ PageSpeed ≥96 on mobile
- ✓ LCP ≤2.5s

**→ Proceed to Phase 2 only after approval.**

---

## PHASE 2 — CONTENT EXPANSION (Week 2–3)

### Goal
Expand content from 1,121 → 3,500+ words with 4 data tables, 8 direct-answer blocks, and comprehensive PAA coverage.

### Deliverables
1. 4 comparison tables (fees, seats, specializations, JKKN vs top 5)
2. Expanded About MDS section (500 words)
3. Expanded NEET MDS Admission Process section (600 words, step-by-step)
4. 8 direct-answer blocks for featured snippets
5. 15 additional FAQs (total 20)
6. "Why JKKN for MDS?" section with data
7. 7 rewritten H2s with keyword targeting

### Step-by-Step

**Step 2.1 — New Data Tables Component (Day 6–7, 4 hours)**
- File: `components/MDSComparisonTables.tsx` (NEW)
- Use: `"use client"` only if needed (prefer server component)
- Tables to build:
  - **Table 1:** Top 10 MDS colleges in Tamil Nadu (Name, Location, Type, Seats, Fee Range)
  - **Table 2:** MDS fees comparison (College, Govt Quota, Management Quota, NRI)
  - **Table 3:** Seat matrix (Specialization, Total Seats across TN, JKKN seats)
  - **Table 4:** JKKN vs Top 5 TN MDS colleges (Metric, JKKN, Saveetha, Sri Ramachandra, SRM, Meenakshi)
- Styling: Brand colors only (#7cb983, #006837, #FBFBEE)
- Responsive: Stack on mobile, scroll on tablet, full width on desktop
- Import & render on MDS page

**Step 2.2 — Rewrite H2s with Keyword Targeting (Day 8, 1 hour)**
| Old H2 | New H2 |
|--------|--------|
| MDS Clinical Excellence (hero) | Keep as branding overlay |
| Advanced Dental Education (about box) | Keep as branding overlay |
| What is MDS (Master of Dental Surgery)? | **What is MDS? A Guide to Master of Dental Surgery in Tamil Nadu** |
| Choose Your Specialization Path | **MDS Specializations Offered in Tamil Nadu at JKKN** |
| MDS Program Highlights | **Why Choose JKKN Among MDS Colleges in Tamil Nadu** |
| World-Class Facilities | **MDS Clinical Facilities at JKKN Dental College, Tamil Nadu** |
| Admission Information | **MDS Admission Process & Eligibility in Tamil Nadu** |
| Frequently Asked Questions | **MDS Tamil Nadu — Frequently Asked Questions** |
| Accreditation | **DCI & NAAC Accreditation** |
| Ready to Specialize | **Apply for MDS at JKKN Dental College** |

**Step 2.3 — Expand "About MDS" Section (Day 9, 3 hours)**
- File: `app/academics/details-of-academic-programs/mds/page.tsx` (About section)
- Expand from ~150 words → 500 words
- Include: Definition, history in TN, specialization overview, career scope, DCI recognition, TN context (32 colleges, 3 govt, 17–23 private)
- Keyword density target: 1.5–2% for primary keyword, 0.5–1% for secondary
- Natural insertion — no stuffing

**Step 2.4 — Expand NEET MDS Admission Process (Day 10, 3 hours)**
- New dedicated section (new H2)
- 600 words step-by-step
- Include: NEET MDS eligibility (bullet list), exam pattern, cutoff history, counselling (MCC + state), document checklist, management quota process, fee structure
- Format: Numbered list for process (snippet-ready)

**Step 2.5 — Direct Answer Blocks (Day 11, 3 hours)**
- Create new component `components/DirectAnswerBlock.tsx` (reusable)
- Props: `question`, `answer`, `className`
- Styling: Highlighted callout box with brand colors
- Content: 8 blocks (40–55 words each) — see spec file section 4.5
- Placement: Distributed throughout content where relevant

**Step 2.6 — "Why JKKN for MDS?" Section (Day 12, 2 hours)**
- New H2 section
- Data-driven content
- 400 words
- Include: 200+ chairs, 100+ beds, 500+ daily patients, DCI approval, NAAC status, 5 specializations, 3-year curriculum, research exposure, faculty-to-student ratio, clinical case load
- Visual: Stats grid (already exists in hero, extend)

**Step 2.7 — Add 15 More FAQs (Day 13, 3 hours)**
- File: Existing FAQ section in `mds/page.tsx`
- Expand from 5 → 20 FAQs
- Each FAQ: Question + 40–80 word answer
- Source: See spec file Section 4.2 (Top 20 PAA questions)
- Update `faqSchema` JSON-LD to include all 20

**Step 2.8 — Phase 2 Validation Checkpoint (Day 14, 2 hours)**
- Word count check: `/mds/` page ≥3,500 words
- Tables render correctly on all breakpoints
- Direct answer blocks are snippet-ready (40–55 words)
- All 20 FAQs render + schema validates
- `npm run build` passes
- Visual QA

### Phase 2 Approval Checkpoint
- ✓ Word count ≥3,500
- ✓ 4 tables live
- ✓ 20 FAQs with schema
- ✓ 8 direct-answer blocks
- ✓ H2s rewritten
- ✓ No regressions

**→ Proceed to Phase 3 only after approval.**

---

## PHASE 3 — ENTITY & AUTHORITY (Week 4–5)

### Goal
Boost E-E-A-T signals, entity authority, and internal linking to support ranking strength.

### Deliverables
1. Author/faculty byline on page
2. 25+ internal links with keyword-rich anchors
3. 15+ additional images with keyword alt text
4. 5 alumni testimonials block
5. Research publication highlights
6. sameAs array in EducationalOrganization schema (social profiles)
7. Faculty cards (3 MDS program faculty)
8. Placement outcomes section

### Step-by-Step

**Step 3.1 — Faculty Byline (Day 15, 1 hour)**
- File: MDS page.tsx
- Add: "Reviewed by: Dr. {Name}, HOD {Department}" near top
- Link to faculty profile page
- Add: Author Person schema

**Step 3.2 — Internal Linking Plan (Day 16, 3 hours)**
- Add 25+ contextual links within body copy to:
  - /academics/details-of-academic-programs/mds/periodontics/
  - /academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics/
  - /academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/
  - /academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/
  - /academics/details-of-academic-programs/mds/oral-medicine/
  - /academics/details-of-academic-programs/bds/ (related program)
  - /admissions/ (admission page)
  - /fees-structure/ (fees page)
  - /facilities/ (hospital facilities)
  - /accreditation/ (accreditation details)
  - /research/ (research page)
  - /about/ (about college)
  - /erode/, /salem/, /coimbatore/, /namakkal/, /tiruppur/ (geo pages)
  - /blog/ (if MDS-related posts exist)
  - /contact/ (contact page)
- Anchor text variations — not all identical (avoid over-optimization)

**Step 3.3 — Image Expansion (Day 17, 4 hours)**
- Add 15 images to MDS page
- Image types: Hospital facility photos, clinical training, faculty, lab equipment, specialization icons, campus shots
- All alt text: Keyword-rich + descriptive (e.g., "MDS Periodontics clinical training at JKKN Dental College, Tamil Nadu")
- All `<Image />` from Next.js with proper width/height
- Lazy-load all except hero

**Step 3.4 — Testimonials Block (Day 18, 2 hours)**
- New component: `components/MDSTestimonials.tsx`
- 5 alumni testimonials (placeholder or real once collected)
- Each: Name, photo, batch year, specialization, quote, current role
- Review schema for each
- Import in MDS page

**Step 3.5 — Research Publications Section (Day 19, 2 hours)**
- New H3 within "Why JKKN" or new section
- Highlight 3–5 recent MDS faculty publications
- Link to research page
- Format: Card-style or list

**Step 3.6 — Social Profiles sameAs (Day 20, 1 hour)**
- File: `lib/metadata.ts` → `generateEducationalOrganizationSchema()`
- Add sameAs array:
  - Facebook
  - LinkedIn
  - Instagram
  - YouTube
  - Twitter/X
  - Wikipedia (once live)
  - Wikidata
  - Google Business Profile (maps.app.goo.gl)
  - JKKN main site

**Step 3.7 — Faculty Cards (Day 21, 2 hours)**
- New component or extend existing faculty component
- 3 MDS program faculty cards
- Each: Photo, name, designation, qualifications, specialization, experience
- Person schema for each
- Link to full faculty page

**Step 3.8 — Placement Outcomes Section (Day 22, 2 hours)**
- New section with H2
- MDS placement data (once available)
- Include: Placement percentage, top recruiters, salary range, international placements, private practice rates
- Flag `[UNVERIFIED — Data gap]` if not available

**Step 3.9 — Phase 3 Validation Checkpoint (Day 23, 2 hours)**
- Crawl site to verify all internal links work
- Schema validation — Organization, Person, Review all valid
- Image optimization check (WebP where possible)
- PageSpeed re-test
- Visual QA

### Phase 3 Approval Checkpoint
- ✓ 25+ internal links, all working
- ✓ 15+ images with keyword alt text
- ✓ Testimonials + Review schema
- ✓ Faculty cards + Person schema
- ✓ sameAs array complete
- ✓ No speed regressions

**→ Proceed to Phase 4 only after approval.**

---

## PHASE 4 — AEO DEEP-DIVE (Week 6–7)

### Goal
Optimize for featured snippets, PAA, AI Overview, and voice search. Fine-tune content for machine-readability.

### Deliverables
1. Snippet-eligible content blocks (all 5 types)
2. HowTo schema for admission process
3. VideoObject schema (if video exists)
4. Voice-search optimization (question-based structure)
5. Speakable schema expansion
6. Enhanced conversational tone

### Step-by-Step

**Step 4.1 — Snippet Block Audit & Fixes (Day 24–25, 6 hours)**
- Audit each direct-answer block for snippet eligibility:
  - Paragraph snippet: 40–55 words
  - List snippet: Proper `<ul>` or `<ol>`
  - Table snippet: Proper `<table>` with `<th>`
  - Definition snippet: "X is Y" format
- Place answer immediately after H2 question (no intro fluff)
- Test each block against current top-ranking snippets

**Step 4.2 — HowTo Schema for Admission Process (Day 26, 2 hours)**
- Convert admission process section into HowTo schema
- Each step: name, text, image (optional), url
- Target: "How to get MDS admission in Tamil Nadu" featured snippet

**Step 4.3 — VideoObject Schema (Day 27, 2 hours)**
- If MDS program video exists → embed + add VideoObject schema
- If not: Create task to produce video (deferred to VEO workstream)
- Schema: name, description, thumbnailUrl, uploadDate, duration, contentUrl, embedUrl

**Step 4.4 — Voice Search Optimization (Day 28, 2 hours)**
- Add 5 more question-based H3s throughout content
- Rewrite opening paragraphs of sections in conversational tone
- Target long-tail voice queries: "Hey Google, which is the best MDS college in Tamil Nadu?"

**Step 4.5 — Speakable Schema Expansion (Day 29, 1 hour)**
- File: `lib/metadata.ts` → `generateSpeakableWebPageSchema()`
- Expand CSS selectors: Include H2s, direct answer blocks, FAQ answers
- Test with Google's speakable testing tool (if available)

**Step 4.6 — Phase 4 Validation Checkpoint (Day 30, 2 hours)**
- Test snippet blocks using manual Google search
- Schema validation for HowTo, VideoObject, Speakable
- PageSpeed check
- Visual QA

### Phase 4 Approval Checkpoint
- ✓ All snippet blocks eligible
- ✓ HowTo schema valid
- ✓ Voice search structure in place
- ✓ Speakable expanded
- ✓ No regressions

**→ Proceed to Phase 5.**

---

## PHASE 5 — GEO & AI DISTRIBUTION (Week 8–12)

### Goal
Establish multi-platform AI visibility, build backlinks, set up continuous monitoring and rank tracking.

### Deliverables
1. Backlink outreach campaign (10 target sites)
2. Wikipedia page live (if not already)
3. AI citation monitoring setup (weekly)
4. Rank tracking dashboard
5. GBP update with MDS course category
6. Social media distribution (4 platforms)
7. First blog post targeting related keyword ("best mds college in tamil nadu")

### Step-by-Step

**Step 5.1 — Backlink Outreach (Week 8–9, 15 hours)**
- Target 10 high-authority sites for backlinks:
  - Education blogs (EducationTimes, Careers360 editorial)
  - Dental industry sites (IDA publications, DCI)
  - Local news (Dinamalar, The Hindu Tamil Nadu)
  - University partnerships (MGRMU)
  - Alumni network sites
- Outreach template in `docs/backlink-outreach-templates.md` (create if missing)
- Track responses in `memory/projects.md`

**Step 5.2 — Wikipedia Integration (Week 9, 3 hours)**
- Status: In progress per `WIKIPEDIA_CREATION_GUIDE_JKKN_DENTAL.md`
- Finalize and submit Wikipedia draft
- Once live: Add to sameAs schema
- Link MDS page as external reference

**Step 5.3 — AI Citation Monitoring Setup (Week 9, 2 hours)**
- Set up weekly AI citation checks (ChatGPT, Perplexity, Gemini, Bing Copilot)
- Track citation rate for queries: "best mds college tamil nadu", "mds colleges in tamilnadu", "mds fees tamil nadu", etc.
- Store data in `docs/ai-citation-tracker.csv`
- Re-run after Gemini quota reset

**Step 5.4 — Rank Tracking Dashboard (Week 10, 3 hours)**
- Set up rank tracking via GSC API + Serper MCP
- Keywords to track (20): primary + secondary + long-tail
- Weekly snapshot in `docs/rank-tracker.csv`
- Dashboard: Simple markdown report

**Step 5.5 — GBP Update (Week 10, 1 hour)**
- Google Business Profile: Add MDS course as service
- Add MDS-specific posts
- Upload MDS facility photos
- Link: https://maps.app.goo.gl/mXx6rFRqpS9U76BK6

**Step 5.6 — Social Distribution (Week 11, 4 hours)**
- Create social posts for 4 platforms (Facebook, Instagram, LinkedIn, YouTube)
- Each post: Link to /mds/ page + data snippet from tables
- Schedule via content calendar
- Use `social-content` skill

**Step 5.7 — Related Blog Post (Week 12, 6 hours)**
- Topic: "Top 10 MDS Colleges in Tamil Nadu 2026: Fees, Seats, Admission Guide"
- Use `seo-blog` skill
- Target: `best mds college in tamil nadu`
- Internal link to main MDS page
- 2,000+ words with tables
- Publish + submit to GSC

**Step 5.8 — Final Phase 5 Validation (End of Week 12)**
- Full re-audit (repeat Phase 0 data collection)
- Compare scores: Baseline 57 → Target 90+
- Rank check: Primary keyword position
- AI citation check: Cited in 2+ platforms
- Backlink count: 10+ new

### Phase 5 Approval Checkpoint
- ✓ 10+ new backlinks
- ✓ Wikipedia live
- ✓ AI citations ≥2 platforms
- ✓ Rank tracking active
- ✓ GBP updated
- ✓ Social posts live
- ✓ Related blog published
- ✓ Overall optimization score ≥90/100

---

## ROLLBACK PLAN

### Rollback Triggers
1. Ranking drops >10 positions for any tracked keyword
2. PageSpeed drops below 85 on mobile
3. Schema validation errors
4. Traffic drops >20% week-over-week
5. Conversion rate drops >50%

### Rollback Procedure
1. **Immediate:** Revert last commit via git
2. **Verify:** Production deployment reverted, pages load correctly
3. **Diagnose:** Which change caused the issue (bisect)
4. **Fix:** Address root cause in staging
5. **Re-deploy:** Only after validation
6. **Document:** Add to "Failed Approaches" in `PROGRESS.md`

### Git Safety
- Every phase = separate commit with clear message
- Tag each phase completion: `git tag phase-1-complete`, etc.
- Never force-push to main
- All changes go through `npm run build` before commit

---

## DEPENDENCIES & BLOCKERS

### Hard Dependencies (Block Phase 2 if missing)
1. Phase 1 schema validation passing
2. Design approval for table components
3. `data/collegeFacts.ts` updated with MDS-specific facts

### Soft Dependencies (Delay but not block)
1. Faculty byline info (content gap)
2. Alumni testimonials (content gap)
3. Research publication list (content gap)
4. Wikipedia page live
5. MDS program video

### External Dependencies
1. Gemini API quota reset (for AI citation checks)
2. GSC data access (for rank tracking)
3. Backlink outreach responses (for Phase 5)

---

## RESOURCES REQUIRED

### Human
- Developer: 60–80 hours total across 12 weeks
- Content writer: 20 hours (can be Claude + human review)
- Designer: 8 hours (table styling, testimonial cards)
- SEO strategist: 10 hours (keyword refinement, link strategy)

### Tools
- **MCP Tools in use:** firecrawl, serper, website-auditor, ai-citation-monitor, tavily, context7, playwright, schema-markup-generator
- **Skills in use:** seo-audit, aeo, geo, schema, content-calendar, seo-blog, site-architecture
- **External:** Google Search Console, Google Analytics 4, Schema Validator, PageSpeed Insights

### Budget
- Paid tools (if any): $0 — all free-tier
- Backlink outreach: Manual, $0
- Content: Internal + Claude, $0

---

## APPROVAL CHECKPOINTS SUMMARY

| Phase | Checkpoint | Approver |
|-------|-----------|----------|
| After Phase 1 | Schema + H1 live, no regressions | Digital Strategist + User |
| After Phase 2 | Content expanded, tables live | User |
| After Phase 3 | Internal linking + E-E-A-T complete | User |
| After Phase 4 | Snippet-ready blocks deployed | User |
| After Phase 5 | Full campaign complete, KPI review | User |

---

## TIMELINE OVERVIEW

```
Week 1:  Phase 1 — Foundation (schemas, H1)
Week 2:  Phase 2 — Content Expansion (tables, direct answers)
Week 3:  Phase 2 continued (FAQs, why JKKN)
Week 4:  Phase 3 — Entity & Authority (internal links)
Week 5:  Phase 3 continued (testimonials, faculty)
Week 6:  Phase 4 — AEO Deep-Dive (snippets)
Week 7:  Phase 4 continued (HowTo, voice)
Week 8:  Phase 5 — Backlink outreach starts
Week 9:  Phase 5 — Wikipedia + AI monitoring
Week 10: Phase 5 — Rank tracking + GBP
Week 11: Phase 5 — Social distribution
Week 12: Phase 5 — Related blog post + final audit
```

### Sprint Cadence
- **Daily standup (mental):** Check PROGRESS.md, pick next task
- **Weekly review:** Update PROGRESS.md, close out week, plan next week
- **Phase gate:** Full validation checkpoint before proceeding

---

## POST-LAUNCH SUSTAIN (Month 4–12)

After Week 12, shift to **sustain mode:**

| Activity | Frequency |
|----------|-----------|
| Rank check | Weekly |
| AI citation check | Weekly |
| Content refresh | Monthly (update fees, seats, dates) |
| New backlinks | Bi-weekly |
| New FAQ additions | Monthly (based on new PAA discoveries) |
| Competitor re-audit | Quarterly |
| Full Phase 0–3 re-audit | Every 6 months |
| Blog post (related keyword) | Monthly |
| Social distribution | Weekly |

---

## TRIPLE-CHECK VALIDATION

### Pass 1 — Completeness ✓
- [x] All 5 phases defined with goals, deliverables, steps
- [x] Dependencies mapped
- [x] Rollback plan documented
- [x] Approval checkpoints defined
- [x] Resources & timeline clear

### Pass 2 — Accuracy ✓
- [x] Aligned with spec file gap matrix
- [x] Effort estimates reasonable
- [x] File paths accurate (verified against project structure)
- [x] No contradiction with project CLAUDE.md constraints

### Pass 3 — Actionability ✓
- [x] Every step has specific file paths and actions
- [x] Every phase has exit criteria
- [x] Rollback procedure clear
- [x] KPIs measurable

**Triple-check validation: PASSED**

---

**Next:** See `mds-page-optimization-tasks.md` for granular task breakdown with task IDs, dependencies, acceptance criteria, and code snippets.
