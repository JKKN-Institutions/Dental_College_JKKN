'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import MDSComparisonTables from '@/components/mds/MDSComparisonTables';
import {
  generateBreadcrumbSchema,
  generateSpeakableWebPageSchema,
  generateFAQSchema,
  generateEducationalOrganizationSchema,
  generateLocalBusinessSchema,
  generateMDSCourseSchema,
  generateHowToSchema,
} from '@/lib/metadata';

// FAQ data — shared between FAQPage schema and rendered FAQ section
const mdsFAQs = [
  {
    question: "What is MDS (Master of Dental Surgery)?",
    answer:
      "MDS (Master of Dental Surgery) is a 3-year postgraduate dental program that provides specialized training in specific areas of dentistry. It is the highest clinical degree in dental sciences, preparing graduates for specialized practice, academic careers, and advanced research in their chosen field.",
  },
  {
    question: "What MDS specializations are available at JKKN?",
    answer:
      "JKKN Dental College offers 5 DCI-approved MDS specializations: Endodontics (Conservative Dentistry), Prosthodontics (Crown & Bridge), Periodontics (Oral Implantology), Oral Medicine & Radiology, and Orthodontics (Dentofacial Orthopedics). A total of 18 seats are available annually across all specializations.",
  },
  {
    question: "What is the eligibility for MDS admission?",
    answer:
      "Candidates must hold a BDS degree from a DCI-recognized institution, complete one-year compulsory rotating internship, have permanent State Dental Council registration, and qualify NEET MDS entrance examination with a valid score meeting current cutoff norms.",
  },
  {
    question: "What are the career opportunities after MDS?",
    answer:
      "MDS graduates can establish specialty private practices, join multi-specialty clinics and hospitals, pursue academic careers as Learning Facilitators, work in corporate dental chains or government hospitals, and explore international opportunities. Many also become consultants for dental product companies or pursue research careers.",
  },
  {
    question: "Is JKKN Dental College MDS program recognized?",
    answer:
      "Yes, all MDS programs at JKKN Dental College are fully recognized and approved by the Dental Council of India (DCI). The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and maintains NAAC accreditation, ensuring national recognition for all graduates.",
  },
  {
    question: "How many MDS seats are there in Tamil Nadu?",
    answer:
      "Tamil Nadu has 32+ dental colleges offering approximately 850+ MDS seats across 9 specializations. This includes 3 government colleges and 29+ private colleges, with 316 seats available under the management quota. JKKN Dental College contributes 18 MDS seats across 5 specializations.",
  },
  {
    question: "What is the MDS course fees in Tamil Nadu?",
    answer:
      "MDS fees in Tamil Nadu range from ₹50,000/year in government colleges to ₹18 lakh/year in private management quota. Total 3-year fees range from ₹1.5 lakh (government) to ₹54 lakh (private management). Government quota seats in private colleges cost ₹4.5–7 lakh per year.",
  },
  {
    question: "Which are the top MDS dental colleges in Tamil Nadu?",
    answer:
      "Top MDS dental colleges in Tamil Nadu include JKKN Dental College & Hospital (Komarapalayam), Saveetha Dental College (Chennai), SRM Dental College (Ramapuram), Sri Ramachandra Dental College (Porur), Meenakshi Ammal Dental College (Chennai), and Vinayaka Mission's Sankarachariyar Dental College (Salem). All are DCI-approved.",
  },
];

// Admission steps for HowTo schema
const mdsAdmissionSteps = [
  {
    name: "Complete BDS Degree",
    text: "Complete a Bachelor of Dental Surgery (BDS) degree from a Dental Council of India (DCI) recognized dental college, including a 1-year compulsory rotating internship.",
  },
  {
    name: "Register with State Dental Council",
    text: "Obtain permanent registration with any State Dental Council in India, which is mandatory for MDS admission in Tamil Nadu.",
  },
  {
    name: "Apply for NEET MDS",
    text: "Register for the NEET MDS entrance examination conducted by the National Board of Examinations in Medical Sciences (NBEMS) on the official NBEMS portal.",
  },
  {
    name: "Qualify NEET MDS",
    text: "Appear for and qualify NEET MDS with a score above the annual cutoff. The cutoff varies each year based on the number of candidates and available seats.",
  },
  {
    name: "Apply for Counselling",
    text: "Apply for Tamil Nadu state counselling or all-India counselling (MCC) based on your preferred category. Submit required documents and pay the counselling fee.",
  },
  {
    name: "Participate in Seat Allotment",
    text: "Choose your preferred MDS college (such as JKKN Dental College) and specialization during counselling rounds. Seat allotment is based on NEET MDS rank, category, and seat availability.",
  },
  {
    name: "Complete Admission at JKKN Dental College",
    text: "Upon seat allotment at JKKN Dental College, complete document verification, pay the prescribed fees, and enroll in your chosen MDS specialization to begin your 3-year postgraduate dental program.",
  },
];

