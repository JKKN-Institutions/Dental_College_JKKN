import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College in Namakkal | JKKN Dental College',
  description: 'JKKN Dental College & Hospital, located in Komarapalayam, Namakkal. DCI approved, NAAC A accredited. BDS & MDS programs with 200+ chair hospital.',
  keywords: 'dental college in namakkal, best dental college namakkal, bds college namakkal, mds college namakkal, jkkn dental namakkal, dental college komarapalayam',
  alternates: {
    canonical: '/namakkal',
  },
  openGraph: {
    title: 'Best Dental College in Namakkal | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, located in Komarapalayam, Namakkal. DCI approved, NAAC A accredited. BDS & MDS programs with 200+ chair hospital.',
    url: 'https://dental.jkkn.ac.in/namakkal',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Dental College in Namakkal - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College in Namakkal | JKKN Dental College',
    description: 'JKKN Dental College & Hospital, located in Komarapalayam, Namakkal. DCI approved, NAAC A accredited. BDS & MDS programs with 200+ chair hospital.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function NamakkalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
