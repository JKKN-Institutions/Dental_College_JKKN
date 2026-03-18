import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Annual Report | JKKN Dental College Yearly Performance Review',
  description: 'Download JKKN Dental College annual report. View achievements, academic performance, research activities, and institutional development. Access latest yearly reports.',
  keywords: 'annual report, yearly performance, college achievements, institutional report, academic progress',
  openGraph: {
    title: 'Annual Report | JKKN Dental College Yearly Performance Review',
    description: 'Download JKKN Dental College annual report. View achievements, academic performance, research activities, and institutional development. Access latest yearly reports.',
    url: 'https://dental.jkkn.ac.in/about/annual-report/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AnnualReport() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/annual-report');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ANNUAL-REPORT.pdf" />
    </>
  );
}
