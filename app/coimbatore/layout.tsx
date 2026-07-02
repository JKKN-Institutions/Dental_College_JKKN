import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jkknSameAsUrls } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: 'Best Dental College Near Coimbatore | JKKN Dental College' },
  description: 'JKKN Dental — 108 km from Coimbatore via NH-544. 92%+ placement, 200+ dental chairs, BDS & MDS. DCI approved. Admissions open 2026.',
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
    description: 'JKKN Dental College & Hospital — 108 km from Coimbatore on NH-544. 92%+ placement, 200+ dental chairs, BDS & MDS. DCI approved.',
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
    description: 'JKKN Dental College & Hospital — 108 km from Coimbatore on NH-544. 92%+ placement, 200+ dental chairs, BDS & MDS. DCI approved.',
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
      "name": "Which is the best dental college near Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital in Komarapalayam, Namakkal is the leading dental institution within 120 km of Coimbatore, offering a 92%+ placement rate and the highest BDS-to-MDS conversion record in the region. The college is approved by the Dental Council of India and affiliated with TN Dr. MGR Medical University. Learners from Coimbatore reach the campus in approximately 1.5 hours via NH-544."
      }
    },
    {
      "@type": "Question",
      "name": "How far is JKKN Dental College from Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital is located 108 km from Coimbatore city, connected directly via National Highway 544 (NH-544, the Salem–Coimbatore Highway). The drive takes approximately 1 hour 30 minutes. Regular inter-city bus services and the college's dedicated transport facility serve learners from Coimbatore."
      }
    },
    {
      "@type": "Question",
      "name": "What is the NEET cutoff for dental colleges near Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NEET cutoff for BDS admission in Tamil Nadu dental colleges varies by category and quota. For government quota seats, candidates typically require a minimum of 450 marks. For private dental college management quota seats, the 50th percentile applies for general category candidates. For JKKN Dental College & Hospital admission, visit www.jkkn.ai/apply/jkkn-admission-2026 for current 2026 cutoff data."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fee for BDS at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital BDS fees depend on the admission quota — state counseling quota or management quota. For current 2026–27 fee structure, visit dental.jkkn.ac.in/fees-structure/ or contact the admissions office at +91 9345855001. Fee details are also available at www.jkkn.ai/apply/jkkn-admission-2026."
      }
    },
    {
      "@type": "Question",
      "name": "What are the MDS specializations at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital offers 5 MDS specializations: Orthodontics and Dentofacial Orthopaedics, Prosthodontics, Oral and Maxillofacial Surgery, Conservative Dentistry and Endodontics, and Periodontics. MDS admission is through NEET MDS scores and Tamil Nadu state counseling."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN Dental College have hostel facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. JKKN Dental College & Hospital provides separate hostel facilities for male and female learners on campus at Komarapalayam, Namakkal. Hostels include Wi-Fi, dining, and 24-hour security. This is particularly convenient for learners from Coimbatore who prefer on-campus residence during weekdays."
      }
    },
    {
      "@type": "Question",
      "name": "Is JKKN Dental College approved by the Dental Council of India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. JKKN Dental College & Hospital is recognized and approved by the Dental Council of India (DCI). The college is also affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai, and holds NAAC accreditation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the placement record of JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital records a 92%+ placement rate for BDS graduates. The highest salary package is 8–10 LPA and the average salary is 3–5 LPA. International placements include the UK (NHS), UAE (Cleveland Clinic Abu Dhabi), and Saudi Arabia. Placement details are at placements.jkkn.ac.in."
      }
    },
    {
      "@type": "Question",
      "name": "How to apply for BDS at JKKN Dental College from Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To apply for BDS at JKKN Dental College & Hospital: (1) Qualify NEET UG 2026. (2) Register for Tamil Nadu state counseling at tnmedicalselection.net. (3) For management quota, apply at www.jkkn.ai/apply/jkkn-admission-2026. (4) Submit NEET scorecard, 10+2 mark sheets, and category certificate. Admissions are open from March to August 2026."
      }
    },
    {
      "@type": "Question",
      "name": "What clinical exposure does JKKN Dental College provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital operates a dedicated teaching hospital with 200+ dental chairs, 100+ hospital beds, and 500+ daily patients. Clinical training begins from Year 1 of the BDS program. The college also conducts community dental camps, providing exposure to rural and urban patient populations."
      }
    },
    {
      "@type": "Question",
      "name": "Is JKKN Dental College better than colleges in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital offers superior placement outcomes (92%+, 8–10 LPA highest) and larger clinical infrastructure (200+ chairs, 500+ daily patients) compared to Coimbatore-based dental colleges. Coimbatore colleges such as Sri Ramakrishna Dental College & Hospital offer NIRF ranking (#18) and in-city location advantages. The best choice depends on individual priorities: outcomes and clinical scale (JKKN) versus urban location and ranking (SRDCH)."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN Dental College offer transport for Coimbatore learners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital provides college transport services for learners. The campus is also served by regular inter-city bus services and train connections via Coimbatore Junction to Erode and Salem, from where campus-direction transport is available. For daily commuters from Coimbatore, on-campus hostel accommodation is recommended."
      }
    }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://dental.jkkn.ac.in/#organization",
  "name": "JKKN Dental College & Hospital",
  "alternateName": ["JKK Nattraja Dental College", "JKKN Dental"],
  "url": "https://dental.jkkn.ac.in/",
  "logo": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "description": "DCI-approved dental college offering BDS (100 seats) and MDS (5 specializations) with a 92%+ placement rate, 200+ dental chairs, and clinical exposure from Year 1.",
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
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "NAAC Accreditation Grade A" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Dental Council of India Approval" }
  ],
  "memberOf": { "@type": "Organization", "name": "The Tamil Nadu Dr. M.G.R. Medical University, Chennai" },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.4120", "longitude": "77.7210" },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "11.4445",
      "longitude": "77.6992"
    },
    "geoRadius": "150000"
  },
  "areaServed": ["Coimbatore", "Salem", "Erode", "Namakkal", "Tiruchengode", "Tiruppur"],
  "sameAs": [
    ...jkknSameAsUrls,
    "https://collegedunia.com/college/10574-jkk-nattraja-dental-college-and-hospital-jkkndch-namakkal",
    "https://www.shiksha.com/college/j-k-k-nattraja-dental-college-and-hospital-namakkal-78331"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://dental.jkkn.ac.in/#dentist",
  "name": "JKKN Dental College & Hospital",
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
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4446062",
    "longitude": "77.7309852"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "image": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "priceRange": "₹₹",
  "medicalSpecialty": "Dentistry",
  "parentOrganization": { "@type": "Organization", "name": "JKKN Institutions", "url": "https://jkkn.ac.in/" }
};

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

