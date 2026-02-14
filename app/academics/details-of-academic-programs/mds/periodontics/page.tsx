'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';

export default function MDSPeriodontics() {
  // Course Schema for MDS Periodontics
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "MDS Periodontics",
    "description": "Advance your dental career with our comprehensive 3-year postgraduate program. Master periodontal surgery, dental implantology, regenerative therapy, and gum disease management at one of Tamil Nadu's premier dental institutions.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in"
    },
    "courseCode": "MDS-PERIO",
    "educationalCredentialAwarded": "Master of Dental Surgery in Periodontics",
    "timeRequired": "P3Y",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "duration": "P3Y"
    }
  };

  // FAQ Schema for MDS Periodontics
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the MDS Periodontics program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The MDS in Periodontics is a 3-year full-time postgraduate program. It includes theoretical coursework, clinical training in periodontal surgeries and implant placement, and a mandatory dissertation that Learners must complete before graduation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for MDS Periodontics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. The selection is merit-based according to the marks obtained and seat availability."
        }
      },
      {
        "@type": "Question",
        "name": "Does the program include dental implant training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, comprehensive dental implant training is a core component of the MDS Periodontics curriculum. Learners receive hands-on training in implant planning, surgical placement, bone grafting, and prosthetic integration under expert supervision."
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
        "name": "What are the career prospects after completing MDS Periodontics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graduates can pursue private practice specializing in periodontics and implants, academic positions in dental colleges, hospital consultancy, research careers, or join the armed forces dental corps. The growing demand for implant dentistry offers excellent career opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "Does the college provide placement assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our dedicated placement cell provides comprehensive career guidance and placement assistance. We maintain strong relationships with dental hospitals, implant companies, corporate chains, and academic institutions for employment opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What clinical exposure will I get during the program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 150-bed dental hospital provides extensive clinical exposure. You'll handle diverse cases including scaling and root planing, flap surgeries, bone grafting, implant placement, periodontal plastic surgeries, and management of peri-implant diseases under expert supervision."
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
        { name: 'Periodontics', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/periodontics' },
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
                MDS <span className="text-[#7cb983]">Periodontics</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Advance your dental career with our comprehensive 3-year postgraduate program. Master periodontal surgery, dental implantology, regenerative therapy, and gum disease management at one of Tamil Nadu's premier dental institutions.
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

            {/* Right Content - Periodontics Lab Card */}
            <div className="relative">
              <div className="relative rounded-2xl border-4 border-white/20 overflow-hidden">
                <Image
                  src="/images/MDS-Periodontics-hero.webp"
                  alt="Periodontics Lab"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">Periodontics Lab</h2>

                  {/* Stats Badges */}
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
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">PROGRAM OVERVIEW</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About MDS Periodontics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Master of Dental Surgery (MDS) in Periodontics is a comprehensive three-year postgraduate program designed to develop specialists in diagnosing and treating diseases of the gums, periodontal ligament, alveolar bone, and dental implant placement.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our program emphasizes advanced surgical techniques, implant dentistry, regenerative procedures, and evidence-based practice, preparing Learners to become leaders in the field of periodontology and oral implantology.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#7cb983] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Implant Training</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#7cb983] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Laser Therapy</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#7cb983] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Research Training</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#7cb983] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Learning Facilitators</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#7cb983] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Surgical Excellence</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#7cb983] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">International Exposure</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Graphic */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/MDS-Periodontics-surgery-image.webp"
                  alt="Periodontal Surgery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-white text-center">Periodontal Surgery</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section id="curriculum" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">COURSE STRUCTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">3-Year Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A comprehensive curriculum designed to build expertise progressively from foundational periodontal science to advanced surgical and implant mastery.
            </p>
          </div>

          {/* Curriculum Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Year 1 */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-white font-semibold">Year 1</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Foundation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Periodontal Anatomy & Histology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Microbiology & Immunology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Etiology of Periodontal Diseases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Research Methodology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#7cb983] rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Non-Surgical Periodontal Therapy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 2 */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-white font-semibold">Year 2</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Advanced Clinical</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Periodontal Surgical Techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Osseous Surgery & Grafting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Periodontal Plastic Surgery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Implant Dentistry Basics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Laser Periodontal Therapy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 3 */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-white font-semibold">Year 3</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Specialization</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Advanced Implant Surgery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Regenerative Periodontics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Thesis & Dissertation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Peri-implant Disease Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">Practice Management</span>
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
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">WHAT YOU'LL ACHIEVE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our graduates are equipped with comprehensive skills to excel in periodontal practice, implant dentistry, research, and academic leadership.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clinical Competencies */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Clinical Competencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Advanced periodontal surgeries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Dental implant placement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Bone grafting procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Gingival recession treatment</span>
                </li>
              </ul>
            </div>

            {/* Diagnostic Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Diagnostic Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Periodontal disease classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Radiographic interpretation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Treatment planning expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Risk assessment proficiency</span>
                </li>
              </ul>
            </div>

            {/* Professional Development */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Research methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Academic writing & publishing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
                  <span className="text-gray-700">Practice management skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7cb983] mt-1">•</span>
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
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">ADMISSION REQUIREMENTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Review the qualifications and documents required for admission to the MDS Periodontics program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Requirements */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eligibility Requirements</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div className="flex-1">
                    <p className="text-gray-700">BDS degree from a DCI-recognized dental college</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div className="flex-1">
                    <p className="text-gray-700">Completion of 1-year compulsory rotating internship</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div className="flex-1">
                    <p className="text-gray-700">Valid registration with State Dental Council or DCI</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div className="flex-1">
                    <p className="text-gray-700">Qualified NEET MDS entrance examination</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div className="flex-1">
                    <p className="text-gray-700">No upper age limit for admission</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">BDS Degree Certificate</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">NEET MDS Score Card</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Internship Certificate</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">DCI/State Registration</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Migration Certificate</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Transfer Certificate</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">ID Proof (Aadhar/Passport)</span>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Passport Size Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">INFRASTRUCTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Train with cutting-edge equipment and technology in our state-of-the-art periodontics and implantology facilities.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Implant Suite */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl overflow-hidden">
              <div className="p-8 h-64 flex items-center justify-center">
                <h3 className="text-5xl font-bold text-white text-center">Implant Suite</h3>
              </div>
              <div className="bg-white p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Implant Surgical Suite</h4>
                <p className="text-gray-700">
                  Dedicated implant surgery room with advanced surgical motors, implant kits from leading manufacturers, and guided surgery systems.
                </p>
              </div>
            </div>

            {/* CBCT Scanner */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden">
              <div className="p-8 h-64 flex items-center justify-center">
                <h3 className="text-5xl font-bold text-white text-center">CBCT Scanner</h3>
              </div>
              <div className="bg-white p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">CBCT Imaging Center</h4>
                <p className="text-gray-700">
                  3D Cone Beam Computed Tomography for precise implant planning, bone assessment, and anatomical evaluation.
                </p>
              </div>
            </div>

            {/* Laser Unit */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden">
              <div className="p-8 h-64 flex items-center justify-center">
                <h3 className="text-5xl font-bold text-white text-center">Laser Unit</h3>
              </div>
              <div className="bg-white p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Laser Therapy Unit</h4>
                <p className="text-gray-700">
                  Diode and Er:YAG laser systems for minimally invasive periodontal treatment and soft tissue management.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Facilities */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Perio Clinic */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl overflow-hidden">
              <div className="p-8 h-64 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white text-center">Perio Clinic</h3>
              </div>
              <div className="bg-white p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Periodontics Clinical Area</h4>
                <p className="text-gray-700">
                  Fully equipped clinical chairs with ultrasonic scalers, piezo surgery units, and advanced diagnostic tools.
                </p>
              </div>
            </div>

            {/* Simulation Lab */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden">
              <div className="p-8 h-64 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white text-center">Simulation Lab</h3>
              </div>
              <div className="bg-white p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Simulation Laboratory</h4>
                <p className="text-gray-700">
                  Phantom heads and surgical simulators for practicing flap surgeries, grafting, and implant placement.
                </p>
              </div>
            </div>

            {/* Research Lab */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl overflow-hidden">
              <div className="p-8 h-64 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white text-center">Research Lab</h3>
              </div>
              <div className="bg-white p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Research Laboratory</h4>
                <p className="text-gray-700">
                  Well-equipped laboratory for microbiological analysis, cell culture studies, and biomaterial research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">CAMPUS LIFE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Experience the vibrant academic environment at J.K.K. Nattraja Dental College.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Campus</h3>
            </div>
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Clinic</h3>
            </div>
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Library</h3>
            </div>
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Conference</h3>
            </div>
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Hostel</h3>
            </div>
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Sports</h3>
            </div>
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Surgery</h3>
            </div>
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-6 md:p-12 flex items-center justify-center h-48 md:h-64">
              <h3 className="text-xl md:text-4xl font-bold text-white text-center">Cafeteria</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">YOUR FUTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Opportunities</h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              An MDS in Periodontics opens diverse career pathways in clinical practice, implantology, academia, and research.
            </p>
          </div>

          {/* Career Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Private Practice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Private Practice</h3>
              <p className="text-gray-200">
                Establish your own periodontics and implant specialty clinic or join established dental practices.
              </p>
            </div>

            {/* Academic Career */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Career</h3>
              <p className="text-gray-200">
                Join dental colleges as Learning Facilitator and shape future periodontists and implantologists.
              </p>
            </div>

            {/* Research Scientist */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research Scientist</h3>
              <p className="text-gray-200">
                Contribute to periodontal science through research in regeneration, biomaterials, and implantology.
              </p>
            </div>

            {/* Hospital Consultant */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hospital Consultant</h3>
              <p className="text-gray-200">
                Work as specialist consultant in multi-specialty hospitals and dental implant centers.
              </p>
            </div>

            {/* Global Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Opportunities</h3>
              <p className="text-gray-200">
                Practice internationally with globally recognized MDS qualification from India.
              </p>
            </div>

            {/* Armed Forces */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="bg-[#7cb983] rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Armed Forces</h3>
              <p className="text-gray-200">
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
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">INVESTMENT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transparent fee details for different admission categories.
            </p>
          </div>

          {/* Fee Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#002309]">
                    <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">FEE COMPONENT</th>
                    <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">GOVERNMENT QUOTA</th>
                    <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">MANAGEMENT QUOTA</th>
                    <th className="px-4 md:px-6 py-4 text-left text-white font-bold text-sm md:text-lg">NRI QUOTA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4 text-gray-700 font-medium text-sm md:text-base">Tuition Fee (Per Annum)</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹3,00,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹12,00,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">$15,000</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 md:px-6 py-4 text-gray-700 font-medium text-sm md:text-base">Admission Fee (One-time)</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹50,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹1,00,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">$2,000</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4 text-gray-700 font-medium text-sm md:text-base">Caution Deposit (Refundable)</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹25,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹25,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">$500</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="px-4 md:px-6 py-4 text-gray-700 font-medium text-sm md:text-base">Hostel Fee (Per Annum)</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹60,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">₹60,000</td>
                    <td className="px-4 md:px-6 py-4 text-gray-900 font-bold text-sm md:text-base">$1,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fee Note */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">
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
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">QUESTIONS?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common queries about the MDS Periodontics program.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">What is the duration of the MDS Periodontics program?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  The MDS in Periodontics is a 3-year full-time postgraduate program. It includes theoretical coursework, clinical training in periodontal surgeries and implant placement, and a mandatory dissertation that Learners must complete before graduation.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">What is the admission process for MDS Periodontics?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  Admission is based on NEET MDS scores. Candidates must qualify the national entrance exam and participate in state/institutional counseling. The selection is merit-based according to the marks obtained and seat availability.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">Does the program include dental implant training?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  Yes, comprehensive dental implant training is a core component of the MDS Periodontics curriculum. Learners receive hands-on training in implant planning, surgical placement, bone grafting, and prosthetic integration under expert supervision.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">Is hostel accommodation available for postgraduate Learners?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  Yes, we provide separate hostel facilities for male and female postgraduate Learners. The hostels are equipped with modern amenities including Wi-Fi, 24/7 security, mess facility, and recreational areas.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">What are the career prospects after completing MDS Periodontics?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  Graduates can pursue private practice specializing in periodontics and implants, academic positions in dental colleges, hospital consultancy, research careers, or join the armed forces dental corps. The growing demand for implant dentistry offers excellent career opportunities.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">Does the college provide placement assistance?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  Yes, our dedicated placement cell provides comprehensive career guidance and placement assistance. We maintain strong relationships with dental hospitals, implant companies, corporate chains, and academic institutions for employment opportunities.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">What clinical exposure will I get during the program?</h3>
                <svg className="w-6 h-6 text-[#7cb983] group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-700">
                  Our 150-bed dental hospital provides extensive clinical exposure. You'll handle diverse cases including scaling and root planing, flap surgeries, bone grafting, implant placement, periodontal plastic surgeries, and management of peri-implant diseases under expert supervision.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Accreditations & Affiliations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wide mb-2">RECOGNITION</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Accreditations & Affiliations</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our programs are recognized by leading regulatory bodies ensuring quality education.
            </p>
          </div>

          {/* Accreditation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* DCI */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border-2 border-gray-200 hover:border-[#006837] transition-all duration-300 text-center">
              <div className="bg-[#006837] rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-white">DCI</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Dental Council of India</h3>
            </div>

            {/* NAAC */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border-2 border-gray-200 hover:border-[#7cb983] transition-all duration-300 text-center">
              <div className="bg-[#7cb983] rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-white">NAAC</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">NAAC Accredited</h3>
            </div>

            {/* MGR */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border-2 border-gray-200 hover:border-[#7cb983] transition-all duration-300 text-center">
              <div className="bg-[#7cb983] rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-white">MGR</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">TN Dr. MGR Medical University</h3>
            </div>

            {/* IDA */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 border-2 border-gray-200 hover:border-[#006837] transition-all duration-300 text-center">
              <div className="bg-[#006837] rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-white">IDA</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Indian Dental Association</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#7cb983] to-[#6ba872]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Journey to Becoming a Periodontist
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
            Join our prestigious MDS Periodontics program and transform your career with world-class training in periodontal surgery and dental implantology at J.K.K. Nattraja Dental College.
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
