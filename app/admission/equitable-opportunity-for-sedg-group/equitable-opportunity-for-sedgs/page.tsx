import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Equitable Opportunity for SEDGs - JKKN Dental Admission',
  description: 'Access JKKN Dental College\'s equitable opportunity policies for Socio-Economically Disadvantaged Groups (SEDGs) in admission process.',
  keywords: 'SEDG admission, equitable opportunity, disadvantaged groups, JKKN Dental College, inclusive admission, reservation policy, SC ST OBC admission',
  openGraph: {
    title: 'Equitable Opportunity for SEDGs - JKKN Dental Admission',
    description: 'Access JKKN Dental College\'s equitable opportunity policies for Socio-Economically Disadvantaged Groups (SEDGs) in admission process.',
    url: 'https://dental.jkkn.ac.in/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/admission/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs/');

export default function EquitableOpportunityForSEDGs() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Equitable-Opportunity-for-SEDG.pdf" />
    </>
  );
}
