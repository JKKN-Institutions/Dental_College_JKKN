import { Metadata } from 'next';

export const metadata: Metadata = {
  // 2026-11-02 (Dental Step 3 of the 10,300-lead plan): Google shows THIS page, not the homepage, for
  // "dental colleges in tamilnadu" (organic #4, desktop, Komarapalayam, 2026-11-02), but the old title was
  // 95 characters and the description about 300, so both were cut in the result. "Affiliated" stays in
  // the title: deemed universities are not in this list (see the page), so "22 dental colleges" alone
  // would read as the whole state.
  title: { absolute: 'Dental Colleges in Tamil Nadu: 22 Affiliated BDS Colleges' },
  description:
    '22 dental colleges in Tamilnadu affiliated to TN Dr M.G.R. Medical University: 2,100 BDS seats for 2025-26, the 19 private colleges and NIRF 2025 ranks.',
  keywords:
    'dental colleges in tamilnadu, dental college in tamil nadu, list of dental colleges in tamilnadu, bds colleges in tamilnadu, private dental colleges in tamilnadu, government dental colleges in tamilnadu, top dental colleges in tamilnadu, best dental colleges in tamilnadu',
  alternates: {
    canonical: '/academics/details-of-academic-programs/bds/colleges-in-tamil-nadu/',
  },
  openGraph: {
    title: 'Dental Colleges in Tamil Nadu — 22 BDS Colleges and 2,100 Seats',
    description:
      '22 affiliated dental colleges, 2,100 sanctioned BDS seats for 2025-26, from the university’s own intake document.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/colleges-in-tamil-nadu/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/og-jkkn-dental-clinical-training.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental colleges in Tamil Nadu 2025-26 — sanctioned BDS intake',
      },
    ],
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Colleges in Tamil Nadu — 22 BDS Colleges and 2,100 Seats',
    description:
      '22 affiliated dental colleges, 2,100 sanctioned BDS seats for 2025-26, college by college.',
    images: ['/images/og-jkkn-dental-clinical-training.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
