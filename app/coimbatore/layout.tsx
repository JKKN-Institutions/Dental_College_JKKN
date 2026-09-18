import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: { absolute: 'Best Dental College Near Coimbatore | JKKN Dental College' },
  description: 'JKKN Dental — 108 km from Coimbatore via NH-544. 93.9% placed or in higher studies (2024-25 batch), 200+ dental chairs, BDS & MDS. NDC approved. Admissions open 2026.',
  keywords: 'best dental college near coimbatore, dental colleges in coimbatore, private dental colleges in coimbatore, top dental colleges in coimbatore, bds college coimbatore, jkkn dental coimbatore, dental college 108 km coimbatore',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/coimbatore/',
  },
  openGraph: {
    title: 'Best Dental College Near Coimbatore | JKKN Dental College',
    description: 'JKKN Dental College & Hospital — 108 km from Coimbatore on NH-544. 93.9% placed or in higher studies (2024-25 batch), 200+ dental chairs, BDS & MDS. NDC approved.',
    url: 'https://dental.jkkn.ac.in/coimbatore/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Dental College Near Coimbatore - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College Near Coimbatore | JKKN Dental College',
    description: 'JKKN Dental College & Hospital — 108 km from Coimbatore on NH-544. 93.9% placed or in higher studies (2024-25 batch), 200+ dental chairs, BDS & MDS. NDC approved.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = faqPageSchema(faqs);



const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Best Dental College Near Coimbatore", "item": "https://dental.jkkn.ac.in/coimbatore/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Best Dental College Near Coimbatore — JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/coimbatore/",
  "dateModified": "2026-03-27",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const courseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${DENTAL_COURSE_URLS.bds}#course`,
    "url": DENTAL_COURSE_URLS.bds,
    "name": "BDS (Bachelor of Dental Surgery)",
    "description": "5-year BDS program (including 1-year compulsory rotatory internship) with 100 seats. NDC approved, affiliated with TN Dr. MGR Medical University. Admission through NEET UG and Tamil Nadu state counseling.",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Travel from Coimbatore to JKKN Dental College & Hospital",
  "description": "Step-by-step directions from Coimbatore to JKKN Dental College & Hospital, Komarapalayam via NH-544.",
  "totalTime": "PT1H30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "200-500"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Start from Coimbatore",
      "text": "Start from Coimbatore city (Gandhipuram or Ukkadam) and take NH-544 (Salem–Coimbatore National Highway) heading east towards Tiruppur and Erode."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Pass through Tiruppur",
      "text": "Continue on NH-544 through Tiruppur (~67 km from Coimbatore). Regular inter-city buses from Coimbatore to Namakkal pass through this route."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Pass through Erode",
      "text": "Continue on NH-544 through Erode (~18 km further from Tiruppur). Alternatively, take the train from Coimbatore Junction to Erode Junction and board a bus towards Komarapalayam from there."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Arrive at JKKN Campus in Komarapalayam",
      "text": "Continue on NH-544 from Erode to Komarapalayam (approximately 18 km). JKKN Dental College & Hospital is located directly on NH-544 in Natarajapuram, Komarapalayam. Total distance: ~108 km. Total time: approximately 1.5 hours."
    }
  ]
};

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
