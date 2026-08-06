import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'B.Ed Admission 2026 Tamil Nadu: Eligibility, Process & Dates | JKKN' },
  description: 'Complete guide to B.Ed admission 2026 in Tamil Nadu — eligibility, TNTEU counseling process, key dates, fee structure and career prospects after B.Ed.',
  alternates: {
    canonical: '/blog/bed-admission-2026-tamil-nadu/',
  },
  openGraph: {
    title: 'B.Ed Admission 2026 Tamil Nadu: Eligibility, Process & Dates',
    description: 'Complete guide to B.Ed admission 2026 in Tamil Nadu — eligibility, TNTEU counseling process, key dates, fee structure and career prospects after B.Ed.',
    url: 'https://dental.jkkn.ac.in/blog/bed-admission-2026-tamil-nadu/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'B.Ed Admission 2026 Tamil Nadu Guide - JKKN College of Education',
      },
    ],
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B.Ed Admission 2026 Tamil Nadu: Eligibility, Process & Dates',
    description: 'Complete guide to B.Ed admission 2026 in Tamil Nadu — eligibility, TNTEU counseling, key dates, fee structure and career prospects.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

// page.tsx here renders ONE hardcoded article and ignores the slug, so before this every
// invented URL under /blog/ answered HTTP 200 with that article - indexable, since this route
// is not noindexed - and pointed its canonical at the slug below. Only that slug is real.
//
// These two exports live in the layout, not the page, because page.tsx is a client component
// and Next only accepts generateStaticParams / dynamicParams from a server segment. Keeping
// them here also leaves the 1,019-line page untouched.
//
// dynamicParams: false is what produces the 404. A notFound() guard was tried first on the
// arts and ahs equivalents and measured on a production build: it rendered the not-found body
// but left the status at 200, which is still a soft 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ slug: 'bed-admission-2026-tamil-nadu' }];
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
