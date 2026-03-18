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
