import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jkknSameAsUrls } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: 'Dental Colleges in Tiruppur | JKKN Dental College' },
  description: 'No dental college in Tiruppur? JKKN Dental College is 67 km away on NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
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
    description: 'No dental college in Tiruppur? JKKN Dental College is 67 km away on NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
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
    description: 'No dental college in Tiruppur? JKKN Dental College is 67 km away on NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Are there any dental colleges in Tiruppur?", "acceptedAnswer": { "@type": "Answer", "text": "There are no dental colleges inside Tiruppur district. The nearest DCI-approved dental college is JKKN Dental College and Hospital, located sixty-seven kilometres from Tiruppur at Komarapalayam, Namakkal, on the Salem to Coimbatore Highway." } },
    { "@type": "Question", "name": "Which are the best dental colleges near Tiruppur?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College and Hospital is the nearest DCI-approved dental college to Tiruppur, located sixty-seven kilometres away on NH-544. Affiliated to Tamil Nadu Doctor MGR Medical University, Chennai, it offers BDS with one hundred seats and MDS in five specializations." } },
    { "@type": "Question", "name": "How far is JKKN Dental College from Tiruppur?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College and Hospital is approximately sixty-seven kilometres from Tiruppur, about one and a half hours by road via NH-544 Salem to Coimbatore Highway through Erode." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital with 100+ beds right on campus. The hospital serves patients from across western Tamil Nadu including Tiruppur, Erode, and Coimbatore districts — treating 500+ patients daily, ensuring learners get exceptional clinical training from Year 1." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Tiruppur learners benefit from on-campus hostel accommodation and access to diverse clinical cases from across western Tamil Nadu." } },
    { "@type": "Question", "name": "Does JKKN Dental College provide hostel for Tiruppur learners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College provides separate hostel facilities for boys and girls with mess facility. Learners from Tiruppur travel sixty-seven kilometres to campus. College transport services are available." } },
    { "@type": "Question", "name": "How can I apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Tiruppur learners can apply online at https://dental.jkkn.ac.in/ or call +91 9345855001 for personalised guidance. The campus is accessible via Erode (NH-544). Admissions for BDS and MDS 2026-27 are currently open — hostel accommodation is available for outstation learners." } },
    { "@type": "Question", "name": "How many dental colleges are there in Tiruppur district?", "acceptedAnswer": { "@type": "Answer", "text": "There are zero dental colleges inside Tiruppur district. The nearest DCI-approved dental college is JKKN Dental College and Hospital at Komarapalayam, Namakkal, sixty-seven kilometres from Tiruppur via NH-544." } },
    { "@type": "Question", "name": "Which dental colleges near Tiruppur accept NEET scores?", "acceptedAnswer": { "@type": "Answer", "text": "All DCI-approved dental colleges near Tiruppur accept NEET UG scores for BDS admission through DME Tamil Nadu counselling. JKKN Dental College and Hospital is sixty-seven kilometres away, RVS Dental College is fifty-five kilometres away in Coimbatore." } },
    { "@type": "Question", "name": "What is the BDS fee at dental colleges near Tiruppur?", "acceptedAnswer": { "@type": "Answer", "text": "At JKKN Dental College and Hospital, BDS tuition fee is as per Government Quota norms under Government Quota and four lakh fifty thousand rupees per year (Dayscholar with Instruments) or five lakh fifty thousand rupees per year (With Hostel and Instruments) under Management Quota. Contact nine three four five eight five five zero zero one for the latest fee structure." } },
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
  "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
  "offers": {
    "@type": "Offer",
    "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  }
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
  "priceRange": "₹₹",
  "medicalSpecialty": "Dentistry",
  "image": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "parentOrganization": { "@type": "Organization", "name": "JKKN Institutions", "url": "https://jkkn.ac.in/" }
};

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

const reviewSchema = [
  { "@context": "https://schema.org", "@type": "Review", "author": { "@type": "Person", "name": "Dharani Selvam" }, "reviewBody": "I came from Tiruppur and the on-campus hostel made it feel like home. The 200+ dental chairs and daily patient flow gave me clinical skills that most fresh graduates lack.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" } },
  { "@context": "https://schema.org", "@type": "Review", "author": { "@type": "Person", "name": "Nithya Sri R." }, "reviewBody": "JKKN's MDS programme in Conservative Dentistry was my top choice. The faculty are published researchers who bring real-world expertise.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" } }
];

export default function TiruppurLayout({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {reviewSchema.map((review, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }} />
      ))}
      <Header />
      {children}
      <Footer />
    </>
  );
}
