import { Metadata } from 'next';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College in Erode | JKKN Dental College & Hospital' },
  description: 'Dental College in Erode? JKKN Dental College is just 18 km away at Komarapalayam. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
  keywords: 'dental college in erode, top dental colleges, bds colleges in erode, erode dental college, mds college erode, jkkn dental erode',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Dental College in Erode | JKKN Dental College & Hospital',
    description: 'Dental College in Erode? JKKN Dental College is just 18 km away at Komarapalayam. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    url: 'https://dental.jkkn.ac.in/erode/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College near Erode, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College in Erode | JKKN Dental College & Hospital',
    description: 'Dental College in Erode? JKKN Dental College is just 18 km away at Komarapalayam. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = faqPageSchema(faqs);


const courseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${DENTAL_COURSE_URLS.bds}#course`,
    "url": DENTAL_COURSE_URLS.bds,
    "name": "BDS (Bachelor of Dental Surgery)",
    "description": "4-year undergraduate dental programme with 1-year internship. NDC approved, 100 seats. NEET qualified admission.",
    "provider": dentalOrgRef,
    "educationalLevel": "Undergraduate",
    "timeRequired": "P5Y",
    "occupationalCategory": "Dentist"
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${DENTAL_COURSE_URLS.mds}#course`,
    "url": DENTAL_COURSE_URLS.mds,
    "name": "MDS (Master of Dental Surgery)",
    "description": "3-year postgraduate dental programme in the five sanctioned specialisations: Conservative Dentistry & Endodontics, Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral Medicine & Radiology, and Periodontics.",
    "provider": dentalOrgRef,
    "educationalLevel": "Postgraduate",
    "timeRequired": "P3Y",
    "occupationalCategory": "Dental Specialist"
  }
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Dental College in Erode", "item": "https://dental.jkkn.ac.in/erode/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College in Erode | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/erode/",
  "dateModified": "2026-03-27",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Erode",
  "description": "Step-by-step travel directions from Erode to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-544.",
  "totalTime": "PT40M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Erode", "text": "Head east from Erode Central Bus Stand or Erode Junction towards Komarapalayam on NH-544, the Salem–Coimbatore Highway." },
    { "@type": "HowToStep", "position": 2, "name": "Travel on NH-544", "text": "Follow NH-544 eastward towards Salem for approximately 18 km. The road is a national highway with smooth connectivity." },
    { "@type": "HowToStep", "position": 3, "name": "Reach Komarapalayam", "text": "After approximately 18 km, you will reach Komarapalayam town on NH-544." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 18 km, travel time: 35–40 minutes." }
  ]
};

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
