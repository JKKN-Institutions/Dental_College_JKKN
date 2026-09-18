/**
 * The single FAQ list for /trichy/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Are there any dental colleges in Trichy?',
    a: 'Trichy city has very limited dental college options, and most BDS aspirants from Trichy district travel to colleges in western Tamil Nadu. JKKN Dental College & Hospital at Komarapalayam, Namakkal — approximately 145 km from Trichy via NH-44 — offers BDS with 100 seats and MDS in 5 specialisations, affiliated to TN Dr. MGR Medical University, Chennai.',
  },
  {
    q: 'Which is the best dental college near Trichy?',
    a: 'JKKN Dental College & Hospital at Komarapalayam is one of the most established NDC-approved dental colleges accessible from Trichy. Founded in 1987, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, it operates a 200+ chair teaching hospital treating 500+ patients daily.',
  },
  {
    q: 'How far is JKKN Dental College from Trichy?',
    a: 'JKKN Dental is approximately 145 km from Trichy — around 3 to 3.5 hours by road via NH-44 through Namakkal, then on to Komarapalayam. Direct government buses run from Trichy Central Bus Stand towards Salem and Erode via Namakkal throughout the day.',
  },
  {
    q: 'Can Trichy students stay in the hostel at JKKN Dental?',
    a: 'Yes. JKKN Dental provides separate hostels for boys and girls with mess facility. Most learners from Trichy stay on campus and travel home on weekends — Trichy is well connected to Namakkal and Erode by frequent buses and trains.',
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
    q: 'How can Trichy students apply for admission at JKKN Dental?',
    a: 'Trichy learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
  {
    q: 'What is the BDS fee at JKKN Dental College?',
    a: 'At JKKN Dental College & Hospital, BDS tuition fee is As Per Govt Norms under Government Quota and Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments) under Management Quota. Contact +91 9345855001 for the latest 2026-27 fee structure.',
  },
];
