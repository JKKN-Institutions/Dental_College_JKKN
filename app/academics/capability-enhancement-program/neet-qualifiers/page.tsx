import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'NEET Qualifiers - JKKN Dental College',
  description: 'View our NEET qualifiers list at JKKN Dental College. Celebrating students who excelled in NEET examinations. Check achievements now.',
  keywords: 'NEET qualifiers, dental NEET results, JKKN NEET achievers, dental entrance exam, NEET toppers, dental admissions, NEET success stories',
};

export default function NeetQualifiers() {
  return <PdfRedirect pdfUrl="/pdf/Capability-Enhancement-Program-NeetQualifiers.pdf" />;
}
