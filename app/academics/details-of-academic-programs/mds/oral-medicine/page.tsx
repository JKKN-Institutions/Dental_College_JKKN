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

export default function MDSOralMedicine() {
  // Course Schema for MDS Oral Medicine & Radiology
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MDS Oral Medicine & Radiology",
    "description": "Become a diagnostic expert with our advanced 3-year postgraduate program. Master oral diagnosis, dental imaging, CBCT interpretation, and management of oral manifestations of systemic diseases at one of Tamil Nadu's premier dental institutions.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in"
    },
    "courseCode": "MDS-OMR",
    "educationalCredentialAwarded": "Master of Dental Surgery in Oral Medicine & Radiology",
    "timeRequired": "P3Y",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "duration": "P3Y"
    }
  };

  // FAQ Schema for MDS Oral Medicine & Radiology
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the MDS Oral Medicine & Radiology program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The MDS in Oral Medicine and Radiology is a 3-year full-time postgraduate program that includes theoretical coursework, extensive clinical training in diagnosis and imaging, and a mandatory dissertation."
        }
      },
      {
        "@type": "Question",
        "name": "What imaging modalities will I learn during the program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The program covers comprehensive training in intraoral radiography, panoramic imaging, cephalometry, CBCT (Cone Beam CT), MRI interpretation for TMJ and head & neck, digital imaging, and emerging AI-assisted diagnostic tools."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for MDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. Tamil Nadu state counseling is conducted by the Selection Committee for admission to government and self-financing colleges."
        }
      },
      {
        "@type": "Question",
        "name": "What career opportunities are available after completing MDS Oral Medicine & Radiology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graduates can pursue private practice, academic positions, hospital consultancy, diagnostic center roles, forensic odontology, research careers, or join armed forces dental corps. The specialty is in high demand with growing imaging centers and cancer screening programs."
        }
      },
      {
        "@type": "Question",
        "name": "Is there stipend provided during the MDS program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, postgraduate Learners receive a monthly stipend as per university and institutional norms. The stipend amount varies based on the year of study and is revised periodically. Contact the admissions office for current stipend details."
        }
      },
      {
        "@type": "Question",
        "name": "What makes JKKN's Oral Medicine & Radiology department unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our department features state-of-the-art CBCT and digital imaging equipment, experienced Learning Facilitators with international exposure, strong research culture with publications in indexed journals, hospital attachments for comprehensive clinical experience, and excellent placement record."
        }
      }
    ]
  };

  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Fellowship After MDS Oral Medicine & Radiology | JKKN',
    description: 'Explore fellowship courses after MDS in Oral Medicine and Radiology at JKKN Dental College. Advanced training in oral diagnostics, radiology & patient care.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine/',
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
        { name: 'Oral Medicine & Radiology', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine/' },
      ]} />
      <StructuredData data={speakableSchema} />
      <Header />
      <Breadcrumb items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics' },
        { name: 'MDS Programs', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds' },
        { name: 'Oral Medicine & Radiology', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/oral-medicine' },
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
                MDS Oral Medicine & <br />
                <span className="text-[#7cb983]">Radiology</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Become a diagnostic expert with our advanced 3-year postgraduate program. Master oral diagnosis, dental imaging, CBCT interpretation, and management of oral manifestations of systemic diseases at one of Tamil Nadu's premier dental institutions.
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

            {/* Right Content - Radiology Lab Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl border-4 border-white/20 overflow-hidden relative min-h-[400px] md:min-h-[450px]">
                <Image
                  src="/images/MDS-Oral-Medicine-&-Radiology-banner-Image.webp"
                  alt="Radiology Lab"
                  fill
                  className="object-cover object-right"
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
                      4 Seats
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
                <div className="text-lg font-bold text-gray-800">TN Dr. MGR<br />Medical<br />University</div>
              </div>
            </div>

            {/* Admission */}
            <div className="flex items-center gap-4">
              <div className="bg-[#7cb983] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Admission</div>
                <div className="text-lg font-bold text-gray-800">NEET MDS<br />Qualified</div>
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
                <div className="text-lg font-bold text-gray-800">Komarapalayam,<br />Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Program Overview</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About MDS Oral Medicine & Radiology</h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Master of Dental Surgery (MDS) in Oral Medicine and Radiology is a comprehensive three-year postgraduate program designed to develop specialists in oral diagnosis, dental imaging, and management of oral diseases. This specialty bridges dentistry with general medicine, focusing on the diagnosis and non-surgical treatment of oral conditions.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our program emphasizes advanced diagnostic imaging techniques including CBCT, MRI interpretation, and digital radiography, while also training Learners to manage medically compromised patients and oral manifestations of systemic diseases.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Advanced CBCT Training</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Digital Imaging</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Research Training</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Expert Learning Facilitators</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Oral Pathology Expertise</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">International Exposure</span>
                </div>
              </div>
            </div>

            {/* Right Content - Diagnostic Center Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-3xl overflow-hidden h-full min-h-[400px]">
                <Image
                  src="/images/MDS-Oral-Medicine-&-Radiology-diagonic-lab.webp"
                  alt="Diagnostic Center"
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
      <section id="curriculum" className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Course Structure</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">3-Year Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A comprehensive curriculum designed to build expertise progressively from foundational diagnostic skills to advanced imaging interpretation and clinical mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Year 1 - Foundation */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-white font-bold text-sm">Year 1</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Foundation</h3>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Oral Anatomy & Physiology</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Principles of Radiographic Imaging</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Oral & General Pathology</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Research Methodology</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Basic Clinical Diagnostic Skills</span>
                </div>
              </div>
            </div>

            {/* Year 2 - Advanced Clinical */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-white font-bold text-sm">Year 2</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Advanced Clinical</h3>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">CBCT & 3D Imaging Interpretation</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Oral Mucosal Diseases</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Management of TMJ Disorders</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Orofacial Pain & Neurological Disorders</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Systemic Diseases & Oral Manifestations</span>
                </div>
              </div>
            </div>

            {/* Year 3 - Specialization */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#0199c7] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-white font-bold text-sm">Year 3</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Specialization</h3>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Oral Cancer Diagnosis & Management</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Forensic Odontology</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Medically Compromised Patient Care</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Advanced Imaging Techniques</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dissertation & Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">What You'll Achieve</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Learning Outcomes</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Upon completion of the program, Learners will possess comprehensive skills in oral diagnosis and radiographic interpretation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Diagnostic Excellence */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="bg-gray-100 rounded-2xl p-6 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Diagnostic Excellence</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Comprehensive oral examination techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Differential diagnosis formulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Oral lesion identification and classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Biopsy technique and histopathology correlation</span>
                </li>
              </ul>
            </div>

            {/* Radiographic Mastery */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="bg-gray-100 rounded-2xl p-6 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Radiographic Mastery</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Intraoral and extraoral radiography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>CBCT and 3D imaging interpretation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>MRI and CT correlation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Digital imaging and AI-assisted diagnosis</span>
                </li>
              </ul>
            </div>

            {/* Clinical Competency */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="bg-gray-100 rounded-2xl p-6 mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Clinical Competency</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Management of medically compromised patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Oral cancer screening and early detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>TMJ disorder treatment protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span>Orofacial pain management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Admission Requirements</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Eligibility & Documents</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Review the eligibility criteria and prepare the required documents for your MDS application.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-gray-700 pt-1">BDS degree from a DCI recognized institution with completion of one-year compulsory rotating internship</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-gray-700 pt-1">Valid NEET MDS qualification with minimum required percentile as per DCI/State government norms</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700 pt-1">Permanent or provisional registration with State Dental Council</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <p className="text-gray-700 pt-1">Indian nationality (NRI/OCI candidates as per state counseling norms)</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">Required Documents</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">BDS Degree Certificate</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">NEET MDS Score Card</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Internship Certificate</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dental Council Registration</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Identity Proof (Aadhar/Passport)</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Passport Size Photographs</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Community Certificate</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Allotment Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">World-Class Infrastructure</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">State-of-the-Art Facilities</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our department is equipped with cutting-edge diagnostic equipment and modern infrastructure for comprehensive training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CBCT Unit */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-12 flex items-center justify-center h-64">
                <h3 className="text-4xl font-bold text-white text-center">CBCT Unit</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Advanced CBCT Unit</h4>
                <p className="text-gray-600">Latest cone beam computed tomography system for 3D imaging with advanced visualization software for precise diagnosis.</p>
              </div>
            </div>

            {/* Digital X-Ray */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-64">
                <h3 className="text-4xl font-bold text-white text-center">Digital X-Ray</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Digital Radiography Suite</h4>
                <p className="text-gray-600">Complete digital radiography setup including OPG, cephalometry, and intraoral sensors with imaging software.</p>
              </div>
            </div>

            {/* Diagnostic Lab */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#0199c7] p-12 flex items-center justify-center h-64">
                <h3 className="text-4xl font-bold text-white text-center">Diagnostic Lab</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Oral Diagnosis Laboratory</h4>
                <p className="text-gray-600">Well-equipped diagnostic lab with facilities for cytology, biopsy processing, and chairside diagnostic tests.</p>
              </div>
            </div>

            {/* Simulation Lab */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-12 flex items-center justify-center h-64">
                <h3 className="text-4xl font-bold text-white text-center">Simulation Lab</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Simulation Laboratory</h4>
                <p className="text-gray-600">Advanced simulation systems for practicing radiographic positioning and interpretation techniques.</p>
              </div>
            </div>

            {/* Research Center */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-64">
                <h3 className="text-4xl font-bold text-white text-center">Research Center</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Research Center</h4>
                <p className="text-gray-600">Dedicated research facility with statistical analysis software, publication support, and international collaboration opportunities.</p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#0199c7] p-12 flex items-center justify-center h-64">
                <h3 className="text-4xl font-bold text-white text-center">Digital Library</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Digital Learning Center</h4>
                <p className="text-gray-600">E-library access with journals, databases, and AI-powered learning resources for continuous education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Campus Life</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Experience the vibrant academic environment at J.K.K. Nattraja Dental College.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Campus */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Campus</h3>
            </div>

            {/* Radiology */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Radiology</h3>
            </div>

            {/* Library */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#0199c7] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Library</h3>
            </div>

            {/* Conference */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Conference</h3>
            </div>

            {/* Hostel */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Hostel</h3>
            </div>

            {/* Sports */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#0199c7] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Sports</h3>
            </div>

            {/* Lab */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Lab</h3>
            </div>

            {/* Cafeteria */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center h-40 md:h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Cafeteria</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Your Future</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Opportunities</h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              An MDS in Oral Medicine & Radiology opens diverse career pathways in clinical practice, diagnostics, and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Private Practice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Private Practice</h3>
              <p className="text-gray-200">
                Establish your own diagnostic and oral medicine clinic or join established dental practices as a specialist.
              </p>
            </div>

            {/* Academic Career */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Career</h3>
              <p className="text-gray-200">
                Join dental colleges as Learning Facilitator and shape future dental professionals in diagnosis and radiology.
              </p>
            </div>

            {/* Research Scientist */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research Scientist</h3>
              <p className="text-gray-200">
                Contribute to dental science through research in diagnostic imaging, AI applications, and oral cancer screening.
              </p>
            </div>

            {/* Hospital Consultant */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hospital Consultant</h3>
              <p className="text-gray-200">
                Work as specialist consultant in multi-specialty hospitals, oncology centers, and dental imaging facilities.
              </p>
            </div>

            {/* Forensic Odontologist */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Forensic Odontologist</h3>
              <p className="text-gray-200">
                Work with forensic teams in identification through dental records and disaster victim identification.
              </p>
            </div>

            {/* Armed Forces */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Armed Forces</h3>
              <p className="text-gray-200">
                Join Indian Armed Forces dental corps as specialist officer with prestigious career in defense services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section - TEMPORARILY HIDDEN */}
      {false && (
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Investment in Your Future</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Fee Structure</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transparent fee structure with various scholarship opportunities and financial aid options.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-[#FBFBEE] rounded-2xl shadow-lg overflow-hidden border border-gray-200 min-w-[640px]">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#006837] to-[#002309] grid grid-cols-4 gap-4 p-4 md:p-6 text-white font-bold">
                <div className="text-sm md:text-base">FEE COMPONENT</div>
                <div className="text-center text-sm md:text-base">YEAR 1</div>
                <div className="text-center text-sm md:text-base">YEAR 2</div>
                <div className="text-center text-sm md:text-base">YEAR 3</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Tuition Fee */}
                <div className="grid grid-cols-4 gap-4 p-4 md:p-6 hover:bg-gray-50">
                  <div className="text-gray-700 font-medium text-sm md:text-base">Tuition Fee</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹8,00,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹8,00,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹8,00,000</div>
                </div>

                {/* Laboratory & Equipment Fee */}
                <div className="grid grid-cols-4 gap-4 p-4 md:p-6 hover:bg-gray-50">
                  <div className="text-gray-700 font-medium text-sm md:text-base">Laboratory & Equipment Fee</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹75,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹75,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹75,000</div>
                </div>

                {/* Library & E-Resources */}
                <div className="grid grid-cols-4 gap-4 p-4 md:p-6 hover:bg-gray-50">
                  <div className="text-gray-700 font-medium text-sm md:text-base">Library & E-Resources</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹25,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹25,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹25,000</div>
                </div>

                {/* University & Examination Fee */}
                <div className="grid grid-cols-4 gap-4 p-4 md:p-6 hover:bg-gray-50">
                  <div className="text-gray-700 font-medium text-sm md:text-base">University & Examination Fee</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹50,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹50,000</div>
                  <div className="text-center text-gray-800 font-semibold text-sm md:text-base">₹50,000</div>
                </div>

                {/* Total Annual Fee */}
                <div className="grid grid-cols-4 gap-4 p-4 md:p-6 bg-gray-50">
                  <div className="text-gray-800 font-bold text-sm md:text-base">Total Annual Fee</div>
                  <div className="text-center text-gray-800 font-bold text-base md:text-lg">₹9,50,000</div>
                  <div className="text-center text-gray-800 font-bold text-base md:text-lg">₹9,50,000</div>
                  <div className="text-center text-gray-800 font-bold text-base md:text-lg">₹9,50,000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Note */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
                Fee structure is subject to revision as per university and government norms. Hostel and mess charges are separate. Scholarships available for meritorious and economically weaker Learners. Education loan assistance provided.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Have Questions?</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our MDS Oral Medicine & Radiology program.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-[#FBFBEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">What is the duration of the MDS Oral Medicine & Radiology program?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  The MDS in Oral Medicine and Radiology is a 3-year full-time postgraduate program that includes theoretical coursework, extensive clinical training in diagnosis and imaging, and a mandatory dissertation.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-[#FBFBEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">What imaging modalities will I learn during the program?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  The program covers comprehensive training in intraoral radiography, panoramic imaging, cephalometry, CBCT (Cone Beam CT), MRI interpretation for TMJ and head & neck, digital imaging, and emerging AI-assisted diagnostic tools.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-[#FBFBEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">What is the admission process for MDS?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. Tamil Nadu state counseling is conducted by the Selection Committee for admission to government and self-financing colleges.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-[#FBFBEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">What career opportunities are available after completing MDS Oral Medicine & Radiology?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Graduates can pursue private practice, academic positions, hospital consultancy, diagnostic center roles, forensic odontology, research careers, or join armed forces dental corps. The specialty is in high demand with growing imaging centers and cancer screening programs.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-[#FBFBEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">Is there stipend provided during the MDS program?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Yes, postgraduate Learners receive a monthly stipend as per university and institutional norms. The stipend amount varies based on the year of study and is revised periodically. Contact the admissions office for current stipend details.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="bg-[#FBFBEE] rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">What makes JKKN's Oral Medicine & Radiology department unique?</h3>
                <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Our department features state-of-the-art CBCT and digital imaging equipment, experienced Learning Facilitators with international exposure, strong research culture with publications in indexed journals, hospital attachments for comprehensive clinical experience, and excellent placement record.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#7cb983] uppercase font-bold text-sm mb-4 tracking-wider">Recognition</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Accreditations & Affiliations</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our programs are recognized by leading regulatory bodies ensuring quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {/* DCI */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-4 sm:p-8 mb-4 w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-white">DCI</span>
              </div>
              <h3 className="text-center font-bold text-gray-800 text-sm sm:text-base">Dental Council of India</h3>
            </div>

            {/* NAAC */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-4 sm:p-8 mb-4 w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-white">NAAC</span>
              </div>
              <h3 className="text-center font-bold text-gray-800 text-sm sm:text-base">NAAC Accredited</h3>
            </div>

            {/* MGR */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#0199c7] rounded-xl p-4 sm:p-8 mb-4 w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-white">MGR</span>
              </div>
              <h3 className="text-center font-bold text-gray-800 text-sm sm:text-base">TN Dr. MGR Medical University</h3>
            </div>

            {/* IDA */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-4 sm:p-8 mb-4 w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-white">IDA</span>
              </div>
              <h3 className="text-center font-bold text-gray-800 text-sm sm:text-base">Indian Dental Association</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#7cb983] to-[#6ba872]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Begin Your Journey to Becoming an Oral Medicine Specialist
          </h2>
          <p className="text-xl text-white mb-10">
            Join our prestigious MDS program and transform your career with world-class training at J.K.K. Nattraja Dental College.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-[#7cb983] hover:bg-gray-100 font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg">
              Download Prospectus
            </button>
            <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#7cb983] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300">
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
