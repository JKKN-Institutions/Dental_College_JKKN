import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'MDS Orthodontics Syllabus - JKKN Dental College',
  description: 'Explore MDS Orthodontics syllabus at JKKN Dental College. Comprehensive postgraduate program in orthodontic dentistry and dentofacial orthopedics. View now.',
  keywords: 'MDS orthodontics syllabus, orthodontics curriculum, dentofacial orthopedics, postgraduate orthodontics, MDS specialization, JKKN orthodontics program',
  openGraph: {
    title: 'MDS Orthodontics Syllabus - JKKN Dental College',
    description: 'Explore MDS Orthodontics syllabus at JKKN Dental College. Comprehensive postgraduate program in orthodontic dentistry and dentofacial orthopedics. View now.',
    url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MDSOrthodonticsSyllabus() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/' },
        { name: 'MDS Orthodontics', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/MDS-ORTHODONTICS-Syllabus.pdf" />
    </>
  );
}
