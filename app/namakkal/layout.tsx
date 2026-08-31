import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jkknSameAsUrls } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: 'Namakkal Dental College | JKKN Dental College & Hospital' },
  description: 'Namakkal Dental College — JKKN Dental College & Hospital, Komarapalayam, NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
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
    description: 'Namakkal Dental College — JKKN Dental College & Hospital, Komarapalayam, NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
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
    description: 'Namakkal Dental College — JKKN Dental College & Hospital, Komarapalayam, NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there a dental college in Namakkal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. JKKN Dental College & Hospital is the leading dental institution in Namakkal district, located at Komarapalayam on NH-544 (Salem–Coimbatore Highway). Approved by the Dental Council of India (DCI) and affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers BDS (100 seats) and MDS (5 specializations) with a 200-chair teaching hospital treating 500+ patients daily."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best dental college in Namakkal district?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital is the leading dental institution in Namakkal district. Located at Komarapalayam, Namakkal district on NH-544, it is DCI approved, NAAC accredited, and affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai. Established in 1987 as part of JKKN Institutions, it is the only institution in the district with a 200-chair teaching hospital."
      }
    },
    {
      "@type": "Question",
      "name": "How far is JKKN Dental College from Namakkal city?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital is located in Namakkal district at Komarapalayam on NH-544. From Namakkal city, the campus is approximately 60 km via Tiruchengode, about 1.5 hours by road. Regular bus services are available from Namakkal to Komarapalayam via Tiruchengode throughout the day. The college also provides campus transport services."
      }
    },
    {
      "@type": "Question",
      "name": "What is the NEET cut-off for BDS at JKKN Dental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on Tamil Nadu DME counselling rounds. NEET 2026 is scheduled for 3 May 2026. JKKN-specific cutoff ranks for 2026-27 will be updated after counselling at www.jkkn.ai/apply/jkkn-admission-2026. Contact the admission office at +91 9345855001 for the latest information."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN Dental have its own hospital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. JKKN Dental College & Hospital has a fully equipped 200-chair dental hospital with 100+ inpatient beds on the same campus in Namakkal district. The hospital draws a large patient base from the local community — learners treat 500+ patients daily and gain extensive clinical skills from their very first year of the BDS programme."
      }
    },
    {
      "@type": "Question",
      "name": "What MDS specialisations are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital, Namakkal district, offers MDS in five specialisations: Orthodontics and Dentofacial Orthopaedics, Prosthodontics and Crown and Bridge, Oral and Maxillofacial Surgery, Conservative Dentistry and Endodontics, and Periodontics. MDS learners benefit from high patient volume and diverse clinical cases at the 200-chair attached hospital."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN Dental provide hostel for learners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. JKKN Dental College & Hospital provides separate hostel facilities for boys and girls with all amenities including mess facility. Learners from Namakkal city can reach the campus in approximately 1.5 hours. College transport services connecting Namakkal district areas are also available."
      }
    },
    {
      "@type": "Question",
      "name": "How can I apply for admission at JKKN Dental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Students can apply online at https://dental.jkkn.ac.in/ or visit the campus in Komarapalayam, Namakkal district. Admissions for BDS and MDS 2026-27 are currently open. The BDS admission process: (1) Qualify NEET-UG, (2) Register for Tamil Nadu DME counselling, (3) Receive allotment to JKKN Dental based on NEET rank, (4) Report to college with original documents. Call +91 9345855001 for guidance."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fee structure for BDS at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BDS fee structure at JKKN Dental College & Hospital, Namakkal district, varies by quota (Government/Management). For official and current fee details, visit dental.jkkn.ac.in/fees-structure/ or call +91 9345855001. Fees are regulated by Tamil Nadu DME and are subject to change per government guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What are the placements from JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital, Namakkal district, reports 92% placement rate (2024-25 batch). Recruiting partners include Clove Dental, Apollo Dental, MyDentist, Sabka Dentist, Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, and Government PHCs. International placements in UK (NHS), Saudi Arabia, UAE, and Singapore are also available. View full records at placements.jkkn.ac.in."
      }
    },
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://dental.jkkn.ac.in/#organization",
  "name": "JKKN Dental College & Hospital",
  "alternateName": ["JKKN Dental", "J.K.K. Nattraja Dental College and Hospital"],
  "url": "https://dental.jkkn.ac.in/",
  "logo": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "description": "DCI approved, NAAC accredited dental college in Namakkal district, affiliated to TN Dr. MGR Medical University. Offers BDS (100 seats) and MDS (5 specializations) with 200-chair teaching hospital treating 500+ patients daily.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544 (Salem–Coimbatore Highway)",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "telephone": "+919345855001",
  "email": "info@jkkn.ac.in",
  "foundingDate": "1987",
  "parentOrganization": { "@type": "Organization", "name": "JKKN Institutions", "url": "https://jkkn.ac.in/" },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "DCI Approved" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "NAAC Accredited" }
  ],
  "memberOf": { "@type": "Organization", "name": "The Tamil Nadu Dr. M.G.R. Medical University, Chennai" },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.4120", "longitude": "77.7210" },
  "sameAs": jkknSameAsUrls
};

const courseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/academics/bds/#course",
    "url": "https://dental.jkkn.ac.in/academics/bds/",
    "name": "BDS (Bachelor of Dental Surgery)",
    "description": "5-year undergraduate dental programme (4 years + 1 year internship). DCI approved, 100 seats. NEET-UG qualified admission via Tamil Nadu DME counselling. Located in Namakkal district, Komarapalayam.",
    "provider": { "@type": "EducationalOrganization", "name": "JKKN Dental College & Hospital", "url": "https://dental.jkkn.ac.in/" },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P5Y",
    "occupationalCategory": "Dentist",
    "numberOfCredits": 100
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/academics/mds/#course",
    "url": "https://dental.jkkn.ac.in/academics/mds/",
    "name": "MDS (Master of Dental Surgery)",
    "description": "3-year postgraduate dental programme with 5 specialisations: Orthodontics, Prosthodontics, Oral Surgery, Conservative Dentistry, and Periodontics. NEET-MDS qualified admission.",
    "provider": { "@type": "EducationalOrganization", "name": "JKKN Dental College & Hospital", "url": "https://dental.jkkn.ac.in/" },
    "educationalLevel": "Postgraduate",
    "timeRequired": "P3Y",
    "occupationalCategory": "Dental Specialist"
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://dental.jkkn.ac.in/#dentist",
  "name": "JKKN Dental College & Hospital",
  "image": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "url": "https://dental.jkkn.ac.in/",
  "telephone": "+919345855001",
  "email": "info@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544 (Salem–Coimbatore Highway)",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.4446062", "longitude": "77.7309852" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "17:00" }
  ],
  "priceRange": "₹₹",
  "medicalSpecialty": "Dentistry",
  "parentOrganization": { "@type": "Organization", "name": "JKKN Institutions", "url": "https://jkkn.ac.in/" }
};

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
      "text": "JKKN Dental College & Hospital is located in Komarapalayam on NH-544 (Salem–Coimbatore Highway), Natarajapuram, Namakkal District, Tamil Nadu 638183. The total journey from Namakkal city is approximately 60 km and takes about 1.5 hours."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
