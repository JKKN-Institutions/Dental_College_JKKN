import StructuredData from '@/components/StructuredData';

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
    "instructor": {
      "@type": "Person",
      "name": "[PLACEHOLDER – Replace with Dean/HOD name]",
      "jobTitle": "Dean, Faculty of Dentistry"
    },
    "offers": {
      "@type": "Offer",
      "category": "Tuition Fee",
      "price": "[PLACEHOLDER – Contact admissions for current fee structure]",
      "priceCurrency": "INR",
      "url": "https://admission.jkkn.ac.in/",
      "availability": "https://schema.org/InStock"
    }
  }
};

// Schema #7a: FAQPage – BDS Page
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
        "text": "The BDS (Bachelor of Dental Surgery) program at JKKN Dental College & Hospital is 5 years in duration, consisting of 4 years of academic study and 1 year of compulsory rotating internship in the college's 100+ bed dental hospital."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for BDS admission at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have completed 10+2 (or equivalent) with Physics, Chemistry, and Biology, securing a minimum of 50% aggregate marks. Qualification in NEET-UG is mandatory. The candidate must be at least 17 years of age at the time of admission."
      }
    },
    {
      "@type": "Question",
      "name": "Is JKKN Dental College DCI approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College & Hospital is fully approved by the Dental Council of India (DCI) and is also approved by the National Medical Commission (NMC). The college holds NAAC A Grade accreditation and is affiliated to Tamil Nadu Dr. M.G.R. Medical University."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career options after completing BDS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After completing BDS from JKKN Dental College, graduates can pursue: private dental practice, government dentist positions, MDS specialization in 5 branches offered at JKKN, dental research, dental surgeon roles in hospitals, dental public health careers, and opportunities in dental product companies. JKKN's 92% placement rate ensures strong career support."
      }
    },
    {
      "@type": "Question",
      "name": "What campus facilities are available at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital offers comprehensive facilities including 200+ dental chairs, a 100+ bed multi-specialty dental hospital, digital simulation labs, CBCT and OPG imaging centre, CAD/CAM dental laboratory, digital library with journal access, separate hostels for boys and girls, sports complex, cafeteria, and India's first AI-integrated campus infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue MDS after BDS at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College & Hospital offers MDS (Master of Dental Surgery) in 5 specializations: Periodontics, Orthodontics & Dentofacial Orthopedics, Prosthodontics (Crown & Bridge), Conservative Dentistry & Endodontics, and Oral Medicine & Radiology. Admission is through NEET-MDS counselling."
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
