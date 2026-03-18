'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';

export default function MDSConservativeDentistry() {
  // Course Schema for MDS Conservative Dentistry & Endodontics
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MDS Conservative Dentistry & Endodontics",
    "description": "Transform your dental career with our advanced 3-year postgraduate program. Master root canal therapy, restorative dentistry, and dental trauma management at one of Tamil Nadu's premier dental institutions.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in"
    },
    "courseCode": "MDS-CONS",
    "educationalCredentialAwarded": "Master of Dental Surgery in Conservative Dentistry & Endodontics",
    "timeRequired": "P3Y",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "duration": "P3Y"
    }
  };

  // FAQ Schema for MDS Conservative Dentistry & Endodontics
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the MDS Conservative Dentistry & Endodontics program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The MDS in Conservative Dentistry and Endodontics is a 3-year full-time postgraduate program. It includes theoretical coursework, clinical training, and a mandatory dissertation that Learners must complete before graduation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for MDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. The selection is merit-based according to the marks obtained and seat availability."
        }
      },
      {
        "@type": "Question",
        "name": "Is hostel accommodation available for postgraduate Learners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide separate hostel facilities for male and female postgraduate Learners. The hostels are equipped with modern amenities including Wi-Fi, 24/7 security, mess facility, and recreational areas."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career prospects after completing MDS Conservative Dentistry & Endodontics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graduates can pursue private practice, academic positions in dental colleges, hospital consultancy, research careers, or join the armed forces dental corps. International practice opportunities are also available with proper licensing."
        }
      },
      {
        "@type": "Question",
        "name": "Does the college provide placement assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our dedicated placement cell provides comprehensive career guidance and placement assistance. We maintain strong relationships with dental hospitals, corporate chains, and academic institutions for employment opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any scholarships available for MDS Learners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Merit-based scholarships and government scholarships for SC/ST/OBC categories are available. Additionally, we assist Learners in obtaining education loans from nationalized banks with competitive interest rates."
        }
      },
      {
        "@type": "Question",
        "name": "What clinical exposure will I get during the program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 150-bed dental hospital provides extensive clinical exposure. You'll handle diverse cases including routine to complex endodontic procedures, microsurgery, traumatic injuries, and geriatric dental care under expert supervision."
        }
      }
    ]
  };

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={courseSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <Breadcrumb items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics' },
        { name: 'MDS Programs', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds' },
        { name: 'Conservative Dentistry & Endodontics', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics' },
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
                MDS Conservative Dentistry & <span className="text-[#7cb983]">Endodontics</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Transform your dental career with our advanced 3-year postgraduate program. Master root canal therapy, restorative dentistry, and dental trauma management at one of Tamil Nadu's premier dental institutions.
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

            {/* Right Content - Dental Lab Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl border-4 border-white/20 overflow-hidden relative min-h-[400px] md:min-h-[450px]">
                <Image
                  src="/images/MDS-Conservative-Dentistry-&-Endodontics-benner-Image.webp"
                  alt="MDS Conservative Dentistry and Endodontics lab with microscopy equipment at JKKN Dental College"
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
                      5 Seats
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
      <section className="bg-white py-8 px-4 border-b border-gray-200">
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
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Program Overview</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            About MDS Conservative Dentistry & Endodontics
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Master of Dental Surgery (MDS) in Conservative Dentistry and Endodontics is a comprehensive three-year postgraduate program designed to develop specialists in preserving natural teeth through advanced restorative techniques and root canal treatments.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Our program emphasizes hands-on clinical training, cutting-edge technology, and research-driven practice, preparing Learners to become leaders in the field of endodontics.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Advanced Microscopy</span>
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
                  <span className="text-gray-700 font-medium">Clinical Excellence</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">International Exposure</span>
                </div>
              </div>
            </div>

            {/* Right Content - Clinical Training Card */}
            <div className="relative bg-[#7cb983] rounded-2xl overflow-hidden h-full min-h-[400px]">
              <Image
                src="/images/MDS-Conservative-Dentistry-&-Endodontics-Clinical-training.webp"
                alt="MDS Endodontics students practicing root canal treatment in clinical training at JKKN"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section id="curriculum" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Course Structure</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            3-Year Curriculum
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            A comprehensive curriculum designed to build expertise progressively from foundational knowledge to specialized clinical mastery.
          </p>

          {/* Year Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Year 1 - Foundation */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-white font-semibold text-sm">Year 1</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Foundation</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Applied Dental Materials Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Pulp Biology & Pathology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Cariology & Prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Research Methodology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Basic Clinical Training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 2 - Advanced Clinical */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-white font-semibold text-sm">Year 2</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Advanced Clinical</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Endodontic Diagnosis & Treatment Planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Advanced Instrumentation Techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Aesthetic Restorations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Dental Traumatology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Rotary Endodontics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 3 - Specialization */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-8 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-white font-semibold text-sm">Year 3</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Specialization</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Endodontic Microsurgery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Regenerative Endodontics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Thesis & Dissertation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Complex Case Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Practice Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">What You'll Achieve</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Learning Outcomes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Our graduates are equipped with comprehensive skills to excel in clinical practice, research, and academic leadership.
          </p>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clinical Competencies */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Clinical Competencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Advanced root canal procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Microsurgical techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Complex case management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Emergency dental care</span>
                </li>
              </ul>
            </div>

            {/* Diagnostic Skills */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Diagnostic Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Advanced imaging interpretation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Differential diagnosis mastery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Treatment planning expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Prognosis assessment</span>
                </li>
              </ul>
            </div>

            {/* Professional Development */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Professional Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Research methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Academic writing & publishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Practice management skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] font-bold">•</span>
                  <span className="text-gray-700">Ethical decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Admission Requirements</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Eligibility Criteria
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Review the qualifications and documents required for admission to the MDS program.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Eligibility Requirements */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">Eligibility Requirements</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-gray-700 pt-1">BDS degree from a DCI-recognized dental college</p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-gray-700 pt-1">Completion of 1-year compulsory rotating internship</p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700 pt-1">Valid registration with State Dental Council or DCI</p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <p className="text-gray-700 pt-1">Qualified NEET MDS entrance examination</p>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <p className="text-gray-700 pt-1">No upper age limit for admission</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">Required Documents</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">BDS Degree Certificate</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">NEET MDS Score Card</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Internship Certificate</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">DCI/State Registration</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Migration Certificate</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Transfer Certificate</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">ID Proof (Aadhar/Passport)</span>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm font-medium">Passport Size Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Infrastructure</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Train with cutting-edge equipment and technology in our state-of-the-art dental facilities.
          </p>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dental Microscopes */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Dental Microscopes</h3>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-xl mb-3">Dental Operating Microscopes</h4>
                <p className="text-gray-600">
                  Advanced Carl Zeiss microscopes for precision endodontic procedures and microsurgery training.
                </p>
              </div>
            </div>

            {/* CBCT Scanner */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">CBCT Scanner</h3>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-xl mb-3">CBCT Imaging Center</h4>
                <p className="text-gray-600">
                  3D Cone Beam Computed Tomography for accurate diagnosis and treatment planning.
                </p>
              </div>
            </div>

            {/* Rotary Systems */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Rotary Systems</h3>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-xl mb-3">Rotary Endodontic Systems</h4>
                <p className="text-gray-600">
                  Latest NiTi rotary instruments and apex locators for efficient root canal treatment.
                </p>
              </div>
            </div>

            {/* Digital Radiology */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Digital Radiology</h3>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-xl mb-3">Digital Radiology Suite</h4>
                <p className="text-gray-600">
                  Complete digital X-ray systems with reduced radiation and instant imaging.
                </p>
              </div>
            </div>

            {/* Simulation Lab */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Simulation Lab</h3>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-xl mb-3">Simulation Laboratory</h4>
                <p className="text-gray-600">
                  Phantom heads and dental simulators for risk-free procedural practice.
                </p>
              </div>
            </div>

            {/* Research Lab */}
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] p-12 flex items-center justify-center h-48">
                <h3 className="text-4xl font-bold text-white text-center">Research Facilities</h3>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 text-xl mb-3">Research Facilities</h4>
                <p className="text-gray-600">
                  Well-equipped for material research and thesis work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Campus Life</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the vibrant academic environment at J.K.K. Nattraja Dental College.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Campus */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Campus</h3>
            </div>

            {/* Clinic */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Clinic</h3>
            </div>

            {/* Library */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Library</h3>
            </div>

            {/* Conference */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Conference</h3>
            </div>

            {/* Hostel */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Hostel</h3>
            </div>

            {/* Sports */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Sports</h3>
            </div>

            {/* Lab */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Lab</h3>
            </div>

            {/* Cafeteria */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-6 md:p-12 flex items-center justify-center aspect-square hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl md:text-4xl font-bold text-white">Cafeteria</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
              <span className="text-[#7cb983] font-semibold text-sm uppercase">Your Future</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Career Opportunities
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            An MDS in Conservative Dentistry & Endodontics opens diverse career pathways in clinical practice, academia, and research.
          </p>

          {/* Career Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Private Practice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Private Practice</h3>
              <p className="text-gray-200 leading-relaxed">
                Establish your own specialty endodontic clinic or join established dental practices.
              </p>
            </div>

            {/* Academic Career */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Academic Career</h3>
              <p className="text-gray-200 leading-relaxed">
                Join dental colleges as Learning Facilitator and shape future dental professionals.
              </p>
            </div>

            {/* Research Scientist */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Research Scientist</h3>
              <p className="text-gray-200 leading-relaxed">
                Contribute to dental science through research in materials, techniques, and regeneration.
              </p>
            </div>

            {/* Hospital Consultant */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Hospital Consultant</h3>
              <p className="text-gray-200 leading-relaxed">
                Work as specialist consultant in multi-specialty hospitals and dental centers.
              </p>
            </div>

            {/* Global Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Global Opportunities</h3>
              <p className="text-gray-200 leading-relaxed">
                Practice internationally with globally recognized MDS qualification from India.
              </p>
            </div>

            {/* Armed Forces */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#7cb983] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Armed Forces</h3>
              <p className="text-gray-200 leading-relaxed">
                Join Indian Armed Forces dental corps as specialist officer with prestigious career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section - TEMPORARILY HIDDEN */}
      {false && (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Investment</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Fee Structure
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Transparent fee details for different admission categories.
          </p>

          {/* Fee Table */}
          <div className="overflow-x-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden min-w-[640px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gradient-to-br from-[#006837] to-[#002309]">
                <div className="p-4 md:p-6 border-r border-white/20">
                  <h3 className="text-white font-bold text-sm md:text-lg uppercase">Fee Component</h3>
                </div>
                <div className="p-4 md:p-6 border-r border-white/20">
                  <h3 className="text-white font-bold text-sm md:text-lg uppercase">Government Quota</h3>
                </div>
                <div className="p-4 md:p-6 border-r border-white/20">
                  <h3 className="text-white font-bold text-sm md:text-lg uppercase">Management Quota</h3>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-white font-bold text-sm md:text-lg uppercase">NRI Quota</h3>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {/* Row 1 */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium text-sm md:text-base">Tuition Fee (Per Annum)</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹3,00,000</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹12,00,000</p>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-gray-800 font-bold text-base md:text-lg">$15,000</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium text-sm md:text-base">Admission Fee (One-time)</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹50,000</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹1,00,000</p>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-gray-800 font-bold text-base md:text-lg">$2,000</p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium text-sm md:text-base">Caution Deposit (Refundable)</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹25,000</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹25,000</p>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-gray-800 font-bold text-base md:text-lg">$500</p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-700 font-medium text-sm md:text-base">Hostel Fee (Per Annum)</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹60,000</p>
                  </div>
                  <div className="p-4 md:p-6 border-r border-gray-200">
                    <p className="text-gray-800 font-bold text-base md:text-lg">₹60,000</p>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-gray-800 font-bold text-base md:text-lg">$1,200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700 leading-relaxed">
                Fees are subject to revision as per university and government norms. Scholarships and education loans are available for eligible Learners. Contact the admissions office for the latest fee structure.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Questions?</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Find answers to common queries about the MDS Conservative Dentistry & Endodontics program.
          </p>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                What is the duration of the MDS Conservative Dentistry & Endodontics program?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                The MDS in Conservative Dentistry and Endodontics is a 3-year full-time postgraduate program. It includes theoretical coursework, clinical training, and a mandatory dissertation that Learners must complete before graduation.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                What is the admission process for MDS?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. The selection is merit-based according to the marks obtained and seat availability.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                Is hostel accommodation available for postgraduate Learners?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes, we provide separate hostel facilities for male and female postgraduate Learners. The hostels are equipped with modern amenities including Wi-Fi, 24/7 security, mess facility, and recreational areas.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                What are the career prospects after completing MDS Conservative Dentistry & Endodontics?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Graduates can pursue private practice, academic positions in dental colleges, hospital consultancy, research careers, or join the armed forces dental corps. International practice opportunities are also available with proper licensing.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                Does the college provide placement assistance?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes, our dedicated placement cell provides comprehensive career guidance and placement assistance. We maintain strong relationships with dental hospitals, corporate chains, and academic institutions for employment opportunities.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                Are there any scholarships available for MDS Learners?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Merit-based scholarships and government scholarships for SC/ST/OBC categories are available. Additionally, we assist Learners in obtaining education loans from nationalized banks with competitive interest rates.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-800 text-lg hover:bg-gray-50 transition-colors duration-300">
                What clinical exposure will I get during the program?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Our 150-bed dental hospital provides extensive clinical exposure. You'll handle diverse cases including routine to complex endodontic procedures, microsurgery, traumatic injuries, and geriatric dental care under expert supervision.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Accreditations & Affiliations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
              <span className="text-white font-semibold text-sm uppercase">Recognition</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Accreditations & Affiliations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Our programs are recognized by leading regulatory bodies ensuring quality education.
          </p>

          {/* Accreditation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* DCI */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">DCI</h3>
              </div>
              <h4 className="text-center text-gray-800 font-bold text-base sm:text-lg mb-2">Dental Council of India</h4>
            </div>

            {/* NAAC */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#7cb983] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">NAAC</h3>
              </div>
              <h4 className="text-center text-gray-800 font-bold text-base sm:text-lg mb-2">NAAC Accredited</h4>
            </div>

            {/* MGR */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#7cb983] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">MGR</h3>
              </div>
              <h4 className="text-center text-gray-800 font-bold text-base sm:text-lg mb-2">TN Dr. MGR Medical University</h4>
            </div>

            {/* IDA */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">IDA</h3>
              </div>
              <h4 className="text-center text-gray-800 font-bold text-base sm:text-lg mb-2">Indian Dental Association</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#7cb983] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Begin Your Journey to Becoming an Conservative Dentistry & Endodontic Specialist
          </h2>
          <p className="text-lg text-white mb-10 leading-relaxed max-w-3xl mx-auto">
            Join our prestigious MDS program and transform your career with world-class training at J.K.K. Nattraja Dental College.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white hover:bg-gray-100 text-[#7cb983] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
