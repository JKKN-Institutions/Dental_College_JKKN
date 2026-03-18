import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Admission Prospectus | JKKN Dental College BDS & MDS Admission',
  description: 'Download JKKN Dental College admission prospectus. Get details on BDS & MDS courses, eligibility, fees, admission process, facilities, and placement information for 2026-27.',
  keywords: 'admission prospectus, BDS admission, MDS admission, dental college prospectus, JKKN admission details',
  openGraph: {
    title: 'Admission Prospectus | JKKN Dental College BDS & MDS Admission',
    description: 'Download JKKN Dental College admission prospectus. Get details on BDS & MDS courses, eligibility, fees, admission process, facilities, and placement information for 2026-27.',
    url: 'https://dental.jkkn.ac.in/admission/prospectus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/admission/prospectus/');

export default function Prospectus() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Prospectus.pdf" />
    </>
  );
}
