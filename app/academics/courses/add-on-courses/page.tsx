import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  alternates: { canonical: '/academics/courses/add-on-courses/' },
  title: 'Add-On Courses - JKKN Dental College',
  description: 'Explore specialized add-on courses in implantology, laser aesthetics, and composite restoration at JKKN Dental College. Enhance your expertise today.',
  keywords: 'add-on courses, dental specialization courses, implantology course, laser aesthetics, composite restoration, dental certification, advanced dental training',
  openGraph: {
    title: 'Add-On Courses - JKKN Dental College',
    description: 'Explore specialized add-on courses in implantology, laser aesthetics, and composite restoration at JKKN Dental College. Enhance your expertise today.',
    url: 'https://dental.jkkn.ac.in/academics/courses/add-on-courses/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const keyHighlights = [
  'Implantology basics, case selection, and treatment planning',
  'Hands-on training in implant placement',
  'CBCT imaging for precise implant placement',
  'Implant-supported prosthetics and impression techniques',
  'Complication management and patient communication',
];

const expectedOutcomes = [
  'Enhanced knowledge of composite materials and their applications.',
  'Improved problem-solving and critical thinking skills.',
  'Practical application of layering and finishing techniques.',
  'Increased confidence in clinical decision-making and communication.',
];

const whyChoose = [
  'Hands-on Training with Experts',
  'Certification upon Completion',
  'Access to Advanced Equipment & Technology',
  'Enhances Career Prospects',
];

const enrollmentSteps = [
  'Choose your desired course(s)',
  'Fill out the online registration form',
  'Submit the required documents',
  'Confirmation and payment',
];

const modules = [
  {
    number: 1,
    title: 'Introduction to Composite',
    duration: '2-3 hours',
    objective: 'Develop a foundational understanding of composite materials, their properties, and essential clinical protocols for effective restorative outcomes.',
  },
  {
    number: 2,
    title: 'Learning Session and Hands-On',
    duration: '6 hours',
    objective: 'Provide an in-depth understanding of advanced composite restoration techniques through a combination of learning session and hands-on practice.',
  },
  {
    number: 3,
    title: 'Quiz & Post-Debate',
    duration: '3 hours',
    objective: 'Assess participants & knowledge, encourage critical thinking, and facilitate discussion on clinical decision-making in composite restorations.',
  },
];

