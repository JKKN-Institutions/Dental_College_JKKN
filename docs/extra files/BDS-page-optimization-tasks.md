# BDS Page Optimization — TASKS FILE

> **Page:** https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/
> **Primary Keyword:** "best bds colleges in tamilnadu"
> **Created:** 2026-04-08
> **Total Tasks:** 52 | **Estimated Total Effort:** 70-90 hours

---

## TASK PRIORITY LEGEND

| Priority | Meaning | Timeline |
|----------|---------|---------|
| **P0** | Critical blocker — #1 ranking impossible without this | Fix within 48 hours |
| **P1** | High impact — significant ranking improvement | Fix within 1 week |
| **P2** | Medium impact — incremental gains | Fix within 1 month |
| **P3** | Nice to have — long-term improvement | Backlog |

---

## QUICK REFERENCE — TOP 10 QUICK WINS

These can each be done in under 30 minutes with high impact:

| # | Task | Time | Impact |
|---|------|------|--------|
| 1 | Add canonical tag to layout.tsx | 5 min | Fixes duplicate content risk |
| 2 | Rewrite H1 with target keyword | 5 min | Biggest on-page ranking signal |
| 3 | Add primary keyword 3-5x in body | 15 min | Confirms topical relevance |
| 4 | Fix 4 image alt texts | 10 min | Image SEO + accessibility |
| 5 | Add "Updated April 2026" freshness signal | 5 min | Freshness ranking factor |
| 6 | Change OG type to "article" | 2 min | Better social signal |
| 7 | Register Wikidata entity | 30 min | Knowledge Graph + AI visibility |
| 8 | Add 10 internal links | 20 min | PageRank flow + topical authority |
| 9 | Rewrite 4 marketing H2s to keyword H2s | 10 min | Heading hierarchy optimization |
| 10 | Add geographic distances paragraph | 15 min | Local search capture |

---

## SEO TASKS

### SEO-001: Fix Sitemap.xml 404 Error
- **Priority:** P0
- **Effort:** 2-4 hours
- **Dependency:** None
- **Assignee:** Developer

**Description:** `https://dental.jkkn.ac.in/sitemap.xml` returns 404. The `app/sitemap.ts` file exists (227 lines) and generates a dynamic sitemap, but the route isn't serving correctly in production.

**Implementation Steps:**
1. Run `npm run dev` and test `http://localhost:3000/sitemap.xml` — does it work locally?
2. If local works but production doesn't:
   - Check `next.config.ts` for any rewrites/redirects affecting `/sitemap.xml`
   - Check if `app/sitemap.ts` exports the correct function signature for Next.js 16
   - Verify the file generates valid XML (no TypeScript errors)
3. If local also fails:
   - Check `app/sitemap.ts` line 1 — ensure it exports a `default` function (not named export)
   - Next.js 16 sitemap syntax: `export default async function sitemap(): Promise<MetadataRoute.Sitemap>`
4. After fix: deploy and verify at `https://dental.jkkn.ac.in/sitemap.xml`
5. Submit sitemap in Google Search Console → Sitemaps section

**Acceptance Criteria:**
- [ ] `https://dental.jkkn.ac.in/sitemap.xml` returns 200 OK with valid XML
- [ ] BDS URL (`/academics/details-of-academic-programs/bds/`) is present in sitemap
- [ ] Sitemap submitted in GSC
- [ ] GSC shows "Success" status for sitemap

---

### SEO-002: Add Canonical Tag
- **Priority:** P0
- **Effort:** 15 minutes
- **Dependency:** None
- **Assignee:** Developer

**Description:** No canonical tag detected on live BDS page. This creates duplicate content risk (with/without trailing slash, HTTP/HTTPS variants).

**Implementation Steps:**
1. Open `app/academics/details-of-academic-programs/bds/layout.tsx`
2. In the `metadata` export, add:

```typescript
alternates: {
  canonical: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/',
},
```

3. Verify by viewing page source — search for `<link rel="canonical"`

**Acceptance Criteria:**
- [ ] Page source contains `<link rel="canonical" href="https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/">`
- [ ] Canonical URL matches the page URL exactly (including trailing slash)

---

### SEO-003: Verify Schema Rendering on Live Page
- **Priority:** P0
- **Effort:** 1-2 hours
- **Dependency:** None
- **Assignee:** Developer

**Description:** Source code has 5 schema types (Course, FAQPage, BreadcrumbList, SpeakableSpecification, WebPage) but live page scrape detected 0. Need to verify if schemas actually render.

**Implementation Steps:**
1. Visit https://search.google.com/test/rich-results
2. Enter URL: `https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/`
3. Check results:
   - If schemas detected → Document which ones (screenshot for records)
   - If NO schemas detected → Problem confirmed
4. If schemas NOT rendering:
   a. Check how schemas are injected in `page.tsx` — look for `<script type="application/ld+json">`
   b. If using a component wrapper (like `<StructuredData />`), ensure it renders in Server Components
   c. If using `next/script` with `strategy="afterInteractive"` — this may execute too late for crawlers. Change to inline `<script>` in the page component body
   d. Test fix: `JSON.stringify()` the schema object and render directly:
   ```tsx
   <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{
       __html: JSON.stringify(courseSchema)
     }}
   />
   ```
5. Re-test with Rich Results Test after fix

**Acceptance Criteria:**
- [ ] Rich Results Test detects Course schema
- [ ] Rich Results Test detects FAQPage schema
- [ ] Rich Results Test detects BreadcrumbList schema
- [ ] No schema errors or warnings

---

### SEO-004: Rewrite H1 Tag with Target Keyword
- **Priority:** P0
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer

**Description:** Current H1 is "Bachelor of Dental Surgery (BDS)" — doesn't contain the target keyword. H1 is the single most important on-page ranking signal.

**Implementation Steps:**
1. Open `app/academics/details-of-academic-programs/bds/page.tsx`
2. Find the H1 element (likely in hero section)
3. Change from:
   ```tsx
   <h1>Bachelor of Dental Surgery (BDS)</h1>
   ```
   To:
   ```tsx
   <h1>Best BDS College in Tamil Nadu — JKKN Dental College</h1>
   ```
