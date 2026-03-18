import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import { generateBreadcrumbSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Barrier-Free Environment - JKKN Dental College Accessibility Policy',
  description: 'Comprehensive barrier-free environment policy at JKKN Dental College ensuring accessibility, inclusivity, and equal opportunities for all students and visitors.',
  keywords: 'barrier-free environment JKKN, accessibility policy dental college, inclusive campus, disability-friendly infrastructure, wheelchair accessibility, equal opportunity education',
  openGraph: {
    title: 'Barrier-Free Environment - JKKN Dental College Accessibility Policy',
    description: 'Comprehensive barrier-free environment policy at JKKN Dental College ensuring accessibility, inclusivity, and equal opportunities for all students and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/barrier-free-environment/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function BarrierFreeEnvironment() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/barrier-free-environment/');
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Barrier-free-environment.pdf" />
    </>
  );
}
