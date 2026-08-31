import { Metadata } from 'next';
import { jkknSameAsUrls } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College for Kerala Students | JKKN Dental College' },
  description: 'Kerala students: JKKN Dental College, Tamil Nadu offers BDS/MDS via Management Quota with NEET. On the Kerala-Chennai rail line, ~165 km from Palakkad.',
  keywords: 'dental college for kerala students, bds admission kerala students, dental college tamil nadu management quota, bds in tamil nadu for kerala students, jkkn dental kerala',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/kerala/',
  },
  openGraph: {
    title: 'Dental College for Kerala Students | JKKN Dental College',
    description: 'Kerala students: JKKN Dental College, Tamil Nadu offers BDS/MDS via Management Quota with NEET. On the Kerala-Chennai rail line, ~165 km from Palakkad.',
    url: 'https://dental.jkkn.ac.in/kerala/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College for Kerala students'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College for Kerala Students | JKKN Dental College',
    description: 'Kerala students: JKKN Dental College, Tamil Nadu offers BDS/MDS via Management Quota with NEET. On the Kerala-Chennai rail line, ~165 km from Palakkad.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can Kerala students join BDS at JKKN Dental College in Tamil Nadu?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Students from Kerala are admitted to JKKN Dental College and Hospital under the Management Quota with NEET UG qualification. The Government Quota seats are filled through DME Tamil Nadu state counselling for Tamil Nadu students, while Management Quota admission is open to students from Kerala and other states." } },
    { "@type": "Question", "name": "How far is JKKN Dental College from Kerala?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College at Komarapalayam, Namakkal is approximately one hundred and sixty-five kilometres from Palakkad, approximately two hundred and forty kilometres from Thrissur, and approximately three hundred kilometres from Kochi. Most Kerala to Chennai trains stop at Erode Junction, which is eighteen kilometres from the campus." } },
    { "@type": "Question", "name": "How do Kerala students travel to JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "The easiest route is by train — the Kerala to Chennai main rail line passes through Palakkad, Coimbatore and Tiruppur to Erode Junction, eighteen kilometres from the campus. By road, take NH-544 from Palakkad through Coimbatore towards Salem; Komarapalayam is on NH-544 itself." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Kerala students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN Dental provides separate hostels for boys and girls with mess facility on a full residential campus. Learners from Kerala stay on campus through the term and travel home during holidays on the Kerala–Chennai rail line via Erode Junction." } },
    { "@type": "Question", "name": "Is BDS at JKKN taught in English?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The BDS and MDS programmes at JKKN Dental College are taught in English, as in all DCI-approved dental colleges in India, so Kerala students face no language barrier in academics. The hospital's patient base is largely Tamil-speaking, which learners pick up naturally during clinical years." } },
    { "@type": "Question", "name": "Can students from Bengaluru and other states also apply?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Students from Karnataka, including Bengaluru, and from other states are admitted under the Management Quota with NEET UG qualification, the same route as Kerala students. Call plus ninety-one nine three four five eight five five zero zero one for seat availability." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Learners gain hands-on clinical training from Year 1 of the BDS programme, treating patients who visit from surrounding districts every day." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Each department has modern learning labs, and the attached hospital ensures ample clinical cases for postgraduate research and training." } },
    { "@type": "Question", "name": "What is the BDS fee for Kerala students at JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "Under the Management Quota, BDS tuition fee at JKKN Dental College and Hospital is four lakh fifty thousand rupees per year (Dayscholar with Instruments) or five lakh fifty thousand rupees per year (With Hostel and Instruments). Contact nine three four five eight five five zero zero one for the latest 2026-27 fee structure." } },
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
  "description": "DCI approved, NAAC accredited dental college affiliated to TN Dr. MGR Medical University. Offers BDS and MDS programmes with 92% placement support (2024-25 batch).",
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
    { "@type": "ListItem", "position": 2, "name": "Dental College for Kerala Students", "item": "https://dental.jkkn.ac.in/kerala/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College for Kerala Students | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/kerala/",
  "dateModified": "2026-07-09",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Kerala",
  "description": "Step-by-step travel directions from Kerala to JKKN Dental College & Hospital at Komarapalayam, Namakkal by train and road.",
  "totalTime": "PT5H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Board a Chennai-bound train", "text": "From Kochi, Thrissur or Palakkad, board a Chennai-bound express on the Kerala–Chennai main line." },
    { "@type": "HowToStep", "position": 2, "name": "Get down at Erode Junction", "text": "The line passes through Palakkad, Coimbatore and Tiruppur to Erode Junction, approximately 18 km from the campus." },
    { "@type": "HowToStep", "position": 3, "name": "Take a bus or taxi to Komarapalayam", "text": "From Erode, regular buses and taxis cover the 18 km to Komarapalayam on NH-544 in about 35-40 minutes." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. By road: NH-544 from Palakkad via Coimbatore — approximately 165 km from Palakkad." }
  ]
};

export default function KeralaLayout({
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
