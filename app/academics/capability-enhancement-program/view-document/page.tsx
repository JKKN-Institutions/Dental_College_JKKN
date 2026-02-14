import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Capability Enhancement Program Document - JKKN Dental College',
  description: 'View detailed capability enhancement program documentation at JKKN Dental College. Access comprehensive information on student development initiatives. Read now.',
  keywords: 'capability enhancement document, program details, JKKN training programs, student development, skill enhancement documentation, academic programs',
};

export default function ViewDocument() {
  return <PdfRedirect pdfUrl="/pdf/Capability-Enhancement-Program-ViewDocument.pdf" />;
}
