import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { dentalOrganizationSchema, DENTAL_ORG_ID, DENTAL_COURSE_URLS } from '@/lib/schema/organization';
import { faqPageSchema } from '@/lib/faq';
import { homeFaqItems } from '@/data/homeFaqs';

import FloatingWhatsApp from '@/components/FloatingWhatsAppClient';
import AdmissionPopup from '@/components/AdmissionPopup';
const AboutInstitution = dynamic(() => import('@/components/AboutInstitution'));
const AcademicPrograms = dynamic(() => import('@/components/AcademicPrograms'));
const Infrastructure = dynamic(() => import('@/components/Infrastructure'));
const WhyChooseJKKN = dynamic(() => import('@/components/WhyChooseJKKN'));
import EventsStories from '@/components/EventsStories';
const AdmissionsSection = dynamic(() => import('@/components/AdmissionsSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const CTASection = dynamic(() => import('@/components/CTASection'));
const Footer = dynamic(() => import('@/components/Footer'));
const FacultySection = dynamic(() => import('@/components/FacultySection'));
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam',
  description: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam. NDC approved, NAAC A Grade. BDS 100 & MDS 18 seats, fees, 93.9% placed or in higher studies (2024-25 batch). Apply 2026-27.',
  openGraph: {
    title: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam',
    description: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam. NDC approved, NAAC A Grade. BDS 100 & MDS 18 seats, fees, 93.9% placed or in higher studies (2024-25 batch). Apply 2026-27.',
    url: 'https://dental.jkkn.ac.in/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College & Hospital campus at Komarapalayam, Namakkal District, Tamil Nadu'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam',
    description: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam. NDC approved, NAAC A Grade. BDS 100 & MDS 18 seats, fees, 93.9% placed or in higher studies (2024-25 batch). Apply 2026-27.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/',
  },
};

export default function Home() {
  // BDS Course Schema
  const bdsSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${DENTAL_COURSE_URLS.bds}#course`,
    "url": DENTAL_COURSE_URLS.bds,
    "name": "Bachelor of Dental Surgery (BDS)",
    "description": "5-year undergraduate dental program including 1-year compulsory rotatory internship at JKKN Dental College & Hospital, approved by NDC with hands-on clinical training and world-class infrastructure.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": DENTAL_ORG_ID,
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    },
    "educationalCredentialAwarded": "BDS (Bachelor of Dental Surgery)",
    "timeRequired": "P5Y",
    "occupationalCategory": "Dentist",
    "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) with minimum 50% aggregate; NEET-UG qualification required",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "courseWorkload": "P5Y"
    },
    "offers": {
      "@type": "Offer",
      "category": "Government Quota / Management Quota",
      "availability": "https://schema.org/InStock",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "minPrice": "450000",
        "maxPrice": "550000",
        "unitText": "per year",
        "description": "Management Quota annual tuition, academic year 2026-27: Rs 4,50,000 dayscholar with instruments, Rs 5,50,000 with hostel and instruments. Government Quota as per the Tamil Nadu Fee Fixation Committee norms."
      }
    }
  };

  // MDS Course Schema
  const mdsSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${DENTAL_COURSE_URLS.mds}#course`,
    "url": DENTAL_COURSE_URLS.mds,
    "name": "Master of Dental Surgery (MDS)",
    "description": "3-year postgraduate dental program with specializations in Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine at JKKN Dental College & Hospital.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": DENTAL_ORG_ID,
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/"
    },
    "educationalCredentialAwarded": "MDS (Master of Dental Surgery)",
    "timeRequired": "P3Y",
    "occupationalCategory": "Dental Specialist",
    "coursePrerequisites": "BDS degree from a recognized university; NEET-MDS qualification required",
    "hasCourseInstance": [
      { "@type": "CourseInstance", "name": "MDS Periodontics", "courseMode": "Full-time" },
      { "@type": "CourseInstance", "name": "MDS Orthodontics & Dentofacial Orthopedics", "courseMode": "Full-time" },
      { "@type": "CourseInstance", "name": "MDS Prosthodontics Crown & Bridge", "courseMode": "Full-time" },
      { "@type": "CourseInstance", "name": "MDS Conservative Dentistry & Endodontics", "courseMode": "Full-time" },
      { "@type": "CourseInstance", "name": "MDS Oral Medicine", "courseMode": "Full-time" }
    ],
    "offers": {
      "@type": "Offer",
      "category": "Government Quota / Management Quota",
      "availability": "https://schema.org/InStock",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "minPrice": "850000",
        "maxPrice": "850000",
        "unitText": "per year",
        "description": "Management Quota annual tuition, academic year 2026-27: Rs 8,50,000, the same across all five NDC-approved MDS specialisations. Government Quota as per the Tamil Nadu Fee Fixation Committee norms."
      }
    }
  };

  // College/University Schema (consolidated — single canonical entity)
  const collegeSchema = dentalOrganizationSchema;

  // FAQ Schema — Voice-optimized (each answer ≤29 words, third-person, no abbreviations)
  const faqSchema = { ...faqPageSchema(homeFaqItems), "@id": "https://dental.jkkn.ac.in/#faqpage" };

  // Principal/Dean Person Schema
  const principalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dental.jkkn.ac.in/principals-message/#person",
    "name": "Dr. Dhanasekar Balakrishnan",
    "jobTitle": "Principal",
    "worksFor": {
      "@type": "CollegeOrUniversity",
      "@id": DENTAL_ORG_ID,
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/"
    },
    "alumniOf": "Tamil Nadu Dr. MGR Medical University",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "BDS"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "MDS"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "FDS RCS (England)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "MDTFEd (Edinburgh)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "MFDS RCPS (Glasgow)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "MFDS RCS (Edinburgh)"
      }
    ]
  };

  // Schema #2: Dentist (LocalBusiness)

  // Schema #5: WebSite + SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dental.jkkn.ac.in/#website",
    "name": "JKKN Dental College & Hospital",
    "alternateName": "JKKN Dental College",
    "url": "https://dental.jkkn.ac.in/",
    "description": "Official website of JKKN Dental College & Hospital – NDC approved, NAAC A Grade accredited dental institution offering BDS and MDS programs in Komarapalayam, Tamil Nadu.",
    "publisher": {
      "@type": "CollegeOrUniversity",
      "@id": DENTAL_ORG_ID,
      "name": "JKKN Dental College & Hospital"
    },
    "inLanguage": "en"
  };

  // Schema #8a: WebPage with Speakable
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://dental.jkkn.ac.in/#webpage",
    "name": "JKKN Dental College & Hospital – NDC Approved Dental College in Tamil Nadu",
    "url": "https://dental.jkkn.ac.in/",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".snippet-answer",
        ".hero-description",
        ".voice-answer"
      ],
      "xpath": [
        "/html/head/meta[@name='description']/@content"
      ]
    },
    "description": "JKKN Dental College & Hospital, established in 1987, is a NDC approved and NAAC A Grade accredited dental college offering BDS and MDS programs. Located on an AI-integrated campus in Komarapalayam, Tamil Nadu, with 200+ dental chairs, 100+ bed hospital, and 93.9% placed or in higher studies (2024-25 batch). Apply now for 2026-27 admissions.",
    "datePublished": "2025-01-01",
    "dateModified": "2026-03-27"
  };

  // Schema #9: HowTo — Admission Process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://dental.jkkn.ac.in/#howto-admission",
    "name": "How to Get Admission in JKKN Dental College — BDS & MDS",
    "description": "Step-by-step admission process for BDS and MDS programs at JKKN Dental College & Hospital, Komarapalayam, Tamil Nadu.",
    "totalTime": "P30D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Check Eligibility",
        "text": "Verify your academic qualifications and NEET score. BDS requires 10+2 with PCB and NEET-UG. MDS requires BDS degree with completed internship and NEET-MDS."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Register for Counseling",
        "text": "Register for Tamil Nadu State counseling or All India Quota counseling through the official government portal."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Participate in Counseling",
        "text": "Attend the counseling process and select JKKN Dental College during the choice-filling round based on your NEET rank."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Document Verification",
        "text": "Complete document verification at the JKKN Dental College admission office with original certificates and required documents."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Fee Payment and Enrollment",
        "text": "Pay the prescribed fees and complete enrollment formalities to secure your seat at JKKN Dental College."
      }
    ]
  };

  return (
    <main className="overflow-x-hidden w-full">
      <AdmissionPopup />
      <StructuredData data={websiteSchema} />
      <StructuredData data={webPageSchema} />
      {/* [UPDATE: Uncomment when principal name is confirmed] */}
      <StructuredData data={principalSchema} />
      <StructuredData data={bdsSchema} />
      <StructuredData data={mdsSchema} />
      <StructuredData data={collegeSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={howToSchema} />
      <BreadcrumbSchema items={[
        { name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
        { name: 'JKKN Dental College & Hospital', url: 'https://dental.jkkn.ac.in/' },
      ]} />
      <Header />
      <Hero />
      <AboutInstitution />
      {/* <AIIntegration /> */}
      <AcademicPrograms />
      <Infrastructure />
      <WhyChooseJKKN />
      <div id="events">
        <EventsStories />
      </div>
      <FacultySection />
      <AdmissionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
