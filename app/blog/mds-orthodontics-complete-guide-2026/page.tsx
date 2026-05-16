import type { Metadata } from 'next';
import MdsOrthodonticsClient from './MdsOrthodonticsClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableWebPageSchema,
} from '@/lib/metadata';

const PAGE_URL = 'https://dental.jkkn.ac.in/blog/mds-orthodontics-complete-guide-2026/';
const TITLE = 'MDS Orthodontics 2026: Eligibility, Fees, Syllabus & Career Guide';
const DESCRIPTION =
  'MDS Orthodontics & Dentofacial Orthopedics 2026 — eligibility, NEET-MDS cutoff, 3-year syllabus, fees, scholarships, career scope and salary. JKKN Dental College, Tamil Nadu.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    siteName: 'JKKN Dental College & Hospital',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    question: 'What is the eligibility for MDS Orthodontics in 2026?',
    answer:
      'Candidates must hold a BDS degree from a Dental Council of India (DCI) recognised college and have completed a 1-year rotational internship before 31st March of the admission year. A valid NEET-MDS 2026 score is mandatory. Permanent registration with the State Dental Council is required at the time of admission.',
  },
  {
    question: 'How long is the MDS Orthodontics course at JKKN Dental College?',
    answer:
      'MDS Orthodontics & Dentofacial Orthopedics is a full-time 3-year postgraduate program. The curriculum follows the Dental Council of India PG Regulations and the syllabus of The Tamil Nadu Dr. M.G.R. Medical University. It includes pre-clinical training, clinical case management, library dissertation and a final university examination.',
  },
  {
    question: 'How many MDS Orthodontics seats are available at JKKN?',
    answer:
      'JKKN Dental College & Hospital is approved by the DCI for 4 MDS seats per year in Orthodontics and Dentofacial Orthopedics. Out of total 18 MDS seats across 5 specialisations, Orthodontics is one of the most competitive — typically filled in the early rounds of Tamil Nadu PG counselling.',
  },
  {
    question: 'What is the career scope after MDS Orthodontics in 2026?',
    answer:
      'MDS Orthodontics is consistently rated among the highest-earning dental specialisations. Career options include: independent ortho practice, consultant ortho at multi-specialty clinics, dental college faculty (Senior Lecturer → Reader → Professor), corporate dental chains (Clove, Apollo White, FMS), aligner-tech companies (Invisalign, ClearPath), defence/Railways dental officer, and overseas practice after credential exams. Starting salaries for MDS Ortho range from ₹80,000–₹1.5L/month; experienced ortho consultants earn ₹3L–10L+ per month.',
  },
  {
    question: 'Is MDS Orthodontics worth pursuing after BDS?',
    answer:
      'Yes — orthodontics is one of the most in-demand dental specialisations in India. Demand drivers include rising aesthetic awareness, paediatric orthodontic intervention, adult clear-aligner therapy, and dentofacial orthopedic referrals. ROI on MDS Ortho is among the highest in dentistry: most graduates recover their investment within 3–4 years of independent practice. It also opens doors to academics and research.',
  },
  {
    question: 'What is the NEET-MDS cutoff for Orthodontics admission?',
    answer:
      'NEET-MDS qualifying percentile is 50th for General/EWS, 40th for SC/ST/OBC and 45th for PwD (subject to NBE/DCI revisions). However, closing ranks for Orthodontics in Tamil Nadu private dental colleges have historically been highly competitive — often within the top 5,000 NEET-MDS All-India ranks for Government Quota seats. Refer to tnmedicalselection.net for the exact current-year cutoff.',
  },
];

const articleSchema = generateArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: '2026-05-16',
  dateModified: '2026-05-16',
  authorName: 'JKKN Dental Admissions Team',
  authorJobTitle: 'PG Admissions & Academics',
  authorCredentials:
    'PG admissions and academic-advisory team at JKKN Dental College & Hospital, affiliated to The Tamil Nadu Dr. M.G.R. Medical University and approved by the Dental Council of India.',
});

const faqSchema = generateFAQSchema(faqs);

const speakableSchema = generateSpeakableWebPageSchema({
  title: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: '2026-05-16',
  dateModified: '2026-05-16',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function MdsOrthodonticsBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'MDS Orthodontics Complete Guide 2026', url: PAGE_URL },
        ]}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <MdsOrthodonticsClient faqs={faqs} />
    </>
  );
}
