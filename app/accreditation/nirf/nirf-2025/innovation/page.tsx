import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF Innovation Ranking 2025 | JKKN Dental College Innovation Score',
  description: 'View JKKN Dental College NIRF 2025 innovation ranking. Check our innovation & entrepreneurship score in national ranking. Download NIRF innovation report.',
  keywords: 'NIRF innovation 2025, innovation ranking, entrepreneurship score, NIRF 2025, innovation framework',
  openGraph: {
    title: 'NIRF Innovation Ranking 2025 | JKKN Dental College Innovation Score',
    description: 'View JKKN Dental College NIRF 2025 innovation ranking. Check our innovation & entrepreneurship score in national ranking. Download NIRF innovation report.',
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
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-Innovation.pdf" />
    </>
  );
}
