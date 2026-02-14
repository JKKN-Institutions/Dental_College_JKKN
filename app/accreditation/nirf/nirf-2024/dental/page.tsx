import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIRF Ranking 2024 Dental | JKKN Dental College National Ranking',
  description: 'View JKKN Dental College NIRF 2024 dental ranking report. Check our national institutional ranking framework score and position. Download official NIRF data.',
  keywords: 'NIRF ranking 2024, dental college ranking, national ranking, NIRF score, college ranking India',
};

export default function NIRF2024Dental() {
  return <PdfRedirect pdfUrl="/pdf/NIRF-2024-Dental.pdf" />;
}
