import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF Ranking 2025 Dental | JKKN Dental College Ranking',
  description: 'JKKN Dental College NIRF 2025 ranking for dental category. View our national ranking, performance metrics, and quality indicators as per National Institutional Ranking Framework.',
  keywords: 'NIRF ranking, dental college ranking, national ranking, NIRF 2025, JKKN ranking',
  openGraph: {
    title: 'NIRF Ranking 2025 Dental | JKKN Dental College Ranking',
    description: 'JKKN Dental College NIRF 2025 ranking for dental category. View our national ranking, performance metrics, and quality indicators as per National Institutional Ranking Framework.',
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
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-Dental.pdf" />
    </>
  );
}