export default function MDSProgram() {
  // Enriched Course schema with offers, courseInstance, educationalLevel
  const mdsSchema = generateMDSCourseSchema();

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema(
    '/academics/details-of-academic-programs/mds'
  );

  // FAQPage schema from shared FAQ data (was MISSING before)
  const faqSchema = generateFAQSchema(mdsFAQs);

  // EducationalOrganization schema for entity + knowledge panel
  const eduOrgSchema = generateEducationalOrganizationSchema();

  // LocalBusiness (Dentist) schema for GBP alignment
  const localBusinessSchema = generateLocalBusinessSchema();

  // HowTo schema for admission process
  const admissionHowToSchema = generateHowToSchema({
    name: "How to Get MDS Admission in Tamil Nadu at JKKN Dental College",
    description:
      "Step-by-step guide to securing MDS admission at JKKN Dental College, Tamil Nadu — from BDS completion to final enrollment in a 3-year postgraduate dental program.",
    steps: mdsAdmissionSteps,
  });

  // Expanded Speakable schema for voice search (added .mds-direct-answer,
  // table captions, hero description)
  const speakableSchema = generateSpeakableWebPageSchema({
    title:
      'MDS Colleges in Tamil Nadu | JKKN Dental College & Hospital — Admissions 2026',
    description:
      '3-year postgraduate MDS program with 18 seats across 5 DCI-approved specializations at JKKN Dental College & Hospital, Tamil Nadu. NAAC-accredited, affiliated to TN Dr. MGR Medical University.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/',
    speakableCssSelectors: [
      'h1',
      '.hero-description',
      '.mds-direct-answer',
      'article p',
      'details div',
    ],
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={eduOrgSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={mdsSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={admissionHowToSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#7cb983] py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* DCI Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#7cb983] font-semibold text-sm">DCI Approved | NAAC Accredited</span>
              </div>

              {/* Heading — Primary keyword: "mds colleges in tamilnadu" */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                MDS Colleges in <span className="text-[#7cb983]">Tamil Nadu</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100 mt-3">
                  JKKN Dental College — Master of Dental Surgery Admissions 2026
                </span>
              </h1>

              {/* Description */}
              <p className="hero-description text-lg text-gray-200 mb-8 leading-relaxed">
                JKKN Dental College &amp; Hospital is a leading MDS dental
                college in Tamil Nadu offering 18 seats across 5 DCI-approved
                specializations. NAAC-accredited and affiliated to The Tamil
                Nadu Dr. M.G.R. Medical University, our 3-year postgraduate MDS
                program combines rigorous academics with clinical exposure
                across 200+ dental chairs and 500+ daily patients.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">5</div>
                  <div className="text-[10px] sm:text-sm text-gray-200 uppercase">Specializations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">3</div>
                  <div className="text-[10px] sm:text-sm text-gray-200 uppercase">Years Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">18</div>
                  <div className="text-[10px] sm:text-sm text-gray-200 uppercase">Total Seats</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">100%</div>
                  <div className="text-[10px] sm:text-sm text-gray-200 uppercase">Clinical Training</div>
                </div>
              </div>
            </div>

            {/* Right Content - Video Box */}
            <div className="relative">
              <div className="relative rounded-2xl border-4 border-white/20 overflow-hidden bg-gradient-to-br from-[#006837] to-[#7cb983] aspect-video flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-6">MDS Clinical Excellence</h2>
              </div>

              {/* DCI Recognized Badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-4 lg:-right-4 bg-white rounded-lg sm:rounded-xl shadow-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 scale-75 sm:scale-100 origin-bottom-right">
                <div className="bg-[#7cb983] rounded-lg p-2 sm:p-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-xs sm:text-base">DCI Recognized Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About MDS Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Top accent border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#006837]" />
        {/* Decorative background circle */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#006837]/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2 shadow-sm">
              <span className="text-white font-semibold text-sm uppercase">About MDS</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left — Visual Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[320px] flex flex-col justify-end bg-gradient-to-br from-[#002309] via-[#006837] to-[#7cb983]">
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              {/* Decorative ring */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full border-4 border-white/20" />
              <div className="absolute top-14 right-14 w-20 h-20 rounded-full border-4 border-white/10" />
              {/* Text content */}
              <div className="relative z-10 p-10">
                <div className="w-12 h-1 bg-[#7cb983] rounded-full mb-5" />
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Advanced Dental Education
                </h2>
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-center">
              {/* Heading with accent underline */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-3">
                  What is MDS (Master of Dental Surgery)?
                </h2>
                <div className="w-16 h-1 bg-[#7cb983] rounded-full" />
              </div>

              <p className="text-gray-600 mb-5 leading-relaxed">
                MDS (Master of Dental Surgery) is a three-year postgraduate dental program that provides intensive specialized training in specific areas of dentistry. It is the highest clinical degree in dental sciences, preparing graduates for specialized practice, academic careers, and advanced research.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                At JKKN Dental College, our MDS programs combine rigorous academic learning framework with extensive clinical exposure. Learners work on diverse cases under expert supervision, conduct original research, and develop the skills required to become leaders in their chosen specialization.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: 'DCI Learning Framework',
                    svg: <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />,
                  },
                  {
                    title: 'Research Focus',
                    svg: <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />,
                  },
                  {
                    title: 'Expert Mentorship',
                    svg: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />,
                  },
                  {
                    title: 'Career Support',
                    svg: <><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></>,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#FBFBEE] border-l-4 border-[#7cb983] rounded-lg px-4 py-4 hover:shadow-md hover:bg-green-50 transition-all duration-200">
                    <div className="bg-[#006837] p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {item.svg}
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Our Specializations</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Choose Your Path to Excellence
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our five DCI-approved MDS specializations. Each program offers comprehensive training, advanced facilities, and expert guidance to help you become a leader in your chosen field.
          </p>

          {/* Specializations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Endodontics */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-6 sm:p-8 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Specialization</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#006837] text-xs font-bold px-3 py-1 rounded-full">5 Seats</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 text-center">Endodontics</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-2">MDS in Endodontics</h4>
                <p className="text-sm text-gray-600 mb-4">Conservative Dentistry & Endodontics</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Specialize in root canal treatment, pulp biology, dental trauma management, and regenerative endodontics using microscopes and advanced instrumentation.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">3 Years</span>
                  </div>
                </div>
                <a href="/conservative-dentistry-and-endodontics" className="text-[#7cb983] hover:text-[#006837] font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Details
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Prosthodontics */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-6 sm:p-8 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Specialization</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#006837] text-xs font-bold px-3 py-1 rounded-full">3 Seats</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 text-center">Prosthodontics</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-2">MDS in Prosthodontics</h4>
                <p className="text-sm text-gray-600 mb-4">Prosthodontics & Crown and Bridge</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Master dental prosthetics, implant restorations, CAD/CAM dentistry, complete dentures, and maxillofacial rehabilitation with digital workflow expertise.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">3 Years</span>
                  </div>
                </div>
                <a href="/prosthodontics-crown-and-bridge" className="text-[#7cb983] hover:text-[#006837] font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Details
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Periodontics */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-6 sm:p-8 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Specialization</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#006837] text-xs font-bold px-3 py-1 rounded-full">2 Seats</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 text-center">Periodontics</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-2">MDS in Periodontics</h4>
                <p className="text-sm text-gray-600 mb-4">Periodontology & Oral Implantology</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Develop expertise in periodontal surgery, dental implant placement, regenerative procedures, laser dentistry, and periodontal-systemic medicine.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">3 Years</span>
                  </div>
                </div>
                <a href="/periodontics" className="text-[#7cb983] hover:text-[#006837] font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Details
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Oral Medicine */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-6 sm:p-8 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Specialization</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#006837] text-xs font-bold px-3 py-1 rounded-full">3 Seats</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 text-center">Oral Medicine</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-2">MDS in Oral Medicine & Radiology</h4>
                <p className="text-sm text-gray-600 mb-4">Diagnosis & Dental Imaging</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Specialize in oral disease diagnosis, CBCT imaging, oral cancer screening, forensic odontology, and management of medically compromised patients.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">3 Years</span>
                  </div>
                </div>
                <a href="/oral-medicine-and-radiology" className="text-[#7cb983] hover:text-[#006837] font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Details
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Orthodontics */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-6 sm:p-8 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Specialization</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#006837] text-xs font-bold px-3 py-1 rounded-full">5 Seats</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-12 text-center">Orthodontics</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-2">MDS in Orthodontics</h4>
                <p className="text-sm text-gray-600 mb-4">Orthodontics & Dentofacial Orthopedics</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Master teeth alignment, clear aligners, fixed appliances, functional therapy, orthognathic surgery coordination, and digital treatment planning.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">3 Years</span>
                  </div>
                </div>
                <a href="/orthodontics-and-dentofacial-orthopedics" className="text-[#7cb983] hover:text-[#006837] font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Details
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#7cb983]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
              <span className="text-[#7cb983] font-semibold text-sm uppercase">Why JKKN</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Program Highlights
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Our MDS programs are designed to provide comprehensive training with excellent infrastructure and experienced mentorship.
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {/* Expert Faculty */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-3">25+</div>
              <div className="text-sm text-white uppercase">Expert Senior Learners</div>
            </div>

            {/* Dental Chairs */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-3">200+</div>
              <div className="text-sm text-white uppercase">Dental Chairs</div>
            </div>

            {/* Patients/Year */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-3">50K+</div>
              <div className="text-sm text-white uppercase">Patients/Year</div>
            </div>

            {/* DCI Approved */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-3">DCI</div>
              <div className="text-sm text-white uppercase">Approved</div>
            </div>

            {/* Publications */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-3">200+</div>
              <div className="text-sm text-white uppercase">Publications</div>
            </div>

            {/* Global Recognition */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-3">Global</div>
              <div className="text-sm text-white uppercase">Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Infrastructure</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Our MDS programs are supported by cutting-edge infrastructure and the latest dental technologies for comprehensive clinical training.
          </p>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Digital Dentistry Lab */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 text-center">Digital Dentistry Learning Lab</h3>
              <p className="text-sm text-gray-600 text-center">
                CAD/CAM systems, intraoral scanners, and 3D printers for precision treatments.
              </p>
            </div>

            {/* Advanced Imaging */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 text-center">Advanced Imaging</h3>
              <p className="text-sm text-gray-600 text-center">
                CBCT, digital OPG, and cephalometry with minimal radiation exposure.
              </p>
            </div>

            {/* Microscope Suite */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 text-center">Microscope Suite</h3>
              <p className="text-sm text-gray-600 text-center">
                Operating microscopes for endodontic microsurgery and precision procedures.
              </p>
            </div>

            {/* Implant Surgery */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#7cb983]/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 text-center">Implant Surgery</h3>
              <p className="text-sm text-gray-600 text-center">
                Dedicated surgical theater with guided surgery and bone grafting facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Join Us</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Admission Information
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Start your journey towards dental specialization at JKKN Dental College through our transparent and merit-based admission process.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b-4 border-[#7cb983]">
                <div className="bg-[#7cb983] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#006837]">Eligibility Criteria</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">BDS degree from DCI recognized dental college</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Completed one-year compulsory rotating internship</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Valid NEET MDS score meeting cutoff criteria</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Permanent State Dental Council registration</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Indian nationality or NRI/OCI (applicable quota)</p>
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b-4 border-[#7cb983]">
                <div className="bg-[#7cb983] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#006837]">Admission Process</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">NEET MDS Examination</h4>
                    <p className="text-gray-600">Register and qualify NEET MDS conducted by NBE</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">State/All-India Counselling</h4>
                    <p className="text-gray-600">Participate in counselling based on your category</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Seat Allotment</h4>
                    <p className="text-gray-600">Receive allotment based on merit and preferences</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#006837] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Document Verification & Enrollment</h4>
                    <p className="text-gray-600">Submit documents and complete fee payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MDS Comparison Tables — SEO + AEO snippet bait */}
      <MDSComparisonTables />

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">FAQs</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Find answers to common questions about MDS programs, admission, and career opportunities.
          </p>

          {/* FAQ Items — rendered from shared mdsFAQs data for schema consistency */}
          <div className="space-y-4">
            {mdsFAQs.map((faq, idx) => (
              <details
                key={idx}
                className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-[#FBFBEE] transition-colors duration-300">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Affiliations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Recognition</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Accreditation & Affiliations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Our MDS programs are recognized by leading regulatory bodies, ensuring quality education and global acceptance.
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {/* DCI */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] rounded-lg p-4 sm:p-6 mb-4 flex items-center justify-center h-24 sm:h-32">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">DCI</h3>
              </div>
              <p className="text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase">DCI Approved</p>
            </div>

            {/* TNMGRMU */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] rounded-lg p-4 sm:p-6 mb-4 flex items-center justify-center h-24 sm:h-32">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center leading-tight">MGR<br className="sm:hidden" />MU</h3>
              </div>
              <p className="text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase">University Affiliated</p>
            </div>

            {/* NAAC */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] rounded-lg p-4 sm:p-6 mb-4 flex items-center justify-center h-24 sm:h-32">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">NAAC</h3>
              </div>
              <p className="text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase">NAAC Accredited</p>
            </div>

            {/* IDA */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] rounded-lg p-4 sm:p-6 mb-4 flex items-center justify-center h-24 sm:h-32">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">IDA</h3>
              </div>
              <p className="text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase">IDA Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7cb983] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Specialize in Dentistry?
          </h2>
          <p className="text-lg text-white mb-10 leading-relaxed max-w-3xl mx-auto">
            Take the first step towards becoming a dental specialist. Join JKKN Dental College's MDS program and transform your career with expert training and world-class facilities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-[#7cb983] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 inline-flex">
              Apply Now
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/pdf/brochure.pdf" download className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#7cb983] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 flex items-center gap-2 inline-block">
              Download Brochure
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
