import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { collegeFacts } from '@/data/collegeFacts';
import {
  GraduationCap,
  ClipboardList,
  IndianRupee,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  BookOpen,
  Building2,
  Clock,
  Shield,
  Cpu,
  Briefcase,
  Globe,
  HeartPulse,
  FlaskConical,
  Hospital,
  CalendarDays,
  Microscope,
  IdCard,
  Smile,
  ScanLine,
} from 'lucide-react';
import DentalEnquiryForm from "@/components/lead/DentalEnquiryForm";

/* ------------------------------------------------------------------ */
/*  METADATA                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'MDS Admission 2026-27 | JKKN Dental College Komarapalayam',
  description:
    'Apply for MDS admission at JKKN Dental College — 18 DCI-approved seats across 5 specializations. NEET-MDS based, scholarships and hostel support available.',
  keywords:
    'MDS admission 2026, MDS admission Tamil Nadu, JKKN MDS admission, NEET MDS counselling, MDS orthodontics, MDS prosthodontics, MDS periodontics, MDS specialization Namakkal',
  openGraph: {
    title: 'MDS Admission 2026-27 | JKKN Dental College & Hospital',
    description:
      'NEET-MDS based admission at JKKN — 18 PG seats across Orthodontics, Prosthodontics, Periodontics, Conservative Dentistry & Oral Medicine.',
    url: 'https://dental.jkkn.ac.in/admissions/mds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MDS Admission 2026-27 at JKKN Dental College',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDS Admission 2026-27 | JKKN Dental College',
    description:
      'NEET-MDS based admission at JKKN — 18 PG seats across 5 dental specializations.',
    images: ['/images/BDS-hero-image.webp'],
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/admissions/mds/',
  },
};

/* ------------------------------------------------------------------ */
/*  SCHEMAS                                                           */
/* ------------------------------------------------------------------ */

const mdsCourseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': 'https://dental.jkkn.ac.in/admissions/mds/#course',
  name: 'Master of Dental Surgery (MDS) — Admission 2026-27',
  description:
    '3-year DCI-approved MDS postgraduate program at JKKN Dental College & Hospital, Komarapalayam. 18 seats across 5 specializations — Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry, and Oral Medicine. NEET-MDS based admission.',
  provider: {
    '@type': 'CollegeOrUniversity',
    name: 'JKKN Dental College & Hospital',
    url: 'https://dental.jkkn.ac.in/',
    sameAs: [
      'https://www.facebook.com/jkkndental/',
      'https://www.instagram.com/jkkndental/',
      'https://www.linkedin.com/school/jkkndental/',
      'https://maps.app.goo.gl/mXx6rFRqpS9U76BK6',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Natarajapuram, NH-544, Salem-Coimbatore Highway',
      addressLocality: 'Komarapalayam',
      addressRegion: 'Tamil Nadu',
      postalCode: '638183',
      addressCountry: 'IN',
    },
  },
  educationalCredentialAwarded: 'MDS (Master of Dental Surgery)',
  timeRequired: 'P3Y',
  occupationalCategory: 'Dental Specialist',
  coursePrerequisites:
    'BDS degree from a DCI-recognised institution with completed compulsory rotating internship; valid NEET-MDS 2026 qualifying score; registration with State Dental Council.',
  hasCourseInstance: [
    { '@type': 'CourseInstance', name: 'MDS Periodontics', courseMode: 'Full-time', courseWorkload: 'PT3Y' },
    { '@type': 'CourseInstance', name: 'MDS Orthodontics & Dentofacial Orthopedics', courseMode: 'Full-time', courseWorkload: 'PT3Y' },
    { '@type': 'CourseInstance', name: 'MDS Prosthodontics Crown & Bridge', courseMode: 'Full-time', courseWorkload: 'PT3Y' },
    { '@type': 'CourseInstance', name: 'MDS Conservative Dentistry & Endodontics', courseMode: 'Full-time', courseWorkload: 'PT3Y' },
    { '@type': 'CourseInstance', name: 'MDS Oral Medicine & Radiology', courseMode: 'Full-time', courseWorkload: 'PT3Y' },
  ],
  offers: {
    '@type': 'Offer',
    category: 'Government Quota / Management Quota',
    availability: 'https://schema.org/InStock',
    url: 'https://www.jkkn.ai/apply/jkkn-admission-2026',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      minPrice: '800000',
      maxPrice: '1500000',
      unitText: 'per year',
      description:
        'Management Quota tuition fee range. Actual fee varies by specialization.',
    },
  },
};

const mdsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the eligibility for MDS admission at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Candidates must hold a BDS degree from a DCI-recognised dental college, have completed the 1-year compulsory rotating internship, possess a valid NEET-MDS 2026 qualifying score, and be registered with the State Dental Council.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many MDS seats and specializations are available at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College offers 18 MDS seats across 5 specializations: Periodontics (2 seats), Orthodontics & Dentofacial Orthopedics (5 seats), Prosthodontics Crown & Bridge (3 seats), Conservative Dentistry & Endodontics (5 seats), and Oral Medicine & Radiology (3 seats).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MDS course fee at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MDS Management Quota fee ranges from ₹8,00,000 to ₹15,00,000 per year depending on specialization. Government Quota fee is as per Tamil Nadu state norms. Contact admissions at +91 93458 55001 for the exact specialization-wise fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MDS admission process at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MDS admission is NEET-MDS based. Qualify NEET-MDS 2026 → Apply online → Participate in Tamil Nadu MCC/state counselling (Govt Quota) or apply directly (Management Quota) → Document verification → Fee payment and enrolment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the duration of the MDS course?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MDS at JKKN is a 3-year full-time postgraduate programme including didactic teaching, clinical training, dissertation/thesis, and seminars across the chosen specialization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which MDS specializations does JKKN offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN offers 5 DCI-approved MDS specializations: Periodontics, Orthodontics & Dentofacial Orthopedics, Prosthodontics Crown & Bridge, Conservative Dentistry & Endodontics, and Oral Medicine & Radiology.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for MDS admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required documents: NEET-MDS 2026 scorecard, BDS degree certificate and all year marksheets, internship completion certificate, State Dental Council registration certificate, 10th and 12th marksheets, transfer certificate, conduct certificate, community certificate, Aadhaar, migration certificate (if applicable), and passport-size photographs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hostel accommodation available for MDS learners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. JKKN provides separate boys and girls hostels with 24/7 security, Wi-Fi, mess facilities, and learning commons for MDS postgraduates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the stipend for MDS learners at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MDS postgraduates receive a stipend as per Tamil Nadu Dr. MGR Medical University and Tamil Nadu Government norms. The stipend increases each year of the programme. Contact admissions for the latest 2026-27 stipend structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the career prospects after MDS from JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MDS graduates can pursue specialist private practice, senior positions in corporate dental hospitals, faculty roles in dental colleges, research and PhD opportunities, government dental specialist roles, armed forces dental corps, and international practice (UK, UAE, Singapore, Australia).',
      },
    },
  ],
};

const mdsHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Apply for MDS Admission at JKKN Dental College 2026-27',
  description:
    'Step-by-step guide to apply for MDS postgraduate admission at JKKN Dental College & Hospital.',
  totalTime: 'P30D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Qualify NEET-MDS 2026',
      text: 'Appear for NEET-MDS 2026 after completing BDS and the compulsory rotating internship. Secure the qualifying percentile prescribed by NBE/DCI.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Register Online',
      text: 'Apply online at www.jkkn.ai/apply/jkkn-admission-2026 with your NEET-MDS score, BDS marksheets, internship and registration details.',
      url: 'https://www.jkkn.ai/apply/jkkn-admission-2026',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Counselling & Specialization Choice',
      text: 'Participate in MCC/TN state counselling for Govt Quota or apply directly for Management Quota. Choose your preferred specialization based on seat availability.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Document Verification',
      text: 'Report to JKKN Dental College with original documents — BDS degree, internship certificate, NEET-MDS scorecard, State Dental Council registration for verification.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Fee Payment & Enrolment',
      text: 'Complete fee payment and receive your MDS admission confirmation. Join the 3-year postgraduate programme in your chosen specialization.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const heroStats = [
  { number: `${collegeFacts.mdsSeatCount}`, label: 'MDS Seats' },
  { number: `${collegeFacts.mdsSpecialisations}`, label: 'Specializations' },
  { number: '3', label: 'Year Programme' },
  { number: `${collegeFacts.totalDepartments}`, label: 'Departments' },
];

