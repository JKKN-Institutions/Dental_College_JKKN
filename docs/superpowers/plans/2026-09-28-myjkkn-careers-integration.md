# MyJKKN Careers Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the external cvviz job portal with a native `/information-center/careers/` page that lists **only JKKN Dental College** openings from the MyJKKN Public Careers API, shows each job's details, and lets applicants apply directly.

**Architecture:** A small `lib/careers/` module holds types, pure formatting/filtering/sanitising helpers (unit-tested), a `server-only` fetch layer (ISR, 300 s), and a browser-side apply client. Two server-rendered routes (listing + `[id]` detail) render the data; one client component (`ApplyForm`) posts the application straight from the applicant's browser to MyJKKN, as the API requires. Dental-only filtering is enforced server-side and **fails closed**.

**Tech Stack:** Next.js 16 App Router (Server Components, ISR), TypeScript strict, Tailwind 3.4, lucide-react, `sanitize-html` (new), Vitest (new, dev only).

**Spec:** `docs/public-careers-api.md` + the verified live behaviour recorded in "API facts" below.

---

## API facts (verified live on 2026-09-28 — these override the doc where they differ)

| Fact | Evidence |
|---|---|
| Production host is `https://www.jkkn.ai` (same host as the existing MyJKKN staff sync) | `GET https://www.jkkn.ai/api/public/careers/jobs` → 200 |
| Dental institution id = `e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5` (already in `.env.local` as `JKKN_DENTAL_INSTITUTION_ID`) | `institutions[]` lists "JKKN Dental College and Hospital", 7 open jobs |
| `?institution_id=` filter works server-side (7/7 results are dental) | checked every `institution.id` |
| `GET /jobs/{id}` returns jobs of **any** institution → detail page must check `institution.id` itself | spec §2 has no institution scoping |
| Unknown / malformed id → `404 {"error":"Job not found."}` | tested zero-uuid and `not-a-uuid` |
| `description` is **HTML** (`p strong br ul ol li a em hr u`) with Tailwind classes (`text-blue-600`) and junk auto-links (`href="http://M.Sc"`) | sample of 34 jobs |
| All 7 dental jobs: `posted_at` = null, `closes_at` = null, `salary` = null, `qualifications` = [], `skills` = []; `job_code` null on 33/34 jobs; `department` null on 3/7 dental jobs | live payload |
| `role_category` values seen: `teaching_faculty`, `non_teaching`, `medical`; `job_type` only `full_time` | live payload |
| CORS allows `https://dental.jkkn.ac.in`; **does not** allow `http://localhost:3000` (needs `PUBLIC_CAREERS_EXTRA_ORIGINS` on MyJKKN) | preflight + GET with Origin header |
| API sends `Cache-Control: no-store` → caching is our job (ISR 300 s) | response headers |
| A "JKKN Testing Institution" (`183847c5-be1b-4903-86eb-bbc20c213071`) with 1 open job exists → safe end-to-end apply testing | `institutions[]` |

## Current state being replaced

- `app/information-center/careers/page.tsx` embeds a cvviz iframe — but is **unreachable**: `next.config.ts:43-44` 302-redirects it to `https://jobs.cvviz.com/jkkn_institutions`.
- Header nav `data/siteData.ts:299` and bottom nav `lib/navigationMenuLink.ts:431` link straight to cvviz.
- `next.config.ts:460` rewrites `/careers` → `/information-center/careers` (keep).
- `app/sitemap.ts:328` already lists `/information-center/careers/`.
- Live CSP comes from `proxy.ts:10` (`connect-src` lacks `https://www.jkkn.ai` → the browser apply call would be blocked). `next.config.ts:282` holds a stale duplicate CSP.

## Global Constraints

- Only dental jobs are ever displayed. If `JKKN_DENTAL_INSTITUTION_ID` is missing, show **zero** jobs (never all colleges).
- The apply `POST` runs in the applicant's browser, never from our server (API rate-limits per IP: 5 applications / IP / hour).
- Honeypot `company_fax` is rendered hidden (`tabIndex={-1}`, `autoComplete="off"`), never filled by us.
- Resume: ≤ 2 MB, PDF / DOC / DOCX. Phone: 10–15 digits (spaces, `+`, `-`, `()` allowed). `experience_months`: integer 0–720. Name fields ≤ 100 chars, qualification ≤ 200, current job title / company ≤ 150.
- `utm_source` = `window.location.hostname`. Do not set `Content-Type` on the multipart request.
- Brand colours only: `#7cb983` (buttons), `#6ba872` (button hover), `#006837` (headings), `#002309` (text), `#FBFBEE` (background), plus white. Buttons use white text on `#7cb983` (existing site convention, 144 uses).
- Tailwind utilities only — no inline `style`, no CSS modules. Use `cn()` from `@/lib/utils` for conditional classes. Touch targets ≥ 44 px.
- JKKN terminology: teaching staff = "senior learners", non-teaching staff = "team members". Job titles from HR are displayed verbatim (data, not our copy).
- Breadcrumbs: "Home" is the only clickable item; all other crumbs are `<span>`.
- Metadata: page `title` must NOT contain the brand (root template appends ` | JKKN Dental College`); final title ≤ 60 chars; description ≤ 155 chars. Trailing slashes on all internal URLs.
- TypeScript strict, no `any`. Props interfaces named `{ComponentName}Props` in the same file.
- Every HTML string from the API is sanitised before `dangerouslySetInnerHTML`; every JSON-LD payload containing API data is serialised with `<` escaped.

## Review Focus

1. **HR pastes hostile or messy HTML into a description** (`<script>`, `<iframe>`, `onerror=`, `javascript:` links, `style`/`class` attrs) → rendered page contains none of it; text survives. *Pinned in Task 2 (sanitiser tests).*
2. **Someone opens `/information-center/careers/<pharmacy-job-id>/`** → 404, never another college's job. *Pinned in Task 1 (`pickInstitutionJob` tests) and verified by curl in Task 4.*
3. **`JKKN_DENTAL_INSTITUTION_ID` missing on the production server** → listing shows zero jobs + the fallback notice, not every college's jobs. *Pinned in Task 1 (`filterInstitutionJobs(…, undefined)` test).*
4. **MyJKKN is down, slow, or returns non-JSON** → listing shows "couldn't load" notice (build does not fail); apply shows a friendly retry message instead of crashing. *Pinned in Task 1 (malformed payload tests) and Task 5 (non-JSON / network-error tests).*
5. **A job title or description contains `</script>`** → JSON-LD cannot break out of its `<script>` tag. *Pinned in Task 2 (`serializeJsonLd` test).*

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `vitest.config.ts` | Create | Test runner config (`@/` alias, node env) |
| `lib/careers/types.ts` | Create | `PublicJob`, `PublicJobsResponse`, `ApplyResult` types |
| `lib/careers/config.ts` | Create | API base URL, careers path, limits (browser-safe) |
| `lib/careers/jobs.ts` | Create | Pure: uuid check, dental filtering (fail-closed), payload validation |
| `lib/careers/format.ts` | Create | Pure: human labels (role, type, education, experience, salary, location, date, positions) |
| `lib/careers/sanitize.ts` | Create | Pure: description HTML sanitiser + plain-text excerpt |
| `lib/careers/schema.ts` | Create | Pure: `JobPosting` JSON-LD builder + safe serialiser |
| `lib/careers/api.ts` | Create | `server-only`: `getDentalJobs()`, `getDentalJob(id)` with ISR + timeout |
| `lib/careers/apply.ts` | Create | Browser-safe: validation, FormData builder, `submitApplication()` |
| `lib/careers/test-fixtures.ts` | Create | `makeJob()` fixture for tests |
| `lib/careers/*.test.ts` | Create | Unit tests (jobs, format, sanitize, schema, apply) |
| `components/careers/JsonLd.tsx` | Create | Escaped JSON-LD `<script>` |
| `components/careers/JobCard.tsx` | Create | Server component: one job summary card |
| `components/careers/ApplyForm.tsx` | Create | Client component: application form |
| `app/information-center/careers/page.tsx` | Rewrite | Listing (replaces cvviz iframe; keeps hero + HR contact) |
| `app/information-center/careers/[id]/page.tsx` | Create | Job detail + apply form + JSON-LD |
| `next.config.ts` | Modify | Remove cvviz redirect (43-44); add `https://www.jkkn.ai` to stale CSP (282) |
| `proxy.ts` | Modify | Add `https://www.jkkn.ai` to live CSP `connect-src` (10) |
| `data/siteData.ts` | Modify | Header "CAREERS" → internal (299) |
| `lib/navigationMenuLink.ts` | Modify | Bottom-nav "Careers" → internal + active state (431) |
| `app/sitemap.ts` | Modify | Add job detail URLs |
| `package.json` | Modify | `sanitize-html`, `@types/sanitize-html`, `vitest`, `test` script |
| `CLAUDE.md` | Modify | Document the careers integration + env vars |

---

### Task 1: Test harness + careers types, config, filtering and formatting

**Files:**
- Modify: `package.json` (devDependency + `test` script)
- Create: `vitest.config.ts`, `lib/careers/types.ts`, `lib/careers/config.ts`, `lib/careers/jobs.ts`, `lib/careers/format.ts`, `lib/careers/test-fixtures.ts`
- Test: `lib/careers/jobs.test.ts`, `lib/careers/format.test.ts`

