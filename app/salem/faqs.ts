/**
 * The single FAQ list for /salem/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

export const faqs: FaqItem[] = [
  {
    q: 'Are there any dental colleges in Salem?',
    a: 'Yes. Salem district has one dental college, Vinayaka Mission\'s Sankarachariyar Dental College at Ariyanur (a deemed-university college offering BDS and MDS). Outside the district, JKKN Dental College & Hospital is located approximately 60 km from Salem at Komarapalayam, Namakkal, on NH-544 (Salem-Coimbatore Highway), and is NDC-approved and NAAC accredited.',
  },
  {
    q: 'How many dental colleges are in Salem district?',
    a: 'Salem district has one dental college, Vinayaka Mission\'s Sankarachariyar Dental College at Ariyanur (BDS and MDS). The dental colleges nearest to Salem outside the district are in Namakkal district: JKKN Dental College & Hospital at Komarapalayam (about 60 km from Salem via NH-544; NDC-approved, NAAC accredited, BDS and MDS), and KSR Institute of Dental Science and Research and Vivekanandha Dental College for Women, both at Tiruchengode.',
  },
  {
    q: 'What are the BDS colleges in and around Salem?',
    a: 'Four BDS colleges serve learners from Salem. In neighbouring Namakkal district are JKKN Dental College & Hospital at Komarapalayam (about 60 km from Salem on NH-544, BDS 100 seats and MDS), KSR Institute of Dental Science and Research at Tiruchengode (BDS 100 seats and MDS) and Vivekanandha Dental College for Women at Tiruchengode (women only, BDS 100 seats and MDS). Within Salem district is Vinayaka Mission\'s Sankarachariyar Dental College at Ariyanur (BDS 100 seats and MDS), a constituent college of a deemed-to-be university.',
  },
  {
    q: 'How are BDS seats at JKKN Dental filled for Salem students?',
    a: 'JKKN Dental College & Hospital is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, so its BDS seats, both Government Quota and Management Quota, are filled through Tamil Nadu DME NEET UG counselling. Government Quota tuition is Rs. 2,50,000 a year (DME prospectus 2025-26); Management Quota tuition for 2026-27 is Rs. 4,50,000 a year for day scholars. As a minority institution, JKKN fills its seats 50:50 between the two quotas.',
  },
  {
    q: 'Which are the best dental colleges in Salem?',
    a: 'JKKN Dental College & Hospital at Komarapalayam, Namakkal district, about 60 km from Salem on NH-544, offers both BDS and MDS: established 1987, NDC approved, NAAC accredited, affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, with BDS (100 seats), MDS (18 seats, 5 specialisations), a 200+ chair teaching hospital and 93.9% of its 2024-25 batch placed or in higher studies. Salem district itself has one dental college, Vinayaka Mission\'s Sankarachariyar Dental College at Ariyanur (BDS and MDS).',
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
    a: 'At JKKN Dental College & Hospital, BDS tuition is Rs. 2,50,000 a year under Government Quota (the fee the Fee Committee fixes for every self-financing dental college in Tamil Nadu, DME prospectus 2025-26), and Rs. 4,50,000 a year (day scholar, with instruments) or Rs. 5,50,000 a year (with hostel and instruments) under Management Quota, as published on the fee structure page for 2026-27. Contact +91 9345855001 or visit www.jkkn.ai/apply/jkkn-admission-2026 for 2026 admission details.',
  },
  {
    q: 'Can Salem learners get BDS admission at JKKN through NEET?',
    a: 'Yes, Salem learners can secure BDS admission at JKKN Dental College & Hospital through NEET-UG scores via Tamil Nadu DME state quota counselling or the management quota; the current seat split by quota is published on the admissions page. JKKN is approximately 60 km from Salem via NH-544.',
  },
  {
    q: 'How can I apply for admission at JKKN Dental?',
    a: 'Salem learners can apply online at https://dental.jkkn.ac.in/ or visit the campus directly — approximately 1 hour via NH-544. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
];