const reviewSchema = [
  { "@context": "https://schema.org", "@type": "Review", "author": { "@type": "Person", "name": "Anitha Kumari S." }, "reviewBody": "I had options in Coimbatore, but JKKN's 500+ daily patient flow and 200+ dental chairs convinced me. The clinical exposure here is 3x what my friends at city colleges got.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" } },
  { "@context": "https://schema.org", "@type": "Review", "author": { "@type": "Person", "name": "Praveen Raj K." }, "reviewBody": "JKKN's MDS in Oral Surgery programme is research-driven with published faculty. The 100+ bed hospital meant I worked on complex cases.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" } }
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "JKKN Dental College — Admissions Open 2026-27",
  "description": "Admissions open for BDS (100 seats) and MDS (5 specializations) programmes at JKKN Dental College & Hospital. NEET qualified candidates can apply now.",
  "startDate": "2026-03-01",
  "endDate": "2026-08-31",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "JKKN Dental College & Hospital",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544 (Salem–Coimbatore Highway)",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    }
  },
  "organizer": {
    "@type": "EducationalOrganization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
  "offers": {
    "@type": "Offer",
    "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  }
};

const courseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/academics/bds/#course",
    "url": "https://dental.jkkn.ac.in/academics/bds/",
    "name": "BDS (Bachelor of Dental Surgery)",
    "description": "5-year BDS program (including 1-year compulsory rotatory internship) with 100 seats. DCI approved, affiliated with TN Dr. MGR Medical University. Admission through NEET UG and Tamil Nadu state counseling.",
    "provider": { "@type": "EducationalOrganization", "name": "JKKN Dental College & Hospital", "url": "https://dental.jkkn.ac.in/" },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P5Y",
    "occupationalCategory": "Dentist"
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/academics/mds/#course",
    "url": "https://dental.jkkn.ac.in/academics/mds/",
    "name": "MDS (Master of Dental Surgery)",
    "description": "3-year postgraduate dental programme with multiple specialisations including Orthodontics, Prosthodontics, Oral Surgery, Conservative Dentistry, and Periodontics.",
    "provider": { "@type": "EducationalOrganization", "name": "JKKN Dental College & Hospital", "url": "https://dental.jkkn.ac.in/" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {reviewSchema.map((review, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
