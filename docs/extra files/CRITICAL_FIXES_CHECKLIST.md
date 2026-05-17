# CRITICAL FIXES CHECKLIST — AI/GEO Readiness
**Date:** 2026-03-18
**Deadline:** 2026-03-25 (7 days)
**Priority:** CRITICAL
**Owner:** Development + Admin Team

---

## PHASE 1: CRITICAL ISSUES (Complete This Week)

### 🔴 ISSUE #1: Missing llms.txt
**Status:** ❌ NOT DONE
**Severity:** CRITICAL
**Time Estimate:** 30 minutes
**Owner:** Dev Lead

#### What to do:
1. Create new file: `public/llms.txt`
2. Copy this content exactly:

```
Title: JKKN Dental College & Hospital
Scraped-From: https://dental.jkkn.ac.in/
Comments: Yes
Preferred-By: All
Allowed: Yes
Full-Text-License: CC-BY-4.0
Attribution-Style: title, link to source
```

3. Save and verify at https://dental.jkkn.ac.in/llms.txt
4. Commit with message: "feat: add llms.txt for AI training data permission"

#### Success Criteria:
- [ ] File exists and is accessible
- [ ] Content matches exactly (no extra spaces/lines)
- [ ] Committed to main branch

---

### 🔴 ISSUE #2: Meta Description Too Long
**Status:** ❌ NOT DONE
**Severity:** CRITICAL
**Time Estimate:** 15 minutes
**Owner:** Dev Lead

#### Current (232 chars — TOO LONG):
```
India's 1st Human-AI AGI Dental Campus. JKKN Dental College & Hospital offers DCI approved BDS & MDS programs with advanced AI integration, ChatGPT-powered learning, and state-of-the-art facilities. NAAC A+ accredited since 1987, affiliated with Dr. MGR Medical University, Chennai.
```

#### New (155 chars — CORRECT):
```
JKKN Dental College - India's 1st AI-integrated dental campus. DCI-approved BDS & MDS programs, NAAC A+ accredited, 500+ daily patients, 92%+ placements.
```

#### What to do:
1. Open `app/layout.tsx`
2. Find the metadata export section
3. Replace the description value with the new text above
4. Test locally: `npm run build`
5. Commit with message: "fix: shorten meta description to ≤155 chars for SERP display"

#### Success Criteria:
- [ ] Character count ≤155
- [ ] No truncation in Google test tool
- [ ] Build passes without errors
- [ ] Committed to main branch

---

### 🔴 ISSUE #3: Google Verification Code is Placeholder
**Status:** ❌ NOT DONE
**Severity:** CRITICAL
**Time Estimate:** 10 minutes
**Owner:** Admin (needs GSC access)

#### What to do:
1. Go to Google Search Console: https://search.google.com/search-console/
2. Select property: https://dental.jkkn.ac.in
3. Go to Settings → Verification
4. Find the meta tag verification code
5. Copy the code value (should be a long string)
6. Open `app/layout.tsx`
7. Find: `<meta name="google-site-verification" content="your-google-verification-code"/>`
8. Replace "your-google-verification-code" with the actual code from GSC
9. Commit with message: "fix: add actual Google Search Console verification code"

#### Success Criteria:
- [ ] Code is not "your-google-verification-code"
- [ ] Code is at least 20 characters long
- [ ] GSC shows "Verification complete"
- [ ] Committed to main branch

---

### 🔴 ISSUE #4: Canonical URL Points to Wrong Page
**Status:** ❌ NOT DONE
**Severity:** CRITICAL
**Time Estimate:** 15 minutes
**Owner:** Dev Lead

#### What to do:
1. Open `app/layout.tsx`
2. Find the canonical tag (should be in metadata)
3. Current value: `https://dental.jkkn.ac.in/_not-found`
4. Should be: `https://dental.jkkn.ac.in/` or `https://dental.jkkn.ac.in`
5. Update and save
6. Test: Run `npm run build` and verify no errors
7. Commit with message: "fix: correct homepage canonical URL"

#### Success Criteria:
- [ ] Canonical points to homepage (/ or no path)
- [ ] Not pointing to error page or other URL
- [ ] Build passes
- [ ] Committed to main branch

---

