import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'MDS Courses in Tamil Nadu — All 9 Specialities and Their Seats | JKKN' },
  description:
    'All nine MDS specialities offered in Tamil Nadu for 2025-26, how the 435 sanctioned seats split between them, and which of the 19 affiliated colleges runs each branch.',
  keywords:
    'mds courses in tamilnadu, mds specialities in tamilnadu, mds branches in tamil nadu, mds specializations, mds course in tamilnadu, mds subjects list',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/specialities-in-tamil-nadu/',
  },
  openGraph: {
    title: 'MDS Courses in Tamil Nadu — All 9 Specialities and Their Seats',
    description:
      'Nine MDS specialities, 435 seats, and which of the 19 affiliated colleges runs each branch.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/specialities-in-tamil-nadu/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS specialities in Tamil Nadu 2025-26',
      },
    ],
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Courses in Tamil Nadu — All 9 Specialities and Their Seats',
    description: 'Nine MDS specialities, 435 seats, and which colleges run each branch.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
