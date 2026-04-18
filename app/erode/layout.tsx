import { Metadata } from 'next';
import { jkknSameAsUrls } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College in Erode | JKKN Dental College & Hospital' },
  description: 'Dental College in Erode? JKKN Dental College is just 18 km away at Komarapalayam. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
  keywords: 'dental college in erode, top dental colleges, bds colleges in erode, erode dental college, mds college erode, jkkn dental erode',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Dental College in Erode | JKKN Dental College & Hospital',
    description: 'Dental College in Erode? JKKN Dental College is just 18 km away at Komarapalayam. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    url: 'https://dental.jkkn.ac.in/erode/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College near Erode, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College in Erode | JKKN Dental College & Hospital',
    description: 'Dental College in Erode? JKKN Dental College is just 18 km away at Komarapalayam. DCI approved, NAAC accredited. BDS 100 seats, MDS. Apply 2026.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Are there any dental colleges in Erode?", "acceptedAnswer": { "@type": "Answer", "text": "Erode district has limited dental college options. The nearest well-established DCI-approved dental college to Erode is JKKN Dental College and Hospital, located eighteen kilometres from Erode at Komarapalayam, Namakkal, on NH-544. It offers BDS with one hundred seats and MDS in five specializations, affiliated to TN Dr. MGR Medical University, Chennai." } },
    { "@type": "Question", "name": "How many dental colleges are in Erode district?", "acceptedAnswer": { "@type": "Answer", "text": "Erode district has one dental college, Nandha Dental College and Hospital, which offers BDS only. For students seeking both BDS and MDS with a larger teaching hospital and stronger placements, JKKN Dental College and Hospital at Komarapalayam is only eighteen kilometres away via NH-544." } },
    { "@type": "Question", "name": "Which is the best dental college in Erode?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College and Hospital, located just eighteen kilometres from Erode on NH-544, is widely regarded as one of the top dental colleges accessible from Erode. Approved by DCI, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support." } },
    { "@type": "Question", "name": "How far is JKKN Dental from Erode?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental is approximately eighteen kilometres from Erode city centre, which takes about thirty-five to forty minutes by road via NH-544, the direct Salem to Coimbatore Highway. Regular government and private buses are available from Erode Central Bus Stand to Komarapalayam throughout the day." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office at plus ninety-one nine three four five eight five five zero zero one for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Students from Erode benefit from treating 500+ patients daily who visit from surrounding districts, gaining hands-on clinical training from Year 1 of the BDS programme." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Each department has dedicated faculty, modern labs, and the attached hospital ensures ample clinical cases for postgraduate research and training." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Erode students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just eighteen kilometres away — about thirty-five to forty minutes on NH-544. College transport services are available from Erode." } },
    { "@type": "Question", "name": "How can I apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Erode students can apply online at https://dental.jkkn.ac.in/ or visit the campus directly — just a thirty-five minute drive on NH-544. Admissions for BDS and MDS 2026-27 are currently open. Call plus ninety-one nine three four five eight five five zero zero one for personalised guidance on eligibility, fees, and the counselling process." } },
    { "@type": "Question", "name": "What is the BDS fee at dental colleges near Erode?", "acceptedAnswer": { "@type": "Answer", "text": "At JKKN Dental College and Hospital, the nearest major dental college to Erode, BDS tuition fee is as per Government Quota norms under Government Quota and four lakh fifty thousand rupees per year (Dayscholar with Instruments) or five lakh fifty thousand rupees per year (With Hostel and Instruments) under Management Quota. Contact nine three four five eight five five zero zero one for the latest 2026-27 fee structure." } },
    { "@type": "Question", "name": "Which dental colleges near Erode accept NEET scores?", "acceptedAnswer": { "@type": "Answer", "text": "All DCI-approved dental colleges near Erode accept NEET UG scores for BDS admission through DME Tamil Nadu counselling. These include JKKN Dental College and Hospital at Komarapalayam eighteen kilometres away, KSR Institute of Dental Science at Tiruchengode fourteen kilometres away, and Nandha Dental College in Erode city." } },
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
  "description": "DCI approved, NAAC accredited dental college affiliated to TN Dr. MGR Medical University. Offers BDS and MDS programmes with 92%+ placement support.",
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
  "foundingDate": "1952",
  "parentOrganization": { "@type": "Organization", "name": "JKKN Institutions", "url": "https://jkkn.ac.in/" },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "DCI Approved" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "NAAC Accredited" }
  ],
  "accreditedBy": { "@type": "Organization", "name": "Dental Council of India" },
  "memberOf": { "@type": "Organization", "name": "The Tamil Nadu Dr. M.G.R. Medical University, Chennai" },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.4446062", "longitude": "77.7309852" },
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
  "name": "JKKN Dental College BDS/MDS Admissions 2026-27",
  "description": "BDS and MDS admissions open at JKKN Dental College & Hospital for the 2026-27 academic year. Apply at www.jkkn.ai/apply/jkkn-admission-2026.",
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
  "@type": ["LocalBusiness", "Dentist"],
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
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4446062",
    "longitude": "77.7309852"
  },
  "hasMap": "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
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
  "name": "Dental College in Erode | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/erode/",
  "dateModified": "2026-03-27",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Erode",
  "description": "Step-by-step travel directions from Erode to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-544.",
  "totalTime": "PT40M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Erode", "text": "Head east from Erode Central Bus Stand or Erode Junction towards Komarapalayam on NH-544, the Salem–Coimbatore Highway." },
    { "@type": "HowToStep", "position": 2, "name": "Travel on NH-544", "text": "Follow NH-544 eastward towards Salem for approximately 18 km. The road is a national highway with smooth connectivity." },
    { "@type": "HowToStep", "position": 3, "name": "Reach Komarapalayam", "text": "After approximately 18 km, you will reach Komarapalayam town on NH-544." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 18 km, travel time: 35–40 minutes." }
  ]
};

const reviewSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Priya Lakshmi R." },
    "reviewBody": "Coming from Erode, I was looking for a quality dental college nearby. JKKN was just 18 km away with excellent clinical training — we treat 500+ patients daily. The hands-on experience from Year 1 made all the difference in my career.",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": { "@type": "EducationalOrganization", "@id": "https://dental.jkkn.ac.in/#organization", "name": "JKKN Dental College & Hospital" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Karthik Sundaram" },
    "reviewBody": "The MDS programme at JKKN is outstanding. Modern simulation labs, experienced faculty, and a 200+ chair dental hospital gave me unmatched clinical exposure. Being from Erode, the 18 km commute was never a problem.",
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