**Interfaces:**
- Produces:
  - `types.ts`: `JobType`, `PublicJobRef`, `PublicJobSalary`, `PublicJob`, `PublicJobsResponse`, `ApplyResult`
  - `config.ts`: `MYJKKN_URL: string`, `CAREERS_API: string`, `CAREERS_PATH = '/information-center/careers'`, `CAREERS_REVALIDATE_SECONDS = 300`, `RESUME_MAX_BYTES = 2097152`, `SITE_URL = 'https://dental.jkkn.ac.in'`
  - `jobs.ts`: `isUuid(v: string): boolean`, `filterInstitutionJobs(payload: unknown, institutionId: string | undefined): PublicJob[]`, `pickInstitutionJob(payload: unknown, institutionId: string | undefined): PublicJob | null`
  - `format.ts`: `roleCategoryLabel`, `jobTypeLabel`, `educationLabel` (all `(v: string | null) => string | null`), `experienceLabel(min: number | null, max: number | null): string | null`, `salaryLabel(s: PublicJobSalary | null): string | null`, `locationLabel(job: Pick<PublicJob,'city'|'state'>): string | null`, `formatDate(iso: string | null): string | null`, `positionsLabel(n: number | null): string | null`
  - `test-fixtures.ts`: `DENTAL_ID`, `PHARMACY_ID`, `makeJob(overrides?: Partial<PublicJob>): PublicJob`

- [ ] **Step 1: Install Vitest and add the test script**

Run: `npm install --save-dev vitest`

Then add to `package.json` → `"scripts"`:

```json
"test": "vitest run"
```

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [{ find: /^@\//, replacement: fileURLToPath(new URL('./', import.meta.url)) }],
  },
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts'],
  },
});
```

- [ ] **Step 3: Create `lib/careers/types.ts`**

```ts
/**
 * Types for the MyJKKN Public Careers API.
 * See docs/public-careers-api.md. Nullable fields reflect live data
 * (posted_at, job_code, department, salary are frequently null).
 */

export type JobType = 'full_time' | 'part_time' | 'contract' | 'internship' | 'freelance';

export interface PublicJobRef {
  id: string;
  name: string;
}

export interface PublicJobSalary {
  min: number | null;
  max: number | null;
  currency: string;
  duration: string;
}

export interface PublicJob {
  id: string;
  job_code: string | null;
  title: string;
  role_category: string | null;
  job_type: JobType | string;
  description: string | null;
  institution: PublicJobRef;
  department: PublicJobRef | null;
  city: string | null;
  state: string | null;
  country: string | null;
  education_level: string | null;
  min_experience_years: number | null;
  max_experience_years: number | null;
  qualifications: string[] | null;
  skills: string[] | null;
  positions_open: number | null;
  posted_at: string | null;
  closes_at: string | null;
  salary: PublicJobSalary | null;
}

export interface PublicJobsResponse {
  data: PublicJob[];
  institutions: Array<PublicJobRef & { open_jobs: number }>;
}

export type ApplyResult =
  | { ok: true; reference: string }
  | { ok: false; status: number; error: string; fields: Record<string, string> };
```

- [ ] **Step 4: Create `lib/careers/config.ts`**

```ts
/**
 * Careers integration config. Browser-safe (no secrets).
 * NEXT_PUBLIC_MYJKKN_URL is optional; production MyJKKN host is https://www.jkkn.ai.
 * If the host ever changes, also update connect-src in proxy.ts.
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '');
export const CAREERS_API = `${MYJKKN_URL}/api/public/careers`;
export const CAREERS_PATH = '/information-center/careers';
export const SITE_URL = 'https://dental.jkkn.ac.in';
export const CAREERS_REVALIDATE_SECONDS = 300;
export const RESUME_MAX_BYTES = 2 * 1024 * 1024;
```

- [ ] **Step 5: Create `lib/careers/test-fixtures.ts`**

```ts
import type { PublicJob } from './types';

export const DENTAL_ID = 'e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5';
export const PHARMACY_ID = '5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334';

export function makeJob(overrides: Partial<PublicJob> = {}): PublicJob {
  return {
    id: 'dff7f886-0000-4000-8000-000000000001',
    job_code: null,
    title: 'PROF - DCH - PERIODONTICS',
    role_category: 'teaching_faculty',
    job_type: 'full_time',
    description: '<p>Role summary</p>',
    institution: { id: DENTAL_ID, name: 'JKKN Dental College and Hospital' },
    department: { id: 'dept-1', name: 'Periodontics' },
    city: 'Komarapalayam',
    state: 'Tamil Nadu',
    country: 'India',
    education_level: 'masters',
    min_experience_years: 10,
    max_experience_years: null,
    qualifications: [],
    skills: [],
    positions_open: 1,
    posted_at: null,
    closes_at: null,
    salary: null,
    ...overrides,
  };
}
```

- [ ] **Step 6: Write the failing tests `lib/careers/jobs.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import { DENTAL_ID, PHARMACY_ID, makeJob } from './test-fixtures';

const dental = makeJob();
const pharmacy = makeJob({
  id: '11111111-1111-4111-8111-111111111111',
  institution: { id: PHARMACY_ID, name: 'JKKN College of Pharmacy' },
});

describe('isUuid', () => {
  it('accepts a uuid and rejects other strings', () => {
    expect(isUuid(DENTAL_ID)).toBe(true);
    expect(isUuid('not-a-uuid')).toBe(false);
    expect(isUuid('../../admin')).toBe(false);
  });
});

describe('filterInstitutionJobs', () => {
  it('keeps only jobs of the given institution', () => {
    expect(filterInstitutionJobs({ data: [dental, pharmacy] }, DENTAL_ID)).toEqual([dental]);
  });

  it('fails closed when the institution id is missing', () => {
    expect(filterInstitutionJobs({ data: [dental, pharmacy] }, undefined)).toEqual([]);
  });

  it('returns [] for malformed payloads', () => {
    expect(filterInstitutionJobs(null, DENTAL_ID)).toEqual([]);
    expect(filterInstitutionJobs({ data: 'oops' }, DENTAL_ID)).toEqual([]);
    expect(filterInstitutionJobs({ error: 'boom' }, DENTAL_ID)).toEqual([]);
  });

  it('drops entries that are not valid jobs', () => {
    const broken = { id: 'x', institution: { id: DENTAL_ID } };
    expect(filterInstitutionJobs({ data: [broken, dental] }, DENTAL_ID)).toEqual([dental]);
  });
});

describe('pickInstitutionJob', () => {
  it('returns the job when it belongs to the institution', () => {
    expect(pickInstitutionJob({ data: dental }, DENTAL_ID)).toEqual(dental);
  });

  it('rejects another institution\'s job', () => {
    expect(pickInstitutionJob({ data: pharmacy }, DENTAL_ID)).toBeNull();
  });

  it('fails closed without an institution id or with a bad payload', () => {
    expect(pickInstitutionJob({ data: dental }, undefined)).toBeNull();
    expect(pickInstitutionJob({ error: 'Job not found.' }, DENTAL_ID)).toBeNull();
  });
});
```

- [ ] **Step 7: Write the failing tests `lib/careers/format.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import {
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from './format';

describe('labels', () => {
  it('maps role categories to JKKN terminology', () => {
    expect(roleCategoryLabel('teaching_faculty')).toBe('Senior Learner');
    expect(roleCategoryLabel('non_teaching')).toBe('Team Member');
    expect(roleCategoryLabel('medical')).toBe('Clinical');
    expect(roleCategoryLabel('research_assistant')).toBe('Research Assistant');
    expect(roleCategoryLabel(null)).toBeNull();
  });

  it('maps job types and education levels', () => {
    expect(jobTypeLabel('full_time')).toBe('Full-time');
    expect(jobTypeLabel('internship')).toBe('Internship');
    expect(educationLabel('phd')).toBe('Ph.D.');
    expect(educationLabel('masters')).toBe("Master's degree");
    expect(educationLabel(null)).toBeNull();
  });
});

describe('experienceLabel', () => {
  it('formats ranges and open-ended values', () => {
    expect(experienceLabel(1, 5)).toBe('1–5 years');
    expect(experienceLabel(10, null)).toBe('10+ years');
    expect(experienceLabel(1, null)).toBe('1+ year');
    expect(experienceLabel(0, null)).toBe('Freshers welcome');
    expect(experienceLabel(null, 3)).toBe('Up to 3 years');
    expect(experienceLabel(2, 2)).toBe('2 years');
    expect(experienceLabel(null, null)).toBeNull();
  });
});

describe('salaryLabel', () => {
  it('formats INR ranges with duration', () => {
    expect(salaryLabel({ min: 30000, max: 50000, currency: 'INR', duration: 'per_month' })).toBe(
      '₹30,000 – ₹50,000 / month',
    );
    expect(salaryLabel({ min: 150000, max: null, currency: 'INR', duration: 'per_year' })).toBe(
      'From ₹1,50,000 / year',
    );
  });

  it('returns null when hidden or empty', () => {
    expect(salaryLabel(null)).toBeNull();
    expect(salaryLabel({ min: null, max: null, currency: 'INR', duration: 'per_month' })).toBeNull();
  });
});

describe('misc labels', () => {
  it('formats location, date and positions', () => {
    expect(locationLabel({ city: 'Komarapalayam', state: 'Tamil Nadu' })).toBe('Komarapalayam, Tamil Nadu');
    expect(locationLabel({ city: null, state: null })).toBeNull();
    expect(formatDate('2026-09-01T00:00:00Z')).toBe('1 September 2026');
    expect(formatDate(null)).toBeNull();
    expect(formatDate('garbage')).toBeNull();
    expect(positionsLabel(1)).toBe('1 position');
    expect(positionsLabel(3)).toBe('3 positions');
    expect(positionsLabel(null)).toBeNull();
  });
});
```

- [ ] **Step 8: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "./jobs"` / `"./format"`.

- [ ] **Step 9: Implement `lib/careers/jobs.ts`**

```ts
import type { PublicJob } from './types';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: string): boolean {
  return UUID_RE.test(value);
}

function isPublicJob(value: unknown): value is PublicJob {
  if (!value || typeof value !== 'object') return false;
  const job = value as Partial<PublicJob>;
  return typeof job.id === 'string' && typeof job.title === 'string' && typeof job.institution?.id === 'string';
}

function payloadData(payload: unknown): unknown {
  return payload && typeof payload === 'object' ? (payload as { data?: unknown }).data : undefined;
}

/** Jobs from a list response that belong to `institutionId`. Fails closed: no id → []. */
export function filterInstitutionJobs(payload: unknown, institutionId: string | undefined): PublicJob[] {
  if (!institutionId) return [];
  const data = payloadData(payload);
  if (!Array.isArray(data)) return [];
  return data.filter(isPublicJob).filter((job) => job.institution.id === institutionId);
}