4. If the old H1 text is still needed for context, add it as a subtitle:
   ```tsx
   <h1>Best BDS College in Tamil Nadu — JKKN Dental College</h1>
   <p className="text-xl text-gray-600">Bachelor of Dental Surgery (BDS) Program</p>
   ```

**Alternative H1 options (pick one):**
- "Best BDS College in Tamil Nadu | JKKN Dental College & Hospital"
- "JKKN Dental College — Top BDS College in Tamil Nadu"
- "Bachelor of Dental Surgery (BDS) at JKKN — Best BDS College Tamil Nadu"

**Acceptance Criteria:**
- [ ] H1 tag contains "Best BDS" AND "Tamil Nadu"
- [ ] Only ONE H1 tag on the page
- [ ] Visual appearance is appropriate (not just SEO text)

---

### SEO-005: Rewrite Marketing H2 Tags to Keyword-Rich H2s
- **Priority:** P1
- **Effort:** 15 minutes
- **Dependency:** None
- **Assignee:** Developer

**Description:** H2 tags currently have marketing fluff ("Shape Your Future", "Begin Your Journey") with zero keyword value.

**Implementation Steps:**

| Current H2 | New H2 | File Location |
|-----------|--------|--------------|
| "Shape Your Future in Dental Healthcare" | "Why JKKN Is Among the Best BDS Colleges in Tamil Nadu" | page.tsx hero section |
| "World-Class Facilities" | "World-Class Dental Facilities at JKKN, Namakkal" | page.tsx facilities section |
| "Bright Career Opportunities" | "Career Opportunities & Placements After BDS at JKKN" | page.tsx career section |
| "Begin Your Journey in Dental Excellence" | "Apply for BDS Admission 2026-27 at JKKN Dental College" | page.tsx CTA section |

Keep unchanged:
- "BDS Program at a Glance" → OK
- "Eligibility & Admission Process" → OK
- "Comprehensive BDS Curriculum" → OK
- "Frequently Asked Questions" → OK

**Acceptance Criteria:**
- [ ] All 4 H2s rewritten with keywords
- [ ] At least 2 H2s contain "Tamil Nadu" or "JKKN"
- [ ] H2 hierarchy still makes semantic sense

---

### SEO-006: Add Primary Keyword to Body Content (3-5 Occurrences)
- **Priority:** P0
- **Effort:** 20 minutes
- **Dependency:** None
- **Assignee:** Developer / Content Writer

**Description:** The primary keyword "best bds colleges in tamilnadu" appears 0 times in body text. Title targets it but body doesn't confirm relevance.

**Implementation Steps:**
Add the keyword or close variants naturally in 5 locations:

1. **Hero paragraph** (opening description):
   "JKKN Dental College & Hospital is recognized as one of the **best BDS colleges in Tamil Nadu**, offering a DCI-approved 5-year BDS program with clinical exposure from Year 1."

2. **Why JKKN section** (if creating per Phase 2):
   "Students searching for the **best BDS colleges in Tamilnadu** consistently choose JKKN for its 200+ dental chairs, 500+ daily patients, and 92% placement rate."

3. **Eligibility section**:
   "As one of the **top BDS colleges in Tamil Nadu**, JKKN follows the standard NEET-based admission process..."

4. **Career section**:
   "Graduates from JKKN — one of the **best dental colleges in Tamil Nadu** — have secured positions at NHS UK, Apollo Hospitals, and Sun Pharma."

5. **FAQ answer** (add new FAQ: "Why is JKKN one of the best BDS colleges in Tamil Nadu?"):
   "JKKN is recognized as one of the **best BDS colleges in Tamilnadu** due to its NAAC 'A' accreditation, 200+ dental chairs, 92% placement rate, and clinical exposure from Year 1..."

**Acceptance Criteria:**
- [ ] Keyword or close variant appears 3-5 times in body
- [ ] Each occurrence reads naturally (not keyword-stuffed)
- [ ] At least one occurrence is within the first 200 words

---

### SEO-007: Fix Image Alt Text
- **Priority:** P1
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer

**Description:** 4 out of 6 images have generic alt text without keywords or location.

**Implementation Steps:**

Find each `<Image>` or `<img>` component in `page.tsx` and update `alt` attribute:

| Image | Current Alt | New Alt |
|-------|-----------|---------|
| Hero | "Dental Education" | "JKKN Dental College BDS Program — Best BDS College in Tamil Nadu" |
| Lab | "Modern Dental Lab" | "State-of-the-art dental laboratory at JKKN Dental College, Namakkal, Tamil Nadu" |
| Clinical | "Clinical Training" | "BDS students performing clinical training at JKKN Dental Hospital, Komarapalayam" |
| Campus | "Campus Life" | "JKKN Dental College campus with hostel and sports facilities, Namakkal district" |

**Acceptance Criteria:**
- [ ] All 4 image alt texts updated
- [ ] Each alt text contains location (Namakkal/Tamil Nadu/Komarapalayam)
- [ ] At least 1 alt text contains "best BDS college"
- [ ] Alt texts are descriptive (not just keywords)

---

### SEO-008: Add Internal Links (10+)
- **Priority:** P1
- **Effort:** 30 minutes
- **Dependency:** None
- **Assignee:** Developer

**Description:** Only 5 internal links on the page. BDS page is an SEO island receiving minimal PageRank.

**Implementation Steps:**
Add contextual links within body content (not just footer/nav):

```tsx
// In career/placement section:
<Link href="/placements/">placement statistics</Link>

// In eligibility section:
<Link href="/admissions/admission-process/">detailed admission process</Link>

// In curriculum section:
<Link href="/academics/statutes-pertaining-to-academic-departments/bds-syllabus/">
  complete BDS syllabus
</Link>

// In facilities section:
<Link href="/facilities/hospital/">dental hospital</Link>
<Link href="/facilities/hostel/">hostel facilities</Link>
<Link href="/facilities/library/">digital library</Link>

// In accreditation mention:
<Link href="/accreditation/naac/">NAAC accreditation details</Link>

// In faculty mention:
<Link href="/academics/faculty-directory/">full faculty directory</Link>

// In MDS reference:
<Link href="/academics/details-of-academic-programs/mds/">MDS specializations at JKKN</Link>

// In fee mention:
<Link href="/fees-structure/">complete fee structure</Link>

// In location/geo context:
<Link href="/best-dental-college-tamil-nadu/">best dental college in Tamil Nadu</Link>
<Link href="/erode/">dental college near Erode</Link>
<Link href="/salem/">dental college near Salem</Link>
```

