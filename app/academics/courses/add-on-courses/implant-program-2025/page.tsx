import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Implant Program 2025 - JKKN Dental College',
  description: 'Join our comprehensive Implantology program 2025 at JKKN Dental College. Hands-on training in implant placement and prosthetics. Register now.',
  keywords: 'implant program 2025, implantology training, dental implant course, hands-on implant training, CBCT imaging, implant prosthetics, dental certification',
};

export default function ImplantProgram2025() {
  return <PdfRedirect pdfUrl="/pdf/Add-on-Course-Implant-program-2025.pdf" />;
}
