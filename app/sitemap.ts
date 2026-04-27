import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dental.jkkn.ac.in'

  // Fetch dynamic blog posts from Supabase
  let blogUrls: MetadataRoute.Sitemap = []
  let eventUrls: MetadataRoute.Sitemap = []
  try {
    const supabase = await createClient()
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
    const { data: events } = await supabase
      .from('events')
      .select('slug, updated_at')
    if (events) {
      eventUrls = events.map(event => ({
        url: `${baseUrl}/information-center/events/${event.slug}/`,
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
    { url: `${baseUrl}/`, lastModified: '2026-03-15', changeFrequency: 'weekly', priority: 1.0 },

    // Core pages
    { url: `${baseUrl}/contact/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/gallery/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/`, lastModified: '2026-03-15', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/ai-dental-campus/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fee-structure/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/placements/`, lastModified: '2026-03-26', changeFrequency: 'monthly', priority: 0.8 },

    // Academics — BDS & MDS (highest SEO value)
    { url: `${baseUrl}/academics/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/bds/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.9 },

    // MDS Specializations (5)
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/periodontics/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/academics/details-of-academic-programs/mds/oral-medicine/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },

    // Academics — other
    { url: `${baseUrl}/academics/learning-outcomes/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/mentor-mentee-program/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/academic-attributes/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/student-centric-teaching-methods/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/curriculum-feedback/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/courses/value-added-courses/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/add-on-courses/implant-program-2025/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academics/courses/cross-cutting-issues/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/capability-enhancement-program/neet-qualifiers/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/fdp-attended/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/academics/faculty-achievements/webinar-conferences-attended/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },

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

    // Admission
    { url: `${baseUrl}/admission/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/admission-process/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/admission/admission-criteria/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/admission/prospectus/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admission/scholarship-policy-for-dental-college/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/admission/fee-refund-policy/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/admission/fee-refund-policy/ugc-fee-refund-policy/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/admission/equitable-opportunity-for-sedg-group/ugc-guidelines/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/bds/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mds/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.8 },

    // Accreditation
    { url: `${baseUrl}/accreditation/naac/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/iqac/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/dental/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/overall/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/innovation/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2025/sdg-institution/`, lastModified: '2025-09-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/accreditation/nirf/nirf-2024/dental/`, lastModified: '2024-09-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/accreditation-ranking-status/naac/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },

    // About
    { url: `${baseUrl}/about/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/vision-and-mission/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/about/our-institutions/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-management/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/our-trust/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-bds/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/dci-mds/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-bds/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/approvals-and-affiliation/affiliation-mds/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/institutional-development-plan/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/about/annual-report/`, lastModified: '2025-04-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/act-statutes/`, lastModified: '2025-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/about/annual-account-statement/`, lastModified: '2025-04-01', changeFrequency: 'yearly', priority: 0.4 },

    // Alumni
    { url: `${baseUrl}/alumni/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/alumni/alumni-association-activities/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/alumni/alumni-registration-certificate/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },

    // Research
    { url: `${baseUrl}/research/publication/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/collaboration/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research/incubation-center/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/start-up/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-development-rd-cell/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-and-dissertation/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/research/research-proposal-and-consent-forms/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutional-ethical-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/research/institutions-innovation-council-iic/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/research/mou-memorandum-of-understanding/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },

    // Facilities
    { url: `${baseUrl}/facilities/labs/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/library/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/hostel/boys-hostel/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel/girls-hostel/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/transport/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/auditorium/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/food-court/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/sports-club/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/health-facilities/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/digital-class-room/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/wi-fi-campus/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/ambulance-services/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/barrier-free-environment/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/seminar-hall/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/bank-&-post-office/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },

    // Administration
    { url: `${baseUrl}/administration/principals-message/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/administration/academic-leadership/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/administration/academic-council/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/administration/governing-body/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/administration/finance-officer/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/administration/internal-compliants-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },

    // Committees
    { url: `${baseUrl}/committee/anti-ragging-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-grievance-redressal-committee-sgrc/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/student-welfare-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/placement-cell-cdc/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/committee/ncc/nss/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/committee/finance-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/mentoring-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/examination-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/committee/hostel-advisory-&-welfare-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/sedg-cell/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/international-student-cell-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-education-&-extra-currucular-activities-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/physical-infrastructure-and-purchase-maintenance-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/disciplinary-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/patient-welfare-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/student-council/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/internal-compliants-committee-icc/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/dental-education-department/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/committee/library-and-learning-resources-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },

    // Campaign landing pages
    { url: `${baseUrl}/dental-surgery-assistant-course/`, lastModified: '2026-03-01', changeFrequency: 'weekly', priority: 0.8 },

    // City SEO pages
    { url: `${baseUrl}/coimbatore/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/erode/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/salem/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/namakkal/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tiruppur/`, lastModified: '2026-02-01', changeFrequency: 'monthly', priority: 0.7 },

    // Facilities — additional
    { url: `${baseUrl}/facilities/`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/facilities/accessibility-&-inclusion-at-jkkndch/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/facilities/privacy-policy/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.3 },

    // Standalone committee URLs
    { url: `${baseUrl}/hostel-advisory-welfare-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/physical-education-extra-currucular-activities-committee/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },

    // Others
    { url: `${baseUrl}/others/patient-safety-manual/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/blog/top-10-career-options-after-bed-2026/`, lastModified: '2026-02-20', changeFrequency: 'monthly', priority: 0.6 },

    // Information & Mandatory
    { url: `${baseUrl}/information-center/careers/`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/information-center/right-to-information-rti/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/guidelines-on-public-disclosure-by-heis/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mandatory-disclosures/letter-of-undertaking/`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
  ]

  return [...staticPages, ...blogUrls, ...eventUrls]
}
