import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Trust | JKKN Educational Trust History & Vision',
  description: 'Learn about JKKN Educational Trust, founded in 1987. Discover our mission to provide quality dental education and healthcare services in Tamil Nadu through JKKN Dental College.',
  keywords: 'JKKN Trust, educational trust, college trust, JKKN history, dental college foundation',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Trust | JKKN Educational Trust History & Vision',
    description: 'Learn about JKKN Educational Trust, founded in 1987. Discover our mission to provide quality dental education and healthcare services in Tamil Nadu through JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/our-trust',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN Educational Trust'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Trust | JKKN Educational Trust',
    description: 'JKKN Educational Trust, founded in 1987. Quality dental education and healthcare services in Tamil Nadu.',
    images: ['/images/BDS-hero-image.png'],
  },
};

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
