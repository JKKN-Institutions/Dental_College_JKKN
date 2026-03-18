import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Letter of Undertaking - JKKN Dental College',
  description: 'View JKKN Dental College & Hospital Letter of Undertaking for mandatory disclosure. Official compliance document as per regulatory requirements.',
  keywords: 'JKKN letter of undertaking, mandatory disclosure, compliance document, dental college undertaking, regulatory compliance, JKKN official documents, institutional undertaking',
  openGraph: {
    title: 'Letter of Undertaking - JKKN Dental College',
    description: 'View JKKN Dental College & Hospital Letter of Undertaking for mandatory disclosure. Official compliance document as per regulatory requirements.',
    url: 'https://dental.jkkn.ac.in/mandatory-disclosures/letter-of-undertaking/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function LetterOfUndertaking() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Mandatory Disclosures', url: 'https://dental.jkkn.ac.in/mandatory-disclosures/' },
        { name: 'Letter of Undertaking', url: 'https://dental.jkkn.ac.in/mandatory-disclosures/letter-of-undertaking/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/Letter-of-Undertaking-MD.pdf" />
    </>
  );
}
