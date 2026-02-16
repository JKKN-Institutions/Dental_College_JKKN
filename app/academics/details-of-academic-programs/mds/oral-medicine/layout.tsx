import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fellowship After MDS Oral Medicine & Radiology | JKKN',
  description: 'Explore fellowship courses after MDS in Oral Medicine and Radiology at JKKN Dental College. Advanced training in oral diagnostics, radiology & patient care.',
  keywords: 'fellowship courses after mds in oral medicine and radiology',
  alternates: {
    canonical: '/academics/details-of-academic-programs/mds/oral-medicine',
  },
  openGraph: {
    title: 'Fellowship After MDS Oral Medicine & Radiology | JKKN',
    description: 'Explore fellowship courses after MDS in Oral Medicine and Radiology at JKKN Dental College. Advanced training in oral diagnostics, radiology & patient care.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Fellowship After MDS Oral Medicine & Radiology - JKKN'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fellowship After MDS Oral Medicine & Radiology | JKKN',
    description: 'Explore fellowship courses after MDS in Oral Medicine and Radiology at JKKN Dental College. Advanced training in oral diagnostics, radiology & patient care.',
    images: ['/images/BDS-hero-image.png'],
  },
};

export default function OralMedicineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
