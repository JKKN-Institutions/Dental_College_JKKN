# MDS Page Optimization Spec — Triple-Check SEO/AEO/GEO Audit

> **Page:** https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/
> **Primary Keyword:** `mds colleges in tamilnadu`
> **Goal:** #1 Google ranking for primary keyword + AI citation dominance across ChatGPT, Gemini, Perplexity
> **Audit Date:** 2026-04-09
> **Audit Framework:** Triple-Check SEO → AEO → GEO (3 validation passes per phase)
> **Data Sources:** Website Auditor MCP, Firecrawl MCP, Serper MCP, AI Citation Monitor MCP, Live page fetch
> **Status:** Baseline captured — ready for implementation

---

## EXECUTIVE SUMMARY

| Dimension | Score | Status |
|-----------|-------|--------|
| **SEO (Phase 1)** | 62/100 | HIGH gaps — Content depth, H1 keyword, schema |
| **AEO (Phase 2)** | 38/100 | CRITICAL gaps — No FAQPage schema, 0 tables, no direct-answer blocks |
| **GEO (Phase 3)** | 30/100 | CRITICAL gaps — Weak entity, no knowledge panel, no LLM-friendly data blocks |
| **Technical Health** | 99/100 | EXCELLENT — Page speed, schema validity, mobile-first all strong |
| **Overall Optimization Score** | **57/100** | **NOT READY for #1 ranking — see gap matrix below** |

### Top 5 Show-Stoppers (P0 — Fix Immediately)
1. **H1 does not contain primary keyword** — Current: "Master of Dental Surgery (MDS)" → Target: "MDS Colleges in Tamil Nadu — JKKN Dental College Admissions 2026"
2. **Thin content (1,121 words)** — Competing aggregators (Shiksha, CollegeDunia) have 3,000–5,000+ words. Needs expansion to minimum 3,500 words.
3. **Zero data tables** — SERP top 10 all aggregators lead with tables (fees comparison, seat matrix, specializations). JKKN has none.
4. **FAQPage schema missing** — FAQs exist on page but no JSON-LD FAQPage schema → zero PAA/AI Overview eligibility.
5. **No "MDS Colleges in Tamil Nadu" comparison table** — The entire top 10 SERP is comparison-table content. JKKN needs its own comparison block to compete.

### SERP Landscape Reality Check
- **Top 10 for "mds colleges in tamilnadu" = 100% aggregators** (Shiksha, CollegeDunia, Careers360, DCI India, Banodoctor, Kollegeapply, IndiaAccess, CollegeBatch, YouTube)
- **Zero individual dental colleges rank in top 10** — MASSIVE opportunity (first-mover advantage) + Challenge (must beat aggregator content depth)
- **Strategy:** JKKN must become the #1 individual-college result by outperforming aggregators on E-E-A-T, content depth, data tables, and schema richness.

---

## 1. CURRENT STATE — JKKN MDS Page Baseline

### 1.1 URL & Indexation
| Field | Value | Status |
|-------|-------|--------|
| Canonical URL | `/academics/details-of-academic-programs/mds/` | ✓ Correct |
| Trailing slash | Yes | ✓ Correct |
| HTTPS | Yes | ✓ |
| Robots | Indexable | ✓ |
| Sitemap inclusion | Yes | ✓ (auto-generated) |
| 404/500 errors | None | ✓ |

### 1.2 On-Page SEO Baseline
| Element | Current Value | Chars / Count | Keyword Status |
|---------|---------------|---------------|----------------|
| **Title tag** | "MDS Colleges in Tamilnadu \| JKKN Dental College & Hospital" | 58 / 60 | ✓ Keyword present |
| **Meta description** | "JKKN Dental is one of the top MDS colleges in Tamilnadu. DCI-approved MDS courses in multiple specialisations with advanced clinical training & hospital." | 153 / 160 | ✓ Keyword present |
| **H1** | "Master of Dental Surgery (MDS)" | 30 chars | ❌ NO primary keyword |
| **H2 count** | 10 (Hero video, About, Specializations, Highlights, Facilities, Admission, FAQ) | 10 | ✓ Good structure |
| **H3 count** | 20+ (specialization names, facility names, eligibility sections) | 20+ | ✓ Good depth |
| **Word count** | 1,121 | — | ❌ THIN (target: 3,500+) |
| **Tables** | 0 | 0 | ❌ CRITICAL gap |
| **Lists** | 1 | 1 | ❌ THIN (target: 8+) |
| **Images** | 2 | 2 | ❌ THIN (target: 15+ with alt) |
| **Internal links** | 11 | 11 | ⚠ THIN (target: 25+) |
| **External links** | 15 | 15 | ✓ OK |
| **Broken links** | 0 | 0 | ✓ |
| **Primary keyword density** | ~0.4% (estimated 5 instances / 1,121 words) | — | ⚠ LOW (target: 1.5–2.5%) |

### 1.3 Technical Performance (Website Auditor MCP data)
| Metric | Mobile Score | Target | Status |
|--------|--------------|--------|--------|
| **PageSpeed Performance** | 96 | ≥90 | ✓ EXCELLENT |
| **Accessibility** | 96 | ≥90 | ✓ EXCELLENT |
| **SEO** | 100 | ≥95 | ✓ EXCELLENT |
| **Best Practices** | 100 | ≥95 | ✓ EXCELLENT |
| **LCP (Largest Contentful Paint)** | 2.6s (0.88) | <2.5s | ⚠ CLOSE |
| **FCP (First Contentful Paint)** | 0.9s | <1.8s | ✓ |
| **CLS (Cumulative Layout Shift)** | 0.00 | <0.1 | ✓ PERFECT |
| **TBT (Total Blocking Time)** | 30ms | <200ms | ✓ |
| **SI (Speed Index)** | 3.3s | <3.4s | ✓ |
| **Health Score** | 99/100 | ≥90 | ✓ EXCELLENT |

