import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Placement Cell / CDC - Career Development Center | JKKN Dental College',
  description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
  keywords: 'placement cell, CDC, career development, campus placements, internships, aptitude training, soft skills, JKKN dental college',
  openGraph: {
    title: 'Placement Cell / CDC - Career Development Center | JKKN Dental College',
    description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
    url: 'https://dental.jkkn.ac.in/committee/placement-cell-cdc/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PlacementCellCDC() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/placement-cell-cdc');
  const webPageSchema = generateWebPageSchema({
    title: 'Placement Cell / CDC - Career Development Center - JKKN Dental College',
    description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
    url: 'https://dental.jkkn.ac.in/committee/placement-cell-cdc/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Placement Cell / CDC - Career Development Center | JKKN Dental College',
    description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
    url: 'https://dental.jkkn.ac.in/committee/placement-cell-cdc/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            PLACEMENT CELL / CDC
          </h1>

          {/* Vision Section */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            Vision
          </h2>
          <p className="text-base text-black mb-6 leading-relaxed">
            To be a leading global provider of innovative solutions that equip students with skills, knowledge, and exposure for meaningful careers. We envision a future where individuals embrace continuous learning and adapt to society&apos;s evolving needs. Our goal is to empower students to contribute their best to the nation and the world.
          </p>

          {/* Mission Section */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            Mission
          </h2>
          <p className="text-base text-black mb-3 leading-relaxed">
            Bridge Education and Employment – Create a dynamic platform that connects learning with career opportunities through bioconvergence, industry collaborations, and hands-on training.
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Foster Innovation and Growth – Develop a learning environment that encourages critical thinking, creativity, and continuous self-improvement.
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Cultivate Top Professionals – Equip students with essential skills and industry expertise to excel in their respective fields.
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Empower Future Leaders – Provide mentorship and career development programs to help students seize opportunities and become dynamic leaders.
          </p>
          <p className="text-base text-black mb-8 leading-relaxed">
            Drive Meaningful Change – Enable students to contribute to society&apos;s progress and global advancements through innovation and leadership.
          </p>

          {/* MESSAGE BY OUR MANAGING DIRECTOR */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-6">
            MESSAGE BY OUR MANAGING DIRECTOR
          </h2>

          {/* Managing Director Image */}
          <div className="mb-8">
            <div className="w-full md:w-80 h-96 bg-gray-300 rounded"></div>
          </div>

          {/* Managing Director Message */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Dear Students, Faculty, and Industry Partners,
          </h3>
          <p className="text-base text-black mb-4 leading-relaxed">
            At JKKN Institutions, we believe education extends beyond classrooms—it&apos;s about equipping students with skills, mindset, and opportunities for real-world success. The Career Development Center (CDC) bridges academic learning with industry needs, fostering career empowerment, entrepreneurship, and leadership.
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            By integrating AI-driven learning, automation, and smart technologies, we aim to transform students into future-ready professionals. AI is not a replacement for human potential but a catalyst for growth, creativity, and innovation. Let&apos;s embrace technology and talent to create endless possibilities.
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            Make the most of CDC&apos;s resources—where knowledge meets opportunity, and aspirations turn into achievements!
          </p>
          <p className="text-base text-black font-bold mb-2">
            Best regards,
          </p>
          <p className="text-base text-black font-bold mb-2">
            Mr. Omm Sharavana
          </p>
          <p className="text-base text-black font-bold mb-8">
            Managing Director, JKKN Institutions
          </p>

          {/* MESSAGE BY THE HEAD OF Placement Cell/CDC */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-6">
            MESSAGE BY THE HEAD OF Placement Cell/CDC
          </h2>

          {/* Head of CDC Image */}
          <div className="mb-8">
            <div className="w-full md:w-96 h-96 bg-gray-300 rounded"></div>
          </div>

          {/* Head of CDC Message */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Dear Students and Recruiters,
          </h3>
          <p className="text-base text-black mb-4 leading-relaxed">
            At JKKN EDUCATIONAL INSTITUTIONS we believe that the essence of education lies in preparing our students not just for exams, but for the real-world challenges that lie ahead. The Career Development Center (CDC), led by a dedicated team, is committed to honing the skills of our students and matching them with the right opportunities to embark on successful careers.
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            As the Head of CDC, I take immense pride in nurturing a generation that is not only industry-ready but equipped with a holistic development model, ensuring they thrive in any professional environment. Our placement process is designed to match the needs of the industry with the skills and aspirations of our students, ensuring mutual growth and success.
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            Warm regards,
          </p>
          <p className="text-base text-black font-bold mb-2">
            A. Robert Maria Vincent
          </p>
          <p className="text-base text-black font-bold mb-8">
            Head – Career Development Center
          </p>

          {/* Training Programs & Placement Process */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-6">
            Training Programs &amp; Placement Process
          </h2>

          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            In house Training
          </h3>
          <p className="text-base text-black mb-4 leading-relaxed">
            Our in house training programs are designed to develop the essential skills students need to succeed in the <span className="font-bold">modern job market:</span>
          </p>

          {/* Training Items */}
          <h4 className="text-base font-bold text-black mb-3">
            1. Aptitude Training
          </h4>
          <p className="text-base text-black mb-4 leading-relaxed">
            Focused on improving problem-solving, numerical reasoning, and analytical skills, this program helps students excel in aptitude tests, which are a crucial part of the recruitment process.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            2. Soft Skills Training
          </h4>
          <p className="text-base text-black mb-4 leading-relaxed">
            Emphasizing communication, teamwork, leadership, and time management, this program ensures that students not only meet but exceed the expectations of prospective employers.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            3. TNPSC Academy
          </h4>
          <p className="text-base text-black mb-4 leading-relaxed">
            A specialized academy dedicated to preparing students to crack state government exams, particularly TNPSC (Tamil Nadu Public Service Commission) exams, equipping them with the necessary strategies and knowledge.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            4. Golden Hour Training
          </h4>
          <p className="text-base text-black mb-6 leading-relaxed">
            Golden Hour Training is an intensive, last-minute, company-specific training program designed to maximize a candidate&apos;s success in securing a job. This strategic training equips students with the precise skills, insights, and confidence required to excel in final-stage interviews and assessments. By focusing on real-time industry expectations, employer-specific requirements, and proven success strategies, Golden Hour Training ensures candidates are fully prepared to make a lasting impression and win their desired job opportunities.
          </p>

          {/* Outsource Training Partners */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Outsource Training Partners
          </h3>
          <p className="text-base text-black mb-4 leading-relaxed">
            In collaboration with leading training foundations, we outsource specialized training programs to ensure our students get the best industry exposure:
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            1. Magic Bus Foundation
          </h4>
          <p className="text-base text-black mb-4 leading-relaxed">
            Provides career guidance and life skills training, focusing on employability and personal development.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            2. Unnati Foundation
          </h4>
          <p className="text-base text-black mb-6 leading-relaxed">
            Offers skill development programs, helping students bridge the gap between education and employment through comprehensive training modules.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            3. Bhumi Foundation
          </h4>
          <p className="text-base text-black mb-6 leading-relaxed">
            Engages students with skill development and leadership training, helping them to become socially responsible individuals with a focus on community development.
          </p>

          {/* Our Placement Process */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Our Placement Process
          </h3>

          <h4 className="text-base font-bold text-black mb-3">
            1. Personalized Student Assessment
          </h4>
          <p className="text-base text-black mb-4 leading-relaxed">
            Each student undergoes a holistic assessment through interactive sessions and feedback collection via the FACE SHEET form. This ensures a deep understanding of their individual career aspirations, allowing us to tailor their placement journey.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            2. Skill Development Programs
          </h4>
          <p className="text-base text-black mb-3 leading-relaxed">
            Our training covers essential job skills, including:
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Soft Skills: Communication, Aptitude, Presentation, and Interview Techniques. Technical Skills: Specific to industry requirements.
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            Mock Interviews &amp; Group Discussions: Conducted by industry experts to prepare students thoroughly.
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            3. Campus Recruitment
          </h4>
          <p className="text-base text-black mb-2 leading-relaxed">
            Recruiters &amp; Hiring Partners
          </p>
          <p className="text-base text-black mb-2 leading-relaxed">
            Student Placement Statistics
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            Placement Policies &amp; Guidelines
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            4. Internship Opportunities
          </h4>
          <p className="text-base text-black mb-2 leading-relaxed">
            Industry Internship Programs
          </p>
          <p className="text-base text-black mb-2 leading-relaxed">
            Research &amp; Academic Internships
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            Student Internship Success Stories
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            5. Industry Collaborations
          </h4>
          <p className="text-base text-black mb-2 leading-relaxed">
            Corporate Training Programs
          </p>
          <p className="text-base text-black mb-2 leading-relaxed">
            Guest Lectures &amp; Webinars
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            MoUs &amp; Partnerships
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            6. Career Guidance &amp; Counselling
          </h4>
          <p className="text-base text-black mb-2 leading-relaxed">
            One-on-One Career Mentorship
          </p>
          <p className="text-base text-black mb-2 leading-relaxed">
            Career Roadmaps &amp; Planning
          </p>
          <p className="text-base text-black mb-6 leading-relaxed">
            Psychometric Assessments
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            7. Events &amp; Activities
          </h4>
          <p className="text-base text-black mb-2 leading-relaxed">
            Placement Drives &amp; Job Fairs
          </p>
          <p className="text-base text-black mb-2 leading-relaxed">
            Hackathons &amp; Competitions
          </p>
          <p className="text-base text-black mb-4 leading-relaxed">
            Alumni &amp; Industry Networking Meets
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            8. Resources
          </h4>
          <p className="text-base text-black mb-6 leading-relaxed">
            YUVA 2025
          </p>

          {/* SMART Y CLUBS */}
          <h3 className="text-base md:text-lg font-bold text-black mb-6">
            SMART Y CLUBS
          </h3>

          <h4 className="text-base font-bold text-black mb-4">
            Student Clubs
          </h4>

          <h4 className="text-base font-bold text-black mb-3">
            SMART Y Leaders Club
          </h4>
          <p className="text-base text-black mb-4 leading-relaxed">
            A platform that fosters leadership skills and encourages innovation among students. Members work on real-world projects that develop managerial and entrepreneurial capabilities
          </p>

          <h4 className="text-base font-bold text-black mb-3">
            Gen Z Club
          </h4>
          <p className="text-base text-black mb-8 leading-relaxed">
            This club offers MBA students a chance to explore various career paths, enhance<br/>their skills, and prepare for future opportunities through workshops, seminars, and expert talks
          </p>

          {/* Student Participation and Credits */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Student Participation and Credits
          </h3>
          <p className="text-base text-black mb-8 leading-relaxed">
            All placement events, activities, and clubs are organized by the Career Development<br/>Center (CDC) Student Coordinators, with the efforts being formally creditized as part of their professional development.
          </p>

          {/* Three Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="w-full h-64 bg-gray-300 rounded"></div>
            <div className="w-full h-64 bg-gray-300 rounded"></div>
            <div className="w-full h-64 bg-gray-300 rounded"></div>
          </div>

          {/* Contact Us */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Contact Us
          </h3>
          <p className="text-base text-black mb-6">
            Career Development Center Office
          </p>

          <p className="text-base text-black font-bold mb-4">
            Contact Details
          </p>

          <p className="text-base text-black mb-4">
            Email: placements@jkkn.ac.in
          </p>

          <p className="text-base text-black mb-4">
            Mobile : Mr. Robert +91 98948 53480
          </p>

          <p className="text-base text-black mb-8">
            Website: <a href="https://placements.jkkn.ac.in/" className="text-blue-600 hover:underline">https://placements.jkkn.ac.in/</a>
          </p>

          {/* List of Events Button */}
          <div className="mb-12">
            <a
              href="/list-of-events"
              className="inline-block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-4 px-8 rounded transition-all duration-300 text-base"
            >
              LIST OF EVENTS
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
