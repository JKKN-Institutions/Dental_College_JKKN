import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'BDS Course at JKKN Dental College | 100 Seats',
  description: 'BDS at JKKN Dental College — 5-year DCI approved program, 100 seats, NEET-UG admission. 200+ dental chairs, 500+ daily patients. Komarapalayam, Tamil Nadu.',
  openGraph: {
    title: 'BDS Course at JKKN Dental College | 100 Seats',
    description: 'BDS at JKKN Dental College — 5-year DCI approved program, 100 seats, NEET-UG admission. 200+ dental chairs, 500+ daily patients. Komarapalayam, Tamil Nadu.',
    url: 'https://dental.jkkn.ac.in/bds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

// Schema #3a: Course – BDS
const bdsCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/bds/#course",
  "name": "BDS – Bachelor of Dental Surgery",
  "courseCode": "BDS",
  "description": "Bachelor of Dental Surgery (BDS) is a 5-year undergraduate dental program (4 years academic + 1 year compulsory internship) at JKKN Dental College & Hospital. The program is approved by the Dental Council of India, affiliated to Tamil Nadu Dr. M.G.R. Medical University, and provides extensive clinical training with 200+ dental chairs and 500+ daily patient exposure. Graduates are eligible for private practice, government service, or MDS specialization.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Bachelor of Dental Surgery (BDS)",
  "occupationalCredentialAwarded": "Dental Surgeon – eligible for registration with State Dental Council",
  "timeRequired": "P5Y",
  "numberOfCredits": "100 seats per year",
  "educationalLevel": "Undergraduate",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time, On-campus",
    "courseWorkload": "P5Y",
    "startDate": "2026-09-01",
    "endDate": "2031-08-31",
    "location": {
      "@type": "Place",
      "name": "JKKN Dental College & Hospital",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "NH-544, Natarajapuram",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    },
    // [UPDATE: Replace with actual Dean/HOD name when confirmed by admin]
    "instructor": {
      "@type": "Person",
      "name": "Faculty of Dental Sciences, JKKN",
      "jobTitle": "Dean, Faculty of Dentistry"
    },
    "offers": {
      "@type": "Offer",
      "category": "Tuition Fee",
      "priceCurrency": "INR",
      "url": "https://admission.jkkn.ac.in/",
      "availability": "https://schema.org/InStock",
      "description": "Contact admissions office for current fee structure: +91 93458 55001"
    }
  }
};

// Schema #7a: FAQPage – BDS Page — Voice-optimized (each answer ≤29 words, third-person)
const bdsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dental.jkkn.ac.in/bds/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duration of BDS at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Bachelor of Dental Surgery program at JKKN Dental College and Hospital is five years, consisting of four years of academic study and one year of compulsory rotating internship."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for BDS admission at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Dental Surgery admission at JKKN requires higher secondary with Physics, Chemistry, and Biology, minimum fifty percent marks, and NEET qualification. Candidates must be seventeen years old."
      }
    },
    {
      "@type": "Question",
      "name": "Is JKKN Dental College DCI approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College and Hospital holds Dental Council of India and National Medical Commission approvals, National Assessment and Accreditation Council A Grade, and Tamil Nadu Dr. M.G.R. Medical University affiliation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career options after completing BDS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Dental Surgery graduates from JKKN pursue private practice, government positions, Master of Dental Surgery specialization, dental research, hospital roles, and public health careers with ninety-two percent placement support."
      }
    },
    {
      "@type": "Question",
      "name": "What campus facilities are available at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College offers two hundred dental chairs, a hundred-bed hospital, digital simulation labs, imaging centre, computer-aided manufacturing lab, library, hostels, sports complex, and AI-integrated campus."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue MDS after BDS at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College offers Master of Dental Surgery in five specializations: Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry and Endodontics, and Oral Medicine and Radiology."
      }
    }
  ]
};

// Schema #8b: Speakable – BDS Course Page
const bdsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://dental.jkkn.ac.in/bds/#webpage",
  "name": "BDS – Bachelor of Dental Surgery at JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/bds/",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".course-overview",
      ".eligibility-criteria",
      ".admission-cta"
    ]
  },
  "description": "BDS at JKKN Dental College is a 5-year program with 100 seats per year. DCI approved, NAAC A Grade accredited, affiliated to Tamil Nadu Dr. M.G.R. Medical University. Eligibility: 10+2 with PCB, 50%+ marks, NEET-UG qualification. 200+ dental chairs, 500+ daily patients for clinical training."
};

// Schema #4b: BreadcrumbList – /bds Page
const bdsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "BDS – Bachelor of Dental Surgery", "item": "https://dental.jkkn.ac.in/bds/" }
  ]
};

export default function BdsPage() {
  return (
    <>
      <StructuredData data={bdsCourseSchema} />
      <StructuredData data={bdsFaqSchema} />
      <StructuredData data={bdsWebPageSchema} />
      <StructuredData data={bdsBreadcrumbSchema} />
    </>
  );
}
