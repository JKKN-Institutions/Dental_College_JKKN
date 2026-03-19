import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Guidelines on Public Disclosure by HEIs - JKKN Dental',
  description: 'View UGC guidelines on public disclosure by Higher Education Institutions. JKKN Dental College mandatory disclosure compliance documents.',
  keywords: 'UGC public disclosure guidelines, HEI disclosure, mandatory disclosures, JKKN compliance, higher education transparency, UGC regulations, institutional disclosure, JKKN dental disclosures',
  openGraph: {
    title: 'Guidelines on Public Disclosure by HEIs - JKKN Dental',
    description: 'View UGC guidelines on public disclosure by Higher Education Institutions. JKKN Dental College mandatory disclosure compliance documents.',
    url: 'https://dental.jkkn.ac.in/mandatory-disclosures/guidelines-on-public-disclosure-by-heis/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function GuidelinesOnPublicDisclosure() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Mandatory Disclosures', url: 'https://dental.jkkn.ac.in/mandatory-disclosures/' },
        { name: 'Guidelines on Public Disclosure', url: 'https://dental.jkkn.ac.in/mandatory-disclosures/guidelines-on-public-disclosure-by-heis/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/Guidelines-on-Public-Disclosure-by-HEIs-MD.pdf" />
    </>
  );
}
