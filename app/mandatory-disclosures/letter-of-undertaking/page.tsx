import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Letter of Undertaking - JKKN Dental College',
  description: 'View JKKN Dental College & Hospital Letter of Undertaking for mandatory disclosure. Official compliance document as per regulatory requirements.',
  keywords: 'JKKN letter of undertaking, mandatory disclosure, compliance document, dental college undertaking, regulatory compliance, JKKN official documents, institutional undertaking',
};

export default function LetterOfUndertaking() {
  return <PdfRedirect pdfUrl="/pdf/Letter-of-Undertaking-MD.pdf" />;
}
