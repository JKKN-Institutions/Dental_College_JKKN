import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCI BDS Permission Letter | Dental Council of India Approval',
  description: 'Download JKKN Dental College DCI permission letter for BDS program. View Dental Council of India approval and recognition. 100 BDS seats DCI approved.',
  keywords: 'DCI approval, dental council India, BDS permission, DCI recognition, regulatory approval',
};

export default function DCIBDS() {
  return <PdfRedirect pdfUrl="/pdf/DCI-Permission-letter-bds.pdf" />;
}
