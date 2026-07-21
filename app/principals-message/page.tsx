import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/principals-message/' },
  title: "Principal's Message | JKKN Dental College",
  description: 'Read the inspiring message from Dr. Dhanasekar Balakrishnan, Principal of JKKN Dental College, on our vision for dental education excellence.',
  keywords: "Principal's Message, Dr. Dhanasekar Balakrishnan, JKKN Dental College, dental education vision, academic leadership, dental college principal",
  openGraph: {
    title: "Principal's Message | JKKN Dental College",
    description: 'Read the inspiring message from Dr. Dhanasekar Balakrishnan, Principal of JKKN Dental College, on our vision for dental education excellence.',
    url: 'https://dental.jkkn.ac.in/principals-message/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/principals-message/');
const speakableSchema = generateSpeakableWebPageSchema({
  title: "Principal's Message | JKKN Dental College",
  description: 'Read the inspiring message from Dr. Dhanasekar Balakrishnan, Principal of JKKN Dental College, on our vision for dental education excellence.',
  url: 'https://dental.jkkn.ac.in/principals-message/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function PrincipalsMessage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Hero Section */}
      <div className="bg-[#006837] pt-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide">
            PRINCIPAL&apos;S MESSAGE
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
          </div>
        </div>
        <div className="overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16 block"
            fill="#FBFBEE"
          >
            <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Principal Profile Card */}
      <section className="bg-[#FBFBEE] pt-2 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
            <div className="flex flex-col md:flex-row items-center gap-8 p-8">

              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-2xl border border-[#7cb983] opacity-40" />
                  <div className="w-[200px] rounded-xl overflow-hidden border-2 border-[#7cb983] shadow-md">
                    <img
                      src="/images/dental-principal-message.png"
                      alt="Dr. Dhanasekar Balakrishnan"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-[#006837]">
                  Dr. Dhanasekar Balakrishnan
                </h1>
                <p className="text-sm md:text-base font-semibold text-[#006837] leading-relaxed">
                  BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)
                </p>
                <span className="inline-block bg-[#006837] text-white text-sm font-medium px-5 py-1.5 rounded-full">
                  Principal- JKKN Dental College &amp; Hospital
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Section accent bar */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-8 bg-[#006837] rounded-full" />
            <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
          </div>

          <div className="space-y-6 text-gray-700 text-justify leading-relaxed">
            <p className="font-semibold text-center">
              Greetings to all learners, learning partners, Senior Learners, and stakeholders,
            </p>

            <p>
              It is a profound responsibility and a true privilege to serve as the Principal of JKKN Dental College &amp; Hospital, an institution devoted to shaping the future of dental education, healthcare, and research. Guided by a vision to empower individuals through education and a mission to nurture skilled, compassionate, and innovative dental professionals, JKKN stands as a beacon of excellence and inspiration in the field
            </p>

            <p>
              At JKKN Dental College &amp; Hospital, we believe in providing a holistic education that balances academic rigor with real-world application. By integrating cutting-edge technology, advanced clinical training, and a learning framework rooted in design thinking, we prepare our learners to address the evolving needs of the dental profession with creativity, empathy, and a solutions-oriented mindset.
            </p>

            <p>
              Our institution fosters an environment that encourages research, innovation, and entrepreneurship. We empower our learners and senior learners to think beyond traditional boundaries, contribute meaningfully to dentistry, and lead transformative changes in oral healthcare.
            </p>

            <p>
              Community service is central to our mission. Through our well-equipped hospital, we provide accessible, high-quality dental care to those in need. We are committed to improving oral health in our region, ensuring that our services reflect the values of compassion, excellence, and inclusivity.
            </p>

            <p>
              As an institution, we are dedicated to creating leaders who inspire and excel. With our facilities, a team of expert senior learners, and a culture of continuous learning, we strive to build a future where education drives progress, healthcare is a right for all, and innovation becomes a way of life.
            </p>

            <p>
              I extend my heartfelt gratitude to our learners, senior learners, learning partners, and stakeholders for their trust and unwavering support on our journey. Together, let us continue to transform education and healthcare, upholding the legacy of JKKN as a hub of excellence and a catalyst for societal impact.
            </p>

            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="font-semibold">Warm regards,</p>
              <p className="font-bold mt-2">Dhanasekar Balakrishnan</p>
              <p className="text-sm">
                BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
    </>
  );
}
