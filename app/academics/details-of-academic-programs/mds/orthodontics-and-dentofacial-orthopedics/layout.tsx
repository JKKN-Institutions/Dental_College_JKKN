import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Orthodontics | Dental Braces Specialist | JKKN Dental',
  description: 'MDS in Orthodontics and Dentofacial Orthopedics at JKKN Dental College. Specialize in braces, aligners, and jaw correction. 3-year DCI-approved program with advanced clinical training.',
  keywords: 'MDS Orthodontics, dental braces course, orthodontist training, dentofacial orthopedics, orthodontics postgraduate',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'MDS Orthodontics | Dental Braces Specialist | JKKN Dental',
    description: 'MDS in Orthodontics and Dentofacial Orthopedics at JKKN Dental College. Specialize in braces, aligners, and jaw correction. 3-year DCI-approved program with advanced clinical training.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/MDS-Othodontics-hero.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Orthodontics at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Orthodontics | JKKN Dental',
    description: 'MDS in Orthodontics and Dentofacial Orthopedics. 3-year DCI-approved program with advanced clinical training.',
    images: ['/images/MDS-Othodontics-hero.webp'],
  },
};

export default function OrthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
