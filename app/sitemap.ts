import { execSync } from 'node:child_process'
import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'
import { siteConfig } from '@/lib/site-config'

// Build a single map of file -> last-commit-date by running `git log` ONCE
// (instead of per-file). This makes lastmod values accurate per-page rather
// than uniform "build time" — Google rewards stable, truthful lastmod signals.
function buildGitLastModMap(): Map<string, Date> {
  const map = new Map<string, Date>()
  try {
    const output = execSync(
      'git log --pretty=format:%cI --name-only -- app/',
      { encoding: 'utf-8', maxBuffer: 32 * 1024 * 1024 },
    )
    let currentDate: Date | null = null
    for (const line of output.split('\n')) {
      const trimmed = line.trim()
      if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
        currentDate = new Date(trimmed)
      } else if (trimmed && currentDate) {
        // Most recent commit wins (git log is newest-first; only set if unset).
        const normalized = trimmed.replace(/\\/g, '/')
        if (!map.has(normalized)) map.set(normalized, currentDate)
      }
    }
  } catch (err) {
    // git unavailable (e.g. a shallow CI clone). Every URL then falls back to
    // build time, so the whole sitemap ships one identical lastmod — a signal
    // Google learns to distrust. Fail loudly so a broken build config is
    // visible in the deploy log instead of silently degrading the sitemap.
    console.warn('[sitemap] git history unavailable, lastmod falling back to build time:', err)
  }
  if (map.size === 0) {
    console.warn('[sitemap] git lastmod map is EMPTY — check the build does a full clone (fetch-depth: 0)')
  }
  return map
}

