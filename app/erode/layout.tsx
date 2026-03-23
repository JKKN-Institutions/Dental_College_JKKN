import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Dental College in Erode | JKKN Dental College' },
  description: 'JKKN Dental College & Hospital — a top dental college in Erode district, just 30 km on NH-544. DCI approved, NAAC accredited. BDS & MDS programs with hostel & transport.',
  keywords: 'dental college in erode, top dental colleges, bds colleges in erode, erode dental college, mds college erode, jkkn dental erode',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Dental College in Erode | JKKN Dental College',
    description: 'JKKN Dental College & Hospital — a top dental college in Erode district, just 30 km on NH-544. DCI approved, NAAC accredited. BDS & MDS programs with hostel & transport.',
    url: 'https://dental.jkkn.ac.in/erode/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
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
    description: 'JKKN Dental College & Hospital — a top dental college in Erode district, just 30 km on NH-544. DCI approved, NAAC accredited. BDS & MDS programs with hostel & transport.',
    images: ['/images/BDS-hero-image.webp'],
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
    { "@type": "Question", "name": "Does JKKN Dental have its own hospital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College & Hospital has its own attached dental hospital on campus. This hospital serves patients from the surrounding community and provides BDS students with extensive hands-on clinical training from the early years of the programme." } },
    { "@type": "Question", "name": "What MDS specialisations are available?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College & Hospital offers MDS in multiple specialisations including Orthodontics, Prosthodontics, Oral Surgery, Conservative Dentistry, Periodontics, and more. Admission is through NEET MDS counselling. Contact the admission office for the full list of available specialisations." } },
    { "@type": "Question", "name": "Does JKKN Dental provide hostel for Erode students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just 40-50 minutes away. College transport services are available." } },
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
  "foundingDate": "1952",
  "parentOrganization": { "@type": "Organization", "name": "JKKN Institutions", "url": "https://jkkn.ac.in/" },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "DCI Approved" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "NAAC Accredited" }
  ],
  "memberOf": { "@type": "Organization", "name": "The Tamil Nadu Dr. M.G.R. Medical University, Chennai" },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.4120", "longitude": "77.7210" },
  "sameAs": ["https://maps.app.goo.gl/mXx6rFRqpS9U76BK6"]
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