**Acceptance Criteria:**
- [ ] 10+ new contextual internal links added
- [ ] Links are within body content (not just navigation)
- [ ] Anchor text is descriptive (not "click here")
- [ ] Links open in same tab (no `target="_blank"` for internal)

---

### SEO-009: Add Freshness Signal
- **Priority:** P1
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer

**Implementation Steps:**
Add below H1 or in "Program at a Glance" section:

```tsx
<p className="text-sm text-gray-500">
  Last Updated: April 2026 | Admission Cycle: 2026-27
</p>
```

Also add `dateModified` to WebPage schema:
```json
"dateModified": "2026-04-08"
```

**Acceptance Criteria:**
- [ ] "Updated April 2026" visible on page
- [ ] `dateModified` in WebPage schema

---

### SEO-010: Canonicalize Duplicate BDS Pages
- **Priority:** P1
- **Effort:** 1-2 hours
- **Dependency:** SEO-002 (canonical tag)
- **Assignee:** Developer

**Description:** Multiple pages compete for BDS keywords: `/academics/.../bds/`, `/bachelor-of-dental-surgery/`, and BDS PDFs.

**Implementation Steps:**
1. Check if `/bachelor-of-dental-surgery/` is a separate page or redirect
2. If separate page → add 301 redirect to main BDS URL in `next.config.ts`:
   ```typescript
   {
     source: '/bachelor-of-dental-surgery/',
     destination: '/academics/details-of-academic-programs/bds/',
     permanent: true,
   }
   ```
3. For BDS PDFs — add `X-Robots-Tag: noindex` header in `next.config.ts`:
   ```typescript
   {
     source: '/wp-content/uploads/:path*',
     headers: [
       { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
     ],
   }
   ```
   Or more targeted: only BDS PDFs

**Acceptance Criteria:**
- [ ] `/bachelor-of-dental-surgery/` redirects to main BDS URL (or has canonical pointing to it)
- [ ] BDS PDFs have noindex signal
- [ ] Only one BDS page competes for keywords in GSC

---

### SEO-011: Change OG Type
- **Priority:** P2
- **Effort:** 5 minutes
- **Dependency:** None
- **Assignee:** Developer

**Implementation Steps:**
In `layout.tsx` metadata:
```typescript
openGraph: {
  type: 'article',  // was 'website'
  // ... rest unchanged
}
```

**Acceptance Criteria:**
- [ ] `og:type` is "article" in page source

---

## CONTENT TASKS

### CON-001: Create "Why JKKN Is the Best" Section
- **Priority:** P0
- **Effort:** 3-4 hours
- **Dependency:** None (can use existing data)
- **Assignee:** Content Writer + Developer

**Description:** Create the most important new section — proof that JKKN is among the best. This section directly supports the "best bds colleges in tamilnadu" ranking claim.

**Implementation Steps:**
1. Add new section after hero, before "Program at a Glance"
2. H2: "Why JKKN Is Among the Best BDS Colleges in Tamil Nadu"
3. Content structure:
   - Opening paragraph (50 words — definitive statement for AI citation)
   - Proof points table (NAAC, DCI, seats, chairs, patients, placements, etc.)
   - 4-5 specific differentiators with data
   - Comparison table (JKKN vs TN average)

**Code snippet:**
```tsx
<section id="why-jkkn" className="py-12">
  <h2 className="text-3xl font-bold text-[#006837]">
    Why JKKN Is Among the Best BDS Colleges in Tamil Nadu
  </h2>
  <p className="mt-4 text-lg">
    JKKN Dental College & Hospital, located in Komarapalayam on NH-544
    in Namakkal district, is recognized as one of the best BDS colleges
    in Tamil Nadu with NAAC &apos;A&apos; grade accreditation, DCI approval,
    200+ dental chairs, and a 92% placement rate.
  </p>
  {/* Proof points table */}
  {/* Comparison table */}
  {/* Differentiators */}
</section>
```

**Acceptance Criteria:**
- [ ] Section contains 400-500 words
- [ ] Proof points table with 10+ verified data points
- [ ] Comparison table (JKKN vs average — snippet bait)
- [ ] Primary keyword appears naturally in section
- [ ] Data points consistent with llms.txt and collegeFacts.ts

---

### CON-002: Add NEET Cutoff Data Table
- **Priority:** P1
- **Effort:** 2-3 hours (research + implementation)
- **Dependency:** Admin provides cutoff data OR public records
- **Assignee:** Content Writer + Developer

**Description:** NEET cutoff data is the #1 missing content for BDS pages. ALL competitors also miss this — huge opportunity.

**Implementation Steps:**
1. Get NEET cutoff data from:
   - JKKN Admin (preferred — internal records)
   - Tamil Nadu medical admission counseling public records
   - Previous year cutoff from aggregator sites
2. Add section after Eligibility:

```tsx
<section id="neet-cutoff">
  <h2>NEET Cutoff for BDS at JKKN Dental College</h2>
  <table>
    <thead>
      <tr>
        <th>Year</th><th>Category</th><th>Cutoff Score</th><th>Rank Range</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>2025</td><td>General</td><td>[DATA]</td><td>[DATA]</td></tr>
      <tr><td>2025</td><td>OBC</td><td>[DATA]</td><td>[DATA]</td></tr>
      <tr><td>2025</td><td>SC/ST</td><td>[DATA]</td><td>[DATA]</td></tr>
      <tr><td>2024</td><td>General</td><td>[DATA]</td><td>[DATA]</td></tr>
      {/* ... more rows */}
    </tbody>
  </table>
</section>
```

**Acceptance Criteria:**
- [ ] At least 2 years of cutoff data
- [ ] Category-wise breakdown (General, OBC, SC/ST)
- [ ] Data verified against official source
- [ ] Table formatted for featured snippet eligibility

