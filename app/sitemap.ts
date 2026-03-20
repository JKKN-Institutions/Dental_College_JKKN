import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dental.jkkn.ac.in'

  // Category-based lastmod dates — prevents false freshness signals for stable content
  const dates = {
    dynamic: new Date('2026-03-20'),     // Homepage, blog, admissions — updated frequently
    programs: new Date('2026-03-16'),     // BDS, MDS, specializations — last major content update
    admission: new Date('2026-03-16'),    // Admission pages — updated for 2026-27 cycle
    geo: new Date('2026-03-16'),          // City SEO pages — last content update
    facilities: new Date('2026-02-15'),   // Facilities — stable infrastructure content
    about: new Date('2026-02-15'),        // About, trust, management — rarely changes
    research: new Date('2026-01-15'),     // Research, publications — quarterly updates
    accreditation: new Date('2025-12-01'), // NAAC, NIRF — annual cycle
    committees: new Date('2025-08-01'),   // Committee pages — reconstituted annually
    syllabus: new Date('2025-08-01'),     // Syllabi — annual academic cycle
    calendar2324: new Date('2024-08-01'), // Academic calendar 2023-2024
    calendar2223: new Date('2023-08-01'), // Academic calendar 2022-2023
    calendar2122: new Date('2022-08-01'), // Academic calendar 2021-2022
    calendar2021: new Date('2021-08-01'), // Academic calendar 2020-2021
    calendar1920: new Date('2020-08-01'), // Academic calendar 2019-2020
    calendar1819: new Date('2019-08-01'), // Academic calendar 2018-2019
    policy: new Date('2025-06-01'),       // Policies, RTI, disclosures — stable
  }

  return [
    // Homepage
    { url: `${baseUrl}/`, lastModified: dates.dynamic, changeFrequency: 'weekly', priority: 1.0 },

    // Core pages
    { url: `${baseUrl}/contact`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: dates.dynamic, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/ai-dental-campus`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fees-structure`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.8 },

    // Academics — BDS & MDS (highest SEO value)
    { url: `${baseUrl}/academics`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/bds`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.9 },

    // MDS Specializations (5)
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/periodontics`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/oral-medicine`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.8 },

    // Academics — other
    { url: `${baseUrl}/academics/learning-outcomes`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/mentor-mentee-program`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/academic-attributes`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/student-centric-teaching-methods`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/curriculum-feedback`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/courses/value-added-courses`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses/implant-program-2025`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/cross-cutting-issues`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program/neet-qualifiers`, lastModified: dates.programs, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/fdp-attended`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/webinar-conferences-attended`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.5 },

    // Academics — Syllabus
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/bds-syllabus`, lastModified: dates.syllabus, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus`, lastModified: dates.syllabus, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus`, lastModified: dates.syllabus, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus`, lastModified: dates.syllabus, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus`, lastModified: dates.syllabus, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus`, lastModified: dates.syllabus, changeFrequency: 'yearly', priority: 0.5 },

    // Academic Calendars
    { url: `${baseUrl}/academic-calendar-2023-2024-2024-2025`, lastModified: dates.calendar2324, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/academic-calendar-2022-2023`, lastModified: dates.calendar2223, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2021-2022`, lastModified: dates.calendar2122, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2020-2021`, lastModified: dates.calendar2021, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2019-2020`, lastModified: dates.calendar1920, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/academic-calendar-2018-2019`, lastModified: dates.calendar1819, changeFrequency: 'yearly', priority: 0.3 },

    // Admission
    { url: `${baseUrl}/admission-process`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/admission/admission-criteria`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/admission/prospectus`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admission/scholarship-policy-for-dental-college`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admission/fee-refund-policy`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/admission/fee-refund-policy/ugc-fee-refund-policy`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/ugc-guidelines`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/bds`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mds`, lastModified: dates.admission, changeFrequency: 'monthly', priority: 0.8 },

    // Accreditation
    { url: `${baseUrl}/accreditation/naac`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/iqac`, lastModified: dates.accreditation, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/dental`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/overall`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/innovation`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/sdg-institution`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2024/dental`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/accreditation-ranking-status/naac`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.5 },

    // About
    { url: `${baseUrl}/about`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/vision-and-mission`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/our-institutions`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-management`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-trust`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-bds`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-mds`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-bds`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-mds`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/institutional-development-plan`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/annual-report`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/act-statutes`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/annual-account-statement`, lastModified: dates.accreditation, changeFrequency: 'yearly', priority: 0.4 },

    // Alumni
    { url: `${baseUrl}/alumni`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/alumni/alumni-association-activities`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/alumni/alumni-registration-certificate`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.5 },

    // Research
    { url: `${baseUrl}/research/publication`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/collaboration`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/incubation-center`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/start-up`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-development-rd-cell`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-and-dissertation`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-proposal-and-consent-forms`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutional-ethical-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutions-innovation-council-iic`, lastModified: dates.research, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/research/mou-memorandum-of-understanding`, lastModified: dates.research, changeFrequency: 'yearly', priority: 0.5 },

    // Facilities
    { url: `${baseUrl}/facilities/labs`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/library`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/hostel/boys-hostel`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel/girls-hostel`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/transport`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/auditorium`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/food-court`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/sports-club`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/health-facilities`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/digital-class-room`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/wi-fi-campus`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/ambulance-services`, lastModified: dates.facilities, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/barrier-free-environment`, lastModified: dates.facilities, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/seminar-hall`, lastModified: dates.facilities, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/bank-&-post-office`, lastModified: dates.facilities, changeFrequency: 'yearly', priority: 0.4 },

    // Administration
    { url: `${baseUrl}/administration/principals-message`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/administration/academic-leadership`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/administration/academic-council`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/administration/governing-body`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/administration/finance-officer`, lastModified: dates.about, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/administration/internal-compliants-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },

    // Committees
    { url: `${baseUrl}/committee/anti-ragging-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-grievance-redressal-committee-sgrc`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-welfare-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/placement-cell-cdc`, lastModified: dates.dynamic, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/committee/ncc/nss`, lastModified: dates.committees, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/committee/finance-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/mentoring-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/examination-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/hostel-advisory-&-welfare-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/sedg-cell`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/international-student-cell-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-education-&-extra-currucular-activities-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-infrastructure-and-purchase-maintenance-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/disciplinary-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/patient-welfare-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/student-council`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/internal-compliants-committee-icc`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/dental-education-department`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/library-and-learning-resources-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },

    // Campaign landing pages
    { url: `${baseUrl}/dental-surgery-assistant-course`, lastModified: dates.programs, changeFrequency: 'weekly', priority: 0.8 },

    // Comparison page
    { url: `${baseUrl}/best-dental-college-tamil-nadu`, lastModified: dates.geo, changeFrequency: 'monthly', priority: 0.8 },

    // City SEO pages
    { url: `${baseUrl}/coimbatore`, lastModified: dates.geo, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/erode`, lastModified: dates.geo, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/salem`, lastModified: dates.geo, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/namakkal`, lastModified: dates.geo, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tiruppur`, lastModified: dates.geo, changeFrequency: 'monthly', priority: 0.7 },

    // Facilities — additional
    { url: `${baseUrl}/facilities`, lastModified: dates.facilities, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/accessibility-&-inclusion-at-jkkndch`, lastModified: dates.facilities, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/privacy-policy`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.3 },

    // Standalone committee URLs
    { url: `${baseUrl}/hostel-advisory-welfare-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/physical-education-extra-currucular-activities-committee`, lastModified: dates.committees, changeFrequency: 'yearly', priority: 0.4 },

    // Others
    { url: `${baseUrl}/others/patient-safety-manual`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/blog/top-10-career-options-after-bed-2026`, lastModified: dates.dynamic, changeFrequency: 'monthly', priority: 0.6 },

    // Information & Mandatory
    { url: `${baseUrl}/information-center/careers`, lastModified: dates.dynamic, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/information-center/right-to-information-rti`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/guidelines-on-public-disclosure-by-heis`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/letter-of-undertaking`, lastModified: dates.policy, changeFrequency: 'yearly', priority: 0.4 },
  ].map(entry => ({
    ...entry,
    url: entry.url.endsWith('/') ? entry.url : `${entry.url}/`,
  })) as MetadataRoute.Sitemap
}
