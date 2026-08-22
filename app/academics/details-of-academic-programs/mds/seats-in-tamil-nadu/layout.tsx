import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'MDS Seats in Tamil Nadu 2025-26 — All 435 Seats, College-wise | JKKN' },
  description:
    'Tamil Nadu has 435 sanctioned MDS seats across 19 affiliated dental colleges and 9 specialities, 2025-26. College-wise seat matrix from the TN Dr M.G.R. Medical University, with a downloadable PDF.',
  keywords:
    'mds seats in tamilnadu, total mds seats in tamilnadu, how many mds seats in tamilnadu, mds seat matrix tamilnadu, tamilnadu mds seat matrix 2025, mds seat matrix, government mds seats in tamilnadu',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/seats-in-tamil-nadu/',
  },
  openGraph: {
    title: 'MDS Seats in Tamil Nadu 2025-26 — All 435 Seats, College-wise',
    description:
      '435 sanctioned MDS seats across 19 affiliated dental colleges and 9 specialities. Official seat matrix, college by college.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/seats-in-tamil-nadu/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS seat matrix for Tamil Nadu 2025-26',
      },
    ],
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Seats in Tamil Nadu 2025-26 — All 435 Seats, College-wise',
    description:
      '435 sanctioned MDS seats across 19 affiliated dental colleges and 9 specialities. Official seat matrix.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