### 🔴 ISSUE #5: BDS Page Missing Course Schema
**Status:** ❌ NOT DONE
**Severity:** CRITICAL
**Time Estimate:** 2 hours
**Owner:** Dev Lead

#### What to do:
1. Open `app/academics/bds/page.tsx`
2. Add this schema code at the top of the file:

```typescript
// Course schema for BDS program
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bachelor of Dental Surgery (BDS)",
  "description": "5-year undergraduate dental degree program with comprehensive clinical and theoretical training. NEET-UG qualified students, DCI-approved curriculum, 9 clinical departments, 500+ patient cases per student.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in",
    "sameAs": "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6"
  },
  "courseCode": "BDS",
  "duration": "P5Y",
  "educationLevel": "Undergraduate",
  "inLanguage": "en-IN",
  "url": "https://dental.jkkn.ac.in/academics/bds/",
  "author": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN Dental College & Hospital"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dental.jkkn.ac.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Academics",
      "item": "https://dental.jkkn.ac.in/academics/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "BDS",
      "item": "https://dental.jkkn.ac.in/academics/bds/"
    }
  ]
};

export const metadata = {
  title: "BDS Program - JKKN Dental College",
  description: "5-year Bachelor of Dental Surgery (BDS) program at JKKN Dental College. DCI-approved, NAAC A+ accredited. NEET-UG qualified admissions, 100 seats, modern dental hospital with 500+ daily patients.",
  // ... add after existing metadata ...
  other: {
    "application/ld+json": [
      JSON.stringify(courseSchema),
      JSON.stringify(breadcrumbSchema)
    ]
  }
};
```

3. Update the component to include schema in head (if not using Next.js metadata API)
4. Test: `npm run build && npm run dev`
5. Verify at https://validator.schema.org/
6. Commit with message: "feat: add Course and BreadcrumbList schema to BDS page"

#### Success Criteria:
- [ ] Schema validation passes at schema.org
- [ ] No build errors
- [ ] Schema appears in page source when you view page in browser
- [ ] Committed to main branch

---

## DEPLOYMENT CHECKLIST

### Before Deploying to Production
- [ ] All 5 critical issues fixed
- [ ] Local build passes: `npm run build`
- [ ] No ESLint errors: `npm run lint`
- [ ] Test in staging environment first
- [ ] Validate changes in browser DevTools
- [ ] Schema validation passes at validator.schema.org
- [ ] Google Rich Results test passes
- [ ] All team members reviewed changes

### After Deploying to Production
- [ ] Verify files accessible at live URLs
- [ ] Check llms.txt: https://dental.jkkn.ac.in/llms.txt
- [ ] Check BDS page schema: https://dental.jkkn.ac.in/academics/bds/
- [ ] Test meta description in Google test tool
- [ ] Submit updated pages to Google Search Console
- [ ] Monitor for 404 errors in GSC
- [ ] Wait 24-48 hours for Google to re-crawl

---

## ROLLBACK PLAN (If Something Goes Wrong)

If any change causes issues:
1. Revert commit: `git revert <commit-hash>`
2. Deploy rollback
3. Document what went wrong
4. Fix locally and re-test before re-deploying

**Rollback should take <15 minutes**

---

## SIGN-OFF

| Role | Name | Status | Date |
|------|------|--------|------|
| **Dev Lead** | ________ | ☐ Approved | __/__/__ |
| **Admin** | ________ | ☐ Approved | __/__/__ |
| **QA/Tester** | ________ | ☐ Approved | __/__/__ |
| **Project Owner** | ________ | ☐ Approved | __/__/__ |

---

## PHASE 2 & 3 TASKS (Do These After Phase 1)

Once Phase 1 is complete, proceed to:
- [ ] Add Course schema to 5 MDS specialization pages (1 day)
- [ ] Add LocalBusiness schema to root layout (2 hours)
- [ ] Add BreadcrumbList to About page (2 hours)
- [ ] Add BreadcrumbList to Admissions, Facilities, Research pages (4 hours)
- [ ] Validate all changes (2 hours)

**Total Phase 2 time: 10 hours (1-2 days)**

---

**Report:** See `AI_GEO_READINESS_AUDIT_2026-03-18.md` for full details and implementation guide.
