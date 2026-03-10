import StructuredData from '@/components/StructuredData';

// Schema #3b: Course – MDS Periodontics
const mdsPerioSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/mds/periodontics/#course",
  "name": "MDS Periodontics",
  "courseCode": "MDS-PERIO",
  "description": "Master of Dental Surgery (MDS) in Periodontics is a 3-year postgraduate specialization focusing on the diagnosis and treatment of periodontal diseases, gum surgery, dental implantology, and regenerative periodontal therapy. Students gain extensive clinical experience in JKKN's 100+ bed dental hospital treating 500+ patients daily, with opportunities for advanced research and publications in peer-reviewed journals.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Master of Dental Surgery (MDS) – Periodontics",
  "occupationalCredentialAwarded": "Periodontist – Specialist registration with State Dental Council",
  "timeRequired": "P3Y",
  "educationalLevel": "Postgraduate",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time, On-campus",
    "courseWorkload": "P3Y",
    "startDate": "2026-09-01",
    "endDate": "2029-08-31",
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
      "name": "[PLACEHOLDER – Replace with HOD Periodontics name]",
      "jobTitle": "Head of Department, Periodontics"
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

// Schema #3c: Course – MDS Orthodontics & Dentofacial Orthopedics
const mdsOrthoSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/mds/orthodontics/#course",
  "name": "MDS Orthodontics & Dentofacial Orthopedics",
  "courseCode": "MDS-ORTHO",
  "description": "Master of Dental Surgery (MDS) in Orthodontics & Dentofacial Orthopedics is a 3-year postgraduate specialization covering diagnosis, prevention, and correction of malocclusion and dentofacial irregularities. The program at JKKN includes training in fixed and removable appliances, clear aligners, surgical orthodontics, and digital treatment planning using CBCT imaging and 3D modelling in a state-of-the-art clinical facility.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Master of Dental Surgery (MDS) – Orthodontics & Dentofacial Orthopedics",
  "occupationalCredentialAwarded": "Orthodontist – Specialist registration with State Dental Council",
  "timeRequired": "P3Y",
  "educationalLevel": "Postgraduate",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time, On-campus",
    "courseWorkload": "P3Y",
    "startDate": "2026-09-01",
    "endDate": "2029-08-31",
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
      "name": "[PLACEHOLDER – Replace with HOD Orthodontics name]",
      "jobTitle": "Head of Department, Orthodontics"
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

// Schema #3d: Course – MDS Prosthodontics (Crown & Bridge)
const mdsProsthoSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/mds/prosthodontics/#course",
  "name": "MDS Prosthodontics (Crown & Bridge)",
  "courseCode": "MDS-PROSTHO",
  "description": "Master of Dental Surgery (MDS) in Prosthodontics including Crown & Bridge is a 3-year postgraduate specialization focused on the restoration and replacement of missing teeth and oral structures. The program covers complete dentures, removable partial dentures, fixed prosthodontics, implant prosthodontics, and maxillofacial prosthetics. JKKN's advanced CAD/CAM laboratory and digital dentistry infrastructure provide hands-on training in modern prosthetic workflows.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Master of Dental Surgery (MDS) – Prosthodontics (Crown & Bridge)",
  "occupationalCredentialAwarded": "Prosthodontist – Specialist registration with State Dental Council",
  "timeRequired": "P3Y",
  "educationalLevel": "Postgraduate",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time, On-campus",
    "courseWorkload": "P3Y",
    "startDate": "2026-09-01",
    "endDate": "2029-08-31",
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
      "name": "[PLACEHOLDER – Replace with HOD Prosthodontics name]",
      "jobTitle": "Head of Department, Prosthodontics"
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

// Schema #3e: Course – MDS Conservative Dentistry & Endodontics
const mdsCdeSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/mds/conservative-dentistry/#course",
  "name": "MDS Conservative Dentistry & Endodontics",
  "courseCode": "MDS-CDE",
  "description": "Master of Dental Surgery (MDS) in Conservative Dentistry & Endodontics is a 3-year postgraduate specialization dedicated to the preservation and restoration of natural teeth. The program covers advanced root canal therapy, endodontic microsurgery, aesthetic restorations, tooth-coloured restorative materials, and management of dental trauma. JKKN provides access to dental operating microscopes, rotary endodontic systems, and apex locators for precision clinical training.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Master of Dental Surgery (MDS) – Conservative Dentistry & Endodontics",
  "occupationalCredentialAwarded": "Endodontist / Conservative Dentist – Specialist registration with State Dental Council",
  "timeRequired": "P3Y",
  "educationalLevel": "Postgraduate",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time, On-campus",
    "courseWorkload": "P3Y",
    "startDate": "2026-09-01",
    "endDate": "2029-08-31",
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
      "name": "[PLACEHOLDER – Replace with HOD Conservative Dentistry name]",
      "jobTitle": "Head of Department, Conservative Dentistry & Endodontics"
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

