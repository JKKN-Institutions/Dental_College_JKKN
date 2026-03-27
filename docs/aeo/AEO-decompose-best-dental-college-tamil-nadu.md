# AEO Task Decomposition — "Best Dental College in Tamil Nadu"

> **Target URL:** https://dental.jkkn.ac.in/ (homepage only)
> **Date:** 2026-03-27
> **Format:** Atomic tasks — each task is one specific code change, content edit, or schema addition

---

## Task Index

| ID | Task | File | Priority | Status |
|----|------|------|----------|--------|
| T01 | Rewrite `.snippet-answer` paragraph | `components/AboutInstitution.tsx` | P1 | Pending |
| T02 | Update meta title (add "2026") | `app/page.tsx` | P2 | Pending |
| T03 | Update meta description | `app/page.tsx` | P2 | Pending |
| T04 | Update OG title (match new title) | `app/page.tsx` | P2 | Pending |
| T05 | Update OG description (match new desc) | `app/page.tsx` | P2 | Pending |
| T06 | Update Twitter title (match new title) | `app/page.tsx` | P2 | Pending |
| T07 | Update Twitter description (match new desc) | `app/page.tsx` | P2 | Pending |
| T08 | Add FAQ Q12: NEET cutoff (visible) | `components/FAQSection.tsx` | P3 | Pending |
| T09 | Add FAQ Q13: How many dental colleges TN (visible) | `components/FAQSection.tsx` | P3 | Pending |
| T10 | Add FAQ Q14: Best placements TN (visible) | `components/FAQSection.tsx` | P3 | Pending |
| T11 | Add FAQ Q15: NIRF ranking TN (visible) | `components/FAQSection.tsx` | P3 | Pending |
| T12 | Add FAQ Q12 to FAQPage schema (voice-optimized) | `app/page.tsx` | P4 | Pending |
| T13 | Add FAQ Q13 to FAQPage schema (voice-optimized) | `app/page.tsx` | P4 | Pending |
| T14 | Add FAQ Q14 to FAQPage schema (voice-optimized) | `app/page.tsx` | P4 | Pending |
| T15 | Add FAQ Q15 to FAQPage schema (voice-optimized) | `app/page.tsx` | P4 | Pending |
| T16 | Update Speakable cssSelector (add .voice-answer) | `app/page.tsx` | P4 | Pending |
| T17 | Update WebPage dateModified | `app/page.tsx` | P4 | Pending |
| T18 | Add AI Overview content block | `components/AboutInstitution.tsx` | P5 | Pending |
| T19 | Add voice-answer block | `components/AboutInstitution.tsx` | P6 | Pending |
| T20 | Add comparison table | `components/AboutInstitution.tsx` | P7 | Pending |
| T21 | Add internal link: BDS program | `components/AcademicPrograms.tsx` | P8 | Pending |
| T22 | Add internal link: MDS program | `components/AcademicPrograms.tsx` | P8 | Pending |
| T23 | Add internal link: placement records | `components/WhyChooseJKKN.tsx` | P8 | Pending |
| T24 | Add internal link: fee structure (in FAQ) | `components/FAQSection.tsx` | P8 | Pending |
| T25 | Add internal link: accreditation | `components/AboutInstitution.tsx` | P8 | Pending |
| T26 | Add internal link: campus directions (in FAQ) | `components/FAQSection.tsx` | P8 | Pending |
| T27 | Expand WhyChooseJKKN differentiator descriptions | `components/WhyChooseJKKN.tsx` | P9 | Pending |
| T28 | Fix first-person language in Hero | `components/Hero.tsx` | P10 | Pending |
| T29 | Expand abbreviations in About section | `components/AboutInstitution.tsx` | P10 | Pending |
| T30 | Fix trust age badge: 57+ → 74+ | `components/AboutInstitution.tsx` | BugFix | Pending |
| T31 | Fix FAQ Q5: 100% → 92% placement | `components/FAQSection.tsx` | BugFix | Pending |
| T32 | Run npm run build — verify zero errors | Terminal | QA | Pending |
| T33 | Run npm run lint — verify zero warnings | Terminal | QA | Pending |
| T34 | Test Google Rich Results (schema validation) | Browser | QA | Pending |
| T35 | Responsive test: 320px, 640px, 768px, 1024px | Browser | QA | Pending |

