import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2026/sdg-institution/' },
  title: 'NIRF Ranking 2026 SDG Institution | JKKN Dental College Ranking',
  description: 'JKKN Dental College NIRF 2026 SDG institution ranking. View sustainability development goals ranking and indicators per NIRF framework.',
  keywords: 'NIRF ranking, SDG ranking, sustainable development goals, NIRF 2026, JKKN ranking',
  openGraph: {
    title: 'NIRF Ranking 2026 SDG Institution | JKKN Dental College Ranking',
    description: 'JKKN Dental College NIRF 2026 SDG institution ranking. View sustainability development goals ranking and indicators per NIRF framework.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/sdg-institution/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2026SDG() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2026', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/' },
        { name: 'SDG Institution', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/sdg-institution/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2026-SDG.pdf" />
    </>
  );
}
