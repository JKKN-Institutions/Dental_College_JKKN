import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BDS Course (Bachelor of Dental Surgery) | JKKN Dental College',
  description: 'Apply for BDS at JKKN Dental College & Hospital, Komarapalayam. 100 seats, DCI approved, NAAC A+ accredited. NEET-based admission 2026-27. Comprehensive 5-year dental surgery program with clinical training.',
  keywords: 'BDS course, Bachelor of Dental Surgery, dental undergraduate program, BDS admission, JKKN dental BDS, dental surgery course',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'BDS Course (Bachelor of Dental Surgery) | JKKN Dental College',
    description: 'Apply for BDS at JKKN Dental College & Hospital, Komarapalayam. 100 seats, DCI approved, NAAC A+ accredited. NEET-based admission 2026-27.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'BDS Course at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDS Course (Bachelor of Dental Surgery) | JKKN Dental College',
    description: 'Apply for BDS at JKKN Dental College & Hospital, Komarapalayam. 100 seats, DCI approved, NAAC A+ accredited.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function BDSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
