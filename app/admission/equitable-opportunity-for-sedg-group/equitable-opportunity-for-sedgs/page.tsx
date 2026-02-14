import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Equitable Opportunity for SEDGs - JKKN Dental College Admission',
  description: 'Access JKKN Dental College\'s equitable opportunity policies for Socio-Economically Disadvantaged Groups (SEDGs) in admission process.',
  keywords: 'SEDG admission, equitable opportunity, disadvantaged groups, JKKN Dental College, inclusive admission, reservation policy, SC ST OBC admission',
};

export default function EquitableOpportunityForSEDGs() {
  return <PdfRedirect pdfUrl="/pdf/Equitable-Opportunity-for-SEDG.pdf" />;
}
