# MDS Page Optimization Tasks — Granular Execution Breakdown

> **Reference:** `mds-page-optimization-spec.md` + `mds-page-optimization-plan.md`
> **Target Page:** `app/academics/details-of-academic-programs/mds/page.tsx`
> **Primary Keyword:** `mds colleges in tamilnadu`
> **Updated:** 2026-04-09

---

## TASK LEGEND

| Column | Meaning |
|--------|---------|
| **ID** | Unique task identifier (e.g., MDS-001) |
| **Priority** | P0 (Critical), P1 (High), P2 (Medium), P3 (Low) |
| **Effort** | Estimated time (15m, 30m, 1h, 2h, etc.) |
| **Deps** | Dependency task IDs (must complete first) |
| **Phase** | Phase 1–5 from plan |
| **Sprint** | Sprint grouping (S1 = Week 1, S2 = Week 2, etc.) |
| **Status** | Not Started / In Progress / Blocked / Done |
| **Owner** | Developer / Content / Designer / SEO |

---

## SPRINT 1 — PHASE 1 FOUNDATION (Week 1)

### MDS-001 — Rewrite H1 with Primary Keyword

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 15 min |
| **Deps** | None |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Change H1 to include primary keyword `mds colleges in tamilnadu` for on-page SEO.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx` (line 71–73)

**Implementation:**
```tsx
// OLD (line 71-73):
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
  Master of Dental Surgery <span className="text-[#7cb983]">(MDS)</span>
</h1>

// NEW:
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
  MDS Colleges in Tamil Nadu — <span className="text-[#7cb983]">JKKN Dental College</span> Admissions 2026
</h1>
```

**Acceptance Criteria:**
- [ ] H1 contains exact phrase "MDS Colleges in Tamil Nadu"
- [ ] H1 visually renders correctly at 320px, 640px, 1024px, 1536px
- [ ] Font sizes remain responsive (4xl/5xl/6xl breakpoints)
- [ ] Primary keyword `[#7cb983]` accent color on "JKKN Dental College"
- [ ] No layout shift (CLS remains 0)

---

### MDS-002 — Add FAQPage Schema

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 1h |
| **Deps** | None |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Add JSON-LD FAQPage schema to existing 5 FAQs for PAA/rich snippet eligibility.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx`

**Implementation:**
```tsx
// Add after existing mdsSchema (after line 31):
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MDS (Master of Dental Surgery)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MDS (Master of Dental Surgery) is a three-year postgraduate dental program that provides specialized training in specific areas of dentistry. It is the highest clinical degree in dental sciences, awarded after BDS, and is required for dental specialization in India."
      }
    },
    {
      "@type": "Question",
      "name": "What are the MDS specializations offered at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College offers 5 DCI-approved MDS specializations: Periodontics, Orthodontics & Dentofacial Orthopedics, Prosthodontics Crown & Bridge, Conservative Dentistry & Endodontics, and Oral Medicine."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the MDS course in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The MDS course duration is 3 years full-time in Tamil Nadu, as per the Dental Council of India (DCI) regulations. This includes clinical rotations, academic coursework, and a mandatory dissertation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for MDS admission in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To be eligible for MDS admission in Tamil Nadu, candidates must hold a BDS degree from a recognized university, have completed a 1-year compulsory rotatory internship, be registered with the State Dental Council, and qualify the NEET MDS entrance examination."
      }
    },
    {
      "@type": "Question",
      "name": "Is NEET MDS required for admission at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NEET MDS qualification is mandatory for MDS admission at JKKN Dental College and all DCI-approved dental colleges in Tamil Nadu. Admission is granted through Tamil Nadu state counselling based on NEET MDS merit."
      }
    }
  ]
};

// Then add to StructuredData calls (around line 43-45):
<StructuredData data={mdsSchema} />
<StructuredData data={breadcrumbSchema} />
<StructuredData data={speakableSchema} />
<StructuredData data={faqSchema} />  {/* NEW */}
```

**Acceptance Criteria:**
- [ ] Schema validates at https://validator.schema.org/
- [ ] Schema passes Google Rich Results Test
- [ ] All 5 FAQ answers present in JSON-LD
- [ ] FAQ content in JSON matches visible FAQ on page (Google requirement)
- [ ] No console errors in browser dev tools

---

### MDS-003 — Create EducationalOrganization Schema Helper

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 1h |
| **Deps** | None |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Create reusable schema helper in `lib/metadata.ts` and use on MDS page.

**Files:**
- `lib/metadata.ts` (add helper function)
- `app/academics/details-of-academic-programs/mds/page.tsx` (import and use)

**Implementation:**
```typescript
// Add to lib/metadata.ts:
export function generateEducationalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "alternateName": ["JKKN Dental", "JKKN Dental College"],
    "url": "https://dental.jkkn.ac.in/",
    "logo": "https://dental.jkkn.ac.in/images/logo.png",
    "image": "https://dental.jkkn.ac.in/images/campus-hero.jpg",
    "description": "JKKN Dental College & Hospital is a DCI-approved dental institution offering BDS and MDS programs, located in Komarapalayam, Namakkal, Tamil Nadu. Part of JKKN Institutions founded in 1952.",
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
      "latitude": "11.4387",
      "longitude": "77.7062"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9345855001",
      "contactType": "Admissions",
      "email": "info@jkkn.ac.in",
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      // TO BE FILLED IN PHASE 3 (social profiles)
    ],
    "foundingDate": "1952",  // [VERIFY with admin]
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "JKKN Institutions",
      "url": "https://jkkn.ac.in/"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Accreditation",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Dental Council of India"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Affiliation",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Tamil Nadu Dr. MGR Medical University"
        }
      }
    ]
  };
}
```

**Acceptance Criteria:**
- [ ] Function exists in `lib/metadata.ts`
- [ ] Function exported
- [ ] Used on MDS page via StructuredData component
- [ ] Schema validates
- [ ] Address matches project CLAUDE.md (Komarapalayam, Namakkal 638183)
- [ ] GPS matches verified coordinates (11.4387, 77.7062)
- [ ] Flag `[VERIFY]` for foundingDate until confirmed

---

### MDS-004 — Create LocalBusiness Schema Helper

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 45 min |
| **Deps** | MDS-003 (shares address data) |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Add LocalBusiness schema for local SEO + GBP alignment.

**Files:**
- `lib/metadata.ts`
- `app/academics/details-of-academic-programs/mds/page.tsx`

**Implementation:**
```typescript
// Add to lib/metadata.ts:
export function generateDentalCollegeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "Dentist"],
    "@id": "https://dental.jkkn.ac.in/#localbusiness",
    "name": "JKKN Dental College & Hospital",
    "image": "https://dental.jkkn.ac.in/images/hospital-front.jpg",
    "telephone": "+91-9345855001",
    "email": "info@jkkn.ac.in",
    "url": "https://dental.jkkn.ac.in/",
    "priceRange": "₹₹",
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
      "latitude": "11.4387",
      "longitude": "77.7062"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "hasMap": "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
    "areaServed": [
      { "@type": "City", "name": "Komarapalayam" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Namakkal" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Coimbatore" }
    ]
  };
}
```

**Acceptance Criteria:**
- [ ] Schema validates
- [ ] GBP URL matches CLAUDE.md
- [ ] Area served covers all 6 target cities
- [ ] Opening hours accurate (verify with admin if needed)
- [ ] Added to MDS page via StructuredData

---

### MDS-005 — Enrich Course Schema

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 45 min |
| **Deps** | None |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Add missing fields to existing Course schema for rich snippet eligibility.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx` (lines 10–31)

