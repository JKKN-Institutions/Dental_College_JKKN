import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2025/dental/' },
  title: 'NIRF 2025 Data - Dental',
  description: 'JKKN Dental College & Hospital took part in NIRF India Rankings 2025, Dental category. Download the data the college submitted to NIRF.',
  keywords: 'NIRF 2025, NIRF data, NIRF dental, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2025 Data - Dental | JKKN Dental College & Hospital',
    description: 'JKKN Dental College & Hospital took part in NIRF India Rankings 2025, Dental category. Download the data the college submitted to NIRF.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/dental/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2025Dental() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2025', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/' },
        { name: 'Dental', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2025/dental/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-Dental.pdf" heading="NIRF 2025 Data - Dental | JKKN Dental College & Hospital" />
    </>
  );
}
