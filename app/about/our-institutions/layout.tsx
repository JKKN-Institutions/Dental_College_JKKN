import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Institutions | JKKN Group of Educational Institutions',
  description: 'Explore JKKN Group of Educational Institutions including Dental College, Engineering College, Arts & Science College, and Hospital facilities in Komarapalayam, Tamil Nadu.',
  keywords: 'JKKN institutions, JKKN group, educational institutions, JKKN colleges, Komarapalayam colleges',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Institutions | JKKN Group of Educational Institutions',
    description: 'Explore JKKN Group of Educational Institutions including Dental College, Engineering College, Arts & Science College, and Hospital facilities in Komarapalayam, Tamil Nadu.',
    url: 'https://dental.jkkn.ac.in/about/our-institutions',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN Group of Educational Institutions'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Institutions | JKKN Group',
    description: 'JKKN Group of Educational Institutions - Dental, Engineering, Arts & Science College in Komarapalayam.',
    images: ['/images/BDS-hero-image.png'],
  },
};

export default function InstitutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