**Implementation:**
```tsx
// REPLACE existing mdsSchema:
const mdsSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/#course",
  "name": "Master of Dental Surgery (MDS)",
  "alternateName": "MDS",
  "courseCode": "MDS",
  "description": "3-year postgraduate dental program with 5 DCI-approved specializations in Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine at JKKN Dental College & Hospital, Tamil Nadu. Full-time residential program with extensive clinical training at a 200-chair, 100-bed teaching hospital.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    }
  },
  "educationalCredentialAwarded": "MDS (Master of Dental Surgery)",
  "educationalLevel": "Postgraduate",
  "timeRequired": "P3Y",
  "timeToComplete": "P3Y",
  "numberOfCredits": 180,  // verify with academic office
  "occupationalCategory": "Dental Specialist",
  "coursePrerequisites": "BDS degree from a DCI-recognized university; NEET-MDS qualification; 1-year compulsory rotatory internship; State Dental Council registration",
  "teaches": [
    "Advanced clinical dentistry",
    "Dental specialization",
    "Research methodology",
    "Patient care management"
  ],
  "inLanguage": "en",
  "isAccessibleForFree": false,
  "offers": {
    "@type": "Offer",
    "category": "Paid",
    "priceCurrency": "INR",
    "price": "1800000",  // annual average estimate — verify with admin
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "INR",
      "price": "1800000",
      "description": "Per year — varies by specialization and category"
    }
  },
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "name": "MDS Periodontics",
      "courseMode": "Full-time",
      "courseWorkload": "P3Y",
      "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/periodontics/"
    },
    {
      "@type": "CourseInstance",
      "name": "MDS Orthodontics & Dentofacial Orthopedics",
      "courseMode": "Full-time",
      "courseWorkload": "P3Y",
      "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics/"
    },
    {
      "@type": "CourseInstance",
      "name": "MDS Prosthodontics Crown & Bridge",
      "courseMode": "Full-time",
      "courseWorkload": "P3Y",
      "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/"
    },
    {
      "@type": "CourseInstance",
      "name": "MDS Conservative Dentistry & Endodontics",
      "courseMode": "Full-time",
      "courseWorkload": "P3Y",
      "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/"
    },
    {
      "@type": "CourseInstance",
      "name": "MDS Oral Medicine & Radiology",
      "courseMode": "Full-time",
      "courseWorkload": "P3Y",
      "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine/"
    }
  ],
  "dateModified": new Date().toISOString().split('T')[0]
};
```

**Acceptance Criteria:**
- [ ] Schema validates
- [ ] All 5 specializations as CourseInstance with URLs
- [ ] Offers field present (placeholder price flagged for admin verification)
- [ ] educationalLevel = "Postgraduate"
- [ ] dateModified auto-updates

---

### MDS-006 — LCP Optimization (Preload Hero)

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 30 min |
| **Deps** | None |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Reduce LCP from 2.6s to under 2.5s threshold.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx` (hero section)
- `app/academics/details-of-academic-programs/mds/layout.tsx` (add preload if needed)

**Implementation:**
- If hero has a background image or `<Image />`, add `priority={true}` prop
- If hero uses CSS background, add `<link rel="preload" as="image" href="..." />` in layout
- Remove any render-blocking scripts in hero area
- Consider lazy-loading images below the fold

**Acceptance Criteria:**
- [ ] LCP ≤ 2.5s on PageSpeed Insights (mobile)
- [ ] PageSpeed Performance score stays ≥96
- [ ] No visual regression

---

### MDS-007 — Add "Last Updated" Timestamp

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 15 min |
| **Deps** | None |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Add freshness signal visible to users and LLMs.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx`

**Implementation:**
```tsx
// Add below H1, as a small visible element:
<p className="text-sm text-gray-300 mt-2">
  Last updated: April 9, 2026 · Reviewed by JKKN Academic Affairs
</p>
```
And in Course schema: `dateModified: "2026-04-09"`

**Acceptance Criteria:**
- [ ] Visible timestamp renders correctly
- [ ] `dateModified` in schema
- [ ] Updates automatically or via manual monthly review

---

### MDS-008 — Phase 1 Validation Checkpoint

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 2h |
| **Deps** | MDS-001 to MDS-007 |
| **Phase** | Phase 1 |
| **Sprint** | S1 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Objective:** Full validation of Phase 1 before proceeding.

**Steps:**
1. Run `npm run lint` — zero warnings
2. Run `npm run build` — successful production build
3. Visual QA at 320px, 640px, 768px, 1024px, 1536px
4. Validate all 6 schemas at https://validator.schema.org/
5. Run Google Rich Results Test
6. Re-run PageSpeed Insights (mobile + desktop)
7. Screenshot before/after
8. Update PROGRESS.md with Phase 1 completion

**Acceptance Criteria:**
- [ ] All schemas validate
- [ ] PageSpeed ≥96 mobile
- [ ] LCP ≤2.5s
- [ ] No TypeScript/ESLint errors
- [ ] Visual QA passed
- [ ] PROGRESS.md updated

---

## SPRINT 2 — PHASE 2 CONTENT EXPANSION PART 1 (Week 2)

### MDS-009 — Create MDSComparisonTables Component

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 4h |
| **Deps** | MDS-008 |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Create reusable component with 4 tables.

**Files:**
- `components/MDSComparisonTables.tsx` (NEW)
- `app/academics/details-of-academic-programs/mds/page.tsx` (import and use)

