import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'MDS Conservative Dentistry & Endodontics Syllabus - JKKN Dental College',
  description: 'View MDS Conservative Dentistry and Endodontics syllabus at JKKN Dental College. Specialized postgraduate dental curriculum. Access details now.',
  keywords: 'MDS syllabus, conservative dentistry syllabus, endodontics curriculum, postgraduate dental education, MDS program, JKKN specialization, dental masters',
};

export default function MDSConservativeDentistryAndEndodonticsSyllabus() {
  return <PdfRedirect pdfUrl="/pdf/CONSERVATIVE-DENTISTRY-AND-ENDODONTICS-Syllabus.pdf" />;
}
