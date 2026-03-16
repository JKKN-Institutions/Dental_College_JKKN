import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College Near Erode | JKKN Dental College',
  description: 'JKKN Dental College & Hospital, just 30 km from Erode on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
  keywords: 'dental college near erode, best dental college erode, bds college near erode, mds college near erode, jkkn dental erode, dental college tamilnadu erode',
  alternates: {
    canonical: '/erode',
  },
  openGraph: {
    title: 'Best Dental College Near Erode | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, just 30 km from Erode on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    url: 'https://dental.jkkn.ac.in/erode',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Dental College Near Erode - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College Near Erode | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, just 30 km from Erode on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
