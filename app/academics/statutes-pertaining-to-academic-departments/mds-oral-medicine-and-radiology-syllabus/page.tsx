import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'MDS Oral Medicine & Radiology Syllabus - JKKN Dental College',
  description: 'Access MDS Oral Medicine and Radiology syllabus at JKKN Dental College. Advanced diagnostic and radiological dental education. View curriculum now.',
  keywords: 'MDS oral medicine syllabus, oral radiology curriculum, postgraduate dental education, diagnostic dentistry, MDS specialization, JKKN postgraduate programs',
};

export default function MDSOralMedicineAndRadiologySyllabus() {
  return <PdfRedirect pdfUrl="/pdf/MDS-ORAL-MEDICINE-AND-RADIOLOGY-SYLLABUS.pdf" />;
}
