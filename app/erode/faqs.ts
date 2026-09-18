/**
 * The single FAQ list for /erode/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Are there any dental colleges in Erode?',
    a: 'Erode district has limited dental college options. The nearest well-established NDC-approved dental college to Erode is JKKN Dental College & Hospital, located just 18 km away at Komarapalayam, Namakkal, on NH-544. It offers BDS with 100 seats and MDS in 5 specializations, affiliated to TN Dr. MGR Medical University, Chennai.',
  },
  {
    q: 'How many dental colleges are in Erode district?',
    a: 'Erode district has one dental college, Nandha Dental College & Hospital, which offers BDS only. For learners seeking both BDS and MDS with a larger teaching hospital and stronger placements, JKKN Dental College & Hospital at Komarapalayam is only 18 km away via NH-544.',
  },
  {
    q: 'Which is the best dental college in Erode?',
    a: 'JKKN Dental College & Hospital, located just 18 km from Erode on NH-544, is widely regarded as one of the top dental colleges accessible from Erode. Approved by NDC, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.',
  },
  {
    q: 'How far is JKKN Dental from Erode?',
    a: 'JKKN Dental is approximately 18 km from Erode city centre, which takes about 35-40 minutes by road via NH-544 — direct highway connectivity. Regular government and private buses are available from Erode Central Bus Stand to Komarapalayam throughout the day.',
  },
  {
    q: 'What is the NEET cut-off for BDS at JKKN Dental?',
    a: 'The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle.',
  },
  {
    q: 'Does JKKN Dental have its own hospital?',
    a: 'Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Learners from Erode benefit from treating 500+ patients daily who visit from surrounding districts, gaining hands-on clinical training from Year 1 of the BDS programme.',
  },
  {
    q: 'What MDS specialisations are available?',
    a: 'JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral Medicine & Radiology, Conservative Dentistry & Endodontics, and Periodontics. Each department has dedicated senior learners, modern learning labs, and the attached hospital ensures ample clinical cases for postgraduate research and training.',
  },
  {
    q: 'Does JKKN Dental provide hostel for Erode learners?',
    a: 'Yes, JKKN Dental provides separate hostel facilities for boys and girls. Learners from Erode can also opt for daily commute as the campus is just 18 km away — about 35-40 minutes on NH-544. College transport services are available from Erode.',
  },
  {
    q: 'How can I apply for admission at JKKN Dental?',
    a: 'Erode learners can apply online at https://dental.jkkn.ac.in/ or visit the campus directly — just a 35-minute drive on NH-544. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
  {
    q: 'What is the BDS fee at dental colleges near Erode?',
    a: 'At JKKN Dental College & Hospital, BDS tuition fee is As Per Govt Norms under Government Quota and Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments) under Management Quota. Contact +91 9345855001 for the latest 2026-27 fee structure.',
  },
  {
    q: 'Which dental colleges near Erode accept NEET scores?',
    a: 'All NDC-approved dental colleges near Erode accept NEET UG scores for BDS admission through DME Tamil Nadu counselling. These include JKKN Dental College & Hospital at Komarapalayam (18 km away), KSR Institute of Dental Science at Tiruchengode, and Nandha Dental College in Erode city.',
  },
];
