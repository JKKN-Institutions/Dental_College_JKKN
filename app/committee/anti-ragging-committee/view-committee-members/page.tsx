import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Anti Ragging Committee Members | JKKN Dental College',
  description: 'View the current members of the Anti Ragging Committee at JKKN Dental College committed to maintaining a safe and respectful campus.',
  keywords: 'anti ragging committee members, committee faculty, student safety, ragging prevention team, JKKN dental college, campus security',
  openGraph: {
    title: 'Anti Ragging Committee Members | JKKN Dental College',
    description: 'View the current members of the Anti Ragging Committee at JKKN Dental College committed to maintaining a safe and respectful campus.',
    url: 'https://dental.jkkn.ac.in/committee/anti-ragging-committee/view-committee-members/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/anti-ragging-committee/view-committee-members/');

export default function AntiRaggingCommitteeMembers() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ANTI-RAGGING-COMMITTEE-ViewCommitteeMembers.pdf" />
    </>
  );
}
