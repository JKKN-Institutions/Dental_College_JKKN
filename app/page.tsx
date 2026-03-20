import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import FloatingWhatsApp from '@/components/FloatingWhatsAppClient';
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
  title: 'JKKN Dental College & Hospital | DCI Approved, Tamil Nadu',
  description: 'JKKN Dental College, Komarapalayam — DCI approved, NAAC A accredited. BDS (100 seats) & MDS (5 specializations). 200+ dental chairs, 92%+ placement rate.',
  keywords: 'JKKN dental college, dental college Tamil Nadu, dental college Namakkal, BDS Tamil Nadu, MDS Tamil Nadu, dental college near Salem, dental college near Erode, DCI approved dental college, NAAC accredited dental college, dental college Komarapalayam',
  openGraph: {
    title: 'JKKN Dental College & Hospital | DCI Approved, Tamil Nadu',
    description: 'JKKN Dental College, Komarapalayam — DCI approved, NAAC A accredited. BDS (100 seats) & MDS (5 specializations). 200+ dental chairs, 92%+ placement rate.',
    url: 'https://dental.jkkn.ac.in/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
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
    title: 'JKKN Dental College & Hospital | DCI Approved, Tamil Nadu',
    description: 'JKKN Dental College, Komarapalayam — DCI approved, NAAC A accredited. BDS (100 seats) & MDS (5 specializations). 200+ dental chairs, 92%+ placement rate.',
    images: ['/images/BDS-hero-image.png'],
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
      "url": "https://admission.jkkn.ac.in/",
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
      "url": "https://admission.jkkn.ac.in/",
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

  // College/University Schema
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "JKKN Dental College & Hospital",
    "alternateName": ["J.K.K. Nattraja Dental College & Hospital", "ஜே.கே.கே. நட்ராஜா பல் மருத்துவக் கல்லூரி மற்றும் மருத்துவமனை"],
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
    "knowsAbout": [
      "Artificial Intelligence in Dental Education",
      "AI-Powered Diagnostic Imaging",
      "ChatGPT for Dental Research",
      "CAD/CAM Technology",
      "Digital Dentistry",
      "AI-Enhanced Clinical Training"
    ],
    "award": [
      "India's 1st Human-AI AGI Dental Campus",
      "NAAC A Grade Accreditation"
    ],
    "hasCredential": [
      "Dental Council of India (DCI) Approved",
      "Affiliated to The Tamil Nadu Dr. M.G.R. Medical University"
    ],
    "sameAs": [
      "https://www.facebook.com/jkkndental/",
      "https://www.instagram.com/jkkndental/",
      "https://www.linkedin.com/school/jkkndental/",
      "https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO",
      "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
      "https://jkkn.ac.in/",
      "https://dciindia.gov.in/"
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
    ]
  };

  // FAQ Schema — Voice-optimized (each answer ≤29 words, third-person, no abbreviations)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
      }
    ]
  };

  // Admissions 2026-27 Event Schema
  const admissionEventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
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
        "url": "https://admission.jkkn.ac.in/"
      }
    ],
    "organizer": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://admission.jkkn.ac.in/",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-03-01"
    },
    "image": "https://dental.jkkn.ac.in/images/BDS-hero-image.png"
  };

  // Principal/Dean Person Schema
  const principalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
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

  // Schema #1: MedicalOrganization + Dentist
  const medicalOrgSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "Dentist"],
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "alternateName": ["JKKN Dental College", "ஜே.கே.கே.என் பல் மருத்துவக் கல்லூரி"],
    "url": "https://dental.jkkn.ac.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dental.jkkn.ac.in/logo.png",
      "width": 300,
      "height": 100
    },
    "image": [
      "https://dental.jkkn.ac.in/images/campus-aerial.jpg",
      "https://dental.jkkn.ac.in/images/dental-hospital.jpg",
      "https://dental.jkkn.ac.in/images/simulation-lab.jpg"
    ],
    "description": "JKKN Dental College & Hospital, established in 1987, is a DCI-approved and NAAC A Grade accredited dental institution offering BDS and MDS programs. Located on India's first AI-integrated campus, the college features 200+ dental chairs, a 100+ bed multi-specialty dental hospital, and treats 500+ patients daily. Affiliated to Tamil Nadu Dr. M.G.R. Medical University with 92% placement rate and 3000+ alumni worldwide.",
    "foundingDate": "1987",
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
    "numberOfBeds": 100,
    "areaServed": [
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "@id": "https://jkkn.ac.in/#organization",
      "name": "JKKN Institutions",
      "url": "https://jkkn.ac.in/"
    },
    "sameAs": [
      "https://www.facebook.com/jkkndental/",
      "https://www.instagram.com/jkkndental/",
      "https://www.linkedin.com/school/jkkndental/",
      "https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO",
      "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
      "https://jkkn.ac.in/",
      "https://dciindia.gov.in/"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Accreditation",
        "recognizedBy": { "@type": "Organization", "name": "Dental Council of India", "alternateName": "DCI" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Accreditation",
        "recognizedBy": { "@type": "Organization", "name": "National Medical Commission", "alternateName": "NMC" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Accreditation",
        "recognizedBy": { "@type": "Organization", "name": "National Assessment and Accreditation Council", "alternateName": "NAAC" },
        "description": "NAAC A Grade Accredited"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Affiliation",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Tamil Nadu Dr. M.G.R. Medical University", "url": "https://www.tnmgrmu.ac.in/" }
      }
    ],
    "knowsAbout": [
      "Dental Surgery",
      "Orthodontic Treatment",
      "Periodontal Therapy",
      "Prosthodontic Rehabilitation",
      "Endodontic Treatment",
      "Oral Radiology and Diagnostics",
      "Preventive Dentistry",
      "Dental Implantology",
      "Cosmetic Dentistry",
      "Oral and Maxillofacial Surgery"
    ],
  };

  // Schema #2: Dentist (LocalBusiness) with AggregateRating
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
    ],
    // [UPDATE: Verify ratingValue and reviewCount from Google Business Profile before publishing]
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "400",
      "reviewCount": "400"
    }
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
      "@id": "https://dental.jkkn.ac.in/#organization",
      "name": "JKKN Dental College & Hospital"
    },
    "inLanguage": "en"
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
        ".hero-description",
        ".institution-highlights",
        ".admission-cta"
      ],
      "xpath": [
        "/html/head/meta[@name='description']/@content"
      ]
    },
    "description": "JKKN Dental College & Hospital, established in 1987, is a DCI approved and NAAC A Grade accredited dental college offering BDS and MDS programs. Located on India's first AI-integrated campus in Komarapalayam, Tamil Nadu, with 200+ dental chairs, 100+ bed hospital, and 92% placement rate. Apply now for 2026-27 admissions.",
    "datePublished": "2025-01-01",
    "dateModified": "2026-03-16"
  };

  // Schema #10: Organization sameAs Enhancement
  const orgSameAsSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#college",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/",
    "sameAs": [
      "https://www.facebook.com/jkkndental/",
      "https://www.instagram.com/jkkndental/",
      "https://www.linkedin.com/school/jkkndental/",
      "https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO",
      "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
      "https://admission.jkkn.ac.in/",
      "https://placements.jkkn.ac.in/",
      "https://jkkn.ac.in/",
      "https://dciindia.gov.in/"
    ],
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "@id": "https://jkkn.ac.in/#organization",
      "name": "JKKN Institutions",
      "url": "https://jkkn.ac.in/"
    }
  };

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={medicalOrgSchema} />
      <StructuredData data={dentistLocalSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={orgSameAsSchema} />
      {/* [UPDATE: Uncomment when principal name is confirmed] */}
      <StructuredData data={principalSchema} />
      <StructuredData data={bdsSchema} />
      <StructuredData data={mdsSchema} />
      <StructuredData data={collegeSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={admissionEventSchema} />
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
