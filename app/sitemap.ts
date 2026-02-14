import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dental.jkkn.ac.in';
  const lastModified = new Date();

  // Define all routes with their priorities and change frequencies
  const routes = [
    // Home
    { url: '', changeFrequency: 'daily' as const, priority: 1.0 },

    // About Section
    { url: '/about/our-institutions', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/about/vision-and-mission', changeFrequency: 'yearly' as const, priority: 0.9 },
    { url: '/about/act-statutes', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/about/institutional-development-plan', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/about/approvals-and-affiliation/affiliation-bds', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/about/approvals-and-affiliation/affiliation-mds', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/about/approvals-and-affiliation/dci-bds', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/about/approvals-and-affiliation/dci-mds', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/about/accreditation-ranking-status/naac', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/about/annual-report', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/about/annual-account-statement', changeFrequency: 'yearly' as const, priority: 0.7 },

    // Administration Section
    { url: '/administration/our-trust', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/administration/our-management', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/administration/principals-message', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/administration/finance-officer', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/administration/governing-body', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/administration/academic-council', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/administration/internal-compliants-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/administration/academic-leadership', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Academics - BDS & MDS Programs (High Priority for SEO)
    { url: '/academics/details-of-academic-programs/bds', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/academics/details-of-academic-programs/mds', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/academics/details-of-academic-programs/mds/periodontics', changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics', changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge', changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics', changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: '/academics/details-of-academic-programs/mds/oral-medicine', changeFrequency: 'weekly' as const, priority: 0.95 },

    // Academic Calendar
    { url: '/academic-calendar-2023-2024-2024-2025', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/academic-calendar-2022-2023', changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: '/academic-calendar-2021-2022', changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: '/academic-calendar-2020-2021', changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: '/academic-calendar-2019-2020', changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: '/academic-calendar-2018-2019', changeFrequency: 'yearly' as const, priority: 0.6 },

    // Academics - Syllabus
    { url: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus', changeFrequency: 'yearly' as const, priority: 0.8 },

    // Academics - Other
    { url: '/academics/mentor-mentee-program', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/academic-attributes', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/learning-outcomes', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/student-centric-teaching-methods', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/courses/add-on-courses', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/courses/add-on-courses/implant-program-2025', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/academics/courses/value-added-courses', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/courses/cross-cutting-issues', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/capability-enhancement-program', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/capability-enhancement-program/neet-qualifiers', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/curriculum-feedback', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/faculty-achievements/fdp-attended', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/academics/faculty-achievements/webinar-conferences-attended', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Accreditation Section
    { url: '/accreditation/naac', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/accreditation/nirf/nirf-2024/dental', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/accreditation/nirf/nirf-2024/overall', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/accreditation/nirf/nirf-2024/innovation', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/accreditation/nirf/nirf-2025/dental', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/accreditation/nirf/nirf-2025/overall', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/accreditation/nirf/nirf-2025/innovation', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/accreditation/nirf/nirf-2025/sdg-institution', changeFrequency: 'monthly' as const, priority: 0.9 },

    // Admission Section (High Priority for Student Enrollment)
    { url: '/admission-process', changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: '/admission/prospectus', changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: '/admission/admission-criteria', changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: '/admission/fee-refund-policy', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/admission/fee-refund-policy/ugc-fee-refund-policy', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/admission/scholarship-policy-for-dental-college', changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: '/admission/equitable-opportunity-for-sedg-group', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/admission/equitable-opportunity-for-sedg-group/ugc-guidelines', changeFrequency: 'yearly' as const, priority: 0.7 },

    // Research Section
    { url: '/research/research-development-rd-cell', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/research/research-and-dissertation', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/research/institutions-innovation-council-iic', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/research/research-proposal-and-consent-forms', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/research/institutional-ethical-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/research/incubation-center', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/research/start-up', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/research/mou-memorandum-of-understanding', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/research/collaboration', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/research/publication', changeFrequency: 'monthly' as const, priority: 0.8 },

    // Committee Section
    { url: '/committee/student-council', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/internal-compliants-committee-icc', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/student-grievance-redressal-committee-sgrc', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/placement-cell-cdc', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/committee/placement-cell-cdc/list-of-events', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/anti-ragging-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/sedg-cell', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/disciplinary-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/dental-education-department', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/mentoring-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/examination-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/finance-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/student-welfare-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/patient-welfare-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/international-student-cell-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/sports-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/cultural-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/institutional-biosafety-committee-ibsc', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/rti-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/physical-infrastructure-and-purchase-maintenance-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/library-and-learning-resources-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/committee/physical-education-&-extra-currucular-activities-committee', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Facilities Section
    { url: '/facilities/accessibility-&-inclusion-at-jkkndch', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/facilities/library', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/facilities/labs', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/facilities/food-court', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/hostel/boys-hostel', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/facilities/hostel/girls-hostel', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/facilities/transport', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/seminar-hall', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/sports-club', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/auditorium', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/bank-&-post-office', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/digital-class-room', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/health-facilities', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/wi-fi-campus', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/ambulance-services', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/facilities/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: '/facilities/barrier-free-environment', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Information Center Section
    { url: '/information-center/right-to-information-rti', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/information-center/careers', changeFrequency: 'weekly' as const, priority: 0.8 },

    // Mandatory Disclosures Section
    { url: '/mandatory-disclosures/guidelines-on-public-disclosure-by-heis', changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: '/mandatory-disclosures/letter-of-undertaking', changeFrequency: 'yearly' as const, priority: 0.7 },

    // Others Section
    { url: '/others/patient-safety-manual', changeFrequency: 'yearly' as const, priority: 0.7 },

    // Alumni Section
    { url: '/alumni', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/alumni/alumni-association-activities', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/alumni/alumni-registration-certificate', changeFrequency: 'monthly' as const, priority: 0.7 },

    // Top-level Pages
    { url: '/iqac', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/gallery', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },

    // Additional Pages
    { url: '/our-trust', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/our-management', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/hostel-advisory-welfare-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/physical-education-extra-currucular-activities-committee', changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