---

### CON-003: Add Fee Structure Data
- **Priority:** P0
- **Effort:** 1 hour (implementation) + admin approval
- **Dependency:** BLOCKED BY management fee disclosure decision
- **Assignee:** Admin + Developer

**Description:** "Affordable — Contact Admissions" must be replaced with actual fee data. This is the highest-intent content element.

**Options if exact fees can't be published:**
- Option A: Exact annual fee (best)
- Option B: Fee range "₹X-Y Lakhs per annum" (acceptable)
- Option C: "Starting from ₹X Lakhs" (minimum acceptable)

**Acceptance Criteria:**
- [ ] Actual fee number or range visible on page
- [ ] Fee includes annual + total (5-year) calculation
- [ ] Link to detailed `/fees-structure/` page
- [ ] Scholarship mention if applicable

---

### CON-004: Add Faculty Section
- **Priority:** P1
- **Effort:** 2-3 hours
- **Dependency:** HR provides faculty details + consent
- **Assignee:** Content Writer + Developer

**Description:** Zero faculty information on BDS page. For YMYL (Your Money Your Life) dental/medical content, Google requires E-E-A-T expertise signals.

**Minimum requirement:**
- HOD name, qualification, photo
- 4-5 senior faculty members
- Link to full faculty directory

**Acceptance Criteria:**
- [ ] HOD + 4 faculty with name, designation, qualification
- [ ] At least 3 faculty photos
- [ ] Link to `/academics/faculty-directory/`
- [ ] Consent obtained for publication

---

### CON-005: Expand Placement Data
- **Priority:** P1
- **Effort:** 2 hours
- **Dependency:** Placement Cell provides verified data
- **Assignee:** Content Writer + Developer

**Description:** Current placement section has generic career labels. Need specific data.

**Content to add:**
1. Verified placement rate (resolve 95% vs 92% inconsistency)
2. Named recruiters: TCS, Apollo, Sun Pharma, NHS UK, Cleveland Clinic Abu Dhabi
3. Salary data: Starting ₹X LPA, Average ₹X LPA, Highest ₹25 LPA (international)
4. International placements: UK (NHS), UAE, Singapore — with specific numbers
5. 2-3 alumni success stories with name and current role

**Acceptance Criteria:**
- [ ] Placement rate is consistent across page, llms.txt, and collegeFacts.ts
- [ ] At least 5 named recruiter companies
- [ ] Salary range mentioned
- [ ] International placements detailed
- [ ] 2+ alumni testimonials

---

### CON-006: Add Hospital Statistics to Page
- **Priority:** P1
- **Effort:** 1 hour
- **Dependency:** Hospital admin verification
- **Assignee:** Developer

**Description:** Hospital stats exist in llms.txt but NOT on the BDS page. These are JKKN's strongest differentiators.

**Data to add prominently:**
- 200+ dental chairs
- 100+ hospital beds
- 500+ daily patient footfall
- OPG, CBCT, Digital Radiology
- Simulation laboratory
- 50+ research publications

**Acceptance Criteria:**
- [ ] All hospital stats visible on BDS page (not just in data files)
- [ ] Statistics match llms.txt values
- [ ] Presented in a visually prominent way (stat cards, infographic style)

---

### CON-007: Fix Curriculum SSR Rendering
- **Priority:** P1
- **Effort:** 2-4 hours
- **Dependency:** SEO-003 (verify if issue exists)
- **Assignee:** Developer

**Description:** Only Year 1 curriculum is visible in scraped content. Years 2-5 may be behind JS tabs that don't SSR.

**Implementation Steps:**
1. Check Google's URL Inspection → Rendered HTML → search for Year 2 content
2. If missing: the tab content isn't in initial HTML
3. Fix options:
   - **Option A:** Use Radix UI Accordion (renders all content in DOM, hides with CSS)
   - **Option B:** Render all years in HTML with `hidden` class, toggle with JS
   - **Option C:** Remove tabs entirely — show all 5 years in a scrollable section
4. Ensure `display: none` content is still in the DOM (Google crawls it)

**Acceptance Criteria:**
- [ ] All 5 years of curriculum visible in page source (View Source)
- [ ] URL Inspection shows all curriculum content in rendered HTML
- [ ] UI still functions well (tabs/accordion work for user experience)

---

### CON-008: Add Student Testimonials
- **Priority:** P2
- **Effort:** 3-5 hours (collect + implement)
- **Dependency:** Student/alumni consent
- **Assignee:** Marketing + Developer

**Content format:**
```
"[Quote about experience at JKKN BDS program]"
— [Full Name], BDS [Batch Year], Currently at [Hospital/Company]
```

**Acceptance Criteria:**
- [ ] 3-4 testimonials with real names
- [ ] At least 1 with photo
- [ ] Consent obtained
- [ ] Testimonials mention specific JKKN strengths (clinical, faculty, placements)

---

### CON-009: Create Comparison Table (Featured Snippet Bait)
- **Priority:** P1
- **Effort:** 2 hours
- **Dependency:** CON-001 (Why JKKN section)
- **Assignee:** Content Writer + Developer

**Description:** Comparison tables are the most effective featured snippet bait for "best" queries.

**Table content:**

```html
<table>
  <caption>JKKN Dental College vs Tamil Nadu Average — BDS Program Comparison</caption>
  <thead>
    <tr><th>Parameter</th><th>JKKN Dental</th><th>Avg TN Private College</th></tr>
  </thead>
  <tbody>
    <tr><td>NAAC Grade</td><td>A</td><td>B to B+</td></tr>
    <tr><td>Dental Chairs</td><td>200+</td><td>50-100</td></tr>
    <tr><td>Daily Patient Footfall</td><td>500+</td><td>100-200</td></tr>
    <tr><td>Placement Rate</td><td>92%+</td><td>60-70%</td></tr>
    <tr><td>MDS Specializations</td><td>5</td><td>1-3</td></tr>
    <tr><td>Clinical Exposure</td><td>From Year 1</td><td>Typically from Year 3</td></tr>
    <tr><td>International Placements</td><td>Yes (UK, UAE, Singapore)</td><td>Rare</td></tr>
    <tr><td>AI-Integrated Campus</td><td>Yes (India's First)</td><td>No</td></tr>
    <tr><td>Hospital Beds</td><td>100+</td><td>30-50</td></tr>
    <tr><td>Faculty Ratio</td><td>1:10</td><td>1:15-20</td></tr>
  </tbody>
</table>
```

