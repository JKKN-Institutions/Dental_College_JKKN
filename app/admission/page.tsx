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
  FileText,
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
  MessageCircle,
  Cpu,
  Briefcase,
  Globe,
  HeartPulse,
  FlaskConical,
  Hospital,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  METADATA                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'Admission 2026-27 | BDS & MDS | JKKN Dental College',
  description:
    'Apply for BDS & MDS admission at JKKN Dental College, Komarapalayam. NEET-based admission, 100 BDS + 18 MDS seats, scholarships, hostel & placement support.',
  keywords:
    'JKKN dental college admission, BDS admission Tamil Nadu, MDS admission 2026, dental college admission Namakkal, NEET dental admission, dental college fees, JKKN dental scholarship',
  openGraph: {
    title: 'Admission 2026-27 | BDS & MDS | JKKN Dental College & Hospital',
    description:
      'Apply for BDS & MDS admission at JKKN Dental College. NEET-based, 118 seats, scholarships available.',
    url: 'https://dental.jkkn.ac.in/admission/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/BDS-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN Dental College Admission 2026-27',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admission 2026-27 | BDS & MDS | JKKN Dental College',
    description:
      'Apply for BDS & MDS admission at JKKN Dental College. NEET-based, 118 seats, scholarships available.',
    images: ['/images/BDS-hero-image.png'],
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/admission/',
  },
};

/* ------------------------------------------------------------------ */
/*  SCHEMAS                                                           */
/* ------------------------------------------------------------------ */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the eligibility criteria for BDS admission at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Candidates must have passed twelve standard with Physics, Chemistry, and Biology with minimum fifty percent marks and a valid NEET UG score for BDS admission at JKKN Dental College.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seats are available for BDS and MDS at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College offers one hundred BDS seats and eighteen MDS seats across five postgraduate specializations approved by the Dental Council of India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the admission process for JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Admission is based on NEET score through state counseling for government quota and management quota. Candidates must register online and complete document verification at the college.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are scholarships available at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College offers merit-based scholarships, sports quota scholarships, single parent scholarships, and government scholarships for SC, ST, OBC, and EWS categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fee structure for BDS at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS annual tuition fee at JKKN Dental College ranges from three lakh to five lakh rupees per year. Installment payment options and scholarship fee reductions are available.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Apply for BDS & MDS Admission at JKKN Dental College',
  description:
    'Step-by-step guide to apply for BDS and MDS admission at JKKN Dental College & Hospital, Komarapalayam, Tamil Nadu.',
  totalTime: 'P30D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Appear for NEET',
      text: 'Qualify NEET-UG for BDS or NEET-MDS for postgraduate programs. Ensure you meet the minimum score requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Apply Online',
      text: 'Register on the JKKN admission portal at admission.jkkn.ac.in and submit your application with required documents.',
      url: 'https://admission.jkkn.ac.in/',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Counseling and Allotment',
      text: 'Participate in Tamil Nadu state counseling for government quota seats or apply through management quota directly to the college.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Document Verification',
      text: 'Visit JKKN Dental College campus for original document verification and admission confirmation.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Fee Payment and Enrollment',
      text: 'Complete fee payment via demand draft, online transfer, or UPI and receive your admission confirmation letter.',
    },
  ],
};

const admissionEventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'JKKN Dental College Admissions 2026-27 — BDS & MDS',
  description:
    'Admissions open for BDS and MDS programs at JKKN Dental College & Hospital, Komarapalayam. DCI approved, NAAC A accredited. Apply via NEET counseling or management quota.',
  startDate: '2026-03-01',
  endDate: '2026-08-31',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  location: [
    {
      '@type': 'Place',
      name: 'JKKN Dental College & Hospital',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'NH-544, Natarajapuram',
        addressLocality: 'Komarapalayam',
        addressRegion: 'Tamil Nadu',
        postalCode: '638183',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'VirtualLocation',
      url: 'https://admission.jkkn.ac.in/',
    },
  ],
  organizer: {
    '@type': 'CollegeOrUniversity',
    name: 'JKKN Dental College & Hospital',
    url: 'https://dental.jkkn.ac.in/',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://admission.jkkn.ac.in/',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-03-01',
  },
  image: 'https://dental.jkkn.ac.in/images/BDS-hero-image.png',
};

const bdsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Bachelor of Dental Surgery (BDS)',
  description:
    '5-year undergraduate dental program including 1-year compulsory rotatory internship at JKKN Dental College & Hospital, approved by DCI with hands-on clinical training and world-class infrastructure.',
  provider: {
    '@type': 'CollegeOrUniversity',
    name: 'JKKN Dental College & Hospital',
    url: 'https://dental.jkkn.ac.in/',
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
    '10+2 with Physics, Chemistry, Biology (PCB) with minimum 50% aggregate; NEET-UG qualification required',
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
    url: 'https://admission.jkkn.ac.in/',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      minPrice: '300000',
      maxPrice: '500000',
      unitText: 'per year',
      description:
        'Approximate annual tuition fee for BDS program. Actual fees may vary.',
    },
  },
};

const mdsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Master of Dental Surgery (MDS)',
  description:
    '3-year postgraduate dental program with specializations in Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine at JKKN Dental College & Hospital.',
  provider: {
    '@type': 'CollegeOrUniversity',
    name: 'JKKN Dental College & Hospital',
    url: 'https://dental.jkkn.ac.in/',
  },
  educationalCredentialAwarded: 'MDS (Master of Dental Surgery)',
  timeRequired: 'P3Y',
  occupationalCategory: 'Dental Specialist',
  coursePrerequisites:
    'BDS degree from a recognized university; NEET-MDS qualification required',
  hasCourseInstance: [
    { '@type': 'CourseInstance', name: 'MDS Periodontics', courseMode: 'Full-time' },
    { '@type': 'CourseInstance', name: 'MDS Orthodontics & Dentofacial Orthopedics', courseMode: 'Full-time' },
    { '@type': 'CourseInstance', name: 'MDS Prosthodontics Crown & Bridge', courseMode: 'Full-time' },
    { '@type': 'CourseInstance', name: 'MDS Conservative Dentistry & Endodontics', courseMode: 'Full-time' },
    { '@type': 'CourseInstance', name: 'MDS Oral Medicine', courseMode: 'Full-time' },
  ],
  offers: {
    '@type': 'Offer',
    category: 'Government Quota / Management Quota',
    availability: 'https://schema.org/InStock',
    url: 'https://admission.jkkn.ac.in/',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      minPrice: '800000',
      maxPrice: '1500000',
      unitText: 'per year',
      description:
        'Approximate annual tuition fee for MDS program. Actual fees may vary by specialization.',
    },
  },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const admissionSteps = [
  {
    step: 1,
    title: 'Appear for NEET',
    description: 'Qualify NEET-UG for BDS or NEET-MDS for postgraduate programs.',
    icon: BookOpen,
  },
  {
    step: 2,
    title: 'Apply Online',
    description: 'Register on the admission portal and submit your application with documents.',
    icon: ClipboardList,
  },
  {
    step: 3,
    title: 'Counseling & Allotment',
    description: 'Participate in state counseling or apply through management quota.',
    icon: Users,
  },
  {
    step: 4,
    title: 'Document Verification',
    description: 'Visit the campus for original document verification and admission confirmation.',
    icon: Shield,
  },
  {
    step: 5,
    title: 'Fee Payment & Enrollment',
    description: 'Complete fee payment and receive your admission confirmation letter.',
    icon: CheckCircle,
  },
];

