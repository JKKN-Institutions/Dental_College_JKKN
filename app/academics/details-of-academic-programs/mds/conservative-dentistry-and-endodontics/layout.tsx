import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Endodontic Courses in Coimbatore Region | JKKN Dental',
  description: 'Join MDS Conservative Dentistry & Endodontics at JKKN Dental, near Coimbatore. DCI-approved programme with root canal training, microscopy & advanced labs.',
  keywords: 'endodontic courses in Coimbatore, best endodontic courses in india, certificate courses in endodontics, endodontic courses in india, certificate courses in endodontics in india',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics',
  },
  openGraph: {
    title: 'Endodontic Courses in Coimbatore Region | JKKN Dental',
    description: 'Join MDS Conservative Dentistry & Endodontics at JKKN Dental, near Coimbatore. DCI-approved programme with root canal training, microscopy & advanced labs.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Endodontic Courses in Coimbatore Region - JKKN Dental'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endodontic Courses in Coimbatore Region | JKKN Dental',
    description: 'Join MDS Conservative Dentistry & Endodontics at JKKN Dental, near Coimbatore. DCI-approved programme with root canal training, microscopy & advanced labs.',
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
