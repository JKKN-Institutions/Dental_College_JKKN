# How to Use collegeFacts.ts - Single Source of Truth

## Purpose

This file (`collegeFacts.ts`) is the **single source of truth** for all factual information about JKKN Dental College. It ensures:

✅ **Consistency** - All pages show the same numbers
✅ **AI-Friendly** - Search engines won't find contradictions
✅ **Easy Updates** - Change one number, update everywhere
✅ **Trust Building** - Consistent facts build credibility

## The Problem We're Solving

**Before:** Different pages showed different facts:
- Homepage said "100+ Bedded Hospital"
- BDS page said "200+ Chair Hospital"
- Hero section said "18 MDS Seats"
- FAQ section said "23 seats"

**Result:** AI search engines (Google AI, ChatGPT) got confused and cited third-party websites instead of our official site.

**After:** All pages use the same data source → AI trusts our site → Better search rankings

---

## How to Use in Your Pages

### Basic Import

```typescript
// At the top of your page/component
import collegeFacts from '@/data/collegeFacts';

// Or import specific helper functions
import {
  getCollegeAgeText,
  getSpecializationsText,
  getHospitalCapacityText
} from '@/data/collegeFacts';
```

### Example Usage

#### Example 1: Display College Age
```tsx
// ❌ OLD WAY (Hardcoded)
<p>With 39+ years of excellence...</p>

// ✅ NEW WAY (Dynamic)
<p>With {getCollegeAgeText()} of excellence...</p>
// Outputs: "With 39+ Years of excellence..."
```

#### Example 2: Display MDS Seats
```tsx
// ❌ OLD WAY (Hardcoded)
<div>We offer 18 MDS seats across 5 specializations</div>

// ✅ NEW WAY (Dynamic)
<div>We offer {collegeFacts.mdsSeatCount} MDS seats across {collegeFacts.mdsSpecialisations} specializations</div>
```

#### Example 3: Display Hospital Capacity
```tsx
// ❌ OLD WAY (Inconsistent)
// Homepage: "200+ Chair Hospital"
// BDS Page: "100+ Bedded Hospital"

// ✅ NEW WAY (Consistent)
<p>{getHospitalCapacityText()} with {collegeFacts.hospitalBeds} beds</p>
// Outputs: "200+ Chair Hospital with 100 beds"
```

#### Example 4: Contact Information
```tsx
// ❌ OLD WAY
<a href="tel:+919345855001">+91 9345855001</a>

// ✅ NEW WAY
<a href={`tel:${collegeFacts.phone}`}>{getFormattedPhone()}</a>
```

#### Example 5: List of Specializations
```tsx
// ✅ Display all MDS specializations dynamically
{collegeFacts.mdsSpecialisationsList.map((spec) => (
  <div key={spec.name}>
    <h3>{spec.name}</h3>
    <p>{spec.seats} seats</p>
  </div>
))}
```

---

## Quick Reference Guide

| What You Need | Use This |
|---------------|----------|
| College age (e.g., "39+ Years") | `getCollegeAgeText()` |
| Trust age (e.g., "57+ Years") | `getTrustAgeText()` |
| BDS seats | `collegeFacts.bdsSeatCount` or `getBDSSeatsText()` |
| MDS seats | `collegeFacts.mdsSeatCount` or `getMDSSeatsText()` |
| Specializations count | `collegeFacts.mdsSpecialisations` or `getSpecializationsText()` |
| Hospital capacity | `getHospitalCapacityText()` |
| Phone number | `collegeFacts.phone` or `getFormattedPhone()` |
| Email | `collegeFacts.email` |
| Full address | `collegeFacts.address.full` or `getFormattedAddress()` |
| Current admission year | `collegeFacts.currentAdmissionYear` |
| Department list | `collegeFacts.departmentsList` |

---

## Updating Facts (Content Team)

When you need to update any fact:

1. **Verify the new information** with official documents:
   - Seat counts → Check DCI permission letters
   - Years → Check trust/college registration
   - Infrastructure → Check official reports

2. **Update ONLY the `collegeFacts.ts` file** - don't update individual pages

3. **The change automatically applies everywhere** the fact is used

### Example: Updating MDS Seats

If DCI approves more MDS seats:

```typescript
// In collegeFacts.ts, change:
mdsSeatCount: 18,

// To:
mdsSeatCount: 23,

// That's it! All pages using this value will update automatically.
```

---

## Important Notes

⚠️ **DO NOT hardcode numbers in pages** - always import from `collegeFacts.ts`

⚠️ **Age auto-calculates** - `collegeAge` and `trustAge` automatically update each year

⚠️ **Verify before updating** - Wrong facts damage credibility more than inconsistent facts

✅ **Use helper functions** - They provide consistent formatting (e.g., "39+ Years" instead of just "39")

---

## For Developers

### Project Structure
```
data/
  ├── collegeFacts.ts          ← Single source of truth (USE THIS!)
  ├── siteData.ts              ← Navigation structure
  ├── content.ts               ← Content blocks
  └── HOW_TO_USE_COLLEGE_FACTS.md  ← This guide
```

### Migration Checklist

When updating a page to use `collegeFacts.ts`:

- [ ] Import the collegeFacts module at the top
- [ ] Replace all hardcoded numbers with `collegeFacts.*` references
- [ ] Replace hardcoded contact info with `collegeFacts.phone`, `collegeFacts.email`, etc.
- [ ] Use helper functions for consistent text formatting
- [ ] Test the page to ensure numbers display correctly
- [ ] Remove old hardcoded values

---

## Benefits

✅ **SEO Improvement** - AI search engines trust consistent data
✅ **Easy Maintenance** - Update once, change everywhere
✅ **Error Prevention** - No more copy-paste mistakes
✅ **Professional Image** - Consistent facts = trustworthy institution
✅ **Future-Proof** - Age auto-updates every year

---

## Questions?

If you have questions about using `collegeFacts.ts`, contact the development team.

**Remember:** One source of truth = No contradictions = Better search rankings! 🎯
