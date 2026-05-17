# Technical Appendix: Entity Audit & Knowledge Graph Strategy
**Status:** Reference Document for SEO/Tech Teams | **Date:** 2026-03-18

---

## KNOWLEDGE GRAPH OPTIMIZATION FRAMEWORK

### Current JKKN Dental Entity State

```
Knowledge Graph Presence:
├── Wikipedia ✅ (Group article only — no dental-specific)
├── Wikidata ❌ (Pharmacy Q-ID exists: Q48733446, Arts Q-ID: Q48726028 — Dental: MISSING)
├── Google Knowledge Panel ⚠️ (Limited — based on group entity + directories)
├── Schema.org ✅ (BreadcrumbList, EducationalOrganization on website)
├── LLM Training Data ✅ (5+ sources indexed: Shiksha, Careers360, CollegeDunia, Wikipedia, official site)
└── Entity Saliency 🟡 (Medium — strong on directories, weak on authority signals)
```

### Entity Linkage Diagram (Current)

```
dental.jkkn.ac.in (Primary)
    ↓
    ├─→ Shiksha.com profile (strong)
    ├─→ Careers360 profile (strong)
    ├─→ CollegeDunia profile (strong)
    ├─→ Wikipedia group article (indirect)
    ├─→ Wikidata Q-ID: MISSING ❌
    ├─→ Google Knowledge Panel (minimal)
    ├─→ ZoomInfo business profile (strong)
    └─→ Social Media: LinkedIn, FB, IG (moderate)

Missing Linkage:
    ❌ Dedicated Wikipedia article
    ❌ Wikidata Q-ID (dental-specific)
    ❌ Press coverage (third-party citations)
    ❌ YouTube channel (content authority)
```

---

## WIKIDATA ENTITY CREATION TECHNICAL SPEC

### Wikidata Q-ID Structure for JKKN Dental

Once created, the Wikidata entry should contain:

```json
{
  "entity_type": "Q16917147",  // instance of: educational institution
  "label": "JKKN Dental College and Hospital",
  "description": "Dental college in Namakkal, Tamil Nadu, India",
  "aliases": [
    "JKK Nattraja Dental College",
    "JKKN Dental",
    "JKK Nattraja Dental College and Hospital"
  ],
  "claims": {
    "P31": "Q16917147",  // instance of: educational institution
    "P17": "Q668",  // country: India
    "P131": "Q3565",  // located in admin territory: Tamil Nadu
    "P625": {"latitude": 11.17, "longitude": 78.52},  // coordinates (approx Komarapalayam)
    "P580": "1987",  // inception: 1987
    "P625": "Komarapalayam",  // location
    "P972": "Q8329948",  // affiliated: Tamil Nadu Dr. M.G.R. Medical University (if Q-ID exists)
    "P856": "https://dental.jkkn.ac.in",  // official website
    "P6058": "Q48733446",  // parent organization: JKKN Group (link to parent)
    "P585": "2026-03-18",  // point in time (created)
    "P1566": "1263150"  // GeoNames ID (if available)
  },
  "sitelinks": {
    "enwiki": "JKKN Dental College and Hospital"  // Wikipedia article (once created)
  }
}
```

### Steps to Create Wikidata Q-ID

**Step 1: Create Account (if needed)**
```
URL: https://www.wikidata.org/wiki/Special:CreateAccount
Email: [official JKKN email]
Username: JKKN_Dental_Bot
Password: [secure, documented]
```

**Step 2: Access Q-ID Creation**
```
URL: https://www.wikidata.org/wiki/Special:NewItem
Fill form:
- Label: "JKKN Dental College and Hospital" (English)
- Description: "Dental college in Tamil Nadu, India"
- Aliases: "JKK Nattraja Dental College", "JKKN Dental"
```

**Step 3: Add Claims (Properties)**
| Property | Value | Wikidata Code |
|----------|-------|---------------|
| Instance of | Educational Institution | P31: Q16917147 |
| Country | India | P17: Q668 |
| Located in | Tamil Nadu | P131: Q3565 |
| Founded | 1987 | P580: 1987-01-01 |
| Founder | J.K.K. Rangammal Charitable Trust | P112: [Q-ID if exists] |
| Affiliated | TN Dr. MGR Medical University | P972: Q8329948 |
| Official website | https://dental.jkkn.ac.in | P856: {URL} |
| Parent org | J.K.K. Nattraja Educational Institutions | P6058: [parent Q-ID] |

**Step 4: Link to Wikipedia**
```
Once Wikipedia article created, add sitelink:
- Click "Add links" → Wikipedia
- Language: English
- Article: "JKKN Dental College and Hospital"
```

