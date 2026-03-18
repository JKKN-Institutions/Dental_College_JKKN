import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Implant Program 2025 - JKKN Dental College',
  description: 'Join our comprehensive Implantology program 2025 at JKKN Dental College. Hands-on training in implant placement and prosthetics. Register now.',
  keywords: 'implant program 2025, implantology training, dental implant course, hands-on implant training, CBCT imaging, implant prosthetics, dental certification',
  openGraph: {
    title: 'Implant Program 2025 - JKKN Dental College',
    description: 'Join our comprehensive Implantology program 2025 at JKKN Dental College. Hands-on training in implant placement and prosthetics. Register now.',
    url: 'https://dental.jkkn.ac.in/academics/courses/add-on-courses/implant-program-2025/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ImplantProgram2025() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Add-On Courses', url: 'https://dental.jkkn.ac.in/academics/courses/add-on-courses/' },
        { name: 'Implant Program 2025', url: 'https://dental.jkkn.ac.in/academics/courses/add-on-courses/implant-program-2025/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/Add-on-Course-Implant-program-2025.pdf" />
    </>
  );
}
