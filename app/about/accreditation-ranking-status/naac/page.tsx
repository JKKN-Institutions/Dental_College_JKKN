import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'NAAC Accreditation Status | JKKN Dental College Quality Rating',
  description: 'View JKKN Dental College NAAC accreditation certificate and quality assessment report. Check our NAAC grade and ranking. Download official NAAC documents.',
  keywords: 'NAAC accreditation, NAAC certificate, quality assessment, NAAC grade, college ranking',
  openGraph: {
    title: 'NAAC Accreditation Status | JKKN Dental College Quality Rating',
    description: 'View JKKN Dental College NAAC accreditation certificate and quality assessment report. Check our NAAC grade and ranking. Download official NAAC documents.',
    url: 'https://dental.jkkn.ac.in/about/accreditation-ranking-status/naac/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NAAC() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/accreditation-ranking-status/naac');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/NAAC.pdf" />
    </>
  );
}