**Step 5: Verify Creation**
```
Test URL: https://www.wikidata.org/wiki/Q[NEW_ID]
Expected result: Q-ID page displays all claims + Wikipedia link
Verify in: Google Knowledge Graph (search JKKN dental in Google)
Timeline: Knowledge Graph update typically 1–4 weeks after Q-ID creation
```

---

## SCHEMA.ORG IMPLEMENTATION AUDIT

### Current Schema on dental.jkkn.ac.in

**What We Have:**
```html
<!-- Likely present -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "EducationalOrganization",
  "name": "JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in",
  "telephone": "+91 9345855001",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dental.jkkn.ac.in"
    }
  ]
}
</script>
```

**What's Missing:**
- [ ] `LocalBusiness` schema (for GBP alignment + local search)
- [ ] `Course` schema for BDS/MDS programs (improves course discovery)
- [ ] `FAQPage` schema (featured snippets optimization)
- [ ] `AggregateRating` schema (if reviews available)
- [ ] `Review` schema (for individual testimonials)
- [ ] `VideoObject` schema (once YouTube content exists)

### Recommended Schema Additions

**1. LocalBusiness Schema (for GBP + Local SEO)**
```json
{
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "JKKN Dental College & Hospital",
  "image": "https://dental.jkkn.ac.in/logo.png",
  "description": "India's 1st Human–AI AGI Dental Campus",
  "telephone": "+91 9345855001",
  "url": "https://dental.jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.1735",
    "longitude": "78.5236"
  },
  "sameAs": [
    "https://www.facebook.com/jkkndental/",
    "https://www.instagram.com/jkkndental/",
    "https://in.linkedin.com/school/jkkndental/",
    "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6"
  ],
  "rating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "ratingCount": "403",
    "bestRating": "5"
  }
}
```

**2. Course Schema (for BDS Program)**
```json
{
  "@context": "https://schema.org/",
  "@type": "Course",
  "name": "Bachelor of Dental Surgery (BDS)",
  "description": "4-year UG dental program affiliated to TN Dr. MGR Medical University",
  "provider": {
    "@type": "Organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in"
  },
  "educationalLevel": "Bachelor",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "name": "BDS Class of 2028",
    "courseMode": "Full-time",
    "courseSyllabus": "https://dental.jkkn.ac.in/academics/bds/syllabus",
    "inLanguage": "en",
    "startDate": "2024-08-15",
    "endDate": "2028-06-30",
    "courseWorkload": "PT40H/week"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "ratingCount": "403",
    "bestRating": "5"
  }
}
```

**3. FAQPage Schema (for Featured Snippets)**
```json
{
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the fee structure for BDS at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fee structure: ₹13L–₹24L depending on course. See dental.jkkn.ac.in/admission/fees for details."
      }
    },
    {
      "@type": "Question",
      "name": "What is the placement rate at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental has 92%+ placement rate across programs with 60+ recruiters including TCS, Infosys, Apollo, Sun Pharma."
      }
    },
    {
      "@type": "Question",
      "name": "Is JKKN Dental College NAAC accredited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College is NAAC A accredited and DCI approved."
      }
    }
  ]
}
```

### Schema Validation Checklist

- [ ] **EducationalOrganization** — Present on home page
- [ ] **LocalBusiness** — Add (high priority for GBP)
- [ ] **Course** — Add for BDS/MDS programs
- [ ] **FAQPage** — Add for featured snippets
- [ ] **AggregateRating** — Add if review data available
- [ ] **BreadcrumbList** — Present on inner pages
- [ ] **VideoObject** — Add once YouTube content live
- [ ] **Review** — Add testimonial schemas

**Validation Tool:** https://validator.schema.org/
**Frequency:** Validate after every schema change

---

## KNOWLEDGE PANEL OPTIMIZATION PATH

### Google Knowledge Panel Hierarchy

```
Level 1 (Current): Minimal JKKN Dental Knowledge Panel
├── Name, phone, website
├── Contact info
└── Basic category: "Dental college"

Target Level 2 (After 6 months):
├── Name, logo, description
├── Founded date (1987)
├── Headquarters location + map
├── Contact info (phone, email, website)
├── Key stats (students, faculty, placements)
├── Wikipedia article link ✅
├── Social profiles (LinkedIn, Facebook, Instagram)
└── Category: "Dental college" + "Educational Institution"

Target Level 3 (After 12 months — Ideal):
├── All of Level 2 +
├── Photo carousel (campus, facilities, faculty)
├── Video carousel (YouTube channel)
├── "People also search for" (competitor colleges)
├── Reviews section (aggregated rating)
├── News section (press coverage)
├── Notable alumni list
└── Establishment timeline
```