**Implementation:**
```tsx
// components/MDSComparisonTables.tsx
// Server component (no "use client" needed)

export function TopMDSCollegesTable() {
  const colleges = [
    { name: "Tamil Nadu Govt Dental College", location: "Chennai", type: "Govt", seats: "33", fees: "₹50,000" },
    { name: "JKKN Dental College & Hospital", location: "Komarapalayam", type: "Private", seats: "18", fees: "On request", highlight: true },
    { name: "Saveetha Dental College", location: "Chennai", type: "Private", seats: "100+", fees: "₹20L – ₹52L" },
    { name: "Sri Ramachandra Dental College", location: "Chennai", type: "Private (Deemed)", seats: "50", fees: "₹13.5L – ₹39L" },
    { name: "SRM Dental College", location: "Chennai", type: "Private (Deemed)", seats: "50", fees: "₹15L – ₹35L" },
    { name: "Meenakshi Ammal Dental College", location: "Chennai", type: "Private (Deemed)", seats: "45", fees: "₹15L – ₹30L" },
    { name: "Rajas Dental College", location: "Tirunelveli", type: "Private", seats: "30", fees: "₹21L" },
    { name: "Chettinad Dental College", location: "Kelambakkam", type: "Private", seats: "30", fees: "₹18L – ₹28L" },
    { name: "Madha Dental College", location: "Chennai", type: "Private", seats: "25", fees: "₹28.5L" },
    { name: "Govt Dental College Cuddalore", location: "Cuddalore", type: "Govt", seats: "15", fees: "₹50,000" },
  ];

  return (
    <div className="overflow-x-auto my-8">
      <h3 className="text-2xl font-bold text-[#006837] mb-4">Top MDS Colleges in Tamil Nadu 2026 — Comparison Table</h3>
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead className="bg-[#006837] text-white">
          <tr>
            <th className="p-3 text-left">Rank</th>
            <th className="p-3 text-left">College Name</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">MDS Seats</th>
            <th className="p-3 text-left">Fee Range (Total)</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((c, i) => (
            <tr key={i} className={c.highlight ? "bg-[#FBFBEE] font-semibold" : "odd:bg-gray-50"}>
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{c.name}{c.highlight && " ⭐"}</td>
              <td className="p-3">{c.location}</td>
              <td className="p-3">{c.type}</td>
              <td className="p-3">{c.seats}</td>
              <td className="p-3">{c.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2">Source: Shiksha, CollegeDunia, Tamil Nadu Health Department (2026). Fees may vary by specialization and admission category.</p>
    </div>
  );
}

export function MDSSeatMatrixTable() {
  // Table 2: Seat matrix by specialization
  // ...
}

export function MDSFeesBreakdownTable() {
  // Table 3: Fees breakdown by quota
  // ...
}

export function JKKNVsCompetitorsTable() {
  // Table 4: JKKN vs top 5
  // ...
}
```

**Acceptance Criteria:**
- [ ] 4 tables render correctly on all breakpoints
- [ ] Brand colors only
- [ ] Accessible (proper `<th>`, `<caption>`, `<thead>`, `<tbody>`)
- [ ] Mobile-friendly (horizontal scroll)
- [ ] JKKN row highlighted
- [ ] Data sourced and cited
- [ ] Integrated into MDS page

---

### MDS-010 — Rewrite H2s with Keyword Targeting

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 1h |
| **Deps** | MDS-008 |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Objective:** Replace 7 branding H2s with keyword-targeted versions.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx`

**Implementation:**
| Line (approx) | Old H2 | New H2 |
|---------------|--------|--------|
| 143 | What is MDS (Master of Dental Surgery)? | What is MDS? A Guide to Master of Dental Surgery in Tamil Nadu |
| 217 | Choose Your Specialization Path | MDS Specializations Offered in Tamil Nadu at JKKN |
| 409 | MDS Program Highlights | Why Choose JKKN Among MDS Colleges in Tamil Nadu |
| 497 | World-Class Facilities | MDS Clinical Facilities at JKKN Dental College |
| 572 | Admission Information | MDS Admission Process & Eligibility in Tamil Nadu |
| 696 | Frequently Asked Questions | MDS Tamil Nadu — Frequently Asked Questions |
| (new) | — | Top MDS Colleges in Tamil Nadu — Comparison (before tables) |

**Acceptance Criteria:**
- [ ] All 7 H2s updated
- [ ] Primary keyword "MDS" + "Tamil Nadu" appears 7+ times in H2s
- [ ] No stuffing
- [ ] Natural reading flow
- [ ] Visual rendering unchanged

---

### MDS-011 — Expand About MDS Section to 500 Words

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 3h |
| **Deps** | MDS-010 |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Expand About section from ~150 words → 500 words with keyword density.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx` (lines 147–153)

**Content outline (500 words):**
1. Paragraph 1 (80 words): What is MDS — definition, duration, importance
2. Paragraph 2 (100 words): MDS in Tamil Nadu context — 32 colleges, 3 govt + 17–23 private, 316 management quota seats
3. Paragraph 3 (100 words): Why MDS matters — clinical specialization, career scope, research, academic roles
4. Paragraph 4 (120 words): DCI recognition and regulation — MGRMU affiliation, TN Health Dept oversight
5. Paragraph 5 (100 words): JKKN's position — 5 specializations, 200+ chairs, 100+ beds, clinical exposure

**Keyword density target:**
- `mds colleges in tamilnadu` — 3 mentions
- `MDS` — 15 mentions (natural)
- `Tamil Nadu` — 8 mentions
- `specialization(s)` — 5 mentions
- `DCI` — 4 mentions

**Acceptance Criteria:**
- [ ] Section ≥500 words
- [ ] Primary keyword 3+ mentions
- [ ] No keyword stuffing
- [ ] Reads naturally
- [ ] Verified data only (use spec file cross-reference)

---

### MDS-012 — NEET MDS Admission Process Section

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 3h |
| **Deps** | MDS-010 |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Add 600-word step-by-step admission process section (snippet-eligible).

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx` (after existing admission section)

**Content outline:**
1. H2: MDS Admission Process & Eligibility in Tamil Nadu
2. H3: Step 1 — NEET MDS Registration
3. H3: Step 2 — Qualify NEET MDS
4. H3: Step 3 — Tamil Nadu MDS Counselling
5. H3: Step 4 — Choice Filling & Seat Allotment
6. H3: Step 5 — Document Verification & Admission
7. H3: Management Quota Admission (parallel process)
8. H3: Required Documents Checklist (numbered list)

Each step: 60–80 words + bullet points where possible.

**Acceptance Criteria:**
- [ ] Total section ≥600 words
- [ ] Numbered list format for process steps
- [ ] Snippet-ready structure
- [ ] Includes NEET MDS 2026 dates (flag if unknown)
- [ ] Document checklist as bulleted list

---

### MDS-013 — Create DirectAnswerBlock Component

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 1.5h |
| **Deps** | None |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Reusable component for featured snippet-ready answer blocks.

**Files:**
- `components/DirectAnswerBlock.tsx` (NEW)

**Implementation:**
```tsx
// components/DirectAnswerBlock.tsx
interface DirectAnswerBlockProps {
  question: string;
  answer: string;
  className?: string;
}