**Acceptance Criteria:**
- [ ] Table has 8+ comparison parameters
- [ ] Data verified for JKKN column
- [ ] "TN Average" column uses reasonable estimates (not fabricated)
- [ ] Table has proper `<caption>` and semantic HTML for snippet eligibility
- [ ] Table renders well on mobile (responsive)

---

### CON-010: Add Geographic Context Section
- **Priority:** P1
- **Effort:** 30 minutes
- **Dependency:** None
- **Assignee:** Developer

**Implementation:**
Add before FAQ section:

```tsx
<section id="location">
  <h2>JKKN Dental College Location — Accessible from Major Tamil Nadu Cities</h2>
  <p>
    Located on NH-544 (Salem-Coimbatore Highway) in Komarapalayam,
    Namakkal district, JKKN Dental College is easily accessible from
    major Tamil Nadu cities:
  </p>
  <ul>
    <li><strong>Erode:</strong> 22 km (35-40 minutes via NH-544)</li>
    <li><strong>Salem:</strong> 58 km (1 hour via NH-544)</li>
    <li><strong>Tiruppur:</strong> 67 km (1.5 hours via NH-544)</li>
    <li><strong>Coimbatore:</strong> 105 km (2-2.5 hours via NH-544)</li>
    <li><strong>Tiruchengode:</strong> 15 km (nearby)</li>
  </ul>
  <p>
    Students from Salem, Erode, Namakkal, Tiruchengode, Tiruppur, and
    Coimbatore districts choose JKKN as their preferred dental college
    due to its convenient NH-544 location and excellent connectivity.
  </p>
</section>
```

**Acceptance Criteria:**
- [ ] City distances listed (verified against MEMORY.md data)
- [ ] Location keywords present: Salem, Erode, Namakkal, Coimbatore, Tiruppur
- [ ] NH-544 mentioned (route identifier)
- [ ] Section is within page body (not footer)

---

## AEO TASKS

### AEO-001: Expand FAQ to 15+ Questions
- **Priority:** P1
- **Effort:** 3-4 hours
- **Dependency:** Content tasks (CON-002, CON-003, CON-005)
- **Assignee:** Content Writer + Developer

**Description:** Expand from 6 to 15+ FAQs targeting mapped PAA questions.

**New FAQs to add (9 new — prioritized):**

| # | Question | Answer Summary (30 words + detail) | PAA Target |
|---|---------|--------------------------------------|-----------|
| 7 | What is the NEET cutoff for BDS at JKKN? | "The NEET cutoff varies by year and category. For 2025, General category cutoff was approximately [X] marks..." | High volume |
| 8 | What are the BDS fees at JKKN Dental College? | "BDS fees at JKKN are ₹[X] Lakhs per annum. Total 5-year BDS cost is approximately ₹[Y] Lakhs..." | Highest intent |
| 9 | Which is the best BDS college in Tamil Nadu? | "JKKN Dental College is recognized as one of the best BDS colleges in Tamil Nadu with NAAC A accreditation, 200+ dental chairs, and 92% placements..." | Direct ranking query |
| 10 | What are JKKN BDS placement statistics? | "JKKN BDS graduates achieve 92%+ placement rate with recruiters including TCS, Apollo, NHS UK..." | Career query |
| 11 | Is JKKN Dental College NAAC accredited? | "Yes, JKKN Dental College holds NAAC 'A' grade accreditation and full DCI approval..." | Trust query |
| 12 | How far is JKKN from Salem and Erode? | "JKKN is 22 km from Erode and 58 km from Salem on NH-544..." | Geo query |
| 13 | What makes JKKN different from other dental colleges? | "JKKN offers clinical exposure from Year 1, 200+ dental chairs, international placements, and India's first AI-integrated dental campus..." | Comparison query |
| 14 | Are scholarships available for BDS at JKKN? | "[Answer based on admin data]..." | Financial query |
| 15 | Can I pursue MDS specialization after BDS at JKKN? | "Yes, JKKN offers 5 MDS specializations: Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry, and Oral Medicine..." | Pathway query |

**Each FAQ must have:**
- First sentence: direct answer ≤30 words (voice search ready)
- Following sentences: supporting detail with data
- Wrapped in FAQPage JSON-LD

**Acceptance Criteria:**
- [ ] 15+ FAQ questions on page
- [ ] All 15+ questions in FAQPage schema
- [ ] Each answer starts with concise direct answer
- [ ] Answers include data points (numbers, percentages)
- [ ] Schema validates in Rich Results Test

---

### AEO-002: Create Snippet-Optimized Content Blocks
- **Priority:** P1
- **Effort:** 2 hours
- **Dependency:** CON-002 (NEET cutoff), CON-003 (fees), CON-009 (comparison table)
- **Assignee:** Content Writer

**Description:** Format specific content sections as snippet-friendly blocks.

**Snippet targets:**

1. **Definition snippet** — Add at top of page:
   ```
   <div id="bds-definition">
   <strong>BDS (Bachelor of Dental Surgery)</strong> is a 5-year undergraduate
   dental program comprising 4 years of academic study and 1 year of
   compulsory rotating internship. BDS graduates can practice as dentists,
   pursue MDS specialization, or enter research, government service,
   and international healthcare.
   </div>
   ```

2. **List snippet** — Top reasons section:
   ```
   <h3>Top 10 Reasons to Choose JKKN for BDS</h3>
   <ol>
     <li>NAAC 'A' Grade Accreditation</li>
     <li>200+ Dental Chairs — Largest in the region</li>
     <li>500+ Daily Patients — Maximum clinical exposure</li>
     <li>Clinical Training from Year 1</li>
     <li>92%+ Placement Rate</li>
     <li>International Placements (UK, UAE, Singapore)</li>
     <li>5 MDS Specialization Pathways</li>
     <li>India's First AI-Integrated Dental Campus</li>
     <li>60+ Expert Faculty (1:10 ratio)</li>
     <li>NH-544 Location — Accessible from Salem, Erode, Coimbatore</li>
   </ol>
   ```

