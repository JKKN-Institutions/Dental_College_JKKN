import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF SDG Ranking 2025 | JKKN Dental College',
  description: 'View JKKN Dental College NIRF 2025 SDG institutions ranking. Check our sustainable development goals performance score. Download SDG report.',
  keywords: 'NIRF SDG 2025, sustainable development goals, SDG ranking, sustainability score, NIRF SDG institutions',
  openGraph: {
    title: 'NIRF SDG Ranking 2025 | JKKN Dental College',
    description: 'View JKKN Dental College NIRF 2025 SDG institutions ranking. Check our sustainable development goals performance score. Download SDG report.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/sdg-institution/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function SDGInstitution() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2025', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/' },
        { name: 'SDG Institution', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/sdg-institution/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-SDG-INSTITUTIONS.pdf" />
    </>
  );
}
