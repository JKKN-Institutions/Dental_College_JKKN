import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  async redirects() {
    return [
      // Old WordPress URLs → New Next.js URLs
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/principal-message/', destination: '/our-management', permanent: true },
      { source: '/principal-message', destination: '/our-management', permanent: true },

      // Trailing slash redirects (WordPress used trailing slashes)
      { source: '/bds/', destination: '/academics/details-of-academic-programs/bds', permanent: true },
      { source: '/mds/', destination: '/academics/details-of-academic-programs/mds', permanent: true },
      { source: '/gallery/', destination: '/gallery', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/iqac/', destination: '/iqac', permanent: true },
      { source: '/alumni/', destination: '/alumni', permanent: true },

      // Misspelled URLs & Common Shortcuts
      { source: '/carrer', destination: '/information-center/careers', permanent: true },
      { source: '/carrer/', destination: '/information-center/careers', permanent: true },
      { source: '/naac', destination: '/accreditation/naac', permanent: true },
      { source: '/naac/', destination: '/accreditation/naac', permanent: true },
      { source: '/nacc', destination: '/accreditation/naac', permanent: true },
      { source: '/nacc/', destination: '/accreditation/naac', permanent: true },

      // Campus typo redirect
      { source: '/camu', destination: '/facilities/wi-fi-campus', permanent: true },
      { source: '/camu/', destination: '/facilities/wi-fi-campus', permanent: true },
    ];
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none';",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
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
      { source: '/about', destination: '/about' },
      { source: '/our-institutions', destination: '/about/our-institutions' },
      { source: '/vision-and-mission', destination: '/about/vision-and-mission' },
      { source: '/act-statutes', destination: '/about/act-statutes' },
      { source: '/institutional-development-plan', destination: '/about/institutional-development-plan' },
      { source: '/affiliation-bds', destination: '/about/approvals-and-affiliation/affiliation-bds' },
      { source: '/affiliation-mds', destination: '/about/approvals-and-affiliation/affiliation-mds' },
      { source: '/dci-bds', destination: '/about/approvals-and-affiliation/dci-bds' },
      { source: '/dci-mds', destination: '/about/approvals-and-affiliation/dci-mds' },
      { source: '/accreditation-ranking-status', destination: '/about/accreditation-ranking-status' },
      { source: '/annual-report', destination: '/about/annual-report' },
      { source: '/annual-account-statement', destination: '/about/annual-account-statement' },

      // Administration section
      { source: '/administration', destination: '/administration' },
      { source: '/our-trust', destination: '/administration/our-trust' },
      { source: '/our-management', destination: '/administration/our-management' },
      { source: '/principals-message', destination: '/administration/principals-message' },
      { source: '/finance-officer', destination: '/administration/finance-officer' },
      { source: '/governing-body', destination: '/administration/governing-body' },
      { source: '/academic-council', destination: '/administration/academic-council' },
      { source: '/internal-compliants-committee', destination: '/administration/internal-compliants-committee' },
      { source: '/academic-leadership', destination: '/administration/academic-leadership' },

      // Academics section - Programs
      { source: '/academics', destination: '/academics' },
      { source: '/details-of-academic-programs', destination: '/academics/details-of-academic-programs' },
      { source: '/bds', destination: '/academics/details-of-academic-programs/bds' },
      { source: '/mds', destination: '/academics/details-of-academic-programs/mds' },
      { source: '/periodontics', destination: '/academics/details-of-academic-programs/mds/periodontics' },
      { source: '/orthodontics-and-dentofacial-orthopedics', destination: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics' },
      { source: '/prosthodontics-crown-and-bridge', destination: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge' },
      { source: '/conservative-dentistry-and-endodontics', destination: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics' },
      { source: '/oral-medicine-and-radiology', destination: '/academics/details-of-academic-programs/mds/oral-medicine' },
      { source: '/oral-and-maxillofacial-surgery', destination: '/academics/details-of-academic-programs/mds/oral-and-maxillofacial-surgery' },
      { source: '/pediatric-and-preventive-dentistry', destination: '/academics/details-of-academic-programs/mds/pediatric-and-preventive-dentistry' },
      { source: '/oral-pathology-and-microbiology', destination: '/academics/details-of-academic-programs/mds/oral-pathology-and-microbiology' },
      { source: '/public-health-dentistry', destination: '/academics/details-of-academic-programs/mds/public-health-dentistry' },

      // Academics section - Syllabus
      { source: '/statutes-pertaining-to-academic-departments', destination: '/academics/statutes-pertaining-to-academic-departments' },
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
      { source: '/slow-advanced-learners', destination: '/academics/slow-advanced-learners' },
      { source: '/courses', destination: '/academics/courses' },
      { source: '/add-on-courses', destination: '/academics/courses/add-on-courses' },
      { source: '/value-added-courses', destination: '/academics/courses/value-added-courses' },
      { source: '/cross-cutting-issues', destination: '/academics/courses/cross-cutting-issues' },
      { source: '/capability-enhancement-program', destination: '/academics/capability-enhancement-program' },
      { source: '/neet-qualifiers', destination: '/academics/capability-enhancement-program/neet-qualifiers' },
      { source: '/career-counselling', destination: '/academics/career-counselling' },
      { source: '/curriculum-feedback', destination: '/academics/curriculum-feedback' },
      { source: '/faculty-achievements', destination: '/academics/faculty-achievements' },
      { source: '/fdp-attended', destination: '/academics/faculty-achievements/fdp-attended' },
      { source: '/webinar-conferences-attended', destination: '/academics/faculty-achievements/webinar-conferences-attended' },
      { source: '/academic-calendar', destination: '/academics/academic-calendar' },
      { source: '/academic-calendar-2023-2024-2024-2025', destination: '/academics/academic-calendar/academic-calendar-2023-2024-2024-2025' },
      { source: '/academic-calendar-2022-2023', destination: '/academics/academic-calendar/academic-calendar-2022-2023' },
      { source: '/academic-calendar-2021-2022', destination: '/academics/academic-calendar/academic-calendar-2021-2022' },
      { source: '/academic-calendar-2020-2021', destination: '/academics/academic-calendar/academic-calendar-2020-2021' },
      { source: '/academic-calendar-2019-2020', destination: '/academics/academic-calendar/academic-calendar-2019-2020' },
      { source: '/academic-calendar-2018-2019', destination: '/academics/academic-calendar/academic-calendar-2018-2019' },

      // Accreditation section
      { source: '/accreditation', destination: '/accreditation' },
      { source: '/nirf', destination: '/accreditation/nirf' },
      { source: '/nirf-2024', destination: '/accreditation/nirf/nirf-2024' },
      { source: '/overall-2024', destination: '/accreditation/nirf/nirf-2024/overall' },
      { source: '/innovation-2024', destination: '/accreditation/nirf/nirf-2024/innovation' },
      { source: '/nirf-2025', destination: '/accreditation/nirf/nirf-2025' },
      { source: '/overall', destination: '/accreditation/nirf/nirf-2025/overall' },
      { source: '/innovation-2025', destination: '/accreditation/nirf/nirf-2025/innovation' },
      { source: '/sdg-institution', destination: '/accreditation/nirf/nirf-2025/sdg-institution' },
      { source: '/nirf-2025-sdg', destination: '/accreditation/nirf/nirf-2025/sdg-institution/nirf-2025-sdg' },

      // Admission section
      { source: '/admission', destination: '/admission' },
      { source: '/prospectus', destination: '/admission/prospectus' },
      { source: '/admission-process-guidelines', destination: '/admission-process' },
      { source: '/admission-criterion-in-others', destination: '/admission/admission-process-guidelines/admission-criterion-in-others' },
      { source: '/fee-refund-policy', destination: '/admission/fee-refund-policy' },
      { source: '/ugc-fee-refund-policy', destination: '/admission/fee-refund-policy/ugc-fee-refund-policy' },
      { source: '/scholarship-policy-for-dental-college', destination: '/admission/scholarship-policy-for-dental-college' },
      { source: '/admission-criteria', destination: '/admission/admission-criteria' },
      { source: '/equitable-opportunity-for-sedg-group', destination: '/admission/equitable-opportunity-for-sedg-group' },
      { source: '/equitable-opportunity-for-sedgs', destination: '/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs' },
      { source: '/ugc-guidelines', destination: '/admission/equitable-opportunity-for-sedg-group/ugc-guidelines' },
      { source: '/fees-structure', destination: '/fees-structure' },

      // Research section
      { source: '/research', destination: '/research' },
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
      { source: '/committee', destination: '/committee' },
      { source: '/student-council', destination: '/committee/student-council' },
      { source: '/internal-compliants-committee-icc', destination: '/committee/internal-compliants-committee-icc' },
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
      { source: '/sports-committee', destination: '/committee/sports-committee' },
      { source: '/cultural-committee', destination: '/committee/cultural-committee' },
      { source: '/institutional-biosafety-committee-ibsc', destination: '/committee/institutional-biosafety-committee-ibsc' },
      { source: '/rti-committee', destination: '/committee/rti-committee' },
      { source: '/physical-infrastructure-and-purchase-maintenance-committee', destination: '/committee/physical-infrastructure-and-purchase-maintenance-committee' },
      { source: '/hostel-advisory-welfare-committee', destination: '/committee/hostel-advisory-welfare-committee' },
      { source: '/library-and-learning-resources-committee', destination: '/committee/library-and-learning-resources-committee' },
      { source: '/physical-education-extra-currucular-activities-committee', destination: '/committee/physical-education-extra-currucular-activities-committee' },

      // Facilities section
      { source: '/facilities', destination: '/facilities' },
      { source: '/accessibility-inclusion-at-jkkndch', destination: '/facilities/accessibility-&-inclusion-at-jkkndch' },
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
      { source: '/bank-post-office', destination: '/facilities/bank-&-post-office' },
      { source: '/digital-class-room', destination: '/facilities/digital-class-room' },
      { source: '/health-facilities', destination: '/facilities/health-facilities' },
      { source: '/wi-fi-campus', destination: '/facilities/wi-fi-campus' },
      { source: '/ambulance-services', destination: '/facilities/ambulance-services' },
      { source: '/privacy-policy', destination: '/facilities/privacy-policy' },
      { source: '/barrier-free-environment', destination: '/facilities/barrier-free-environment' },

      // Information Center section
      { source: '/information-center', destination: '/information-center' },
      { source: '/right-to-information-rti', destination: '/information-center/right-to-information-rti' },
      { source: '/careers', destination: '/information-center/careers' },
      { source: '/tender', destination: '/information-center/tender' },
      { source: '/downloads', destination: '/information-center/downloads' },
      { source: '/feedback', destination: '/information-center/feedback' },
      { source: '/announcements', destination: '/information-center/announcements' },
      { source: '/news', destination: '/information-center/news' },
      { source: '/events', destination: '/information-center/events' },

      // Mandatory Disclosures section
      { source: '/mandatory-disclosures', destination: '/mandatory-disclosures' },
      { source: '/guidelines-on-public-disclosure-by-heis', destination: '/mandatory-disclosures/guidelines-on-public-disclosure-by-heis' },
      { source: '/letter-of-undertaking', destination: '/mandatory-disclosures/letter-of-undertaking' },
      { source: '/ugc-public-disclosure-compliance', destination: '/mandatory-disclosures/ugc-public-disclosure-compliance' },

      // Others section
      { source: '/others', destination: '/others' },
      { source: '/patient-safety-manual', destination: '/others/patient-safety-manual' },
      { source: '/best-practices', destination: '/others/best-practices' },
      { source: '/institutional-distinctiveness', destination: '/others/institutional-distinctiveness' },
      { source: '/digital-campus', destination: '/others/digital-campus' },
      { source: '/outreach', destination: '/others/outreach' },

      // Alumni section
      { source: '/alumni', destination: '/alumni' },
      { source: '/alumni-association-activities', destination: '/alumni/alumni-association-activities' },
      { source: '/alumni-registration-certificate', destination: '/alumni/alumni-registration-certificate' },

      // Top-level pages
      { source: '/iqac', destination: '/iqac' },
      { source: '/gallery', destination: '/gallery' },
      { source: '/contact', destination: '/contact' },
    ];
  },
};

export default nextConfig;
