import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIRF Overall Ranking 2025 | JKKN Dental College National Position',
  description: 'View JKKN Dental College NIRF 2025 overall ranking report. Check our comprehensive national institutional ranking score. Download official NIRF 2025 data.',
  keywords: 'NIRF 2025 overall, overall ranking, national ranking 2025, NIRF score, college ranking',
};

export default function NIRF2025Overall() {
  return <PdfRedirect pdfUrl="/pdf/NIRF-2025-OVERALL.pdf" />;
}