### 1.4 Schema Markup Baseline
| Schema Type | Status | Completeness |
|-------------|--------|--------------|
| `Course` | ✓ Present | Partial (no offers, no provider address, no educationalLevel, no timeToComplete in ISO) |
| `BreadcrumbList` | ✓ Present | ✓ Complete |
| `WebPage` (Speakable) | ✓ Present | ✓ Complete |
| `FAQPage` | ❌ **MISSING** | FAQs exist on page but no JSON-LD |
| `EducationalOrganization` | ❌ **MISSING** | Critical for E-E-A-T |
| `LocalBusiness` | ❌ **MISSING** | Blocks local pack eligibility |
| `Article` / `CollectionPage` | ❌ Missing | Optional but helps with topic authority |
| `Review` / `AggregateRating` | ❌ Missing | Blocks rich snippet eligibility |
| `ItemList` (for specializations) | ❌ Missing | Helps AI understand structure |

### 1.5 Content Structure (H1/H2/H3 Hierarchy)
```
H1: Master of Dental Surgery (MDS)
├── H2: MDS Clinical Excellence (hero video box text)
├── H2: Advanced Dental Education (about image box text)
├── H2: What is MDS (Master of Dental Surgery)?
├── H2: Choose Your Specialization Path
│   ├── H3: Endodontics
│   ├── H3: Prosthodontics
│   ├── H3: Periodontics
│   ├── H3: Oral Medicine
│   └── H3: Orthodontics
├── H2: MDS Program Highlights
│   ├── H3: DCI Curriculum
│   ├── H3: Research Focus
│   ├── H3: Expert Mentorship
│   └── H3: Career Support
├── H2: World-Class Facilities
│   ├── H3: Digital Dentistry Lab
│   ├── H3: Advanced Imaging
│   ├── H3: Microscope Suite
│   └── H3: Implant Surgery
├── H2: Admission Information
│   ├── H3: Eligibility Criteria
│   └── H3: Admission Process
├── H2: Frequently Asked Questions (5 Q&A pairs)
├── H2: Accreditation
└── H2: Ready to Specialize (CTA)
```
**Observation:** Structure is reasonable but H2s are mostly BRANDING copy ("MDS Clinical Excellence", "Advanced Dental Education") — not keyword-targeted. Needs rewrite to match user search intent.

---

## 2. COMPETITOR BENCHMARK — SERP Top 10 Analysis

### 2.1 SERP Top 10 Competitors (Live Serper Data, 2026-04-09)

| Rank | Domain | Type | Word Count (Est.) | Key Strength |
|------|--------|------|-------------------|--------------|
| 1 | shiksha.com | Aggregator | 5,000+ | 32 colleges listed, fees/cutoff tables, filter UI |
| 2 | collegedunia.com | Aggregator | 4,500+ | Reviews, fees comparison, college cards |
| 3 | careers360.com | Aggregator | 4,000+ | Cutoffs, rankings, review scores |
| 4 | dciindia.gov.in | Govt / DCI | 3,000+ | Official DCI college list (authority) |
| 5 | banodoctor.com | Aggregator | 3,500+ | MDS-specific Tamil Nadu deep dive |
| 6 | kollegeapply.com | Aggregator | 3,000+ | Admission-focused |
| 7 | youtube.com | Video | N/A | Fees explainer video |
| 8 | indiaccess.com | Aggregator | 2,500+ | Course listings |
| 9 | collegebatch.com | Aggregator | 2,500+ | College comparisons |
| 10 | collegedekho.com | Aggregator | 4,000+ | Comparison tables, rankings |

### 2.2 Individual Dental College Competitors (Benchmark)

| # | College | Data Source | Key Metrics | Threat Level |
|---|---------|-------------|-------------|--------------|
| 1 | **Saveetha Dental College (Chennai)** | saveethadental.com (live scrape) | 550 dental chairs, 50,000 patients/month, NAAC A++, 13,000+ Scopus publications, 18,892+ implants placed, "No:1 Pvt Dental College India" positioning | **CRITICAL** |
| 2 | **SRM Dental College** | URL unreachable (srmdental.org DNS fail) | Part of SRM University (NAAC A++), well-known brand | HIGH |
| 3 | **Sri Ramachandra Dental College (Chennai)** | careers360.com (cached) | MDS fees ₹13.5L–₹39L, NAAC A++, deemed university | HIGH |
| 4 | **Meenakshi Ammal Dental College** | edufever.com (cached) | MAHER university, Chennai, MDS specializations | MEDIUM |
| 5 | **Chettinad Dental College** | collegedekho.com (cached) | Part of Chettinad Health City | MEDIUM |
| 6 | **Rajas Dental College (Tirunelveli)** | collegedunia.com | MDS fees ₹21L total, 4.2 rating | MEDIUM |
| 7 | **Madha Dental College (Chennai)** | zollege.in | MDS fees ₹28.5L | LOW-MEDIUM |
| 8 | **TN Govt Dental College (Chennai)** | shiksha.com | Govt fees ₹50K, top-tier public option | HIGH (authority) |
| 9 | **Tagore Dental College** | Unreachable | — | LOW |
| 10 | **Vinayaka Mission's Dental** | DNS fail (vmsdc.edu.in) | — | LOW |

