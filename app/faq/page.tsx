import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import FAQClient from './FAQClient';
import { faqSchema } from './faqData';

export const metadata: Metadata = {
  title: 'FAQ | JKKN Dental College & Hospital',
  description:
    'Find answers to frequently asked questions about JKKN Dental College — BDS & MDS admissions, NEET cutoff, fee structure, scholarships, placements, hostel, and campus facilities.',
  keywords:
    'JKKN dental college FAQ, BDS admission questions, MDS fee structure, NEET cutoff dental, dental college scholarships, JKKN hostel facilities, dental college placements Tamil Nadu',
  openGraph: {
    title: 'FAQ | JKKN Dental College & Hospital',
    description:
      'Answers to common questions about admissions, BDS & MDS programs, fees, scholarships, placements, and campus life at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/faq/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/faq/',
  },
};

export default function FAQPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <FAQClient />
    </>
  );
}
