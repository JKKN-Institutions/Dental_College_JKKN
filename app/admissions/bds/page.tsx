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
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  METADATA                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'BDS Admission 2026-27 | JKKN Dental College Komarapalayam',
  description:
    'Apply for BDS admission at JKKN Dental College, Komarapalayam. NEET-UG based, 100 DCI-approved seats, scholarships, hostel & 92% placement support.',
  keywords:
    'BDS admission 2026, BDS admission Tamil Nadu, JKKN BDS admission, NEET BDS counselling, BDS seats Namakkal, dental college admission Komarapalayam, BDS fees Tamil Nadu',
  openGraph: {
    title: 'BDS Admission 2026-27 | JKKN Dental College & Hospital',
    description:
      'NEET-based BDS admission at JKKN Dental College. 100 seats, DCI approved, NAAC A grade, scholarships and hostel available.',
    url: 'https://dental.jkkn.ac.in/admissions/bds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'BDS Admission 2026-27 at JKKN Dental College',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDS Admission 2026-27 | JKKN Dental College',
    description:
      'NEET-based BDS admission at JKKN Dental College. 100 seats, DCI approved, NAAC A grade, scholarships available.',
    images: ['/images/BDS-hero-image.png'],
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/admissions/bds/',
  },
};

/* ------------------------------------------------------------------ */
/*  SCHEMAS                                                           */
/* ------------------------------------------------------------------ */

const bdsCourseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': 'https://dental.jkkn.ac.in/admissions/bds/#course',
  name: 'Bachelor of Dental Surgery (BDS) — Admission 2026-27',
  description:
    '5-year DCI-approved BDS program (4 years academic + 1 year compulsory rotating internship) at JKKN Dental College & Hospital, Komarapalayam, Tamil Nadu. 100 seats, NEET-UG based admission, affiliated to TN Dr. MGR Medical University.',
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
  educationalCredentialAwarded: 'BDS (Bachelor of Dental Surgery)',
  timeRequired: 'P5Y',
  occupationalCategory: 'Dentist',
  coursePrerequisites:
    '10+2 with Physics, Chemistry, Biology (PCB) with minimum 50% aggregate (40% for reserved); NEET-UG qualification required; minimum 17 years of age as on 31 December 2026',
  numberOfCredits: '240',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Full-time',
    courseWorkload: 'PT5Y',
    startDate: '2026-09',
    endDate: '2031-08',
    instructor: {
      '@type': 'Person',
      name: 'Department of Dental Sciences Faculty',
    },
  },
  offers: {
    '@type': 'Offer',
    category: 'Government Quota / Management Quota',
    availability: 'https://schema.org/InStock',
    url: 'https://www.jkkn.ai/apply/jkkn-admission-2026',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      minPrice: '450000',
      maxPrice: '550000',
      unitText: 'per year',
      description:
        'Management Quota tuition fee range. Government Quota fee as per TN state norms.',
    },
  },
};

const bdsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the eligibility for BDS admission at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (40% for SC/ST/OBC), a valid NEET-UG 2026 qualifying score, and must be at least 17 years old as on 31 December 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many BDS seats are available at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College & Hospital offers 100 BDS seats per year, approved by the Dental Council of India (DCI) and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the BDS course fee at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS Management Quota tuition fee is ₹4,50,000/year (Dayscholar with Instruments) or ₹5,50,000/year (with Hostel and Instruments). Government Quota fee is as per Tamil Nadu state norms. Installment payment options and scholarships are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the BDS admission process at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS admission is NEET-UG based. Step 1: Qualify NEET-UG 2026. Step 2: Apply online at www.jkkn.ai/apply/jkkn-admission-2026. Step 3: Participate in TN state counselling (Govt Quota) or apply directly (Management Quota). Step 4: Complete document verification at the campus. Step 5: Pay fees and confirm admission.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for BDS admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required documents: NEET-UG 2026 scorecard, 10th and 12th marksheets and certificates, transfer certificate, conduct certificate, community certificate (if applicable), nativity certificate, Aadhaar card, passport-sized photographs, and migration certificate (for out-of-state candidates).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the BDS course duration at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS at JKKN Dental College is a 5-year program — 4 years of academic study covering pre-clinical, para-clinical, and clinical subjects, followed by 1 year of compulsory rotating internship (CRRI) across 9 specialized dental departments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are scholarships available for BDS learners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. JKKN offers merit-based scholarships, sports quota scholarships, single parent scholarships, and government scholarships including PMSS (₹2.5L–6L/year for SC/SCA/ST/BC-CC), First Graduate (₹40K/year for BC/MBC/DNC/BCM), Community Scholarship (₹5K–10K/year), and Naan Mudhalvan (₹1,000/month for Tamil medium students).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NEET cutoff for BDS at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NEET cutoff scores vary each year based on state counselling results and category (General, OBC, SC, ST). For the latest 2026-27 cutoff information and personalised guidance, contact the JKKN admissions team at +91 93458 55001.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hostel accommodation available for BDS learners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. JKKN provides separate boys and girls hostels with 24/7 security, Wi-Fi, mess facilities, and learning commons. Hostel charges are included in the ₹5,50,000/year Management Quota package or can be paid separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What career options are available after BDS from JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS graduates can pursue private dental practice, government dental services, MDS specialisation via NEET-MDS, corporate dental chains (Clove, Apollo, Sabka), armed forces dental corps, research and academics, dental product industry, and international opportunities in UK (NHS), UAE, Singapore, and Australia. JKKN offers 92% placement assistance.',
      },
    },
  ],
};

const bdsHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Apply for BDS Admission at JKKN Dental College 2026-27',
  description:
    'Step-by-step guide to apply for BDS admission at JKKN Dental College & Hospital, Komarapalayam, Tamil Nadu.',
  totalTime: 'P30D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Qualify NEET-UG 2026',
      text: 'Appear for and qualify NEET-UG 2026 with Physics, Chemistry, and Biology. Minimum 50% aggregate in 10+2 PCB required (40% for reserved categories).',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Register Online',
      text: 'Apply online at www.jkkn.ai/apply/jkkn-admission-2026 with your NEET-UG details, academic records, and personal information.',
      url: 'https://www.jkkn.ai/apply/jkkn-admission-2026',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Counselling & Allotment',
      text: 'Participate in Tamil Nadu state counselling for Government Quota seats, or apply directly to JKKN for Management Quota seats.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Document Verification',
      text: 'Visit JKKN Dental College campus with original documents — NEET scorecard, 10th & 12th certificates, ID proof, and category certificates for verification.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Fee Payment & Enrollment',
      text: 'Complete fee payment via demand draft, online transfer, or UPI. Receive your BDS admission confirmation letter and join the 2026-27 batch.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const heroStats = [
  { number: '100', label: 'BDS Seats' },
  { number: '5', label: 'Year Programme' },
  { number: `${collegeFacts.dentalChairs}+`, label: 'Dental Chairs' },
  { number: `${collegeFacts.collegeAge}+`, label: 'Years of Excellence' },
];

const trustBadges = [
  { label: 'DCI Approved', sublabel: 'Dental Council of India', icon: Shield },
  { label: 'NAAC A Grade', sublabel: 'Accredited Institution', icon: Award },
  { label: 'TN Dr. MGR University', sublabel: 'Affiliated', icon: GraduationCap },
  { label: 'Govt. of Tamil Nadu', sublabel: 'Approved', icon: Building2 },
];