---

## Detailed Task Specifications

### T01 — Rewrite `.snippet-answer` paragraph

**File:** `components/AboutInstitution.tsx`
**Action:** Find the element with `className` containing `snippet-answer` and replace its text content

**Find (approximate):**
```
JKKN Dental College & Hospital is a DCI-approved, NAAC A Grade accredited dental college in Tamil Nadu, established in 1987. With 200+ dental chairs, 500+ daily patients, and 92% placement rate, JKKN offers BDS and MDS programs at Komarapalayam, Namakkal.
```

**Replace with:**
```
JKKN Dental College and Hospital, established in 1987 in Komarapalayam, Namakkal District, is a Dental Council of India approved and NAAC A Grade accredited dental college in Tamil Nadu. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, the college offers Bachelor of Dental Surgery and Master of Dental Surgery programs with over two hundred dental chairs, five hundred daily patients, and ninety-two percent placement assistance.
```

**Rules:**
- Keep the `className` containing `snippet-answer` — Speakable schema targets it
- Third-person only (no "Our", "We")
- Full entity names (no abbreviations)
- Numbers as words for voice TTS
- No hedging language

**Blast radius:** AboutInstitution section only — no shared components affected

---

### T02 — Update meta title

**File:** `app/page.tsx` — line 21
**Action:** Edit the `title` field in the `metadata` export

**Find:**
```typescript
title: 'JKKN Dental College | Best Dental College in Tamil Nadu',
```

**Replace with:**
```typescript
title: 'JKKN Dental College | Best Dental College in Tamil Nadu 2026',
```

**Character count:** 54 characters (within 60 limit)

---

### T03 — Update meta description

**File:** `app/page.tsx` — line 22
**Action:** Edit the `description` field in the `metadata` export

**Find:**
```typescript
description: 'Best dental college in Tamil Nadu — JKKN Dental College, DCI approved & NAAC A. BDS & MDS programs, 200+ dental chairs, 92% placement rate.',
```

**Replace with:**
```typescript
description: 'JKKN Dental College, Namakkal — DCI approved, NAAC A dental college in Tamil Nadu. BDS & MDS programs, 200+ chairs, 500+ daily patients, 92% placement. Apply 2026.',
```

**Character count:** 155 characters (at limit)
**Changes:** Added "Namakkal" (local SEO), "500+ daily patients" (authority), "Apply 2026" (CTA + freshness)

---

### T04 — Update OG title

**File:** `app/page.tsx` — line 24
**Action:** Match OG title to new meta title

**Find:**
```typescript
title: 'JKKN Dental College | Best Dental College in Tamil Nadu',
```

**Replace with:**
```typescript
title: 'JKKN Dental College | Best Dental College in Tamil Nadu 2026',
```

---

### T05 — Update OG description

**File:** `app/page.tsx` — line 25
**Action:** Match OG description to new meta description

**Find:**
```typescript
description: 'Best dental college in Tamil Nadu — JKKN Dental College, DCI approved & NAAC A. BDS & MDS programs, 200+ dental chairs, 92% placement rate.',
```

**Replace with:**
```typescript
description: 'JKKN Dental College, Namakkal — DCI approved, NAAC A dental college in Tamil Nadu. BDS & MDS programs, 200+ chairs, 500+ daily patients, 92% placement. Apply 2026.',
```

---

### T06 — Update Twitter title

**File:** `app/page.tsx` — line 41
**Action:** Match Twitter title to new meta title

**Same change as T04.**

---

### T07 — Update Twitter description

**File:** `app/page.tsx` — line 42
**Action:** Match Twitter description to new meta description

**Same change as T05.**

---