// Schema #3f: Course – MDS Oral Medicine & Radiology
const mdsOmrSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://dental.jkkn.ac.in/mds/oral-medicine/#course",
  "name": "MDS Oral Medicine & Radiology",
  "courseCode": "MDS-OMR",
  "description": "Master of Dental Surgery (MDS) in Oral Medicine & Radiology is a 3-year postgraduate specialization focused on the diagnosis and non-surgical management of oral diseases, orofacial pain disorders, and advanced diagnostic imaging. Students are trained in CBCT interpretation, digital radiography, OPG analysis, ultrasonography, and the medical management of systemic diseases manifesting in the oral cavity. JKKN's fully digital imaging centre with CBCT and panoramic systems provides comprehensive diagnostic training.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Master of Dental Surgery (MDS) – Oral Medicine & Radiology",
  "occupationalCredentialAwarded": "Oral Medicine Specialist / Oral Radiologist – Specialist registration with State Dental Council",
  "timeRequired": "P3Y",
  "educationalLevel": "Postgraduate",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time, On-campus",
    "courseWorkload": "P3Y",
    "startDate": "2026-09-01",
    "endDate": "2029-08-31",
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
      "name": "[PLACEHOLDER – Replace with HOD Oral Medicine name]",
      "jobTitle": "Head of Department, Oral Medicine & Radiology"
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

// Schema #7b: FAQPage – MDS Page
const mdsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dental.jkkn.ac.in/mds/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duration of MDS programs at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All MDS (Master of Dental Surgery) programs at JKKN Dental College & Hospital are 3 years in duration. This includes academic coursework, clinical training in the 100+ bed dental hospital, thesis research, and compulsory practical rotations across departments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for MDS admission at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must hold a BDS degree from a DCI-recognized dental college and must be registered with a State Dental Council. Qualification in NEET-MDS conducted by the National Board of Examinations is mandatory. Candidates must have completed the compulsory rotatory internship before the counselling date."
      }
    },
    {
      "@type": "Question",
      "name": "What MDS specializations are available at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital offers MDS in 5 specializations: (1) Periodontics – gum diseases and dental implants, (2) Orthodontics & Dentofacial Orthopedics – teeth alignment and bite correction, (3) Prosthodontics including Crown & Bridge – tooth replacement and restoration, (4) Conservative Dentistry & Endodontics – root canal treatment and tooth preservation, and (5) Oral Medicine & Radiology – oral disease diagnosis and imaging."
      }
    },
    {
      "@type": "Question",
      "name": "What is the MDS admission process at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MDS admission at JKKN Dental College follows this process: (1) Complete BDS and internship from a DCI-recognized college, (2) Register with a State Dental Council, (3) Qualify NEET-MDS, (4) Register for state or All India Quota counselling, (5) Select JKKN Dental College and preferred specialization during choice filling, (6) Receive seat allotment, (7) Report to campus with original documents and complete admission formalities."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after completing MDS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MDS graduates from JKKN Dental College can pursue: specialist private practice, faculty positions in dental colleges, consultant roles in multi-specialty hospitals, advanced research and PhD programs, dental corporate chains, international opportunities (UK, Middle East, Singapore), and government specialist positions. JKKN's placement support and 3000+ alumni network facilitate career placement across India and internationally."
      }
    },
    {
      "@type": "Question",
      "name": "What clinical exposure do MDS students get at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MDS students at JKKN receive extensive clinical exposure through the college's 100+ bed dental hospital that treats 500+ patients daily. Students work with 200+ dental chairs, access advanced equipment including CBCT, digital radiography, OPG systems, dental operating microscopes, rotary endodontic instruments, and CAD/CAM technology. The high patient volume ensures students encounter a wide variety of clinical cases essential for specialist training. Students are also encouraged to publish research, with the college contributing 50+ publications to peer-reviewed journals."
      }
    }
  ]
};

