import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Internal Complaints Committee (ICC) | JKKN Dental College',
  description: 'Addressing workplace harassment and ensuring safe environment. View ICC members and complaint redressal procedures at JKKN.',
  keywords: 'internal complaints committee, ICC, harassment prevention, workplace safety, complaint redressal, JKKN dental college, student protection',
  openGraph: {
    title: 'Internal Complaints Committee (ICC) | JKKN Dental College',
    description: 'Addressing workplace harassment and ensuring safe environment. View ICC members and complaint redressal procedures at JKKN.',
    url: 'https://dental.jkkn.ac.in/committee/internal-compliants-committee-icc/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/internal-compliants-committee-icc/');

export default function InternalCompliantsCommittee() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Internal-Compliance-committee.pdf" />
    </>
  );
}
