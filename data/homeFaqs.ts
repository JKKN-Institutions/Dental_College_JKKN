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
      'Yes, JKKN Dental College & Hospital is fully approved by the National Dental Commission (NDC), formerly the Dental Council of India. The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and NAAC accredited.',
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
    answer: `JKKN Dental College & Hospital reports ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch). Alumni work at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and private practices. Many pursue higher studies abroad or establish their own clinics.`,
  },
  {
    question: 'What makes JKKN different from other dental colleges?',
    answer: `JKKN is an AI-integrated dental campus with 500+ daily patients, 200+ dental chairs, and ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch). Established in ${collegeFacts.foundedYear} under JKKN Institutions (since ${collegeFacts.trustFoundedYear}), it combines AI-powered diagnostics, CAD/CAM technology, and hands-on clinical training.`,
  },
  {
    question: 'Which is the best dental college in Tamil Nadu?',
    answer: `JKKN Dental College & Hospital is approved by the National Dental Commission, accredited by NAAC with an ${collegeFacts.naacGrade} Grade, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University. Established in ${collegeFacts.foundedYear}, it is sanctioned ${collegeFacts.bdsSeatCount} BDS seats and ${collegeFacts.mdsSeatCount} MDS seats across ${collegeFacts.mdsSpecialisations} specialities, runs an AI-integrated dental campus, and reports ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch). Tamil Nadu publishes no official merit ranking of its dental colleges; the only published ranking is NIRF, whose 2025 dental list places nine Tamil Nadu institutions in the national top 40 and does not include JKKN. Compare colleges on approval, accreditation, sanctioned intake and clinical exposure - the full NIRF list and all 22 affiliated colleges with their seats are on our Dental Colleges in Tamil Nadu page.`,
  },
  {
    question: 'How does JKKN integrate AI in dental education?',
    answer:
      'JKKN integrates AI across BDS and MDS curriculum with AI-powered diagnostic imaging (CBCT, OPG), CAD/CAM digital prosthetics, ChatGPT-assisted research, and data analytics — making it an AI-integrated dental campus.',
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
      'NEET cutoff for BDS admission at JKKN Dental College varies annually based on counseling rounds. Approximate cutoff ranges from 350 to 450 marks depending on admission quota category — government or management. Students must register for Tamil Nadu state counseling or All India Quota counseling with valid NEET-UG qualification.',
  },
  {
    question: 'How many dental colleges are there in Tamil Nadu?',
    answer:
      'Tamil Nadu has approximately 32 to 35 dental colleges approved by the National Dental Commission. This includes 3 government dental colleges and 28-32 private dental colleges across Chennai, Coimbatore, Salem, Namakkal, and other districts. JKKN Dental College is the prominent institution in Namakkal District on the Salem-Coimbatore corridor.',
  },
  {
    question: 'Which dental college in Tamil Nadu has the best placements?',
    answer: `JKKN Dental College and Hospital reports ${collegeFacts.placementOutcomeRate}% placed or in higher studies (${collegeFacts.placementBds.batch} batch) with graduates employed at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and international healthcare institutions including NHS United Kingdom. The placement portal at placements.jkkn.ac.in provides verified placement data and recruiter details.`,
  },
  {
    question: 'What is the NIRF ranking of dental colleges in Tamil Nadu?',
    answer:
      'Nine Tamil Nadu dental colleges appear in NIRF 2025 rankings: SIMATS Saveetha (#2), SRM Dental Ramapuram (#8), Sri Ramachandra (#13), Amrita Coimbatore (#14), MAHER Chennai (#16), Sree Balaji (#27), Dr. MGR University (#30), Chettinad (#32), and SRM Kattankulathur (#39). JKKN Dental College is not NIRF-ranked but holds NDC approval and NAAC A Grade accreditation.',
  },
];

/** Same list in the {q, a} shape lib/faq.ts expects. */
export const homeFaqItems = homeFaqs.map((f) => ({ q: f.question, a: f.answer }));
