/**
 * The single FAQ list for /salem/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Are there any dental colleges in Salem?',
    a: 'Yes. There are dental institutions in and near Salem, Tamil Nadu. Within Salem city, Vinayaka Mission\'s Sankarachariyar Dental College is a private institution. Additionally, JKKN Dental College & Hospital is located approximately 60 km from Salem at Komarapalayam, Namakkal, on NH-544 (Salem-Coimbatore Highway), and is NDC-approved and NAAC accredited.',
  },
  {
    q: 'How many dental colleges are in Salem district?',
    a: 'There are dental institutions in and near Salem district. Vinayaka Mission\'s Sankarachariyar Dental College is located within Salem city. Government Medical College Salem also has dental programs. JKKN Dental College & Hospital, located approximately 60 km away at Komarapalayam, Namakkal via NH-544, is the nearest NDC-approved and NAAC accredited private dental college near Salem.',
  },
  {
    q: 'Which are the best dental colleges in Salem?',
    a: 'JKKN Dental College & Hospital is among the top dental colleges in Salem region, located approximately 60 km from Salem on NH-544. Approved by NDC, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers BDS (100 seats) and MDS with strong placement support.',
  },
  {
    q: 'How far is JKKN Dental from Salem?',
    a: 'JKKN Dental is approximately 60 km from Salem city centre, which takes about 1 hour by road via NH-544 (Salem-Coimbatore Highway) — direct route. TN State Transport buses from Salem New Bus Stand to Komarapalayam run regularly throughout the day.',
  },
  {
    q: 'What is the NEET cut-off for BDS at JKKN Dental?',
    a: 'The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle.',
  },
  {
    q: 'Does JKKN Dental have its own hospital?',
    a: 'Yes, JKKN Dental College & Hospital has its own 200+ chair dental hospital and 100+ bed facility on campus. Patients from Salem, Namakkal, and surrounding districts visit daily — with 500+ patients treated every day, learners gain extensive hands-on clinical experience from Year 1.',
  },
  {
    q: 'What MDS specialisations are available?',
    a: 'JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral Medicine & Radiology, Conservative Dentistry & Endodontics, and Periodontics. Salem learners can commute or stay on campus while accessing 500+ daily patient cases for their postgraduate research and clinical training.',
  },
  {
    q: 'Does JKKN Dental provide hostel for Salem learners?',
    a: 'Yes, JKKN Dental provides separate hostel facilities for boys and girls. Learners from Salem can also opt for daily commute as the campus is approximately 1 hour away via NH-544. College transport services are also available.',
  },
  {
    q: 'What is the BDS fee at dental colleges near Salem?',
    a: 'At JKKN Dental College & Hospital, BDS tuition fees are approximately ₹2,50,000 under Government Quota. Management quota fees are available separately. Contact +91 9345855001 or visit www.jkkn.ai/apply/jkkn-admission-2026 for the latest fee structure and 2026 admission details.',
  },
  {
    q: 'Can Salem learners get BDS admission at JKKN through NEET?',
    a: 'Yes, Salem learners can secure BDS admission at JKKN Dental College & Hospital through NEET-UG scores via Tamil Nadu DME state quota counselling or management quota. 85% of seats are allocated through state quota and 15% through All India Quota. JKKN is approximately 60 km from Salem via NH-544.',
  },
  {
    q: 'How can I apply for admission at JKKN Dental?',
    a: 'Salem learners can apply online at https://dental.jkkn.ac.in/ or visit the campus directly — approximately 1 hour via NH-544. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
];
