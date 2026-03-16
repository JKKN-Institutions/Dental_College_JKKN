import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College Near Salem | JKKN Dental College',
  description: 'JKKN Dental College & Hospital, just 40 km from Salem on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
  keywords: 'dental college near salem, best dental college salem, bds college near salem, mds college near salem, jkkn dental salem, dental college tamilnadu salem',
  alternates: {
    canonical: '/salem',
  },
  openGraph: {
    title: 'Best Dental College Near Salem | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, just 40 km from Salem on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    url: 'https://dental.jkkn.ac.in/salem',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Dental College Near Salem - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College Near Salem | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, just 40 km from Salem on NH-544. DCI approved, NAAC A accredited. BDS & MDS programs with hostel & transport.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function SalemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