3. **Table snippet** — (Already covered in CON-009)

**Acceptance Criteria:**
- [ ] BDS definition block present (40-50 words)
- [ ] Top 10 reasons ordered list present
- [ ] Comparison table present (CON-009)
- [ ] NEET cutoff table present (CON-002)

---

### AEO-003: Add Voice Search Optimization
- **Priority:** P2
- **Effort:** 1 hour
- **Dependency:** AEO-001 (expanded FAQs)
- **Assignee:** Developer

**Description:** Optimize for "Hey Google, best BDS college in Tamil Nadu" type queries.

**Steps:**
1. Verify SpeakableSpecification schema is rendering (link to SEO-003)
2. Update SpeakableSpecification to target key answer sections:
   ```json
   "speakable": {
     "@type": "SpeakableSpecification",
     "cssSelector": [
       "#why-jkkn > p:first-of-type",
       "#bds-definition",
       ".faq-answer:first-of-type"
     ]
   }
   ```
3. Ensure first answer to "best BDS college" question is ≤30 words and reads naturally when spoken aloud

**Acceptance Criteria:**
- [ ] SpeakableSpecification in schema with correct selectors
- [ ] Key answers are ≤30 words and sound natural spoken
- [ ] FAQ answers start with direct statements (not questions)

---

## GEO TASKS

### GEO-001: Register Wikidata Entity
- **Priority:** P1
- **Effort:** 30 minutes
- **Dependency:** None
- **Assignee:** SEO Strategist

**Description:** Create a Wikidata entity for JKKN Dental College. This feeds Google Knowledge Graph and improves AI entity recognition.

**Implementation Steps:**
1. Go to https://www.wikidata.org/wiki/Special:NewItem
2. Fill in:
   - **Label (en):** JKKN Dental College and Hospital
   - **Description (en):** Dental college and hospital in Komarapalayam, Namakkal district, Tamil Nadu, India
   - **Also known as:** JKK Nattraja Dental College, JKKN Dental
3. Add properties:
   - **Instance of (P31):** dental school (Q4285276)
   - **Country (P17):** India (Q668)
   - **Located in administrative territorial entity (P131):** Namakkal district
   - **Coordinate location (P625):** 11.4446°N, 77.7310°E
   - **Official website (P856):** https://dental.jkkn.ac.in
   - **Inception (P571):** 1987
   - **Affiliated with (P1416):** Tamil Nadu Dr. MGR Medical University
4. Save and note the Q-number

**Acceptance Criteria:**
- [ ] Wikidata entity created with Q-number
- [ ] All 7+ properties filled
- [ ] Entity findable by searching "JKKN Dental" on Wikidata

---

### GEO-002: Draft Wikipedia Article
- **Priority:** P1
- **Effort:** 5-8 hours (research + drafting + sources)
- **Dependency:** None
- **Assignee:** Content Writer + SEO Strategist

**Description:** ChatGPT heavily relies on Wikipedia. Without a dedicated Wikipedia article, JKKN will never be cited by ChatGPT.

**Article structure:**
1. Lead paragraph (founding, location, affiliation, programs)
2. History section
3. Academics (BDS, MDS programs, DCI approval)
4. Accreditation (NAAC, DCI)
5. Campus and facilities (hospital, dental chairs, beds)
6. Notable facts (first AI-integrated campus)
7. References section (minimum 5 reliable secondary sources)

**Sources needed:**
- NAAC assessment report (naac.gov.in)
- DCI approval list (dciindia.gov.in)
- TN Dr. MGR University affiliated colleges list
- News articles (The Hindu, Times of India, local papers)
- NIRF participation records

**Acceptance Criteria:**
- [ ] Article draft of 500-800 words
- [ ] 5+ reliable secondary sources cited
- [ ] Neutral, encyclopedic tone (not promotional)
- [ ] Submitted to Wikipedia Articles for Creation process
- [ ] Follows Wikipedia notability guidelines for educational institutions

---

### GEO-003: Update Aggregator Profiles
- **Priority:** P1
- **Effort:** 4-6 hours
- **Dependency:** CON-003 (fee data), CON-005 (placement data)
- **Assignee:** SEO Strategist

**Description:** JKKN has profiles on 6+ aggregators but isn't in their curated "Top" lists. Must optimize profiles to get featured.

**Platforms to update:**

| Platform | URL Pattern | Actions |
|----------|-----------|---------|
| CollegeDunia | collegedunia.com/college/10574-jkk-nattraja... | Update all fields, add photos, request review |
| Shiksha | shiksha.com (find JKKN page) | Complete all data sections |
| Careers360 | careers360.com/colleges/jkk-nattraja... | Update ranking data, add placement info |
| CollegeDekho | collegedekho.com (find JKKN page) | Complete profile |
| GetMyUni | getmyuni.com (find JKKN page) | Update profile |
| Edufever | edufever.com/jkkn-dental... | Verify accuracy |

**Data to ensure on EVERY platform:**
- [ ] NAAC grade: A
- [ ] DCI approval: Yes
- [ ] BDS seats: 100
- [ ] BDS fees: [actual amount]
- [ ] Placement rate: [verified %]
- [ ] Top recruiters: 5+ named companies
- [ ] Hospital stats: 200+ chairs, 100+ beds
- [ ] Contact information: correct
- [ ] Website URL: https://dental.jkkn.ac.in
- [ ] Photos: campus, lab, hospital (5+ photos)

**Acceptance Criteria:**
- [ ] 3+ platforms fully updated
- [ ] Data consistent across all platforms
- [ ] At least 10 verified student reviews on CollegeDunia
- [ ] JKKN appears when filtering for "Namakkal" dental colleges

---

### GEO-004: Enhance llms.txt for AI Citation
- **Priority:** P2
- **Effort:** 1 hour
- **Dependency:** None
- **Assignee:** Developer