const eligibility = [
  {
    title: 'Academic Qualification',
    text: 'Passed 10+2 (Higher Secondary) with Physics, Chemistry, and Biology as compulsory subjects',
    icon: BookOpen,
  },
  {
    title: 'Minimum Marks',
    text: '50% aggregate in PCB for General; 40% for SC/ST/OBC candidates',
    icon: CheckCircle,
  },
  {
    title: 'NEET-UG 2026',
    text: 'Valid NEET-UG 2026 qualifying score is mandatory for all candidates',
    icon: ClipboardList,
  },
  {
    title: 'Age Requirement',
    text: 'Minimum 17 years as on 31 December 2026 (no upper age limit)',
    icon: CalendarDays,
  },
  {
    title: 'Nationality',
    text: 'Indian nationals, NRI, and Foreign nationals eligible per DCI norms',
    icon: Globe,
  },
  {
    title: 'Medical Fitness',
    text: 'Medically fit to pursue dental education and clinical practice',
    icon: HeartPulse,
  },
];

const admissionSteps = [
  {
    step: 1,
    title: 'Qualify NEET-UG 2026',
    description:
      'Appear for NEET-UG 2026 and secure the minimum qualifying percentile prescribed by NMC/DCI.',
    icon: BookOpen,
  },
  {
    step: 2,
    title: 'Apply Online',
    description:
      'Register at www.jkkn.ai/apply/jkkn-admission-2026 and fill the BDS application with required details.',
    icon: ClipboardList,
  },
  {
    step: 3,
    title: 'Counselling',
    description:
      'Participate in Tamil Nadu state counselling (Govt Quota) or apply directly to JKKN (Management Quota).',
    icon: Users,
  },
  {
    step: 4,
    title: 'Document Verification',
    description:
      'Visit campus with all original documents for verification and seat confirmation.',
    icon: Shield,
  },
  {
    step: 5,
    title: 'Pay Fees & Enrol',
    description:
      'Complete fee payment and receive admission confirmation letter for the 2026-27 BDS batch.',
    icon: CheckCircle,
  },
];

const requiredDocs = [
  'NEET-UG 2026 Scorecard & Rank Letter',
  '10th Standard Marksheet & Certificate',
  '12th Standard Marksheet & Certificate',
  'Transfer Certificate (TC)',
  'Conduct / Character Certificate',
  'Community Certificate (if applicable)',
  'Nativity Certificate (Tamil Nadu candidates)',
  'Aadhaar Card / Government ID Proof',
  '8 Passport-size Photographs',
  'Migration Certificate (out-of-state candidates)',
  'Income Certificate (for scholarships)',
  'Medical Fitness Certificate',
];

const feeBreakdown = [
  {
    quota: 'Government Quota',
    tuition: 'As per TN Govt Norms',
    note: 'Allotted through TN state counselling based on NEET rank.',
  },
  {
    quota: 'Management Quota — Dayscholar',
    tuition: '₹ 4,50,000 / year',
    note: 'Includes tuition fee and learner instruments kit.',
  },
  {
    quota: 'Management Quota — With Hostel',
    tuition: '₹ 5,50,000 / year',
    note: 'Includes tuition, instruments, hostel and mess.',
  },
  {
    quota: 'NRI / Foreign National',
    tuition: 'As per DCI norms',
    note: 'Contact admissions for the latest NRI fee structure.',
  },
];

const importantDates = [
  { event: 'NEET-UG 2026 Examination', date: 'May 2026 (tentative)' },
  { event: 'NEET-UG 2026 Results', date: 'June 2026 (tentative)' },
  { event: 'JKKN Online Application Opens', date: 'March 2026' },
  { event: 'TN State Counselling', date: 'July – August 2026' },
  { event: 'Management Quota Admission', date: 'July – August 2026' },
  { event: 'Academic Session Begins', date: 'September 2026' },
];

