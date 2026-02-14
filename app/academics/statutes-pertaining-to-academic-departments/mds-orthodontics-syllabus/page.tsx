import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'MDS Orthodontics Syllabus - JKKN Dental College',
  description: 'Explore MDS Orthodontics syllabus at JKKN Dental College. Comprehensive postgraduate program in orthodontic dentistry and dentofacial orthopedics. View now.',
  keywords: 'MDS orthodontics syllabus, orthodontics curriculum, dentofacial orthopedics, postgraduate orthodontics, MDS specialization, JKKN orthodontics program',
};

export default function MDSOrthodonticsSyllabus() {
  return <PdfRedirect pdfUrl="/pdf/MDS-ORTHODONTICS-Syllabus.pdf" />;
}