/** The job from a detail response if it belongs to `institutionId`, else null. */
export function pickInstitutionJob(payload: unknown, institutionId: string | undefined): PublicJob | null {
  if (!institutionId) return null;
  const data = payloadData(payload);
  return isPublicJob(data) && data.institution.id === institutionId ? data : null;
}
```

- [ ] **Step 10: Implement `lib/careers/format.ts`**

```ts
import type { PublicJob, PublicJobSalary } from './types';

const ROLE_LABELS: Record<string, string> = {
  teaching_faculty: 'Senior Learner',
  non_teaching: 'Team Member',
  medical: 'Clinical',
};

const JOB_TYPE_LABELS: Record<string, string> = {
  full_time: 'Full-time',
  part_time: 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
  freelance: 'Freelance',
};

const EDUCATION_LABELS: Record<string, string> = {
  phd: 'Ph.D.',
  masters: "Master's degree",
  bachelors: "Bachelor's degree",
  diploma: 'Diploma',
};

const DURATION_LABELS: Record<string, string> = {
  per_hour: ' / hour',
  per_day: ' / day',
  per_week: ' / week',
  per_month: ' / month',
  per_year: ' / year',
};

function humanize(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function lookup(labels: Record<string, string>, value: string | null): string | null {
  if (!value) return null;
  return labels[value] ?? humanize(value);
}

export const roleCategoryLabel = (value: string | null) => lookup(ROLE_LABELS, value);
export const jobTypeLabel = (value: string | null) => lookup(JOB_TYPE_LABELS, value);
export const educationLabel = (value: string | null) => lookup(EDUCATION_LABELS, value);

const years = (n: number) => (n === 1 ? 'year' : 'years');

export function experienceLabel(min: number | null, max: number | null): string | null {
  if (min == null && max == null) return null;
  if (min != null && max != null) return min === max ? `${min} ${years(min)}` : `${min}–${max} years`;
  if (min != null) return min === 0 ? 'Freshers welcome' : `${min}+ ${years(min)}`;
  return `Up to ${max} ${years(max as number)}`;
}

export function salaryLabel(salary: PublicJobSalary | null): string | null {
  if (!salary || (salary.min == null && salary.max == null)) return null;
  const money = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: salary.currency || 'INR',
    maximumFractionDigits: 0,
  });
  const per = DURATION_LABELS[salary.duration] ?? '';
  if (salary.min != null && salary.max != null) return `${money.format(salary.min)} – ${money.format(salary.max)}${per}`;
  if (salary.min != null) return `From ${money.format(salary.min)}${per}`;
  return `Up to ${money.format(salary.max as number)}${per}`;
}

export function locationLabel(job: Pick<PublicJob, 'city' | 'state'>): string | null {
  return [job.city, job.state].filter(Boolean).join(', ') || null;
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Kolkata',
});

export function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : DATE_FORMAT.format(date);
}

export function positionsLabel(count: number | null): string | null {
  if (count == null || count < 1) return null;
  return `${count} ${count === 1 ? 'position' : 'positions'}`;
}
```

- [ ] **Step 11: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — `jobs.test.ts` and `format.test.ts` all green.

- [ ] **Step 12: Commit**

```bash
git add package.json package-lock.json vitest.config.ts lib/careers/types.ts lib/careers/config.ts lib/careers/jobs.ts lib/careers/format.ts lib/careers/test-fixtures.ts lib/careers/jobs.test.ts lib/careers/format.test.ts
git commit -m "feat(careers): add MyJKKN careers types, dental-only filtering and label helpers"
```

---

### Task 2: Description sanitiser, plain-text excerpt, and JobPosting JSON-LD

**Files:**
- Modify: `package.json` (`sanitize-html`, `@types/sanitize-html`)
- Create: `lib/careers/sanitize.ts`, `lib/careers/schema.ts`, `components/careers/JsonLd.tsx`
- Test: `lib/careers/sanitize.test.ts`, `lib/careers/schema.test.ts`

**Interfaces:**
- Consumes: `PublicJob` (Task 1), `organizationInfo` from `@/lib/metadata`
- Produces:
  - `sanitizeJobDescription(html: string | null | undefined): string`
  - `descriptionToPlainText(html: string | null | undefined, maxLength?: number): string` (default 155)
  - `serializeJsonLd(data: unknown): string`
  - `buildJobPostingSchema(job: PublicJob, pageUrl: string, descriptionHtml: string): Record<string, unknown> | null`
  - `<JsonLd data={object} />` (default export, `JsonLdProps { data: Record<string, unknown> }`)

- [ ] **Step 1: Install the sanitiser**

Run: `npm install sanitize-html && npm install --save-dev @types/sanitize-html`

- [ ] **Step 2: Write the failing tests `lib/careers/sanitize.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { descriptionToPlainText, sanitizeJobDescription } from './sanitize';

describe('sanitizeJobDescription', () => {
  it('strips class and style attributes', () => {
    expect(sanitizeJobDescription('<p class="x" style="color:red">Hi</p>')).toBe('<p>Hi</p>');
  });

  it('removes scripts, iframes and event handlers', () => {
    expect(sanitizeJobDescription('<script>alert(1)</script><p>ok</p>')).toBe('<p>ok</p>');
    expect(sanitizeJobDescription('<iframe src="https://evil.test"></iframe><p>ok</p>')).toBe('<p>ok</p>');
    expect(sanitizeJobDescription('<img src=x onerror=alert(1)>')).toBe('');
  });

  it('unwraps unsafe or junk links but keeps their text', () => {
    expect(sanitizeJobDescription('<a href="javascript:alert(1)">click</a>')).toBe('click');
    expect(sanitizeJobDescription('<a class="text-blue-600" href="http://M.Sc">M.Sc</a>')).toBe('M.Sc');
  });

  it('keeps https links, opening them safely in a new tab', () => {
    expect(sanitizeJobDescription('<a href="https://jkkn.ac.in">site</a>')).toBe(
      '<a href="https://jkkn.ac.in" target="_blank" rel="noopener noreferrer nofollow">site</a>',
    );
  });

  it('keeps mailto links without target', () => {
    expect(sanitizeJobDescription('<a target="_blank" href="mailto:dental@jkkn.ac.in">mail</a>')).toBe(
      '<a href="mailto:dental@jkkn.ac.in">mail</a>',
    );
  });

  it('keeps list structure and handles empty input', () => {
    expect(sanitizeJobDescription('<ul><li><strong>A</strong></li></ul>')).toBe('<ul><li><strong>A</strong></li></ul>');
    expect(sanitizeJobDescription(null)).toBe('');
  });
});

describe('descriptionToPlainText', () => {
  it('flattens HTML into readable text with decoded entities', () => {
    expect(descriptionToPlainText('<p>Hello &amp; welcome</p><p>Line&nbsp;two</p>')).toBe('Hello & welcome Line two');
  });

  it('drops script content', () => {
    expect(descriptionToPlainText('<script>alert(1)</script><p>ok</p>')).toBe('ok');
  });

  it('truncates on a word boundary with an ellipsis', () => {
    const text = descriptionToPlainText(`<p>${'alpha '.repeat(50)}</p>`, 40);
    expect(text.length).toBeLessThanOrEqual(40);
    expect(text.endsWith('alpha…')).toBe(true);
  });

  it('returns empty string for empty input', () => {
    expect(descriptionToPlainText(null)).toBe('');
  });
});
```

- [ ] **Step 3: Write the failing tests `lib/careers/schema.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { buildJobPostingSchema, serializeJsonLd } from './schema';
import { makeJob } from './test-fixtures';

const URL = 'https://dental.jkkn.ac.in/information-center/careers/abc/';

describe('buildJobPostingSchema', () => {
  it('returns null when posted_at is missing (Google requires datePosted)', () => {
    expect(buildJobPostingSchema(makeJob({ posted_at: null }), URL, '<p>x</p>')).toBeNull();
  });

  it('builds a JobPosting with employment type and hiring organisation', () => {
    const schema = buildJobPostingSchema(makeJob({ posted_at: '2026-09-01T00:00:00Z' }), URL, '<p>x</p>');
    expect(schema).toMatchObject({
      '@type': 'JobPosting',
      title: 'PROF - DCH - PERIODONTICS',
      datePosted: '2026-09-01T00:00:00Z',
      employmentType: 'FULL_TIME',
      directApply: true,
      url: URL,
      hiringOrganization: { name: 'JKKN Dental College & Hospital' },
    });
    expect(schema).not.toHaveProperty('baseSalary');
    expect(schema).not.toHaveProperty('validThrough');
  });

  it('adds salary and closing date when present', () => {
    const schema = buildJobPostingSchema(
      makeJob({
        posted_at: '2026-09-01T00:00:00Z',
        closes_at: '2026-10-01T00:00:00Z',
        salary: { min: 30000, max: 50000, currency: 'INR', duration: 'per_month' },
      }),
      URL,
      '<p>x</p>',
    );
    expect(schema).toMatchObject({
      validThrough: '2026-10-01T00:00:00Z',
      baseSalary: { currency: 'INR', value: { minValue: 30000, maxValue: 50000, unitText: 'MONTH' } },
    });
  });
});

describe('serializeJsonLd', () => {
  it('escapes < so data cannot close the script tag, and stays valid JSON', () => {
    const data = { title: '</script><script>alert(1)</script>' };
    const out = serializeJsonLd(data);
    expect(out).not.toContain('</script>');
    expect(JSON.parse(out)).toEqual(data);
  });
});
```

- [ ] **Step 4: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "./sanitize"` / `"./schema"`.

- [ ] **Step 5: Implement `lib/careers/sanitize.ts`**

