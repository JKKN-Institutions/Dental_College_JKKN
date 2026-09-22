import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema, dentalOrgRef, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: { absolute: 'Namakkal Dental College | JKKN Dental College & Hospital' },
  description: 'Namakkal Dental College — JKKN Dental College & Hospital, Komarapalayam, NH-544. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
  keywords: 'namakkal dental college, dental college in namakkal district, namakkal bds college, dental college namakkal, mds college namakkal, jkkn dental namakkal, dental college komarapalayam, namakkal district dental college',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/namakkal/',
  },
  openGraph: {
    title: 'Namakkal Dental College | JKKN Dental College & Hospital',
    description: 'Namakkal Dental College — JKKN Dental College & Hospital, Komarapalayam, NH-544. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    url: 'https://dental.jkkn.ac.in/namakkal/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Namakkal District'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namakkal Dental College | JKKN Dental College & Hospital',
    description: 'Namakkal Dental College — JKKN Dental College & Hospital, Komarapalayam, NH-544. NDC approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
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
    "description": "5-year undergraduate dental programme (4 years + 1 year internship). NDC approved, 100 seats. NEET-UG qualified admission via Tamil Nadu DME counselling. Located in Namakkal district, Komarapalayam.",
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
    "description": "3-year postgraduate dental programme with 5 specialisations: Orthodontics, Prosthodontics, Oral Surgery, Conservative Dentistry, and Periodontics. NEET-MDS qualified admission.",
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
    { "@type": "ListItem", "position": 2, "name": "Namakkal Dental College", "item": "https://dental.jkkn.ac.in/namakkal/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Namakkal Dental College | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/namakkal/",
  "dateModified": "2026-03-27",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Namakkal City",
  "description": "Step-by-step directions to reach JKKN Dental College & Hospital at Komarapalayam, Namakkal district from Namakkal city.",
  "totalTime": "PT1H30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Travel from Namakkal city",
      "text": "From Namakkal city, take the road towards Tiruchengode (approximately 45 km). NH-544 (Salem–Coimbatore Highway) buses are available frequently from Namakkal bus stand."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Reach Tiruchengode",
      "text": "From Tiruchengode, continue on NH-544 towards Komarapalayam — approximately 15 km further. Tiruchengode Railway Station is also located here for those travelling by train."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Arrive at Komarapalayam",
      "text": "JKKN Dental College & Hospital is located in Komarapalayam on NH-544 (Salem–Coimbatore Highway), Natarajapuram, Namakkal District, Tamil Nadu 638183. The total journey from Namakkal town is approximately 65 km and takes about 1.5 hours."
    }
  ]
};

export default function NamakkalLayout({
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
