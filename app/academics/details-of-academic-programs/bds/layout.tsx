import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best BDS Colleges in Tamilnadu | JKKN Dental College',
  description: 'Searching for the best BDS college in Tamilnadu? JKKN Dental, Namakkal offers DCI-approved BDS with advanced labs, clinical rotations & expert faculty.',
  keywords: 'best bds colleges in tamilnadu, bds colleges in tamilnadu, bds course fees in private college in tamilnadu, bds colleges in tamil nadu, private bds colleges in tamilnadu, top 10 bds colleges in tamilnadu, bds colleges in tamilnadu with fee structure',
  alternates: {
    canonical: '/academics/details-of-academic-programs/bds',
  },
  openGraph: {
    title: 'Best BDS Colleges in Tamilnadu | JKKN Dental College',
    description: 'Searching for the best BDS college in Tamilnadu? JKKN Dental, Namakkal offers DCI-approved BDS with advanced labs, clinical rotations & expert faculty.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best BDS Colleges in Tamilnadu - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best BDS Colleges in Tamilnadu | JKKN Dental College',
    description: 'Searching for the best BDS college in Tamilnadu? JKKN Dental, Namakkal offers DCI-approved BDS with advanced labs, clinical rotations & expert faculty.',
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
