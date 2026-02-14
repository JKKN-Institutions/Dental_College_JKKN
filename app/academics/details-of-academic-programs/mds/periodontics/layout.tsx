import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Periodontics | Gum Disease Specialist Course | JKKN Dental',
  description: 'MDS in Periodontics at JKKN Dental College. 3-year postgraduate program in gum disease treatment, dental implants, and periodontal surgery. DCI approved, expert faculty, modern facilities.',
  keywords: 'MDS Periodontics, periodontology course, gum disease specialist, dental implants training, periodontics postgraduate',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'MDS Periodontics | Gum Disease Specialist Course | JKKN Dental',
    description: 'MDS in Periodontics at JKKN Dental College. 3-year postgraduate program in gum disease treatment, dental implants, and periodontal surgery. DCI approved, expert faculty, modern facilities.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/periodontics',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/MDS-Periodontics-hero.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Periodontics at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Periodontics | JKKN Dental',
    description: 'MDS in Periodontics. 3-year postgraduate program in gum disease treatment, dental implants, and periodontal surgery.',
    images: ['/images/MDS-Periodontics-hero.webp'],
  },
};

export default function PeriodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
