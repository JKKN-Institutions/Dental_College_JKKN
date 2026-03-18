import { Metadata } from 'next';

/**
 * Organization information for JKKN Dental College
 */
export const organizationInfo = {
  name: "JKKN Dental College & Hospital",
  alternateName: "J.K.K. Nattraja Dental College & Hospital",
  url: "https://dental.jkkn.ac.in",
  logo: "https://dental.jkkn.ac.in/images/dental-logo.png",
  description: "India's 1st Human-AI AGI Dental Campus - DCI approved & NAAC A grade accredited dental college",
  address: {
    streetAddress: "Natarajapuram, NH-544 (Salem To Coimbatore National Highway)",
    addressLocality: "Komarapalayam",
    addressRegion: "Tamil Nadu",
    postalCode: "638183",
    addressCountry: "IN"
  },
  contactPoint: {
    telephone: "+919345855001",
    email: "dental@jkkn.ac.in",
    contactType: "Admissions"
  },
  foundingDate: "1987"
};

/**
 * Generate breadcrumb schema from path
 */
export function generateBreadcrumbSchema(pathname: string) {
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dental.jkkn.ac.in"
    }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://dental.jkkn.ac.in${currentPath}`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };
}

/**
 * Generate WebPage schema with author and publication info
 */
export function generateWebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "JKKN Dental College Editorial Team"
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "EducationalOrganization",
      "name": organizationInfo.name,
      "url": organizationInfo.url,
      "logo": {
        "@type": "ImageObject",
        "url": organizationInfo.logo
      }
    },
    "author": {
      "@type": "Organization",
      "name": author
    },
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified }),
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": organizationInfo.name,
      "url": organizationInfo.url
    }
  };
}

/**
 * Generate complete metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  canonicalPath,
  datePublished,
  dateModified,
  ogImage = "/images/BDS-hero-image.png"
}: {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  datePublished?: string;
  dateModified?: string;
  ogImage?: string;
}): Metadata {
  const fullUrl = `https://dental.jkkn.ac.in${canonicalPath}`;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: canonicalPath
    },
    authors: [{ name: "JKKN Dental College Editorial Team" }],
    ...(datePublished && {
      other: {
        'article:published_time': datePublished,
        ...(dateModified && { 'article:modified_time': dateModified })
      }
    }),
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: organizationInfo.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: "website",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}

/**
 * Generate EducationalOccupationalProgram schema for courses
 */
export function generateCourseSchema({
  name,
  description,
  provider = organizationInfo.name,
  occupationalCategory,
  timeToComplete,
  educationalCredentialAwarded
}: {
  name: string;
  description: string;
  provider?: string;
  occupationalCategory?: string;
  timeToComplete?: string;
  educationalCredentialAwarded?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": provider,
      "url": organizationInfo.url
    },
    ...(occupationalCategory && { "occupationalCategory": occupationalCategory }),
    ...(timeToComplete && { "timeToComplete": timeToComplete }),
    ...(educationalCredentialAwarded && { "educationalCredentialAwarded": educationalCredentialAwarded })
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact JKKN Dental College",
    "description": "Contact information for JKKN Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in/contact",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": organizationInfo.name,
      "address": {
        "@type": "PostalAddress",
        ...organizationInfo.address
      },
      "telephone": organizationInfo.contactPoint.telephone,
      "email": organizationInfo.contactPoint.email,
      "url": organizationInfo.url
    }
  };
}

/**
 * Generate AboutPage schema
 */
export function generateAboutPageSchema({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": title,
    "description": description,
    "url": "https://dental.jkkn.ac.in/about",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": organizationInfo.name,
      "description": organizationInfo.description,
      "url": organizationInfo.url,
      "foundingDate": organizationInfo.foundingDate,
      "address": {
        "@type": "PostalAddress",
        ...organizationInfo.address
      }
    }
  };
}

/**
 * Generate FAQPage schema from question-answer pairs
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Article/BlogPosting schema for blog posts
 */
