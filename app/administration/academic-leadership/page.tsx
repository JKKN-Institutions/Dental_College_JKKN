import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Academic Leadership | JKKN Dental College',
  description: 'Meet the academic leadership team at JKKN Dental College, committed to excellence in dental education and institutional development.',
  keywords: 'Academic Leadership, JKKN Dental College, dental college leadership, academic administration, dental education leaders, department heads',
};

export default function AcademicLeadership() {
  return <PdfRedirect pdfUrl="/pdf/Academic-Leadership.pdf" />;
}
