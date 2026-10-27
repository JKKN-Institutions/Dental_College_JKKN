/**
 * Homepage FAQ - the ONE list. components/FAQSection.tsx renders it and app/page.tsx builds the
 * FAQPage JSON-LD from it, so the schema can never say something the visitor cannot read.
 *
 * Measured 2026-09-18: the homepage shipped a second, "voice-optimised" copy of these 15 answers
 * inside the JSON-LD. All 15 differed from the visible text, and two of them still carried the
 * retired "ninety-two percent placement" figure that the visible page had already replaced with
 * the NIRF-sourced 93.9%. Google's FAQ guideline is that the marked-up text must match what the
 * page shows; an AI engine reading the schema was quoting a number the page no longer made.
 *
 * Keep answers as plain strings. A trailing link is carried separately so the schema text stays
 * clean and the visible card can still link out.
 */
import collegeFacts from '@/data/collegeFacts';

export type HomeFaq = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const homeFaqs: HomeFaq[] = [
  {
    question: 'What courses are offered at JKKN Dental College & Hospital?',
    answer:
      'JKKN Dental College offers BDS (5-year undergraduate) with training across 9 departments and MDS (3-year postgraduate) in 5 specializations: Conservative Dentistry & Endodontics, Prosthodontics, Periodontics, Oral Medicine & Radiology, and Orthodontics.',
  },
  {
    question: 'Is JKKN Dental College & Hospital NDC approved?',
    answer:
      'Yes, JKKN Dental College & Hospital is fully approved by the National Dental Commission (NDC), formerly the Dental Council of India. The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and NAAC accredited (A).',
  },
  {
    question: 'What is the admission process for BDS?',
    answer:
      'BDS admission is based on NEET-UG scores through state or All India Quota counseling. Candidates need 10+2 with Physics, Chemistry, and Biology with minimum 50% marks (40% for reserved categories). After counseling allocation, complete document verification and fee payment.',
  },
  {
    question: 'What facilities does JKKN Dental College offer?',
    answer:
      'Our campus features a 200+ chair dental hospital treating 500+ patients daily, digital simulation labs, CBCT and OPG imaging, CAD/CAM laboratory, library with e-resources, research labs, separate hostels, cafeteria, sports facilities, and 24/7 Wi-Fi.',
  },
  {
    question: 'What is the placement record?',
    answer: `JKKN Dental College & Hospital reports ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch): of ${collegeFacts.placementBds.graduated} BDS graduates, ${collegeFacts.placementBds.placed} were placed and ${collegeFacts.placementBds.higherStudies} went on to higher studies. All ${collegeFacts.placementMds.graduated} MDS graduates were placed. These are the figures JKKN filed in its NIRF 2026 submission.`,
  },
  {
    question: 'What makes JKKN different from other dental colleges?',
    answer: `JKKN is an AI-integrated dental campus with 500+ daily patients, 200+ dental chairs, and ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch). Established in ${collegeFacts.foundedYear} under JKKN Institutions (since ${collegeFacts.trustFoundedYear}), it combines AI-powered diagnostics, CAD/CAM technology, and hands-on clinical training.`,
  },
  {
    question: 'Which is the best dental college in Tamil Nadu?',
    answer: `JKKN Dental College & Hospital is approved by the National Dental Commission, accredited by NAAC with an ${collegeFacts.naacGrade} Grade, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University. Established in ${collegeFacts.foundedYear}, it is sanctioned ${collegeFacts.bdsSeatCount} BDS seats and ${collegeFacts.mdsSeatCount} MDS seats across ${collegeFacts.mdsSpecialisations} specialities, runs an AI-integrated dental campus, and reports ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch). Tamil Nadu publishes no official merit ranking of its dental colleges, so compare colleges on approval, accreditation, sanctioned intake and clinical exposure.`,
  },
  {
    question: 'How does JKKN integrate AI in dental education?',
    answer:
      'JKKN uses digital dentistry across BDS and MDS: digital imaging (CBCT, OPG), CAD/CAM digital prosthetics, and AI tools for research, learning and data analysis.',
  },
  {
    question: 'What is the fee structure for BDS at JKKN Dental College?',
    answer:
      'BDS fees at JKKN Dental College vary by admission quota. Management Quota annual tuition for 2026-27 is Rs 4,50,000 (dayscholar with instruments) or Rs 5,50,000 (with hostel and instruments); Government Quota fees are as per Tamil Nadu Fee Fixation Committee norms.',
    link: { href: '/fees-structure/', label: 'See detailed fee structure' },
  },
  {
    question: 'Where is JKKN Dental College located?',
    answer:
      'JKKN Dental College is located on NH-544 (Salem-Coimbatore Highway) in Komarapalayam, Namakkal District, Tamil Nadu 638183 — approximately 18 km from Erode and 60 km from Salem.',
    link: { href: '/contact/', label: 'Get campus directions' },
  },
  {
    question: 'What are the hostel facilities at JKKN Dental College?',
    answer:
      'JKKN provides separate hostels for boys and girls with furnished rooms, mess facilities, Wi-Fi connectivity, 24/7 security, recreational areas, and easy campus access for students.',
  },
  {
    question: 'What is the NEET cutoff for JKKN Dental College?',
    answer:
      'The closing NEET score for BDS at JKKN changes every year with the counselling round and the quota (government or management), so there is no fixed cutoff. Students must qualify NEET-UG and register for Tamil Nadu state counselling or All India Quota counselling. Our admission team can tell you the latest closing scores.',
  },
  {
    question: 'How many dental colleges are there in Tamil Nadu?',
    answer:
      'Tamil Nadu has two kinds of dental colleges: those affiliated to The Tamil Nadu Dr. M.G.R. Medical University, and deemed-to-be universities that award their own degrees. JKKN Dental College & Hospital, in Komarapalayam, Namakkal District, is affiliated to the university.',
    link: { href: '/academics/details-of-academic-programs/bds/colleges-in-tamil-nadu/', label: 'See the affiliated colleges with seats and fees' },
  },
  {
    question: 'Which dental college in Tamil Nadu has the best placements?',
    answer: `JKKN Dental College and Hospital reports ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch), median salary Rs 3.6 lakh, and all ${collegeFacts.placementMds.graduated} MDS graduates placed with a median of Rs 6.0 lakh, as filed in its NIRF 2026 submission. Ask each college for the same NIRF figures to compare.`,
    link: { href: '/placements/', label: 'See the placement figures' },
  },
];

/** Same list in the {q, a} shape lib/faq.ts expects. */
export const homeFaqItems = homeFaqs.map((f) => ({ q: f.question, a: f.answer }));