// Schema #8c: Speakable – MDS Course Page
const mdsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://dental.jkkn.ac.in/mds/#webpage",
  "name": "MDS – Master of Dental Surgery Specializations at JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/mds/",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".mds-overview",
      ".specializations-list",
      ".admission-cta"
    ]
  },
  "description": "JKKN Dental College offers MDS in 5 specializations: Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine & Radiology. 3-year postgraduate programs with NEET-MDS admission. 100+ bed hospital, 500+ daily patients, and advanced clinical infrastructure."
};

// Schema #4c: BreadcrumbList – /mds Page
const mdsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "MDS – Master of Dental Surgery", "item": "https://dental.jkkn.ac.in/mds/" }
  ]
};

// Schema #9a: EducationalOccupationalProgram – MDS Periodontics
const progPerioSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://dental.jkkn.ac.in/mds/periodontics/#program",
  "name": "MDS Periodontics Program",
  "description": "A 3-year postgraduate program in Periodontics training specialists in the diagnosis and treatment of periodontal diseases, dental implantology, gum surgery, and regenerative therapy. Graduates are qualified to practice as Periodontists and pursue academic or research careers.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "timeToComplete": "P3Y",
  "educationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Postgraduate Degree",
    "name": "Master of Dental Surgery (MDS) – Periodontics"
  },
  "programType": "Full-time",
  "occupationalCategory": {
    "@type": "CategoryCode",
    "name": "Periodontist",
    "codeValue": "29-1029.00",
    "inCodeSet": { "@type": "CategoryCodeSet", "name": "O*NET-SOC" }
  },
  "applicationStartDate": "2026-03-01",
  "applicationDeadline": "2026-07-31",
  "startDate": "2026-09-01",
  "endDate": "2029-08-31",
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fee",
    "price": "[PLACEHOLDER – Contact admissions for current fee structure]",
    "priceCurrency": "INR",
    "url": "https://admission.jkkn.ac.in/"
  },
  "programPrerequisites": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Undergraduate Degree",
    "name": "BDS (Bachelor of Dental Surgery) from DCI-recognized college + NEET-MDS qualification"
  }
};

// Schema #9b: EducationalOccupationalProgram – MDS Orthodontics
const progOrthoSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://dental.jkkn.ac.in/mds/orthodontics/#program",
  "name": "MDS Orthodontics & Dentofacial Orthopedics Program",
  "description": "A 3-year postgraduate program training specialists in the diagnosis, prevention, and treatment of dental and facial irregularities. Covers fixed and removable orthodontic appliances, clear aligners, surgical orthodontics, and digital treatment planning.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "timeToComplete": "P3Y",
  "educationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Postgraduate Degree",
    "name": "Master of Dental Surgery (MDS) – Orthodontics & Dentofacial Orthopedics"
  },
  "programType": "Full-time",
  "occupationalCategory": {
    "@type": "CategoryCode",
    "name": "Orthodontist",
    "codeValue": "29-1023.00",
    "inCodeSet": { "@type": "CategoryCodeSet", "name": "O*NET-SOC" }
  },
  "applicationStartDate": "2026-03-01",
  "applicationDeadline": "2026-07-31",
  "startDate": "2026-09-01",
  "endDate": "2029-08-31",
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fee",
    "price": "[PLACEHOLDER – Contact admissions for current fee structure]",
    "priceCurrency": "INR",
    "url": "https://admission.jkkn.ac.in/"
  },
  "programPrerequisites": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Undergraduate Degree",
    "name": "BDS (Bachelor of Dental Surgery) from DCI-recognized college + NEET-MDS qualification"
  }
};

// Schema #9c: EducationalOccupationalProgram – MDS Prosthodontics
const progProsthoSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://dental.jkkn.ac.in/mds/prosthodontics/#program",
  "name": "MDS Prosthodontics (Crown & Bridge) Program",
  "description": "A 3-year postgraduate program specializing in the restoration and replacement of missing teeth and oral structures. Covers complete dentures, fixed and removable prosthodontics, implant prosthodontics, maxillofacial prosthetics, and CAD/CAM digital workflows.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "timeToComplete": "P3Y",
  "educationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Postgraduate Degree",
    "name": "Master of Dental Surgery (MDS) – Prosthodontics (Crown & Bridge)"
  },
  "programType": "Full-time",
  "occupationalCategory": {
    "@type": "CategoryCode",
    "name": "Prosthodontist",
    "codeValue": "29-1024.00",
    "inCodeSet": { "@type": "CategoryCodeSet", "name": "O*NET-SOC" }
  },
  "applicationStartDate": "2026-03-01",
  "applicationDeadline": "2026-07-31",
  "startDate": "2026-09-01",
  "endDate": "2029-08-31",
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fee",
    "price": "[PLACEHOLDER – Contact admissions for current fee structure]",
    "priceCurrency": "INR",
    "url": "https://admission.jkkn.ac.in/"
  },
  "programPrerequisites": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Undergraduate Degree",
    "name": "BDS (Bachelor of Dental Surgery) from DCI-recognized college + NEET-MDS qualification"
  }
};

