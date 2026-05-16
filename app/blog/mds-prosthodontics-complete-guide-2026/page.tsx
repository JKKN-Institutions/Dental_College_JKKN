import type { Metadata } from 'next';
import MdsProsthodonticsClient from './MdsProsthodonticsClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableWebPageSchema,
} from '@/lib/metadata';

const PAGE_URL = 'https://dental.jkkn.ac.in/blog/mds-prosthodontics-complete-guide-2026/';
const TITLE = 'MDS Prosthodontics 2026: Eligibility, Fees & Career Guide';
const DESCRIPTION =
  'MDS Prosthodontics Crown & Bridge 2026 — eligibility, NEET-MDS cutoff, syllabus, fees, career scope and salary. JKKN Dental College, Tamil Nadu.';

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
    question: 'What is MDS Prosthodontics Crown & Bridge?',
    answer:
      'MDS Prosthodontics & Crown and Bridge is a 3-year postgraduate dental specialisation focused on the design, fabrication and placement of dental prostheses — crowns, bridges, complete and partial dentures, dental implants, and maxillofacial prostheses. Prosthodontists restore missing teeth, lost oral structures and damaged smile aesthetics.',
  },
  {
    question: 'What is the eligibility for MDS Prosthodontics 2026?',
    answer:
      'BDS from a Dental Council of India (DCI) recognised institution + completed 1-year compulsory rotational internship before 31st March of the admission year + valid NEET-MDS 2026 score + permanent State Dental Council registration at the time of admission.',
  },
  {
    question: 'How many MDS Prosthodontics seats are at JKKN Dental College?',
    answer:
      'JKKN Dental College & Hospital is approved by DCI for 4 MDS seats per year in Prosthodontics, Crown and Bridge. Admission is through Tamil Nadu state PG dental counselling based on NEET-MDS All-India ranks. Government Quota, Management Quota and NRI Quota categories are available.',
  },
  {
    question: 'What is the career scope after MDS Prosthodontics?',
    answer:
      'Strong demand career options: full-mouth rehabilitation specialist, implant prosthodontist, smile-design clinician, maxillofacial prosthodontist (cancer rehab cases), dental college faculty, consultant at corporate dental chains (Clove, Apollo White, FMS), CAD/CAM digital workflow specialist, dental industry roles, and overseas practice. Starting salaries: ₹70,000–₹1.3L/month; experienced implant prosthodontists earn ₹2.5L–8L+ per month in metro practices.',
  },
  {
    question: 'Why is MDS Prosthodontics a good specialisation in 2026?',
    answer:
      'India\'s ageing population, rising disposable income, dental tourism growth and the implant boom (estimated 30%+ annual growth in implant procedures) make prosthodontics one of the highest-revenue dental specialisations. Full-mouth rehabilitation, all-on-4 implants, digital smile design and CAD/CAM workflows drive consistent premium-case demand in urban and Tier-2 markets.',
  },
  {
    question: 'What is the difference between Prosthodontics and Conservative Dentistry?',
    answer:
      'Conservative Dentistry & Endodontics deals with saving natural teeth — root canals, restorations, aesthetic fillings. Prosthodontics deals with replacing missing teeth or restoring large structural damage — crowns, bridges, dentures, implants, maxillofacial prostheses. They are complementary specialisations and often collaborate in full-mouth treatment plans.',
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

export default function MdsProsthodonticsBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'MDS Prosthodontics Complete Guide 2026', url: PAGE_URL },
        ]}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <MdsProsthodonticsClient faqs={faqs} />
    </>
  );
}
