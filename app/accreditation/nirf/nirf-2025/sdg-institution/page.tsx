import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2025/sdg-institution/' },
  title: 'NIRF 2025 Data - SDG Institutions',
  description: 'NIRF 2025 SDG Institutions data PDF of JKKN Dental College & Hospital, Komarapalayam, as submitted by the college. Download the official PDF.',
  keywords: 'NIRF 2025, NIRF SDG institutions, NIRF data, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2025 Data - SDG Institutions | JKKN Dental College',
    description: 'NIRF 2025 SDG Institutions data PDF of JKKN Dental College & Hospital, Komarapalayam, as submitted by the college. Download the official PDF.',
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
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-SDG-INSTITUTIONS.pdf" heading="NIRF 2025 Data - SDG Institutions | JKKN Dental College & Hospital" />
    </>
  );
}
