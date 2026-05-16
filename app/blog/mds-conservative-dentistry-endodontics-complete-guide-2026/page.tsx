import type { Metadata } from 'next';
import MdsEndodonticsClient from './MdsEndodonticsClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableWebPageSchema,
} from '@/lib/metadata';

const PAGE_URL = 'https://dental.jkkn.ac.in/blog/mds-conservative-dentistry-endodontics-complete-guide-2026/';
const TITLE = 'MDS Endodontics 2026: Eligibility, Fees & Career Guide';
const DESCRIPTION =
  'MDS Conservative Dentistry & Endodontics 2026 — eligibility, NEET-MDS cutoff, syllabus, fees, career scope & salary. JKKN Dental College, Tamil Nadu.';

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
    question: 'What is MDS Conservative Dentistry & Endodontics?',
    answer:
      'MDS Conservative Dentistry & Endodontics is a 3-year postgraduate dental specialisation focused on the preservation of natural teeth — restorative dentistry, root canal treatment (endodontics), microendodontics, aesthetic restorations, post-endodontic rehabilitation and management of dental caries, trauma and discolouration.',
  },
  {
    question: 'What is the eligibility for MDS Conservative & Endodontics in 2026?',
    answer:
      'BDS from a Dental Council of India (DCI) recognised institution + completed 1-year compulsory rotational internship before 31st March of the admission year + permanent State Dental Council registration + valid NEET-MDS 2026 score.',
  },
  {
    question: 'How many MDS Conservative Dentistry seats are at JKKN Dental College?',
    answer:
      'JKKN Dental College & Hospital is approved by DCI for 3 MDS seats per year in Conservative Dentistry and Endodontics. Admission is through Tamil Nadu state PG dental counselling based on NEET-MDS All-India ranks, across Government, Management and NRI Quotas.',
  },
  {
    question: 'What is the career scope after MDS Endodontics in 2026?',
    answer:
      'Endodontics has the highest case volume among all dental specialisations — every general practice and corporate chain needs an endodontist for complex root canals and re-treatment cases. Options include: endodontic specialist practice, microscope-based endodontics, aesthetic restorative practice, full-mouth reconstruction collaboration, corporate dental chain consultant, dental college faculty, and overseas practice. Starting salaries: ₹70,000–₹1.2L/month; experienced microendodontists earn ₹2L–5L+ per month.',
  },
  {
    question: 'Conservative Dentistry vs Prosthodontics — which to choose?',
    answer:
      'Conservative Dentistry & Endodontics focuses on saving natural teeth — root canal treatment, restorations, aesthetic fillings, post-endodontic crowns. Prosthodontics focuses on replacing missing teeth — crowns, bridges, dentures, implants. Endodontics has the highest case volume in general dentistry (every clinic needs RCT cases); prosthodontics has higher per-case revenue from implants and full-mouth rehab. Both are strong specialisations.',
  },
  {
    question: 'Is microendodontics the future of this branch?',
    answer:
      'Yes. Dental operating microscope-based endodontics dramatically improves outcomes for complex cases — calcified canals, MB2 location, perforation repair, fractured instrument retrieval and apicoectomy. Indian patients increasingly demand microscope-assisted treatment, and microendodontics commands premium fees (₹15,000–₹40,000 per tooth in metros). MDS Endo training at modern dental colleges includes microscope-based protocols.',
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

export default function MdsEndodonticsBlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'MDS Conservative Dentistry & Endodontics Guide 2026', url: PAGE_URL },
        ]}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <MdsEndodonticsClient faqs={faqs} />
    </>
  );
}
