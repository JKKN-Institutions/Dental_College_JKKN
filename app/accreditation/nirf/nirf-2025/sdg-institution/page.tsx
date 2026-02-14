import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIRF SDG Ranking 2025 | JKKN Dental Sustainable Development Goals',
  description: 'View JKKN Dental College NIRF 2025 SDG institutions ranking. Check our sustainable development goals performance score. Download SDG report.',
  keywords: 'NIRF SDG 2025, sustainable development goals, SDG ranking, sustainability score, NIRF SDG institutions',
};

export default function SDGInstitution() {
  return <PdfRedirect pdfUrl="/pdf/NIRF-2025-SDG-INSTITUTIONS.pdf" />;
}
