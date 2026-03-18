import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'MDS Conservative Dentistry & Endodontics Syllabus - JKKN Dental College',
  description: 'View MDS Conservative Dentistry and Endodontics syllabus at JKKN Dental College. Specialized postgraduate dental curriculum. Access details now.',
  keywords: 'MDS syllabus, conservative dentistry syllabus, endodontics curriculum, postgraduate dental education, MDS program, JKKN specialization, dental masters',
  openGraph: {
    title: 'MDS Conservative Dentistry & Endodontics Syllabus - JKKN Dental College',
    description: 'View MDS Conservative Dentistry and Endodontics syllabus at JKKN Dental College. Specialized postgraduate dental curriculum. Access details now.',
    url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MDSConservativeDentistryAndEndodonticsSyllabus() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/' },
        { name: 'MDS Conservative Dentistry', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/CONSERVATIVE-DENTISTRY-AND-ENDODONTICS-Syllabus.pdf" />
    </>
  );
}
