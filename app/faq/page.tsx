import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import FAQClient from './FAQClient';
import { faqSchema } from './faqData';

const PAGE_URL = 'https://dental.jkkn.ac.in/faq/';
const PAGE_TITLE = 'FAQ | JKKN Dental College & Hospital';
const PAGE_DESCRIPTION =
  'Find answers to frequently asked questions about JKKN Dental College — BDS & MDS admissions, NEET cutoff, fee structure, scholarships, placements, hostel, and campus facilities.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    'JKKN dental college FAQ, BDS admission questions, MDS fee structure, NEET cutoff dental, dental college scholarships, JKKN hostel facilities, dental college placements Tamil Nadu',
  openGraph: {
    title: PAGE_TITLE,
    description:
      'Answers to common questions about admissions, BDS & MDS programs, fees, scholarships, placements, and campus life at JKKN Dental College.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

// Measured 2026-09-18: this page shipped FAQPage alone - no BreadcrumbList, no WebPage - and GSC
// reported the URL as "unknown to Google". The two nodes below are what every other page carries.
const breadcrumbSchema = generateBreadcrumbSchema('/faq/');
const webPageSchema = generateSpeakableWebPageSchema({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  speakableCssSelectors: ['h1', '.faq-answer'],
});

export default function FAQPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={faqSchema} />
      <FAQClient />
    </>
  );
}
