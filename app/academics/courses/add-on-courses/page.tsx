import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
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

export default function AddOnCourses() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/courses/add-on-courses/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Add-On Courses - JKKN Dental College',
    description: 'Explore specialized add-on courses in implantology, laser aesthetics, and composite restoration at JKKN Dental College. Enhance your expertise today.',
    url: 'https://dental.jkkn.ac.in/academics/courses/add-on-courses/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            ADD-ON COURSES
          </h1>

          {/* Section: Expand Your Expertise in Dentistry */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-black mb-4">
              Expand Your Expertise in Dentistry
            </h2>
            <p className="text-base text-black mb-4 text-justify">
              Our add-on courses provide BDS students with advanced clinical skills, hands-on training, and exposure to the latest advancements in dentistry. These courses help students stay ahead in their careers by offering specialized knowledge beyond the standard curriculum.
            </p>
          </section>

          {/* Completed Course */}
          <section className="mb-8">
            <h3 className="text-lg font-bold text-black mb-3">
              Completed Course
            </h3>
            <div className="flex items-start gap-2 mb-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-base text-black">
                Workshop on Laser Aesthetics (Successfully Conducted – December 2024)
              </p>
            </div>
            <p className="text-base text-black mb-2">
              <span className="font-bold">Venue:</span> Senthuraja Hall and Brainstorm Room, JKKN Dental College & Hospital Certification Provided This workshop provided participants with comprehensive training on laser applications in dentistry, including clinical applications, patient safety, and hands-on skill development. The course included brainstorming sessions, live demonstrations, and assessments to ensure practical learning outcomes.
            </p>
          </section>

          {/* Upcoming Courses */}
          <section className="mb-8">
            <h3 className="text-lg font-bold text-black mb-3">
              Upcoming Courses
            </h3>
            <p className="text-base text-black mb-2">
              1. Implantology – A Deep Dive with the Prostho Squad (April 16, 23, 24 and 25, 2025)
            </p>
            <p className="text-base text-black mb-2">
              Venue: JKKN Dental College &amp; Hospital
            </p>
            <p className="text-base text-black mb-6">
              Certification Included
            </p>

            <p className="text-base font-bold text-black mb-2">
              Course coordinator:
            </p>
            <p className="text-base text-black">
              Dr. Rekha (Oral aurgery),
            </p>
            <p className="text-base text-black">
              Dr. Sasikumar(Periodontics),
            </p>
            <p className="text-base text-black mb-4">
              Dr. Dhinesh Kumar (Prosthodontics),
            </p>
            <p className="text-base text-black mb-6">
              <span className="font-bold">co-coordinator:</span> Dr.Nivethitha
            </p>

            <p className="text-base font-bold text-black mb-2">
              Upcoming Dental photography course
            </p>
            <p className="text-base font-bold text-black mb-2">
              Course coordinator:
            </p>
            <p className="text-base text-black mb-2">
              Dr. Dhinesh HOD Prosthodontics,
            </p>
            <p className="text-base text-black mb-6">
              <span className="font-bold">co-coordinator:</span> Dr.Vijay Thiyagarajan Oral Surgery
            </p>

            <p className="text-base font-bold text-black mb-3">
              Key Highlights:
            </p>
            <p className="text-base text-black">
              Implantology basics, case selection, and treatment planning
            </p>
            <p className="text-base text-black">
              Hands-on training in implant placement
            </p>
            <p className="text-base text-black">
              CBCT imaging for precise implant placement
            </p>
            <p className="text-base text-black">
              Implant-supported prosthetics and impression techniques
            </p>
            <p className="text-base text-black mb-4">
              Complication management and patient communication
            </p>
            <p className="text-base font-bold text-black mb-2">
              For Registration & Inquiries:
            </p>
            <p className="text-base text-black font-bold">
              +91 9443236200 | +91 9842796293
            </p>
            <p className="text-base text-black mb-6">
              hodprosthodontics@jkkn.ac.in
            </p>

            <p className="text-base text-black mb-2">
              2. Composite Restoration: A Blueprint for Success (May 2025)
            </p>
            <p className="text-base text-black mb-2">
              <span className="font-bold">Venue:</span> JKKN Dental College & Hospital
            </p>
            <p className="text-base text-black mb-4">
              Certification Upon Completion
            </p>

            <p className="text-base font-bold text-black mb-3">
              Course Structure:
            </p>
            <p className="text-base text-black mb-2">
              Module 1: Introduction to Composite
            </p>
            <p className="text-base text-black mb-2">
              Duration: 2-3 hours
            </p>
            <p className="text-base text-black mb-4">
              Objective: Develop a foundational understanding of composite materials, their properties, and essential clinical protocols for effective restorative outcomes.
            </p>
            <p className="text-base text-black mb-6">
              Module 2: Lecture and Hands-On
            </p>

            <p className="text-base text-black mb-2">
              Duration: 6 hours
            </p>
            <p className="text-base text-black mb-4">
              Objective: Provide an in-depth understanding of advanced composite restoration techniques through a combination of lecture and hands-on practice.
            </p>
            <p className="text-base text-black mb-2">
              Module 3: Quiz &amp; Post-Debate
            </p>
            <p className="text-base text-black mb-2">
              Duration: 3 hours
            </p>
            <p className="text-base text-black mb-4">
              Objective: Assess participants & knowledge, encourage critical thinking, and facilitate discussion on clinical decision-making in composite restorations.
            </p>

            <div className="flex items-start gap-2 mb-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-base font-bold text-black">
                Overall Expected Outcomes:
              </p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Enhanced knowledge of composite materials and their applications.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Improved problem-solving and critical thinking skills.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Practical application of layering and finishing techniques.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-4">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Increased confidence in clinical decision-making and communication.
              </p>
            </div>

            <p className="text-base font-bold text-black mb-2">
              For Registration & Inquiries:
            </p>
            <p className="text-base text-black font-bold mb-8">
              Dr. Chris Susan – +91 9895223882
            </p>

            <p className="text-base font-bold text-black mb-3">
              Why Choose Our Add-On Courses?
            </p>
            <div className="flex items-start gap-2 mb-2">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Hands-on Training with Experts
              </p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Certification upon Completion
              </p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Access to Advanced Equipment &amp; Technology
              </p>
            </div>
            <div className="flex items-start gap-2 mb-6">
              <Check className="w-4 h-4 text-black inline-block" />
              <p className="text-base text-black">
                Enhances Career Prospects
              </p>
            </div>

            <p className="text-base font-bold text-black mb-2">
              Eligibility
            </p>
            <p className="text-base text-black mb-2">
              Open to BDS students and Interns
            </p>
            <p className="text-base text-black mb-6">
              Some courses may require prior clinical experience
            </p>

            <p className="text-base font-bold text-black mb-3">
              Enrollment Process
            </p>
            <p className="text-base text-black mb-2">
              1. Choose your desired course(s)
            </p>
            <p className="text-base text-black mb-2">
              2. Fill out the online registration form
            </p>
            <p className="text-base text-black mb-2">
              3. Submit the required documents
            </p>
            <p className="text-base text-black mb-8">
              4. Confirmation and payment
            </p>

            {/* Button */}
            <a
              href="/academics/courses/add-on-courses/implant-program-2025"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition-colors duration-200"
            >
              Implant program-2025
            </a>
          </section>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
