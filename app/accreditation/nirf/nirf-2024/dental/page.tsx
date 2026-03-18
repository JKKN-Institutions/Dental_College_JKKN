import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NIRF Ranking 2024 Dental | JKKN Dental College National Ranking',
  description: 'View JKKN Dental College NIRF 2024 dental ranking report. Check our national institutional ranking framework score and position. Download official NIRF data.',
  keywords: 'NIRF ranking 2024, dental college ranking, national ranking, NIRF score, college ranking India',
  openGraph: {
    title: 'NIRF Ranking 2024 Dental | JKKN Dental College National Ranking',
    description: 'View JKKN Dental College NIRF 2024 dental ranking report. Check our national institutional ranking framework score and position. Download official NIRF data.',
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
      <PdfRedirect pdfUrl="/pdf/NIRF-2024-Dental.pdf" />
    </>
  );
}
