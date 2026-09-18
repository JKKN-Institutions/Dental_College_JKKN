import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: { absolute: 'Dental Colleges in Tiruppur | JKKN Dental College' },
  description: 'No dental college in Tiruppur? JKKN Dental College is 67 km away on NH-544. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
  keywords: 'dental colleges in tiruppur, top dental colleges, bds colleges in tiruppur, dental college tiruppur, mds college tiruppur, jkkn dental tiruppur',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/tiruppur/',
  },
  openGraph: {
    title: 'Dental Colleges in Tiruppur | JKKN Dental College',
    description: 'No dental college in Tiruppur? JKKN Dental College is 67 km away on NH-544. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    url: 'https://dental.jkkn.ac.in/tiruppur/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dental Colleges in Tiruppur - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Colleges in Tiruppur | JKKN Dental College',
    description: 'No dental college in Tiruppur? JKKN Dental College is 67 km away on NH-544. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
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
    { "@type": "ListItem", "position": 2, "name": "Dental Colleges in Tiruppur", "item": "https://dental.jkkn.ac.in/tiruppur/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental Colleges in Tiruppur | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/tiruppur/",
  "dateModified": "2026-03-27",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Tiruppur",
  "description": "Step-by-step travel directions from Tiruppur to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-544.",
  "totalTime": "PT1H30M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Tiruppur", "text": "Head east from Tiruppur towards Erode via State Highway. Distance: approximately 18 km to Erode." },
    { "@type": "HowToStep", "position": 2, "name": "Join NH-544 at Erode", "text": "At Erode, join NH-544 (Salem–Coimbatore Highway) heading east towards Salem." },
    { "@type": "HowToStep", "position": 3, "name": "Continue to Komarapalayam", "text": "Follow NH-544 for approximately 49 km through Bhavani and Tiruchengode until you reach Komarapalayam." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 67 km, travel time: 1.5 hours." }
  ]
};

export default function TiruppurLayout({
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
