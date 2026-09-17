import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'MDS Prosthodontics in Tamil Nadu — 3 Seats, Fees & Eligibility 2026-27 | JKKN Dental' },
  description: 'MDS Prosthodontics, Crown & Bridge at JKKN Dental College — 3 NDC-approved seats, 3 years full-time, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.',
  keywords: 'mds prosthodontics tamil nadu, mds prosthodontics seats, mds prosthodontics fees',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/',
  },
  openGraph: {
    title: 'MDS Prosthodontics in Tamil Nadu — 3 Seats, Fees & Eligibility 2026-27 | JKKN Dental',
    description: 'MDS Prosthodontics, Crown & Bridge at JKKN Dental College — 3 NDC-approved seats, 3 years full-time, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Prosthodontics at JKKN Dental College, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Prosthodontics in Tamil Nadu — 3 Seats, Fees & Eligibility 2026-27 | JKKN Dental',
    description: 'MDS Prosthodontics, Crown & Bridge at JKKN Dental College — 3 NDC-approved seats, 3 years full-time, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function ProsthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
