import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF Ranking 2026 Dental | JKKN Dental College Ranking',
  description: 'JKKN Dental College NIRF 2026 dental ranking. View national ranking, performance metrics, and quality indicators per NIRF framework.',
  keywords: 'NIRF ranking, dental college ranking, national ranking, NIRF 2026, JKKN ranking',
  openGraph: {
    title: 'NIRF Ranking 2026 Dental | JKKN Dental College Ranking',
    description: 'JKKN Dental College NIRF 2026 dental ranking. View national ranking, performance metrics, and quality indicators per NIRF framework.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/dental/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2026Dental() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2026', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/' },
        { name: 'Dental', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/dental/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2026-Dental.pdf" />
    </>
  );
}
