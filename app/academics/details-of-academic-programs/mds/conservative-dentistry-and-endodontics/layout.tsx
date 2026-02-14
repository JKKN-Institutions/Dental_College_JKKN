import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Conservative Dentistry & Endodontics | Root Canal | JKKN',
  description: 'MDS in Conservative Dentistry and Endodontics at JKKN Dental College. Specialize in root canal treatment, tooth preservation, and restorative dentistry. DCI-approved 3-year program.',
  keywords: 'MDS Endodontics, root canal specialist, conservative dentistry, endodontics training, restorative dentistry course',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'MDS Conservative Dentistry & Endodontics | Root Canal | JKKN',
    description: 'MDS in Conservative Dentistry and Endodontics at JKKN Dental College. Specialize in root canal treatment, tooth preservation, and restorative dentistry. DCI-approved 3-year program.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Conservative Dentistry & Endodontics at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Conservative Dentistry & Endodontics | JKKN',
    description: 'MDS in Conservative Dentistry and Endodontics at JKKN Dental College. DCI-approved 3-year program.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function EndodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