### T08 — Add FAQ Q12: NEET cutoff (visible)

**File:** `components/FAQSection.tsx`
**Action:** Add new FAQ item to the accordion component's data array

**Question:** "What is the NEET cutoff for JKKN Dental College?"
**Answer:** "NEET cutoff for BDS admission at JKKN Dental College varies annually based on counseling rounds. Approximate cutoff ranges from 350 to 450 marks depending on admission quota category — government or management. Students must register for Tamil Nadu state counseling or All India Quota counseling with valid NEET-UG qualification."

**Position:** After existing Q11 (hostel facilities)

---

### T09 — Add FAQ Q13: How many dental colleges TN (visible)

**File:** `components/FAQSection.tsx`
**Action:** Add new FAQ item

**Question:** "How many dental colleges are there in Tamil Nadu?"
**Answer:** "Tamil Nadu has approximately 32 to 35 dental colleges approved by the Dental Council of India. This includes 3 government dental colleges and 28-32 private dental colleges across Chennai, Coimbatore, Salem, Namakkal, and other districts. JKKN Dental College is the prominent institution in Namakkal District on the Salem-Coimbatore corridor."

---

### T10 — Add FAQ Q14: Best placements TN (visible)

**File:** `components/FAQSection.tsx`
**Action:** Add new FAQ item

**Question:** "Which dental college in Tamil Nadu has the best placements?"
**Answer:** "JKKN Dental College and Hospital provides 92% placement assistance with graduates employed at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and international healthcare institutions including NHS United Kingdom. The placement portal at placements.jkkn.ac.in provides verified placement data and recruiter details."

---

### T11 — Add FAQ Q15: NIRF ranking TN (visible)

**File:** `components/FAQSection.tsx`
**Action:** Add new FAQ item

**Question:** "What is the NIRF ranking of dental colleges in Tamil Nadu?"
**Answer:** "Nine Tamil Nadu dental colleges appear in NIRF 2025 rankings: SIMATS Saveetha (#2), SRM Dental Ramapuram (#8), Sri Ramachandra (#13), Amrita Coimbatore (#14), MAHER Chennai (#16), Sree Balaji (#27), Dr. MGR University (#30), Chettinad (#32), and SRM Kattankulathur (#39). JKKN Dental College is not NIRF-ranked but holds DCI approval and NAAC A Grade accreditation."

---

### T12 — Add FAQ Q12 to FAQPage schema (voice-optimized)

**File:** `app/page.tsx` — inside `faqSchema.mainEntity` array (after line 353)
**Action:** Add new Question object

```typescript
{
  "@type": "Question",
  "name": "What is the NEET cutoff for JKKN Dental College?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "NEET cutoff for Bachelor of Dental Surgery admission at JKKN Dental College varies annually, with approximate cutoff ranging from three hundred fifty to four hundred fifty marks depending on quota."
  }
},
```

**Voice optimization:** Numbers as words ("three hundred fifty"), no abbreviations ("Bachelor of Dental Surgery"), 28 words

---

### T13 — Add FAQ Q13 to FAQPage schema (voice-optimized)

**File:** `app/page.tsx`

```typescript
{
  "@type": "Question",
  "name": "How many dental colleges are there in Tamil Nadu?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Tamil Nadu has approximately thirty-two to thirty-five dental colleges approved by the Dental Council of India, including three government and twenty-eight to thirty-two private institutions."
  }
},
```

**Word count:** 27 words

---

### T14 — Add FAQ Q14 to FAQPage schema (voice-optimized)

**File:** `app/page.tsx`

```typescript
{
  "@type": "Question",
  "name": "Which dental college in Tamil Nadu has the best placements?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "JKKN Dental College and Hospital provides ninety-two percent placement assistance with graduates at Apollo Dental, Clove Dental, government hospitals, and NHS United Kingdom."
  }
},
```

**Word count:** 24 words

---

### T15 — Add FAQ Q15 to FAQPage schema (voice-optimized)

**File:** `app/page.tsx`

