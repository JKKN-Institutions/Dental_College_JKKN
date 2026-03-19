import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Annual Account Statement | JKKN Dental Financial Reports',
  description: 'Access JKKN Dental College annual account statements and financial reports. View our financial transparency and compliance with UGC guidelines. Download PDF reports.',
  keywords: 'annual accounts, financial statement, college finances, financial reports, transparency',
  openGraph: {
    title: 'Annual Account Statement | JKKN Dental Financial Reports',
    description: 'Access JKKN Dental College annual account statements and financial reports. View our financial transparency and compliance with UGC guidelines. Download PDF reports.',
    url: 'https://dental.jkkn.ac.in/about/annual-account-statement/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AnnualAccountStatement() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/annual-account-statement');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ANNUAL-ACCOUNTS-STATEMENT.pdf" />
    </>
  );
}
