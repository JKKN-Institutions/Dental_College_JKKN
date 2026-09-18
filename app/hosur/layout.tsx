import { Metadata } from 'next';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College near Hosur | JKKN Dental College & Hospital' },
  description: 'No dental college in Hosur-Krishnagiri belt? JKKN Dental College, Komarapalayam is a direct NH-44 ride via Salem. NDC approved. BDS 100 seats, MDS.',
  keywords: 'dental college in hosur, dental college near hosur, dental college krishnagiri, dental college dharmapuri, bds colleges near hosur, jkkn dental hosur',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/hosur/',
  },
  openGraph: {
    title: 'Dental College near Hosur | JKKN Dental College & Hospital',
    description: 'No dental college in Hosur-Krishnagiri belt? JKKN Dental College, Komarapalayam is a direct NH-44 ride via Salem. NDC approved. BDS 100 seats, MDS.',
    url: 'https://dental.jkkn.ac.in/hosur/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College near Hosur, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College near Hosur | JKKN Dental College & Hospital',
    description: 'No dental college in Hosur-Krishnagiri belt? JKKN Dental College, Komarapalayam is a direct NH-44 ride via Salem. NDC approved. BDS 100 seats, MDS.',
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
    { "@type": "ListItem", "position": 2, "name": "Dental College near Hosur", "item": "https://dental.jkkn.ac.in/hosur/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College near Hosur | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/hosur/",
  "dateModified": "2026-07-09",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Hosur",
  "description": "Step-by-step travel directions from Hosur to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-44 and NH-544.",
  "totalTime": "PT5H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Hosur", "text": "Head south from Hosur bus stand on NH-44 towards Krishnagiri." },
    { "@type": "HowToStep", "position": 2, "name": "Travel on NH-44 to Salem", "text": "Follow NH-44 through Krishnagiri and Dharmapuri to reach Salem — approximately 205 km." },
    { "@type": "HowToStep", "position": 3, "name": "Continue on NH-544 towards Komarapalayam", "text": "From Salem, take NH-544 (Salem–Coimbatore Highway) for approximately 58 km to reach Komarapalayam." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 245 km, travel time: 4.5 to 5 hours." }
  ]
};

export default function HosurLayout({
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
