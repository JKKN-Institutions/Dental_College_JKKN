import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'UGC Guidelines for SEDG - JKKN Dental College Admission Policy',
  description: 'View UGC 2024 guidelines for equitable opportunities for Socio-Economically Disadvantaged Groups at JKKN Dental College admission process.',
  keywords: 'UGC guidelines, SEDG policy, UGC 2024, equitable opportunity guidelines, JKKN Dental College, admission guidelines, disadvantaged groups UGC',
  openGraph: {
    title: 'UGC Guidelines for SEDG - JKKN Dental College Admission Policy',
    description: 'View UGC 2024 guidelines for equitable opportunities for Socio-Economically Disadvantaged Groups at JKKN Dental College admission process.',
    url: 'https://dental.jkkn.ac.in/admission/equitable-opportunity-for-sedg-group/ugc-guidelines/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/admission/equitable-opportunity-for-sedg-group/ugc-guidelines/');

export default function UGCGuidelines() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/EQUITABLE-OPPORTUNITY-FOR-SEDG-UGC-Guidelines.pdf" />
    </>
  );
}
