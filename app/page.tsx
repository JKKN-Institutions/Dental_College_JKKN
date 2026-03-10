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
const AdmissionsSection = dynamic(() => import('@/components/AdmissionsSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const CTASection = dynamic(() => import('@/components/CTASection'));
const Footer = dynamic(() => import('@/components/Footer'));
const FacultySection = dynamic(() => import('@/components/FacultySection'));
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College in Tamilnadu | JKKN Dental College',
  description: 'JKKN Dental College & Hospital is one of the best dental college in Tamilnadu. DCI approved with excellent placements, modern labs & attached hospital.',
  keywords: 'best dental college in tamilnadu, private dental colleges in tamilnadu, top 10 dental colleges in tamilnadu, top dental colleges in tamilnadu, list of dental colleges in tamilnadu, self financing dental colleges in tamilnadu, list of private dental colleges in tamilnadu',
  openGraph: {
    title: 'Best Dental College in Tamilnadu | JKKN Dental College',
    description: 'JKKN Dental College & Hospital is one of the best dental college in Tamilnadu. DCI approved with excellent placements, modern labs & attached hospital.',
    url: 'https://dental.jkkn.ac.in',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/dental-logo.png',
        width: 1200,
        height: 630,
        alt: 'Best Dental College in Tamilnadu - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College in Tamilnadu | JKKN Dental College',
    description: 'JKKN Dental College & Hospital is one of the best dental college in Tamilnadu. DCI approved with excellent placements, modern labs & attached hospital.',
    images: ['/images/dental-logo.png'],
  },
  alternates: {
    canonical: '/',
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
      "url": "https://admission.jkkn.ac.in/"
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
    ]
  };

  // College/University Schema
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "JKKN Dental College & Hospital",
    "alternateName": "J.K.K. Nattraja Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in",
    "logo": "https://dental.jkkn.ac.in/images/dental-logo.png",
    "description": "India's 1st Human-AI AGI Dental Campus - DCI approved & NAAC A grade accredited dental college offering BDS & MDS programmes with advanced AI integration",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nattrajapuram, NH-544 (Salem To Coimbatore National Highway)",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    },
    "telephone": "+91 93458 55001",
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
      "https://www.facebook.com/jkkndentalcollege",
      "https://www.instagram.com/jkkndental",
      "https://www.linkedin.com/company/jkkn-dental"
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses are offered at JKKN Dental College & Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College & Hospital offers BDS (Bachelor of Dental Surgery) - a 5-year undergraduate program with comprehensive training across 9 departments including Oral Surgery, Orthodontics, Periodontics, Prosthodontics, Conservative Dentistry, Pedodontics, Oral Medicine, Oral Pathology, and Public Health Dentistry. We also offer MDS (Master of Dental Surgery) postgraduate programs in 5 specializations: Conservative Dentistry & Endodontics, Prosthodontics, Periodontics, Oral Medicine & Radiology, and Orthodontics & Dentofacial Orthopedics."
        }
      },
      {
        "@type": "Question",
        "name": "Is JKKN Dental College & Hospital DCI approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN Dental College & Hospital is fully approved by the Dental Council of India (DCI) and National Medical Commission (NMC). The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and NAAC accredited."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for BDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BDS admission is based on NEET-UG scores through state or All India Quota counseling. Candidates need 10+2 with Physics, Chemistry, and Biology with minimum 50% marks (40% for reserved categories). After counseling allocation, complete document verification and fee payment."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities does JKKN Dental College offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our campus features a 200+ chair dental hospital treating 500+ patients daily, digital simulation labs, CBCT and OPG imaging, CAD/CAM laboratory, library with e-resources, research labs, separate hostels, cafeteria, sports facilities, and 24/7 Wi-Fi."
        }
      },
      {
        "@type": "Question",
        "name": "What is the placement record?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College & Hospital provides 100% placement assistance. Alumni work at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and private practices. Many pursue higher studies abroad or establish their own clinics."
        }
      },
      {
        "@type": "Question",
        "name": "What makes JKKN different from other dental colleges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN stands out as India's 1st Human-AI AGI Dental Campus, integrating advanced AI tools like ChatGPT, AI-powered diagnostic imaging, and CAD/CAM technology into dental education. Combined with 57+ years of educational legacy (JKKN Group founded 1969), exceptional clinical exposure (500+ daily patients), state-of-the-art infrastructure, and comprehensive placement support, JKKN prepares future-ready dental professionals with expertise in both clinical excellence and AI technology."
        }
      },
      {
        "@type": "Question",
        "name": "How does JKKN integrate AI in dental education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College is India's 1st Human-AI AGI Dental Campus. Students use ChatGPT and AI tools for research, case studies, and personalized learning. The campus features AI-powered diagnostic imaging (CBCT, OPG), CAD/CAM technology for precision dental restorations, AI-enhanced clinical training, and data analytics for research. AI courses are integrated into both BDS and MDS curriculum, ensuring graduates are equipped with cutting-edge technological expertise alongside clinical skills."
        }
      }
    ]
  };

  // Principal/Dean Person Schema
  const principalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. [Principal Name]",
    "jobTitle": "Principal & Dean",
    "worksFor": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/"
    },
    "alumniOf": "Tamil Nadu Dr. MGR Medical University",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "MDS, PhD"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "JKKN Dental College & Hospital",
    "alternateName": "JKKN Dental Hospital",
    "description": "Multi-specialty dental teaching hospital with 200+ dental chairs, 100+ hospital beds, serving 500+ patients daily. Part of JKKN Dental College & Hospital.",
    "url": "https://dental.jkkn.ac.in/",
    "telephone": "+919345855001",
    "email": "info@jkkn.ac.in",
    "image": "https://dental.jkkn.ac.in/images/dental-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.4333,
      "longitude": 77.7167
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "medicalSpecialty": [
      "Periodontics",
      "Orthodontics",
      "Prosthodontics",
      "Conservative Dentistry & Endodontics",
      "Oral Medicine & Radiology",
      "Oral & Maxillofacial Surgery",
      "Pedodontics",
      "Community Dentistry"
    ],
    "sameAs": [
      "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6"
    ]
  };

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={principalSchema} />
      <StructuredData data={bdsSchema} />
      <StructuredData data={mdsSchema} />
      <StructuredData data={collegeSchema} />
      <StructuredData data={faqSchema} />
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
      <FacultySection />
      <AdmissionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
