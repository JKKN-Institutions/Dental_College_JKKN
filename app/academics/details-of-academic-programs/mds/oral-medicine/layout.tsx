import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Oral Medicine & Radiology | Dental X-Ray Specialist | JKKN',
  description: 'MDS in Oral Medicine and Radiology at JKKN Dental College. Expert training in oral diagnosis, dental imaging, radiology, and oral pathology. 3-year DCI-approved postgraduate program.',
  keywords: 'MDS Oral Medicine, oral radiology, dental imaging, oral diagnosis, dental X-ray specialist',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'MDS Oral Medicine & Radiology | Dental X-Ray Specialist | JKKN',
    description: 'MDS in Oral Medicine and Radiology at JKKN Dental College. Expert training in oral diagnosis, dental imaging, radiology, and oral pathology. 3-year DCI-approved postgraduate program.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'MDS Oral Medicine & Radiology at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Oral Medicine & Radiology | JKKN',
    description: 'MDS in Oral Medicine and Radiology at JKKN Dental College. 3-year DCI-approved postgraduate program.',
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
