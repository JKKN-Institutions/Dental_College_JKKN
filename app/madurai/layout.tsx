import { Metadata } from 'next';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: "Dental College Near Madurai — BDS & MDS" },
  description: 'BDS/MDS from Madurai? JKKN Dental College at Komarapalayam offers 100 BDS seats + MDS in 5 specialisations with a 200+ chair hospital. Apply 2026.',
  keywords: 'dental college in madurai, dental college near madurai, bds colleges in madurai, madurai dental college, mds college madurai, jkkn dental madurai',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/madurai/',
  },
  openGraph: {
    title: 'Dental College near Madurai | JKKN Dental College & Hospital',
    description: 'BDS/MDS from Madurai? JKKN Dental College at Komarapalayam offers 100 BDS seats + MDS in 5 specialisations with a 200+ chair hospital. Apply 2026.',
    url: 'https://dental.jkkn.ac.in/madurai/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College near Madurai, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College near Madurai | JKKN Dental College & Hospital',
    description: 'BDS/MDS from Madurai? JKKN Dental College at Komarapalayam offers 100 BDS seats + MDS in 5 specialisations with a 200+ chair hospital. Apply 2026.',
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
    { "@type": "ListItem", "position": 2, "name": "Dental College near Madurai", "item": "https://dental.jkkn.ac.in/madurai/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College near Madurai | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/madurai/",
  "dateModified": "2026-07-09",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Madurai",
  "description": "Step-by-step travel directions from Madurai to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-44 and Karur.",
  "totalTime": "PT4H30M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Madurai", "text": "Head north from Madurai on NH-44 towards Dindigul." },
    { "@type": "HowToStep", "position": 2, "name": "Travel via Dindigul to Karur", "text": "Continue on NH-44 through Dindigul to Karur — approximately 140 km from Madurai." },
    { "@type": "HowToStep", "position": 3, "name": "Continue via Erode side to Komarapalayam", "text": "From Karur, continue towards Erode and on to Komarapalayam on NH-544 — approximately 75 km." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 215 km, travel time: 4 to 4.5 hours." }
  ]
};

export default function MaduraiLayout({
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