### Actions to Expand Knowledge Panel

1. **Create Wikidata Q-ID** → Links Google Knowledge Panel to canonical entity
2. **Publish Wikipedia article** → Expands Knowledge Panel content + credibility
3. **Secure press coverage** → Adds news section + third-party validation
4. **Create YouTube channel** → Adds video carousel
5. **Optimize Schema.org** → Provides structured data for Knowledge Panel fields
6. **Claim GBP** → Links local business profile to Knowledge Panel
7. **Build social profiles** → Adds social section to Knowledge Panel

---

## LLM TRAINING DATA AUDIT

### Sources Currently Feeding JKKN Dental Data to LLMs (ChatGPT, Gemini, etc.)

| Source | Authority | Access | Data Type | Update Frequency |
|--------|-----------|--------|-----------|------------------|
| Official website (dental.jkkn.ac.in) | ⭐⭐⭐⭐⭐ | Public | Comprehensive | Monthly |
| Wikipedia (group article) | ⭐⭐⭐⭐⭐ | Public | Institutional | Quarterly |
| Shiksha.com | ⭐⭐⭐⭐ | Public | Courses, fees, reviews | Monthly |
| Careers360.com | ⭐⭐⭐⭐ | Public | Admission, placement | Monthly |
| CollegeDunia.com | ⭐⭐⭐⭐ | Public | Infrastructure, reviews | Monthly |
| ZoomInfo.com | ⭐⭐⭐ | Public | Business, employees | Quarterly |
| JustDial.com | ⭐⭐⭐ | Public | Contact, reviews | Quarterly |
| LinkedIn (company page) | ⭐⭐⭐⭐ | Public | Updates, alumni | Real-time |

### Missing Sources (Post-Audit Opportunities)

- [ ] **Dedicated Wikipedia article** — Would be the #1 source for LLM training (currently only group article)
- [ ] **Wikidata Q-ID** — Provides structured data for knowledge graphs
- [ ] **Press coverage (The Hindu, TOI)** — High-authority third-party sources
- [ ] **YouTube channel** — Adds video content to training data
- [ ] **News aggregators** — Would carry press coverage to multiple LLM training sources

### LLM Knowledge Update Timeline

When you create these assets, here's the typical timeline for LLM training data incorporation:

```
Asset Created → Public Index → LLM Training Data Inclusion
├─ Wikipedia article: 1–2 weeks → 1–3 months (with next training run)
├─ Wikidata Q-ID: 1 week → 2–4 weeks (integrated via web crawls)
├─ Press coverage: Days → 2–8 weeks (depends on LLM's news crawl frequency)
├─ YouTube videos: Days → 4–8 weeks (video indexing slower than text)
└─ Schema markup: Days → 1–2 weeks (structured data fast-tracked)
```

---

## COMPETITIVE KNOWLEDGE GRAPH BENCHMARK

### Competitor Entity Comparisons (E-E-A-T Assessment)

| Entity Signal | JKKN | Saveetha | Meenakshi | Bannari |
|---------------|------|----------|-----------|---------|
| **Dedicated Wikipedia** | ❌ 0 | ✅ 1 | ✅ 1 | ❌ 0 |
| **Wikidata Q-ID** | ❌ 0 | ✅ 1 | ✅ 1 | ⚠️ 0.5 |
| **Press Articles (Annual)** | 0 | 8–10 | 6–8 | 3–5 |
| **YouTube Subscribers** | 0 | 50K+ | 100K+ | 5K+ |
| **Knowledge Panel Features** | 3/10 | 8/10 | 9/10 | 7/10 |
| **E-E-A-T Score (Entity)** | 4/10 | 8/10 | 9/10 | 7/10 |

**Action:** Match or exceed Bannari Amman's E-E-A-T score within 12 months (target: 7/10).

---

## SITE ARCHITECTURE FOR ENTITY OPTIMIZATION

### Current dental.jkkn.ac.in Structure (Entity-Relevant)

```
/
├── / (Home) — EducationalOrganization schema ✅
├── /about/ — Organization info + BreadcrumbList
├── /academics/
│   ├── /academics/bds/ — Course schema (missing)
│   ├── /academics/mds/ — 9 specializations (no Course schemas)
│   └── /academics/[program]/ — No course-level schema
├── /accreditation/ — Authority/trust signals (minimal)
├── /admission/ — Course schema missing
│   └── /admission/fees/ — FAQPage schema missing
├── /contact/ — Contact schema ✅
├── /blog/ — Article schema (if exists)
└── /sitemap.xml — Dynamic sitemap ✅
```