**Description:** Current llms.txt is good. Enhance with comparison data and citation-ready blocks.

**Add to llms.txt:**
```
## Why JKKN Dental College Is Among the Best BDS Colleges in Tamil Nadu

JKKN Dental College & Hospital is one of the leading BDS colleges in Tamil Nadu:
- NAAC Grade: A | DCI Approved | Est. 1987
- Dental Chairs: 200+ (one of the largest in Tamil Nadu)
- Hospital Beds: 100+ | Daily Patients: 500+
- BDS Seats: 100 (DCI Approved)
- Placement Rate: 92%+ | Highest Package: ₹25 LPA (International)
- International Placements: NHS UK, UAE, Singapore
- MDS Specializations: 5 (Periodontics, Orthodontics, Prosthodontics, Conservative, Oral Medicine)
- India's First AI-Integrated Dental Campus
- Location: NH-544, 22 km from Erode, 58 km from Salem

## Comparison with Tamil Nadu Average
| Parameter | JKKN | TN Average |
| Dental Chairs | 200+ | 50-100 |
| Daily Patients | 500+ | 100-200 |
| Placement Rate | 92%+ | 60-70% |
| Clinical Exposure | Year 1 | Year 3 |
| International Placements | Yes | Rare |
```

**Acceptance Criteria:**
- [ ] "Best BDS" section added to llms.txt
- [ ] Comparison table included
- [ ] All data consistent with page content

---

### GEO-005: Add Structured Answer Capsules to BDS Page
- **Priority:** P1
- **Effort:** 2 hours
- **Dependency:** CON-001 (Why JKKN section)
- **Assignee:** Developer

**Description:** AI platforms prefer structured, citation-ready content. Add "answer capsule" format blocks.

**Implementation:**
Add at the top of "Why JKKN" section:

```tsx
<div className="bg-[#FBFBEE] border-l-4 border-[#006837] p-6 rounded-r-lg">
  <h3 className="font-bold text-lg text-[#006837]">
    Quick Facts: JKKN Dental College BDS Program
  </h3>
  <dl className="grid grid-cols-2 gap-2 mt-4">
    <dt className="font-medium">Established</dt><dd>1987</dd>
    <dt className="font-medium">NAAC Grade</dt><dd>A</dd>
    <dt className="font-medium">BDS Seats</dt><dd>100 (DCI Approved)</dd>
    <dt className="font-medium">Dental Chairs</dt><dd>200+</dd>
    <dt className="font-medium">Daily Patients</dt><dd>500+</dd>
    <dt className="font-medium">Placement Rate</dt><dd>92%+</dd>
    <dt className="font-medium">Highest Package</dt><dd>₹25 LPA (International)</dd>
    <dt className="font-medium">University</dt><dd>TN Dr. MGR Medical University</dd>
  </dl>
</div>
```

This format is easily parseable by AI systems and serves as a citation block.

**Acceptance Criteria:**
- [ ] Answer capsule visible on page
- [ ] Data in structured `<dl>` format (semantic HTML)
- [ ] All data points accurate and verified
- [ ] Capsule appears above the fold or near top of content

---

## TECHNICAL TASKS

### TECH-001: Run PageSpeed Insights Test
- **Priority:** P1
- **Effort:** 30 minutes
- **Dependency:** None
- **Assignee:** Developer

**Steps:**
1. Visit https://pagespeed.web.dev/
2. Enter BDS URL
3. Record: LCP, FID/INP, CLS, overall score (mobile + desktop)
4. Screenshot results

**Acceptance Criteria:**
- [ ] Baseline CWV scores recorded
- [ ] Action items identified from PageSpeed report

---

### TECH-002: Lazy-Load Google Maps
- **Priority:** P2
- **Effort:** 30 minutes
- **Dependency:** TECH-001 (if Maps is a LCP concern)
- **Assignee:** Developer

**Implementation:**
Add `loading="lazy"` to Maps iframe:
```html
<iframe
  src="https://www.google.com/maps/embed?..."
  loading="lazy"
  title="JKKN Dental College Location Map"
></iframe>
```

Or replace with static image + link:
```tsx
<a href="https://maps.app.goo.gl/mXx6rFRqpS9U76BK6" target="_blank">
  <Image
    src="/images/jkkn-campus-map.webp"
    alt="JKKN Dental College location on NH-544, Komarapalayam"
    width={600}
    height={400}
    loading="lazy"
  />
  <span>View on Google Maps →</span>
</a>
```

**Acceptance Criteria:**
- [ ] Maps doesn't affect initial page load (LCP)
- [ ] Maps still functional for users who scroll to it

---

### TECH-003: Verify SSR of All Content
- **Priority:** P1
- **Effort:** 1-2 hours
- **Dependency:** SEO-003
- **Assignee:** Developer

**Steps:**
1. In GSC → URL Inspection → inspect BDS URL
2. Check "Live Test" → view rendered HTML
3. Search for: Year 2 curriculum content, FAQ answers, schema scripts
4. If anything missing → fix SSR (see CON-007)

**Acceptance Criteria:**
- [ ] All page content visible in GSC rendered HTML
- [ ] All 5 years of curriculum present
- [ ] All FAQ answers present (not lazy-loaded)
- [ ] Schema scripts present

---

## COMPETITOR-RESPONSE TASKS

### COMP-001: Create Geo Landing Pages (3 pages)
- **Priority:** P1
- **Effort:** 6-8 hours
- **Dependency:** Phase 2 content (BDS page serves as template)
- **Assignee:** Content Writer + Developer

**Pages to create:**

1. **`/bds-college-near-erode/`** — Target: "bds colleges near erode"
   - Content: JKKN is 22 km from Erode. BDS program overview. Why choose JKKN.
   - Unique: Route from Erode, travel time, bus/train options
   - 1,500-2,000 words. Links to main BDS page.

2. **`/bds-college-near-namakkal/`** — Target: "bds colleges near namakkal"
   - Content: JKKN is in Namakkal district. Only 2 dental colleges in district.
   - Unique: Namakkal district advantages, local student benefits
   - 1,500-2,000 words. Links to main BDS page.

