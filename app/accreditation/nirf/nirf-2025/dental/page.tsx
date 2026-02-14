import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIRF Ranking 2025 Dental | JKKN Dental College National Ranking',
  description: 'JKKN Dental College NIRF 2025 ranking for dental category. View our national ranking, performance metrics, and quality indicators as per National Institutional Ranking Framework.',
  keywords: 'NIRF ranking, dental college ranking, national ranking, NIRF 2025, JKKN ranking',
};

export default function NIRF2025Dental() {
  return <PdfRedirect pdfUrl="/pdf/NIRF-2025-Dental.pdf" />;
}
