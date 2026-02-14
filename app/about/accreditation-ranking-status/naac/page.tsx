import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAAC Accreditation Status | JKKN Dental College Quality Rating',
  description: 'View JKKN Dental College NAAC accreditation certificate and quality assessment report. Check our NAAC grade and ranking. Download official NAAC documents.',
  keywords: 'NAAC accreditation, NAAC certificate, quality assessment, NAAC grade, college ranking',
};

export default function NAAC() {
  return <PdfRedirect pdfUrl="/pdf/NAAC.pdf" />;
}