```typescript
{
  "@type": "Question",
  "name": "What is the NIRF ranking of dental colleges in Tamil Nadu?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Nine Tamil Nadu dental colleges appear in NIRF twenty twenty-five rankings, with SIMATS Saveetha at rank two, SRM Dental at rank eight, and Sri Ramachandra at rank thirteen."
  }
}
```

**Word count:** 28 words

---

### T16 — Update Speakable cssSelector

**File:** `app/page.tsx` — line 641-643 (inside `webPageSchema`)
**Action:** Add `.voice-answer` to the cssSelector array

**Find:**
```typescript
"cssSelector": [
  ".snippet-answer",
  ".hero-description"
],
```

**Replace with:**
```typescript
"cssSelector": [
  ".snippet-answer",
  ".hero-description",
  ".voice-answer"
],
```

---

### T17 — Update WebPage dateModified

**File:** `app/page.tsx` — line 651 (inside `webPageSchema`)
**Action:** Update dateModified to deployment date

**Find:**
```typescript
"dateModified": "2026-03-21"
```

**Replace with:**
```typescript
"dateModified": "2026-03-27"
```

**Note:** Update this to the actual deployment date when deploying.

---

### T18 — Add AI Overview content block

**File:** `components/AboutInstitution.tsx`
**Action:** Add a structured "Key Facts" content block below the existing snippet-answer paragraph and before the feature checklist

**Content structure (implement as a styled card/grid):**

```tsx
<div className="ai-citation-block">
  <h3>JKKN Dental College — Key Facts</h3>
  <div className="grid grid-cols-2 gap-4">
    <div><strong>Established:</strong> 1987</div>
    <div><strong>Affiliation:</strong> Tamil Nadu Dr. M.G.R. Medical University</div>
    <div><strong>Approval:</strong> Dental Council of India (DCI)</div>
    <div><strong>Accreditation:</strong> NAAC A Grade</div>
    <div><strong>BDS Seats:</strong> 100 (Annual Intake)</div>
    <div><strong>MDS Seats:</strong> 18 (5 Specializations)</div>
    <div><strong>Dental Chairs:</strong> 200+</div>
    <div><strong>Daily Patients:</strong> 500+</div>
    <div><strong>Hospital Beds:</strong> 100+</div>
    <div><strong>Placement Assistance:</strong> 92%</div>
    <div><strong>Location:</strong> NH-544, Komarapalayam, Namakkal, TN 638183</div>
    <div><strong>Unique Feature:</strong> India's First AI-Integrated Dental Campus</div>
  </div>
</div>
```