export default function AddOnCourses() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/courses/add-on-courses/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Add-On Courses - JKKN Dental College',
    description: 'Explore specialized add-on courses in implantology, laser aesthetics, and composite restoration at JKKN Dental College. Enhance your expertise today.',
    url: 'https://dental.jkkn.ac.in/academics/courses/add-on-courses/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            ADD-ON COURSES
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-6 rounded-full" />
          <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
            Expand Your Expertise in Dentistry
          </h2>
          <p className="hero-description text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Our add-on courses provide BDS learners with advanced clinical skills, hands-on training, and exposure to the latest advancements in dentistry. These courses help learners stay ahead in their careers by offering specialized knowledge beyond the standard learning framework.
          </p>
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Completed Course */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-[#006837]">Completed Course</h3>
              <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Completed
              </span>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#7cb983] flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-base font-semibold text-[#002309]">
                  Workshop on Laser Aesthetics (Successfully Conducted – December 2024)
                </p>
              </div>
              <div className="pl-10">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  <span className="font-bold text-[#006837]">Venue:</span>{' '}
                  Senthuraja Hall and Brainstorm Room, JKKN Dental College &amp; Hospital Certification Provided This workshop provided participants with comprehensive training on laser applications in dentistry, including clinical applications, patient safety, and hands-on skill development. The course included brainstorming sessions, live demonstrations, and assessments to ensure practical learning outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Courses */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-[#006837]">Upcoming Courses</h3>
              <span className="bg-[#006837] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Upcoming
              </span>
            </div>

            {/* Course 1: Implantology */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              {/* Course Header */}
              <div className="bg-[#006837] px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                  1
                </div>
                <div>
                  <p className="text-white font-bold text-base md:text-lg leading-snug">
                    Implantology – A Deep Dive with the Prostho Squad (April 16, 23, 24 and 25, 2025)
                  </p>
                  <p className="text-white/80 text-sm mt-1">Venue: JKKN Dental College &amp; Hospital &nbsp;·&nbsp; Certification Included</p>
                </div>
              </div>

              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Coordinators */}
                <div>
                  <p className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3">Course coordinator:</p>
                  <ul className="space-y-1 text-gray-700 text-sm md:text-base mb-4">
                    <li>Dr. Rekha (Oral aurgery),</li>
                    <li>Dr. Sasikumar(Periodontics),</li>
                    <li>Dr. Dhinesh Kumar (Prosthodontics),</li>
                  </ul>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-bold text-[#006837]">co-coordinator:</span> Dr.Nivethitha
                  </p>

                  <div className="mt-6 p-4 bg-[#FBFBEE] rounded-xl border border-[#7cb983]/30">
                    <p className="text-sm font-bold text-[#006837] mb-2">For Registration &amp; Inquiries:</p>
                    <p className="font-bold text-[#002309] text-sm">+91 9443236200 | +91 9842796293</p>
                    <p className="text-gray-600 text-sm">hodprosthodontics@jkkn.ac.in</p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <p className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3">Key Highlights:</p>
                  <ul className="space-y-2">
                    {keyHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7cb983] flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Dental Photography Course */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#7cb983]/30 p-6 md:p-8 mb-6">
              <p className="text-base font-bold text-[#006837] mb-4">Upcoming Dental photography course</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-bold text-[#006837] mb-2">Course coordinator:</p>
                  <p className="text-gray-700 text-sm md:text-base">Dr. Dhinesh HOD Prosthodontics,</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="font-bold text-[#006837]">co-coordinator:</span> Dr.Vijay Thiyagarajan Oral Surgery
                  </p>
                </div>
              </div>
            </div>

            {/* Course 2: Composite Restoration */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              {/* Course Header */}
              <div className="bg-[#006837] px-6 py-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                  2
                </div>
                <div>
                  <p className="text-white font-bold text-base md:text-lg leading-snug">
                    Composite Restoration: A Blueprint for Success (May 2025)
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    <span className="font-bold">Venue:</span> JKKN Dental College &amp; Hospital &nbsp;·&nbsp; Certification Upon Completion
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Course Structure */}
                <p className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-4">Course Structure:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {modules.map((mod) => (
                    <div key={mod.number} className="bg-[#FBFBEE] rounded-xl border border-[#7cb983]/30 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">{mod.number}</span>
                        </div>
                        <p className="font-bold text-[#006837] text-sm">Module {mod.number}: {mod.title}</p>
                      </div>
                      <p className="text-xs text-[#7cb983] font-semibold mb-2">Duration: {mod.duration}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        <span className="font-semibold">Objective:</span> {mod.objective}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Overall Expected Outcomes */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#7cb983] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="font-bold text-[#006837] text-sm md:text-base">Overall Expected Outcomes:</p>
                  </div>
                  <ul className="space-y-2 pl-2">
                    {expectedOutcomes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                        <Check className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="p-4 bg-[#FBFBEE] rounded-xl border border-[#7cb983]/30 inline-block">
                  <p className="text-sm font-bold text-[#006837] mb-1">For Registration &amp; Inquiries:</p>
                  <p className="font-bold text-[#002309] text-sm">Dr. Chris Susan – +91 9895223882</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose / Eligibility / Enrollment — 3-column info grid */}
          <section className="grid md:grid-cols-3 gap-6">

            {/* Why Choose */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p className="text-base font-bold text-[#006837] mb-4">Why Choose Our Add-On Courses?</p>
              <ul className="space-y-2">
                {whyChoose.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p className="text-base font-bold text-[#006837] mb-4">Eligibility</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7cb983] flex-shrink-0 mt-2" />
                  Open to BDS learners and Interns
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7cb983] flex-shrink-0 mt-2" />
                  Some courses may require prior clinical experience
                </li>
              </ul>
            </div>

            {/* Enrollment Process */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p className="text-base font-bold text-[#006837] mb-4">Enrollment Process</p>
              <ol className="space-y-3">
                {enrollmentSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#006837] text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

          </section>

          {/* PDF Button */}
          <div className="text-center pt-4">
            <a
              href="/pdf/Add-on-Course-Implant-program-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200 shadow-sm"
            >
              Implant program-2025
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
