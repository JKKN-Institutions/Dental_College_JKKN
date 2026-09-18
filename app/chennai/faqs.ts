/**
 * The single FAQ list for /chennai/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Why do students from Chennai choose JKKN Dental College?',
    a: 'Chennai students choose JKKN Dental College & Hospital at Komarapalayam for its 200+ chair teaching hospital with 500+ daily patients, full residential campus with separate hostels, and the same DME Tamil Nadu counselling process as Chennai colleges. The campus is well connected — frequent daily trains run from Chennai to Erode Junction, 18 km from the college.',
  },
  {
    q: 'How do Chennai students reach JKKN Dental College?',
    a: 'The easiest route is by train: frequent daily express trains run from Chennai towards Coimbatore via Erode Junction, which is approximately 18 km from the campus. By road, the campus is approximately 380 km from Chennai via NH-544 through Salem — around 6.5 to 7 hours.',
  },
  {
    q: 'Is the admission process different from Chennai dental colleges?',
    a: 'No. JKKN Dental College admits BDS students through the same NEET UG and DME Tamil Nadu state counselling process used for all Tamil Nadu dental colleges, including those in Chennai. Government Quota and Management Quota options are both available.',
  },
  {
    q: 'Does JKKN Dental provide hostel for Chennai students?',
    a: 'Yes. JKKN Dental provides separate hostels for boys and girls with mess facility on a full residential campus. Most learners from Chennai stay on campus through the term and travel home during holidays using the Chennai–Erode rail line.',
  },
  {
    q: 'What is the NEET cut-off for BDS at JKKN Dental?',
    a: 'The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle.',
  },
  {
    q: 'Does JKKN Dental have its own hospital?',
    a: 'Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Learners gain hands-on clinical training from Year 1 of the BDS programme, treating patients who visit from surrounding districts every day.',
  },
  {
    q: 'What MDS specialisations are available?',
    a: 'JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral Medicine & Radiology, Conservative Dentistry & Endodontics, and Periodontics. Each department has modern learning labs, and the attached hospital ensures ample clinical cases for postgraduate research and training.',
  },
  {
    q: 'How can Chennai students apply for admission at JKKN Dental?',
    a: 'Chennai learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
  {
    q: 'What is the BDS fee at JKKN Dental College?',
    a: 'At JKKN Dental College & Hospital, BDS tuition fee is As Per Govt Norms under Government Quota and Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments) under Management Quota. Contact +91 9345855001 for the latest 2026-27 fee structure.',
  },
];
