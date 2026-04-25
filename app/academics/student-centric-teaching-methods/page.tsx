import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Student-Centric Teaching Methods - JKKN Dental College',
  description: 'Innovative student-centric teaching methods at JKKN Dental College. Active learning, AI integration, and personalized instruction for excellence. Learn more.',
  keywords: 'student-centric teaching, active learning, AI integrated education, experiential learning, problem-based learning, personalized instruction, dental education',
  openGraph: {
    title: 'Student-Centric Teaching Methods - JKKN Dental College',
    description: 'Innovative student-centric teaching methods at JKKN Dental College. Active learning, AI integration, and personalized instruction for excellence. Learn more.',
    url: 'https://dental.jkkn.ac.in/academics/student-centric-teaching-methods/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const teachingMethods = [
  {
    number: 1,
    title: 'Active Learning Strategies:',
    body: 'At JKKN Dental College & Hospital, passive lectures are complemented with active learning strategies such as problem-based learning (PBL) . These methods encourage students to apply theoretical knowledge to practical scenarios, enhancing their problem-solving abilities and critical reasoning skills. An innovative teaching method DESIGN THINKING which is a Problem solving methodology is implemented in lecture classes which enables the students to enhance critical thinking and innovation skills. The programs in JKKN Dental College & Hospital is Conducted on following categories -DISE ( Driven by Innovation solutions and Experiences),Student led conference and Unconference which helps the students take ownership and improves the communication skills of the students.',
  },
  {
    number: 2,
    title: 'Experiential Learning:',
    body: 'Hands-on experiences are central to the curriculum at JKK N Dental College & Hospital. Students have opportunities to engage in clinical rotations, internships, and community outreach programs, gaining practical skills and real-world exposure.',
  },
  {
    number: 3,
    title: 'Interdisciplinary Education:',
    body: 'To prepare students for multidisciplinary collaboration in healthcare, JKKN Dental College & Hospital promotes interdisciplinary education. Interactions with students and faculty from other departments enrich the learning environment and broaden students\' perspectives.',
  },
  {
    number: 4,
    title: 'Emphasis on Self-Directed Learning:',
    body: 'The institution encourages self-directed learning by providing resources for independent study and research. Students are empowered to take ownership of their educational journey, fostering lifelong learning habits.',
  },
  {
    number: 5,
    title: 'Collaborative Learning:',
    body: 'The institution emphasizes collaborative learning through group projects, discussions, and peer-to-peer teaching. By working together, students gain diverse perspectives, develop communication skills, and learn the value of teamwork – essential qualities for future dental professionals.',
  },
  {
    number: 6,
    title: 'Technology Integration:',
    body: 'JKKN Dental College & Hospital leverages technology to facilitate student learning. Virtual simulations, advanced instruments for patient care and research , and online resources are integrated into the curriculum to make learning more interactive, accessible, and engaging for students.AI tools are frequently used to enhance learning experience.',
  },
  {
    number: 7,
    title: 'Personalized Instruction:',
    body: 'Recognizing the unique learning needs of each student, faculty members at JKKN Dental College & Hospital provide personalized instruction and mentoring. This tailored approach supports individual student growth and allows for targeted interventions when needed.',
  },
  {
    number: 8,
    title: 'Student Feedback and Reflection:',
    body: 'Student feedback is valued and utilized to enhance teaching methodologies continuously. Regular assessments, feedback surveys, and reflection exercises empower students to participate in the improvement of their learning experiences. JKKN Dental College & Hospital exemplifies a commitment to student-centric teaching methods that prioritize active engagement, personalized learning, and holistic development. By nurturing a culture of innovation and collaboration, the institution equips students with the skills and competencies needed to excel in the dynamic field of dentistry. This student-focused approach not only enhances academic performance but also cultivates a passion for lifelong learning and excellence among future dental professionals.',
  },
  {
    number: 9,
    title: 'INTERACTIVE MODELS:',
    body: 'At JKKN Dental College & Hospital, interactive teaching models revolutionize the learning experience by seamlessly integrating advanced technology with collaborative approaches. Virtual simulations bring complex dental procedures to life, while gamified learning platforms foster engagement and motivation. Smart classrooms equipped with AI-driven systems enable personalized learning pathways, ensuring each student\'s unique needs are met. Case-based discussions and peer-led teaching encourage critical thinking, teamwork, and communication skills. Interactive models bridge theoretical knowledge with real-world practice. These innovative methods cultivate a dynamic, student-centered environment, shaping future-ready dental professionals equipped with expertise and confidence.',
  },
  {
    number: 10,
    title: 'AI Integrated teaching and learning methodology:',
    body: 'AI-integrated teaching and learning methods at JKKN Dental College & Hospital revolutionize dental education through advanced technology and personalized approaches. AI-driven analytics provide real-time insights into student performance, enabling targeted interventions and support. Virtual simulations enhances hands-on training, enhancing clinical skills and bridging theory with practice. AI-powered chatbots streamline learning by delivering instant feedback and addressing student queries effectively. AI tools for research has Streamlined research process, improved academic quality, enhanced clinical insights, and efficient data management for innovative projects . These innovative methods foster ,learning outcome ,active engagement, critical thinking, and skill development, creating a dynamic, future-ready learning environment tailored to producing competent and confident dental professionals.',
  },
];

const sectionTitles = [
  'EXPERIENTIAL LEARNING USING SIMULATION MODELS',
  'GROUP DISCUSSION BY STUDENTS FOR COLLABORATIVE LEARNING',
  'STUDENTS PERFORMING DENTAL TREATMENT',
  'SEMINAR PRESENTATION BY STUDENT USING SMART TV',
  'TOBACCO CESATION COUNSELLING',
  'STUDENTS ACTIVELY PARTICIPATING IN STUDENT LED CONFERENCE, UNCONFERENCE AND DISE BASED PROGRAMS',
];

export default function StudentCentricTeachingMethods() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/student-centric-teaching-methods/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Student-Centric Teaching Methods - JKKN Dental College',
    description: 'Innovative student-centric teaching methods at JKKN Dental College. Active learning, AI integration, and personalized instruction for excellence. Learn more.',
    url: 'https://dental.jkkn.ac.in/academics/student-centric-teaching-methods/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Student Centric Teaching Methods', url: 'https://dental.jkkn.ac.in/academics/student-centric-teaching-methods/' },
      ]} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            STUDENT-CENTRIC TEACHING METHODS
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-6 rounded-full" />
          <p className="hero-description text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            JKKN Dental College &amp; Hospital has embraced a progressive approach to education by implementing student-centric teaching methods. This transformative approach places students at the center of the learning experience, fostering engagement, critical thinking, and skill development.
          </p>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {teachingMethods.map((method) => (
              <article
                key={method.number}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex gap-5 md:gap-6 hover:shadow-md transition-shadow duration-200"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-base leading-none">
                    {method.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-[#006837] mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {method.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Titles */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sectionTitles.map((title, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 hover:border-[#7cb983] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-shrink-0 w-1.5 h-full min-h-[2rem] rounded-full bg-[#7cb983] self-stretch" />
                <h2 className="text-sm md:text-base font-bold text-[#002309] uppercase leading-snug">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
