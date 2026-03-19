import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'MDS Oral Medicine & Radiology Syllabus - JKKN Dental College',
  description: 'Access MDS Oral Medicine and Radiology syllabus at JKKN Dental College. Advanced diagnostic and radiological dental education. View curriculum now.',
  keywords: 'MDS oral medicine syllabus, oral radiology curriculum, postgraduate dental education, diagnostic dentistry, MDS specialization, JKKN postgraduate programs',
  openGraph: {
    title: 'MDS Oral Medicine & Radiology Syllabus - JKKN Dental College',
    description: 'Access MDS Oral Medicine and Radiology syllabus at JKKN Dental College. Advanced diagnostic and radiological dental education. View curriculum now.',
    url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MDSOralMedicineAndRadiologySyllabus() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/' },
        { name: 'MDS Oral Medicine & Radiology', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/MDS-ORAL-MEDICINE-AND-RADIOLOGY-SYLLABUS.pdf" />
    </>
  );
}
