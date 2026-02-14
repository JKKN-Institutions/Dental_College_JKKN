import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'MDS Prosthodontics Syllabus - JKKN Dental College',
  description: 'Access MDS Prosthodontics syllabus at JKKN Dental College. Specialized postgraduate program in dental prosthetics and restorative dentistry. View details.',
  keywords: 'MDS prosthodontics syllabus, prosthodontics curriculum, dental prosthetics, restorative dentistry, postgraduate prosthodontics, JKKN MDS program',
};

export default function MDSProsthodonticsSyllabus() {
  return <PdfRedirect pdfUrl="/pdf/MDS- PROSTHODONTICS-syllabus.pdf" />;
}