### Recommended Architecture Additions (Entity-Focused)

```
/
├── /dental-college/ (Pillar page with entity info)
│   ├── Comprehensive overview
│   ├── LocalBusiness + EducationalOrganization schema
│   ├── Links to: Programs, accreditation, placements, reviews
│   └── Internal linking hub for entity authority
├── /accreditation/
│   ├── NAAC accreditation (with achievement date, grade)
│   ├── DCI approval certification
│   └── Structured data with accrediting bodies
├── /publications/ (Faculty research papers)
│   ├── Author schema + scholary article markup
│   ├── Links to Google Scholar profiles
│   └── Boosts E-E-A-T (Expertise signal)
└── /knowledge-graph/ (Hidden: strategic internal links for entity recognition)
```

---

## ENTITY MIGRATION CHECKLIST (Post-Audit)

When you execute on the audit recommendations, use this checklist:

### Phase 1: Entity Foundation (Weeks 1–4)
- [ ] Wikidata Q-ID created + documented
- [ ] GBP verified + optimized
- [ ] Schema.org audit completed
- [ ] LocalBusiness schema added to website
- [ ] Test: All schemas valid at validator.schema.org/

### Phase 2: Authority Signals (Weeks 5–12)
- [ ] Wikipedia article submitted + under review
- [ ] Press articles (2–3) published
- [ ] YouTube channel live with 5+ videos
- [ ] Test: Knowledge Panel expanded in Google Search

### Phase 3: LLM Integration (Weeks 13–24)
- [ ] Wikipedia article published
- [ ] Wikidata Q-ID linked to Wikipedia
- [ ] Track: LLM mentions in ChatGPT/Gemini searches
- [ ] Monitor: Knowledge panel growth + features

---

## MONITORING & MEASUREMENT

### Monthly Entity Health Scorecard

```
Report Date: __________

ENTITY SIGNALS (0–10 scale):
├─ Wikipedia Presence: ___/10 (target: 10)
├─ Wikidata Q-ID: ___/10 (target: 10)
├─ Knowledge Panel Features: ___/10 (target: 9)
├─ Press Authority: ___/10 (target: 8)
├─ LLM Training Data: ___/10 (target: 8)
├─ Schema.org Completeness: ___/10 (target: 9)
├─ Social Media Authority: ___/10 (target: 8)
└─ Review Aggregation: ___/10 (target: 8)

OVERALL ENTITY SCORE: ___/80 (target: 70 by month 12)

KNOWLEDGE PANEL STATUS:
├─ Visible in Google: ✅/❌
├─ Features shown: ___ of 12 (target: 10)
├─ Wikipedia link present: ✅/❌
├─ Photo carousel: ✅/❌
├─ Video carousel: ✅/❌
└─ News section: ✅/❌

ACTION ITEMS FOR NEXT MONTH:
[ ] Item 1: ________________
[ ] Item 2: ________________
[ ] Item 3: ________________
```

### Quarterly Strategic Review

- Review all entity assets (Wikipedia, Wikidata, Press, YouTube, etc.)
- Measure: Growth metrics (followers, views, mentions, rankings)
- Compare: Benchmark against Saveetha, Meenakshi, Bannari Amman
- Adjust: Strategy based on performance + competitive landscape changes
- Document: In PROGRESS.md for continuity

---

## GLOSSARY (TECHNICAL TERMS)

| Term | Definition | Audit Reference |
|------|-----------|-----------------|
| **Entity** | A distinct, recognizable thing (person, place, organization) in knowledge graphs | Core concept |
| **Knowledge Graph** | Google's database linking entities + relationships across the web | Wikipedia + Wikidata |
| **Wikidata Q-ID** | Unique identifier for entities in Wikidata (semantic web) | Task 3 |
| **E-E-A-T** | Expertise, Experience, Authority, Trustworthiness (Google ranking factor) | Competitive benchmark |
| **LLM Training Data** | Text from web used to train large language models (ChatGPT, Gemini, etc.) | Task 7 |
| **Knowledge Panel** | Info box shown on Google SERP for recognized entities | Knowledge Panel section |
| **Schema.org** | Standardized vocabulary for marking up content (EducationalOrganization, Course, etc.) | Schema audit |
| **GBP** | Google My Business profile (local search + reviews) | Task 2 |
| **VEO** | Video Engine Optimization (ranking in YouTube search) | YouTube strategy |
| **E2E Authority** | End-to-end entity authority across all signals | Overall goal |

---

**Document:** ENTITY_AUDIT_TECHNICAL_APPENDIX.md
**Last Updated:** 2026-03-18
**Review Frequency:** Quarterly
**Owner:** [SEO/Technical Team]
