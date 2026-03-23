import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jkknSameAsUrls } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: 'Namakkal Dental College | JKKN Dental College & Hospital' },
  description: 'Namakkal dental college — JKKN Dental, Komarapalayam. DCI approved, NAAC accredited. BDS & MDS with 200+ chair hospital & 90%+ placements.',
  keywords: 'namakkal dental college, top dental colleges, namakkal bds college, dental college namakkal, mds college namakkal, jkkn dental namakkal, dental college komarapalayam',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/namakkal/',
  },
  openGraph: {
    title: 'Namakkal Dental College | JKKN Dental College & Hospital',
    description: 'Namakkal dental college — JKKN Dental, Komarapalayam. DCI approved, NAAC accredited. BDS & MDS with 200+ chair hospital & 90%+ placements.',
    url: 'https://dental.jkkn.ac.in/namakkal/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Namakkal Dental College - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namakkal Dental College | JKKN Dental College & Hospital',
    description: 'Namakkal dental college — JKKN Dental, Komarapalayam. DCI approved, NAAC accredited. BDS & MDS with 200+ chair hospital & 90%+ placements.',
    images: ['/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Which is the best Namakkal dental college?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College & Hospital is the leading Namakkal dental college, located just 5-10 km from Namakkal on NH-544. Approved by DCI, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support." } },
    { "@type": "Question", "name": "How far is JKKN Dental from Namakkal?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental is approximately 5-10 km from Namakkal city centre, which takes about 15-20 minutes by road via NH-544 (Salem-Coimbatore Highway). Frequent local buses and auto-rickshaws are available from Namakkal town to Komarapalayam throughout the day." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has its own attached dental hospital on campus. This hospital serves patients from the surrounding community and provides BDS students with extensive hands-on clinical training from the early years of the programme." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College & Hospital offers MDS in multiple specialisations including Orthodontics, Prosthodontics, Oral Surgery, Conservative Dentistry, Periodontics, and more. Admission is through NEET MDS counselling. Contact the admission office for the full list of available specialisations." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Namakkal students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental provides separate hostel facilities for boys and girls. Students from Namakkal can also opt for daily commute as the campus is just 5-10 km away — just 15-20 minutes. College transport services are also available." } },
    { "@type": "Question", "name": "How can I apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "You can apply online through the official website at https://dental.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance." } },
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://dental.jkkn.ac.in/#organization",
  "name": "JKKN Dental College & Hospital",
  "alternateName": "JKKN Dental",
  "url": "https://dental.jkkn.ac.in/",
  "logo": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "description": "DCI approved, NAAC accredited dental college affiliated to TN Dr. MGR Medical University. Offers BDS and MDS programmes with 90%+ placement support.",
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
  "sameAs": jkknSameAsUrls,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "400"
  }
};

const courseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/academics/bds/#course",
    "url": "https://dental.jkkn.ac.in/academics/bds/",
    "name": "BDS (Bachelor of Dental Surgery)",
    "description": "4-year undergraduate dental programme with 1-year internship. DCI approved, 100 seats. NEET qualified admission.",
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
  "url": "https://admission.jkkn.ac.in/",
  "offers": {
    "@type": "Offer",
    "url": "https://admission.jkkn.ac.in/",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  }
};

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
  "dateModified": "2026-03-23",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".text-lg", ".text-base"],
  },
};

const reviewSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Surya Prakash K." },
    "reviewBody": "As a Namakkal local, JKKN Dental College was the obvious choice. The campus is just 10 km from town, and the 200+ chair hospital gave me incredible clinical experience.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Divya Bharathi M." },
    "reviewBody": "The research opportunities at JKKN are exceptional. Our faculty guided me through two publications during my MDS.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" }
  }
];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {reviewSchema.map((review, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}
      <Header />
      {children}
      <Footer />
    </>
  );
}
