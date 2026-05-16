import type { Metadata } from 'next';
import BdsGuideClient from './BdsGuideClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableWebPageSchema,
} from '@/lib/metadata';

const PAGE_URL = 'https://dental.jkkn.ac.in/blog/bds-course-complete-guide-2026/';
const TITLE = 'BDS Course 2026: Eligibility, Fees, Syllabus & Career — Complete Guide';
const DESCRIPTION =
  'BDS course complete guide 2026 — eligibility, NEET cutoff, 5-year syllabus, fees, scholarships, internship and career scope. JKKN Dental College, Tamil Nadu.';

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
    question: 'What is the eligibility for BDS admission in 2026?',
    answer:
      'Candidates must have passed 10+2 (or equivalent) with Physics, Chemistry, Biology/Biotechnology and English with a minimum 50% aggregate in PCB (40% for SC/ST/OBC). A valid NEET-UG 2026 score is mandatory. Minimum age is 17 years as on 31st December of the admission year.',
  },
  {
    question: 'How long is the BDS course at JKKN Dental College?',
    answer:
      'BDS is a 5-year program — 4 years of academic study (8 semesters) followed by a mandatory 1-year rotational paid internship in the JKKN Dental Hospital, where students gain hands-on clinical experience with real patients across all 9 dental specialty departments.',
  },
  {
    question: 'What is the BDS fee structure at JKKN Dental College for 2026?',
    answer:
      'BDS fees at JKKN Dental College are charged as per Government of Tamil Nadu norms (Government Quota fee). Management Quota and NRI Quota fees are higher and revised annually. The official fee structure is published at dental.jkkn.ac.in/fee-structure and covers tuition, lab fee and university charges.',
  },
  {
    question: 'Is BDS a good career choice in 2026?',
    answer:
      'Yes. India has only 1 dentist per 5,000 people in rural areas (WHO recommends 1 per 7,500), creating strong long-term demand. BDS graduates can work as clinical dentists, open private clinics, pursue MDS specialisation, join hospitals, defence, public health, dental insurance, research or Ed-Tech. Government-employed BDS dentists earn ₹55,000–₹85,000/month starting; experienced private practitioners earn ₹1–5 lakh/month.',
  },
  {
    question: 'How many BDS seats are available at JKKN Dental College?',
    answer:
      'JKKN Dental College & Hospital is approved by the Dental Council of India (DCI) for 100 BDS seats per year. Seats are filled through the Tamil Nadu state counselling conducted by the Selection Committee, Directorate of Medical Education (DME) based on NEET-UG ranks.',
  },
  {
    question: 'What is the difference between BDS and MBBS?',
    answer:
      'MBBS is a 5.5-year program training general physicians for the entire human body. BDS is a 5-year program specialising in oral, dental and maxillofacial health — diagnosis, treatment and prevention of diseases of teeth, gums, jaws and related structures. BDS graduates are addressed as "Doctor" and are licensed dental surgeons recognised by the Dental Council of India.',
  },
];

const articleSchema = generateArticleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: '2026-05-16',
  dateModified: '2026-05-16',
  authorName: 'JKKN Dental Admissions Team',
  authorJobTitle: 'Admissions & Academics',
  authorCredentials:
    'Faculty and admissions advisors at JKKN Dental College & Hospital, affiliated to The Tamil Nadu Dr. M.G.R. Medical University and approved by the Dental Council of India.',
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

export default function BdsBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'BDS Course Complete Guide 2026', url: PAGE_URL },
        ]}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <BdsGuideClient faqs={faqs} />
    </>
  );
}
