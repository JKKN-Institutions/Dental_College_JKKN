import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 Career Options After B.Ed 2026 | JKKN Education Blog',
  description:
    'Explore the top 10 career options after B.Ed in India — government teaching, private schools, education technology, counseling & more. TNTEU counseling guide included.',
  keywords:
    'career after B.Ed, B.Ed job opportunities 2026, teaching career India, TNTEU counseling, B.Ed course scope, education career options, JKKN College of Education',
  alternates: {
    canonical:
      'https://dental.jkkn.ac.in/blog/top-10-career-options-after-bed-2026/',
  },
  openGraph: {
    title: 'Top 10 Career Options After B.Ed 2026 | JKKN',
    description:
      'Complete guide to career options after B.Ed — government jobs, private schools, EdTech, counseling & more.',
    url: 'https://dental.jkkn.ac.in/blog/top-10-career-options-after-bed-2026/',
    siteName: 'JKKN Dental College & Hospital',
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Career Options After B.Ed 2026',
    description:
      'Complete guide to career options after B.Ed in India — government jobs, EdTech, counseling & more.',
  },
};

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
