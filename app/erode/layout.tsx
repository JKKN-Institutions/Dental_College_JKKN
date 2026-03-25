import { Metadata } from 'next';
import { jkknSameAsUrls } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College in Erode | JKKN Dental College' },
  description: 'Top dental college near Erode — JKKN Dental, 35 km on NH-544. DCI approved, NAAC accredited. BDS & MDS with 90%+ placements, hostel & transport.',
  keywords: 'dental college in erode, top dental colleges, bds colleges in erode, erode dental college, mds college erode, jkkn dental erode',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Dental College in Erode | JKKN Dental College',
    description: 'Top dental college near Erode — JKKN Dental, 35 km on NH-544. DCI approved, NAAC accredited. BDS & MDS with 90%+ placements, hostel & transport.',
    url: 'https://dental.jkkn.ac.in/erode/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dental College in Erode - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College in Erode | JKKN Dental College',
    description: 'Top dental college near Erode — JKKN Dental, 35 km on NH-544. DCI approved, NAAC accredited. BDS & MDS with 90%+ placements, hostel & transport.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Which is the best dental college in Erode?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College & Hospital is one of the top dental colleges in Erode district, located just 30-40 km away on NH-544. Approved by DCI, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support." } },
    { "@type": "Question", "name": "How far is JKKN Dental from Erode?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental is approximately 30-40 km from Erode city centre, which takes about 40-50 minutes by road via NH-544 — direct highway connectivity. Regular government and private buses are available from Erode Central Bus Stand to Komarapalayam throughout the day." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Students from Erode benefit from treating 500+ patients daily who visit from surrounding districts, gaining hands-on clinical training from Year 1 of the BDS programme." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Each department has dedicated faculty, modern labs, and the attached hospital ensures ample clinical cases for postgraduate research and training." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Erode students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just 40-50 minutes away. College transport services are available." } },
    { "@type": "Question", "name": "How can I apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Erode students can apply online at https://dental.jkkn.ac.in/ or visit the campus directly — just a 40-minute drive on NH-544. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process." } },
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
    { "@type": "ListItem", "position": 2, "name": "Dental College in Erode", "item": "https://dental.jkkn.ac.in/erode/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College in Erode | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/erode/",
  "dateModified": "2026-03-23",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"],
  },
};

const reviewSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Priya Lakshmi R." },
    "reviewBody": "Coming from Erode, I was looking for a quality dental college nearby. JKKN was just 35 km away with excellent clinical training — we treat 500+ patients daily.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Karthik Sundaram" },
    "reviewBody": "The MDS programme at JKKN is outstanding. Modern simulation labs, experienced faculty, and a 200+ chair dental hospital gave me unmatched clinical exposure.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" }
  }
];

export default function ErodeLayout({
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
