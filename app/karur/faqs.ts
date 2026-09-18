/**
 * The single FAQ list for /karur/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Are there any dental colleges in Karur?',
    a: 'Karur district has no dedicated dental college, so BDS and MDS aspirants from Karur travel to neighbouring districts. The nearest established NDC-approved option is JKKN Dental College & Hospital at Komarapalayam, Namakkal — approximately 75 km away via the Erode side. It offers BDS with 100 seats and MDS in 5 specialisations, affiliated to TN Dr. MGR Medical University, Chennai.',
  },
  {
    q: 'Which is the best dental college near Karur?',
    a: 'JKKN Dental College & Hospital at Komarapalayam is one of the most established NDC-approved dental colleges accessible from Karur. Founded in 1987, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, it operates a 200+ chair teaching hospital treating 500+ patients daily.',
  },
  {
    q: 'How far is JKKN Dental College from Karur?',
    a: 'JKKN Dental is approximately 75 km from Karur — around 1.5 to 2 hours by road via the Erode side. Direct trains also run from Karur Junction to Erode Junction, which is 18 km from the campus.',
  },
  {
    q: 'Can Karur students commute daily or should they stay in the hostel?',
    a: 'Both options work. JKKN Dental provides separate hostels for boys and girls with mess facility, and many Karur learners stay on campus and travel home on weekends via bus or the Karur Junction–Erode Junction train line. Daily commute is possible but a hostel stay is more comfortable for the BDS workload.',
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
    q: 'How can Karur students apply for admission at JKKN Dental?',
    a: 'Karur learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
  {
    q: 'What is the BDS fee at JKKN Dental College?',
    a: 'At JKKN Dental College & Hospital, BDS tuition fee is As Per Govt Norms under Government Quota and Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments) under Management Quota. Contact +91 9345855001 for the latest 2026-27 fee structure.',
  },
];
