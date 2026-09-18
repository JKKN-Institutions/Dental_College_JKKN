/**
 * ONE JSON-LD node for the college entity, and ONE @id for it.
 *
 * Measured live on 2026-09-18 (schema audit, 261 sitemap URLs): the same college was declared
 * under FIVE different @ids - #college (home), #organization (12 pages), #educationalorganization
 * (MDS hub), #dentist (11 city pages) and #localbusiness (home) - with three different emails,
 * two logos (one of them a 404) and two property sets. Google and every AI engine read those as
 * five weakly-related entities, so nothing accrues to one knowledge-graph node.
 *
 * Every page now imports this node (or `dentalOrgRef` when it only needs to point at the entity).
 * The parent site already lists this college as https://dental.jkkn.ac.in/#organization, and the
 * sibling colleges use the same #organization convention, so that is the id kept.
 *
 * Facts come from data/collegeFacts.ts - do not retype a number here.
 */
import collegeFacts from '@/data/collegeFacts';

export const DENTAL_SITE_URL = 'https://dental.jkkn.ac.in/';
export const DENTAL_ORG_ID = 'https://dental.jkkn.ac.in/#organization';
export const DENTAL_LOGO_URL = 'https://dental.jkkn.ac.in/images/dental-logo.png';

/** Public profiles that ARE this entity. A regulator URL never belongs here (it is not us). */
export const jkknSameAsUrls = [
  'https://www.facebook.com/jkkndental/',
  'https://www.instagram.com/jkkndental/',
  'https://www.linkedin.com/school/jkkndental/',
  'https://www.youtube.com/@jkkndental',
  'https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO',
  'https://maps.app.goo.gl/mXx6rFRqpS9U76BK6',
  'https://www.shiksha.com/college/j-k-k-nattraja-dental-college-and-hospital-namakkal-78331',
  'https://collegedunia.com/college/10574-jkk-nattraja-dental-college-and-hospital-jkkndch-namakkal',
  'https://www.careers360.com/colleges/jkk-nattraja-dental-college-and-hospital-komarapalayam',
];

const COURSE_BASE = 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/';

/** Course page URLs - the only URLs a Course @id may be built from (the /bds/ and /academics/bds/ forms redirect or 404). */
export const DENTAL_COURSE_URLS = {
  bds: `${COURSE_BASE}bds/`,
  mds: `${COURSE_BASE}mds/`,
  mdsPeriodontics: `${COURSE_BASE}mds/periodontics/`,
  mdsOrthodontics: `${COURSE_BASE}mds/orthodontics-and-dentofacial-orthopedics/`,
  mdsProsthodontics: `${COURSE_BASE}mds/prosthodontics-crown-and-bridge/`,
  mdsConservative: `${COURSE_BASE}mds/conservative-dentistry-and-endodontics/`,
  mdsOralMedicine: `${COURSE_BASE}mds/oral-medicine/`,
} as const;

export const dentalPostalAddress = {
  '@type': 'PostalAddress',
  streetAddress: collegeFacts.address.highway
    ? `Natarajapuram, ${collegeFacts.address.highway}`
    : 'Natarajapuram, NH-544',
  addressLocality: 'Komarapalayam',
  addressRegion: collegeFacts.address.state,
  postalCode: collegeFacts.address.pincode,
  addressCountry: 'IN',
} as const;

/** Minimal reference to the entity - use inside provider / publisher / worksFor. */
export const dentalOrgRef = {
  '@type': 'CollegeOrUniversity',
  '@id': DENTAL_ORG_ID,
  name: 'JKKN Dental College & Hospital',
  url: DENTAL_SITE_URL,
} as const;

