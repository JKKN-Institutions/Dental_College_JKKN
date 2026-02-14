import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Cross-Cutting Issues in Dental Education - JKKN Dental College',
  description: 'Explore cross-cutting issues and interdisciplinary topics in dental education at JKKN Dental College. Comprehensive curriculum coverage. View details.',
  keywords: 'cross-cutting issues, interdisciplinary dental education, comprehensive curriculum, dental education topics, JKKN academics, holistic dental training',
};

export default function CrossCuttingIssues() {
  return <PdfRedirect pdfUrl="/pdf/cross-cutting-issues.pdf" />;
}
