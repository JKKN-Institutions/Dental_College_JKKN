import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best College for Prosthodontics in India | JKKN Dental',
  description: 'Looking for the best college for prosthodontics in India? JKKN Dental offers MDS Prosthodontics with expert faculty, prosthetic labs & hospital training.',
  keywords: 'best college for prosthodontics in india',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge',
  },
  openGraph: {
    title: 'Best College for Prosthodontics in India | JKKN Dental',
    description: 'Looking for the best college for prosthodontics in India? JKKN Dental offers MDS Prosthodontics with expert faculty, prosthetic labs & hospital training.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Best College for Prosthodontics in India - JKKN Dental'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best College for Prosthodontics in India | JKKN Dental',
    description: 'Looking for the best college for prosthodontics in India? JKKN Dental offers MDS Prosthodontics with expert faculty, prosthetic labs & hospital training.',
    images: ['/images/BDS-hero-image.png'],
  },
};

export default function ProsthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
