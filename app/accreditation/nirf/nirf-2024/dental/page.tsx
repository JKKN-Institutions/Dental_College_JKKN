import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2024/dental/' },
  title: 'NIRF 2024 Data - Dental',
  description: 'NIRF 2024 data for the Dental category, submitted by JKKN Dental College & Hospital, Komarapalayam. Download the official NIRF data PDF.',
  keywords: 'NIRF 2024, NIRF data, NIRF dental, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2024 Data - Dental | JKKN Dental College & Hospital',
    description: 'NIRF 2024 data for the Dental category, submitted by JKKN Dental College & Hospital, Komarapalayam. Download the official NIRF data PDF.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2024/dental/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2024Dental() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2024', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2024/' },
        { name: 'Dental', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2024/dental/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2024-Dental.pdf" heading="NIRF 2024 Data - Dental | JKKN Dental College & Hospital" />
    </>
  );
}
