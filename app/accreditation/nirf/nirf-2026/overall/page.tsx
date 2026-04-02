import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF Ranking 2026 Overall | JKKN Dental College Ranking',
  description: 'JKKN Dental College NIRF 2026 overall ranking. View national ranking, performance metrics, and quality indicators per NIRF framework.',
  keywords: 'NIRF ranking, overall ranking, national ranking, NIRF 2026, JKKN ranking',
  openGraph: {
    title: 'NIRF Ranking 2026 Overall | JKKN Dental College Ranking',
    description: 'JKKN Dental College NIRF 2026 overall ranking. View national ranking, performance metrics, and quality indicators per NIRF framework.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/overall/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2026Overall() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2026', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/' },
        { name: 'Overall', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/overall/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2026-Overall.pdf" />
    </>
  );
}
