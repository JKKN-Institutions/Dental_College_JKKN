import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'MDS Colleges in Tamil Nadu — All 19 Affiliated Colleges 2025-26 | JKKN' },
  description:
    'Every MDS college in Tamil Nadu affiliated to the TN Dr M.G.R. Medical University — 19 colleges, 435 seats, location, government or self-financing, and speciality-wise intake for 2025-26.',
  keywords:
    'mds colleges in tamilnadu, mds college in tamilnadu, mds dental colleges in tamilnadu, list of mds colleges in tamil nadu, dental colleges in tamilnadu for mds, government mds colleges in tamilnadu',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/colleges-in-tamil-nadu/',
  },
  openGraph: {
    title: 'MDS Colleges in Tamil Nadu — All 19 Affiliated Colleges 2025-26',
    description:
      '19 affiliated MDS colleges, 435 seats, location and speciality-wise intake, from the university’s own matrix.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/colleges-in-tamil-nadu/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS colleges in Tamil Nadu 2025-26',
      },
    ],
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Colleges in Tamil Nadu — All 19 Affiliated Colleges 2025-26',
    description: '19 affiliated MDS colleges, 435 seats, location and speciality-wise intake.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
