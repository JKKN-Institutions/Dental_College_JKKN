import type { Metadata } from 'next';
import Top10CareerClient from './Top10CareerClient';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Top 10 Career Options After B.Ed in 2026',
  description: 'Top 10 career options after B.Ed 2026 — government teacher, private school, Ed-Tech, M.Ed, administration and more. Salary comparison included.',
  openGraph: {
    title: 'Top 10 Career Options After B.Ed in 2026',
    description: 'Top 10 career options after B.Ed 2026 — government teacher, private school, Ed-Tech, M.Ed, administration and more. Salary comparison included.',
    url: 'https://dental.jkkn.ac.in/blog/top-10-career-options-after-bed-2026/',
    type: 'article',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const speakableSchema = generateSpeakableWebPageSchema({
  title: 'Top 10 Career Options After B.Ed in 2026',
  description: 'Top 10 career options after B.Ed 2026 — government teacher, private school, Ed-Tech, M.Ed, administration and more. Salary comparison included.',
  url: 'https://dental.jkkn.ac.in/blog/top-10-career-options-after-bed-2026/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function BlogDetailPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://dental.jkkn.ac.in/blog/' },
          { name: 'Top 10 Career Options After B.Ed 2026' },
        ]}
      />
      <StructuredData data={speakableSchema} />
      <Top10CareerClient />
    </>
  );
}
