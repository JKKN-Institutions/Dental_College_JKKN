import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'UGC Fee Refund Policy | JKKN Dental College Admission',
  description: 'View UGC fee refund policy applicable to JKKN Dental College admissions. Understand refund eligibility, timelines, and procedures for BDS & MDS applicants.',
  keywords: 'UGC fee refund policy, fee refund, dental college fee refund, admission fee refund, JKKN dental college, refund eligibility, UGC guidelines refund',
  openGraph: {
    title: 'UGC Fee Refund Policy | JKKN Dental College Admission',
    description: 'View UGC fee refund policy applicable to JKKN Dental College admissions. Understand refund eligibility, timelines, and procedures for BDS & MDS applicants.',
    url: 'https://dental.jkkn.ac.in/admission/fee-refund-policy/ugc-fee-refund-policy/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/admission/fee-refund-policy/ugc-fee-refund-policy/');

export default function UGCFeeRefundPolicy() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/UGC-Fee-Refund-Policy.pdf" />
    </>
  );
}