```ts
import sanitizeHtml from 'sanitize-html';

const SAFE_LINK = /^(https:|mailto:|tel:)/i;

/**
 * Sanitise HR-authored job description HTML from MyJKKN.
 * Keeps basic formatting; strips classes/styles/scripts; keeps only https/mailto/tel
 * links (others — incl. auto-linked junk like "http://M.Sc" — are unwrapped to text).
 */
export function sanitizeJobDescription(html: string | null | undefined): string {
  if (!html) return '';
  return sanitizeHtml(html, {
    allowedTags: ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li', 'hr', 'h3', 'h4', 'blockquote', 'a'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['https', 'mailto', 'tel'],
    allowProtocolRelative: false,
    transformTags: {
      h1: 'h3',
      h2: 'h3',
      a: (_tagName, attribs) => {
        const href = attribs.href ?? '';
        if (!SAFE_LINK.test(href)) return { tagName: 'span', attribs: {} };
        return href.toLowerCase().startsWith('https:')
          ? { tagName: 'a', attribs: { href, target: '_blank', rel: 'noopener noreferrer nofollow' } }
          : { tagName: 'a', attribs: { href } };
      },
    },
  });
}

const ENTITIES: Record<string, string> = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };

/** Plain-text version of a description for card excerpts and meta descriptions. */
export function descriptionToPlainText(html: string | null | undefined, maxLength = 155): string {
  if (!html) return '';
  const spaced = html.replace(/<(br|hr)\s*\/?>|<\/(p|li|h[1-6]|div|blockquote)>/gi, ' ');
  const text = sanitizeHtml(spaced, { allowedTags: [], allowedAttributes: {} })
    .replace(/&(lt|gt|quot|#39|nbsp);/g, (entity) => ENTITIES[entity])
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}
```

- [ ] **Step 6: Implement `lib/careers/schema.ts`**

```ts
import { organizationInfo } from '@/lib/metadata';
import type { PublicJob } from './types';

const EMPLOYMENT_TYPES: Record<string, string> = {
  full_time: 'FULL_TIME',
  part_time: 'PART_TIME',
  contract: 'CONTRACTOR',
  internship: 'INTERN',
  freelance: 'CONTRACTOR',
};

const SALARY_UNITS: Record<string, string> = {
  per_hour: 'HOUR',
  per_day: 'DAY',
  per_week: 'WEEK',
  per_month: 'MONTH',
  per_year: 'YEAR',
};

/** JSON for a <script type="application/ld+json">, with `<` escaped so data cannot close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * schema.org JobPosting for Google Jobs. Returns null when posted_at is missing,
 * because datePosted is a required property.
 */
export function buildJobPostingSchema(
  job: PublicJob,
  pageUrl: string,
  descriptionHtml: string,
): Record<string, unknown> | null {
  if (!job.posted_at) return null;
  const { address } = organizationInfo;
  const salary = job.salary;
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: descriptionHtml || job.title,
    identifier: { '@type': 'PropertyValue', name: organizationInfo.name, value: job.job_code ?? job.id },
    datePosted: job.posted_at,
    ...(job.closes_at ? { validThrough: job.closes_at } : {}),
    employmentType: EMPLOYMENT_TYPES[job.job_type] ?? 'OTHER',
    hiringOrganization: {
      '@type': 'Organization',
      name: organizationInfo.name,
      sameAs: organizationInfo.url,
      logo: organizationInfo.logo,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: job.city ?? address.addressLocality,
        addressRegion: job.state ?? address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    },
    directApply: true,
    url: pageUrl,
    ...(salary && (salary.min != null || salary.max != null)
      ? {
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: salary.currency || 'INR',
            value: {
              '@type': 'QuantitativeValue',
              ...(salary.min != null ? { minValue: salary.min } : {}),
              ...(salary.max != null ? { maxValue: salary.max } : {}),
              unitText: SALARY_UNITS[salary.duration] ?? 'MONTH',
            },
          },
        }
      : {}),
  };
}
```

- [ ] **Step 7: Create `components/careers/JsonLd.tsx`**

```tsx
import { serializeJsonLd } from '@/lib/careers/schema';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/** JSON-LD script for data that may contain API-provided text (escapes `<`). */
export default function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
```

- [ ] **Step 8: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — all four test files green.

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json lib/careers/sanitize.ts lib/careers/schema.ts lib/careers/sanitize.test.ts lib/careers/schema.test.ts components/careers/JsonLd.tsx
git commit -m "feat(careers): sanitise MyJKKN job HTML and build escaped JobPosting JSON-LD"
```

---

### Task 3: Server data layer + careers listing page (goes live)

**Files:**
- Create: `lib/careers/api.ts`, `components/careers/JobCard.tsx`
- Rewrite: `app/information-center/careers/page.tsx`
- Modify: `next.config.ts:43-44` (delete cvviz redirect)

**Interfaces:**
- Consumes: `CAREERS_API`, `CAREERS_PATH`, `CAREERS_REVALIDATE_SECONDS`, `SITE_URL` (Task 1); `filterInstitutionJobs`, `pickInstitutionJob`, `isUuid` (Task 1); label helpers (Task 1); `descriptionToPlainText` (Task 2)
- Produces:
  - `getDentalJobs(): Promise<DentalJobsResult>` where `DentalJobsResult = { jobs: PublicJob[]; available: boolean }`
  - `getDentalJob(jobId: string): Promise<PublicJob | null>` (React `cache`-wrapped; throws on 5xx/network error, null on 404/foreign/invalid id)
  - `<JobCard job={PublicJob} />`

- [ ] **Step 1: Create `lib/careers/api.ts`**

```ts
import 'server-only';
import { cache } from 'react';
import { CAREERS_API, CAREERS_REVALIDATE_SECONDS } from './config';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import type { PublicJob } from './types';

const TIMEOUT_MS = 8000;

function dentalInstitutionId(): string | undefined {
  return process.env.JKKN_DENTAL_INSTITUTION_ID?.trim() || undefined;
}

export interface DentalJobsResult {
  jobs: PublicJob[];
  /** false when the API could not be reached or config is missing — show a fallback notice. */
  available: boolean;
}

