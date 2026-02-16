import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orthodontic Courses in India | JKKN Dental College',
  description: 'JKKN Dental College offers top orthodontic courses in India. DCI-approved MDS in Orthodontics & Dentofacial Orthopaedics with advanced clinical training.',
  keywords: 'orthodontic courses in india, fellowship courses in orthodontics, orthodontic certification courses, fellowship course in orthodontics, orthodontic courses for dentists',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics',
  },
  openGraph: {
    title: 'Orthodontic Courses in India | JKKN Dental College',
    description: 'JKKN Dental College offers top orthodontic courses in India. DCI-approved MDS in Orthodontics & Dentofacial Orthopaedics with advanced clinical training.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/MDS-Othodontics-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Orthodontic Courses in India - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthodontic Courses in India | JKKN Dental College',
    description: 'JKKN Dental College offers top orthodontic courses in India. DCI-approved MDS in Orthodontics & Dentofacial Orthopaedics with advanced clinical training.',
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
