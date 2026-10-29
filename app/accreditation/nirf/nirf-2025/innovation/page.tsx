import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2025/innovation/' },
  title: 'NIRF 2025 Data - Innovation',
  description: 'NIRF 2025 Innovation data PDF of JKKN Dental College & Hospital, Komarapalayam, as submitted by the college. Download the official PDF.',
  keywords: 'NIRF 2025, NIRF innovation, NIRF data, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2025 Data - Innovation | JKKN Dental College',
    description: 'NIRF 2025 Innovation data PDF of JKKN Dental College & Hospital, Komarapalayam, as submitted by the college. Download the official PDF.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/innovation/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2025Innovation() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2025', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/' },
        { name: 'Innovation', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/innovation/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-Innovation.pdf" heading="NIRF 2025 Data - Innovation | JKKN Dental College & Hospital" />
    </>
  );
}