const trustBadges = [
  { label: 'DCI Approved', sublabel: 'Dental Council of India', icon: Shield },
  { label: 'NAAC A Grade', sublabel: 'Accredited Institution', icon: Award },
  { label: 'TN Dr. MGR University', sublabel: 'Affiliated', icon: GraduationCap },
  { label: 'Govt. of Tamil Nadu', sublabel: 'Approved', icon: Building2 },
];

const specializationIcons: Record<string, typeof Stethoscope> = {
  'Periodontics': HeartPulse,
  'Orthodontics and Dentofacial Orthopedics': Smile,
  'Prosthodontics Crown and Bridge': Stethoscope,
  'Conservative Dentistry and Endodontics': Microscope,
  'Oral Medicine and Radiology': ScanLine,
};

const specializations = collegeFacts.mdsSpecialisationsList.map((spec) => ({
  name: spec.name,
  seats: spec.seats,
  icon: specializationIcons[spec.name] ?? Stethoscope,
  description: {
    'Periodontics':
      'Specialisation in the prevention, diagnosis, and treatment of gum diseases, dental implants, and supporting structures of teeth.',
    'Orthodontics and Dentofacial Orthopedics':
      'Focuses on diagnosis, prevention, and correction of malpositioned teeth and jaws using braces, aligners, and orthopedic appliances.',
    'Prosthodontics Crown and Bridge':
      'Restoration and replacement of missing teeth using crowns, bridges, dentures, implants, and maxillofacial prostheses.',
    'Conservative Dentistry and Endodontics':
      'Conservation of natural teeth — root canal treatment, restorative procedures, aesthetic dentistry, and microscopic dentistry.',
    'Oral Medicine and Radiology':
      'Diagnosis and non-surgical management of oral diseases, oral cancer screening, and dental imaging including OPG, CBCT, and digital radiography.',
  }[spec.name] ?? '',
}));

const eligibility = [
  {
    title: 'BDS Degree',
    text: 'BDS from a DCI-recognised dental college with all year marksheets',
    icon: GraduationCap,
  },
  {
    title: 'CRRI Completion',
    text: '1-year compulsory rotating internship (CRRI) completed before counselling',
    icon: CheckCircle,
  },
  {
    title: 'NEET-MDS 2026',
    text: 'Valid NEET-MDS 2026 qualifying percentile is mandatory',
    icon: ClipboardList,
  },
  {
    title: 'State Council Registration',
    text: 'Registered as a dental practitioner with State Dental Council',
    icon: IdCard,
  },
  {
    title: 'Nationality',
    text: 'Indian nationals, NRI and Foreign nationals eligible per DCI norms',
    icon: Globe,
  },
  {
    title: 'Medical Fitness',
    text: 'Medically fit to pursue postgraduate clinical practice',
    icon: HeartPulse,
  },
];

