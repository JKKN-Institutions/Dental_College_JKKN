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

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
