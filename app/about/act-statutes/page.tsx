import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Acts & Statutes | JKKN Dental College Regulations & Rules',
  description: 'View JKKN Dental College acts, statutes and regulatory framework. Download official college regulations, rules and governance documents. Transparency in compliance.',
  keywords: 'acts statutes, college regulations, governance, regulatory framework, college rules',
  openGraph: {
    title: 'Acts & Statutes | JKKN Dental College Regulations & Rules',
    description: 'View JKKN Dental College acts, statutes and regulatory framework. Download official college regulations, rules and governance documents. Transparency in compliance.',
    url: 'https://dental.jkkn.ac.in/about/act-statutes/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ActStatutes() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/act-statutes');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/acts-and-statutes.pdf" />
    </>
  );
}
