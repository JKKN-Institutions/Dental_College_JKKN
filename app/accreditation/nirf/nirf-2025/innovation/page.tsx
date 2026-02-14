import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIRF Innovation Ranking 2025 | JKKN Dental College Innovation Score',
  description: 'View JKKN Dental College NIRF 2025 innovation ranking. Check our innovation & entrepreneurship score in national ranking. Download NIRF innovation report.',
  keywords: 'NIRF innovation 2025, innovation ranking, entrepreneurship score, NIRF 2025, innovation framework',
};

export default function NIRF2025Innovation() {
  return <PdfRedirect pdfUrl="/pdf/NIRF-2025-Innovation.pdf" />;
}
