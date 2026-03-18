import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF Overall Ranking 2025 | JKKN Dental College National Position',
  description: 'View JKKN Dental College NIRF 2025 overall ranking report. Check our comprehensive national institutional ranking score. Download official NIRF 2025 data.',
  keywords: 'NIRF 2025 overall, overall ranking, national ranking 2025, NIRF score, college ranking',
  openGraph: {
    title: 'NIRF Overall Ranking 2025 | JKKN Dental College National Position',
    description: 'View JKKN Dental College NIRF 2025 overall ranking report. Check our comprehensive national institutional ranking score. Download official NIRF 2025 data.',
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
      <PdfRedirect pdfUrl="/pdf/NIRF-2025-OVERALL.pdf" />
    </>
  );
}
