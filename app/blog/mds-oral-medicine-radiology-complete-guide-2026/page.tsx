import type { Metadata } from 'next';
import MdsOralMedicineClient from './MdsOralMedicineClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableWebPageSchema,
} from '@/lib/metadata';

const PAGE_URL = 'https://dental.jkkn.ac.in/blog/mds-oral-medicine-radiology-complete-guide-2026/';
const TITLE = 'MDS Oral Medicine & Radiology 2026: Complete Guide';
const DESCRIPTION =
  'MDS Oral Medicine & Radiology 2026 — eligibility, NEET-MDS cutoff, syllabus, fees, career scope, CBCT & oral cancer screening. JKKN Dental College, Tamil Nadu.';

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
    question: 'What is MDS Oral Medicine & Radiology?',
    answer:
      'MDS Oral Medicine & Radiology is a 3-year postgraduate dental specialisation focused on diagnosis and non-surgical management of diseases of the oral cavity, jaws, salivary glands and temporomandibular joints — combined with dental and maxillofacial imaging (intra-oral radiography, OPG, CBCT, ultrasound, MRI/CT interpretation). Oral physicians are the "diagnosticians" of dentistry.',
  },
  {
    question: 'What is the eligibility for MDS Oral Medicine & Radiology 2026?',
    answer:
      'BDS from a Dental Council of India (DCI) recognised institution + completed 1-year compulsory rotational internship before 31st March of the admission year + permanent State Dental Council registration + valid NEET-MDS 2026 score.',
  },
  {
    question: 'How many MDS Oral Medicine seats are at JKKN Dental College?',
    answer:
      'JKKN Dental College & Hospital is approved by DCI for 3 MDS seats per year in Oral Medicine and Radiology. Admission is through Tamil Nadu state PG dental counselling based on NEET-MDS All-India ranks, across Government, Management and NRI Quotas.',
  },
  {
    question: 'What is the career scope after MDS Oral Medicine & Radiology in 2026?',
    answer:
      'Career options include: oral physician at multi-specialty dental hospitals, dental & maxillofacial imaging centre (CBCT, OPG specialist), oral cancer screening programs, head & neck oncology team member, dental college faculty, medico-legal forensic dentistry, telemedicine teleradiology, and academic/research roles. Starting salaries: ₹55,000–₹90,000/month; experienced oral medicine consultants and CBCT specialists earn ₹1.5L–4L+ per month.',
  },
  {
    question: 'Is Oral Medicine & Radiology a non-clinical specialisation?',
    answer:
      'No — it is highly clinical, just non-surgical. Oral physicians diagnose and medically manage a wide range of conditions: oral cancers and pre-cancerous lesions, oral submucous fibrosis, oral lichen planus, candidiasis, salivary gland disorders, TMJ disorders, orofacial pain, oral manifestations of systemic diseases (diabetes, HIV, autoimmune disorders), and burning mouth syndrome. They also interpret all dental imaging including CBCT for the entire dental team.',
  },
  {
    question: 'Why is Oral Medicine important in India?',
    answer:
      'India has among the highest oral cancer burdens globally — driven by tobacco, areca nut and bidi use. Oral physicians are central to early detection, screening and management of oral cancer and pre-cancerous conditions. With increasing population-level screening programs, CBCT becoming routine in implant and complex dental cases, and AI-assisted oral lesion detection emerging, demand for oral medicine specialists is steadily rising.',
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

export default function MdsOralMedicineBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'MDS Oral Medicine & Radiology Guide 2026', url: PAGE_URL },
        ]}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <MdsOralMedicineClient faqs={faqs} />
    </>
  );
}