3. **`/bds-college-near-salem/`** — Target: "bds colleges near salem"
   - Content: JKKN is 58 km from Salem on NH-544.
   - Unique: Comparison with other Salem-region options
   - 1,500-2,000 words. Links to main BDS page.

Each page needs: unique content (not copy of BDS page), metadata, schema, internal links to BDS page.

**Acceptance Criteria:**
- [ ] 3 geo pages created and deployed
- [ ] Each page has unique 1,500+ word content
- [ ] Each page targets specific geo keyword in title + H1
- [ ] Each page links to main BDS page
- [ ] Each page has Course + FAQPage + BreadcrumbList schema
- [ ] Pages added to sitemap

---

### COMP-002: Respond to KSR Perplexity Advantage
- **Priority:** P2
- **Effort:** 2-3 hours
- **Dependency:** GEO-001 (Wikidata), GEO-003 (aggregators)
- **Assignee:** SEO Strategist

**Description:** KSR (15 km away, NAAC B++) appears in Perplexity but JKKN (NAAC A) doesn't. Need to match and exceed KSR's entity signals.

**Steps:**
1. Analyze what KSR has that JKKN doesn't:
   - KSR's own website (ksridsr.edu) cited by Perplexity
   - KSR has "Tiruchengode" (recognized town) vs JKKN's "Komarapalayam" (unknown)
2. Ensure JKKN's BDS page has STRONGER structured data than KSR
3. Register Wikidata with geographic association to Tiruchengode + Namakkal + Erode
4. Create content that positions JKKN as the BETTER option vs KSR with data proof

**Acceptance Criteria:**
- [ ] JKKN's entity signals match or exceed KSR
- [ ] Geographic association includes Tiruchengode (nearby recognized town)
- [ ] Comparison content shows JKKN advantages over KSR (NAAC A vs B++)

---

## TASK DEPENDENCY GRAPH

```
Independent (start immediately):
├── SEO-001 (sitemap fix)
├── SEO-002 (canonical)
├── SEO-003 (schema verify)
├── SEO-004 (H1 rewrite)
├── SEO-005 (H2 rewrite)
├── SEO-006 (keyword in body)
├── SEO-007 (image alt)
├── SEO-008 (internal links)
├── SEO-009 (freshness)
├── SEO-011 (OG type)
├── CON-010 (geographic section)
├── GEO-001 (Wikidata)
├── GEO-004 (llms.txt)
├── TECH-001 (PageSpeed test)
└── GEO-002 (Wikipedia draft)

Blocked by admin data:
├── CON-002 (NEET cutoff) → needs admin/public records
├── CON-003 (fee data) → needs management approval
├── CON-004 (faculty) → needs HR consent
├── CON-005 (placements) → needs placement cell
└── CON-008 (testimonials) → needs student consent

Blocked by other tasks:
├── SEO-010 (canonicalize dupes) → after SEO-002
├── CON-001 (Why JKKN section) → can start independently
├── CON-007 (curriculum SSR) → after SEO-003
├── CON-009 (comparison table) → after CON-001
├── AEO-001 (FAQ expansion) → after CON-002, CON-003
├── AEO-002 (snippet blocks) → after CON-002, CON-009
├── AEO-003 (voice search) → after AEO-001
├── GEO-003 (aggregators) → after CON-003, CON-005
├── GEO-005 (answer capsules) → after CON-001
├── TECH-002 (lazy map) → after TECH-001
├── TECH-003 (verify SSR) → after SEO-003
├── COMP-001 (geo pages) → after Phase 2 content
└── COMP-002 (KSR response) → after GEO-001, GEO-003
```

---

## SPRINT GROUPING SUGGESTION

### Sprint 1 (Week 1) — Quick Wins
**Parallel tasks (all independent):**
- SEO-001, SEO-002, SEO-003, SEO-004, SEO-005, SEO-006, SEO-007, SEO-008, SEO-009, SEO-011
- CON-010 (geographic section)
- GEO-001 (Wikidata — 30 min)
- TECH-001 (PageSpeed test)

**Start in parallel (long-running):**
- GEO-002 (Wikipedia draft — takes days)

### Sprint 2 (Week 2-3) — Content Build
**Blocked items need data ASAP:**
- Request admin data on Day 1 of Sprint 2
- CON-001 (Why JKKN — can start immediately)
- CON-002, CON-003, CON-004, CON-005 (as data arrives)
- CON-006, CON-008, CON-009

**After content is ready:**
- CON-007 (curriculum SSR fix)
- SEO-010 (canonicalization)

### Sprint 3 (Week 3-4) — Technical + AEO
**After Sprint 2 content is live:**
- AEO-001 (FAQ expansion)
- AEO-002 (snippet blocks)
- AEO-003 (voice search)
- TECH-002 (lazy map)
- TECH-003 (SSR verification)
- GEO-005 (answer capsules)

### Sprint 4 (Week 4-5) — GEO + Geo Pages
- GEO-002 (Wikipedia — submit)
- GEO-003 (aggregator profiles)
- GEO-004 (llms.txt enhance)
- COMP-001 (3 geo landing pages)
- COMP-002 (KSR response)

### Ongoing
- Content freshness updates (monthly)
- Rank tracking (weekly)
- Blog posts (monthly)
- Backlink building (ongoing)

---

## TASK COUNT SUMMARY

| Category | Count | P0 | P1 | P2 | P3 |
|----------|-------|----|----|----|----|
| SEO Tasks | 11 | 4 | 5 | 1 | 1 |
| Content Tasks | 10 | 2 | 6 | 2 | 0 |
| AEO Tasks | 3 | 0 | 2 | 1 | 0 |
| GEO Tasks | 5 | 0 | 3 | 2 | 0 |
| Technical Tasks | 3 | 0 | 2 | 1 | 0 |
| Competitor Tasks | 2 | 0 | 1 | 1 | 0 |
| **TOTAL** | **34 detailed** | **6** | **19** | **8** | **1** |

*Additional tasks from Plan file (blog calendar, video strategy, backlinks) bring total to ~52 including ongoing activities.*

---

*Tasks file generated: 2026-04-08 | 34 detailed tasks + 18 ongoing activities | Dependencies mapped | Sprint grouping suggested*