const admissionSteps = [
  {
    step: 1,
    title: 'Qualify NEET-MDS 2026',
    description:
      'Appear for NEET-MDS 2026 after BDS and internship; secure qualifying percentile prescribed by NBE/DCI.',
    icon: BookOpen,
  },
  {
    step: 2,
    title: 'Apply Online',
    description:
      'Register at www.jkkn.ai/apply/jkkn-admission-2026 with NEET-MDS rank, BDS records, and personal details.',
    icon: ClipboardList,
  },
  {
    step: 3,
    title: 'Counselling',
    description:
      'Participate in MCC/TN state counselling for Govt Quota seats or apply directly for Management Quota.',
    icon: Users,
  },
  {
    step: 4,
    title: 'Document Verification',
    description:
      'Report to JKKN campus with originals — BDS degree, internship certificate, council registration, NEET scorecard.',
    icon: Shield,
  },
  {
    step: 5,
    title: 'Pay Fees & Enrol',
    description:
      'Complete fee payment and join the 3-year MDS programme in your chosen specialization.',
    icon: CheckCircle,
  },
];

const requiredDocs = [
  'NEET-MDS 2026 Scorecard & Rank Letter',
  'BDS Degree Certificate (Provisional / Final)',
  'BDS Year-wise Marksheets (all 4 years)',
  'Compulsory Rotating Internship Completion Certificate',
  'State Dental Council Registration Certificate',
  '10th Standard Marksheet & Certificate',
  '12th Standard Marksheet & Certificate',
  'Transfer Certificate from BDS Institution',
  'Conduct / Character Certificate',
  'Community Certificate (if applicable)',
  'Aadhaar Card / Government ID Proof',
  'Migration Certificate (out-of-state candidates)',
  '8 Passport-size Photographs',
  'Medical Fitness Certificate',
];

const feeBreakdown = [
  {
    quota: 'Government Quota',
    tuition: 'As per TN Govt Norms',
    note: 'Allotted through MCC/TN state counselling based on NEET-MDS rank.',
  },
  {
    quota: 'Management Quota',
    tuition: '₹ 8,00,000 – ₹ 15,00,000 / year',
    note: 'Fee varies by specialization. Contact admissions for exact figures.',
  },
  {
    quota: 'Hostel & Mess (Optional)',
    tuition: 'Available on campus',
    note: 'Separate boys and girls hostels with mess; charges as per occupancy.',
  },
  {
    quota: 'NRI / Foreign National',
    tuition: 'As per DCI norms',
    note: 'Contact admissions for the current NRI MDS fee structure.',
  },
];

const importantDates = [
  { event: 'NEET-MDS 2026 Examination', date: 'March 2026 (tentative)' },
  { event: 'NEET-MDS 2026 Results', date: 'April 2026 (tentative)' },
  { event: 'JKKN MDS Online Application Opens', date: 'April 2026' },
  { event: 'MCC AIQ Counselling', date: 'May – June 2026' },
  { event: 'TN State Counselling', date: 'June – July 2026' },
  { event: 'Management Quota Admission', date: 'June – July 2026' },
  { event: 'Academic Session Begins', date: 'August 2026' },
];

const careerPaths = [
  {
    title: 'Specialist Private Practice',
    description: 'Start a specialist dental clinic in your chosen field — orthodontics, endodontics, prosthodontics, periodontics, or oral medicine.',
    icon: Briefcase,
  },
  {
    title: 'Faculty & Academics',
    description: 'Join dental colleges as Assistant Professor; progress to Associate / Professor with experience.',
    icon: GraduationCap,
  },
  {
    title: 'Corporate Dental Chains',
    description: 'Join Apollo Dental, Clove Dental, Sabka Dentist as specialist consultants and clinical heads.',
    icon: Hospital,
  },
  {
    title: 'Government Specialist',
    description: 'Serve as specialist dental surgeon in govt hospitals, ESI, railways, and PSUs.',
    icon: Shield,
  },
  {
    title: 'Research & PhD',
    description: 'Pursue PhD, publish in indexed journals, lead clinical research and trials.',
    icon: FlaskConical,
  },
  {
    title: 'International Practice',
    description: 'Practice abroad after qualifying exams — UK, UAE, Singapore, Australia, Canada.',
    icon: Globe,
  },
  {
    title: 'Armed Forces',
    description: 'Join Indian Army Dental Corps, Navy, and Air Force as Specialist Dental Officer.',
    icon: Award,
  },
  {
    title: 'Hospital Leadership',
    description: 'Move into HOD, clinical director, and administrative roles in multi-speciality dental hospitals.',
    icon: Users,
  },
];

