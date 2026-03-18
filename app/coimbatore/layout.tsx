import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College Near Coimbatore | JKKN Dental College',
  description: 'JKKN Dental College & Hospital, 100 km from Coimbatore on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
  keywords: 'dental college near coimbatore, best dental college coimbatore, bds college near coimbatore, mds college near coimbatore, jkkn dental coimbatore, dental college tamilnadu coimbatore',
  alternates: {
    canonical: '/coimbatore',
  },
  openGraph: {
    title: 'Best Dental College Near Coimbatore | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, 100 km from Coimbatore on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    url: 'https://dental.jkkn.ac.in/coimbatore',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Dental College Near Coimbatore - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College Near Coimbatore | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, 100 km from Coimbatore on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