const admissionPages = [
  {
    title: 'Admission Criteria',
    description: 'BDS & MDS eligibility, NEET requirements, age limits, and selection process.',
    href: '/admission/admission-criteria/',
    icon: ClipboardList,
  },
  {
    title: 'Fee Structure',
    description: 'Complete fee breakdown for BDS & MDS programs including hostel and other charges.',
    href: '/fees-structure/',
    icon: IndianRupee,
  },
  {
    title: 'Scholarships & Aid',
    description: 'Merit, sports, single parent, and government scholarships with application details.',
    href: '/admission/scholarship-policy-for-dental-college/',
    icon: Award,
  },
  {
    title: 'Fee Refund Policy',
    description: 'Refund timelines, UGC guidelines, and withdrawal procedures.',
    href: '/admission/fee-refund-policy/',
    icon: IndianRupee,
  },
  {
    title: 'Prospectus',
    description: 'Download the official admission prospectus with complete program and campus details.',
    href: '/admission/prospectus/',
    icon: FileText,
  },
  {
    title: 'SEDG Equitable Opportunity',
    description: 'Inclusive admission policies for socio-economically disadvantaged groups per UGC 2024.',
    href: '/admission/equitable-opportunity-for-sedg-group/',
    icon: Users,
  },
];

const programHighlights = [
  {
    program: 'BDS',
    fullName: 'Bachelor of Dental Surgery',
    duration: '5 Years (4 + 1 CRRI)',
    seats: collegeFacts.bdsSeatCount,
    eligibility: '10+2 with PCB (50%) + NEET-UG',
    icon: GraduationCap,
  },
  {
    program: 'MDS',
    fullName: 'Master of Dental Surgery',
    duration: '3 Years',
    seats: collegeFacts.mdsSeatCount,
    eligibility: 'BDS + NEET-MDS',
    icon: Stethoscope,
  },
];

const whyChooseReasons = [
  { text: `${collegeFacts.collegeAge}+ years of academic excellence`, icon: Building2 },
  { text: `${collegeFacts.dentalChairs}+ dental chairs & ${collegeFacts.hospitalBeds}+ hospital beds`, icon: Stethoscope },
  { text: 'DCI approved & NAAC A grade accredited', icon: Award },
  { text: 'Affiliated to TN Dr. MGR Medical University', icon: GraduationCap },
  { text: `${collegeFacts.totalDepartments} departments with expert faculty`, icon: Users },
  { text: 'NH-544 location — accessible from Salem, Erode & Coimbatore', icon: MapPin },
];

const clinicalStats = [
  { number: `${collegeFacts.dentalChairs}+`, label: 'Dental Chairs', icon: Stethoscope },
  { number: `${collegeFacts.hospitalBeds}+`, label: 'Hospital Beds', icon: Hospital },
  { number: '500+', label: 'Daily Patients', icon: HeartPulse },
  { number: `${collegeFacts.totalDepartments}`, label: 'Departments', icon: Building2 },
];

const careerOutcomes = [
  {
    title: 'Private Practice',
    description: 'Start your own dental clinic or join an established practice.',
    icon: Briefcase,
  },
  {
    title: 'Dental Hospital Chains',
    description: 'Join leading chains like Apollo Dental, Clove Dental, or Sabka Dentist.',
    icon: Hospital,
  },
  {
    title: 'Government Service',
    description: 'Serve as a government dental surgeon in PHCs, district hospitals, or the armed forces.',
    icon: Shield,
  },
  {
    title: 'MDS Specialization',
    description: 'Pursue postgraduate specialization in Orthodontics, Endodontics, Prosthodontics, and more.',
    icon: GraduationCap,
  },
  {
    title: 'International Opportunities',
    description: 'Practice abroad — UK (NHS), UAE, Singapore, Saudi Arabia, and Australia.',
    icon: Globe,
  },
  {
    title: 'Research & Academics',
    description: 'Contribute to dental research, teach at dental colleges, or pursue a PhD.',
    icon: FlaskConical,
  },
];

