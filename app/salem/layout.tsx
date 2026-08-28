import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jkknSameAsUrls } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: 'Dental Colleges in Salem | JKKN Dental College' },
  description: 'Dental Colleges in Salem? JKKN Dental College is 60 km away at Komarapalayam via NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
  keywords: 'dental colleges in salem, top dental colleges, bds colleges in salem, dental college salem, mds college salem, jkkn dental salem',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/salem/',
  },
  openGraph: {
    title: 'Dental Colleges in Salem | JKKN Dental College',
    description: 'Dental Colleges in Salem? JKKN Dental College is 60 km away at Komarapalayam via NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    url: 'https://dental.jkkn.ac.in/salem/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Dental Colleges in Salem - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Colleges in Salem | JKKN Dental College',
    description: 'Dental Colleges in Salem? JKKN Dental College is 60 km away at Komarapalayam via NH-544. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Are there any dental colleges in Salem?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. There are dental colleges in and around Salem, Tamil Nadu. Within Salem city, Vinayaka Mission's Sankarachariyar Dental College is a private institution. Additionally, JKKN Dental College and Hospital is located sixty kilometres from Salem at Komarapalayam, Namakkal, on NH-544 (Salem to Coimbatore Highway), and is DCI-approved and NAAC accredited." } },
    { "@type": "Question", "name": "How many dental colleges are in Salem district?", "acceptedAnswer": { "@type": "Answer", "text": "There are dental institutions in and near Salem district. Vinayaka Mission's Sankarachariyar Dental College is located within Salem city. Government Medical College Salem also has dental programs. JKKN Dental College and Hospital, located sixty kilometres away at Komarapalayam, Namakkal via NH-544, is the nearest DCI-approved and NAAC accredited private dental college outside the city." } },
    { "@type": "Question", "name": "Which are the best dental colleges in Salem?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College & Hospital is among the top dental colleges in Salem region, located approximately sixty kilometres from Salem on NH-544. Approved by DCI, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers BDS with one hundred seats and MDS in five specializations with strong placement support." } },
    { "@type": "Question", "name": "How far is JKKN Dental from Salem?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental is approximately sixty kilometres from Salem city centre, which takes about one hour by road via NH-544 (Salem-Coimbatore Highway). TN State Transport buses from Salem New Bus Stand to Komarapalayam run regularly throughout the day." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office at plus nine one nine three four five eight five five zero zero one for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has its own 200+ chair dental hospital and 100+ bed facility on campus. Patients from Salem, Namakkal, and surrounding districts visit daily — with 500+ patients treated every day, learners gain extensive hands-on clinical experience from Year 1." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Salem learners can commute or stay on campus while accessing 500+ daily patient cases for their postgraduate research and clinical training." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Salem learners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental provides separate hostel facilities for boys and girls. Learners from Salem can also opt for daily commute as the campus is approximately one hour away via NH-544. College transport services are also available." } },
    { "@type": "Question", "name": "What is the BDS fee at dental colleges near Salem?", "acceptedAnswer": { "@type": "Answer", "text": "At JKKN Dental College and Hospital, BDS tuition fee is as per Government Quota norms under Government Quota and four lakh fifty thousand rupees per year (Dayscholar with Instruments) or five lakh fifty thousand rupees per year (With Hostel and Instruments) under Management Quota. Contact nine three four five eight five five zero zero one or visit admission dot jkkn dot ac dot in for the latest fee structure and 2026 admission details." } },
    { "@type": "Question", "name": "Can Salem learners get BDS admission at JKKN through NEET?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Salem learners can secure BDS admission at JKKN Dental College and Hospital through NEET-UG scores via Tamil Nadu DME state quota counselling or management quota. Eighty-five percent of seats are allocated through state quota and fifteen percent through All India Quota. JKKN is sixty kilometres from Salem via NH-544." } },
    { "@type": "Question", "name": "How can I apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Salem learners can apply online at https://dental.jkkn.ac.in/ or visit the campus directly — approximately one hour via NH-544. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process." } },
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
  "description": "JKKN Dental College & Hospital is a DCI-approved dental college located at Komarapalayam, Namakkal, Tamil Nadu, approximately 60 km from Salem via NH-544. Offering BDS (100 seats) and MDS programs, with 200+ dental chairs, 500+ daily patients, and 92% placement assistance (2024-25 batch).",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
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
  "geo": { "@type": "GeoCoordinates", "latitude": "11.4499", "longitude": "77.6988" },
  "sameAs": [
    ...jkknSameAsUrls,
    "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
    "https://www.facebook.com/jkkndental",
    "https://www.youtube.com/@jkkndental"
  ]
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
    "occupationalCategory": "Dentist",
    "offers": {
      "@type": "Offer",
      "category": "Tuition",
      "priceCurrency": "INR",
      "price": "250000",
      "description": "Government Quota fee — as per Govt Norms. Management Quota: INR 450000/year (Dayscholar with Instruments) or INR 550000/year (With Hostel and Instruments)."
    }
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
      "streetAddress": "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
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
  "image": "https://dental.jkkn.ac.in/images/jkkn-dental-logo.webp",
  "url": "https://dental.jkkn.ac.in/",
  "telephone": "+919345855001",
  "email": "info@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
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
  "parentOrganization": {
    "@type": "Organization",
    "name": "JKKN Institutions",
    "url": "https://jkkn.ac.in/"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Dental Colleges in Salem", "item": "https://dental.jkkn.ac.in/salem/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental Colleges in Salem | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/salem/",
  "dateModified": "2026-03-27",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Salem",
  "description": "Step-by-step travel directions from Salem to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-544.",
  "totalTime": "PT1H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Salem", "text": "Head west from Salem city centre towards Namakkal on NH-544 (Salem-Coimbatore Highway). Distance from Salem to Komarapalayam is approximately 60 km." },
    { "@type": "HowToStep", "position": 2, "name": "Travel via NH-544", "text": "Continue on NH-544 (Salem-Coimbatore Highway) heading west towards Erode. The highway provides a direct and well-maintained route." },
    { "@type": "HowToStep", "position": 3, "name": "Reach Komarapalayam", "text": "After approximately 60 km on NH-544, you will reach Komarapalayam. JKKN Dental College & Hospital is located at Natarajapuram on NH-544 in Komarapalayam." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 60 km from Salem, travel time: approximately 1 hour." }
  ]
};

const reviewSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Sneha Ramesh" },
    "reviewBody": "From Salem, JKKN was approximately 60 km on NH-544 — closer than most dental colleges in the region. The clinical exposure here is unmatched with 500+ patients daily.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": {
      "@type": "EducationalOrganization",
      "@id": "https://dental.jkkn.ac.in/#organization",
      "name": "JKKN Dental College & Hospital"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Vijay Anand S." },
    "reviewBody": "I did my MDS in Prosthodontics at JKKN and the infrastructure blew me away — modern simulation labs and digital dentistry equipment.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": {
      "@type": "EducationalOrganization",
      "@id": "https://dental.jkkn.ac.in/#organization",
      "name": "JKKN Dental College & Hospital"
    }
  }
];

export default function SalemLayout({
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
