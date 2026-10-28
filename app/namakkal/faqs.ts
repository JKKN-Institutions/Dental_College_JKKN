/**
 * The single FAQ list for /namakkal/ - rendered by page.tsx AND turned into FAQPage JSON-LD by
 * layout.tsx. Before 2026-09-18 the layout held its own hand-written copy of these answers and the two
 * had drifted: Google requires the marked-up answer to match the visible one.
 */
import type { FaqItem } from '@/lib/faq';

// voice = the spoken Tanglish form, printed under the answer as "Also asked"; it is not part of the JSON-LD.
export const faqs: (FaqItem & { voice?: string })[] = [
  {
    q: 'Is there a dental college in Namakkal?',
    a: 'Yes. JKKN Dental College & Hospital is a National Dental Commission approved dental college in Namakkal district, located at Komarapalayam on NH-544. Approved by the National Dental Commission (NDC), formerly the Dental Council of India and affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers BDS (100 seats) and MDS (5 specializations) with a 200-chair teaching hospital treating 500+ patients daily.',
  },
  {
    q: 'Which is the best dental college in Namakkal district?',
    a: 'JKKN Dental College & Hospital is a National Dental Commission approved dental college in Namakkal district. Located at Komarapalayam on NH-544, it is NDC approved, NAAC accredited (A), and a NDC-approved dental college in Namakkal district. It runs a 200+ chair teaching hospital on an AI-integrated campus and has offered dental education since 1987; Namakkal district has three NDC-approved dental colleges in all.',
  },
  {
    q: 'How far is JKKN Dental College from Namakkal city?',
    a: 'JKKN Dental College & Hospital is located within Namakkal district at Komarapalayam on NH-544. From Namakkal town, the campus is approximately 65 km via Tiruchengode, about 1.5 hours by road. Regular bus services are available from Namakkal to Komarapalayam via Tiruchengode throughout the day.',
  },
  {
    q: 'What is the NEET cut-off for BDS at JKKN Dental?',
    a: 'The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on Tamil Nadu DME counselling rounds. NEET 2026 is scheduled for 3 May 2026. JKKN-specific cutoff ranks for 2026-27 will be updated after counselling at www.jkkn.ai/apply/jkkn-admission-2026. Contact the admission office at +91 9345855001 for the latest information.',
  },
  {
    q: 'Does JKKN Dental have its own hospital?',
    a: 'Yes. JKKN Dental College & Hospital has a fully equipped 200-chair dental hospital with 100+ inpatient beds on the same campus in Namakkal district. Being in Namakkal district, the hospital draws a large patient base from the local community — learners treat 500+ patients daily and gain extensive clinical skills from their very first year. (confirmed by the college office, 2026)',
  },
  {
    q: 'What MDS specialisations are available?',
    a: 'JKKN Dental College & Hospital, Namakkal district, offers MDS in five specialisations: Orthodontics and Dentofacial Orthopaedics, Prosthodontics and Crown and Bridge, Oral Medicine and Radiology, Conservative Dentistry and Endodontics, and Periodontics. MDS learners benefit from high patient volume and diverse clinical cases at the attached hospital.',
  },
  {
    q: 'Does JKKN Dental provide hostel for learners?',
    a: 'Yes. JKKN Dental provides separate hostel facilities for boys and girls with all amenities. Learners from Namakkal city can reach the campus in approximately 1.5 hours. College transport services connecting Namakkal district areas are also available.',
  },
  {
    q: 'How can I apply for admission at JKKN Dental?',
    a: 'Learners can apply online at https://dental.jkkn.ac.in/ or visit the campus in Komarapalayam, Namakkal district. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
  },
  {
    q: 'What is the fee structure for BDS at JKKN Dental College?',
    a: 'Management-quota BDS tuition at JKKN Dental College & Hospital for 2026-27 is Rs 4,50,000 a year for day scholars and Rs 5,50,000 with hostel, instruments included; government-quota fees follow government norms. Management-quota MDS tuition is Rs 8,50,000 a year. Full details: dental.jkkn.ac.in/fee-structure/ or +91 9345855001.',
  },
  {
    q: 'What are the placements from JKKN Dental College?',
    a: 'JKKN Dental College & Hospital, Namakkal district, reports 93.9% placed or in higher studies (2024-25 batch): of 99 BDS graduates, 75 were placed and 18 went on to higher studies, with a median salary of Rs 3,60,000, as filed in its NIRF 2026 submission.',
  },
  {
    q: 'What is the NAAC grade of JKKN Dental College & Hospital?',
    a: "JKKN Dental College & Hospital holds NAAC 'A' grade with a CGPA of 3.01, valid up to 26 February 2030, as published on its NAAC accreditation page. It is also approved by the National Dental Commission and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    voice: 'JKKN Dental NAAC grade enna?',
  },
  {
    q: 'How many MDS seats does JKKN Dental College have in each speciality?',
    a: "JKKN Dental College & Hospital holds 18 MDS seats in the university's 2025-26 matrix: Conservative Dentistry and Endodontics 5, Orthodontics and Dentofacial Orthopaedics 5, Prosthodontics and Crown & Bridge 3, Oral Medicine & Radiology 3, and Periodontology 2. Management-quota MDS tuition is Rs 8,50,000 a year.",
    voice: 'JKKN Dental la MDS seats evlo?',
  },
];
