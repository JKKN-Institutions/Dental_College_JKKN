import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2026/innovation/' },
  title: 'NIRF 2026 Data Submitted - Innovation',
  description: 'NIRF 2026 Innovation data submitted by JKKN Dental College & Hospital, Komarapalayam, to NIRF. Download the official PDF.',
  keywords: 'NIRF 2026, NIRF data submitted, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2026 Data Submitted - Innovation | JKKN Dental College',
    description: 'NIRF 2026 Innovation data submitted by JKKN Dental College & Hospital, Komarapalayam, to NIRF. Download the official PDF.',
    url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/innovation/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NIRF2026Innovation() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NIRF', url: 'https://dental.jkkn.ac.in/accreditation/nirf/' },
        { name: 'NIRF 2026', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/' },
        { name: 'Innovation', url: 'https://dental.jkkn.ac.in/accreditation/nirf/nirf-2026/innovation/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/NIRF-2026-Innovation.pdf" heading="NIRF 2026 Data Submitted - Innovation | JKKN Dental College & Hospital" />
    </>
  );
}
