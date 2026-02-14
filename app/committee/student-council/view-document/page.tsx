import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Student Council Document | JKKN Dental College',
  description: 'View official Student Council document detailing roles, responsibilities, and guidelines for student representatives at JKKN.',
  keywords: 'student council document, council guidelines, student roles, student responsibilities, JKKN dental college, student governance',
};

export default function StudentCouncilViewDocument() {
  return <PdfRedirect pdfUrl="/pdf/Student-Council-ViewDocument.pdf" />;
}
