import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2025/overall/' },
  title: 'NIRF 2025 Data - Overall',
  description: 'NIRF 2025 Overall data PDF of JKKN Dental College & Hospital, Komarapalayam, as submitted by the college. Download the official PDF.',
  keywords: 'NIRF 2025, NIRF overall, NIRF data, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2025 Data - Overall | JKKN Dental College',
    description: 'NIRF 2025 Overall data PDF of JKKN Dental College & Hospital, Komarapalayam, as submitted by the college. Download the official PDF.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/overall/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2025Overall() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2025', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/' },
        { name: 'Overall', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/overall/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-OVERALL.pdf" heading="NIRF 2025 Data - Overall | JKKN Dental College & Hospital" />
    </>
  );
}