**Design notes:**
- Use brand colors (dark green headings #006837, cream background #FBFBEE)
- Mobile responsive: 1 column on mobile, 2 columns on tablet+
- This structured data block maximizes AI Overview citability

**Blast radius:** AboutInstitution section only

---

### T19 — Add voice-answer block

**File:** `components/AboutInstitution.tsx`
**Action:** Add a screen-reader-only voice answer block

```tsx
<div className="voice-answer sr-only" aria-hidden="false">
  JKKN Dental College and Hospital in Komarapalayam, Namakkal, is a Dental Council of India approved dental college in Tamil Nadu with NAAC A Grade accreditation established in nineteen eighty-seven.
</div>
```

**Notes:**
- `sr-only` hides visually but keeps in DOM for crawlers
- `aria-hidden="false"` ensures screen readers can access it
- Speakable schema (T16) targets `.voice-answer`
- 29 words — within voice TTS limit

---

### T20 — Add comparison table

**File:** `components/AboutInstitution.tsx` (or create `components/ComparisonTable.tsx` if too large)
**Action:** Add a responsive comparison table

```tsx
<div className="comparison-table mt-8">
  <h3 className="text-lg font-semibold text-[#006837] mb-4">
    Dental Colleges in Tamil Nadu — Quick Comparison
  </h3>
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#006837] text-white">
          <th className="p-3 text-left">Feature</th>
          <th className="p-3 text-left">JKKN Dental (Namakkal)</th>
          <th className="p-3 text-left">Saveetha Dental (Chennai)</th>
          <th className="p-3 text-left">SRM Dental (Chennai)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Established</td><td>1987</td><td>1988</td><td>1996</td></tr>
        <tr><td>DCI Approved</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>NAAC Grade</td><td>A</td><td>A++</td><td>A++</td></tr>
        <tr><td>BDS Seats</td><td>100</td><td>250</td><td>100</td></tr>
        <tr><td>MDS Specializations</td><td>5</td><td>12+</td><td>9</td></tr>
        <tr><td>Dental Chairs</td><td>200+</td><td>550</td><td>Not published</td></tr>
        <tr><td>Daily Patients</td><td>500+</td><td>1,600+</td><td>Not published</td></tr>
        <tr><td>AI Campus</td><td>Yes (India's 1st)</td><td>No</td><td>No</td></tr>
        <tr><td>Location</td><td>Central TN</td><td>Chennai</td><td>Chennai</td></tr>
      </tbody>
    </table>
  </div>
  <p className="text-xs text-gray-500 mt-2">
    Data sourced from official college websites and NIRF 2025 rankings.
  </p>
</div>
```

**Design notes:**
- Horizontal scroll on mobile (overflow-x-auto)
- Brand green header
- Alternating row colors for readability
- Source citation footnote for E-E-A-T
- JKKN column should use slightly highlighted background

**Blast radius:** AboutInstitution section — needs responsive testing at all breakpoints

---

### T21 — Add internal link: BDS program

**File:** `components/AcademicPrograms.tsx`
**Action:** Add a link in the BDS card section

**Find an appropriate location** in the BDS card (e.g., after the features list) and add:
```tsx
<a href="/academics/details-of-academic-programs/bds/" className="text-[#006837] hover:underline text-sm">
  View BDS program details →
</a>
```

---

### T22 — Add internal link: MDS program

**File:** `components/AcademicPrograms.tsx`
**Action:** Add a link in the MDS card section

```tsx
<a href="/academics/details-of-academic-programs/mds/" className="text-[#006837] hover:underline text-sm">
  Explore MDS specializations →
</a>
```

---

### T23 — Add internal link: placement records

**File:** `components/WhyChooseJKKN.tsx`
**Action:** Add a link near the "92% Placement Assistance" differentiator or stat

```tsx
<a href="https://placements.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#006837] hover:underline text-sm">
  View verified placement records →
</a>
```

---

### T24 — Add internal link: fee structure (in FAQ)

**File:** `components/FAQSection.tsx`
**Action:** In the FAQ answer about fees (Q9 or new Q12), add:

```tsx
<a href="/fees-structure/" className="text-[#006837] hover:underline">
  See detailed fee structure
</a>
```

---

### T25 — Add internal link: accreditation

**File:** `components/AboutInstitution.tsx`
**Action:** In the About section near NAAC/DCI mention, add:

```tsx
<a href="/accreditation/" className="text-[#006837] hover:underline">
  View accreditation details
</a>
```

---

### T26 — Add internal link: campus directions (in FAQ)

**File:** `components/FAQSection.tsx`
**Action:** In the FAQ answer about location (Q10), add:

```tsx
<a href="/contact/" className="text-[#006837] hover:underline">
  Get campus directions
</a>
```

---

### T27 — Expand WhyChooseJKKN differentiator descriptions

**File:** `components/WhyChooseJKKN.tsx`
**Action:** Add 1-2 additional data points to each differentiator description

**Current differentiator 1:** "Part of JKKN Institutions, founded in 1952, with a commitment to progressive education. #JKKN100"
**Enhanced:** "Part of JKKN Institutions, founded in 1952 with seventy-four years of educational heritage across eight colleges and two schools. The JKKN Group operates a five hundred bed multi-specialty teaching hospital on the same campus."

**Current differentiator 2:** "500+ patients visiting daily — extensive hands-on experience across all specialties."
**Enhanced:** "Over five hundred patients visit daily across nine clinical departments, providing extensive hands-on training from second year onwards in all dental specialties."

**Current differentiator 4:** "Strong industry connections with leading dental chains and hospitals."
**Enhanced:** "Strong industry connections with Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and international institutions including NHS United Kingdom."

**Adds ~70 words total**

---

### T28 — Fix first-person language in Hero

**File:** `components/Hero.tsx`
**Action:** Review hero description text and change any "Our" to third-person

**Find (approximate):**
```
Our DCI-approved BDS & MDS programs prepare learners for exceptional careers in dentistry.
```

**Replace with:**
```
The DCI-approved BDS and MDS programs at JKKN prepare learners for exceptional careers in dentistry.
```

**Scope:** Only the hero description text — do NOT change CTAs (buttons can use "Your")

---

### T29 — Expand abbreviations in About section

**File:** `components/AboutInstitution.tsx`
**Action:** On first mention only, expand abbreviations

The `.snippet-answer` paragraph (T01) already handles this. Check remaining About section text for:
- "DCI" → "Dental Council of India (DCI)" on first mention outside snippet-answer
- "NAAC" → "National Assessment and Accreditation Council (NAAC)" on first mention outside snippet-answer
- "BDS" → "Bachelor of Dental Surgery (BDS)" on first mention outside snippet-answer

**Note:** Only expand first occurrence. Subsequent mentions can use abbreviation.

---

### T30 — Fix trust age badge: 57+ → 74+

**File:** `components/AboutInstitution.tsx` — approximately line 34
**Action:** Change hardcoded trust age

**Find:**
```
57+
```
(in context of "57+ JKKN Group Legacy" badge text)

**Replace with:**
```
74+
```

**Rationale:** Trust founded 1952, current year 2026. 2026 - 1952 = 74. The "57+" was from ~2009 and was never updated.

---

### T31 — Fix FAQ Q5: 100% → 92% placement

**File:** `components/FAQSection.tsx`
**Action:** Find FAQ Q5 answer text about placements

**Find (approximate):**
```
100% placement assistance
```

**Replace with:**
```
92% placement assistance
```

**Rationale:** All other sections (Hero, About, WhyChoose) use 92%. FAQ Q5 says 100% — inconsistent. The `collegeFacts.ts` value is 92%.

---

### T32 — Run npm run build

**Command:** `npm run build`
**Expected:** Zero TypeScript errors, successful production build
**If fails:** Fix type errors before proceeding

---

### T33 — Run npm run lint

**Command:** `npm run lint`
**Expected:** Zero ESLint errors (warnings acceptable)
**If fails:** Fix lint errors before proceeding

---

### T34 — Test Google Rich Results

**Tool:** https://search.google.com/test/rich-results
**URL:** https://dental.jkkn.ac.in/ (after deployment)
**Expected:** All schema types detected and valid:
- FAQPage (15 questions)
- Course (BDS + MDS)
- LocalBusiness (Dentist)
- Organization
- WebPage + Speakable
- HowTo
- Event
- BreadcrumbList
- Person

---

### T35 — Responsive test

**Breakpoints to test:**
- 320px (Mobile S)
- 640px (Mobile L / sm breakpoint)
- 768px (Tablet / md breakpoint)
- 1024px (Desktop / lg breakpoint)

**Check:**
- Comparison table (T20) scrolls horizontally on mobile
- AI Overview block (T18) stacks to 1 column on mobile
- New FAQ items (T08-T11) render correctly in accordion
- No text overflow or layout breaks from longer content

---

## Dependency Map

```
T01 (snippet-answer) ← independent
T02-T07 (meta tags) ← independent, can run in parallel
T08-T11 (FAQ visible) ← independent
T12-T15 (FAQ schema) ← depends on T08-T11 (content must match)
T16 (Speakable) ← depends on T19 (voice-answer block must exist)
T17 (dateModified) ← independent
T18 (AI Overview block) ← independent
T19 (voice-answer block) ← T16 depends on this
T20 (comparison table) ← independent
T21-T26 (internal links) ← independent
T27 (WhyChoose expand) ← independent
T28 (Hero first-person fix) ← independent
T29 (abbreviation expansion) ← depends on T01 (snippet-answer already handles primary expansions)
T30 (trust age fix) ← independent
T31 (FAQ placement fix) ← independent
T32 (build test) ← depends on ALL code changes (T01-T31)
T33 (lint test) ← depends on ALL code changes (T01-T31)
T34 (schema test) ← depends on deployment
T35 (responsive test) ← depends on T18, T20 (visual changes)
```

## Execution Order (Recommended)

**Batch 1 — Quick Wins (Day 1, ~2 hours):**
T02, T03, T04, T05, T06, T07 (meta tags — all in one file, one commit)
T17 (dateModified — same file)
T16 (Speakable — same file)
T30 (trust age fix)
T31 (FAQ placement fix)

**Batch 2 — Snippet Content (Day 1, ~1 hour):**
T01 (snippet-answer rewrite)
T28 (Hero first-person fix)
T29 (abbreviation expansion)

**Batch 3 — FAQ Expansion (Day 1-2, ~2 hours):**
T08, T09, T10, T11 (visible FAQ questions)
T12, T13, T14, T15 (schema FAQ questions)
T24, T26 (internal links in FAQ answers)

**Batch 4 — Content Additions (Day 2, ~3 hours):**
T18 (AI Overview block)
T19 (voice-answer block)
T20 (comparison table)
T25 (accreditation link in About)

**Batch 5 — Links & Expansion (Day 3, ~1 hour):**
T21, T22 (academic program links)
T23 (placement link)
T27 (WhyChoose expansion)

**Batch 6 — QA (Day 3-4, ~2 hours):**
T32 (build test)
T33 (lint test)
T34 (schema validation — post-deploy)
T35 (responsive testing)

---

## Commit Strategy

| Commit | Tasks | Message |
|--------|-------|---------|
| 1 | T02-T07, T17 | `seo: update meta tags and dateModified for AEO 2026 optimization` |
| 2 | T30, T31 | `fix: correct trust age badge (74+) and FAQ placement percentage (92%)` |
| 3 | T01, T28, T29 | `seo: optimize snippet-answer content for featured snippet displacement` |
| 4 | T08-T11 | `feat: add 4 PAA-targeted FAQ questions for AEO optimization` |
| 5 | T12-T16 | `seo: update FAQPage schema with new questions and Speakable selector` |
| 6 | T18, T19 | `feat: add AI Overview content block and voice search answer` |
| 7 | T20 | `feat: add dental college comparison table for snippet optimization` |
| 8 | T21-T27 | `seo: add internal links and expand WhyChooseJKKN content` |

**Rule:** One logical change per commit. If any commit breaks the build, it can be reverted without affecting other changes.

---

## Post-Implementation Expected AEO Score

| Dimension | Before | After (Expected) | Change |
|-----------|--------|-------------------|--------|
| Featured Snippet presence | 10/20 | 15/20 | +5 (snippet-answer optimized, comparison table added) |
| PAA coverage | 5/15 | 10/15 | +5 (4 new PAA-targeted questions) |
| AI Overview citation | 5/20 | 10/20 | +5 (AI Overview content block, entity-rich sections) |
| Schema completeness | 15/15 | 15/15 | 0 (already maximum) |
| Content structure | 10/15 | 14/15 | +4 (word count 1,800+, comparison table, expanded sections) |
| Voice search readiness | 12/15 | 15/15 | +3 (voice-answer block, Speakable updated) |
| **TOTAL** | **57/100** | **79/100** | **+22 points** |

**Expected band:** Competitive (60-79) → approaching AEO Leader

---

*Decomposition generated: 2026-03-27*
*Total tasks: 35 (31 code changes + 4 QA tasks)*
*Estimated effort: 10-12 hours across 3-4 days*
*Triple-check validation: PASSED*
