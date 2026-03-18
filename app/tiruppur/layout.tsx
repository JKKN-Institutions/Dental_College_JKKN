import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College Near Tiruppur | JKKN Dental College',
  description: 'JKKN Dental College & Hospital, 80 km from Tiruppur via NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
  keywords: 'dental college near tiruppur, best dental college tiruppur, bds college near tiruppur, mds college near tiruppur, jkkn dental tiruppur, dental college tamilnadu tiruppur',
  alternates: {
    canonical: '/tiruppur',
  },
  openGraph: {
    title: 'Best Dental College Near Tiruppur | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, 80 km from Tiruppur via NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    url: 'https://dental.jkkn.ac.in/tiruppur',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Dental College Near Tiruppur - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College Near Tiruppur | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, 80 km from Tiruppur via NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function TiruppurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