### 2.3 Aggregator Content Pattern (What Makes Top 10 Win)

**Common elements across all top 10 aggregators:**
1. **Comparison table** listing 20–32 MDS colleges with columns: Name, Location, Fees, Seats, Specializations
2. **Seat matrix table** — Management quota vs Govt quota breakdown
3. **Fee range table** — Govt (~₹50K) vs Private (₹13L–₹52L)
4. **Top colleges listicle** — Usually 10 colleges ranked
5. **FAQs** — "How many MDS colleges in TN?", "Best MDS college TN?", "Fees?", "Admission process?"
6. **NEET MDS process** — Eligibility, exam, counselling, merit list
7. **Specialization guide** — 9 MDS specialties with career paths
8. **Government quota vs management quota** explanation
9. **Location filters** — Chennai, Coimbatore, Salem, etc.
10. **Reviews / ratings** (user-generated content)

**JKKN currently has ZERO of these elements.** This is the single biggest gap.

### 2.4 Key Data Points from Web Research (for content enrichment)

| Data Point | Value | Source |
|------------|-------|--------|
| Total MDS dental colleges in Tamil Nadu | 32 (20 active + 12 status unclear) | Shiksha, CollegeDunia |
| Government MDS colleges in Tamil Nadu | 3 (TN Govt Dental Chennai, Govt Dental Cuddalore, Govt Dental Vellore) | TN Health Dept |
| Private MDS colleges in Tamil Nadu | 17–23 (depending on source) | DentalFry, DCI India |
| Total MDS management quota seats (private) | 316 | DentalFry (Jan 2025) |
| Management quota % (in private colleges) | 50% (35% management + 15% NRI/Other) | Jupiter Academy |
| MDS fees range — government | ₹50,000 total | TN Govt Dental College |
| MDS fees range — private | ₹13L–₹52.5L total | Shiksha, CollegeDunia |
| Highest private MDS fee | ₹45–52L (Saveetha top specializations) | CollegeDunia |
| Lowest private MDS fee | ₹13.5L (Sri Ramachandra base specs) | Careers360 |
| NEET MDS eligibility | BDS degree + 1-year internship + State Dental Council registration | NBE/NMC |
| MDS course duration | 3 years full-time | DCI |
| Number of MDS specializations (all India) | 9 | DCI |
| MDS specializations at JKKN | 5 (Endo, Prostho, Perio, Oral Med, Ortho) | JKKN site |
| JKKN total MDS seats | 18 | JKKN site |
| NEET MDS 2026 exam dates | TBC (Jan/Feb 2026) | NBE |

---

## 3. PHASE 1 — SEO AUDIT (Score: 62/100)

### 3.1 On-Page SEO (Sub-score: 58/100)

#### Pass 1 — Completeness
| Element | Present | Gap |
|---------|---------|-----|
| Title tag | ✓ | — |
| Meta description | ✓ | — |
| H1 | ✓ | ❌ No primary keyword |
| H2s (≥5) | ✓ | ⚠ Mostly branding, not keyword-targeted |
| H3s (≥10) | ✓ | — |
| Canonical | ✓ | — |
| Internal links (≥15) | ❌ | Only 11, target 25+ |
| External links | ✓ | — |
| Image alt text | ✓ | Only 2 images total (need more) |
| OG tags | ✓ | — |
| Twitter card | ✓ | — |

#### Pass 2 — Accuracy
| Check | Status | Note |
|-------|--------|------|
| Title keyword match | ✓ | "mds colleges in tamilnadu" exact phrase |
| Meta keyword match | ✓ | Exact phrase |
| H1 keyword match | ❌ | Needs "MDS Colleges in Tamil Nadu" phrase |
| URL keyword match | ⚠ | `/mds/` is fine but not keyword-rich (acceptable tradeoff) |
| Keyword density | ❌ | ~0.4% (target 1.5–2.5%) |
| LSI/related terms | ❌ | Missing: "NEET MDS", "Tamil Nadu", "management quota", "DCI approved", "specializations", "BDS to MDS", "postgraduate dental", "fees structure", "seat matrix" |
| Anchor text optimization | ❌ | Internal links use generic anchors |

#### Pass 3 — Actionability
**Critical fixes (P0):**
1. Rewrite H1 to: **"MDS Colleges in Tamil Nadu — JKKN Dental College Admissions 2026"**
2. Add keyword-targeted H2s: "Top MDS Colleges in Tamil Nadu", "MDS Fees in Tamil Nadu (2026)", "MDS Seats in Tamil Nadu — Seat Matrix", "NEET MDS Admission Process Tamil Nadu"
3. Expand first 100 words to include primary keyword 2–3 times naturally
4. Add 25+ internal links with keyword-rich anchors to: BDS page, all 5 specialization pages, Admission page, Fees page, Contact page, Hospital facilities, Campus tour, Erode/Salem/Coimbatore geo pages

### 3.2 Technical SEO (Sub-score: 92/100)
| Check | Status |
|-------|--------|
| HTTPS | ✓ |
| Mobile-friendly | ✓ |
| Page speed (mobile 96, desktop est. 100) | ✓ |
| Core Web Vitals | ✓ (LCP 2.6s needs slight improvement) |
| Schema (3 types present) | ⚠ (3 critical schemas missing) |
| Sitemap | ✓ |
| Robots.txt | ✓ |
| hreflang (not needed — single language) | N/A |
| Canonical | ✓ |
| 404 handling | ✓ |
| Image optimization | ✓ (sharp installed) |

