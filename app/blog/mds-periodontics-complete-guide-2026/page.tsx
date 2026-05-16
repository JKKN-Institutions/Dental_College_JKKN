import type { Metadata } from 'next';
import MdsPeriodonticsClient from './MdsPeriodonticsClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableWebPageSchema,
} from '@/lib/metadata';

const PAGE_URL = 'https://dental.jkkn.ac.in/blog/mds-periodontics-complete-guide-2026/';
const TITLE = 'MDS Periodontics 2026: Eligibility, Fees & Career Guide';
const DESCRIPTION =
  'MDS Periodontics 2026 — eligibility, NEET-MDS cutoff, syllabus, fees, career scope, implant & laser scope. JKKN Dental College, Tamil Nadu.';

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
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    question: 'What is MDS Periodontics?',
    answer:
      'MDS Periodontics is a 3-year postgraduate dental specialisation focused on prevention, diagnosis and treatment of diseases affecting the gums (periodontium) and supporting tissues of teeth. Periodontists are also extensively trained in dental implant placement and periodontal regenerative surgery, making it a high-skill, high-demand specialisation in modern dentistry.',
  },
  {
    question: 'What is the eligibility for MDS Periodontics 2026?',
    answer:
      'Candidates must hold a BDS degree from a Dental Council of India (DCI) recognised institution, have completed a 1-year compulsory rotational internship before 31st March of the admission year, possess permanent State Dental Council registration, and have a valid NEET-MDS 2026 score.',
  },
  {
    question: 'How many MDS Periodontics seats are at JKKN Dental College?',
    answer:
      'JKKN Dental College & Hospital is approved by DCI for 4 MDS Periodontics seats per year. Admission is conducted through Tamil Nadu PG dental counselling based on NEET-MDS ranks, with Government, Management and NRI Quotas.',
  },
  {
    question: 'What is the career scope after MDS Periodontics in 2026?',
    answer:
      'Career options include: independent periodontal & implant practice (high revenue), implant surgery specialist, gum & smile-line aesthetic practice, laser periodontics, regenerative therapy practice (GTR, bone grafting, PRF/PRP), corporate dental chains, dental college faculty, and overseas practice. Starting salaries: ₹70,000–₹1.3L/month; experienced implant-focused periodontists earn ₹3L–8L+ per month.',
  },
  {
    question: 'Do Periodontists do dental implants?',
    answer:
      'Yes. Although every dentist can technically place implants, Periodontists and Oral Surgeons receive the most extensive surgical training for implant placement during MDS. Periodontists handle implant site preparation, bone augmentation, sinus lifts, soft-tissue management around implants, and peri-implantitis treatment. In modern practice, implant surgery is a core revenue driver for periodontists.',
  },
  {
    question: 'Periodontics vs Oral Surgery — which to choose?',
    answer:
      'Both are surgical dental specialisations. Periodontics focuses on gums, bone around teeth, periodontal regeneration and dental implants. Oral & Maxillofacial Surgery focuses on broader surgical scope — extractions, jaw fractures, orthognathic surgery, oral cancer, TMJ disorders. Periodontics has more clinic-based practice and is consistently a top revenue specialisation; OMFS leans hospital-based and has wider surgical scope.',
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
  speakableCssSelectors: ['h1', '.hero-description', 'main p'],
});

export default function MdsPeriodonticsBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'MDS Periodontics Complete Guide 2026', url: PAGE_URL },
        ]}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <MdsPeriodonticsClient faqs={faqs} />
    </>
  );
}
