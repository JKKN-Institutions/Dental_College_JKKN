'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export default function MDSProsthodontics() {
  // Course Schema for MDS Prosthodontics
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MDS Prosthodontics & Crown and Bridge",
    "description": "Transform your dental career with our advanced 3-year postgraduate program. Master complete dentures, fixed prosthodontics, implantology, and maxillofacial prosthetics at one of Tamil Nadu's premier dental institutions.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in"
    },
    "courseCode": "MDS-PROS",
    "educationalCredentialAwarded": "Master of Dental Surgery in Prosthodontics & Crown and Bridge",
    "timeRequired": "P3Y",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "duration": "P3Y"
    }
  };

  // FAQ Schema for MDS Prosthodontics
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the MDS Prosthodontics program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The MDS in Prosthodontics and Crown and Bridge is a 3-year full-time postgraduate program that includes theoretical coursework, extensive clinical training, laboratory work, and a mandatory dissertation on an approved research topic."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for MDS Prosthodontics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. Selection is based on merit ranking, choice of specialty, and availability of seats."
        }
      },
      {
        "@type": "Question",
        "name": "Is implant training included in the curriculum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, comprehensive implant training is an integral part of our MDS Prosthodontics program. Learners receive hands-on training in implant planning, placement, and prosthetic rehabilitation with exposure to the latest implant systems and guided surgery techniques."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career prospects after completing MDS Prosthodontics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graduates can pursue private practice specializing in implants and complex rehabilitations, academic positions in dental colleges, hospital consultancy, research careers in dental materials and digital dentistry, or join armed forces dental corps. International practice opportunities are also available."
        }
      },
      {
        "@type": "Question",
        "name": "Does the college provide hostel accommodation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, separate hostel facilities are available for both male and female postgraduate Learners. The hostels are equipped with modern amenities, Wi-Fi connectivity, mess facilities, and 24/7 security. The campus also includes recreational facilities and a gymnasium."
        }
      },
      {
        "@type": "Question",
        "name": "What CAD/CAM and digital technologies are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our department features the latest digital dentistry equipment including intraoral scanners, desktop 3D scanners, CAD software, milling machines, 3D printers, and CBCT imaging. Learners gain comprehensive training in digital workflow from scanning to final prosthesis fabrication."
        }
      }
    ]
  };

  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Best College for Prosthodontics in India | JKKN Dental',
    description: 'Looking for the best college for prosthodontics in India? JKKN Dental offers MDS Prosthodontics with expert faculty, prosthetic labs & hospital training.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={courseSchema} />
      <StructuredData data={faqSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'MDS Programs', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/' },
        { name: 'Prosthodontics & Crown and Bridge', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/' },
      ]} />
      <StructuredData data={speakableSchema} />
      <Header />
      <Breadcrumb items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics' },
        { name: 'MDS Programs', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds' },
        { name: 'Prosthodontics & Crown and Bridge', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge' },
      ]} />

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* DCI Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-semibold text-sm">DCI Approved | NAAC Accredited</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                MDS Prosthodontics & <span className="text-[#7cb983]">Crown and Bridge</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Transform your dental career with our advanced 3-year postgraduate program. Master complete dentures, fixed prosthodontics, implantology, and maxillofacial prosthetics at one of Tamil Nadu&apos;s premier dental institutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg inline-block">
                  Apply Now
                </Link>
                <button
                  onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#006837] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  Explore Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Prosthodontics Lab Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl border-4 border-white/20 overflow-hidden relative min-h-[400px] md:min-h-[450px]">
                <Image
                  src="/images/MDS-Prosthodontics-&-Crown-and-Bridge-banner-image.webp"
                  alt="Prosthodontics Lab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                />

                {/* Stats Badges */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                      3 Years
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                      6 Seats
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                      100% Placement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar Section */}
      <section className="bg-[#FBFBEE] py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Duration */}
            <div className="flex items-center gap-4">
              <div className="bg-[#7cb983] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Duration</div>
                <div className="text-lg font-bold text-gray-800">3 Years Full-Time</div>
              </div>
            </div>

            {/* University */}
            <div className="flex items-center gap-4">
              <div className="bg-[#7cb983] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">University</div>
                <div className="text-lg font-bold text-gray-800">TN Dr. MGR Medical University</div>
              </div>
            </div>

            {/* Admission */}
            <div className="flex items-center gap-4">
              <div className="bg-[#7cb983] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Admission</div>
                <div className="text-lg font-bold text-gray-800">NEET MDS Qualified</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-[#7cb983] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Location</div>
                <div className="text-lg font-bold text-gray-800">Komarapalayam, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">PROGRAM OVERVIEW</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About MDS Prosthodontics & Crown and Bridge
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Master of Dental Surgery (MDS) in Prosthodontics and Crown and Bridge is a comprehensive three-year postgraduate program designed to develop specialists in the rehabilitation of oral function, comfort, appearance, and health through the replacement of missing teeth and contiguous oral and maxillofacial tissues with artificial substitutes.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our program emphasizes hands-on clinical training, cutting-edge CAD/CAM technology, implant dentistry, and research-driven practice, preparing Learners to become leaders in the field of prosthodontics and dental implantology.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold">CAD/CAM Technology</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold">Implant Training</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold">Research Training</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold">Expert Learning Facilitators</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold">Clinical Excellence</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold">International Exposure</span>
                </div>
              </div>
            </div>

            {/* Right Content - Clinical Training Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden h-full min-h-[500px]">
                <Image
                  src="/images/MDS-Prosthodontics-&-Crown-and-Bridge-clinical training.webp"
                  alt="Clinical Training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section id="curriculum" className="bg-[#FBFBEE] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">COURSE STRUCTURE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            3-Year Curriculum
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            A comprehensive curriculum designed to build expertise progressively from foundational knowledge to specialized clinical mastery in prosthodontics.
          </p>

          {/* Curriculum Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Year 1 - Foundation */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <span className="text-white font-bold text-sm">Year 1</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Foundation</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Applied Dental Materials Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Complete Denture Prosthodontics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Oral Anatomy & Occlusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Research Methodology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Basic Clinical Training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 2 - Advanced Clinical */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <span className="text-white font-bold text-sm">Year 2</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Advanced Clinical</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Fixed Partial Dentures & Crown and Bridge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Removable Partial Dentures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Dental Implantology Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Ceramic Restorations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">CAD/CAM Dentistry</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 3 - Specialization */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <span className="text-white font-bold text-sm">Year 3</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Specialization</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Advanced Implant Prosthodontics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Maxillofacial Prosthetics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Thesis & Dissertation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Full Mouth Rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Practice Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">WHAT YOU&apos;LL ACHIEVE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Learning Outcomes
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Our graduates are equipped with comprehensive skills to excel in clinical practice, research, and academic leadership in prosthodontics.
          </p>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clinical Competencies */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="bg-gray-100 rounded-xl p-6 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Clinical Competencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Complete & partial denture fabrication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Crown & bridge procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Dental implant placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Full mouth rehabilitation</span>
                </li>
              </ul>
            </div>

            {/* Diagnostic Skills */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="bg-gray-100 rounded-xl p-6 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Diagnostic Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Comprehensive case assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Digital treatment planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Occlusal analysis mastery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">3D imaging interpretation</span>
                </li>
              </ul>
            </div>

            {/* Research & Leadership */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="bg-gray-100 rounded-xl p-6 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Research & Leadership</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Evidence-based practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Academic presentation skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Publication-ready research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Professional leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission Section */}
      <section className="bg-[#FBFBEE] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">WHO CAN APPLY</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Eligibility & Admission
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Join our prestigious MDS program by meeting the following eligibility criteria and completing the admission process.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    BDS degree from a DCI recognized dental college with mandatory one-year internship completion
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    Valid NEET MDS qualification score as per current year cutoff requirements
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    Permanent registration with any State Dental Council of India
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-gray-700 pt-1">
                    Age limit and reservation policies as per TN Dr. MGR Medical University norms
                  </p>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Documents Required</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">BDS Degree Certificate</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">NEET MDS Score Card</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Internship Certificate</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">State Dental Council Registration</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">12th Mark Sheet</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Transfer Certificate</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Community Certificate</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Passport Size Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">WORLD-CLASS INFRASTRUCTURE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Our Facilities
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for aspiring prosthodontists.
          </p>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CAD/CAM Center */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">CAD/CAM Center</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">CAD/CAM Digital Center</h4>
                <p className="text-gray-700">Advanced digital dentistry center with intraoral scanners, milling machines, and 3D printers for precision prosthetics.</p>
              </div>
            </div>

            {/* Implant Suite */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Implant Suite</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Implant Surgery Suite</h4>
                <p className="text-gray-700">Dedicated surgical suite with guided implant surgery equipment and CBCT imaging for precise implant placement.</p>
              </div>
            </div>

            {/* Ceramic Lab */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Ceramic Lab</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Ceramic Laboratory</h4>
                <p className="text-gray-700">Fully equipped ceramic lab with advanced furnaces, layering stations, and shade matching technology.</p>
              </div>
            </div>

            {/* Prosthetics Lab */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Prosthetics Lab</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Prosthodontics Laboratory</h4>
                <p className="text-gray-700">Comprehensive lab with modern articulators, surveying equipment, and precision casting facilities.</p>
              </div>
            </div>

            {/* Simulation Lab */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Simulation Lab</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Simulation Laboratory</h4>
                <p className="text-gray-700">Phantom head training units with patient simulators for pre-clinical skill development and practice.</p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Digital Library</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Library</h4>
                <p className="text-gray-700">Extensive digital resources, e-journals, and dental databases for research and evidence-based learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-[#FBFBEE] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">CAMPUS LIFE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Photo Gallery
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Experience the vibrant campus life and state-of-the-art facilities at JKKN Dental College.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Campus */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Campus</h3>
            </div>

            {/* Clinic */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Clinic</h3>
            </div>

            {/* Library */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Library</h3>
            </div>

            {/* Conference */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Conference</h3>
            </div>

            {/* Hostel */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Hostel</h3>
            </div>

            {/* Sports */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Sports</h3>
            </div>

            {/* Lab */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Lab</h3>
            </div>

            {/* Cafeteria */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-40 md:h-48 cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold text-white text-center">Cafeteria</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="bg-gradient-to-br from-[#006837] to-[#002309] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">YOUR FUTURE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Career Opportunities
          </h2>

          <p className="text-lg text-gray-200 text-center mb-12 max-w-4xl mx-auto">
            An MDS in Prosthodontics opens diverse career pathways in clinical practice, academia, and research.
          </p>

          {/* Career Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Private Practice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-[#7cb983] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Private Practice</h3>
              <p className="text-gray-200">Establish your own specialty prosthodontics clinic or join established dental practices as an implant specialist.</p>
            </div>

            {/* Academic Career */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-[#7cb983] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Career</h3>
              <p className="text-gray-200">Join dental colleges as Learning Facilitator and shape future dental professionals in prosthodontics.</p>
            </div>

            {/* Research Scientist */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-[#7cb983] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research Scientist</h3>
              <p className="text-gray-200">Contribute to dental science through research in biomaterials, implant surfaces, and digital prosthodontics.</p>
            </div>

            {/* Hospital Consultant */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-[#7cb983] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hospital Consultant</h3>
              <p className="text-gray-200">Work as specialist consultant in multi-specialty hospitals and dental centers for complex rehabilitation cases.</p>
            </div>

            {/* Global Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-[#7cb983] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Opportunities</h3>
              <p className="text-gray-200">Practice internationally with globally recognized MDS qualification and expertise in implant dentistry.</p>
            </div>

            {/* Armed Forces */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-[#7cb983] rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Armed Forces</h3>
              <p className="text-gray-200">Join Indian Armed Forces dental corps as specialist officer with prestigious career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section - TEMPORARILY HIDDEN */}
      {false && (
      <section className="bg-[#FBFBEE] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">INVESTMENT IN YOUR FUTURE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Fee Structure
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Transparent and competitive fee structure with scholarship opportunities for deserving Learners.
          </p>

          {/* Fee Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg min-w-[640px]">
              <thead>
                <tr className="bg-gradient-to-br from-[#006837] to-[#002309]">
                  <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">FEE COMPONENT</th>
                  <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">YEAR 1</th>
                  <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">YEAR 2</th>
                  <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">YEAR 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 md:px-6 py-4 text-gray-700 text-sm md:text-base">Tuition Fee</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 8,00,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 8,00,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 8,00,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 md:px-6 py-4 text-gray-700 text-sm md:text-base">Laboratory Fee</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 50,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 50,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 50,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 md:px-6 py-4 text-gray-700 text-sm md:text-base">Library & Digital Resources</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 25,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 25,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 25,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 md:px-6 py-4 text-gray-700 text-sm md:text-base">Examination Fee</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 15,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 15,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-semibold text-sm md:text-base">₹ 15,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">Total Annual Fee</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹ 8,90,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹ 8,90,000</td>
                  <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹ 8,90,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Info Note */}
          <div className="mt-8 bg-blue-50 border-l-4 border-[#7cb983] p-6 rounded-r-lg">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
                Fee structure is subject to revision as per university and government norms. Hostel and mess charges are additional. Education loan assistance available. Merit-based scholarships for qualifying Learners.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Frequently Asked Questions Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">GOT QUESTIONS?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12">
            Find answers to common questions about our MDS Prosthodontics program.
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-[#FBFBEE] rounded-xl p-6 shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900">What is the duration of the MDS Prosthodontics program?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                The MDS in Prosthodontics and Crown and Bridge is a 3-year full-time postgraduate program that includes theoretical coursework, extensive clinical training, laboratory work, and a mandatory dissertation on an approved research topic.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-[#FBFBEE] rounded-xl p-6 shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900">What is the admission process for MDS Prosthodontics?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. Selection is based on merit ranking, choice of specialty, and availability of seats.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-[#FBFBEE] rounded-xl p-6 shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900">Is implant training included in the curriculum?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes, comprehensive implant training is an integral part of our MDS Prosthodontics program. Learners receive hands-on training in implant planning, placement, and prosthetic rehabilitation with exposure to the latest implant systems and guided surgery techniques.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-[#FBFBEE] rounded-xl p-6 shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900">What are the career prospects after completing MDS Prosthodontics?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Graduates can pursue private practice specializing in implants and complex rehabilitations, academic positions in dental colleges, hospital consultancy, research careers in dental materials and digital dentistry, or join armed forces dental corps. International practice opportunities are also available.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-[#FBFBEE] rounded-xl p-6 shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900">Does the college provide hostel accommodation?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes, separate hostel facilities are available for both male and female postgraduate Learners. The hostels are equipped with modern amenities, Wi-Fi connectivity, mess facilities, and 24/7 security. The campus also includes recreational facilities and a gymnasium.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-[#FBFBEE] rounded-xl p-6 shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900">What CAD/CAM and digital technologies are available?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Our department features the latest digital dentistry equipment including intraoral scanners, desktop 3D scanners, CAD software, milling machines, 3D printers, and CBCT imaging. Learners gain comprehensive training in digital workflow from scanning to final prosthesis fabrication.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Accreditations & Affiliations Section */}
      <section className="bg-[#FBFBEE] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[#7cb983] font-bold text-sm uppercase tracking-wider">RECOGNITION</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Accreditations & Affiliations
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Our programs are recognized by leading regulatory bodies ensuring quality education.
          </p>

          {/* Accreditation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {/* DCI */}
            <div className="bg-[#FBFBEE] rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 flex items-center justify-center mx-auto w-20 h-20 sm:w-24 sm:h-24">
                <span className="text-2xl sm:text-4xl font-bold text-white">DCI</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Dental Council of India</h3>
            </div>

            {/* NAAC */}
            <div className="bg-[#FBFBEE] rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 flex items-center justify-center mx-auto w-20 h-20 sm:w-24 sm:h-24">
                <span className="text-2xl sm:text-4xl font-bold text-white">NAAC</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">NAAC Accredited</h3>
            </div>

            {/* MGR */}
            <div className="bg-[#FBFBEE] rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 flex items-center justify-center mx-auto w-20 h-20 sm:w-24 sm:h-24">
                <span className="text-2xl sm:text-4xl font-bold text-white">MGR</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">TN Dr. MGR Medical University</h3>
            </div>

            {/* IDA */}
            <div className="bg-[#FBFBEE] rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 text-center">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 flex items-center justify-center mx-auto w-20 h-20 sm:w-24 sm:h-24">
                <span className="text-2xl sm:text-4xl font-bold text-white">IDA</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Indian Dental Association</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Journey to Becoming a Prosthodontic Specialist
          </h2>

          <p className="text-xl text-white mb-8">
            Join our prestigious MDS program and transform your career with world-class training in implantology and prosthetic dentistry at J.K.K. Nattraja Dental College.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#7cb983] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg">
              Download Prospectus
            </button>
            <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#7cb983] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              Apply Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