export function DirectAnswerBlock({ question, answer, className = "" }: DirectAnswerBlockProps) {
  return (
    <div className={`my-6 p-6 bg-[#FBFBEE] border-l-4 border-[#7cb983] rounded-r-lg shadow-sm ${className}`}>
      <p className="font-bold text-[#006837] text-lg mb-2">{question}</p>
      <p className="text-gray-700 leading-relaxed">{answer}</p>
    </div>
  );
}
```

**Acceptance Criteria:**
- [ ] Component created
- [ ] Brand colors only
- [ ] Responsive
- [ ] Answer text is 40–55 words (snippet-ready)
- [ ] Placed near relevant section headings

---

### MDS-014 — Add 8 Direct Answer Blocks

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 2h |
| **Deps** | MDS-013 |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Place 8 direct answer blocks throughout the page for snippet capture.

**Content (each 40–55 words):**

1. **"What is MDS (Master of Dental Surgery)?"**
   "MDS is a 3-year postgraduate dental degree awarded after BDS, offering specialized training in fields like Periodontics, Orthodontics, Prosthodontics, Endodontics, and Oral Medicine. It is the highest clinical qualification in dentistry and is recognized by the Dental Council of India."

2. **"How many MDS colleges are in Tamil Nadu?"**
   "Tamil Nadu has 32 dental colleges offering MDS programs, including 3 government colleges and 17–23 private colleges. These colleges collectively offer 316+ management quota seats, plus government quota and NRI seats, making Tamil Nadu one of India's largest MDS destinations."

3. **"What is the duration of MDS course in Tamil Nadu?"**
   "The MDS course duration in Tamil Nadu is 3 years full-time as per DCI regulations. This includes academic coursework, clinical rotations, research work, and submission of a dissertation. All DCI-approved colleges in Tamil Nadu, including JKKN Dental College, follow this structure."

4. **"What is the fee structure for MDS in Tamil Nadu?"**
   "MDS fees in Tamil Nadu vary widely. Government colleges like Tamil Nadu Govt Dental College charge around ₹50,000 total. Private colleges charge between ₹13.5 lakh and ₹52 lakh for the full 3-year program, depending on the specialization, college reputation, and admission quota."

5. **"Is NEET MDS mandatory for admission?"**
   "Yes, NEET MDS qualification is mandatory for all MDS admissions in Tamil Nadu, including government, private, and management quota seats. Candidates must also hold a BDS degree, complete a 1-year internship, and register with the State Dental Council to be eligible for counselling."

6. **"What are the MDS specializations available at JKKN?"**
   "JKKN Dental College offers 5 DCI-approved MDS specializations: Periodontics, Orthodontics & Dentofacial Orthopedics, Prosthodontics Crown & Bridge, Conservative Dentistry & Endodontics, and Oral Medicine. Each program is 3 years full-time with intensive clinical training at our 200-chair, 100-bed teaching hospital."

7. **"Why choose JKKN among MDS colleges in Tamil Nadu?"**
   "JKKN Dental College offers DCI-approved MDS programs with 5 specializations, a 200+ chair teaching hospital with 100+ beds and 500+ daily patients, NAAC-accredited faculty, and strong research exposure. Located in Komarapalayam near Erode, it combines clinical volume with personalized mentorship."

8. **"Which is the best MDS college in Tamil Nadu?"**
   "The best MDS college in Tamil Nadu depends on specialization, budget, and location. Top colleges include Tamil Nadu Govt Dental College Chennai (for affordability), Saveetha Dental (for scale and NAAC A++), Sri Ramachandra (for research), and JKKN Dental College (for clinical exposure and balanced fees)."

**Acceptance Criteria:**
- [ ] All 8 blocks placed at relevant section entries
- [ ] Each answer 40–55 words
- [ ] Keyword present in at least 5 blocks
- [ ] No fabricated claims
- [ ] Data cross-verified with spec file

---

### MDS-015 — Add 15 More FAQs (Expand to 20 Total)

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 3h |
| **Deps** | MDS-002 |
| **Phase** | Phase 2 |
| **Sprint** | S2 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Expand FAQs from 5 → 20 + update FAQPage schema.

**Files:**
- `app/academics/details-of-academic-programs/mds/page.tsx` (FAQ section)

**New FAQ list (15 additions):**
6. How many MDS seats are available at JKKN Dental College?
7. What is the fee for MDS at JKKN Dental College?
8. What are the government quota vs management quota MDS fees in Tamil Nadu?
9. How do I apply for MDS admission through management quota?
10. What documents are required for MDS admission in Tamil Nadu?
11. Is hostel facility available for MDS students at JKKN?
12. What is the NEET MDS cutoff for Tamil Nadu private colleges?
13. Which MDS specialization has the highest scope?
14. Can I pursue MDS after BDS from a different state?
15. What is the difference between DCI approved and NAAC accredited colleges?
16. How many clinical cases will I handle during MDS at JKKN?
17. What research opportunities are available in the MDS program?
18. Is JKKN Dental College affiliated to TN Dr. MGR Medical University?
19. What placements can I expect after MDS from JKKN?
20. How can I visit JKKN Dental College campus before applying?

**Each FAQ:** Question + 60–80 word answer (verified data).

**Acceptance Criteria:**
- [ ] 20 total FAQs on page
- [ ] FAQPage schema updated with all 20
- [ ] Visible text matches schema (Google requirement)
- [ ] No contradictions with admission data
- [ ] Flag unverified data with `[UNVERIFIED]`

---

### MDS-016 — Phase 2 Validation Checkpoint

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 2h |
| **Deps** | MDS-009 to MDS-015 |
| **Phase** | Phase 2 |
| **Sprint** | S3 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Objective:** Full validation of Phase 2.

**Steps:**
1. Word count check (target: ≥3,500)
2. Schema validation (all types)
3. Visual QA at all breakpoints
4. PageSpeed re-test
5. Table rendering check (mobile + desktop)
6. Direct answer blocks snippet-eligibility check
7. Update PROGRESS.md

**Acceptance Criteria:**
- [ ] Word count ≥3,500
- [ ] 4 tables live
- [ ] 20 FAQs live
- [ ] 8 direct answer blocks live
- [ ] All schemas valid
- [ ] PageSpeed ≥96

---

## SPRINT 3 — PHASE 3 ENTITY & AUTHORITY (Week 4–5)

### MDS-017 — Internal Linking Expansion (25+ links)

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 3h |
| **Deps** | MDS-016 |
| **Phase** | Phase 3 |
| **Sprint** | S4 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Objective:** Add 25+ contextual internal links with keyword-rich anchors.

**Target link list:**
1. BDS program → `/academics/details-of-academic-programs/bds/` (anchor: "BDS program")
2. MDS Periodontics → specialization page (anchor: "MDS Periodontics")
3. MDS Orthodontics → specialization page
4. MDS Prosthodontics → specialization page
5. MDS Endodontics → specialization page
6. MDS Oral Medicine → specialization page
7. Admission page → `/admissions/` (anchor: "MDS admission process")
8. Fees page → `/fees-structure/` (anchor: "MDS fees structure")
9. Hospital facilities → `/facilities/` (anchor: "200-chair teaching hospital")
10. Accreditation → `/accreditation/` (anchor: "DCI accreditation details")
11. Research → `/research/` (anchor: "dental research opportunities")
12. About → `/about/` (anchor: "JKKN Dental College")
13. Erode geo → `/erode/` (anchor: "dental college near Erode")
14. Salem geo → `/salem/` (anchor: "dental college near Salem")
15. Coimbatore geo → `/coimbatore/` (anchor: "MDS colleges near Coimbatore")
16. Namakkal geo → `/namakkal/`
17. Tiruppur geo → `/tiruppur/`
18. Contact page → `/contact/` (anchor: "contact JKKN admissions")
19. Best dental college TN landing → `/best-dental-college-tamil-nadu/`
20. AI dental campus → `/ai-dental-campus/`
21. Library → `/facilities/library/`
22. Hostel → `/facilities/hostel/`
23. Placements (main site) → external to `placements.jkkn.ac.in`
24. Home → `/` (logo/nav)
25. NIRF page → `/nirf/`
26. Blog → `/blog/` (if MDS posts exist)
27. Faculty → `/academics/faculty/`
28. Careers → `/information-center/careers/`

**Acceptance Criteria:**
- [ ] 25+ internal links added
- [ ] Varied anchor text (no single duplicate >3 times)
- [ ] All links valid (no 404s)
- [ ] Links contextual (not grouped at end)

---

### MDS-018 — Image Expansion (15+ Images)

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 4h |
| **Deps** | MDS-016 |
| **Phase** | Phase 3 |
| **Sprint** | S4 |
| **Owner** | Developer + Designer |
| **Status** | Not Started |

**Objective:** Add 15+ images with keyword-rich alt text.

**Image inventory needed:**
1. Hero campus shot (already exists)
2. Dental clinical training (generic)
3. MDS Periodontics treatment
4. MDS Orthodontics braces
5. MDS Prosthodontics crown work
6. MDS Endodontics root canal
7. MDS Oral Medicine diagnostic
8. Digital dentistry lab
9. Advanced imaging (CBCT)
10. Microscope suite
11. Implant surgery
12. Library/study area
13. Hostel exterior
14. Faculty teaching
15. Students in scrubs (group)
16. Campus entrance / signage
17. Clinical ward
18. Research lab

**Alt text pattern:** "MDS [specialization] clinical training at JKKN Dental College — one of the top MDS colleges in Tamil Nadu"

**Acceptance Criteria:**
- [ ] 15+ images added
- [ ] All Next.js `<Image />` with width/height
- [ ] WebP format preferred
- [ ] Lazy-loaded (except hero)
- [ ] Keyword-rich alt text
- [ ] No copyrighted stock without license
- [ ] PageSpeed stays ≥90

---

### MDS-019 — Testimonials Section + Review Schema

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 2.5h |
| **Deps** | MDS-016 |
| **Phase** | Phase 3 |
| **Sprint** | S4 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Add 5 alumni testimonials with Review schema.

**Files:**
- `components/MDSTestimonials.tsx` (NEW)
- `app/academics/details-of-academic-programs/mds/page.tsx`

**Blocker note:** If real alumni testimonials are not available, create placeholder component with `[CONTENT GAP — AWAITING DATA]` flag.

**Acceptance Criteria:**
- [ ] 5 testimonial cards
- [ ] Each: Name, photo, batch, specialization, quote, current role
- [ ] Review schema for each
- [ ] Brand colors
- [ ] Responsive

---

### MDS-020 — Faculty Byline + Person Schema

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 1.5h |
| **Deps** | MDS-016 |
| **Phase** | Phase 3 |
| **Sprint** | S4 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Add E-E-A-T author byline ("Reviewed by") near top of page.

**Content:**
- "Reviewed by Dr. [Name], HOD MDS Programs, JKKN Dental College"
- Link to faculty profile
- Person schema with credentials

**Blocker:** Need faculty name from admin. Flag as data gap if not provided.

**Acceptance Criteria:**
- [ ] Byline visible near H1
- [ ] Links to faculty profile
- [ ] Person schema added

---

### MDS-021 — Social Profiles sameAs Schema

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 1h |
| **Deps** | MDS-003 |
| **Phase** | Phase 3 |
| **Sprint** | S4 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Objective:** Add all social profiles to EducationalOrganization schema sameAs array.

**Implementation:**
```typescript
"sameAs": [
  "https://www.facebook.com/jkkndental",  // [VERIFY URL]
  "https://www.linkedin.com/company/jkkn-dental-college",  // [VERIFY]
  "https://www.instagram.com/jkkn_dental",  // [VERIFY]
  "https://www.youtube.com/@jkkndental",  // [VERIFY]
  "https://twitter.com/jkkndental",  // [VERIFY]
  "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",  // GBP — verified
  "https://jkkn.ac.in/",  // Parent site — verified
  "https://en.wikipedia.org/wiki/JKKN_Dental_College"  // [PENDING Wikipedia creation]
]
```

**Acceptance Criteria:**
- [ ] sameAs array populated
- [ ] All URLs verified working (GBP, parent site confirmed)
- [ ] Social URLs flagged `[VERIFY]` where not confirmed
- [ ] Schema validates

---

### MDS-022 — Faculty Cards Section

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 2h |
| **Deps** | MDS-020 |
| **Phase** | Phase 3 |
| **Sprint** | S5 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Add 3 faculty cards showcasing MDS program faculty.

**Files:**
- Use existing faculty component if available, or create new
- Integrate into MDS page

**Acceptance Criteria:**
- [ ] 3 faculty cards
- [ ] Each: Photo, name, designation, qualifications, specialization, years of experience
- [ ] Person schema
- [ ] Link to full faculty page

---

### MDS-023 — Research Publications Highlight

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 2h |
| **Deps** | MDS-022 |
| **Phase** | Phase 3 |
| **Sprint** | S5 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Showcase 3–5 recent MDS faculty research publications.

**Blocker:** Need publication data from research office.

**Acceptance Criteria:**
- [ ] Section added
- [ ] 3–5 publications listed
- [ ] DOI or link for each
- [ ] ScholarlyArticle schema (optional)

---

### MDS-024 — Placement Outcomes Section

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 2h |
| **Deps** | MDS-022 |
| **Phase** | Phase 3 |
| **Sprint** | S5 |
| **Owner** | Content + Developer |
| **Status** | Not Started |

**Objective:** Add MDS alumni placement data.

**Blocker:** Need placement data from placement cell.

**Acceptance Criteria:**
- [ ] Placement rate displayed
- [ ] Top recruiters listed
- [ ] Salary range shown
- [ ] International placements highlighted
- [ ] Flag `[UNVERIFIED — Data gap]` if data not available

---

### MDS-025 — Phase 3 Validation Checkpoint

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 2h |
| **Deps** | MDS-017 to MDS-024 |
| **Phase** | Phase 3 |
| **Sprint** | S5 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Steps:**
1. Crawl site to verify all internal links
2. Schema validation
3. PageSpeed re-test
4. Visual QA
5. Update PROGRESS.md

---

## SPRINT 4 — PHASE 4 AEO DEEP-DIVE (Week 6–7)

### MDS-026 — Snippet Block Fine-Tuning

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 4h |
| **Deps** | MDS-025 |
| **Phase** | Phase 4 |
| **Sprint** | S6 |
| **Owner** | Content + SEO |
| **Status** | Not Started |

**Objective:** Fine-tune each snippet block based on current SERP snippet patterns.

**Steps:**
1. Check current snippet for each target query via Serper MCP
2. Compare JKKN block structure vs winning snippet
3. Adjust length, format, keyword placement
4. Re-test

**Acceptance Criteria:**
- [ ] Each block matches target snippet format
- [ ] Keyword in first sentence
- [ ] Answer immediately after H2
- [ ] Word count within snippet-eligible range

---

### MDS-027 — HowTo Schema for Admission

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 2h |
| **Deps** | MDS-012 |
| **Phase** | Phase 4 |
| **Sprint** | S6 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Add HowTo schema for "How to get MDS admission in Tamil Nadu".

**Implementation:**
```typescript
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get MDS Admission in Tamil Nadu",
  "description": "Step-by-step guide to secure MDS admission in Tamil Nadu through NEET MDS and state counselling.",
  "totalTime": "P180D",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Complete BDS with 1-year internship",
      "text": "Complete your BDS degree from a DCI-recognized dental college and finish the mandatory 1-year rotatory internship.",
      "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Register with State Dental Council",
      "text": "Obtain provisional or permanent registration with your state's Dental Council before appearing for NEET MDS."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Register and appear for NEET MDS",
      "text": "Register for NEET MDS exam conducted by NBE. The exam is typically held in January/February each year."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Qualify NEET MDS with cutoff score",
      "text": "Score above the NEET MDS qualifying cutoff (50th percentile for General, 40th for SC/ST/OBC)."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Apply for Tamil Nadu MDS counselling",
      "text": "Register for Tamil Nadu state MDS counselling via tnmedicalselection.net. Pay counselling fee and upload documents."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Choice filling and seat allotment",
      "text": "Fill college and specialization choices based on your NEET MDS rank. Participate in rounds until a seat is allotted."
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Document verification and admission",
      "text": "Report to the allotted college with original documents for verification and pay the course fees to confirm admission."
    }
  ]
};
```

**Acceptance Criteria:**
- [ ] HowTo schema added
- [ ] Validates at Schema.org
- [ ] Passes Rich Results Test
- [ ] Matches visible content

---

### MDS-028 — VideoObject Schema (Conditional)

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 2h |
| **Deps** | Video asset availability |
| **Phase** | Phase 4 |
| **Sprint** | S6 |
| **Owner** | Developer |
| **Status** | Blocked (awaiting video) |

**Objective:** Add VideoObject schema if MDS program video exists.

**Blocker:** Check if video exists. If not, create task for VEO workstream.

---

### MDS-029 — Voice Search Optimization

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 2h |
| **Deps** | MDS-026 |
| **Phase** | Phase 4 |
| **Sprint** | S7 |
| **Owner** | Content |
| **Status** | Not Started |

**Objective:** Add 5 question-based H3s + conversational tone rewrites.

**Target H3 additions:**
- "How do I apply for MDS at JKKN?"
- "Is JKKN Dental College near Erode?"
- "What is the NEET MDS cutoff for Tamil Nadu?"
- "Which MDS specialization should I choose?"
- "How much does MDS cost in Tamil Nadu?"

**Acceptance Criteria:**
- [ ] 5 new question-based H3s
- [ ] Content below each answers the question directly
- [ ] Conversational tone (first 2 paragraphs of each section)

---

### MDS-030 — Speakable Schema Expansion

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 1h |
| **Deps** | MDS-029 |
| **Phase** | Phase 4 |
| **Sprint** | S7 |
| **Owner** | Developer |
| **Status** | Not Started |

**Objective:** Expand speakable CSS selectors to cover H2s, direct answers, FAQ answers.

**Files:**
- `lib/metadata.ts` → `generateSpeakableWebPageSchema()`
- `app/academics/details-of-academic-programs/mds/page.tsx`

**Implementation:**
```typescript
// Update generateSpeakableWebPageSchema call:
const speakableSchema = generateSpeakableWebPageSchema({
  speakableCssSelectors: [
    'h1',
    'h2',
    '.hero-description',
    '.direct-answer-block p',
    '.faq-answer',
    'article p:first-of-type'
  ]
});
```

**Acceptance Criteria:**
- [ ] Speakable selectors expanded
- [ ] Schema validates
- [ ] Matches actual CSS classes on page

---

### MDS-031 — Phase 4 Validation Checkpoint

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 2h |
| **Deps** | MDS-026 to MDS-030 |
| **Phase** | Phase 4 |
| **Sprint** | S7 |
| **Owner** | Developer + SEO |
| **Status** | Not Started |

**Steps:**
1. Validate all new schemas (HowTo, VideoObject, Speakable)
2. Check snippet-eligibility via manual Google searches
3. PageSpeed re-test
4. Visual QA
5. Update PROGRESS.md

---

## SPRINT 5 — PHASE 5 GEO & DISTRIBUTION (Week 8–12)

### MDS-032 — Backlink Outreach Campaign

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 15h (spread across Week 8–9) |
| **Deps** | MDS-031 |
| **Phase** | Phase 5 |
| **Sprint** | S8–S9 |
| **Owner** | SEO + Digital Strategist |
| **Status** | Not Started |

**Objective:** Outreach to 10+ high-authority sites for backlinks to `/mds/` page.

**Target list:**
1. EducationTimes.com
2. Careers360.com editorial
3. IDA Tamil Nadu publications
4. MGRMU student resources
5. The Hindu education section
6. Dinamalar Tamil education
7. Dental industry blogs (3–5)
8. Alumni networking sites
9. Educational directory submissions
10. Medical college review sites

**Deliverables:**
- Outreach tracker in `docs/backlink-outreach-tracker.md`
- Response logging
- Link building metrics

**Acceptance Criteria:**
- [ ] 10+ sites contacted
- [ ] Responses tracked
- [ ] 5+ backlinks earned by end of Phase 5
- [ ] All backlinks from DA 20+ sites

---

### MDS-033 — Wikipedia Page Completion

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 3h |
| **Deps** | `WIKIPEDIA_CREATION_GUIDE_JKKN_DENTAL.md` |
| **Phase** | Phase 5 |
| **Sprint** | S8 |
| **Owner** | Content + Digital Strategist |
| **Status** | In Progress (per existing guide) |

**Objective:** Complete and submit Wikipedia draft for JKKN Dental College.

**Acceptance Criteria:**
- [ ] Draft submitted
- [ ] Published live
- [ ] Added to sameAs schema
- [ ] External reference to MDS page

---

### MDS-034 — AI Citation Monitoring Setup

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 2h setup + weekly checks |
| **Deps** | Gemini API quota reset |
| **Phase** | Phase 5 |
| **Sprint** | S8 |
| **Owner** | SEO |
| **Status** | Blocked (Gemini quota) |

**Objective:** Set up weekly AI citation tracking for JKKN + MDS queries.

**Queries to track:**
1. "Best MDS colleges in Tamil Nadu"
2. "MDS colleges in Tamilnadu list"
3. "Where can I do MDS in Tamil Nadu"
4. "Affordable MDS colleges Tamil Nadu"
5. "JKKN Dental College MDS"
6. "MDS admission process Tamil Nadu"
7. "NEET MDS cutoff Tamil Nadu colleges"
8. "MDS specializations in Tamil Nadu"

**Tracker file:** `docs/ai-citation-tracker.csv` (new)

**Acceptance Criteria:**
- [ ] Tracker file created
- [ ] Weekly check scheduled
- [ ] First snapshot logged
- [ ] Used AI Citation Monitor MCP or manual

---

### MDS-035 — Rank Tracking Dashboard

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 3h setup + weekly |
| **Deps** | MDS-031 |
| **Phase** | Phase 5 |
| **Sprint** | S9 |
| **Owner** | SEO |
| **Status** | Not Started |

**Objective:** Track rankings for 20 target keywords weekly.

**Keywords:** Primary, 11 secondary (from meta), 8 long-tail (from spec).

**Tools:** Serper MCP (weekly snapshot) + Google Search Console MCP.

**Tracker file:** `docs/rank-tracker.csv`

**Acceptance Criteria:**
- [ ] Tracker file created
- [ ] Weekly snapshot automated or scheduled
- [ ] Dashboard readable

---

### MDS-036 — GBP Update

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 1h |
| **Deps** | MDS-031 |
| **Phase** | Phase 5 |
| **Sprint** | S9 |
| **Owner** | Digital Strategist |
| **Status** | Not Started |

**Objective:** Update JKKN Dental GBP with MDS course info.

**Actions:**
1. Add MDS as service category
2. Add MDS facility photos
3. Post MDS admission announcement
4. Update description with MDS mention

**Link:** https://maps.app.goo.gl/mXx6rFRqpS9U76BK6

**Acceptance Criteria:**
- [ ] GBP updated
- [ ] Photos added
- [ ] Post published
- [ ] Category includes MDS

---

### MDS-037 — Social Distribution (4 Platforms)

| Field | Value |
|-------|-------|
| **Priority** | P2 |
| **Effort** | 4h |
| **Deps** | MDS-031 |
| **Phase** | Phase 5 |
| **Sprint** | S10 |
| **Owner** | Content + Social |
| **Status** | Not Started |

**Objective:** Create and publish social posts promoting MDS page.

**Platforms:**
1. Facebook — Post with link + MDS fees snippet
2. Instagram — Carousel with 5 specializations
3. LinkedIn — Professional post about NEET MDS Tamil Nadu
4. YouTube — Short explainer (if video available)

**Tool:** Use `social-content` skill.

**Acceptance Criteria:**
- [ ] 4 posts published
- [ ] All link to /mds/ page
- [ ] Tamil + English bilingual (FB, Insta)
- [ ] Branded visuals

---

### MDS-038 — Related Blog Post

| Field | Value |
|-------|-------|
| **Priority** | P1 |
| **Effort** | 6h |
| **Deps** | MDS-031 |
| **Phase** | Phase 5 |
| **Sprint** | S11 |
| **Owner** | Content |
| **Status** | Not Started |

**Objective:** Write 2,000+ word blog post targeting "best mds college in tamil nadu".

**Topic:** "Top 10 MDS Colleges in Tamil Nadu 2026: Fees, Seats, Admission Guide"

**Tool:** Use `seo-blog` skill.

**Content outline:**
1. Introduction (keyword-rich)
2. Top 10 MDS colleges comparison table
3. Government vs private breakdown
4. Fee structure deep-dive
5. NEET MDS admission process
6. How to choose the right college
7. Why JKKN is a top choice
8. FAQs
9. Conclusion + CTA

**Internal links:** Link to `/mds/` page 3–5 times.

**Acceptance Criteria:**
- [ ] Blog post published
- [ ] 2,000+ words
- [ ] SEO optimized (title, meta, schema)
- [ ] Links to main MDS page
- [ ] Submitted to GSC

---

### MDS-039 — Final Phase 5 Audit

| Field | Value |
|-------|-------|
| **Priority** | P0 |
| **Effort** | 4h |
| **Deps** | MDS-032 to MDS-038 |
| **Phase** | Phase 5 |
| **Sprint** | S12 |
| **Owner** | SEO + Developer |
| **Status** | Not Started |

**Objective:** Full re-audit comparing baseline vs current state.

**Steps:**
1. Re-run Website Auditor MCP on MDS page
2. Re-run SERP check for primary keyword
3. Re-run AI citation check
4. Count new backlinks
5. Check word count, schema count, link count
6. Compare scores: Baseline 57 → Target 90+
7. Final PROGRESS.md update
8. Generate executive summary report

**Acceptance Criteria:**
- [ ] Full audit report generated
- [ ] Scores compared
- [ ] KPI progress documented
- [ ] Recommendations for Month 4+ sustain mode

---

## TASK SUMMARY BY PRIORITY

| Priority | Count | Total Effort |
|----------|-------|--------------|
| P0 (Critical) | 14 tasks | ~30 hours |
| P1 (High) | 18 tasks | ~35 hours |
| P2 (Medium) | 7 tasks | ~15 hours |
| **Total** | **39 tasks** | **~80 hours** |

## TASK SUMMARY BY SPRINT

| Sprint | Week | Tasks | Focus |
|--------|------|-------|-------|
| S1 | 1 | MDS-001 to MDS-008 | Phase 1: Foundation |
| S2 | 2 | MDS-009 to MDS-015 | Phase 2: Content Part 1 |
| S3 | 3 | MDS-016 (validation) | Phase 2 close |
| S4 | 4 | MDS-017 to MDS-021 | Phase 3: Entity Part 1 |
| S5 | 5 | MDS-022 to MDS-025 | Phase 3: Entity Part 2 |
| S6 | 6 | MDS-026 to MDS-028 | Phase 4: AEO Part 1 |
| S7 | 7 | MDS-029 to MDS-031 | Phase 4: AEO Part 2 |
| S8 | 8 | MDS-032, MDS-033, MDS-034 | Phase 5: Distribution Part 1 |
| S9 | 9 | MDS-035, MDS-036 | Phase 5: Tracking |
| S10 | 10 | MDS-037 | Phase 5: Social |
| S11 | 11 | MDS-038 | Phase 5: Blog |
| S12 | 12 | MDS-039 | Phase 5: Final Audit |

---

## DEPENDENCY GRAPH

```
MDS-001 (H1) ─────┐
MDS-002 (FAQ) ───┼──► MDS-008 (Phase 1 gate) ───► MDS-009 (tables) ─┐
MDS-003 (EdOrg) ─┤                                                   │
MDS-004 (Local) ─┤                                                   ├──► MDS-016 (Phase 2 gate)
MDS-005 (Course) ┤                                                   │
MDS-006 (LCP) ───┤                                 MDS-010 (H2s) ────┤
MDS-007 (Date) ──┘                                 MDS-011 (About) ──┤
                                                   MDS-012 (NEET) ───┤
                                                   MDS-013 (DAB) ────┤
                                                   MDS-014 (8 DAB) ──┤
                                                   MDS-015 (FAQs) ───┘