const careerPaths = [
  {
    title: 'Private Dental Practice',
    description: 'Start your own clinic or join an established practice as a registered dental surgeon.',
    icon: Briefcase,
  },
  {
    title: 'MDS Specialisation',
    description: 'Pursue postgraduate specialisation via NEET-MDS in Ortho, Endo, Prostho, Periodontics, and more.',
    icon: GraduationCap,
  },
  {
    title: 'Corporate Dental Chains',
    description: 'Join Apollo Dental, Clove Dental, Sabka Dentist, Dental Planet, and other national chains.',
    icon: Hospital,
  },
  {
    title: 'Government Services',
    description: 'Serve as a government dental surgeon in PHCs, district hospitals, ESI, and railways.',
    icon: Shield,
  },
  {
    title: 'Armed Forces',
    description: 'Join Indian Army Dental Corps, Navy, and Air Force as a Short Service Commission officer.',
    icon: Award,
  },
  {
    title: 'International Practice',
    description: 'Practice abroad after qualifying exams — UK (NHS), UAE, Singapore, Saudi Arabia, Australia.',
    icon: Globe,
  },
  {
    title: 'Research & Academics',
    description: 'Teach at dental colleges, pursue PhD, or contribute to dental research and publications.',
    icon: FlaskConical,
  },
  {
    title: 'Dental Industry',
    description: 'Work with leading dental product manufacturers, implant companies, and laboratories.',
    icon: Microscope,
  },
];

const whyJKKN = [
  { text: `${collegeFacts.collegeAge}+ years of dental education excellence (since 1987)`, icon: Building2 },
  { text: `${collegeFacts.dentalChairs}+ dental chairs & ${collegeFacts.hospitalBeds}+ hospital beds for clinical exposure`, icon: Stethoscope },
  { text: `${collegeFacts.dailyPatients}+ daily patients — hands-on training from Year 1`, icon: HeartPulse },
  { text: 'DCI approved, NAAC A grade accredited institution', icon: Award },
  { text: 'India\'s 1st AI-Integrated Dental Campus', icon: Cpu },
  { text: '92% placement assistance with national & international tie-ups', icon: Briefcase },
  { text: '9 specialised dental departments with expert senior learners', icon: Users },
  { text: 'NH-544 location — accessible from Salem, Erode, Coimbatore, Tiruppur', icon: MapPin },
];

