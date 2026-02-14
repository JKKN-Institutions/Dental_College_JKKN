import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCI MDS Permission Letter | Dental Council of India Postgraduate Approval',
  description: 'Download JKKN Dental College DCI permission letter for MDS postgraduate programs. View Dental Council of India approval for 5 MDS specializations.',
  keywords: 'DCI MDS approval, postgraduate permission, dental council India MDS, DCI recognition, MDS approval',
};

export default function DCIMDS() {
  return <PdfRedirect pdfUrl="/pdf/DCI-Permission-letter-mds.pdf" />;
}
