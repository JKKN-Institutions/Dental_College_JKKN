import { Metadata } from 'next';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College for Kerala Students | JKKN Dental College' },
  description: 'Kerala students: JKKN Dental College, Tamil Nadu offers BDS/MDS via Management Quota with NEET. On the Kerala-Chennai rail line, ~165 km from Palakkad.',
  keywords: 'dental college for kerala students, bds admission kerala students, dental college tamil nadu management quota, bds in tamil nadu for kerala students, jkkn dental kerala',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/kerala/',
  },
  openGraph: {
    title: 'Dental College for Kerala Students | JKKN Dental College',
    description: 'Kerala students: JKKN Dental College, Tamil Nadu offers BDS/MDS via Management Quota with NEET. On the Kerala-Chennai rail line, ~165 km from Palakkad.',
    url: 'https://dental.jkkn.ac.in/kerala/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College for Kerala students'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College for Kerala Students | JKKN Dental College',
    description: 'Kerala students: JKKN Dental College, Tamil Nadu offers BDS/MDS via Management Quota with NEET. On the Kerala-Chennai rail line, ~165 km from Palakkad.',
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
    { "@type": "ListItem", "position": 2, "name": "Dental College for Kerala Students", "item": "https://dental.jkkn.ac.in/kerala/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College for Kerala Students | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/kerala/",
  "dateModified": "2026-07-09",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Kerala",
  "description": "Step-by-step travel directions from Kerala to JKKN Dental College & Hospital at Komarapalayam, Namakkal by train and road.",
  "totalTime": "PT5H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Board a Chennai-bound train", "text": "From Kochi, Thrissur or Palakkad, board a Chennai-bound express on the Kerala–Chennai main line." },
    { "@type": "HowToStep", "position": 2, "name": "Get down at Erode Junction", "text": "The line passes through Palakkad, Coimbatore and Tiruppur to Erode Junction, approximately 18 km from the campus." },
    { "@type": "HowToStep", "position": 3, "name": "Take a bus or taxi to Komarapalayam", "text": "From Erode, regular buses and taxis cover the 18 km to Komarapalayam on NH-544 in about 35-40 minutes." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. By road: NH-544 from Palakkad via Coimbatore — approximately 165 km from Palakkad." }
  ]
};

export default function KeralaLayout({
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