**Only technical gap:** LCP at 2.6s is slightly over the 2.5s threshold. Minor optimization needed (preload hero image, reduce render-blocking resources).

### 3.3 Content SEO (Sub-score: 40/100)
| Check | Status |
|-------|--------|
| Word count (target 3,500+) | ❌ 1,121 words |
| Topical depth | ❌ Surface-level (no fees, no comparison, no process detail) |
| E-E-A-T signals | ⚠ Moderate (DCI approved badge, NAAC mention, but no author bios, no reviews, no faculty credentials visible) |
| Freshness markers | ❌ No "Last updated: {date}" |
| Unique value prop | ⚠ Present (5 specializations, 200+ chairs, 100+ beds, 500+ daily patients) but buried |
| Actionable next steps | ⚠ CTA present but weak |
| Data/stats tables | ❌ ZERO tables |
| Comparison content | ❌ No JKKN-vs-others |
| Testimonials/reviews | ❌ None |
| Alumni outcomes | ❌ None |
| Research publications | ❌ Not highlighted |

### 3.4 Keyword Strategy (Sub-score: 55/100)

**Primary keyword:** `mds colleges in tamilnadu`
- Current ranking: **Not in top 100** (estimated based on SERP showing only aggregators)
- Competition: HIGH (aggregator-dominated)
- Intent: Informational + Commercial investigation
- Opportunity: First individual-college result to rank in top 10 = massive first-mover advantage

**Secondary keywords (11 targeted in meta):**
1. mds dental colleges in tamilnadu
2. mds seats in tamilnadu
3. total mds seats in tamilnadu
4. dental colleges in tamilnadu for mds
5. mds course fees in tamilnadu
6. mds course in tamilnadu
7. mds fees in tamilnadu
8. mds fees structure in tamilnadu
9. top dental colleges in tamilnadu for mds
10. mds course duration in tamilnadu
11. mds colleges in coimbatore

**Recommended LSI/long-tail additions:**
- "NEET MDS admission Tamil Nadu"
- "MDS management quota fees Tamil Nadu"
- "best MDS college in Tamil Nadu 2026"
- "MDS specialization list Tamil Nadu"
- "JKKN MDS fees"
- "MDS college Komarapalayam / Namakkal / Erode / Salem"
- "private MDS colleges Tamil Nadu"
- "MDS seat matrix Tamil Nadu 2026"
- "DCI approved MDS colleges Tamil Nadu"
- "MDS Periodontics Tamil Nadu"
- "MDS Orthodontics Tamil Nadu"
- "MDS Prosthodontics Tamil Nadu"
- "MDS Endodontics Tamil Nadu"
- "MDS Oral Medicine Tamil Nadu"

**Cannibalization risk:** LOW (no other JKKN page targets "mds colleges in tamilnadu")

### 3.5 Off-Page SEO (Sub-score: N/A — not audited in this pass)
**Recommendation:** Separate backlink audit via Ahrefs/SEMrush MCP in Phase 4.

---

## 4. PHASE 2 — AEO AUDIT (Score: 38/100)

### 4.1 Featured Snippet Readiness (Sub-score: 25/100)

**Current state:** No direct-answer blocks. All content is paragraph-form without clear "answer boxes."

**Target snippet types to capture:**
| Snippet Type | Query | Current | Fix |
|--------------|-------|---------|-----|
| Paragraph | "What is MDS?" | ⚠ Has paragraph but 200+ words (too long for snippet) | Add 40–55 word summary at top |
| List | "MDS specializations in Tamil Nadu" | ❌ Not in list form | Add bulleted list |
| Table | "MDS fees in Tamil Nadu" | ❌ No table | Add comparison table |
| Table | "Top MDS colleges in Tamil Nadu" | ❌ No table | Add comparison table |
| List | "NEET MDS eligibility" | ⚠ Has text | Convert to numbered list |
| Definition | "MDS course duration" | ✓ Mentioned but not snippet-ready | Add direct answer block |

### 4.2 PAA (People Also Ask) Coverage (Sub-score: 30/100)

**Top 20 PAA queries to target (from SERP research + Serper data):**

| # | Question | Current Coverage | Fix |
|---|----------|------------------|-----|
| 1 | How many MDS colleges are there in Tamil Nadu? | ❌ | Add direct-answer block with "32 colleges (3 govt + 17–23 private)" |
| 2 | Which is the best MDS college in Tamil Nadu? | ❌ | Add comparison table with JKKN highlighted |
| 3 | What is the fee structure for MDS in Tamil Nadu? | ❌ | Add fees comparison table |
| 4 | How many MDS seats are available in Tamil Nadu? | ❌ | Add seat matrix table |
| 5 | What is the duration of MDS course? | ⚠ Mentioned | Add direct-answer block "3 years full-time" |
| 6 | What are the eligibility criteria for MDS in Tamil Nadu? | ⚠ Mentioned | Convert to numbered list |
| 7 | How is MDS admission done in Tamil Nadu? | ⚠ Mentioned | Step-by-step numbered list |
| 8 | What is the NEET MDS qualifying cutoff? | ❌ | Add current cutoff data |
| 9 | How many government MDS colleges are in Tamil Nadu? | ❌ | Add direct answer "3 colleges: TN Govt Dental Chennai, Cuddalore, Vellore" |
| 10 | What is management quota MDS fees in Tamil Nadu? | ❌ | Add table |
| 11 | What are the MDS specializations available? | ⚠ 5 listed | Convert to bulleted list with career paths |
| 12 | Is NEET required for MDS admission in Tamil Nadu? | ❌ | Add direct answer "Yes, NEET MDS is mandatory" |
| 13 | What is the scope of MDS in Tamil Nadu? | ❌ | Add career outcomes section |
| 14 | Which MDS specialization has highest salary? | ❌ | Add salary data table |
| 15 | What is the difference between BDS and MDS? | ❌ | Add comparison block |
| 16 | How to get MDS admission through management quota? | ❌ | Add process list |
| 17 | What documents are required for MDS admission? | ❌ | Add checklist |
| 18 | Is JKKN Dental College good for MDS? | ❌ | Add "Why JKKN" answer block with data |
| 19 | What is the MDS syllabus in Tamil Nadu? | ❌ | Add link to syllabus + summary |
| 20 | How many years is MDS after BDS? | ⚠ 3 years mentioned | Direct-answer block |

