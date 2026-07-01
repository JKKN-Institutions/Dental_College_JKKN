import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jkknSameAsUrls } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: 'BDS & MDS Placements | JKKN Dental College' },
  description: '92% placement assistance at JKKN Dental College. Alumni at Apollo Dental, Clove Dental, NHS UK & govt hospitals. BDS & MDS career guidance.',
  keywords: 'dental college placements Tamil Nadu, BDS placement, MDS placement JKKN, salary after BDS, dental job opportunities, JKKN dental placements',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/placements/',
  },
  openGraph: {
    title: 'BDS & MDS Placements | JKKN Dental College',
    description: '92% placement assistance at JKKN Dental College. Alumni at Apollo Dental, Clove Dental, NHS UK & govt hospitals. BDS & MDS career guidance.',
    url: 'https://dental.jkkn.ac.in/placements/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'BDS & MDS Placements at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDS & MDS Placements | JKKN Dental College',
    description: '92% placement assistance at JKKN Dental College. Alumni at Apollo Dental, Clove Dental, NHS UK & govt hospitals. BDS & MDS career guidance.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the placement rate at JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College achieves a 92%+ placement assistance rate. The Career Development Centre (CDC) provides comprehensive support including resume building, interview preparation, and direct company connections for BDS and MDS graduates." } },
    { "@type": "Question", "name": "Which companies hire from JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "Top recruiters include Apollo Dental, Clove Dental, Sabka Dentist, MyDentist, Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, and government PHCs & district hospitals. International recruiters include NHS UK, Cleveland Clinic Abu Dhabi, and Saudi MOH." } },
    { "@type": "Question", "name": "What is the salary after BDS from JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "BDS graduates from JKKN Dental College typically receive packages ranging from 3-5 LPA for entry-level positions. Top performers and those placed in corporate dental chains or international positions can earn 8-10 LPA or higher. [UPDATE — verify from CDC records]" } },
    { "@type": "Question", "name": "Does JKKN Dental College offer international placements?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College alumni work internationally at NHS UK, Cleveland Clinic Abu Dhabi, Saudi Ministry of Health, and dental clinics in Singapore. The CDC supports international licensing exam preparation and placement assistance." } },
    { "@type": "Question", "name": "What career options are available after BDS?", "acceptedAnswer": { "@type": "Answer", "text": "After BDS from JKKN, graduates can pursue private practice, hospital dentistry, higher studies (MDS), international opportunities, dental research, or public health dentistry. The CDC provides guidance for all career pathways." } },
    { "@type": "Question", "name": "How does the JKKN Dental Placement Cell work?", "acceptedAnswer": { "@type": "Answer", "text": "The CDC operates a structured 5-step process: Registration & Profile Building, Resume Workshop & Skill Development, Company Connect & Campus Drives, Interview Preparation & Mock Sessions, and Offer Facilitation & Joining Support." } },
    { "@type": "Question", "name": "What is the highest package from JKKN Dental College?", "acceptedAnswer": { "@type": "Answer", "text": "The highest package offered to JKKN Dental graduates is in the range of 8-10 LPA, typically from corporate dental chains and international healthcare organizations. [UPDATE — verify from CDC records]" } },
    { "@type": "Question", "name": "Can JKKN Dental learners get government jobs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, many JKKN Dental alumni serve in government Primary Health Centres (PHCs), district hospitals, and dental departments across Tamil Nadu. The college provides guidance for TNPSC and other government dental recruitment exams." } },
    { "@type": "Question", "name": "How many alumni does JKKN Dental College have?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN Dental College has a strong alumni network of 3,000+ graduates spread across India and internationally. Alumni work in leading hospitals, corporate dental chains, government services, and private practice." } },
    { "@type": "Question", "name": "Is JKKN Dental College good for higher studies after BDS?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN Dental College has a strong track record of learners clearing NEET MDS and pursuing postgraduate specialisations. The college offers MDS in 5 specialisations and provides dedicated coaching and mentoring for competitive exams." } },
    { "@type": "Question", "name": "Does JKKN have placement for MDS learners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, MDS graduates from JKKN receive dedicated placement support. With advanced clinical training across 5 specialisations and 50+ senior learner publications, MDS graduates are placed in teaching institutions, specialty hospitals, and research organisations." } },
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
  "description": "DCI approved, NAAC accredited dental college with 92%+ placement assistance. 3,000+ alumni worldwide. Career Development Centre provides comprehensive placement support for BDS and MDS graduates.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544 (Salem\u2013Coimbatore Highway)",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Placements", "item": "https://dental.jkkn.ac.in/placements/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BDS & MDS Placements | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/placements/",
  "dateModified": "2026-03-26",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-description", "h1", ".faq-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How the Placement Process Works at JKKN Dental College",
  "description": "The Career Development Centre (CDC) at JKKN Dental College follows a structured 5-step placement process to connect graduates with top employers.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Registration & Profile Building", "text": "Learners register with the CDC and build their professional profiles including academic records, clinical experience, and career preferences." },
    { "@type": "HowToStep", "position": 2, "name": "Resume Workshop & Skill Development", "text": "CDC conducts resume writing workshops, soft skills training, and professional development sessions to prepare learners for the job market." },
    { "@type": "HowToStep", "position": 3, "name": "Company Connect & Campus Drives", "text": "CDC organises campus recruitment drives, industry interactions, and connects learners with 25+ recruiting partners including corporate dental chains and hospitals." },
    { "@type": "HowToStep", "position": 4, "name": "Interview Preparation & Mock Sessions", "text": "Dedicated interview preparation with mock interviews, group discussions, and clinical case presentations to build confidence and readiness." },
    { "@type": "HowToStep", "position": 5, "name": "Offer Facilitation & Joining Support", "text": "CDC facilitates offer letters, salary negotiations, and provides joining support including relocation guidance for outstation and international placements." },
  ]
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Recruiters at JKKN Dental College",
  "description": "Leading dental healthcare organisations that recruit from JKKN Dental College & Hospital.",
  "numberOfItems": 14,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Apollo Dental" },
    { "@type": "ListItem", "position": 2, "name": "Clove Dental" },
    { "@type": "ListItem", "position": 3, "name": "Sabka Dentist" },
    { "@type": "ListItem", "position": 4, "name": "MyDentist" },
    { "@type": "ListItem", "position": 5, "name": "Apollo Hospitals" },
    { "@type": "ListItem", "position": 6, "name": "Fortis Healthcare" },
    { "@type": "ListItem", "position": 7, "name": "Manipal Hospitals" },
    { "@type": "ListItem", "position": 8, "name": "Government PHCs & District Hospitals" },
    { "@type": "ListItem", "position": 9, "name": "ESIC Hospitals" },
    { "@type": "ListItem", "position": 10, "name": "NHS UK" },
    { "@type": "ListItem", "position": 11, "name": "Cleveland Clinic Abu Dhabi" },
    { "@type": "ListItem", "position": 12, "name": "Saudi Ministry of Health" },
    { "@type": "ListItem", "position": 13, "name": "Singapore Dental Clinics" },
    { "@type": "ListItem", "position": 14, "name": "ESIC Dental Centres" },
  ]
};

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
