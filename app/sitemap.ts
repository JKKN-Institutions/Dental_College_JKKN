import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dental.jkkn.ac.in'
  const now = new Date()

  return [
    // Homepage
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Core pages
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/ai-dental-campus`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fees-structure`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Academics — BDS & MDS (highest SEO value)
    { url: `${baseUrl}/academics`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/bds`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // MDS Specializations (5)
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/periodontics`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/oral-medicine`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Academics — other
    { url: `${baseUrl}/academics/learning-outcomes`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/mentor-mentee-program`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/academic-attributes`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/student-centric-teaching-methods`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/curriculum-feedback`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/courses/value-added-courses`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses/implant-program-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/cross-cutting-issues`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program/neet-qualifiers`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/fdp-attended`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/webinar-conferences-attended`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Academics — Syllabus
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/bds-syllabus`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // Academic Calendars
    { url: `${baseUrl}/academic-calendar-2023-2024-2024-2025`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academic-calendar-2022-2023`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2021-2022`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2020-2021`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2019-2020`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2018-2019`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // Admission
    { url: `${baseUrl}/admission-process`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/admission/admission-criteria`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/admission/prospectus`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admission/scholarship-policy-for-dental-college`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admission/fee-refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/admission/fee-refund-policy/ugc-fee-refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/ugc-guidelines`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/bds`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mds`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Accreditation
    { url: `${baseUrl}/accreditation/naac`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/iqac`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/dental`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/overall`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/innovation`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/sdg-institution`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2024/dental`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/accreditation-ranking-status/naac`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // About
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/vision-and-mission`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/our-institutions`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-management`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-trust`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-bds`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-mds`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-bds`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-mds`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/institutional-development-plan`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/annual-report`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/act-statutes`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/annual-account-statement`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Alumni
    { url: `${baseUrl}/alumni`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/alumni/alumni-association-activities`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/alumni/alumni-registration-certificate`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // Research
    { url: `${baseUrl}/research/publication`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/collaboration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/incubation-center`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/start-up`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-development-rd-cell`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-and-dissertation`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-proposal-and-consent-forms`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutional-ethical-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutions-innovation-council-iic`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/research/mou-memorandum-of-understanding`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // Facilities
    { url: `${baseUrl}/facilities/labs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/library`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/hostel/boys-hostel`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel/girls-hostel`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/transport`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/auditorium`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/food-court`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/sports-club`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/health-facilities`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/digital-class-room`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/wi-fi-campus`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/ambulance-services`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/barrier-free-environment`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/seminar-hall`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/bank-&-post-office`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Administration
    { url: `${baseUrl}/administration/principals-message`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/administration/academic-leadership`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/administration/academic-council`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/administration/governing-body`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/administration/finance-officer`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/administration/internal-compliants-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Committees
    { url: `${baseUrl}/committee/anti-ragging-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-grievance-redressal-committee-sgrc`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-welfare-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/placement-cell-cdc`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/committee/ncc/nss`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/committee/finance-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/mentoring-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/examination-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/hostel-advisory-&-welfare-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/sedg-cell`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/international-student-cell-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-education-&-extra-currucular-activities-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-infrastructure-and-purchase-maintenance-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/disciplinary-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/patient-welfare-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/student-council`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/internal-compliants-committee-icc`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/dental-education-department`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/library-and-learning-resources-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Campaign landing pages
    { url: `${baseUrl}/dental-surgery-assistant-course`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // Comparison page
    { url: `${baseUrl}/best-dental-college-tamil-nadu`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // City SEO pages
    { url: `${baseUrl}/coimbatore`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/erode`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/salem`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/namakkal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tiruppur`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Facilities — additional
    { url: `${baseUrl}/facilities`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/accessibility-&-inclusion-at-jkkndch`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // Standalone committee URLs
    { url: `${baseUrl}/hostel-advisory-welfare-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/physical-education-extra-currucular-activities-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Others
    { url: `${baseUrl}/others/patient-safety-manual`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/blog/top-10-career-options-after-bed-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Information & Mandatory
    { url: `${baseUrl}/information-center/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/information-center/right-to-information-rti`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/guidelines-on-public-disclosure-by-heis`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/letter-of-undertaking`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ].map(entry => ({
    ...entry,
    url: entry.url.endsWith('/') ? entry.url : `${entry.url}/`,
  }))
}
