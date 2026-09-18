/**
 * The single FAQ list for /kerala/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Can Kerala students join BDS at JKKN Dental College in Tamil Nadu?',
    a: 'Yes. Students from Kerala are admitted to JKKN Dental College & Hospital under the Management Quota with NEET UG qualification. The Government Quota seats are filled through DME Tamil Nadu state counselling for Tamil Nadu students, while Management Quota admission is open to students from Kerala and other states.',
  },
  {
    q: 'How far is JKKN Dental College from Kerala?',
    a: 'JKKN Dental College at Komarapalayam, Namakkal is approximately 165 km from Palakkad, approximately 240 km from Thrissur, and approximately 300 km from Kochi. Most Kerala–Chennai trains stop at Erode Junction, which is 18 km from the campus.',
  },
  {
    q: 'How do Kerala students travel to JKKN Dental College?',
    a: 'The easiest route is by train — the Kerala–Chennai main rail line passes through Palakkad, Coimbatore and Tiruppur to Erode Junction, 18 km from the campus. By road, take NH-544 from Palakkad through Coimbatore towards Salem; Komarapalayam is on NH-544 itself.',
  },
  {
    q: 'Does JKKN Dental provide hostel for Kerala students?',
    a: 'Yes. JKKN Dental provides separate hostels for boys and girls with mess facility on a full residential campus. Learners from Kerala stay on campus through the term and travel home during holidays on the Kerala–Chennai rail line via Erode Junction.',
  },
  {
    q: 'Is BDS at JKKN taught in English?',
    a: 'Yes. The BDS and MDS programmes at JKKN Dental College are taught in English, as in all NDC-approved dental colleges in India, so Kerala students face no language barrier in academics. The hospital’s patient base is largely Tamil-speaking, which learners pick up naturally during clinical years.',
  },
  {
    q: 'Can students from Bengaluru and other states also apply?',
    a: 'Yes. Students from Karnataka, including Bengaluru, and from other states are admitted under the Management Quota with NEET UG qualification — the same route as Kerala students. Call +91 9345855001 for seat availability.',
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
    q: 'What is the BDS fee for Kerala students at JKKN Dental College?',
    a: 'Under the Management Quota, BDS tuition fee at JKKN Dental College & Hospital is Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments). Contact +91 9345855001 for the latest 2026-27 fee structure.',
  },
];