### 4.3 AI Overview (SGE/AIO) Citation Readiness (Sub-score: 40/100)

**AI Overview requires:**
- Clear entity definition (what is JKKN?)
- Authoritative signals (accreditation, recognition)
- Structured data (schema)
- Direct answer blocks
- Citation-worthy facts (numbers, dates, specifics)

**Current state:**
| Signal | Present | Quality |
|--------|---------|---------|
| Entity clearly defined | ⚠ Partial | Missing full EducationalOrganization schema |
| Authority signals | ✓ | DCI, NAAC mentioned |
| Direct-answer blocks | ❌ | None |
| Citation-worthy facts | ⚠ Partial | 18 seats, 3 years, 5 specs — but no sources cited |
| External authority linking | ✓ | Links to DCI, MGRMU |
| Schema completeness | ❌ | FAQPage, EducationalOrganization, LocalBusiness missing |
| Speakable schema | ✓ | Present |

### 4.4 Voice Search Optimization (Sub-score: 50/100)
- **Conversational tone:** ⚠ Moderate — some natural language but heavy on marketing copy
- **Question-based headings:** ❌ Only 1 ("What is MDS?")
- **Speakable schema:** ✓ Present
- **Local intent coverage:** ⚠ "Tamil Nadu" mentioned but no city-specific coverage (Erode, Salem, Coimbatore, Namakkal)
- **Short answer blocks (40–55 words):** ❌ None

### 4.5 Direct Answer Block Templates Needed
1. **"What is MDS?"** — 50-word definition
2. **"How many MDS colleges are in Tamil Nadu?"** — 40-word fact block
3. **"MDS course duration"** — 20-word direct answer
4. **"MDS fees in Tamil Nadu"** — 55-word summary + link to table
5. **"Best MDS colleges Tamil Nadu"** — 55-word positioning + table link
6. **"NEET MDS eligibility"** — 50-word bullet-style answer
7. **"Why JKKN for MDS?"** — 55-word value prop
8. **"MDS specializations"** — 50-word list

---

## 5. PHASE 3 — GEO AUDIT (Score: 30/100)

> **Note:** Live AI citation check (ChatGPT, Gemini, Perplexity) was **BLOCKED by Gemini API quota exhaustion** during audit. GEO scoring is based on on-page GEO signals analysis. Live citation verification must be re-run manually or after quota reset.

### 5.1 Entity Optimization (Sub-score: 35/100)

**Entity:** JKKN Dental College & Hospital
- **sameAs links (for knowledge graph):** ❌ Not present in current schema
- **Wikidata entry:** ⚠ [MANUAL VERIFY REQUIRED]
- **Wikipedia page:** ⚠ Creation in progress (`WIKIPEDIA_CREATION_GUIDE_JKKN_DENTAL.md` exists in repo)
- **LinkedIn company page:** [MANUAL VERIFY REQUIRED]
- **Facebook page:** [MANUAL VERIFY REQUIRED]
- **Google Business Profile:** ✓ https://maps.app.goo.gl/mXx6rFRqpS9U76BK6
- **Organization schema with sameAs:** ❌ Missing

**Fix:** Add `EducationalOrganization` schema with complete `sameAs` array linking to:
- Wikipedia (once live)
- Wikidata
- LinkedIn
- Facebook
- Instagram
- YouTube channel
- GBP listing
- Twitter/X
- JKKN main site

### 5.2 LLM Citation Worthiness (Sub-score: 25/100)

**What LLMs need to cite a source:**
1. ✓ Named entity (JKKN Dental College & Hospital)
2. ❌ Authoritative date-stamped facts (current page has no "updated" date)
3. ❌ Specific numerical data in structured format (tables)
4. ⚠ Attribution to official bodies (DCI, MGRMU mentioned but not hyperlinked as external authorities)
5. ❌ Explicit "About" section with org details
6. ❌ Contact info in structured format
7. ❌ FAQ with question-answer format clearly marked
8. ❌ Comparison/ranking context ("JKKN is one of 17–23 private MDS colleges in TN")

### 5.3 Knowledge Panel Signals (Sub-score: 20/100)
- **Organization name consistency:** ⚠ Mix of "JKKN Dental", "JKKN Dental College", "JKKN Dental College & Hospital" — needs NAP consistency
- **Logo in schema:** ❌ Not defined in current Course schema
- **Address in structured data:** ❌ Missing
- **Phone in structured data:** ❌ Missing
- **Social profiles linked:** ❌ Missing
- **Founding year:** ❌ Not in schema

