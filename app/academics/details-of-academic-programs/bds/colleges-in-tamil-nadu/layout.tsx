import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Dental Colleges in Tamil Nadu — All 23 BDS Colleges and 2,200 Seats | JKKN' },
  description:
    'Every dental college in Tamil Nadu affiliated to the TN Dr M.G.R. Medical University — 23 colleges, 2,200 sanctioned BDS seats for 2025-26, with location, government or self-financing, minority status and intake per college.',
  keywords:
    'dental colleges in tamilnadu, dental college in tamil nadu, list of dental colleges in tamilnadu, bds colleges in tamilnadu, private dental colleges in tamilnadu, government dental colleges in tamilnadu, top dental colleges in tamilnadu, best dental colleges in tamilnadu',
  alternates: {
    canonical: '/academics/details-of-academic-programs/bds/colleges-in-tamil-nadu/',
  },
  openGraph: {
    title: 'Dental Colleges in Tamil Nadu — All 23 BDS Colleges and 2,200 Seats',
    description:
      '23 affiliated dental colleges, 2,200 sanctioned BDS seats for 2025-26, from the university’s own intake document.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/colleges-in-tamil-nadu/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dental colleges in Tamil Nadu 2025-26 — sanctioned BDS intake',
      },
    ],
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Colleges in Tamil Nadu — All 23 BDS Colleges and 2,200 Seats',
    description:
      '23 affiliated dental colleges, 2,200 sanctioned BDS seats for 2025-26, college by college.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
