import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Management Team | JKKN Dental College Leadership',
  description: 'Meet the leadership team of JKKN Dental College & Hospital. Learn about our experienced management dedicated to providing excellence in dental education and patient care.',
  keywords: 'management team, college leadership, JKKN management, dental college administration',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Management Team | JKKN Dental College Leadership',
    description: 'Meet the leadership team of JKKN Dental College & Hospital. Learn about our experienced management dedicated to providing excellence in dental education and patient care.',
    url: 'https://dental.jkkn.ac.in/our-management',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College Management Team'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Management Team | JKKN Dental College',
    description: 'Meet the leadership team of JKKN Dental College & Hospital. Excellence in dental education and patient care.',
    images: ['/images/BDS-hero-image.png'],
  },
};

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