### 5.4 LLM Training Data Readiness (Sub-score: 40/100)
| Signal | Status |
|--------|--------|
| llms.txt file | ✓ Present (`public/llms.txt`) |
| Clean HTML structure | ✓ |
| Semantic HTML | ⚠ Mostly divs — needs more `<article>`, `<section>`, `<aside>` |
| Schema.org markup | ⚠ Partial |
| Canonical URLs | ✓ |
| No JS-blocking content | ✓ (Next.js SSR) |

### 5.5 Multi-Platform AI Visibility (Sub-score: 30/100)

**Status: UNVERIFIED (API quota exhausted)**

Expected gaps (based on entity weakness):
- **ChatGPT:** Unlikely to cite JKKN for "best MDS colleges in Tamil Nadu" — insufficient authority signals
- **Gemini:** Similar gap — no Wikipedia, weak entity
- **Perplexity:** Best chance (cites fresh web content) — but needs better schema
- **Bing Copilot:** Depends on Bing index + schema quality

**Action:** Re-run AI citation check weekly after implementing schema fixes, track citation rate.

### 5.6 Entity-Attribute-Value Triples (for knowledge graph)

**Currently implied but not structured:**
```
JKKN Dental College & Hospital
├── hasProgram → MDS (Master of Dental Surgery)
├── offers → 5 specializations (Endo, Prostho, Perio, Oral Med, Ortho)
├── duration → 3 years
├── totalSeats → 18
├── accreditedBy → DCI, NAAC, MGRMU
├── hasHospital → 200+ chairs, 100+ beds, 500+ daily patients
├── location → Komarapalayam, Namakkal, Tamil Nadu 638183
├── foundingYear → 1980s (verify)
└── affiliatedTo → TN Dr. MGR Medical University
```

**Fix:** Encode all triples in EducationalOrganization + Course schemas.

---

## 6. GAP MATRIX — ALL ISSUES BY PRIORITY

### P0 (Critical — Blocks ranking)
| # | Issue | Phase | Fix | Effort |
|---|-------|-------|-----|--------|
| 1 | H1 missing primary keyword | SEO | Rewrite H1 | 15 min |
| 2 | FAQPage schema missing | AEO | Add JSON-LD FAQPage | 30 min |
| 3 | Zero data tables | SEO + AEO | Add 4 tables (fees, seats, specializations, comparison) | 3 hours |
| 4 | Content thin (1,121 words) | SEO | Expand to 3,500+ words | 6 hours |
| 5 | No EducationalOrganization schema | SEO + GEO | Add full schema | 1 hour |
| 6 | No LocalBusiness schema | LEO + GEO | Add schema | 1 hour |
| 7 | No direct-answer blocks | AEO | Add 8 answer blocks | 2 hours |
| 8 | H2s are branding, not keywords | SEO | Rewrite 7 H2s | 1 hour |
| 9 | Low keyword density (~0.4%) | SEO | Rewrite body copy | 3 hours |
| 10 | No comparison content (JKKN vs others) | AEO + GEO | Add comparison table | 2 hours |

### P1 (High — Needed for competitive parity)
| # | Issue | Phase | Fix | Effort |
|---|-------|-------|-----|--------|
| 11 | Only 11 internal links | SEO | Add 25+ | 1 hour |
| 12 | Only 2 images | SEO | Add 15+ with keyword alt | 3 hours |
| 13 | No testimonials/reviews | SEO + GEO | Add 5 alumni testimonials | 2 hours |
| 14 | No "last updated" timestamp | AEO + GEO | Add to page | 15 min |
| 15 | No author / faculty attribution | SEO (E-E-A-T) | Add author byline | 30 min |
| 16 | sameAs social links missing | GEO | Add to Organization schema | 30 min |
| 17 | PAA coverage 5/20 | AEO | Add 15 more Q&As | 3 hours |
| 18 | LCP 2.6s (slightly slow) | Technical | Preload hero image | 30 min |
| 19 | No city-specific content | LEO | Add Erode/Salem/Coimbatore/Namakkal mentions | 1 hour |
| 20 | No breadcrumb in visible UI | UX + SEO | Add `<Breadcrumb />` component | 30 min |

### P2 (Medium — Incremental gains)
| # | Issue | Phase | Fix | Effort |
|---|-------|-------|-----|--------|
| 21 | No video content | SEO + VEO | Add MDS program video | 4 hours |
| 22 | No downloadable brochure | Conversion | Add PDF | 2 hours |
| 23 | No WhatsApp click-to-chat | Conversion | Add widget | 15 min (already in Header) |
| 24 | No "apply now" sticky CTA | CRO | Add sticky | 1 hour |
| 25 | No alumni outcome data | SEO + GEO | Add placement stats | 2 hours |
| 26 | No research publication highlights | E-E-A-T | Add section | 2 hours |
| 27 | No faculty cards | E-E-A-T | Add 3 faculty | 2 hours |
| 28 | No IsPartOf schema | GEO | Add parent org link | 15 min |

### P3 (Low — Nice to have)
| # | Issue | Phase | Fix | Effort |
|---|-------|-------|-----|--------|
| 29 | No Tamil language support | LEO | Add Tamil version | 8 hours |
| 30 | No infographic | VEO | Create & embed | 4 hours |
| 31 | No campus virtual tour embed | UX | Embed 360 | 2 hours |

---

