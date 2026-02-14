import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Prospectus | JKKN Dental College BDS & MDS Admission',
  description: 'Download JKKN Dental College admission prospectus. Get details on BDS & MDS courses, eligibility, fees, admission process, facilities, and placement information for 2026-27.',
  keywords: 'admission prospectus, BDS admission, MDS admission, dental college prospectus, JKKN admission details',
};

export default function Prospectus() {
  return <PdfRedirect pdfUrl="/pdf/Prospectus.pdf" />;
}
