import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { FileText, Mail, Phone, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Placement Cell (CDC) | JKKN Dental College',
  description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
  keywords: 'placement cell, CDC, career development, campus placements, internships, aptitude training, soft skills, JKKN dental college',
  openGraph: {
    title: 'Placement Cell (CDC) | JKKN Dental College',
    description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
    url: 'https://dental.jkkn.ac.in/committee/placement-cell-cdc/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PlacementCellCDC() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/placement-cell-cdc');
  const webPageSchema = generateWebPageSchema({
    title: 'Placement Cell (CDC) | JKKN Dental College',
    description: 'Bridging education and employment through training, internships, and placements. Empowering students for successful careers worldwide.',
    url: 'https://dental.jkkn.ac.in/committee/placement-cell-cdc/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Placement Cell (CDC) | JKKN Dental College',
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

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            PLACEMENT CELL / CDC
          </h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision */}
          <div className="bg-white rounded-xl p-7 shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-[#006837] rounded-full" />
              <h2 className="text-xl font-bold text-[#006837]">Vision</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              To be a leading global provider of innovative solutions that equip students with skills, knowledge, and exposure for meaningful careers. We envision a future where individuals embrace continuous learning and adapt to society&apos;s evolving needs. Our goal is to empower students to contribute their best to the nation and the world.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl p-7 shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-[#006837] rounded-full" />
              <h2 className="text-xl font-bold text-[#006837]">Mission</h2>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <p className="leading-relaxed">Bridge Education and Employment – Create a dynamic platform that connects learning with career opportunities through bioconvergence, industry collaborations, and hands-on training.</p>
              <p className="leading-relaxed">Foster Innovation and Growth – Develop a learning environment that encourages critical thinking, creativity, and continuous self-improvement.</p>
              <p className="leading-relaxed">Cultivate Top Professionals – Equip students with essential skills and industry expertise to excel in their respective fields.</p>
              <p className="leading-relaxed">Empower Future Leaders – Provide mentorship and career development programs to help students seize opportunities and become dynamic leaders.</p>
              <p className="leading-relaxed">Drive Meaningful Change – Enable students to contribute to society&apos;s progress and global advancements through innovation and leadership.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Managing Director Message */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#006837] rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-[#006837]">MESSAGE BY OUR MANAGING DIRECTOR</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-80 h-96 bg-gray-300 rounded-xl flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-base font-bold text-[#002309] mb-4">Dear Students, Faculty, and Industry Partners,</h3>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>At JKKN Institutions, we believe education extends beyond classrooms—it&apos;s about equipping students with skills, mindset, and opportunities for real-world success. The Career Development Center (CDC) bridges academic learning with industry needs, fostering career empowerment, entrepreneurship, and leadership.</p>
                <p>By integrating AI-driven learning, automation, and smart technologies, we aim to transform students into future-ready professionals. AI is not a replacement for human potential but a catalyst for growth, creativity, and innovation. Let&apos;s embrace technology and talent to create endless possibilities.</p>
                <p>Make the most of CDC&apos;s resources—where knowledge meets opportunity, and aspirations turn into achievements!</p>
              </div>
              <div className="mt-6 pt-6 border-t border-green-100">
                <p className="font-bold text-[#002309] text-sm">Best regards,</p>
                <p className="font-bold text-[#002309] text-sm">Mr. Omm Sharavana</p>
                <p className="font-bold text-[#006837] text-sm">Managing Director, JKKN Institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head of CDC Message */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#006837] rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-[#006837]">MESSAGE BY THE HEAD OF Placement Cell/CDC</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-96 h-96 bg-gray-300 rounded-xl flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-base font-bold text-[#002309] mb-4">Dear Students and Recruiters,</h3>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>At JKKN EDUCATIONAL INSTITUTIONS we believe that the essence of education lies in preparing our students not just for exams, but for the real-world challenges that lie ahead. The Career Development Center (CDC), led by a dedicated team, is committed to honing the skills of our students and matching them with the right opportunities to embark on successful careers.</p>
                <p>As the Head of CDC, I take immense pride in nurturing a generation that is not only industry-ready but equipped with a holistic development model, ensuring they thrive in any professional environment. Our placement process is designed to match the needs of the industry with the skills and aspirations of our students, ensuring mutual growth and success.</p>
                <p>Warm regards,</p>
              </div>
              <div className="mt-6 pt-6 border-t border-green-100">
                <p className="font-bold text-[#002309] text-sm">A. Robert Maria Vincent</p>
                <p className="font-bold text-[#006837] text-sm">Head – Career Development Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#006837] rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-[#006837]">Training Programs &amp; Placement Process</h2>
          </div>

          {/* In house Training */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#002309] mb-3">In house Training</h3>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              Our in house training programs are designed to develop the essential skills students need to succeed in the <span className="font-bold">modern job market:</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '1', title: 'Aptitude Training', body: 'Focused on improving problem-solving, numerical reasoning, and analytical skills, this program helps students excel in aptitude tests, which are a crucial part of the recruitment process.' },
                { num: '2', title: 'Soft Skills Training', body: 'Emphasizing communication, teamwork, leadership, and time management, this program ensures that students not only meet but exceed the expectations of prospective employers.' },
                { num: '3', title: 'TNPSC Academy', body: 'A specialized academy dedicated to preparing students to crack state government exams, particularly TNPSC (Tamil Nadu Public Service Commission) exams, equipping them with the necessary strategies and knowledge.' },
                { num: '4', title: 'Golden Hour Training', body: "Golden Hour Training is an intensive, last-minute, company-specific training program designed to maximize a candidate's success in securing a job. This strategic training equips students with the precise skills, insights, and confidence required to excel in final-stage interviews and assessments. By focusing on real-time industry expectations, employer-specific requirements, and proven success strategies, Golden Hour Training ensures candidates are fully prepared to make a lasting impression and win their desired job opportunities." },
              ].map(({ num, title, body }) => (
                <div key={num} className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{num}</span>
                    <h4 className="font-bold text-[#002309] text-sm">{title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outsource Training Partners */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#002309] mb-3">Outsource Training Partners</h3>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              In collaboration with leading training foundations, we outsource specialized training programs to ensure our students get the best industry exposure:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { num: '1', title: 'Magic Bus Foundation', body: 'Provides career guidance and life skills training, focusing on employability and personal development.' },
                { num: '2', title: 'Unnati Foundation', body: 'Offers skill development programs, helping students bridge the gap between education and employment through comprehensive training modules.' },
                { num: '3', title: 'Bhumi Foundation', body: 'Engages students with skill development and leadership training, helping them to become socially responsible individuals with a focus on community development.' },
              ].map(({ num, title, body }) => (
                <div key={num} className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#7cb983] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{num}</span>
                    <h4 className="font-bold text-[#002309] text-sm">{title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Placement Process */}
          <div>
            <h3 className="text-lg font-bold text-[#002309] mb-6">Our Placement Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <h4 className="font-bold text-[#002309] text-sm">Personalized Student Assessment</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Each student undergoes a holistic assessment through interactive sessions and feedback collection via the FACE SHEET form. This ensures a deep understanding of their individual career aspirations, allowing us to tailor their placement journey.</p>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <h4 className="font-bold text-[#002309] text-sm">Skill Development Programs</h4>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p>Our training covers essential job skills, including:</p>
                  <p>Soft Skills: Communication, Aptitude, Presentation, and Interview Techniques. Technical Skills: Specific to industry requirements.</p>
                  <p>Mock Interviews &amp; Group Discussions: Conducted by industry experts to prepare students thoroughly.</p>
                </div>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <h4 className="font-bold text-[#002309] text-sm">Campus Recruitment</h4>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p>Recruiters &amp; Hiring Partners</p>
                  <p>Student Placement Statistics</p>
                  <p>Placement Policies &amp; Guidelines</p>
                </div>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                  <h4 className="font-bold text-[#002309] text-sm">Internship Opportunities</h4>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p>Industry Internship Programs</p>
                  <p>Research &amp; Academic Internships</p>
                  <p>Student Internship Success Stories</p>
                </div>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
                  <h4 className="font-bold text-[#002309] text-sm">Industry Collaborations</h4>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p>Corporate Training Programs</p>
                  <p>Guest Lectures &amp; Webinars</p>
                  <p>MoUs &amp; Partnerships</p>
                </div>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
                  <h4 className="font-bold text-[#002309] text-sm">Career Guidance &amp; Counselling</h4>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p>One-on-One Career Mentorship</p>
                  <p>Career Roadmaps &amp; Planning</p>
                  <p>Psychometric Assessments</p>
                </div>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
                  <h4 className="font-bold text-[#002309] text-sm">Events &amp; Activities</h4>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p>Placement Drives &amp; Job Fairs</p>
                  <p>Hackathons &amp; Competitions</p>
                  <p>Alumni &amp; Industry Networking Meets</p>
                </div>
              </div>

              <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
                  <h4 className="font-bold text-[#002309] text-sm">Resources</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">YUVA 2025</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SMART Y CLUBS */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-8 bg-[#006837] rounded-full" />
            <h3 className="text-xl md:text-2xl font-bold text-[#006837]">SMART Y CLUBS</h3>
          </div>
          <h4 className="text-base font-bold text-[#002309] mb-6 ml-5">Student Clubs</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-green-100">
              <h4 className="font-bold text-[#006837] text-base mb-3">SMART Y Leaders Club</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                A platform that fosters leadership skills and encourages innovation among students. Members work on real-world projects that develop managerial and entrepreneurial capabilities
              </p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-green-100">
              <h4 className="font-bold text-[#006837] text-base mb-3">Gen Z Club</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                This club offers MBA students a chance to explore various career paths, enhance their skills, and prepare for future opportunities through workshops, seminars, and expert talks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Participation */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FBFBEE] rounded-xl p-7 border-l-4 border-[#7cb983] mb-10">
            <h3 className="text-lg font-bold text-[#002309] mb-3">Student Participation and Credits</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              All placement events, activities, and clubs are organized by the Career Development Center (CDC) Student Coordinators, with the efforts being formally creditized as part of their professional development.
            </p>
          </div>

          {/* Three Image Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="w-full h-64 bg-gray-300 rounded-xl" />
            <div className="w-full h-64 bg-gray-300 rounded-xl" />
            <div className="w-full h-64 bg-gray-300 rounded-xl" />
          </div>

          {/* Contact Us */}
          <div className="bg-[#FBFBEE] rounded-xl p-7 border border-green-100">
            <h3 className="text-lg font-bold text-[#006837] mb-2">Contact Us</h3>
            <p className="text-gray-700 text-sm mb-5">Career Development Center Office</p>
            <p className="font-bold text-[#002309] text-sm mb-4">Contact Details</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#006837]" />
                </div>
                <p className="text-gray-700 text-sm">Email: placements@jkkn.ac.in</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#006837]" />
                </div>
                <p className="text-gray-700 text-sm">Mobile : Mr. Robert +91 98948 53480</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-[#006837]" />
                </div>
                <p className="text-gray-700 text-sm">
                  Website:{' '}
                  <a href="https://placements.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://placements.jkkn.ac.in/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <a
            href="/pdf/LIST-OF-EVENTS-PLACEMENT-CELL- CDC.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-sm"
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            LIST OF EVENTS
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