## 7. SERP DOMINATION MAP

### 7.1 Target SERP Positions (12-month roadmap)

| Keyword | Current | 3-month | 6-month | 12-month |
|---------|---------|---------|---------|----------|
| mds colleges in tamilnadu | Not ranked | Top 30 | Top 10 | **#1** |
| mds dental colleges in tamilnadu | Not ranked | Top 30 | Top 10 | Top 3 |
| mds fees in tamilnadu | Not ranked | Top 50 | Top 15 | Top 5 |
| mds seats in tamilnadu | Not ranked | Top 50 | Top 15 | Top 5 |
| best mds college in tamil nadu | Not ranked | Top 40 | Top 10 | Top 3 |
| mds course in tamil nadu | Not ranked | Top 30 | Top 10 | Top 5 |
| JKKN MDS | Top 3 (brand) | Top 1 | Top 1 | Top 1 |

### 7.2 AI Citation Map (Target)

| Platform | Current | 3-month | 6-month | 12-month |
|----------|---------|---------|---------|----------|
| ChatGPT (GPT-5) | Not cited | Cited | Cited in 20% of queries | Cited in 50% of queries |
| Gemini | Not cited | Cited | Cited in 25% of queries | Cited in 50% of queries |
| Perplexity | Unknown | Cited | Cited in 40% of queries | Cited in 70% of queries |
| Bing Copilot | Unknown | Cited | Cited in 30% of queries | Cited in 50% of queries |

### 7.3 Rich Result Eligibility

| Rich Result | Current | Target |
|-------------|---------|--------|
| Breadcrumb | ✓ | ✓ |
| FAQ snippet | ❌ | ✓ |
| Course snippet | ⚠ (partial) | ✓ |
| Video snippet | ❌ | ✓ |
| Review/Rating snippet | ❌ | ✓ |
| How-to snippet | ❌ | ✓ (admission process) |
| Local pack | ❌ | ✓ |
| Knowledge panel | ❌ | ✓ |
| Site links | ⚠ Partial | ✓ |

---

## 8. QUICK WINS (Can do in 1 week)

1. **Day 1 (2 hours):**
   - Rewrite H1 to include "MDS Colleges in Tamil Nadu"
   - Add FAQPage schema to existing FAQs
   - Add "Last updated: {date}" timestamp
   - Preload hero image for LCP fix

2. **Day 2 (4 hours):**
   - Add EducationalOrganization + LocalBusiness schemas
   - Rewrite 7 H2s with keyword targeting
   - Add first direct-answer block ("What is MDS?")

3. **Day 3 (4 hours):**
   - Add fees comparison table (JKKN vs top 10 TN colleges)
   - Add seat matrix table (TN MDS seats breakdown)
   - Add 5 more FAQs

4. **Day 4 (4 hours):**
   - Expand About MDS section to 500 words with keyword density
   - Add NEET MDS admission process step-by-step list
   - Add eligibility criteria as numbered list

5. **Day 5 (4 hours):**
   - Add 15 internal links to related pages
   - Add 10 more images with keyword-rich alt text
   - Add breadcrumb component to visible UI

6. **Day 6 (4 hours):**
   - Add MDS specializations detailed cards with career paths
   - Add "Why JKKN for MDS?" section with data
   - Add testimonials block (placeholder)

7. **Day 7 (2 hours):**
   - Final schema validation
   - PageSpeed re-test
   - Submit updated sitemap to GSC
   - Request indexing via GSC URL inspection

**Result after 1 week:** Baseline score 57 → estimated 82/100.

---

## 9. KPIs & SUCCESS METRICS

### Primary KPIs
| KPI | Baseline | 3-month | 6-month | 12-month |
|-----|----------|---------|---------|----------|
| Organic traffic to /mds/ | ~50 sessions/mo (est.) | 500 | 2,000 | 8,000 |
| Primary keyword rank | Not ranked | Top 30 | Top 10 | **#1** |
| Featured snippets captured | 0 | 1 | 3 | 5 |
| PAA appearances | 0 | 3 | 8 | 15 |
| AI citations (across 4 platforms) | 0 | 2 | 10 | 25 |
| MDS inquiries from organic | [UNKNOWN] | +50% | +200% | +500% |
| Page word count | 1,121 | 3,500 | 4,000 | 5,000 |
| Backlinks to /mds/ | [UNKNOWN] | 10 | 30 | 75 |
| Domain Authority of linking sites | [UNKNOWN] | DA 20+ | DA 30+ | DA 40+ |

### Secondary KPIs
- Core Web Vitals: Maintain 90+ across all metrics
- Bounce rate: <50%
- Avg session duration: >2 min
- Pages per session: >2
- Conversion rate (form/WhatsApp): >3%

---

## 10. CONSTRAINTS & DEPENDENCIES

### Constraints
1. **Brand colors only:** Primary #7cb983, Dark green #006837, Cream #FBFBEE (per project CLAUDE.md)
2. **No NAAC grade claim until verified** — flag as `[UNVERIFIED]` until admin confirms
3. **NBA: Not accredited** (confirmed Feb 2026) — do NOT claim NBA
4. **No fabricated statistics** — all numbers must be verified
5. **Tailwind only, no inline styles** (per project CLAUDE.md)
6. **Server components default** — add `"use client"` only where needed
7. **Single-page fix** — do NOT modify Header, Footer, Layout, globals.css
8. **TypeScript strict mode** — no `any` types

