import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'BDS Admission 2026-27 in Tamil Nadu — Fees & Seats | JKKN' },
  description: 'DCI-approved BDS at JKKN Dental College, Namakkal. 100 seats, NEET admission 2026-27, management quota fee Rs 4.5-5.5 lakh/yr, scholarships & hostel.',
  keywords: 'bds admission 2026 tamil nadu, bds colleges in tamilnadu, bds course fees in private college in tamilnadu, bds colleges in tamil nadu, private bds colleges in tamilnadu, top 10 bds colleges in tamilnadu, bds colleges in tamilnadu with fee structure',
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/',
  },
  openGraph: {
    title: 'BDS Admission 2026-27 in Tamil Nadu — Fees & Seats | JKKN',
    description: 'DCI-approved BDS at JKKN Dental College, Namakkal. 100 seats, NEET admission 2026-27, management quota fee Rs 4.5-5.5 lakh/yr, scholarships & hostel.',
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
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDS Admission 2026-27 in Tamil Nadu — Fees & Seats | JKKN',
    description: 'DCI-approved BDS at JKKN Dental College, Namakkal. 100 seats, NEET admission 2026-27, management quota fee Rs 4.5-5.5 lakh/yr, scholarships & hostel.',
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