export function generateArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorJobTitle,
  authorCredentials,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorJobTitle?: string;
  authorCredentials?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    ...(image && { "image": image }),
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": authorName ? "Person" : "Organization",
      "name": authorName || organizationInfo.name,
      ...(authorJobTitle && { "jobTitle": authorJobTitle }),
      ...(authorCredentials && { "description": authorCredentials }),
      ...(authorName && {
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": organizationInfo.name,
          "url": organizationInfo.url
        }
      })
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": organizationInfo.name,
      "url": organizationInfo.url,
      "logo": {
        "@type": "ImageObject",
        "url": organizationInfo.logo
      }
    },
    "mainEntityOfPage": url,
    "inLanguage": "en-IN"
  };
}

/**
 * Generate Person schema for faculty/staff profiles
 */
export function generatePersonSchema({
  name,
  jobTitle,
  description,
  qualifications,
  department,
  image,
  url,
}: {
  name: string;
  jobTitle: string;
  description?: string;
  qualifications?: string;
  department?: string;
  image?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    ...(description && { "description": description }),
    ...(image && { "image": image }),
    ...(url && { "url": url }),
    "worksFor": {
      "@type": "CollegeOrUniversity",
      "name": organizationInfo.name,
      "url": organizationInfo.url
    },
    ...(qualifications && {
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": qualifications
      }
    }),
    ...(department && { "department": department }),
    "affiliation": {
      "@type": "EducationalOrganization",
      "name": organizationInfo.name,
      "url": organizationInfo.url
    }
  };
}

/**
 * Generate VideoObject schema for video content
 */
export function generateVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  transcript,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    ...(duration && { "duration": duration }),
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    ...(transcript && { "transcript": transcript }),
    "publisher": {
      "@type": "EducationalOrganization",
      "name": organizationInfo.name,
      "url": organizationInfo.url
    }
  };
}

/**
 * Generate SpeakableSpecification for voice search optimization
 */
export function generateSpeakableWebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  speakableCssSelectors = [".hero-description", "h1", ".faq-answer"],
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  speakableCssSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified }),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableCssSelectors,
      "xpath": ["/html/head/meta[@name='description']/@content"]
    },
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": organizationInfo.name,
      "url": organizationInfo.url
    }
  };
}

/**
 * Complete sameAs URLs for JKKN Dental College across all platforms
 */
export const jkknSameAsUrls = [
  "https://www.facebook.com/jkkndental/",
  "https://www.instagram.com/jkkndental/",
  "https://www.linkedin.com/school/jkkndental/",
  "https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO",
  "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6",
  "https://jkkn.ac.in/",
  "https://admission.jkkn.ac.in/",
  "https://placements.jkkn.ac.in/",
  "https://dciindia.gov.in/",
  "https://www.shiksha.com/college/j-k-k-nattraja-dental-college-and-hospital-namakkal-78331",
  "https://collegedunia.com/college/10574-jkk-nattraja-dental-college-and-hospital-jkkndch-namakkal",
  "https://www.careers360.com/colleges/jkk-nattraja-dental-college-and-hospital-komarapalayam",
  "https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions"
];

/**
 * Generate LocalBusiness (Dentist) schema for GBP alignment and local SEO
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": organizationInfo.name,
    "description": "JKKN Dental College & Hospital is a premier dental institution affiliated to TN Dr. MGR Medical University, offering BDS and 9 MDS specializations with 200+ dental chairs and 500+ daily patients.",
    "url": organizationInfo.url,
    "telephone": organizationInfo.contactPoint.telephone,
    "email": "info@jkkn.ac.in",
    "address": {
      "@type": "PostalAddress",
      ...organizationInfo.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.4070",
      "longitude": "77.7190"
    },
    "areaServed": [
      { "@type": "City", "name": "Namakkal" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Tiruchengode" },
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "State", "name": "Tamil Nadu" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": jkknSameAsUrls,
    "priceRange": "₹₹",
    "medicalSpecialty": "Dentistry",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "NAAC Accreditation",
      "recognizedBy": {
        "@type": "Organization",
        "name": "National Assessment and Accreditation Council"
      }
    }
  };
}

/**
 * Generate HowTo schema for step-by-step processes
 */
export function generateHowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}
