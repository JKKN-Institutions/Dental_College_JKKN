import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Barrier-Free Environment - JKKN Dental College Accessibility Policy',
  description: 'Comprehensive barrier-free environment policy at JKKN Dental College ensuring accessibility, inclusivity, and equal opportunities for all students and visitors.',
  keywords: 'barrier-free environment JKKN, accessibility policy dental college, inclusive campus, disability-friendly infrastructure, wheelchair accessibility, equal opportunity education',
};

export default function BarrierFreeEnvironment() {
  return <PdfRedirect pdfUrl="/pdf/Barrier-free-environment.pdf" />;
}
