import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'BDS Syllabus - JKKN Dental College',
  description: 'Access complete BDS syllabus at JKKN Dental College. Comprehensive curriculum for Bachelor of Dental Surgery program. Download now.',
  keywords: 'BDS syllabus, Bachelor of Dental Surgery curriculum, dental undergraduate syllabus, JKKN BDS program, dental course structure, BDS academics',
};

export default function BDSSyllabus() {
  return <PdfRedirect pdfUrl="/pdf/BDS-syllabus.pdf" />;
}