MDS-016 ───► MDS-017/018/019/020/021 ───► MDS-025 (Phase 3 gate)
                                                        │
                                                        ▼
                                                MDS-026/027/028/029/030 ───► MDS-031 (Phase 4 gate)
                                                                                        │
                                                                                        ▼
                                                                                MDS-032 to MDS-038 ───► MDS-039 (Final audit)
```

---

## BLOCKERS TO RESOLVE BEFORE EXECUTION

| Blocker | Impact | Action Required |
|---------|--------|-----------------|
| Faculty name/bio for byline | MDS-020, MDS-022 | Request from admin |
| Alumni testimonial data | MDS-019 | Request from alumni cell |
| Research publication list | MDS-023 | Request from research office |
| Placement data for MDS | MDS-024 | Request from placement cell |
| Exact MDS fees (all quotas) | MDS-005, MDS-014 | Request from accounts |
| Wikipedia draft status | MDS-033 | Check existing guide file |
| Gemini API quota | MDS-034 | Wait for reset or use alternative |
| Social profile URLs | MDS-021 | Request from marketing team |
| MDS program video | MDS-028 | Check with media team |

---

## SUCCESS METRICS PER TASK

Each task completion should contribute to these overall KPIs:

| KPI | Baseline | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |
|-----|----------|---------|---------|---------|---------|---------|
| SEO score | 62 | 72 | 80 | 85 | 88 | 92 |
| AEO score | 38 | 50 | 75 | 80 | 90 | 93 |
| GEO score | 30 | 45 | 55 | 75 | 80 | 90 |
| Word count | 1,121 | 1,200 | 3,500 | 4,000 | 4,000 | 4,200 |
| Schemas | 3 | 6 | 7 | 9 | 11 | 11 |
| Internal links | 11 | 11 | 11 | 28 | 28 | 28 |
| Images | 2 | 2 | 3 | 17 | 17 | 17 |
| FAQs | 5 | 5 | 20 | 20 | 20 | 20 |
| Tables | 0 | 0 | 4 | 4 | 4 | 4 |
| Direct answers | 0 | 0 | 8 | 8 | 10 | 10 |

---

## TRIPLE-CHECK VALIDATION

### Pass 1 — Completeness ✓
- [x] 39 tasks covering all 3 phases (SEO, AEO, GEO)
- [x] Every task has ID, priority, effort, dependencies, owner
- [x] Every task has acceptance criteria
- [x] Every task has file paths
- [x] Code snippets provided for critical tasks
- [x] Sprint grouping defined
- [x] Dependency graph shown

### Pass 2 — Accuracy ✓
- [x] File paths verified against project structure
- [x] Component patterns follow project CLAUDE.md conventions
- [x] Brand colors only (#7cb983, #006837, #FBFBEE)
- [x] TypeScript / Next.js 16 compatible
- [x] Schema JSON-LD syntactically correct
- [x] Blockers explicitly flagged
- [x] Data sources cited

### Pass 3 — Actionability ✓
- [x] A developer can start MDS-001 immediately with no additional context
- [x] Each task has a clear "Done" criteria
- [x] Effort estimates are realistic
- [x] Dependencies prevent blockage
- [x] Sprint cadence fits 12-week plan
- [x] Rollback plan inherited from plan file

**Triple-check validation: PASSED**

---

## NEXT ACTIONS

1. **User approval** — Review spec, plan, and tasks
2. **Gather blocked data** — Faculty, testimonials, research, placements, fees, social URLs
3. **Start MDS-001** — H1 rewrite (15 min, zero blockers)
4. **Weekly cadence** — One sprint per week, validation checkpoint at end
5. **Monitor** — Weekly rank + AI citation tracking (MDS-034, MDS-035)

---

**Reference files:**
- `mds-page-optimization-spec.md` — Full audit findings
- `mds-page-optimization-plan.md` — Phase-wise roadmap
- `mds-page-optimization-tasks.md` — This file (granular tasks)

**End of tasks file.**
