import { Metadata } from 'next';
import { jkknSameAsUrls } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College near Trichy | JKKN Dental College & Hospital' },
  description: 'BDS/MDS from Trichy? JKKN Dental College at Komarapalayam is ~145 km via NH-44. DCI approved, NAAC accredited. BDS 100 seats, MDS 5 specialisations.',
  keywords: 'dental college in trichy, dental college near trichy, bds colleges in trichy, trichy dental college, mds college trichy, jkkn dental trichy',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/trichy/',
  },
  openGraph: {
    title: 'Dental College near Trichy | JKKN Dental College & Hospital',
    description: 'BDS/MDS from Trichy? JKKN Dental College at Komarapalayam is ~145 km via NH-44. DCI approved, NAAC accredited. BDS 100 seats, MDS 5 specialisations.',
    url: 'https://dental.jkkn.ac.in/trichy/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College near Trichy, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College near Trichy | JKKN Dental College & Hospital',
    description: 'BDS/MDS from Trichy? JKKN Dental College at Komarapalayam is ~145 km via NH-44. DCI approved, NAAC accredited. BDS 100 seats, MDS 5 specialisations.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Are there any dental colleges in Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "Trichy city has very limited dental college options, and most BDS aspirants from Trichy district travel to colleges in western Tamil Nadu. JKKN Dental College and Hospital at Komarapalayam, Namakkal — approximately one hundred and forty-five kilometres from Trichy via NH-44 — offers BDS with one hundred seats and MDS in five specialisations, affiliated to TN Dr. MGR Medical University, Chennai." } },
    { "@type": "Question", "name": "Which is the best dental college near Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College and Hospital at Komarapalayam is one of the most established DCI-approved dental colleges accessible from Trichy. Founded in 1952, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, it operates a 200+ chair teaching hospital treating 500+ patients daily." } },
    { "@type": "Question", "name": "How far is JKKN Dental College from Trichy?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College is approximately one hundred and forty-five kilometres from Trichy — around three to three and a half hours by road via NH-44 through Namakkal, then NH-544 to Komarapalayam. Direct government buses run from Trichy Central Bus Stand towards Salem and Erode via Namakkal." } },
    { "@type": "Question", "name": "Can Trichy students stay in the hostel at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN Dental provides separate hostels for boys and girls with mess facility. Most learners from Trichy stay on campus and travel home on weekends — Trichy is well connected to Namakkal and Erode by frequent buses and trains." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office at plus ninety-one nine three four five eight five five zero zero one for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Learners gain hands-on clinical training from Year 1 of the BDS programme, treating patients who visit from surrounding districts every day." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Each department has modern learning labs, and the attached hospital ensures ample clinical cases for postgraduate research and training." } },
    { "@type": "Question", "name": "How can Trichy students apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Trichy learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call plus ninety-one nine three four five eight five five zero zero one for personalised guidance on eligibility, fees, and the counselling process." } },
    { "@type": "Question", "name": "What is the BDS fee at JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "At JKKN Dental College and Hospital, BDS tuition fee is as per Government norms under Government Quota and four lakh fifty thousand rupees per year (Dayscholar with Instruments) or five lakh fifty thousand rupees per year (With Hostel and Instruments) under Management Quota. Contact nine three four five eight five five zero zero one for the latest 2026-27 fee structure." } },
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
  "sameAs": jkknSameAsUrls
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
    { "@type": "ListItem", "position": 2, "name": "Dental College near Trichy", "item": "https://dental.jkkn.ac.in/trichy/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College near Trichy | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/trichy/",
  "dateModified": "2026-07-09",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Trichy",
  "description": "Step-by-step travel directions from Trichy to JKKN Dental College & Hospital at Komarapalayam, Namakkal via NH-44 and NH-544.",
  "totalTime": "PT3H30M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Start from Trichy", "text": "Head north-west from Trichy Central Bus Stand or Tiruchchirappalli Junction on NH-44 towards Namakkal." },
    { "@type": "HowToStep", "position": 2, "name": "Travel on NH-44 to Namakkal", "text": "Follow NH-44 for approximately 90 km to reach Namakkal." },
    { "@type": "HowToStep", "position": 3, "name": "Continue towards Komarapalayam", "text": "From Namakkal, continue for approximately 55 km via the Namakkal–Tiruchengode road to reach Komarapalayam on NH-544." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. Total distance: approximately 145 km, travel time: 3 to 3.5 hours." }
  ]
};

export default function TrichyLayout({
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
