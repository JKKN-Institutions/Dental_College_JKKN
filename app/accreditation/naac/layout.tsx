import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAAC Accreditation A+ Grade | JKKN Dental College Quality',
  description: 'JKKN Dental College is NAAC accredited with A+ grade, reflecting our commitment to quality education, infrastructure, research, and student development in dental education.',
  keywords: 'NAAC accreditation, A+ grade, quality dental education, NAAC grade, accredited dental college',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'NAAC Accreditation A+ Grade | JKKN Dental College Quality',
    description: 'JKKN Dental College is NAAC accredited with A+ grade, reflecting our commitment to quality education, infrastructure, research, and student development in dental education.',
    url: 'https://dental.jkkn.ac.in/accreditation/naac',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'NAAC A+ Accredited JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAAC A+ Grade | JKKN Dental College',
    description: 'JKKN Dental College is NAAC accredited with A+ grade, reflecting our commitment to quality education.',
    images: ['/images/BDS-hero-image.png'],
  },
};

export default function NAACLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
