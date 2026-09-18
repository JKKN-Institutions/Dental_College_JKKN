/**
 * The single FAQ list for /madurai/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'How many dental colleges are in Madurai?',
    a: 'Madurai has only a couple of dental colleges, so seats fill quickly and many BDS and MDS aspirants from Madurai district consider colleges in western Tamil Nadu. JKKN Dental College & Hospital at Komarapalayam, Namakkal offers BDS with 100 seats and MDS in 5 specialisations, affiliated to TN Dr. MGR Medical University, Chennai.',
  },
  {
    q: 'Which is the best dental college near Madurai?',
    a: 'JKKN Dental College & Hospital at Komarapalayam is one of the most established NDC-approved dental colleges accessible from Madurai. Founded in 1987, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, it operates a 200+ chair teaching hospital treating 500+ patients daily.',
  },
  {
    q: 'How far is JKKN Dental College from Madurai?',
    a: 'JKKN Dental is approximately 215 km from Madurai — around 4 to 4.5 hours by road via NH-44 through Dindigul and Karur, then on to Komarapalayam. Trains from Madurai Junction towards Erode Junction bring you within 18 km of the campus.',
  },
  {
    q: 'Can Madurai students stay in the hostel at JKKN Dental?',
    a: 'Yes. JKKN Dental provides separate hostels for boys and girls with mess facility. Most learners from Madurai stay on campus and travel home during holidays — Madurai is well connected to Erode and Karur by frequent buses and trains.',
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
    q: 'How can Madurai students apply for admission at JKKN Dental?',
    a: 'Madurai learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
  {
    q: 'What is the BDS fee at JKKN Dental College?',
    a: 'At JKKN Dental College & Hospital, BDS tuition fee is As Per Govt Norms under Government Quota and Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments) under Management Quota. Contact +91 9345855001 for the latest 2026-27 fee structure.',
  },
];