/** Open jobs for JKKN Dental College only. Never throws (safe for build + sitemap). */
export async function getDentalJobs(): Promise<DentalJobsResult> {
  const institutionId = dentalInstitutionId();
  if (!institutionId) {
    console.error('[careers] JKKN_DENTAL_INSTITUTION_ID is not set — showing no jobs');
    return { jobs: [], available: false };
  }
  try {
    const res = await fetch(`${CAREERS_API}/jobs?institution_id=${encodeURIComponent(institutionId)}`, {
      next: { revalidate: CAREERS_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { jobs: filterInstitutionJobs(await res.json(), institutionId), available: true };
  } catch (error) {
    console.error('[careers] failed to load jobs:', error);
    return { jobs: [], available: false };
  }
}

/**
 * One dental job, or null when the id is invalid, the job is closed, or it belongs
 * to another institution. Throws on server/network errors so ISR keeps the stale page.
 */
export const getDentalJob = cache(async (jobId: string): Promise<PublicJob | null> => {
  const institutionId = dentalInstitutionId();
  if (!institutionId || !isUuid(jobId)) return null;
  const res = await fetch(`${CAREERS_API}/jobs/${jobId}`, {
    next: { revalidate: CAREERS_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`[careers] job ${jobId}: HTTP ${res.status}`);
  return pickInstitutionJob(await res.json(), institutionId);
});
```

- [ ] **Step 2: Create `components/careers/JobCard.tsx`**

```tsx
import Link from 'next/link';
import { ArrowRight, Briefcase, Clock, GraduationCap, MapPin, type LucideIcon } from 'lucide-react';
import { CAREERS_PATH } from '@/lib/careers/config';
import {
  educationLabel,
  experienceLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
} from '@/lib/careers/format';
import { descriptionToPlainText } from '@/lib/careers/sanitize';
import type { PublicJob } from '@/lib/careers/types';

interface JobCardProps {
  job: PublicJob;
}

interface Fact {
  icon: LucideIcon;
  label: string;
}

export default function JobCard({ job }: JobCardProps) {
  const href = `${CAREERS_PATH}/${job.id}/`;
  const facts = [
    { icon: Briefcase, label: roleCategoryLabel(job.role_category) },
    { icon: Clock, label: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { icon: GraduationCap, label: educationLabel(job.education_level) },
    { icon: MapPin, label: locationLabel(job) },
  ].filter((fact): fact is Fact => Boolean(fact.label));
  const excerpt = descriptionToPlainText(job.description, 160);
  const positions = positionsLabel(job.positions_open);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#7cb983]/30 bg-white p-6 shadow-sm">
      {job.department && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#006837]">{job.department.name}</p>
      )}
      <h3 className="mb-3 text-lg font-bold text-[#002309]">
        <Link href={href} className="hover:text-[#006837] hover:underline">
          {job.title}
        </Link>
      </h3>
      {facts.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {facts.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FBFBEE] px-3 py-1 text-xs font-medium text-[#002309]"
            >
              <Icon className="h-3.5 w-3.5 text-[#006837]" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      )}
      {excerpt && <p className="mb-5 line-clamp-3 text-sm text-[#002309]/80">{excerpt}</p>}
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-[#002309]/70">{positions}</span>
        <Link
          href={href}
          aria-label={`View details and apply for ${job.title}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#7cb983] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#6ba872]"
        >
          View &amp; Apply
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Rewrite `app/information-center/careers/page.tsx`**

Replaces the cvviz iframe; keeps the hero, the HR contact card, and the existing schemas.

```tsx
import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import JobCard from '@/components/careers/JobCard';
import { getDentalJobs } from '@/lib/careers/api';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const revalidate = 300;

const PAGE_URL = 'https://dental.jkkn.ac.in/information-center/careers/';
const PAGE_TITLE = 'Careers & Current Openings';
const PAGE_DESCRIPTION =
  'Current job openings at JKKN Dental College & Hospital, Komarapalayam, for senior learners and team members. View details and apply online.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: 'JKKN dental careers, dental college jobs, dental teaching jobs, Komarapalayam jobs, Namakkal jobs, dental hospital jobs',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE} | JKKN Dental College & Hospital`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 text-center text-[#002309]">{children}</div>
  );
}

export default async function Careers() {
  const { jobs, available } = await getDentalJobs();

  const breadcrumbSchema = generateBreadcrumbSchema('/information-center/careers');
  const webPageSchema = generateWebPageSchema({
    title: `${PAGE_TITLE} | JKKN Dental College & Hospital`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    dateModified: '2026-09-28',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: `${PAGE_TITLE} | JKKN Dental College & Hospital`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    speakableCssSelectors: ['h1'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">CAREERS</h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-4 rounded-full" />
          <p className="text-white/90 text-base md:text-lg font-medium">
            Career Opportunities at JKKN Dental College &amp; Hospital
          </p>
        </div>
      </section>

      {/* Current Openings — live from MyJKKN */}
      <section aria-labelledby="openings-heading" className="bg-[#FBFBEE] pt-8 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="openings-heading" className="text-2xl md:text-3xl font-bold text-[#006837]">
              Current Openings
            </h2>
            {available && jobs.length > 0 && (
              <p className="text-sm font-medium text-[#002309]/70">
                {jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}
              </p>
            )}
          </div>

          {!available ? (
            <Notice>
              We couldn&apos;t load the current openings right now. Please try again shortly, or reach our HR team
              using the contact details below.
            </Notice>
          ) : jobs.length === 0 ? (
            <Notice>
              There are no open positions at the moment. Please check back soon, or reach our HR team using the
              contact details below.
            </Notice>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {jobs.map((job) => (
                <li key={job.id}>
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Contact Details */}
      <div className="bg-[#FBFBEE] pt-4 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">For job-related inquiries, contact us:</h3>
            </div>
            <div className="px-6 py-5">
              <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-2">
                <p className="text-[#002309] font-bold text-sm md:text-base">Mr N. Narayan Rao</p>
                <p className="text-[#002309] font-bold text-sm md:text-base">90923 27666</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
```

Note: `border-gray-100` in the contact card is carried over unchanged from the existing file.

- [ ] **Step 4: Remove the cvviz redirect in `next.config.ts`**

Delete these two lines (currently 43-44):

```ts
      { source: '/information-center/careers', destination: 'https://jobs.cvviz.com/jkkn_institutions', permanent: false },
      { source: '/information-center/careers/', destination: 'https://jobs.cvviz.com/jkkn_institutions', permanent: false },
```

Keep the `/careers` rewrite (line ~460) and the `/guidance-for-…` redirect (line ~117) as they are.

- [ ] **Step 5: Type-check, lint, test**

Run: `npm test && npx tsc --noEmit && npm run lint`
Expected: tests PASS; `tsc` exits 0; lint reports no errors in the new/changed files.

- [ ] **Step 6: Run locally and check the page**

Run: `npm run dev`, then in another shell:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/information-center/careers/
curl -s http://localhost:3000/information-center/careers/ | grep -o 'View details and apply for [^"]*' | head
curl -s http://localhost:3000/information-center/careers/ | grep -o '<title>[^<]*</title>'
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/careers/
```

Expected: `200`; one "View details and apply for …" line per dental job (7 as of 2026-09-28) and no pharmacy/nursing titles; title `Careers & Current Openings | JKKN Dental College`; `/careers/` returns `200`.

Fail-closed check: temporarily comment out `JKKN_DENTAL_INSTITUTION_ID` in `.env.local`, restart dev, reload → "We couldn't load the current openings" notice and **no** job cards. Restore the line.

- [ ] **Step 7: Commit**

```bash
git add lib/careers/api.ts components/careers/JobCard.tsx app/information-center/careers/page.tsx next.config.ts
git commit -m "feat(careers): list dental job openings from MyJKKN and drop cvviz redirect"
```

---

### Task 4: Job detail page with JSON-LD

**Files:**
- Create: `app/information-center/careers/[id]/page.tsx`

**Interfaces:**
- Consumes: `getDentalJobs`, `getDentalJob` (Task 3); label helpers (Task 1); `sanitizeJobDescription`, `descriptionToPlainText`, `buildJobPostingSchema` (Task 2); `JsonLd` (Task 2); `ApplyForm` (Task 5 — **until Task 5 lands, render the `#apply` section with a placeholder comment removed in Task 5**; see Step 1 note)
- Produces: route `/information-center/careers/[id]/`, anchor `#apply`

- [ ] **Step 1: Create `app/information-center/careers/[id]/page.tsx`**

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JsonLd from '@/components/careers/JsonLd';
import { getDentalJob, getDentalJobs } from '@/lib/careers/api';
import { CAREERS_PATH, SITE_URL } from '@/lib/careers/config';
import {
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from '@/lib/careers/format';
import { descriptionToPlainText, sanitizeJobDescription } from '@/lib/careers/sanitize';
import { buildJobPostingSchema } from '@/lib/careers/schema';

export const revalidate = 300;

interface CareerDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { jobs } = await getDentalJobs();
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = await getDentalJob(id);
  if (!job) return { title: 'Job Opening Not Found', robots: { index: false, follow: true } };
  const url = `${SITE_URL}${CAREERS_PATH}/${job.id}/`;
  const description =
    descriptionToPlainText(job.description, 155) ||
    `Apply for ${job.title} at JKKN Dental College & Hospital, Komarapalayam.`;
  return {
    title: job.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: job.title, description, url, type: 'website', siteName: 'JKKN Dental College & Hospital' },
  };
}

const DESCRIPTION_CLASSES =
  'text-[#002309] leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_strong]:font-semibold [&_a]:text-[#006837] [&_a]:underline [&_hr]:my-6 [&_hr]:border-[#7cb983]/30 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#006837] [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:font-bold [&_blockquote]:border-l-4 [&_blockquote]:border-[#7cb983] [&_blockquote]:pl-4';

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { id } = await params;
  const job = await getDentalJob(id);
  if (!job) notFound();

  const pageUrl = `${SITE_URL}${CAREERS_PATH}/${job.id}/`;
  const descriptionHtml = sanitizeJobDescription(job.description);
  const jobPostingSchema = buildJobPostingSchema(job, pageUrl, descriptionHtml);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: `${SITE_URL}${CAREERS_PATH}/` },
      { '@type': 'ListItem', position: 3, name: job.title, item: pageUrl },
    ],
  };

  const facts = [
    { term: 'Role type', value: roleCategoryLabel(job.role_category) },
    { term: 'Department', value: job.department?.name ?? null },
    { term: 'Employment', value: jobTypeLabel(job.job_type) },
    { term: 'Experience', value: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { term: 'Education', value: educationLabel(job.education_level) },
    { term: 'Qualifications', value: job.qualifications?.length ? job.qualifications.join(', ') : null },
    { term: 'Skills', value: job.skills?.length ? job.skills.join(', ') : null },
    { term: 'Openings', value: positionsLabel(job.positions_open) },
    { term: 'Location', value: locationLabel(job) },
    { term: 'Salary', value: salaryLabel(job.salary) },
    { term: 'Posted on', value: formatDate(job.posted_at) },
    { term: 'Apply by', value: formatDate(job.closes_at) },
    { term: 'Job code', value: job.job_code },
  ].filter((fact): fact is { term: string; value: string } => Boolean(fact.value));

  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      {jobPostingSchema && <JsonLd data={jobPostingSchema} />}
      <Header />

      <section className="bg-[#006837] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <span>Careers</span>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <span aria-current="page" className="text-white">
                  {job.title}
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">{job.title}</h1>
          <p className="text-white/90 font-medium">
            JKKN Dental College &amp; Hospital{job.department ? ` · ${job.department.name}` : ''}
          </p>
          <a
            href="#apply"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-lg bg-[#7cb983] px-6 font-semibold text-white transition-colors hover:bg-[#6ba872]"
          >
            Apply for this role
          </a>
        </div>
      </section>

      <div className="bg-[#FBFBEE] px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`${CAREERS_PATH}/`}
            className="mb-6 inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#006837] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All current openings
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 md:p-8 lg:col-span-2">
              <h2 className="mb-4 text-xl font-bold text-[#006837]">About this role</h2>
              {descriptionHtml ? (
                <div className={DESCRIPTION_CLASSES} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              ) : (
                <p className="text-[#002309]">Contact our HR team for the full role description.</p>
              )}
            </article>

            <aside className="h-fit rounded-2xl border border-[#7cb983]/30 bg-white p-6">
              <h2 className="mb-4 text-lg font-bold text-[#006837]">Role at a glance</h2>
              <dl className="space-y-3">
                {facts.map(({ term, value }) => (
                  <div key={term}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#006837]">{term}</dt>
                    <dd className="text-[#002309]">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <section id="apply" aria-labelledby="apply-heading" className="mt-10 scroll-mt-28">
            <h2 id="apply-heading" className="mb-4 text-2xl font-bold text-[#006837]">
              Apply for this role
            </h2>
            {/* ApplyForm is added in Task 5 */}
          </section>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
```

- [ ] **Step 2: Type-check and lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: exit 0, no errors in the new file.

- [ ] **Step 3: Verify locally (dev server running)**

```bash
# a real dental job id from the listing
ID=$(curl -s http://localhost:3000/information-center/careers/ | grep -o '/information-center/careers/[0-9a-f-]\{36\}/' | head -1 | cut -d/ -f4)
curl -s -o /dev/null -w "dental: %{http_code}\n" http://localhost:3000/information-center/careers/$ID/
# a PHARMACY job id taken from the unfiltered API — must be 404
PH=$(curl -s "https://www.jkkn.ai/api/public/careers/jobs?institution_id=5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334" | grep -o '"id":"[0-9a-f-]\{36\}"' | head -1 | cut -d'"' -f4)
curl -s -o /dev/null -w "pharmacy: %{http_code}\n" http://localhost:3000/information-center/careers/$PH/
curl -s -o /dev/null -w "garbage: %{http_code}\n" http://localhost:3000/information-center/careers/not-a-job/
curl -s http://localhost:3000/information-center/careers/$ID/ | grep -c 'text-blue-600\|http://M.Sc\|<script>alert'
```

Expected: `dental: 200`, `pharmacy: 404`, `garbage: 404`, final count `0`. Open the page in a browser at 375 px and 1280 px: description readable, facts sidebar stacks under the description on mobile, only "Home" in the breadcrumb is a link.

- [ ] **Step 4: Commit**

```bash
git add "app/information-center/careers/[id]/page.tsx"
git commit -m "feat(careers): add dental job detail page with sanitised description and JSON-LD"
```

---

### Task 5: Browser-side apply client + ApplyForm + CSP

**Files:**
- Create: `lib/careers/apply.ts`, `components/careers/ApplyForm.tsx`
- Test: `lib/careers/apply.test.ts`
- Modify: `app/information-center/careers/[id]/page.tsx` (mount form), `proxy.ts:10` (CSP), `next.config.ts:282` (stale CSP, keep in sync)

**Interfaces:**
- Consumes: `CAREERS_API`, `RESUME_MAX_BYTES` (Task 1), `ApplyResult` (Task 1)
- Produces:
  - `ApplicationInput` (interface), `FieldErrors` (type), `APPLICATION_FIELD_ORDER`
  - `toExperienceMonths(years: string, months: string): number | null`
  - `validateApplication(input: ApplicationInput): FieldErrors`
  - `buildApplicationFormData(input: ApplicationInput, utmSource: string): FormData`
  - `submitApplication(jobId: string, formData: FormData, fetchImpl?: typeof fetch): Promise<ApplyResult>`
  - `<ApplyForm jobId={string} jobTitle={string} />`

- [ ] **Step 1: Write the failing tests `lib/careers/apply.test.ts`**

```ts
import { describe, expect, it, vi } from 'vitest';
import {
  buildApplicationFormData,
  submitApplication,
  toExperienceMonths,
  validateApplication,
  type ApplicationInput,
} from './apply';

const pdf = (bytes = 10, name = 'cv.pdf') => new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });

const valid = (overrides: Partial<ApplicationInput> = {}): ApplicationInput => ({
  first_name: 'Priya',
  last_name: 'Kumar',
  email: 'priya@example.com',
  phone: '+91 93458-55001',
  qualification: 'MDS Periodontics',
  experience_years: '2',
  experience_extra_months: '6',
  current_job_title: '',
  current_company: '',
  resume: pdf(),
  consent: true,
  company_fax: '',
  ...overrides,
});

describe('toExperienceMonths', () => {
  it('converts years + months within 0–720', () => {
    expect(toExperienceMonths('2', '6')).toBe(30);
    expect(toExperienceMonths('0', '0')).toBe(0);
    expect(toExperienceMonths('60', '0')).toBe(720);
  });

  it('rejects out-of-range, fractional and blank values', () => {
    expect(toExperienceMonths('60', '1')).toBeNull();
    expect(toExperienceMonths('1', '12')).toBeNull();
    expect(toExperienceMonths('1.5', '0')).toBeNull();
    expect(toExperienceMonths('-1', '0')).toBeNull();
    expect(toExperienceMonths('', '0')).toBeNull();
  });
});

describe('validateApplication', () => {
  it('accepts a valid application', () => {
    expect(validateApplication(valid())).toEqual({});
  });

  it('flags missing and malformed fields', () => {
    const errors = validateApplication(
      valid({ first_name: ' ', email: 'nope', phone: '12345', consent: false, experience_years: '' }),
    );
    expect(Object.keys(errors).sort()).toEqual(['consent', 'email', 'experience_months', 'first_name', 'phone']);
  });

  it('rejects phones with letters and over-long text', () => {
    expect(validateApplication(valid({ phone: '93458abc55' }))).toHaveProperty('phone');
    expect(validateApplication(valid({ current_company: 'x'.repeat(151) }))).toHaveProperty('current_company');
  });

  it('checks resume presence, type and size', () => {
    expect(validateApplication(valid({ resume: null }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(10, 'cv.png') }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(3 * 1024 * 1024) }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(0) }))).toHaveProperty('resume');
    expect(validateApplication(valid({ resume: pdf(10, 'CV.DOCX') }))).toEqual({});
  });
});

describe('buildApplicationFormData', () => {
  it('maps inputs to API field names', () => {
    const fd = buildApplicationFormData(valid({ first_name: '  Priya ' }), 'dental.jkkn.ac.in');
    expect(fd.get('first_name')).toBe('Priya');
    expect(fd.get('experience_months')).toBe('30');
    expect(fd.get('consent')).toBe('true');
    expect(fd.get('utm_source')).toBe('dental.jkkn.ac.in');
    expect(fd.get('company_fax')).toBe('');
    expect(fd.get('resume')).toBeInstanceOf(File);
    expect(fd.has('current_company')).toBe(false);
  });

  it('includes optional fields when provided', () => {
    const fd = buildApplicationFormData(valid({ current_company: 'Smile Clinic' }), 'dental.jkkn.ac.in');
    expect(fd.get('current_company')).toBe('Smile Clinic');
  });
});

describe('submitApplication', () => {
  const body = new FormData();
  const respond = (status: number, payload: unknown) =>
    vi.fn<typeof fetch>(async () => new Response(typeof payload === 'string' ? payload : JSON.stringify(payload), { status }));

  it('posts to the job apply endpoint and returns the reference', async () => {
    const fetchMock = respond(201, { reference: 'JOB-001-AB12CD34' });
    const result = await submitApplication('abc', body, fetchMock);
    expect(result).toEqual({ ok: true, reference: 'JOB-001-AB12CD34' });
    expect(fetchMock).toHaveBeenCalledWith(
      'https://www.jkkn.ai/api/public/careers/jobs/abc/apply',
      expect.objectContaining({ method: 'POST', body }),
    );
  });

  it('passes through field errors on 400', async () => {
    const result = await submitApplication('abc', body, respond(400, { error: 'Invalid', fields: { email: 'Bad email' } }));
    expect(result).toEqual({
      ok: false,
      status: 400,
      error: 'Please correct the highlighted fields.',
      fields: { email: 'Bad email' },
    });
  });

  it('uses friendly messages for rate limit and closed jobs', async () => {
    const limited = await submitApplication('abc', body, respond(429, { error: 'Too many' }));
    expect(limited.ok === false && limited.error).toMatch(/try again in an hour/);
    const closed = await submitApplication('abc', body, respond(404, { error: 'Job not found.' }));
    expect(closed.ok === false && closed.error).toMatch(/no longer open/);
  });

  it('shows the API message for 5xx and survives non-JSON bodies', async () => {
    const withMessage = await submitApplication('abc', body, respond(503, { error: 'Maintenance, retry soon' }));
    expect(withMessage.ok === false && withMessage.error).toBe('Maintenance, retry soon');
    const html = await submitApplication('abc', body, respond(502, '<html>Bad gateway</html>'));
    expect(html).toMatchObject({ ok: false, status: 502, fields: {} });
  });

  it('reports network failures without throwing', async () => {
    const failing = vi.fn<typeof fetch>(async () => {
      throw new TypeError('Failed to fetch');
    });
    const result = await submitApplication('abc', body, failing);
    expect(result).toMatchObject({ ok: false, status: 0 });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "./apply"`.

- [ ] **Step 3: Implement `lib/careers/apply.ts`**

```ts
import { CAREERS_API, RESUME_MAX_BYTES } from './config';
import type { ApplyResult } from './types';

/**
 * Browser-side application submit for the MyJKKN Public Careers API.
 * MUST run in the applicant's browser — the API rate-limits per IP.
 */

export interface ApplicationInput {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  qualification: string;
  experience_years: string;
  experience_extra_months: string;
  current_job_title: string;
  current_company: string;
  resume: File | null;
  consent: boolean;
  /** Honeypot — must stay empty. */
  company_fax: string;
}

export const APPLICATION_FIELD_ORDER = [
  'first_name',
  'last_name',
  'email',
  'phone',
  'qualification',
  'experience_months',
  'current_job_title',
  'current_company',
  'resume',
  'consent',
] as const;

export type ApplicationField = (typeof APPLICATION_FIELD_ORDER)[number];
export type FieldErrors = Partial<Record<ApplicationField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARS_RE = /^[\d\s+\-()]+$/;
const RESUME_EXT_RE = /\.(pdf|docx?)$/i;

function toWholeNumber(value: string): number {
  return value.trim() === '' ? Number.NaN : Number(value);
}

export function toExperienceMonths(years: string, months: string): number | null {
  const y = toWholeNumber(years);
  const m = toWholeNumber(months);
  if (!Number.isInteger(y) || !Number.isInteger(m) || y < 0 || m < 0 || m > 11) return null;
  const total = y * 12 + m;
  return total <= 720 ? total : null;
}

export function validateApplication(input: ApplicationInput): FieldErrors {
  const errors: FieldErrors = {};

  const requireText = (key: 'first_name' | 'last_name' | 'qualification', label: string, max: number) => {
    const value = input[key].trim();
    if (!value) errors[key] = `${label} is required.`;
    else if (value.length > max) errors[key] = `${label} must be ${max} characters or fewer.`;
  };
  requireText('first_name', 'First name', 100);
  requireText('last_name', 'Last name', 100);
  requireText('qualification', 'Highest qualification', 200);

  if (!EMAIL_RE.test(input.email.trim())) errors.email = 'Enter a valid email address.';

  const phone = input.phone.trim();
  const digits = phone.replace(/\D/g, '').length;
  if (!PHONE_CHARS_RE.test(phone) || digits < 10 || digits > 15) {
    errors.phone = 'Enter a phone number with 10–15 digits.';
  }

  if (toExperienceMonths(input.experience_years, input.experience_extra_months) === null) {
    errors.experience_months = 'Enter whole years (0–60) and months (0–11). Use 0 if you are a fresher.';
  }

  if (input.current_job_title.trim().length > 150) errors.current_job_title = 'Must be 150 characters or fewer.';
  if (input.current_company.trim().length > 150) errors.current_company = 'Must be 150 characters or fewer.';

  const resume = input.resume;
  if (!resume) errors.resume = 'Attach your resume.';
  else if (!RESUME_EXT_RE.test(resume.name)) errors.resume = 'Resume must be a PDF, DOC or DOCX file.';
  else if (resume.size === 0) errors.resume = 'The selected file is empty.';
  else if (resume.size > RESUME_MAX_BYTES) errors.resume = 'Resume must be smaller than 2 MB.';

  if (!input.consent) errors.consent = 'Please confirm your consent to continue.';

  return errors;
}

export function buildApplicationFormData(input: ApplicationInput, utmSource: string): FormData {
  const fd = new FormData();
  fd.set('first_name', input.first_name.trim());
  fd.set('last_name', input.last_name.trim());
  fd.set('email', input.email.trim());
  fd.set('phone', input.phone.trim());
  fd.set('qualification', input.qualification.trim());
  fd.set('experience_months', String(toExperienceMonths(input.experience_years, input.experience_extra_months)));
  if (input.current_job_title.trim()) fd.set('current_job_title', input.current_job_title.trim());
  if (input.current_company.trim()) fd.set('current_company', input.current_company.trim());
  if (input.resume) fd.set('resume', input.resume);
  fd.set('consent', input.consent ? 'true' : 'false');
  fd.set('utm_source', utmSource.slice(0, 100));
  fd.set('company_fax', input.company_fax);
  return fd;
}

const STATUS_MESSAGES: Record<number, string> = {
  400: 'Please correct the highlighted fields.',
  403: 'Applications can only be submitted from the official JKKN website.',
  404: 'This position is no longer open.',
  413: 'Your resume is too large. Please upload a file under 2 MB.',
  429: 'Too many applications from your network. Please try again in an hour.',
};

const FALLBACK_ERROR = 'Something went wrong on our side. Please try again in a few minutes.';

export async function submitApplication(
  jobId: string,
  formData: FormData,
  fetchImpl: typeof fetch = (input, init) => fetch(input, init),
): Promise<ApplyResult> {
  let res: Response;
  try {
    // No Content-Type header: the browser adds the multipart boundary.
    res = await fetchImpl(`${CAREERS_API}/jobs/${encodeURIComponent(jobId)}/apply`, { method: 'POST', body: formData });
  } catch {
    return {
      ok: false,
      status: 0,
      error: 'We could not reach the application server. Check your connection and try again.',
      fields: {},
    };
  }

  let body: { reference?: unknown; error?: unknown; fields?: unknown } = {};
  try {
    body = await res.json();
  } catch {
    // Non-JSON body (e.g. gateway error page) — fall through to generic handling.
  }

  if (res.status === 201) {
    return { ok: true, reference: typeof body.reference === 'string' ? body.reference : '' };
  }

  const fields: Record<string, string> = {};
  if (body.fields && typeof body.fields === 'object') {
    for (const [key, value] of Object.entries(body.fields)) {
      if (typeof value === 'string') fields[key] = value;
    }
  }
  const apiError = typeof body.error === 'string' && body.error ? body.error : null;
  return { ok: false, status: res.status, error: STATUS_MESSAGES[res.status] ?? apiError ?? FALLBACK_ERROR, fields };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS — all five test files green.

- [ ] **Step 5: Create `components/careers/ApplyForm.tsx`**

```tsx
'use client';

import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  APPLICATION_FIELD_ORDER,
  buildApplicationFormData,
  submitApplication,
  validateApplication,
  type ApplicationField,
  type ApplicationInput,
  type FieldErrors,
} from '@/lib/careers/apply';

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY: ApplicationInput = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  qualification: '',
  experience_years: '0',
  experience_extra_months: '0',
  current_job_title: '',
  current_company: '',
  resume: null,
  consent: false,
  company_fax: '',
};

const INPUT_CLASSES =
  'w-full min-h-[44px] rounded-lg border bg-white px-3 text-[#002309] focus:outline-none focus:ring-2 focus:ring-[#7cb983]';

/** DOM id of the input to focus for a given error field. */
const fieldInputId = (field: ApplicationField) =>
  `apply-${field === 'experience_months' ? 'experience_years' : field}`;

interface FieldErrorProps {
  id: string;
  message?: string;
}

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#002309]">
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

interface TextFieldProps {
  name: 'first_name' | 'last_name' | 'email' | 'phone' | 'qualification' | 'current_job_title' | 'current_company';
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  maxLength: number;
  autoComplete?: string;
  hint?: ReactNode;
}

function TextField({ name, label, value, error, onChange, type = 'text', required, maxLength, autoComplete, hint }: TextFieldProps) {
  const id = `apply-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#002309]">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-[#002309]/70"> (optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(INPUT_CLASSES, error ? 'border-2 border-[#002309]' : 'border-[#7cb983]/50')}
      />
      {hint && !error && <p className="mt-1 text-xs text-[#002309]/70">{hint}</p>}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export default function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
  const [values, setValues] = useState<ApplicationInput>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof ApplicationInput>(key: K, value: ApplicationInput[K], errorKey: ApplicationField) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [errorKey]: undefined }));
  };

  const focusFirstError = (found: FieldErrors) => {
    const first = APPLICATION_FIELD_ORDER.find((field) => found[field]);
    if (first) requestAnimationFrame(() => document.getElementById(fieldInputId(first))?.focus());
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const found = validateApplication(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus('error');
      setMessage('Please correct the highlighted fields.');
      focusFirstError(found);
      return;
    }

    setStatus('submitting');
    setMessage('');
    const result = await submitApplication(jobId, buildApplicationFormData(values, window.location.hostname));

    if (result.ok) {
      setStatus('success');
      setReference(result.reference);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    const serverErrors = result.fields as FieldErrors;
    setErrors(serverErrors);
    setStatus('error');
    setMessage(result.error);
    if (Object.keys(serverErrors).length > 0) focusFirstError(serverErrors);
    else requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === 'success') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-[#7cb983] bg-white p-6 md:p-8 focus:outline-none"
      >
        <CheckCircle2 className="mb-3 h-10 w-10 text-[#006837]" aria-hidden="true" />
        <h3 className="mb-2 text-xl font-bold text-[#006837]">Application submitted</h3>
        <p className="text-[#002309]">
          Thank you for applying for <strong>{jobTitle}</strong>. A confirmation email has been sent to{' '}
          <strong>{values.email.trim()}</strong>, and our HR team will review your application.
        </p>
        {reference && (
          <p className="mt-4 text-[#002309]">
            Your reference number: <strong className="font-mono">{reference}</strong>
          </p>
        )}
      </div>
    );
  }

  const experienceErrorId = 'apply-experience-error';
  const resumeErrorId = 'apply-resume-error';
  const consentErrorId = 'apply-consent-error';

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 md:p-8">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {status === 'error' && message && (
          <p role="alert" className="mb-5 flex items-start gap-2 rounded-lg border-2 border-[#002309] bg-[#FBFBEE] p-3 font-semibold text-[#002309]">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            {message}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <TextField name="first_name" label="First name" value={values.first_name} error={errors.first_name}
          onChange={(v) => update('first_name', v, 'first_name')} required maxLength={100} autoComplete="given-name" />
        <TextField name="last_name" label="Last name" value={values.last_name} error={errors.last_name}
          onChange={(v) => update('last_name', v, 'last_name')} required maxLength={100} autoComplete="family-name" />
        <TextField name="email" type="email" label="Email" value={values.email} error={errors.email}
          onChange={(v) => update('email', v, 'email')} required maxLength={254} autoComplete="email" />
        <TextField name="phone" type="tel" label="Phone" value={values.phone} error={errors.phone}
          onChange={(v) => update('phone', v, 'phone')} required maxLength={20} autoComplete="tel" />
        <div className="md:col-span-2">
          <TextField name="qualification" label="Highest qualification" value={values.qualification}
            error={errors.qualification} onChange={(v) => update('qualification', v, 'qualification')}
            required maxLength={200} hint="For example: MDS Periodontics" />
        </div>

        <fieldset className="md:col-span-2" aria-describedby={errors.experience_months ? experienceErrorId : undefined}>
          <legend className="mb-1.5 text-sm font-semibold text-[#002309]">
            Total experience<span aria-hidden="true"> *</span>
          </legend>
          <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
            <div>
              <label htmlFor="apply-experience_years" className="mb-1 block text-xs text-[#002309]/80">Years</label>
              <input id="apply-experience_years" name="experience_years" type="number" inputMode="numeric" min={0} max={60}
                value={values.experience_years}
                onChange={(e) => update('experience_years', e.target.value, 'experience_months')}
                aria-invalid={errors.experience_months ? true : undefined}
                className={cn(INPUT_CLASSES, errors.experience_months ? 'border-2 border-[#002309]' : 'border-[#7cb983]/50')} />
            </div>
            <div>
              <label htmlFor="apply-experience_extra_months" className="mb-1 block text-xs text-[#002309]/80">Months</label>
              <input id="apply-experience_extra_months" name="experience_extra_months" type="number" inputMode="numeric" min={0} max={11}
                value={values.experience_extra_months}
                onChange={(e) => update('experience_extra_months', e.target.value, 'experience_months')}
                aria-invalid={errors.experience_months ? true : undefined}
                className={cn(INPUT_CLASSES, errors.experience_months ? 'border-2 border-[#002309]' : 'border-[#7cb983]/50')} />
            </div>
          </div>
          <FieldError id={experienceErrorId} message={errors.experience_months} />
        </fieldset>

        <TextField name="current_job_title" label="Current job title" value={values.current_job_title}
          error={errors.current_job_title} onChange={(v) => update('current_job_title', v, 'current_job_title')}
          maxLength={150} autoComplete="organization-title" />
        <TextField name="current_company" label="Current organisation" value={values.current_company}
          error={errors.current_company} onChange={(v) => update('current_company', v, 'current_company')}
          maxLength={150} autoComplete="organization" />

        <div className="md:col-span-2">
          <label htmlFor="apply-resume" className="mb-1.5 block text-sm font-semibold text-[#002309]">
            Resume<span aria-hidden="true"> *</span>
          </label>
          <input id="apply-resume" name="resume" type="file" required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => update('resume', e.target.files?.[0] ?? null, 'resume')}
            aria-invalid={errors.resume ? true : undefined}
            aria-describedby={errors.resume ? resumeErrorId : 'apply-resume-hint'}
            className="block w-full min-h-[44px] text-sm text-[#002309] file:mr-4 file:min-h-[44px] file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#FBFBEE] file:px-4 file:font-semibold file:text-[#006837] hover:file:bg-[#7cb983]/20" />
          {!errors.resume && <p id="apply-resume-hint" className="mt-1 text-xs text-[#002309]/70">PDF, DOC or DOCX, smaller than 2 MB.</p>}
          <FieldError id={resumeErrorId} message={errors.resume} />
        </div>

        {/* Honeypot — hidden from people and assistive tech; bots fill it. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="apply-company_fax">Company fax</label>
          <input id="apply-company_fax" name="company_fax" type="text" tabIndex={-1} autoComplete="off"
            value={values.company_fax} onChange={(e) => setValues((v) => ({ ...v, company_fax: e.target.value }))} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="apply-consent" className="flex min-h-[44px] cursor-pointer items-start gap-3 text-sm text-[#002309]">
            <input id="apply-consent" name="consent" type="checkbox" checked={values.consent}
              onChange={(e) => update('consent', e.target.checked, 'consent')}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? consentErrorId : undefined}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[#006837]" />
            <span>
              I agree that JKKN Institutions may store and use the details and resume I submit to process my
              application.<span aria-hidden="true"> *</span>
            </span>
          </label>
          <FieldError id={consentErrorId} message={errors.consent} />
        </div>
      </div>

      <button type="submit" disabled={status === 'submitting'}
        className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#7cb983] px-8 font-semibold text-white transition-colors hover:bg-[#6ba872] disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  );
}
```

- [ ] **Step 6: Mount the form in the detail page**

In `app/information-center/careers/[id]/page.tsx` add the import:

```tsx
import ApplyForm from '@/components/careers/ApplyForm';
```

and replace `{/* ApplyForm is added in Task 5 */}` with:

```tsx
<ApplyForm jobId={job.id} jobTitle={job.title} />
```

- [ ] **Step 7: Allow the MyJKKN host in the CSP**

`proxy.ts:10` (the CSP actually served in production) — in the `connect-src` directive, change:

```
connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://www.facebook.com https://*.facebook.com;
```

to:

```
connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://www.facebook.com https://*.facebook.com https://www.jkkn.ai;
```

`next.config.ts:282` (stale duplicate, keep in sync) — change `connect-src 'self' https://www.google-analytics.com https://*.supabase.co;` to `connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://www.jkkn.ai;`.

- [ ] **Step 8: Type-check, lint, test**

Run: `npm test && npx tsc --noEmit && npm run lint`
Expected: all PASS / exit 0.

- [ ] **Step 9: Verify the form locally (no real application sent)**

With `npm run dev` running, open a dental job detail page in Chrome at 375 px and 1280 px:
1. Click **Submit application** with the form empty → alert "Please correct the highlighted fields.", focus moves to First name, each invalid field shows its message.
2. Choose a `.png` file → "Resume must be a PDF, DOC or DOCX file."; a > 2 MB PDF → "Resume must be smaller than 2 MB."
3. Tab through the form → the honeypot is never focused; every control is reachable; the submit button is ≥ 44 px tall.
4. DevTools → Network: fill valid data and submit → the request goes to `https://www.jkkn.ai/api/public/careers/jobs/<id>/apply` as `multipart/form-data`. On localhost it fails CORS (expected — MyJKKN does not allow localhost yet) and the form shows "We could not reach the application server…" instead of crashing.
5. Console shows **no** `Content-Security-Policy` violation for `www.jkkn.ai`.

- [ ] **Step 10: Commit**

```bash
git add lib/careers/apply.ts lib/careers/apply.test.ts components/careers/ApplyForm.tsx "app/information-center/careers/[id]/page.tsx" proxy.ts next.config.ts
git commit -m "feat(careers): apply to dental job openings directly via MyJKKN from the browser"
```

---

### Task 6: Navigation, sitemap, docs, and end-to-end verification

**Files:**
- Modify: `data/siteData.ts:299`, `lib/navigationMenuLink.ts:431`, `app/sitemap.ts`, `CLAUDE.md`

**Interfaces:**
- Consumes: `getDentalJobs` (Task 3), `CAREERS_PATH` (Task 1)

- [ ] **Step 1: Header link → internal page (`data/siteData.ts:299`)**

```ts
      { label: "CAREERS", href: "/information-center/careers/" },
```

- [ ] **Step 2: Bottom-nav link → internal page with active state (`lib/navigationMenuLink.ts:431`)**

```ts
            { href: '/information-center/careers/', label: 'Careers', icon: Briefcase, active: pathname.startsWith('/information-center/careers') },
```

- [ ] **Step 3: Add job URLs to `app/sitemap.ts`**

Add the import next to the existing ones:

```ts
import { getDentalJobs } from '@/lib/careers/api'
```

Before the final `return [`, add:

```ts
  // Open dental job postings from MyJKKN (empty if the API is unreachable)
  const { jobs } = await getDentalJobs()
  const careerUrls: MetadataRoute.Sitemap = jobs.map(job => ({
    url: `${baseUrl}/information-center/careers/${job.id}/`,
    lastModified: job.posted_at ? new Date(job.posted_at) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
```

and add `...careerUrls,` to the returned array after `...eventUrls,`. Change the existing careers listing entry's `changeFrequency: 'monthly'` to `'daily'`.

- [ ] **Step 4: Document in `CLAUDE.md`**

In the **ENVIRONMENT VARIABLES** table add:

```markdown
| `JKKN_DENTAL_INSTITUTION_ID` | MyJKKN institution id — scopes faculty sync AND careers to Dental (careers shows zero jobs if unset) | `lib/jkkn-api.ts`, `lib/careers/api.ts` |
| `NEXT_PUBLIC_MYJKKN_URL` | Optional MyJKKN host override (default `https://www.jkkn.ai`) — also update `connect-src` in `proxy.ts` if changed | `lib/careers/config.ts` |
```

In **KEY FILE LOCATIONS** add:

```markdown
| Careers (MyJKKN jobs) | `lib/careers/`, `app/information-center/careers/` | Dental-only, ISR 300s; apply posts from the browser (see `docs/public-careers-api.md`) |
```

Replace the **TESTING** section's first line with: `> **Vitest** covers pure helpers in \`lib/careers/\` — run \`npm test\`. No other automated tests.`

- [ ] **Step 5: Full verification**

Run: `npm test && npm run lint && npm run build`
Expected: tests PASS; lint clean; build succeeds and lists `/information-center/careers` as ISR (revalidate 5m) and `/information-center/careers/[id]` with pre-rendered ids.

Then `npm start` and check:

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c '/information-center/careers/[0-9a-f-]\{36\}/'
curl -s http://localhost:3000/ | grep -c 'jobs.cvviz.com'
```

Expected: count equals the number of open dental jobs; `0` cvviz links on the home page. Check desktop Header → OTHERS → CAREERS and mobile bottom nav → Others → Careers both open the internal page (Careers tab highlighted on mobile).

- [ ] **Step 6: End-to-end apply test (coordinated — no real HR noise)**

Ask the MyJKKN team to set `PUBLIC_CAREERS_EXTRA_ORIGINS=http://localhost:3000` on MyJKKN. Then, locally only, set `JKKN_DENTAL_INSTITUTION_ID=183847c5-be1b-4903-86eb-bbc20c213071` (JKKN Testing Institution) in `.env.local`, restart dev, open its single job and submit a real application with a small PDF. Expected: success panel with a reference like `JOB-…`; confirmation email arrives; submitting again with the same email shows the **same** reference. **Restore** `JKKN_DENTAL_INSTITUTION_ID=e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5` afterwards.

If MyJKKN cannot allow localhost: after deploying, ask HR for approval to submit one clearly-labelled test application to a dental job on https://dental.jkkn.ac.in, confirm the reference appears, and have HR delete it in MyJKKN. (The Testing Institution job cannot be used on production — the dental filter hides it.)

- [ ] **Step 7: Commit**

```bash
git add data/siteData.ts lib/navigationMenuLink.ts app/sitemap.ts CLAUDE.md
git commit -m "feat(careers): link nav to native careers page and add job URLs to sitemap"
```

---

## Deployment notes

- `JKKN_DENTAL_INSTITUTION_ID` must be set on the DigitalOcean server (it already should be — the faculty sync needs it). If it is missing, the careers page safely shows no jobs.
- No new required env vars. `NEXT_PUBLIC_MYJKKN_URL` is optional.
- The apply call only works from `https://dental.jkkn.ac.in` (MyJKKN CORS allowlist).

## Known data gaps (MyJKKN side, not code)

- `posted_at` is null on every dental job → no `JobPosting` rich results in Google Jobs until HR's postings carry a posted date (code emits the schema automatically once it does).
- Job titles are internal codes (e.g. "PROF - DCH - PERIODONTICS", "SR. LECTURER - PHYSIOLOGY - DC"); they display verbatim. Clearer titles in MyJKKN would improve both UX and search.
- `qualifications`, `skills`, `salary` are empty/hidden; the page simply omits those rows.