// Schema #9d: EducationalOccupationalProgram – MDS Conservative Dentistry & Endodontics
const progCdeSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://dental.jkkn.ac.in/mds/conservative-dentistry/#program",
  "name": "MDS Conservative Dentistry & Endodontics Program",
  "description": "A 3-year postgraduate program focused on the preservation and restoration of natural teeth through advanced root canal therapy, endodontic microsurgery, aesthetic restorations, and dental trauma management. Includes training with dental operating microscopes and rotary endodontic systems.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "timeToComplete": "P3Y",
  "educationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Postgraduate Degree",
    "name": "Master of Dental Surgery (MDS) – Conservative Dentistry & Endodontics"
  },
  "programType": "Full-time",
  "occupationalCategory": {
    "@type": "CategoryCode",
    "name": "Endodontist",
    "codeValue": "29-1029.00",
    "inCodeSet": { "@type": "CategoryCodeSet", "name": "O*NET-SOC" }
  },
  "applicationStartDate": "2026-03-01",
  "applicationDeadline": "2026-07-31",
  "startDate": "2026-09-01",
  "endDate": "2029-08-31",
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fee",
    "price": "[PLACEHOLDER – Contact admissions for current fee structure]",
    "priceCurrency": "INR",
    "url": "https://admission.jkkn.ac.in/"
  },
  "programPrerequisites": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Undergraduate Degree",
    "name": "BDS (Bachelor of Dental Surgery) from DCI-recognized college + NEET-MDS qualification"
  }
};

// Schema #9e: EducationalOccupationalProgram – MDS Oral Medicine & Radiology
const progOmrSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "@id": "https://dental.jkkn.ac.in/mds/oral-medicine/#program",
  "name": "MDS Oral Medicine & Radiology Program",
  "description": "A 3-year postgraduate program specializing in the diagnosis and non-surgical management of oral diseases, orofacial pain, and advanced diagnostic imaging including CBCT, digital radiography, and ultrasonography. Graduates are qualified as Oral Medicine Specialists and Oral Radiologists.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://dental.jkkn.ac.in/#organization",
    "name": "JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/"
  },
  "timeToComplete": "P3Y",
  "educationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Postgraduate Degree",
    "name": "Master of Dental Surgery (MDS) – Oral Medicine & Radiology"
  },
  "programType": "Full-time",
  "occupationalCategory": {
    "@type": "CategoryCode",
    "name": "Oral Medicine Specialist",
    "codeValue": "29-1029.00",
    "inCodeSet": { "@type": "CategoryCodeSet", "name": "O*NET-SOC" }
  },
  "applicationStartDate": "2026-03-01",
  "applicationDeadline": "2026-07-31",
  "startDate": "2026-09-01",
  "endDate": "2029-08-31",
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fee",
    "price": "[PLACEHOLDER – Contact admissions for current fee structure]",
    "priceCurrency": "INR",
    "url": "https://admission.jkkn.ac.in/"
  },
  "programPrerequisites": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Undergraduate Degree",
    "name": "BDS (Bachelor of Dental Surgery) from DCI-recognized college + NEET-MDS qualification"
  }
};

export default function MdsPage() {
  return (
    <>
      <StructuredData data={mdsPerioSchema} />
      <StructuredData data={mdsOrthoSchema} />
      <StructuredData data={mdsProsthoSchema} />
      <StructuredData data={mdsCdeSchema} />
      <StructuredData data={mdsOmrSchema} />
      <StructuredData data={mdsFaqSchema} />
      <StructuredData data={mdsWebPageSchema} />
      <StructuredData data={mdsBreadcrumbSchema} />
      <StructuredData data={progPerioSchema} />
      <StructuredData data={progOrthoSchema} />
      <StructuredData data={progProsthoSchema} />
      <StructuredData data={progCdeSchema} />
      <StructuredData data={progOmrSchema} />
    </>
  );
}
