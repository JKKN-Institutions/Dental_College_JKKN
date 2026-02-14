import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Student-Centric Teaching Methods - JKKN Dental College',
  description: 'Innovative student-centric teaching methods at JKKN Dental College. Active learning, AI integration, and personalized instruction for excellence. Learn more.',
  keywords: 'student-centric teaching, active learning, AI integrated education, experiential learning, problem-based learning, personalized instruction, dental education',
};

export default function StudentCentricTeachingMethods() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 uppercase">
            STUDENT-CENTRIC TEACHING METHODS
          </h1>

          {/* Introduction */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            JKKN Dental College & Hospital has embraced a progressive approach to education by implementing student-centric teaching methods. This transformative approach places students at the center of the learning experience, fostering engagement, critical thinking, and skill development.
          </p>

          {/* Teaching Methods List */}
          <div className="space-y-6 mb-12">
            {/* 1. Active Learning Strategies */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">1. Active Learning Strategies:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                At JKKN Dental College & Hospital, passive lectures are complemented with active learning strategies such as problem-based learning (PBL) . These methods encourage students to apply theoretical knowledge to practical scenarios, enhancing their problem-solving abilities and critical reasoning skills. An innovative teaching method DESIGN THINKING which is a Problem solving methodology is implemented in lecture classes which enables the students to enhance critical thinking and innovation skills. The programs in JKKN Dental College & Hospital is Conducted on following categories -DISE ( Driven by Innovation solutions and Experiences),Student led conference and Unconference which helps the students take ownership and improves the communication skills of the students.
              </p>
            </div>

            {/* 2. Experiential Learning */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">2. Experiential Learning:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                Hands-on experiences are central to the curriculum at JKK N Dental College & Hospital. Students have opportunities to engage in clinical rotations, internships, and community outreach programs, gaining practical skills and real-world exposure.
              </p>
            </div>

            {/* 3. Interdisciplinary Education */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">3. Interdisciplinary Education:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                To prepare students for multidisciplinary collaboration in healthcare, JKKN Dental College & Hospital promotes interdisciplinary education. Interactions with students and faculty from other departments enrich the learning environment and broaden students' perspectives.
              </p>
            </div>

            {/* 4. Emphasis on Self-Directed Learning */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">4. Emphasis on Self-Directed Learning:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                The institution encourages self-directed learning by providing resources for independent study and research. Students are empowered to take ownership of their educational journey, fostering lifelong learning habits.
              </p>
            </div>

            {/* 5. Collaborative Learning */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">5. Collaborative Learning:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                The institution emphasizes collaborative learning through group projects, discussions, and peer-to-peer teaching. By working together, students gain diverse perspectives, develop communication skills, and learn the value of teamwork – essential qualities for future dental professionals.
              </p>
            </div>

            {/* 6. Technology Integration */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">6. Technology Integration:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                JKKN Dental College & Hospital leverages technology to facilitate student learning. Virtual simulations, advanced instruments for patient care and research , and online resources are integrated into the curriculum to make learning more interactive, accessible, and engaging for students.AI tools are frequently used to enhance learning experience.
              </p>
            </div>

            {/* 7. Personalized Instruction */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">7. Personalized Instruction:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                Recognizing the unique learning needs of each student, faculty members at JKKN Dental College & Hospital provide personalized instruction and mentoring. This tailored approach supports individual student growth and allows for targeted interventions when needed.
              </p>
            </div>

            {/* 8. Student Feedback and Reflection */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">8. Student Feedback and Reflection:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                Student feedback is valued and utilized to enhance teaching methodologies continuously. Regular assessments, feedback surveys, and reflection exercises empower students to participate in the improvement of their learning experiences. JKKN Dental College & Hospital exemplifies a commitment to student-centric teaching methods that prioritize active engagement, personalized learning, and holistic development. By nurturing a culture of innovation and collaboration, the institution equips students with the skills and competencies needed to excel in the dynamic field of dentistry. This student-focused approach not only enhances academic performance but also cultivates a passion for lifelong learning and excellence among future dental professionals.
              </p>
            </div>

            {/* 9. Interactive Models */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">9. INTERACTIVE MODELS:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                At JKKN Dental College & Hospital, interactive teaching models revolutionize the learning experience by seamlessly integrating advanced technology with collaborative approaches. Virtual simulations bring complex dental procedures to life, while gamified learning platforms foster engagement and motivation. Smart classrooms equipped with AI-driven systems enable personalized learning pathways, ensuring each student&#39;s unique needs are met. Case-based discussions and peer-led teaching encourage critical thinking, teamwork, and communication skills. Interactive models bridge theoretical knowledge with real-world practice. These innovative methods cultivate a dynamic, student-centered environment, shaping future-ready dental professionals equipped with expertise and confidence.
              </p>
            </div>

            {/* 10. AI Integrated teaching and learning methodology */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">10. AI Integrated teaching and learning methodology:</h3>
              <p className="text-gray-700 leading-relaxed pl-6">
                AI-integrated teaching and learning methods at JKKN Dental College & Hospital revolutionize dental education through advanced technology and personalized approaches. AI-driven analytics provide real-time insights into student performance, enabling targeted interventions and support. Virtual simulations enhances hands-on training, enhancing clinical skills and bridging theory with practice. AI-powered chatbots streamline learning by delivering instant feedback and addressing student queries effectively. AI tools for research has Streamlined research process, improved academic quality, enhanced clinical insights, and efficient data management for innovative projects . These innovative methods foster ,learning outcome ,active engagement, critical thinking, and skill development, creating a dynamic, future-ready learning environment tailored to producing competent and confident dental professionals.
              </p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
              EXPERIENTIAL LEARNING USING SIMULATION MODELS
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
              GROUP DISCUSSION BY STUDENTS FOR COLLABORATIVE LEARNING
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
              STUDENTS PERFORMING DENTAL TREATMENT
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
              SEMINAR PRESENTATION BY STUDENT USING SMART TV
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
              TOBACCO CESATION COUNSELLING
            </h2>

            <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
              STUDENTS ACTIVELY PARTICIPATING IN STUDENT LED CONFERENCE, UNCONFERENCE AND DISE BASED PROGRAMS
            </h2>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
