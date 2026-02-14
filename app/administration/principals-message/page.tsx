import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: "Principal's Message | JKKN Dental College",
  description: 'Read the inspiring message from Dr. Dhanasekar Balakrishnan, Principal of JKKN Dental College, on our vision for dental education excellence.',
  keywords: "Principal's Message, Dr. Dhanasekar Balakrishnan, JKKN Dental College, dental education vision, academic leadership, dental college principal",
};

export default function PrincipalsMessage() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Principal Photo */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <img
                src="/images/dental-principal-message.png"
                alt="Dr. Dhanasekar Balakrishnan"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Principal Name and Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-3">
              Dr. Dhanasekar Balakrishnan
            </h1>
            <p className="text-base md:text-lg font-semibold text-[#1B5E20] mb-2">
              BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)
            </p>
            <p className="text-base md:text-lg font-bold text-gray-700">
              Principal- JKKN Dental College & Hospital
            </p>
          </div>

          {/* Principal's Message Heading */}
          <h2 className="text-xl md:text-2xl font-bold text-[#1B5E20] text-center mb-8">
            PRINCIPAL'S MESSAGE
          </h2>

          {/* Message Content */}
          <div className="space-y-6 text-gray-700 text-justify leading-relaxed">
            <p className="font-semibold text-center">
              Greetings to all students, parents, Faculty, and stakeholders,
            </p>

            <p>
              It is a profound responsibility and a true privilege to serve as the Principal of JKKN Dental College & Hospital, an institution devoted to shaping the future of dental education, healthcare, and research. Guided by a vision to empower individuals through education and a mission to nurture skilled, compassionate, and innovative dental professionals, JKKN stands as a beacon of excellence and inspiration in the field
            </p>

            <p>
              At JKKN Dental College & Hospital, we believe in providing a holistic education that balances academic rigor with real-world application. By integrating cutting-edge technology, advanced clinical training, and a curriculum rooted in design thinking, we prepare our students to address the evolving needs of the dental profession with creativity, empathy, and a solutions-oriented mindset.
            </p>

            <p>
              Our institution fosters an environment that encourages research, innovation, and entrepreneurship. We empower our students and faculty to think beyond traditional boundaries, contribute meaningfully to dentistry, and lead transformative changes in oral healthcare.
            </p>

            <p>
              Community service is central to our mission. Through our well-equipped hospital, we provide accessible, high-quality dental care to those in need. We are committed to improving oral health in our region, ensuring that our services reflect the values of compassion, excellence, and inclusivity.
            </p>

            <p>
              As an institution, we are dedicated to creating leaders who inspire and excel. With our facilities, a team of expert faculty, and a culture of continuous learning, we strive to build a future where education drives progress, healthcare is a right for all, and innovation becomes a way of life.
            </p>

            <p>
              I extend my heartfelt gratitude to our students, faculty, parents, and stakeholders for their trust and unwavering support on our journey. Together, let us continue to transform education and healthcare, upholding the legacy of JKKN as a hub of excellence and a catalyst for societal impact.
            </p>

            <div className="text-center mt-8">
              <p className="font-semibold">Warm regards,</p>
              <p className="font-bold mt-2">Dhanasekar Balakrishnan</p>
              <p className="text-sm">
                BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