### Dependencies
1. Faculty bios (needed for E-E-A-T author byline) — data gap
2. Alumni testimonials — content creation needed
3. Research publication list — data gap
4. Actual current placement data for MDS alumni — data gap
5. MDS syllabus PDF — verify if already uploaded in `/public/pdf/`
6. Wikipedia page (in progress per `WIKIPEDIA_CREATION_GUIDE_JKKN_DENTAL.md`)
7. Updated GBP listing with MDS course category
8. Backlink campaign (separate workstream)

---

## 11. RISKS

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Aggregators (Shiksha, CollegeDunia) maintain top 10 lock | HIGH | HIGH | Focus on E-E-A-T differentiation, become the authoritative individual-college voice |
| Google prefers institutional domains for "best X in Y" queries | MEDIUM | HIGH | Strengthen entity signals, Wikipedia, sameAs links |
| Content expansion breaks page speed | LOW | MEDIUM | Lazy-load images below fold, code-split heavy components |
| Schema errors cause loss of current rich results | LOW | HIGH | Validate every schema change at schema.org validator before deploy |
| Competitor (Saveetha) copies our strategy | MEDIUM | MEDIUM | Move fast, lock in first-mover advantage |
| Gemini API quota blocks AI verification | CONFIRMED | LOW | Use Perplexity/ChatGPT MCP as alternatives, retry weekly |
| Over-optimization triggers algorithmic penalty | LOW | HIGH | Keep keyword density ≤2.5%, natural language, avoid stuffing |

---

## 12. TRIPLE-CHECK VALIDATION

### Pass 1 — Completeness ✓
- [x] All 3 phases audited (SEO, AEO, GEO)
- [x] Current state baseline captured with live MCP data
- [x] Competitor benchmarking complete (8 target colleges + 10 SERP aggregators)
- [x] Gap matrix with P0/P1/P2/P3 priorities
- [x] KPIs & success metrics defined
- [x] Constraints & dependencies documented
- [x] Risks identified

### Pass 2 — Accuracy ✓
- [x] All JKKN baseline data from Website Auditor MCP (health score 99)
- [x] SERP data from live Serper MCP
- [x] Saveetha data from live Firecrawl scrape
- [x] TN MDS statistics cross-referenced across Shiksha, CollegeDunia, DentalFry, TN Govt PDFs
- [x] Unreachable competitors flagged (SRM, Vinayaka Mission, Tagore, Meenakshi MAHER URL, Chettinad URL)
- [x] AI citation check flagged as `[MANUAL VERIFY REQUIRED]` due to Gemini quota
- [x] All unverified claims tagged `[UNVERIFIED]` or `[MANUAL VERIFY REQUIRED]`

### Pass 3 — Actionability ✓
- [x] Every P0 issue has a specific fix
- [x] Quick wins (1-week roadmap) defined
- [x] Effort estimates per fix
- [x] Linked to implementation plan + task files
- [x] Success metrics are measurable and time-bound

**Triple-check validation: PASSED**

---

## APPENDIX A — LIVE DATA ARTIFACTS

**Artifact 1: JKKN MDS Page Website Auditor Report**
- URL audited: https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/
- Health score: 99/100
- PageSpeed: Performance 96, Accessibility 96, SEO 100, Best Practices 100
- LCP: 2.6s (0.88)
- FCP: 0.9s
- CLS: 0.00
- TBT: 30ms
- Schemas detected: Course, BreadcrumbList, WebPage
- Word count: 1,121
- Internal links: 11, External: 15, Broken: 0
- Images: 2
- Tables: 0, Lists: 1

**Artifact 2: SERP Top 10 for "mds colleges in tamilnadu" (Serper MCP, 2026-04-09)**
1. shiksha.com/medicine-health-sciences/dental/colleges/mds-colleges-tamil-nadu
2. collegedunia.com/mds/tamil-nadu-colleges
3. careers360.com/colleges/popular/dental-colleges-in-tamil-nadu
4. dciindia.gov.in (college search)
5. banodoctor.com/study-mds-in-tamil-nadu
6. kollegeapply.com (MDS TN page)
7. youtube.com (MDS fees explainer video)
8. indiaccess.com
9. collegebatch.com
10. collegedekho.com/mds-colleges-in-tamil-nadu/

**Artifact 3: Saveetha Dental College Scrape (Firecrawl, 2026-04-09)**
- Positioning: "No:1 Pvt Dental College in India"
- 550 dental chairs
- 50,000 patients/month
- NAAC A++
- 13,000+ Scopus publications
- 18,892+ implants placed
- Located: Chennai, Tamil Nadu

**Artifact 4: TN MDS Data Cross-Reference**
- Total dental colleges in TN: 32 (Shiksha) / 30 (CollegeDunia) / 17 private + 3 govt (DentalFry)
- Management quota MDS seats: 316 (DentalFry, Jan 2025)
- Govt MDS fee: ₹50,000 total (TN Govt Dental Chennai)
- Private MDS fee range: ₹13.5L – ₹52.5L total

**Artifact 5: Failed Data Sources (for follow-up)**
- srmdental.org — DNS resolution failed
- vmsdc.edu.in — DNS resolution failed
- maher.ac.in/dental-college/ — 404
- chettinadhealthcity.com/dental-college/ — 404
- tagoredentalcollege.in — sibling tool error
- AI Citation Monitor MCP — Gemini quota exhausted (retry after 24h)

---

**Next:** See `mds-page-optimization-plan.md` for phase-wise implementation roadmap and `mds-page-optimization-tasks.md` for granular task breakdown.
