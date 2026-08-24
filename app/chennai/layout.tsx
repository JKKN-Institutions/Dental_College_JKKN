import { Metadata } from 'next';
import { jkknSameAsUrls } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College for Chennai Students | JKKN Dental College' },
  description: 'Chennai students: JKKN Dental College, Komarapalayam offers BDS/MDS with a 200+ chair hospital, residential campus & direct trains to Erode Junction.',
  keywords: 'dental college for chennai students, bds admission from chennai, dental college outside chennai, mds college tamil nadu, jkkn dental chennai',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/chennai/',
  },
  openGraph: {
    title: 'Dental College for Chennai Students | JKKN Dental College',
    description: 'Chennai students: JKKN Dental College, Komarapalayam offers BDS/MDS with a 200+ chair hospital, residential campus & direct trains to Erode Junction.',
    url: 'https://dental.jkkn.ac.in/chennai/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital — Dental College for Chennai students'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental College for Chennai Students | JKKN Dental College',
    description: 'Chennai students: JKKN Dental College, Komarapalayam offers BDS/MDS with a 200+ chair hospital, residential campus & direct trains to Erode Junction.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Why do students from Chennai choose JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "Chennai students choose JKKN Dental College and Hospital at Komarapalayam for its 200+ chair teaching hospital with 500+ daily patients, full residential campus with separate hostels, and the same DME Tamil Nadu counselling process as Chennai colleges. The campus is well connected — frequent daily trains run from Chennai to Erode Junction, eighteen kilometres from the college." } },
    { "@type": "Question", "name": "How do Chennai students reach JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "The easiest route is by train: frequent daily express trains run from Chennai towards Coimbatore via Erode Junction, which is approximately eighteen kilometres from the campus. By road, the campus is approximately three hundred and eighty kilometres from Chennai via NH-544 through Salem — around six and a half to seven hours." } },
    { "@type": "Question", "name": "Is the admission process different from Chennai dental colleges?", "acceptedAnswer": { "@type": "Answer", "text": "No. JKKN Dental College admits BDS students through the same NEET UG and DME Tamil Nadu state counselling process used for all Tamil Nadu dental colleges, including those in Chennai. Government Quota and Management Quota options are both available." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Chennai students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN Dental provides separate hostels for boys and girls with mess facility on a full residential campus. Most learners from Chennai stay on campus through the term and travel home during holidays using the Chennai–Erode rail line." } },
    { "@type": "Question", "name": "What is the NEET cut-off for BDS at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office at plus ninety-one nine three four five eight five five zero zero one for the latest cut-off information and seat availability for the current admission cycle." } },
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Learners gain hands-on clinical training from Year 1 of the BDS programme, treating patients who visit from surrounding districts every day." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Each department has modern learning labs, and the attached hospital ensures ample clinical cases for postgraduate research and training." } },
    { "@type": "Question", "name": "How can Chennai students apply for admission at JKKN Dental?", "acceptedAnswer": { "@type": "Answer", "text": "Chennai learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call plus ninety-one nine three four five eight five five zero zero one for personalised guidance on eligibility, fees, and the counselling process." } },
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
  "description": "DCI approved, NAAC accredited dental college affiliated to TN Dr. MGR Medical University. Offers BDS and MDS programmes with 92% placement support.",
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
    { "@type": "ListItem", "position": 2, "name": "Dental College for Chennai Students", "item": "https://dental.jkkn.ac.in/chennai/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dental College for Chennai Students | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/chennai/",
  "dateModified": "2026-07-09",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".snippet-answer", ".voice-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN Dental College from Chennai",
  "description": "Step-by-step travel directions from Chennai to JKKN Dental College & Hospital at Komarapalayam, Namakkal by train and road.",
  "totalTime": "PT7H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Take a train towards Coimbatore", "text": "Board a Coimbatore-bound express train from Chennai. These trains stop at Erode Junction." },
    { "@type": "HowToStep", "position": 2, "name": "Get down at Erode Junction", "text": "Erode Junction is a major stop on the Chennai–Coimbatore main line, approximately 18 km from the campus." },
    { "@type": "HowToStep", "position": 3, "name": "Take a bus or taxi to Komarapalayam", "text": "From Erode, regular buses and taxis cover the 18 km to Komarapalayam on NH-544 in about 35-40 minutes." },
    { "@type": "HowToStep", "position": 4, "name": "Arrive at JKKN Dental College", "text": "JKKN Dental College & Hospital is located at Natarajapuram on NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183. By road from Chennai: approximately 380 km via NH-544 through Salem, 6.5 to 7 hours." }
  ]
};

export default function ChennaiLayout({
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
