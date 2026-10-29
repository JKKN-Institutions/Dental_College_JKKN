import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  alternates: { canonical: '/accreditation/nirf/nirf-2026/overall/' },
  title: 'NIRF 2026 Data Submitted - Overall',
  description: 'NIRF 2026 Overall data submitted by JKKN Dental College & Hospital, Komarapalayam, to NIRF. Download the official PDF.',
  keywords: 'NIRF 2026, NIRF data submitted, JKKN Dental College NIRF',
  openGraph: {
    title: 'NIRF 2026 Data Submitted - Overall | JKKN Dental College',
    description: 'NIRF 2026 Overall data submitted by JKKN Dental College & Hospital, Komarapalayam, to NIRF. Download the official PDF.',
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
      <PdfRedirect pdfUrl="/pdf/NIRF-2026-Overall.pdf" heading="NIRF 2026 Data Submitted - Overall | JKKN Dental College & Hospital" />
    </>
  );
}
