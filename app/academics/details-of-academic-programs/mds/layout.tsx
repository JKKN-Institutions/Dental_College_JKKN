import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Colleges in Tamilnadu | JKKN Dental College & Hospital',
  description: 'JKKN Dental is one of the top MDS colleges in Tamilnadu. DCI-approved MDS courses in multiple specialisations with advanced clinical training & hospital.',
  keywords: 'mds colleges in tamilnadu, mds dental colleges in tamilnadu, mds seats in tamilnadu, total mds seats in tamilnadu, dental colleges in tamilnadu for mds, mds course fees in tamilnadu, mds course in tamilnadu, mds fees in tamilnadu, mds fees structure in tamilnadu, top dental colleges in tamilnadu for mds, mds course duration in tamilnadu, mds colleges in coimbatore',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds',
  },
  openGraph: {
    title: 'MDS Colleges in Tamilnadu | JKKN Dental College & Hospital',
    description: 'JKKN Dental is one of the top MDS colleges in Tamilnadu. DCI-approved MDS courses in multiple specialisations with advanced clinical training & hospital.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Colleges in Tamil Nadu - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Colleges in Tamilnadu | JKKN Dental College & Hospital',
    description: 'JKKN Dental is one of the top MDS colleges in Tamilnadu. DCI-approved MDS courses in multiple specialisations with advanced clinical training & hospital.',
    images: ['/images/BDS-hero-image.webp'],
  },
};

export default function MDSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
