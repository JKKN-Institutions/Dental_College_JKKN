import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Prosthodontics | Dental Crown & Bridge Specialist | JKKN',
  description: 'MDS in Prosthodontics Crown and Bridge at JKKN Dental College. Master dentures, crowns, bridges, and dental prosthetics. 3-year DCI-approved program with comprehensive clinical exposure.',
  keywords: 'MDS Prosthodontics, crown and bridge course, dental prosthetics, denture specialist, prosthodontics training',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'MDS Prosthodontics | Dental Crown & Bridge Specialist | JKKN',
    description: 'MDS in Prosthodontics Crown and Bridge at JKKN Dental College. Master dentures, crowns, bridges, and dental prosthetics. 3-year DCI-approved program with comprehensive clinical exposure.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'MDS Prosthodontics at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Prosthodontics | JKKN',
    description: 'MDS in Prosthodontics Crown and Bridge. 3-year DCI-approved program with comprehensive clinical exposure.',
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
