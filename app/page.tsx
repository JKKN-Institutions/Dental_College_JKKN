import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

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
  description: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam. DCI approved, NAAC A Grade. BDS 100 & MDS 18 seats, fees, 92% placement assistance. Apply 2026-27.',
  openGraph: {
    title: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam',
    description: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam. DCI approved, NAAC A Grade. BDS 100 & MDS 18 seats, fees, 92% placement assistance. Apply 2026-27.',
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
    description: 'JKKN Dental College & Hospital (JKK Nattraja), Komarapalayam. DCI approved, NAAC A Grade. BDS 100 & MDS 18 seats, fees, 92% placement assistance. Apply 2026-27.',
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
    "@id": "https://dental.jkkn.ac.in/bds/#course",
    "name": "Bachelor of Dental Surgery (BDS)",
    "description": "5-year undergraduate dental program including 1-year compulsory rotatory internship at JKKN Dental College & Hospital, approved by DCI with hands-on clinical training and world-class infrastructure.",
    "provider": {
      "@type": "CollegeOrUniversity",
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
    "numberOfCredits": "240",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "courseWorkload": "PT5Y",
      "startDate": "2026-09",
      "endDate": "2031-08",
      "instructor": {
        "@type": "Person",
        "name": "Department of Dental Sciences Faculty"
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Government Quota / Management Quota",
      "availability": "https://schema.org/InStock",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "minPrice": "300000",
        "maxPrice": "500000",
        "unitText": "per year",
        "description": "Approximate annual tuition fee for BDS program. Actual fees may vary."
      }
    }
  };

  // MDS Course Schema
  const mdsSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/mds/#course",
    "name": "Master of Dental Surgery (MDS)",
    "description": "3-year postgraduate dental program with specializations in Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine at JKKN Dental College & Hospital.",
    "provider": {
      "@type": "CollegeOrUniversity",
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
        "minPrice": "800000",
        "maxPrice": "1500000",
        "unitText": "per year",
        "description": "Approximate annual tuition fee for MDS program. Actual fees may vary by specialization."
      }
    }
  };

  // College/University Schema (consolidated — single canonical entity)
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization", "MedicalOrganization", "Dentist"],
    "@id": "https://dental.jkkn.ac.in/#college",
    "name": "JKKN Dental College & Hospital",
    "alternateName": ["J.K.K. Nattraja Dental College & Hospital", "JKK Nattraja Pal Maruthuvak Kalloori Marrum Maruthuvamanai"],
    "url": "https://dental.jkkn.ac.in",
    "logo": "https://dental.jkkn.ac.in/images/dental-logo.png",
    "description": "India's 1st Human-AI AGI Dental Campus - DCI approved & NAAC A grade accredited dental college offering BDS & MDS programmes with advanced AI integration",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544 (Salem To Coimbatore National Highway)",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    },
    "telephone": "+919345855001",
    "email": "dental@jkkn.ac.in",
    "foundingDate": "1987",
    "numberOfStudents": {
      "@type": "QuantitativeValue",
      "value": 1500
    },
    "knowsAbout": [
      "Bachelor of Dental Surgery",
      "Master of Dental Surgery",
      "Dental Education in India",
      "DCI Approved Dental Colleges",
      "Dental College Tamil Nadu",
      "Orthodontics",
      "Prosthodontics",
      "Periodontics",
      "Conservative Dentistry",
      "Oral Surgery",
      "Artificial Intelligence in Dental Education",
      "AI-Powered Diagnostic Imaging",
      "CAD/CAM Technology",
      "Digital Dentistry"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Academic Programs",
      "itemListElement": [
        { "@type": "Course", "name": "BDS - Bachelor of Dental Surgery", "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/" },
        { "@type": "Course", "name": "MDS - Periodontics", "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/periodontics/" },
        { "@type": "Course", "name": "MDS - Orthodontics & Dentofacial Orthopedics", "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics/" },
        { "@type": "Course", "name": "MDS - Prosthodontics Crown & Bridge", "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/" },
        { "@type": "Course", "name": "MDS - Conservative Dentistry & Endodontics", "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/" },
        { "@type": "Course", "name": "MDS - Oral Medicine & Radiology", "url": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine/" }
      ]
    },
    "award": [
      "India's 1st Human-AI AGI Dental Campus",
      "NAAC A Grade Accreditation"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Approval",
        "name": "Dental Council of India (DCI) Approved",
        "recognizedBy": { "@type": "Organization", "name": "Dental Council of India", "alternateName": "DCI" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Accreditation",
        "name": "NAAC A Grade Accredited",
        "recognizedBy": { "@type": "Organization", "name": "National Assessment and Accreditation Council", "alternateName": "NAAC" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Affiliation",
        "name": "Affiliated to Tamil Nadu Dr. M.G.R. Medical University",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Tamil Nadu Dr. M.G.R. Medical University", "url": "https://www.tnmgrmu.ac.in/" }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/jkkndental/",
      "https://www.instagram.com/jkkndental/",
      "https://www.linkedin.com/school/jkkndental/",
      "https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO",
      "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
      "https://www.jkkn.ai/apply/jkkn-admission-2026",
      "https://placements.jkkn.ac.in/",
      "https://jkkn.ac.in/",
      "https://dciindia.gov.in/",
      "https://www.shiksha.com/college/j-k-k-nattraja-dental-college-and-hospital-namakkal-78331",
      "https://collegedunia.com/college/10574-jkk-nattraja-dental-college-and-hospital-jkkndch-namakkal",
      "https://www.careers360.com/colleges/jkk-nattraja-dental-college-and-hospital-komarapalayam"
    ],
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "@id": "https://jkkn.ac.in/#organization",
      "name": "JKKN Institutions",
      "url": "https://jkkn.ac.in/"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.445180,
      "longitude": 77.726549
    },
    "areaServed": [
      { "@type": "City", "name": "Namakkal" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Tiruchengode" },
      { "@type": "City", "name": "Komarapalayam" },
      { "@type": "State", "name": "Tamil Nadu" }
    ],
    "image": [
      "https://dental.jkkn.ac.in/images/campus-aerial.jpg",
      "https://dental.jkkn.ac.in/images/dental-hospital.jpg",
      "https://dental.jkkn.ac.in/images/simulation-lab.jpg"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Periodontics",
      "Orthodontics",
      "Prosthodontics",
      "Endodontics",
      "Oral Medicine",
      "Oral Radiology",
      "Oral and Maxillofacial Surgery",
      "Pediatric Dentistry",
      "Public Health Dentistry"
    ],
    "numberOfBeds": 100
  };

  // FAQ Schema — Voice-optimized (each answer ≤29 words, third-person, no abbreviations)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://dental.jkkn.ac.in/#faqpage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses are offered at JKKN Dental College & Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College and Hospital offers Bachelor of Dental Surgery, a five-year program, and Master of Dental Surgery with five postgraduate specializations across nine departments."
        }
      },
      {
        "@type": "Question",
        "name": "Is JKKN Dental College & Hospital DCI approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College and Hospital holds Dental Council of India approval, National Assessment and Accreditation Council A Grade accreditation, and Tamil Nadu Dr. M.G.R. Medical University affiliation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for BDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bachelor of Dental Surgery admission requires NEET qualification, higher secondary with Physics, Chemistry, and Biology at fifty percent minimum, through state or All India Quota counseling."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities does JKKN Dental College offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College features over two hundred dental chairs, a hundred-bed hospital treating five hundred patients daily, digital simulation labs, and advanced imaging facilities."
        }
      },
      {
        "@type": "Question",
        "name": "What is the placement record?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College provides full placement assistance with alumni at Apollo Dental, Clove Dental, government hospitals, private practices, and international healthcare institutions."
        }
      },
      {
        "@type": "Question",
        "name": "What makes JKKN different from other dental colleges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College is India's first Human-AI Dental Campus, combining artificial intelligence tools with clinical training, two hundred dental chairs, and five hundred daily patients."
        }
      },
      {
        "@type": "Question",
        "name": "How does JKKN integrate AI in dental education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College integrates artificial intelligence across its curriculum, including AI-powered diagnostic imaging, computer-aided design and manufacturing technology, and research tools."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fee structure for BDS at JKKN Dental College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bachelor of Dental Surgery fees at JKKN Dental College vary by admission quota as per Tamil Nadu government regulations, with annual tuition ranging from three to five lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best dental college in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College and Hospital is widely recognized as the best dental college in Tamil Nadu with DCI approval, NAAC A accreditation, two hundred dental chairs, five hundred daily patients, ninety-two percent placement assistance, and India's first AI-integrated dental campus established in nineteen eighty-seven."
        }
      },
      {
        "@type": "Question",
        "name": "Where is JKKN Dental College located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College is located on National Highway 544 in Komarapalayam, Namakkal District, Tamil Nadu, approximately thirty-five kilometres from Erode and fifty kilometres from Salem."
        }
      },
      {
        "@type": "Question",
        "name": "What are the hostel facilities at JKKN Dental College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College provides separate hostels for boys and girls with furnished rooms, mess facilities, Wi-Fi connectivity, twenty-four-hour security, and recreational areas on campus."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NEET cutoff for JKKN Dental College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NEET cutoff for Bachelor of Dental Surgery admission at JKKN Dental College varies annually, with approximate cutoff ranging from three hundred fifty to four hundred fifty marks depending on quota."
        }
      },
      {
        "@type": "Question",
        "name": "How many dental colleges are there in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tamil Nadu has approximately thirty-two to thirty-five dental colleges approved by the Dental Council of India, including three government and twenty-eight to thirty-two private institutions."
        }
      },
      {
        "@type": "Question",
        "name": "Which dental college in Tamil Nadu has the best placements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College and Hospital provides ninety-two percent placement assistance with graduates at Apollo Dental, Clove Dental, government hospitals, and NHS United Kingdom."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NIRF ranking of dental colleges in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nine Tamil Nadu dental colleges appear in NIRF twenty twenty-five rankings, with SIMATS Saveetha at rank two, SRM Dental at rank eight, and Sri Ramachandra at rank thirteen."
        }
      }
    ]
  };

  // Admissions 2026-27 Event Schema
  const admissionEventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": "https://dental.jkkn.ac.in/#event-2026-admissions",
    "name": "JKKN Dental College Admissions 2026-27 — BDS & MDS",
    "description": "Admissions open for BDS and MDS programs at JKKN Dental College & Hospital, Komarapalayam. DCI approved, NAAC A accredited. Apply via NEET counseling or management quota.",
    "startDate": "2026-03-01",
    "endDate": "2026-08-31",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": [
      {
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
      {
        "@type": "VirtualLocation",
        "url": "https://www.jkkn.ai/apply/jkkn-admission-2026"
      }
    ],
    "organizer": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-03-01"
    },
    "image": "https://dental.jkkn.ac.in/images/BDS-hero-image.webp"
  };

  // Principal/Dean Person Schema
  const principalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dental.jkkn.ac.in/principals-message/#person",
    "name": "Dr. Dhanasekar Balakrishnan",
    "jobTitle": "Principal",
    "worksFor": {
      "@type": "CollegeOrUniversity",
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
  const dentistLocalSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://dental.jkkn.ac.in/#localbusiness",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/",
    "image": "https://dental.jkkn.ac.in/images/dental-hospital-exterior.jpg",
    "telephone": "+919345855001",
    "email": "dental@jkkn.ac.in",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NH-544 (Salem to Coimbatore Highway), Natarajapuram",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.445180,
      "longitude": 77.726549
    },
    "hasMap": "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "17:00" }
    ],
    "areaServed": [
      { "@type": "City", "name": "Namakkal" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Tiruchengode" },
      { "@type": "City", "name": "Komarapalayam" },
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "State", "name": "Tamil Nadu" }
    ]
  };

  // Schema #5: WebSite + SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dental.jkkn.ac.in/#website",
    "name": "JKKN Dental College & Hospital",
    "alternateName": "JKKN Dental College",
    "url": "https://dental.jkkn.ac.in/",
    "description": "Official website of JKKN Dental College & Hospital – DCI approved, NAAC A Grade accredited dental institution offering BDS and MDS programs in Komarapalayam, Tamil Nadu.",
    "publisher": {
      "@type": "CollegeOrUniversity",
      "@id": "https://dental.jkkn.ac.in/#college",
      "name": "JKKN Dental College & Hospital"
    },
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dental.jkkn.ac.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Schema #8a: WebPage with Speakable
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://dental.jkkn.ac.in/#webpage",
    "name": "JKKN Dental College & Hospital – DCI Approved Dental College in Tamil Nadu",
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
    "description": "JKKN Dental College & Hospital, established in 1987, is a DCI approved and NAAC A Grade accredited dental college offering BDS and MDS programs. Located on India's first AI-integrated campus in Komarapalayam, Tamil Nadu, with 200+ dental chairs, 100+ bed hospital, and 92% placement assistance. Apply now for 2026-27 admissions.",
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
      <StructuredData data={dentistLocalSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={webPageSchema} />
      {/* [UPDATE: Uncomment when principal name is confirmed] */}
      <StructuredData data={principalSchema} />
      <StructuredData data={bdsSchema} />
      <StructuredData data={mdsSchema} />
      <StructuredData data={collegeSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={admissionEventSchema} />
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