const trustBadges = [
  { label: 'DCI Approved', sublabel: 'Dental Council of India', icon: Shield },
  { label: 'NAAC A Grade', sublabel: 'Accredited Institution', icon: Award },
  { label: 'TN Dr. MGR Medical University', sublabel: 'Affiliated University', icon: GraduationCap },
  { label: 'Govt. of Tamil Nadu', sublabel: 'Approved Institution', icon: Building2 },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function AdmissionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admission');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Admission 2026-27 | BDS & MDS | JKKN Dental College',
    description:
      'Apply for BDS & MDS admission at JKKN Dental College, Komarapalayam. NEET-based admission, 100 BDS + 18 MDS seats, scholarships, hostel & placement support.',
    url: 'https://dental.jkkn.ac.in/admission/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Admission', url: 'https://dental.jkkn.ac.in/admission/' },
        ]}
      />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={howToSchema} />
      <StructuredData data={admissionEventSchema} />
      <StructuredData data={bdsSchema} />
      <StructuredData data={mdsSchema} />

      <Header />

      {/* ============================================================ */}
      {/*  HERO SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#7cb983] py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* AI Campus + Year Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-[#FFC107]/20 backdrop-blur-sm text-[#FFC107] px-4 py-2 rounded-full text-sm font-bold border border-[#FFC107]/30">
              <Cpu className="w-4 h-4" />
              India&apos;s 1st AI-Integrated Dental Campus
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              Academic Year {collegeFacts.currentAdmissionYear}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Admission Open for{' '}
            <span className="text-[#FFC107]">BDS & MDS</span>
          </h1>

          <p className="hero-description text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Begin your dental career at JKKN Dental College & Hospital — DCI
            approved, NAAC A grade accredited, with {collegeFacts.quickStats.totalSeats} seats
            across {collegeFacts.mdsSpecialisations} MDS specializations. NEET-based admission
            with scholarships and placement support.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-10">
            {[
              { number: `${collegeFacts.bdsSeatCount}`, label: 'BDS Seats' },
              { number: `${collegeFacts.mdsSeatCount}`, label: 'MDS Seats' },
              { number: `${collegeFacts.mdsSpecialisations}`, label: 'PG Specializations' },
              { number: `${collegeFacts.collegeAge}+`, label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#FFC107]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              className="bg-[#FFC107] hover:bg-[#e6ad00] text-[#006837] font-bold py-3.5 px-8 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919345855001?text=Hi%2C%20I%20am%20interested%20in%20admission%20at%20JKKN%20Dental%20College.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TRUST BADGES                                                */}
      {/* ============================================================ */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 bg-[#FBF8F3] rounded-xl px-4 py-3 border border-gray-100"
              >
                <div className="bg-[#006837] text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#006837] leading-tight">
                    {badge.label}
                  </p>
                  <p className="text-xs text-gray-500 leading-tight truncate">
                    {badge.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROGRAMS OVERVIEW                                           */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Programs Offered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DCI-approved undergraduate and postgraduate dental programs
              affiliated to The Tamil Nadu Dr. M.G.R. Medical University
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programHighlights.map((prog) => (
              <div
                key={prog.program}
                className="bg-[#FBF8F3] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#006837] text-white w-14 h-14 rounded-xl flex items-center justify-center">
                    <prog.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#006837]">
                      {prog.program}
                    </h3>
                    <p className="text-gray-600 text-sm">{prog.fullName}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-[#7cb983] shrink-0" />
                    <span>Duration: {prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-[#7cb983] shrink-0" />
                    <span>Seats: {prog.seats}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <ClipboardList className="w-5 h-5 text-[#7cb983] shrink-0" />
                    <span>Eligibility: {prog.eligibility}</span>
                  </div>
                </div>

                {prog.program === 'MDS' && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-[#006837] mb-3">
                      Specializations:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {collegeFacts.mdsSpecialisationsList.map((spec) => (
                        <span
                          key={spec.name}
                          className="bg-[#7cb983]/15 text-[#006837] px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {spec.name} ({spec.seats})
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CLINICAL EXPOSURE STATS                                     */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#004d2a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unmatched Clinical Exposure
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Train at our 200+ chair dental hospital with real patient exposure
              from Year 1 — one of the highest clinical training volumes in Tamil
              Nadu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {clinicalStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-[#FFC107] mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'Clinical training from Year 1 — not just final year',
              'Exposure to all dental specialties including oral surgery',
              'Advanced equipment — digital X-ray, CAD/CAM, laser dentistry',
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-[#FFC107] mt-0.5 shrink-0" />
                <p className="text-sm text-gray-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ADMISSION PROCESS STEPS                                     */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent NEET-based admission in five steps
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {admissionSteps.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-[#7cb983] mx-auto mb-3" />
                  <h3 className="text-base font-bold text-[#006837] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ADMISSION RESOURCES (Sub-page links)                        */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Admission Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know — eligibility, fees, scholarships, and
              more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {admissionPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-[#FBF8F3] rounded-2xl p-6 hover:shadow-xl hover:border-[#7cb983] border border-transparent transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#7cb983] text-white w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#006837] transition-colors duration-300">
                    <page.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#006837]">
                    {page.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                <span className="text-[#7cb983] text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CAREER OUTCOMES AFTER BDS                                   */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Career Paths After BDS & MDS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dental degree opens doors to diverse career opportunities — from
              private practice to international healthcare
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careerOutcomes.map((career) => (
              <div
                key={career.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-[#7cb983]/15 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <career.icon className="w-6 h-6 text-[#006837]" />
                </div>
                <h3 className="text-lg font-bold text-[#006837] mb-2">
                  {career.title}
                </h3>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY CHOOSE JKKN                                             */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Why Choose JKKN Dental College?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseReasons.map((reason) => (
              <div
                key={reason.text}
                className="bg-[#FBF8F3] rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <reason.icon className="w-6 h-6 text-[#7cb983] mt-0.5 shrink-0" />
                <p className="text-gray-700 font-medium">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA SECTION — Apply Now + WhatsApp                         */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#006837] to-[#7cb983]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Dental Career?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join {collegeFacts.quickStats.totalSeats} students admitted every year at one of
            Tamil Nadu&apos;s leading dental institutions. Apply now or reach out to
            our admission team for guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              className="bg-[#FFC107] hover:bg-[#e6ad00] text-[#006837] font-bold px-8 py-4 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919345855001?text=Hi%2C%20I%20am%20interested%20in%20admission%20at%20JKKN%20Dental%20College.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-lg"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a
              href="tel:+919345855001"
              className="border-2 border-white hover:bg-white hover:text-[#006837] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-white/90">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+919345855001" className="hover:text-white text-sm">
                {collegeFacts.phone}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:dental@jkkn.ac.in"
                className="hover:text-white text-sm"
              >
                {collegeFacts.email}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm text-center">
                {collegeFacts.address.shortAddress}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ SECTION (matches schema)                                */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What are the eligibility criteria for BDS admission?',
                a: 'Candidates must have passed 12th standard with Physics, Chemistry, and Biology with a minimum of 50% marks (40% for reserved categories) and a valid NEET-UG score.',
              },
              {
                q: 'How many seats are available for BDS and MDS?',
                a: `JKKN Dental College offers ${collegeFacts.bdsSeatCount} BDS seats and ${collegeFacts.mdsSeatCount} MDS seats across ${collegeFacts.mdsSpecialisations} postgraduate specializations, all approved by the Dental Council of India.`,
              },
              {
                q: 'What is the admission process?',
                a: 'Admission is NEET-based. Candidates can apply through state counseling (government quota) or management quota. Register online, attend counseling, complete document verification, and pay fees to confirm admission.',
              },
              {
                q: 'Are scholarships available?',
                a: 'Yes. JKKN offers merit-based scholarships, sports quota scholarships (wrestling, volleyball, basketball, etc.), single parent scholarships, and government scholarships for SC/ST/OBC/EWS categories.',
              },
              {
                q: 'What is the fee structure for BDS?',
                a: `BDS annual tuition fee ranges from ₹3,00,000 to ₹5,00,000 per year. Installment payment options are available. Visit the fee structure page for a complete breakdown.`,
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-base md:text-lg font-semibold text-[#006837] pr-4">
                    {faq.q}
                  </h3>
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