export const dentalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['CollegeOrUniversity', 'EducationalOrganization', 'MedicalOrganization', 'Dentist'],
  '@id': DENTAL_ORG_ID,
  name: 'JKKN Dental College & Hospital',
  alternateName: [
    'J.K.K. Nattraja Dental College & Hospital',
    'J.K.K. Nataraja Dental College & Hospital',
    'J.K.K. Natarajah Dental College & Hospital',
    'JKKN Dental',
  ],
  url: DENTAL_SITE_URL,
  logo: DENTAL_LOGO_URL,
  image: [
    'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
    'https://dental.jkkn.ac.in/images/BDS-hero-clinical.webp',
    'https://dental.jkkn.ac.in/images/BDS-Modern-Dental-Lab.webp',
  ],
  description:
    'JKKN Dental College & Hospital, Komarapalayam, Namakkal District, Tamil Nadu - a National Dental Commission (formerly DCI) approved, NAAC A grade accredited dental college affiliated to The Tamil Nadu Dr. M.G.R. Medical University, offering BDS and MDS programmes with an AI-integrated campus.',
  address: dentalPostalAddress,
  telephone: '+919345855001',
  email: collegeFacts.email,
  foundingDate: String(collegeFacts.foundedYear),
  founder: {
    '@type': 'Person',
    name: 'Thiru J.K.K. Nattraja Chettiar',
    birthDate: '1895',
    deathDate: '1995',
    description: 'Founder of J.K.K. Nattraja Educational Institutions, Tamil Nadu',
  },
  parentOrganization: {
    '@type': 'EducationalOrganization',
    '@id': 'https://jkkn.ac.in/#organization',
    name: 'JKKN Institutions',
    url: 'https://jkkn.ac.in/',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.4446062,
    longitude: 77.7309852,
  },
  hasMap: 'https://maps.app.goo.gl/mXx6rFRqpS9U76BK6',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919345855001',
      email: collegeFacts.email,
      contactType: 'Admissions',
      availableLanguage: ['English', 'Tamil'],
      areaServed: 'IN',
    },
  ],
  sameAs: jkknSameAsUrls,
  award: [`NAAC ${collegeFacts.naacGrade} Grade Accreditation`],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Approval',
      name: 'National Dental Commission (NDC) Approved',
      recognizedBy: {
        '@type': 'Organization',
        name: 'National Dental Commission',
        alternateName: ['NDC', 'Dental Council of India (until 19 March 2026)'],
        url: collegeFacts.regulatorSuccessionSource,
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Accreditation',
      name: `NAAC ${collegeFacts.naacGrade} Grade Accredited`,
      recognizedBy: {
        '@type': 'Organization',
        name: 'National Assessment and Accreditation Council',
        alternateName: 'NAAC',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Affiliation',
      name: 'Affiliated to The Tamil Nadu Dr. M.G.R. Medical University',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: 'The Tamil Nadu Dr. M.G.R. Medical University',
        url: 'https://www.tnmgrmu.ac.in/',
      },
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Namakkal' },
    { '@type': 'City', name: 'Salem' },
    { '@type': 'City', name: 'Erode' },
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Tiruchengode' },
    { '@type': 'City', name: 'Komarapalayam' },
    { '@type': 'State', name: 'Tamil Nadu' },
  ],
  knowsAbout: [
    'Bachelor of Dental Surgery',
    'Master of Dental Surgery',
    'Dental Education in India',
    'NDC Approved Dental Colleges',
    'Dental College Tamil Nadu',
    'Orthodontics',
    'Prosthodontics',
    'Periodontics',
    'Conservative Dentistry',
    'Oral Medicine and Radiology',
    'Artificial Intelligence in Dental Education',
    'CAD/CAM Technology',
    'Digital Dentistry',
  ],
  // Hospital departments (9) - a department is not a sanctioned MDS speciality (5).
  medicalSpecialty: ['Dentistry', ...collegeFacts.departmentsList],
  numberOfBeds: collegeFacts.hospitalBeds,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Academic Programs',
    itemListElement: [
      { '@type': 'Course', '@id': `${DENTAL_COURSE_URLS.bds}#course`, name: 'BDS - Bachelor of Dental Surgery', url: DENTAL_COURSE_URLS.bds },
      { '@type': 'Course', '@id': `${DENTAL_COURSE_URLS.mdsPeriodontics}#course`, name: 'MDS - Periodontics', url: DENTAL_COURSE_URLS.mdsPeriodontics },
      { '@type': 'Course', '@id': `${DENTAL_COURSE_URLS.mdsOrthodontics}#course`, name: 'MDS - Orthodontics & Dentofacial Orthopedics', url: DENTAL_COURSE_URLS.mdsOrthodontics },
      { '@type': 'Course', '@id': `${DENTAL_COURSE_URLS.mdsProsthodontics}#course`, name: 'MDS - Prosthodontics Crown & Bridge', url: DENTAL_COURSE_URLS.mdsProsthodontics },
      { '@type': 'Course', '@id': `${DENTAL_COURSE_URLS.mdsConservative}#course`, name: 'MDS - Conservative Dentistry & Endodontics', url: DENTAL_COURSE_URLS.mdsConservative },
      { '@type': 'Course', '@id': `${DENTAL_COURSE_URLS.mdsOralMedicine}#course`, name: 'MDS - Oral Medicine & Radiology', url: DENTAL_COURSE_URLS.mdsOralMedicine },
    ],
  },
};

export default dentalOrganizationSchema;
