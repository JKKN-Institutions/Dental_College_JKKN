import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'MDS Periodontics Syllabus - JKKN Dental College',
  description: 'Review MDS Periodontics syllabus at JKKN Dental College. Advanced postgraduate training in periodontal health and gum disease management. Access now.',
  keywords: 'MDS periodontics syllabus, periodontics curriculum, gum disease treatment, postgraduate periodontics, MDS specialization, JKKN periodontics program',
};

export default function MDSPeriodonticsSyllabus() {
  return <PdfRedirect pdfUrl="/pdf/MDS-PERIODONTICS-Syllabus.pdf" />;
}
