import { resolve } from "path";
import type { NextConfig } from "next";

type RedirectRule = { source: string; destination: string; permanent: boolean };

/**
 * `trailingSlash: true` means any redirect destination WITHOUT a trailing
 * slash triggers a SECOND 308 normalisation redirect, i.e. 308 -> 308 -> 200.
 * Normalising destinations here collapses every rule to a single hop.
 *
 * Deliberately skipped:
 *   - external URLs (http…)      — not ours to normalise
 *   - destinations already ending in "/"
 *   - wildcard destinations (":") — appending "/" to `/admissions/:path*`
 *     can produce `/admissions//` when :path* matches zero segments
 */
const oneHop = (r: RedirectRule): RedirectRule => ({
  ...r,
  destination:
    r.destination.startsWith("http") ||
    r.destination.endsWith("/") ||
    r.destination.includes(":")
      ? r.destination
      : `${r.destination}/`,
});

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve("."),
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    qualities: [75, 80, 85],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  async redirects() {
    const rules: RedirectRule[] = [
      // Old WordPress URLs → New Next.js URLs
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/principal-message/', destination: '/our-management', permanent: true },
      { source: '/principal-message', destination: '/our-management', permanent: true },

      // Trailing slash redirects (WordPress used trailing slashes)
      { source: '/bds/', destination: '/academics/details-of-academic-programs/bds', permanent: true },
      { source: '/mds/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      // Removed: /contact/ → /contact redirect (caused infinite loop with trailingSlash: true)
      // Removed 2026-07-21: /iqac/ → /iqac and /alumni/ → /alumni had the SAME
      // defect and were live infinite redirect loops in production (verified by
      // curl: "Maximum (12) redirects followed"). Under trailingSlash: true the
      // destination is normalised straight back to the source. Both pages exist
      // (app/iqac/page.tsx, app/alumni/page.tsx) so no redirect is needed at all.

      // Admission path rename: /admission → /admissions
      { source: '/admission', destination: '/admissions', permanent: true },
      // Trailing slash written by hand: oneHop skips wildcard destinations, and
      // the bare '/admission' rule above already covers the zero-segment case
      // (so :path* never matches empty here and cannot produce '//').
      { source: '/admission/:path*', destination: '/admissions/:path*/', permanent: true },

      // Misspelled URLs & Common Shortcuts
      { source: '/information-center/careers', destination: 'https://jobs.cvviz.com/jkkn_institutions', permanent: false },
      { source: '/information-center/careers/', destination: 'https://jobs.cvviz.com/jkkn_institutions', permanent: false },
      { source: '/carrer', destination: 'https://jobs.cvviz.com/jkkn_institutions', permanent: true },
      { source: '/carrer/', destination: 'https://jobs.cvviz.com/jkkn_institutions', permanent: true },
      { source: '/naac', destination: '/accreditation/naac', permanent: true },
      { source: '/naac/', destination: '/accreditation/naac', permanent: true },
      { source: '/nacc', destination: '/accreditation/naac', permanent: true },
      { source: '/nacc/', destination: '/accreditation/naac', permanent: true },

      // Campus typo redirect
      { source: '/camu', destination: '/facilities/wi-fi-campus', permanent: true },
      { source: '/camu/', destination: '/facilities/wi-fi-campus', permanent: true },

      // Removed landing page → redirect to homepage
      { source: '/best-dental-college-tamil-nadu', destination: '/', permanent: true },
      { source: '/best-dental-college-tamil-nadu/', destination: '/', permanent: true },

      // Canonical alignment: /fee-structure/ (singular) -> /fees-structure/ (plural)
      // Google indexes the plural form (rank #2 with 26 clicks). Force consolidation.
      // Rewrite at line ~375 makes /fees-structure -> /fee-structure internally for rendering.
      { source: '/fee-structure/', destination: '/fees-structure/', permanent: true },
      { source: '/fee-structure', destination: '/fees-structure', permanent: true },

      // Faculty profile pages (old WordPress dr-* slugs) → faculty listing
      { source: '/dr-:slug/', destination: '/faculty', permanent: true },
      { source: '/dr-:slug', destination: '/faculty', permanent: true },

      // About section old slugs
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/our-vision-and-mission/', destination: '/about/vision-and-mission', permanent: true },
      { source: '/our-vision-and-mission', destination: '/about/vision-and-mission', permanent: true },
      { source: '/awards-recognition/', destination: '/about', permanent: true },
      { source: '/awards-recognition', destination: '/about', permanent: true },

      // Admission old slugs
      { source: '/admissions/scholarship/', destination: '/admissions/scholarship-policy-for-dental-college', permanent: true },
      { source: '/admissions/scholarship', destination: '/admissions/scholarship-policy-for-dental-college', permanent: true },
      { source: '/admission-criteria-bds-mds/', destination: '/admissions/admission-criteria', permanent: true },
      { source: '/admission-criteria-bds-mds', destination: '/admissions/admission-criteria', permanent: true },
      { source: '/scholarship-policy-for-dental-collegellege/', destination: '/admissions/scholarship-policy-for-dental-college', permanent: true },
      { source: '/admission-form/', destination: '/admissions', permanent: true },
      { source: '/admission-form', destination: '/admissions', permanent: true },

      // Academic old slugs
      { source: '/bachelor-of-dental-surgery/', destination: '/academics/details-of-academic-programs/bds', permanent: true },
      { source: '/bachelor-of-dental-surgery', destination: '/academics/details-of-academic-programs/bds', permanent: true },
      { source: '/master-of-dental-surgery/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/master-of-dental-surgery', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/periodontics-mds/', destination: '/academics/details-of-academic-programs/mds/periodontics', permanent: true },
      { source: '/periodontics-mds', destination: '/academics/details-of-academic-programs/mds/periodontics', permanent: true },
      { source: '/prosthodontics-crown-and-bridge-mds/', destination: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge', permanent: true },
      { source: '/prosthodontics-crown-and-bridge-mds', destination: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge', permanent: true },
      { source: '/oral-medicine-diagnosis-and-radiology/', destination: '/academics/details-of-academic-programs/mds/oral-medicine', permanent: true },
      { source: '/oral-medicine-diagnosis-and-radiology', destination: '/academics/details-of-academic-programs/mds/oral-medicine', permanent: true },
      { source: '/oral-and-maxillofacial-surgery/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/oral-and-maxillofacial-surgery', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/public-health-dentistry/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/public-health-dentistry', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/oral-pathology-and-microbiology/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/department-of-orthodontics-and-dentofacial-orthopaedics/', destination: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics', permanent: true },
      { source: '/department-of-orthodontics-and-dentofacial-orthopaedics', destination: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics', permanent: true },
      { source: '/department-of-pediatric-and-preventive-dentistry/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/department-of-pediatric-and-preventive-dentistry', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/conservative-dentistry-and-endodontics-3/', destination: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics', permanent: true },
      { source: '/academic-calendar/', destination: '/academic-calendar-2023-2024-2024-2025', permanent: true },
      { source: '/academic-calendar-2/', destination: '/academic-calendar-2023-2024-2024-2025', permanent: true },
      { source: '/teaching-learning-and-evaluation/', destination: '/academics', permanent: true },
      { source: '/teaching-learning-and-evaluation', destination: '/academics', permanent: true },
      { source: '/curricular-aspects/', destination: '/academics', permanent: true },
      { source: '/curricular-aspects-2-2/', destination: '/academics', permanent: true },
      { source: '/curricular-aspects-2-2', destination: '/academics', permanent: true },
      { source: '/faculty-development-program/', destination: '/academics/faculty-achievements/fdp-attended', permanent: true },
      { source: '/faculty-development-program', destination: '/academics/faculty-achievements/fdp-attended', permanent: true },
      { source: '/guidance-for-competitive-examination-and-career-counselling/', destination: '/information-center/careers', permanent: true },
      { source: '/dental-nanotechnology-course/', destination: '/academics/courses/add-on-courses', permanent: true },
      { source: '/e-content-delivery/', destination: '/academics', permanent: true },
      { source: '/tle/', destination: '/academics', permanent: true },
      { source: '/tle-2/', destination: '/academics', permanent: true },
      { source: '/tle', destination: '/academics', permanent: true },

      // Administration old slugs
      { source: '/governance-leadership-and-management/', destination: '/our-management', permanent: true },
      { source: '/governance-leadership-and-management', destination: '/our-management', permanent: true },
      // Administration section flattened to top-level URLs (2026-06-22) — 301 the old nested paths.
      { source: '/administration', destination: '/our-management', permanent: true },
      { source: '/administration/', destination: '/our-management', permanent: true },
      { source: '/administration/principals-message', destination: '/principals-message', permanent: true },
      { source: '/administration/principals-message/', destination: '/principals-message', permanent: true },
      { source: '/administration/finance-officer', destination: '/finance-officer', permanent: true },
      { source: '/administration/finance-officer/', destination: '/finance-officer', permanent: true },
      { source: '/administration/governing-body', destination: '/governing-body', permanent: true },
      { source: '/administration/governing-body/', destination: '/governing-body', permanent: true },
      { source: '/administration/academic-council', destination: '/academic-council', permanent: true },
      { source: '/administration/academic-council/', destination: '/academic-council', permanent: true },
      { source: '/administration/academic-leadership', destination: '/academic-leadership', permanent: true },
      { source: '/administration/academic-leadership/', destination: '/academic-leadership', permanent: true },
      { source: '/administration/internal-complaints-committee', destination: '/internal-complaints-committee', permanent: true },
      { source: '/administration/internal-complaints-committee/', destination: '/internal-complaints-committee', permanent: true },
      { source: '/administration/our-trust', destination: '/our-trust', permanent: true },
      { source: '/administration/our-trust/', destination: '/our-trust', permanent: true },
      { source: '/administration/our-management', destination: '/our-management', permanent: true },
      { source: '/administration/our-management/', destination: '/our-management', permanent: true },
      // Misspelled top-level alias (was a rewrite) -> correct top-level page.
      { source: '/internal-compliants-committee', destination: '/internal-complaints-committee', permanent: true },
      { source: '/internal-compliants-committee/', destination: '/internal-complaints-committee', permanent: true },
      { source: '/infrastructure-and-learning-resources/', destination: '/facilities', permanent: true },
      { source: '/infrastructure-and-learning-resources', destination: '/facilities', permanent: true },

      // Research old slugs
      { source: '/research-innovations-and-extension/', destination: '/research/research-development-rd-cell', permanent: true },
      { source: '/research-innovations-and-extension', destination: '/research/research-development-rd-cell', permanent: true },
      { source: '/academic-research/', destination: '/research/research-and-dissertation', permanent: true },
      { source: '/academic-research', destination: '/research/research-and-dissertation', permanent: true },
      { source: '/research-and-dissertation/', destination: '/research/research-and-dissertation', permanent: true },
      { source: '/mou-2/', destination: '/research/mou-memorandum-of-understanding', permanent: true },
      { source: '/mou-2', destination: '/research/mou-memorandum-of-understanding', permanent: true },
      { source: '/institutional-ethical-committee-2/', destination: '/research/institutional-ethical-committee', permanent: true },
      { source: '/extension-outreach-activities-2/', destination: '/research/research-development-rd-cell', permanent: true },
      { source: '/rie/', destination: '/research/research-development-rd-cell', permanent: true },
      { source: '/rie', destination: '/research/research-development-rd-cell', permanent: true },
      { source: '/ivbp/', destination: '/research/institutions-innovation-council-iic', permanent: true },
      { source: '/ivbp-2/', destination: '/research/institutions-innovation-council-iic', permanent: true },
      { source: '/ivbp-2', destination: '/research/institutions-innovation-council-iic', permanent: true },

      // Committee old slugs
      { source: '/grievance-redressal-committee/', destination: '/committee/student-grievance-redressal-committee-sgrc', permanent: true },
      { source: '/grievance-redressal-committee', destination: '/committee/student-grievance-redressal-committee-sgrc', permanent: true },
      // /committee has no page.tsx — these used to 301 straight into a 404.
      { source: '/parent-teacher-association/', destination: '/committee/student-welfare-committee/', permanent: true },
      { source: '/parent-teacher-association', destination: '/committee/student-welfare-committee/', permanent: true },
      { source: '/women-empowerment-cell-sexual-harassment-committee/', destination: '/committee/internal-complaints-committee-icc', permanent: true },
      { source: '/women-empowerment-cell-sexual-harassment-committee', destination: '/committee/internal-complaints-committee-icc', permanent: true },
      { source: '/dental-education-committee/', destination: '/committee/dental-education-department', permanent: true },
      { source: '/dental-education-committee-2/', destination: '/committee/dental-education-department', permanent: true },
      { source: '/hostel-advisory-welfare-committee-2/', destination: '/committee/hostel-advisory-and-welfare-committee', permanent: true },
      { source: '/student-council-2/', destination: '/committee/student-council', permanent: true },
      { source: '/nss/', destination: '/committee/ncc/nss', permanent: true },
      { source: '/nss', destination: '/committee/ncc/nss', permanent: true },
      { source: '/institutional-finance-committee/', destination: '/committee/finance-committee', permanent: true },
      { source: '/institutional-finance-committee', destination: '/committee/finance-committee', permanent: true },
      { source: '/physical-infrastructure-and-purchase-maintenance-committee-2/', destination: '/committee/physical-infrastructure-and-purchase-maintenance-committee', permanent: true },
      { source: '/disciplinary-committee-2', destination: '/committee/disciplinary-committee', permanent: true },
      // /committee has no page.tsx — these used to 301 straight into a 404.
      { source: '/cac/', destination: '/academic-council/', permanent: true },
      { source: '/cac', destination: '/academic-council/', permanent: true },
      { source: '/anti-ragging-seminar-program/', destination: '/committee/anti-ragging-committee', permanent: true },

      // Facilities old slugs
      { source: '/hostel/', destination: '/facilities/hostel', permanent: true },
      { source: '/wifi/', destination: '/facilities/wi-fi-campus', permanent: true },
      { source: '/wifi', destination: '/facilities/wi-fi-campus', permanent: true },
      { source: '/class-room/', destination: '/facilities/digital-class-room', permanent: true },
      { source: '/class-room', destination: '/facilities/digital-class-room', permanent: true },
      { source: '/emergency-care/', destination: '/facilities/health-facilities', permanent: true },
      { source: '/emergency-care', destination: '/facilities/health-facilities', permanent: true },
      { source: '/d-sai-sadan/', destination: '/facilities/hostel', permanent: true },
      { source: '/d-sai-sadan', destination: '/facilities/hostel', permanent: true },
      { source: '/microsoft-360/', destination: '/facilities', permanent: true },
      { source: '/microsoft-360', destination: '/facilities', permanent: true },

      // IQAC, alumni, placement old slugs
      { source: '/iqac-feedback/', destination: '/iqac', permanent: true },
      { source: '/iqac-feedback', destination: '/iqac', permanent: true },
      { source: '/alumni-association-committee/', destination: '/alumni/alumni-association-activities', permanent: true },
      { source: '/alumni-association-committee', destination: '/alumni/alumni-association-activities', permanent: true },
      { source: '/placement-day-celebration-2025/', destination: '/placements', permanent: true },
      { source: '/placement-day-celebration-2025', destination: '/placements', permanent: true },

      // Mandatory disclosures old slug
      { source: '/ugc-public-disclosure-compliance/', destination: '/mandatory-disclosures/guidelines-on-public-disclosure-by-heis', permanent: true },

      // Gallery old slugs (wildcard)
      { source: '/gallery-:slug/', destination: '/gallery', permanent: true },
      { source: '/gallery-:slug', destination: '/gallery', permanent: true },

      // WordPress legacy patterns (wildcard) → homepage
      // NOTE: /category/, /tag/, /author/ are handled in middleware.ts instead —
      // config redirects run BEFORE middleware, and spam taxonomies like
      // /category/omegle-cc/ must reach the middleware to get a 410 Gone.
      { source: '/web-stories/:path*', destination: '/', permanent: true },
      { source: '/index.php/:path*', destination: '/', permanent: true },

      // WP-era PDFs that STILL earn Google clicks (46 clicks, GSC 2026-04-21
      // to 2026-07-19). The wildcard below would send them to the homepage,
      // which Google treats as an irrelevant redirect / soft 404. These four
      // MUST stay above it — first match wins.
      { source: '/wp-content/uploads/2024/04/BDS-Enzymes.pdf', destination: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus/', permanent: true },
      { source: '/wp-content/uploads/2025/03/syllabus-bds-course-1.pdf', destination: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus/', permanent: true },
      { source: '/wp-content/uploads/2025/03/ACADEMIC-SCHEDULE-2025-2026.pdf', destination: '/academic-calendar-2023-2024-2024-2025/', permanent: true },
      { source: '/wp-content/uploads/2025/03/mds-regulation-15052018.pdf', destination: '/academics/details-of-academic-programs/mds/', permanent: true },

      { source: '/wp-content/:path*', destination: '/', permanent: true },

      // Allied health / B.Sc programs (not this college) → homepage
      { source: '/b-sc-:slug/', destination: '/', permanent: true },
      { source: '/b-sc-:slug', destination: '/', permanent: true },
      { source: '/allied-health-sciences/', destination: '/', permanent: true },
      { source: '/allied-health-sciences', destination: '/', permanent: true },

      // Misc deleted/junk pages → homepage
      { source: '/green-dentistry/', destination: '/about', permanent: true },
      { source: '/green-dentistry', destination: '/about', permanent: true },
      { source: '/clm-2/', destination: '/', permanent: true },
      { source: '/sample/', destination: '/', permanent: true },
      { source: '/resume/', destination: '/', permanent: true },
      { source: '/flowcharts', destination: '/', permanent: true },
      { source: '/new/', destination: '/', permanent: true },
      { source: '/new-2/', destination: '/', permanent: true },
      { source: '/new-3/', destination: '/', permanent: true },
      { source: '/new-4/', destination: '/', permanent: true },
      { source: '/legal/:path*', destination: '/', permanent: true },
      { source: '/digital-campus-2', destination: '/', permanent: true },

      // URL cleanup (2026-05-21): remove & from path; fix "compliants" -> "complaints"; fix "currucular" -> "curricular"
      // Old & URLs -> new -and- URLs (consolidate canonical)
      { source: '/committee/hostel-advisory-&-welfare-committee/', destination: '/committee/hostel-advisory-and-welfare-committee', permanent: true },
      { source: '/committee/hostel-advisory-&-welfare-committee', destination: '/committee/hostel-advisory-and-welfare-committee', permanent: true },
      { source: '/committee/physical-education-&-extra-currucular-activities-committee/', destination: '/committee/physical-education-and-extra-curricular-activities-committee', permanent: true },
      { source: '/committee/physical-education-&-extra-currucular-activities-committee', destination: '/committee/physical-education-and-extra-curricular-activities-committee', permanent: true },
      { source: '/facilities/bank-&-post-office/', destination: '/facilities/bank-and-post-office', permanent: true },
      { source: '/facilities/bank-&-post-office', destination: '/facilities/bank-and-post-office', permanent: true },
      { source: '/facilities/accessibility-&-inclusion-at-jkkndch/', destination: '/facilities/accessibility-and-inclusion-at-jkkndch', permanent: true },
      { source: '/facilities/accessibility-&-inclusion-at-jkkndch', destination: '/facilities/accessibility-and-inclusion-at-jkkndch', permanent: true },
      // Misspellings: compliants -> complaints
      { source: '/committee/internal-compliants-committee-icc/', destination: '/committee/internal-complaints-committee-icc', permanent: true },
      { source: '/committee/internal-compliants-committee-icc', destination: '/committee/internal-complaints-committee-icc', permanent: true },
      { source: '/administration/internal-compliants-committee/', destination: '/internal-complaints-committee', permanent: true },
      { source: '/administration/internal-compliants-committee', destination: '/internal-complaints-committee', permanent: true },
      // Deleted standalone duplicates -> canonical deep /committee/* paths
      { source: '/hostel-advisory-welfare-committee/', destination: '/committee/hostel-advisory-and-welfare-committee', permanent: true },
      { source: '/hostel-advisory-welfare-committee', destination: '/committee/hostel-advisory-and-welfare-committee', permanent: true },
      { source: '/physical-education-extra-currucular-activities-committee/', destination: '/committee/physical-education-and-extra-curricular-activities-committee', permanent: true },
      { source: '/physical-education-extra-currucular-activities-committee', destination: '/committee/physical-education-and-extra-curricular-activities-committee', permanent: true },

      // Short URLs recovered from dead rewrites (2026-07-21). Each used to be a
      // rewrite whose destination had no page.tsx, so it served a live 404.
      // Exact-match sources only — never :path* here, or /events/[slug] and
      // similar real dynamic routes would be swallowed.
      { source: '/news', destination: '/blog/', permanent: true },
      { source: '/downloads', destination: '/admissions/prospectus/', permanent: true },
      { source: '/feedback', destination: '/academics/curriculum-feedback/', permanent: true },
      { source: '/courses', destination: '/academics/', permanent: true },
      { source: '/nirf', destination: '/accreditation/nirf/nirf-2026/dental/', permanent: true },
      { source: '/nirf-2025', destination: '/accreditation/nirf/nirf-2025/dental/', permanent: true },
      { source: '/nirf-2024', destination: '/accreditation/nirf/nirf-2024/dental/', permanent: true },
      { source: '/best-practices', destination: '/about/', permanent: true },
      { source: '/digital-campus', destination: '/ai-dental-campus/', permanent: true },
      // Linked from the Header mega-menu (data/siteData.ts) — was a live 404.
      { source: '/accreditation-ranking-status', destination: '/accreditation/naac/', permanent: true },
      { source: '/details-of-academic-programs', destination: '/academics/', permanent: true },
      { source: '/statutes-pertaining-to-academic-departments', destination: '/academics/', permanent: true },
    ];

    // Collapse 308 -> 308 -> 200 chains into a single hop. See oneHop above.
    return rules.map(oneHop);
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co; frame-src 'self' https://www.google.com https://jobs.cvviz.com; object-src 'none'; worker-src 'self';",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Conflict-resolved routes
      { source: '/view-student-council-document', destination: '/committee/student-council/view-document' },
      { source: '/view-capability-enhancement-document', destination: '/academics/capability-enhancement-program/view-document' },
      { source: '/naac-about', destination: '/about/accreditation-ranking-status/naac' },
      { source: '/naac-accreditation', destination: '/accreditation/naac' },
      { source: '/dental-2024', destination: '/accreditation/nirf/nirf-2024/dental' },
      { source: '/dental-2025', destination: '/accreditation/nirf/nirf-2025/dental' },

      // About section
      { source: '/our-institutions', destination: '/about/our-institutions' },
      { source: '/vision-and-mission', destination: '/about/vision-and-mission' },
      { source: '/act-statutes', destination: '/about/act-statutes' },
      { source: '/institutional-development-plan', destination: '/about/institutional-development-plan' },
      { source: '/affiliation-bds', destination: '/about/approvals-and-affiliation/affiliation-bds' },
      { source: '/affiliation-mds', destination: '/about/approvals-and-affiliation/affiliation-mds' },
      { source: '/dci-bds', destination: '/about/approvals-and-affiliation/dci-bds' },
      { source: '/dci-mds', destination: '/about/approvals-and-affiliation/dci-mds' },
      // REMOVED: /accreditation-ranking-status — destination has no page.tsx
      // (served a 404). Now a 301 to /accreditation/naac/ in redirects().
      { source: '/annual-report', destination: '/about/annual-report' },
      { source: '/annual-account-statement', destination: '/about/annual-account-statement' },

      // Administration section — pages now live at top-level (no rewrite needed).
      // Old /administration/* URLs are 301-redirected in redirects() above.

      // Academics section - Programs
      // REMOVED: /details-of-academic-programs — no page.tsx at destination
      // (served a 404). Now a 301 to /academics/ in redirects().
      { source: '/bds', destination: '/academics/details-of-academic-programs/bds' },
      { source: '/mds', destination: '/academics/details-of-academic-programs/mds' },
      { source: '/periodontics', destination: '/academics/details-of-academic-programs/mds/periodontics' },
      { source: '/orthodontics-and-dentofacial-orthopedics', destination: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics' },
      { source: '/prosthodontics-crown-and-bridge', destination: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge' },
      { source: '/conservative-dentistry-and-endodontics', destination: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics' },
      { source: '/oral-medicine-and-radiology', destination: '/academics/details-of-academic-programs/mds/oral-medicine' },
      // REMOVED (no page.tsx at destination — these four MDS specialisations
      // have no page on this site). /oral-and-maxillofacial-surgery,
      // /oral-pathology-and-microbiology and /public-health-dentistry are
      // already 301'd to the MDS index in redirects(); the rewrites were dead.

      // Academics section - Syllabus
      // REMOVED: /statutes-pertaining-to-academic-departments — no page.tsx
      // at destination. Now a 301 to /academics/ in redirects().
      { source: '/bds-syllabus', destination: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus' },
      { source: '/mds-prosthodontics-syllabus', destination: '/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus' },
      { source: '/mds-periodontics-syllabus', destination: '/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus' },
      { source: '/mds-orthodontics-syllabus', destination: '/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus' },
      { source: '/mds-conservative-dentistry-and-endodontics-syllabus', destination: '/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus' },
      { source: '/mds-oral-medicine-and-radiology-syllabus', destination: '/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus' },

      // Academics section - Other
      { source: '/mentor-mentee-program', destination: '/academics/mentor-mentee-program' },
      { source: '/academic-attributes', destination: '/academics/academic-attributes' },
      { source: '/learning-outcomes', destination: '/academics/learning-outcomes' },
      { source: '/student-centric-teaching-methods', destination: '/academics/student-centric-teaching-methods' },
      // REMOVED: /slow-advanced-learners (no page.tsx, no traffic — now a clean 404)
      // REMOVED: /courses (no page.tsx) — now a 301 to /academics/ in redirects()
      { source: '/add-on-courses', destination: '/academics/courses/add-on-courses' },
      { source: '/value-added-courses', destination: '/academics/courses/value-added-courses' },
      { source: '/cross-cutting-issues', destination: '/academics/courses/cross-cutting-issues' },
      { source: '/capability-enhancement-program', destination: '/academics/capability-enhancement-program' },
      { source: '/neet-qualifiers', destination: '/academics/capability-enhancement-program/neet-qualifiers' },
      // REMOVED: /career-counselling (no page.tsx — now a clean 404)
      { source: '/curriculum-feedback', destination: '/academics/curriculum-feedback' },
      // REMOVED: /faculty-achievements (no page.tsx — now a clean 404)
      { source: '/fdp-attended', destination: '/academics/faculty-achievements/fdp-attended' },
      { source: '/webinar-conferences-attended', destination: '/academics/faculty-achievements/webinar-conferences-attended' },
      // REMOVED: /academic-calendar — no page.tsx at destination, and the path
      // is already 301'd to /academic-calendar-2023-2024-2024-2025/ in redirects().
      // REMOVED: the six /academic-calendar-YYYY-YYYY rewrites. Each source has
      // its own page.tsx and array-form rewrites run as `afterFiles`, so the
      // real page always won and these never fired. Destinations don't exist.

      // Accreditation section
      // REMOVED (no page.tsx at destination): /nirf, /nirf-2024, /nirf-2025,
      // /overall-2024, /innovation-2024. The three year-index paths are now
      // 301'd to their /dental/ pages in redirects(); the two 2024 sub-pages
      // have no equivalent page and return a clean 404.
      { source: '/overall', destination: '/accreditation/nirf/nirf-2025/overall' },
      { source: '/innovation-2025', destination: '/accreditation/nirf/nirf-2025/innovation' },
      { source: '/sdg-institution', destination: '/accreditation/nirf/nirf-2025/sdg-institution' },
      // REMOVED: /nirf-2025-sdg — no page.tsx at destination (clean 404 now)

      // Admission section
      // Note: /admission (singular) is handled by 301 redirect above, not a rewrite
      { source: '/prospectus', destination: '/admissions/prospectus' },
      { source: '/admission-process-guidelines', destination: '/admission-process' },
      // REMOVED: /admission-criterion-in-others — no page.tsx (clean 404 now)
      { source: '/fee-refund-policy', destination: '/admissions/fee-refund-policy' },
      { source: '/ugc-fee-refund-policy', destination: '/admissions/fee-refund-policy/ugc-fee-refund-policy' },
      { source: '/scholarship-policy-for-dental-college', destination: '/admissions/scholarship-policy-for-dental-college' },
      { source: '/admission-criteria', destination: '/admissions/admission-criteria' },
      { source: '/equitable-opportunity-for-sedg-group', destination: '/admissions/equitable-opportunity-for-sedg-group' },
      { source: '/equitable-opportunity-for-sedgs', destination: '/admissions/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs' },
      { source: '/ugc-guidelines', destination: '/admissions/equitable-opportunity-for-sedg-group/ugc-guidelines' },
      { source: '/fees-structure', destination: '/fee-structure' },

      // Research section
      { source: '/research-development-rd-cell', destination: '/research/research-development-rd-cell' },
      { source: '/research-and-dissertation', destination: '/research/research-and-dissertation' },
      { source: '/institutions-innovation-council-iic', destination: '/research/institutions-innovation-council-iic' },
      { source: '/research-proposal-and-consent-forms', destination: '/research/research-proposal-and-consent-forms' },
      { source: '/institutional-ethical-committee', destination: '/research/institutional-ethical-committee' },
      { source: '/incubation-center', destination: '/research/incubation-center' },
      { source: '/start-up', destination: '/research/start-up' },
      { source: '/mou-memorandum-of-understanding', destination: '/research/mou-memorandum-of-understanding' },
      { source: '/collaboration', destination: '/research/collaboration' },
      { source: '/publication', destination: '/research/publication' },

      // Committee section
      { source: '/student-council', destination: '/committee/student-council' },
      { source: '/internal-compliants-committee-icc', destination: '/committee/internal-complaints-committee-icc' },
      { source: '/internal-complaints-committee-icc', destination: '/committee/internal-complaints-committee-icc' },
      { source: '/student-grievance-redressal-committee-sgrc', destination: '/committee/student-grievance-redressal-committee-sgrc' },
      { source: '/placement-cell-cdc', destination: '/committee/placement-cell-cdc' },
      { source: '/list-of-events', destination: '/committee/placement-cell-cdc/list-of-events' },
      { source: '/anti-ragging-committee', destination: '/committee/anti-ragging-committee' },
      { source: '/sedg-cell', destination: '/committee/sedg-cell' },
      { source: '/disciplinary-committee', destination: '/committee/disciplinary-committee' },
      { source: '/dental-education-department', destination: '/committee/dental-education-department' },
      { source: '/mentoring-committee', destination: '/committee/mentoring-committee' },
      { source: '/examination-committee', destination: '/committee/examination-committee' },
      { source: '/finance-committee', destination: '/committee/finance-committee' },
      { source: '/student-welfare-committee', destination: '/committee/student-welfare-committee' },
      { source: '/patient-welfare-committee', destination: '/committee/patient-welfare-committee' },
      { source: '/ncc-nss', destination: '/committee/ncc/nss' },
      { source: '/international-student-cell-committee', destination: '/committee/international-student-cell-committee' },
      // REMOVED (no page.tsx at destination — these four committees have no
      // page on this site): /sports-committee, /cultural-committee,
      // /institutional-biosafety-committee-ibsc, /rti-committee.
      { source: '/physical-infrastructure-and-purchase-maintenance-committee', destination: '/committee/physical-infrastructure-and-purchase-maintenance-committee' },
      // Note: /hostel-advisory-welfare-committee and /physical-education-extra-currucular-activities-committee
      // now handled by 301 redirects (see redirects() above) to consolidate duplicates into canonical /committee/* paths.
      { source: '/library-and-learning-resources-committee', destination: '/committee/library-and-learning-resources-committee' },

      // Facilities section
      { source: '/accessibility-inclusion-at-jkkndch', destination: '/facilities/accessibility-and-inclusion-at-jkkndch' },
      { source: '/library', destination: '/facilities/library' },
      { source: '/labs', destination: '/facilities/labs' },
      { source: '/food-court', destination: '/facilities/food-court' },
      { source: '/hostel', destination: '/facilities/hostel' },
      { source: '/boys-hostel', destination: '/facilities/hostel/boys-hostel' },
      { source: '/girls-hostel', destination: '/facilities/hostel/girls-hostel' },
      { source: '/transport', destination: '/facilities/transport' },
      { source: '/seminar-hall', destination: '/facilities/seminar-hall' },
      { source: '/sports-club', destination: '/facilities/sports-club' },
      { source: '/auditorium', destination: '/facilities/auditorium' },
      { source: '/bank-post-office', destination: '/facilities/bank-and-post-office' },
      { source: '/digital-class-room', destination: '/facilities/digital-class-room' },
      { source: '/health-facilities', destination: '/facilities/health-facilities' },
      { source: '/wi-fi-campus', destination: '/facilities/wi-fi-campus' },
      { source: '/ambulance-services', destination: '/facilities/ambulance-services' },
      { source: '/privacy-policy', destination: '/facilities/privacy-policy' },
      { source: '/barrier-free-environment', destination: '/facilities/barrier-free-environment' },

      // Information Center section
      { source: '/right-to-information-rti', destination: '/information-center/right-to-information-rti' },
      { source: '/careers', destination: '/information-center/careers' },
      // REMOVED (no page.tsx at destination — all served 404s):
      //   /tender, /announcements  -> clean 404
      //   /downloads, /feedback, /news -> now 301'd in redirects()
      //   /events -> deliberately NOT redirected: app/events/[slug] serves real
      //   event pages and their BreadcrumbSchema names /events/ as the parent.
      //   Redirecting /events elsewhere would point that parent at another
      //   section. Proper fix is an app/events/page.tsx index (tracked separately).

      // Mandatory Disclosures section
      { source: '/guidelines-on-public-disclosure-by-heis', destination: '/mandatory-disclosures/guidelines-on-public-disclosure-by-heis' },
      { source: '/letter-of-undertaking', destination: '/mandatory-disclosures/letter-of-undertaking' },
      // REMOVED: /ugc-public-disclosure-compliance — no page.tsx at destination,
      // and the path is already 301'd in redirects(); the rewrite was dead.

      // Others section
      { source: '/patient-safety-manual', destination: '/others/patient-safety-manual' },
      // REMOVED (no page.tsx at destination): /institutional-distinctiveness and
      // /outreach -> clean 404. /best-practices and /digital-campus -> now 301'd.

      // Alumni section
      { source: '/alumni-association-activities', destination: '/alumni/alumni-association-activities' },
      { source: '/alumni-registration-certificate', destination: '/alumni/alumni-registration-certificate' },

      // Removed: /iqac → /iqac and /contact → /contact rewrites (unnecessary — pages exist at app/iqac/page.tsx and app/contact/page.tsx)
    ];
  },
};

export default nextConfig;