const whyJKKN = [
  { text: `${collegeFacts.collegeAge}+ years of postgraduate dental training`, icon: Building2 },
  { text: `${collegeFacts.mdsSeatCount} MDS seats across ${collegeFacts.mdsSpecialisations} specializations`, icon: Stethoscope },
  { text: `${collegeFacts.dailyPatients}+ daily patients — superlative clinical exposure`, icon: HeartPulse },
  { text: 'DCI approved, NAAC A grade accredited', icon: Award },
  { text: 'Advanced equipment — CBCT, lasers, CAD/CAM, microscopes', icon: Cpu },
  { text: 'Active dissertation and research culture', icon: FlaskConical },
  { text: 'Expert senior learners with national & international training', icon: Users },
  { text: 'NH-544 location — accessible from Salem, Erode, Coimbatore', icon: MapPin },
];

const mdsFaqs = [
  {
    q: 'What is the eligibility for MDS admission at JKKN?',
    a: 'BDS degree from a DCI-recognised college, 1-year compulsory rotating internship completed, valid NEET-MDS 2026 qualifying score, and registration with State Dental Council.',
  },
  {
    q: 'How many MDS seats and specializations are available?',
    a: 'JKKN offers 18 MDS seats across 5 specializations — Periodontics (2), Orthodontics & Dentofacial Orthopedics (5), Prosthodontics Crown & Bridge (3), Conservative Dentistry & Endodontics (5), and Oral Medicine & Radiology (3).',
  },
  {
    q: 'What is the MDS course fee at JKKN?',
    a: 'Management Quota fee ranges from ₹8,00,000 to ₹15,00,000 per year depending on specialization. Government Quota fee is as per Tamil Nadu state norms. Contact admissions for specialization-wise figures.',
  },
  {
    q: 'What is the MDS admission process?',
    a: 'NEET-MDS based: Qualify NEET-MDS 2026 → Apply online → MCC/TN state counselling (Govt Quota) or direct application (Management Quota) → Document verification → Fee payment & enrolment.',
  },
  {
    q: 'How long is the MDS programme?',
    a: 'MDS at JKKN is a 3-year full-time postgraduate programme covering didactic teaching, clinical training, dissertation, seminars, and case presentations.',
  },
  {
    q: 'Which MDS specializations does JKKN offer?',
    a: 'Periodontics, Orthodontics & Dentofacial Orthopedics, Prosthodontics Crown & Bridge, Conservative Dentistry & Endodontics, and Oral Medicine & Radiology — all DCI approved.',
  },
  {
    q: 'What documents are required?',
    a: 'NEET-MDS scorecard, BDS degree and marksheets, internship certificate, State Dental Council registration, 10th and 12th certificates, transfer certificate, ID proof, community certificate, photographs.',
  },
  {
    q: 'Is hostel accommodation available?',
    a: 'Yes — separate boys and girls hostels with 24/7 security, Wi-Fi, mess facilities, and learning commons for MDS postgraduates.',
  },
  {
    q: 'What is the stipend for MDS learners?',
    a: 'MDS postgraduates receive a stipend per TN Dr. MGR Medical University and Tamil Nadu Government norms; it increases each year of the programme.',
  },
  {
    q: 'What career prospects open up after MDS from JKKN?',
    a: 'Specialist private practice, dental college faculty, corporate dental chains, government specialist roles, research & PhD, armed forces dental corps, and international practice (UK, UAE, Singapore, Australia).',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function MDSAdmissionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admissions/mds');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'MDS Admission 2026-27 | JKKN Dental College',
    description:
      'Apply for MDS admission at JKKN Dental College, Komarapalayam. 18 DCI-approved seats across 5 specializations. NEET-MDS based admission.',
    url: 'https://dental.jkkn.ac.in/admissions/mds/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Admission', url: 'https://dental.jkkn.ac.in/admissions/' },
          { name: 'MDS Admission', url: 'https://dental.jkkn.ac.in/admissions/mds/' },
        ]}
      />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={mdsCourseSchema} />
      <StructuredData data={mdsFaqSchema} />
      <StructuredData data={mdsHowToSchema} />

      <Header />

      {/* Inline breadcrumb — Home is the only clickable item */}
      <nav aria-label="Breadcrumb" className="bg-[#FBFBEE] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs sm:text-sm text-gray-600">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
            <li>
              <Link href="/" className="text-[#006837] hover:underline font-medium">
                Home
              </Link>
            </li>
            <li className="text-gray-400" aria-hidden="true">/</li>
            <li><span className="text-gray-600">Admission</span></li>
            <li className="text-gray-400" aria-hidden="true">/</li>
            <li><span className="text-gray-900 font-semibold" aria-current="page">MDS Admission</span></li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#7cb983] py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-[#7cb983]/20 backdrop-blur-sm text-[#7cb983] px-4 py-2 rounded-full text-sm font-bold border border-[#7cb983]/30">
              <Cpu className="w-4 h-4" />
              India&apos;s 1st AI-Integrated Dental Campus
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              MDS Admission {collegeFacts.currentAdmissionYear}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            MDS Admission Open — <span className="text-[#7cb983]">2026-27</span>
          </h1>

          <p className="hero-description text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Postgraduate dental specialisation at JKKN Dental College & Hospital,
            Komarapalayam — {collegeFacts.mdsSeatCount} DCI-approved seats across {collegeFacts.mdsSpecialisations} specializations, with
            advanced equipment, dissertation support, and a 200+ dental chair
            teaching hospital.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#7cb983]">{stat.number}</div>
                <div className="text-sm text-gray-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=dental.jkkn.ac.in&utm_medium=organic&utm_campaign=admissions-mds"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 bg-[#FBFBEE] rounded-xl px-4 py-3 border border-gray-100">
                <div className="bg-[#006837] text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#006837] leading-tight">{badge.label}</p>
                  <p className="text-xs text-gray-500 leading-tight truncate">{badge.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME OVERVIEW */}
      <section className="py-16 px-4 bg-white">
        <article className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">About the MDS Programme</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Master of Dental Surgery (MDS) at JKKN is a 3-year postgraduate
              programme designed to produce specialist dental surgeons with deep
              clinical, research, and academic expertise across five DCI-approved
              specializations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Duration', value: '3 Years', icon: Clock },
              { label: 'Total Seats', value: `${collegeFacts.mdsSeatCount}`, icon: Users },
              { label: 'Specializations', value: `${collegeFacts.mdsSpecialisations}`, icon: Stethoscope },
              { label: 'Affiliation', value: 'TN Dr. MGR Univ.', icon: GraduationCap },
            ].map((item) => (
              <div key={item.label} className="bg-[#FBFBEE] rounded-2xl p-6 text-center border border-gray-100">
                <item.icon className="w-8 h-8 text-[#7cb983] mx-auto mb-3" />
                <div className="text-lg font-bold text-[#006837]">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              MDS Specializations at JKKN
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from 5 DCI-approved postgraduate specializations — each with
              expert senior learners, dedicated departments and research opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec) => (
              <div key={spec.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-xl flex items-center justify-center">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <span className="bg-[#7cb983]/15 text-[#006837] px-3 py-1 rounded-full text-xs font-bold">
                    {spec.seats} Seats
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#006837] mb-2">{spec.name}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">MDS Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Candidates must satisfy all of the following requirements to be eligible for MDS admission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibility.map((item) => (
              <div key={item.title} className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-[#7cb983]/15 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#006837]" />
                </div>
                <h3 className="text-lg font-bold text-[#006837] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">MDS Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NEET-MDS based admission process completed in five clear steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {admissionSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-[#7cb983] mx-auto mb-3" />
                  <h3 className="text-base font-bold text-[#006837] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">Documents Required for MDS Admission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep these documents ready (originals + 2 sets of self-attested photocopies) for verification.
            </p>
          </div>

          <div className="bg-[#FBFBEE] rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="grid sm:grid-cols-2 gap-4">
              {requiredDocs.map((doc) => (
                <div key={doc} className="flex items-start gap-3">
                  <IdCard className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <p className="text-gray-700 text-sm">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">MDS Fee Structure 2026-27</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Indicative fee structure across Government Quota and Management Quota seats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {feeBreakdown.map((fee) => (
              <div key={fee.quota} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <IndianRupee className="w-6 h-6 text-[#7cb983]" />
                  <h3 className="text-lg font-bold text-[#006837]">{fee.quota}</h3>
                </div>
                <p className="text-2xl font-bold text-[#002309] mb-2">{fee.tuition}</p>
                <p className="text-sm text-gray-600">{fee.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#7cb983]/10 border border-[#7cb983]/30 rounded-2xl p-6 text-center">
            <p className="text-[#006837] font-medium">
              MDS fees vary by specialization. For the complete specialization-wise fee
              structure and stipend details, visit{' '}
              <Link href="/fees-structure/" className="underline font-bold">fee structure page</Link>{' '}
              or call <a href="tel:+919345855001" className="underline font-bold">+91 93458 55001</a>.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MDS Admission Important Dates</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Key timelines for the MDS 2026-27 admission cycle (subject to NBE/DCI/MCC notifications).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {importantDates.map((item, i) => (
              <div
                key={item.event}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-4 ${
                  i !== importantDates.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-[#7cb983] shrink-0" />
                  <p className="text-white font-medium">{item.event}</p>
                </div>
                <p className="text-[#7cb983] font-semibold text-sm sm:text-base">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">Career Opportunities After MDS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              An MDS specialisation from JKKN opens up high-value, specialist career
              paths across India and globally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((career) => (
              <div key={career.title} className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-[#7cb983]/15 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <career.icon className="w-6 h-6 text-[#006837]" />
                </div>
                <h3 className="text-base font-bold text-[#006837] mb-2">{career.title}</h3>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JKKN */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">Why Choose JKKN for MDS?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyJKKN.map((item) => (
              <div key={item.text} className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <p className="text-gray-700 text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-12">
            MDS Admission — FAQs
          </h2>

          <div className="space-y-4">
            {mdsFaqs.map((faq) => (
              <details key={faq.q} className="group bg-[#FBFBEE] rounded-xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white transition-colors duration-200">
                  <h3 className="text-base md:text-lg font-semibold text-[#006837] pr-4">{faq.q}</h3>
                  <ArrowRight className="w-5 h-5 text-[#7cb983] shrink-0 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#006837] to-[#7cb983]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Specialise at JKKN?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join {collegeFacts.mdsSeatCount} MDS postgraduates admitted every year at JKKN Dental College
            & Hospital across {collegeFacts.mdsSpecialisations} DCI-approved specializations.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=dental.jkkn.ac.in&utm_medium=organic&utm_campaign=admissions-mds"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#FBFBEE] text-[#006837] font-bold px-10 py-4 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-white/90">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+919345855001" className="hover:text-white text-sm">{collegeFacts.phone}</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href={`mailto:${collegeFacts.email}`} className="hover:text-white text-sm">{collegeFacts.email}</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm text-center">{collegeFacts.address.shortAddress}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser cannot POST there */}
      {/* directly - the endpoint sends no Access-Control-Allow-Origin header. */}
      <section className="bg-gradient-to-br from-[#006837] to-[#0b8f52] py-16">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Get a Call Back</h2>
              <p className="text-white/80 text-center text-sm mb-8">Leave your details and our admission team will contact you within 24 hours.</p>
              <DentalEnquiryForm sourcePage="admissions-mds" />
          </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
