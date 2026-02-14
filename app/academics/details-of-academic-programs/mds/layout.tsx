import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Specializations | Postgraduate Dental Courses | JKKN',
  description: 'Pursue MDS (Master of Dental Surgery) at JKKN Dental College. 5 DCI-approved specializations: Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry, Oral Medicine. Expert faculty, advanced facilities.',
  keywords: 'MDS course, Master of Dental Surgery, MDS specializations, postgraduate dental program, MDS admission, dental postgraduate courses',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'MDS Specializations | Postgraduate Dental Courses | JKKN',
    description: 'Pursue MDS (Master of Dental Surgery) at JKKN Dental College. 5 DCI-approved specializations: Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry, Oral Medicine.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Specializations at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Specializations | JKKN',
    description: 'Pursue MDS at JKKN Dental College. 5 DCI-approved specializations with expert faculty and advanced facilities.',
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