const bdsFaqs = [
  {
    q: 'What is the eligibility for BDS admission at JKKN Dental College?',
    a: 'Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (40% for SC/ST/OBC), a valid NEET-UG 2026 qualifying score, and must be at least 17 years old as on 31 December 2026.',
  },
  {
    q: 'How many BDS seats are available?',
    a: 'JKKN Dental College & Hospital offers 100 BDS seats per year, approved by the Dental Council of India (DCI) and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.',
  },
  {
    q: 'What is the BDS course fee at JKKN?',
    a: 'BDS Management Quota tuition fee is ₹4,50,000/year (Dayscholar with Instruments) or ₹5,50,000/year (with Hostel and Instruments). Government Quota fee is as per Tamil Nadu state norms.',
  },
  {
    q: 'What is the BDS admission process?',
    a: 'BDS admission is NEET-UG based. Qualify NEET-UG 2026 → Apply online → Participate in TN state counselling (Govt Quota) or apply directly (Management Quota) → Document verification → Fee payment and enrolment.',
  },
  {
    q: 'What documents are required?',
    a: 'NEET-UG scorecard, 10th and 12th marksheets, transfer certificate, conduct certificate, community certificate, nativity certificate, Aadhaar, photographs, and migration certificate (for out-of-state candidates).',
  },
  {
    q: 'How long is the BDS course?',
    a: 'BDS at JKKN is a 5-year program — 4 years of academic study (pre-clinical, para-clinical, clinical) followed by 1 year of compulsory rotating internship (CRRI) across 9 specialised dental departments.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes — merit, sports, single parent, and government scholarships: PMSS (₹2.5L–6L/year for SC/SCA/ST/BC-CC), First Graduate (₹40K/year), Community Scholarship (₹5K–10K/year), Naan Mudhalvan (₹1,000/month for Tamil medium students).',
  },
  {
    q: 'Is hostel accommodation available for BDS learners?',
    a: 'Yes. JKKN provides separate boys and girls hostels with 24/7 security, Wi-Fi, mess facilities, and learning commons. Hostel charges are included in the ₹5,50,000/year Management Quota package.',
  },
  {
    q: 'What career options are available after BDS from JKKN?',
    a: 'BDS graduates can pursue private practice, government services, MDS specialisation, corporate dental chains, armed forces dental corps, international practice (UK NHS, UAE, Singapore, Australia), research, academics, and dental industry roles.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function BDSAdmissionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admissions/bds');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'BDS Admission 2026-27 | JKKN Dental College',
    description:
      'Apply for BDS admission at JKKN Dental College, Komarapalayam. NEET-UG based, 100 DCI-approved seats, scholarships and hostel available.',
    url: 'https://dental.jkkn.ac.in/admissions/bds/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Admission', url: 'https://dental.jkkn.ac.in/admissions/' },
          { name: 'BDS Admission', url: 'https://dental.jkkn.ac.in/admissions/bds/' },
        ]}
      />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={bdsCourseSchema} />
      <StructuredData data={bdsFaqSchema} />
      <StructuredData data={bdsHowToSchema} />

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
            <li><span className="text-gray-900 font-semibold" aria-current="page">BDS Admission</span></li>
          </ol>
        </div>
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#7cb983] py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-[#7cb983]/20 backdrop-blur-sm text-[#7cb983] px-4 py-2 rounded-full text-sm font-bold border border-[#7cb983]/30">
              <Cpu className="w-4 h-4" />
              India&apos;s 1st AI-Integrated Dental Campus
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              BDS Admission {collegeFacts.currentAdmissionYear}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            BDS Admission Open — <span className="text-[#7cb983]">2026-27</span>
          </h1>

          <p className="hero-description text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Apply for the Bachelor of Dental Surgery programme at JKKN Dental College &
            Hospital, Komarapalayam — DCI approved, NAAC A grade, with 100 seats, 200+
            dental chairs, and 92% placement assistance.
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">About the BDS Programme</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Bachelor of Dental Surgery (BDS) at JKKN is a 5-year undergraduate
              dental programme designed to produce skilled, ethical dental surgeons with
              strong clinical, academic and research foundations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Duration', value: '5 Years (4 + 1 CRRI)', icon: Clock },
              { label: 'Seats', value: '100', icon: Users },
              { label: 'Mode', value: 'Full-time', icon: BookOpen },
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

      {/* ELIGIBILITY */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">BDS Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Candidates must satisfy all of the following requirements to be eligible for BDS admission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibility.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">BDS Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent, NEET-based admission process completed in five simple steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {admissionSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-[#FBFBEE] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
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
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">Documents Required for BDS Admission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep these documents ready (originals + 2 sets of self-attested photocopies) for verification.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">BDS Fee Structure 2026-27</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent fee structure across Government Quota and Management Quota seats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {feeBreakdown.map((fee) => (
              <div key={fee.quota} className="bg-[#FBFBEE] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
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
              Installment payment options and scholarships are available. For the complete
              fee structure including exam fees, hostel & mess, visit{' '}
              <Link href="/fees-structure/" className="underline font-bold">fee structure page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">BDS Admission Important Dates</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Key timelines for the BDS 2026-27 admission cycle (subject to NMC/DCI/TN counselling notifications).
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">Career Opportunities After BDS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A BDS degree from JKKN opens up diverse career options — from private
              practice to global healthcare.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">Why Choose JKKN for BDS?</h2>
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
            BDS Admission — FAQs
          </h2>

          <div className="space-y-4">
            {bdsFaqs.map((faq) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin Your BDS Journey?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join 100 BDS learners admitted every year at JKKN Dental College &
            Hospital — DCI approved, NAAC A grade, with industry-leading clinical
            exposure and placement support.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