// Resolve a sitemap URL (relative path, e.g. "/about/") to a Date from git
// history. Falls back to `fallback` when the heuristic can't locate a file.
function resolveLastMod(
  fileMap: Map<string, Date>,
  routePath: string,
  fallback: Date,
): Date {
  const slug = routePath.replace(/^\/+|\/+$/g, '')
  const candidate = slug ? `app/${slug}/page.tsx` : 'app/page.tsx'
  return fileMap.get(candidate) ?? fallback
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dental.jkkn.ac.in'
  const now = new Date()
  const gitLastMod = buildGitLastModMap()

  // Fetch dynamic blog posts from Supabase
  let blogUrls: MetadataRoute.Sitemap = []
  let campusBlogUrls: MetadataRoute.Sitemap = []
  let facultyUrls: MetadataRoute.Sitemap = []
  let eventUrls: MetadataRoute.Sitemap = []
  try {
    const supabase = await createClient()
    const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID

    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('is_published', true)
    if (posts) {
      blogUrls = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}/`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    }

    // Campus blogs live in a separate `blogs` table (rendered at /blog/campus/[slug]/)
    if (collegeId) {
      const { data: campusPosts } = await supabase
        .from('blogs')
        .select('slug, updated_at')
        .eq('college_id', collegeId)
        .eq('is_published', true)
      if (campusPosts) {
        campusBlogUrls = campusPosts.map(post => ({
          url: `${baseUrl}/blog/campus/${post.slug}/`,
          lastModified: new Date(post.updated_at),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      }
    }

    // Faculty profile pages — include all active faculty, not just MyJKKN-synced.
    if (collegeId) {
      const { data: faculty } = await supabase
        .from('faculty')
        .select('name, slug, updated_at')
        .eq('college_id', collegeId)
        .eq('is_active', true)
      if (faculty) {
        const VALID_SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
        const toSlug = (n: string) => n.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
        facultyUrls = faculty.map(f => ({
          url: `${baseUrl}/faculty/${f.slug && VALID_SLUG_RE.test(f.slug) ? f.slug : toSlug(f.name)}/`,
          lastModified: f.updated_at ? new Date(f.updated_at) : now,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      }
    }

    // Events query must mirror /events/[slug]/page.tsx filters (is_published + college_id)
    // otherwise sitemap surfaces unpublished or cross-college slugs that 404 at render time.
    const { data: events } = await supabase
      .from('events')
      .select('slug, updated_at')
      .eq('college_id', siteConfig.id)
      .eq('is_published', true)
    if (events) {
      eventUrls = events.map(event => ({
        url: `${baseUrl}/events/${event.slug}/`,
        lastModified: new Date(event.updated_at),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    }
  } catch {
    // Supabase unavailable at build time — skip dynamic URLs
  }

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Core pages
    { url: `${baseUrl}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/gallery/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/ai-dental-campus/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fees-structure/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/placements/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/scholarships/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faculty/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/testimonials/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Academics — BDS & MDS (highest SEO value)
    { url: `${baseUrl}/academics/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/bds/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // MDS Specializations (5)
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/periodontics/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/oral-medicine/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Academics — other
    { url: `${baseUrl}/academics/learning-outcomes/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/mentor-mentee-program/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/academic-attributes/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/student-centric-teaching-methods/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    // NOTE: /academics/curriculum-feedback/ is deliberately NOT listed — the
    // page calls redirect() to an external JotForm, so it never returns 200.
    // Same rule as /information-center/careers/ above.
    { url: `${baseUrl}/academics/courses/value-added-courses/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses/implant-program-2025/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/cross-cutting-issues/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program/neet-qualifiers/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/fdp-attended/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/webinar-conferences-attended/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Academics — Syllabus
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/bds-syllabus/`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus/`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus/`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus/`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus/`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus/`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.5 },

    // Academic Calendars
    { url: `${baseUrl}/academic-calendar-2023-2024-2024-2025/`, lastModified: '2024-06-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academic-calendar-2022-2023/`, lastModified: '2023-06-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2021-2022/`, lastModified: '2022-06-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2020-2021/`, lastModified: '2021-06-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2019-2020/`, lastModified: '2020-06-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2018-2019/`, lastModified: '2019-06-01', changeFrequency: 'yearly', priority: 0.3 },

    // Admission (canonical /admissions/* — singular /admission/* 301-redirects)
    { url: `${baseUrl}/admissions/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/admissions/bds/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/admissions/mds/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/admission-process/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/admissions/admission-criteria/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/admissions/prospectus/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admissions/scholarship-policy-for-dental-college/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admissions/fee-refund-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/admissions/fee-refund-policy/ugc-fee-refund-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admissions/equitable-opportunity-for-sedg-group/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admissions/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admissions/equitable-opportunity-for-sedg-group/ugc-guidelines/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    // /bds/ and /mds/ removed — both 301 to /academics/details-of-academic-programs/* (already listed above)

    // Accreditation
    { url: `${baseUrl}/accreditation/naac/`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/iqac/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // NIRF 2026 (latest)
    { url: `${baseUrl}/accreditation/nirf/nirf-2026/dental/`, lastModified: '2026-09-01', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2026/overall/`, lastModified: '2026-09-01', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2026/innovation/`, lastModified: '2026-09-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2026/sdg-institution/`, lastModified: '2026-09-01', changeFrequency: 'yearly', priority: 0.6 },
    // NIRF 2025
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/dental/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/overall/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/innovation/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/sdg-institution/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.5 },
    // NIRF 2024
    { url: `${baseUrl}/accreditation/nirf/nirf-2024/dental/`, lastModified: '2024-09-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/accreditation-ranking-status/naac/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // About
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/vision-and-mission/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/our-institutions/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-management/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-trust/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-bds/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-mds/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-bds/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-mds/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/institutional-development-plan/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/annual-report/`, lastModified: '2025-04-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/act-statutes/`, lastModified: '2025-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/annual-account-statement/`, lastModified: '2025-04-01', changeFrequency: 'yearly', priority: 0.4 },

    // Alumni
    { url: `${baseUrl}/alumni/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/alumni/alumni-association-activities/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/alumni/alumni-registration-certificate/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // Research
    { url: `${baseUrl}/research/publication/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/collaboration/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/incubation-center/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/start-up/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-development-rd-cell/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    // NOTE: /research/research-and-dissertation/ is deliberately NOT listed —
    // app/research/research-and-dissertation/page.tsx calls notFound()
    // unconditionally, so the URL always returns 404. Re-add this entry once
    // that page has real content.
    { url: `${baseUrl}/research/research-proposal-and-consent-forms/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutional-ethical-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutions-innovation-council-iic/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/research/mou-memorandum-of-understanding/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // Facilities
    { url: `${baseUrl}/facilities/labs/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/library/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/hostel/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel/boys-hostel/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel/girls-hostel/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/transport/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/auditorium/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/food-court/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/sports-club/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/health-facilities/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/digital-class-room/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/wi-fi-campus/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/ambulance-services/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/barrier-free-environment/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/seminar-hall/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/bank-and-post-office/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Administration
    { url: `${baseUrl}/principals-message/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/academic-leadership/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/academic-council/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/governing-body/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/finance-officer/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/internal-complaints-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Committees
    { url: `${baseUrl}/committee/anti-ragging-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-grievance-redressal-committee-sgrc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-welfare-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/placement-cell-cdc/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/committee/ncc/nss/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/committee/finance-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/mentoring-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/examination-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/hostel-advisory-and-welfare-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/sedg-cell/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/international-student-cell-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-education-and-extra-curricular-activities-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-infrastructure-and-purchase-maintenance-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/disciplinary-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/patient-welfare-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/student-council/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/internal-complaints-committee-icc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/dental-education-department/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/library-and-learning-resources-committee/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Campaign landing pages
    { url: `${baseUrl}/dental-surgery-assistant-course/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // City SEO pages
    { url: `${baseUrl}/coimbatore/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/erode/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/salem/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/namakkal/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tiruppur/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/trichy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/madurai/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/chennai/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/hosur/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/karur/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kerala/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Facilities — additional
    { url: `${baseUrl}/facilities/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/accessibility-and-inclusion-at-jkkndch/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/privacy-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // Others
    { url: `${baseUrl}/others/patient-safety-manual/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/blog/bds-course-complete-guide-2026/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/mds-orthodontics-complete-guide-2026/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/mds-prosthodontics-complete-guide-2026/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/mds-periodontics-complete-guide-2026/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/mds-conservative-dentistry-endodontics-complete-guide-2026/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/mds-oral-medicine-radiology-complete-guide-2026/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.8 },

    // PDFs (Google indexes and ranks these — keep canonical-priority entries here)
    { url: `${baseUrl}/pdf/brochure.pdf`, lastModified: '2026-03-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/pdf/UGC-Fee-Refund-Policy.pdf`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/pdf/Equitable-Opportunity-for-SEDG.pdf`, lastModified: '2025-06-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/pdf/Add-on-Course-Implant-program-2025.pdf`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.4 },

    // Information & Mandatory
    // NOTE: /information-center/careers/ is deliberately NOT listed — it
    // 307-redirects off-site to jobs.cvviz.com, and a sitemap must contain
    // only self-hosted, indexable 200 URLs.
    { url: `${baseUrl}/information-center/right-to-information-rti/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/guidelines-on-public-disclosure-by-heis/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/letter-of-undertaking/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]

  // Replace placeholder `now` lastModified values with the real per-file
  // git commit date (where derivable from the URL). Hardcoded ISO strings
  // (NIRF dates, syllabus revisions, etc.) are preserved unchanged.
  const staticPagesWithGitDates: MetadataRoute.Sitemap = staticPages.map(entry => {
    if (entry.lastModified instanceof Date && entry.lastModified.getTime() === now.getTime()) {
      const path = entry.url.replace(baseUrl, '')
      return { ...entry, lastModified: resolveLastMod(gitLastMod, path, now) }
    }
    return entry
  })

  return [
    ...staticPagesWithGitDates,
    ...blogUrls,
    ...campusBlogUrls,
    ...facultyUrls,
    ...eventUrls,
  ]
}
