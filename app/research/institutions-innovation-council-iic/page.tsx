import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Phone, MapPin, Mail } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/research/institutions-innovation-council-iic/' },
  title: 'Institution\'s Innovation Council (IIC) | JKKN Dental College',
  description: 'MIC-AICTE supported innovation council fostering entrepreneurship, IPR, and startup culture in dental education at JKKN Dental College.',
  keywords: 'Innovation Council, IIC, dental entrepreneurship, startup culture, IPR, AICTE innovation, Ministry of Education, dental innovation',
  openGraph: {
    title: 'Institution\'s Innovation Council (IIC) | JKKN Dental College',
    description: 'MIC-AICTE supported innovation council fostering entrepreneurship, IPR, and startup culture in dental education at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/research/institutions-innovation-council-iic/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const visionItems = [
  {
    label: 'Foster Innovation Culture –',
    text: 'To cultivate a dynamic environment that encourages creativity, research, and innovation in dental education and healthcare.',
  },
  {
    label: 'Promote Entrepreneurship –',
    text: 'To nurture entrepreneurial thinking among learners and senior learners, enabling them to develop innovative healthcare solutions and dental start-ups.',
  },
  {
    label: 'Encourage Research & Development –',
    text: 'To support research-driven problem-solving in dentistry and allied health sciences, addressing real-world challenges.',
  },
  {
    label: 'Enhance Industry Collaboration –',
    text: 'To establish strong partnerships with industries, research organizations, and incubation centers to facilitate technology transfer and commercialization of ideas.',
  },
  {
    label: 'Support Intellectual Property & Start-ups –',
    text: 'To guide learners and senior learners in patenting innovations, protecting intellectual property, and transforming ideas into viable business ventures.',
  },
  {
    label: 'Strengthen Pre-incubation & Incubation Activities –',
    text: 'To provide necessary mentorship, infrastructure, and funding support for budding innovators and start-ups.',
  },
  {
    label: 'Contribute to Societal Impact –',
    text: 'To develop innovative dental solutions that improve oral healthcare access, affordability, and quality for the community.',
  },
];

const pdfLinks = [
  {
    href: '/pdf/IIC-APPRECIATION-LETTER.pdf',
    label: 'IIC APPRECIATION LETTER',
  },
  {
    href: '/pdf/INNOVATION-AND-ENTREPREUNERSHIP-AWARDS-IIC.pdf',
    label: 'INNOVATION AND ENTREPREUNERSHIP AWARDS',
  },
];

export default function InstitutionsInnovationCouncilIIC() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: "Institution's Innovation Council (IIC) | JKKN Dental College",
    description: 'MIC-AICTE supported innovation council fostering entrepreneurship, IPR, and startup culture in dental education at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/research/institutions-innovation-council-iic/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'IIC', url: 'https://dental.jkkn.ac.in/research/institutions-innovation-council-iic/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-5 text-sm text-white/60 flex items-center gap-2">
            <span>Home</span>
            <span>›</span>
            <span className="text-white/90">INSTITUTION&apos;S INNOVATION COUNCIL ( IIC )</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 uppercase tracking-wide">
            INSTITUTION&apos;S INNOVATION COUNCIL ( IIC )
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Certificate Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-white border-4 border-[#D4A574] p-6 rounded-2xl shadow-md">
              <img
                src="/images/INSTITUTIONS-INNOVATION-COUNCIL.png"
                alt="IIC Certificate of Establishment"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* About IIC */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">About IIC</h2>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                In the academic year 2021-22, JKKN Dental College &amp; Hospital established the Institution&apos;s Innovation Council (IIC) under the guidance of the Ministry of Education&apos;s Innovation Cell (MIC) in collaboration with AICTE. The IIC at JKKN aims to systematically foster a culture of innovation and entrepreneurship within the institution by engaging senior learners, learners, and team members in various activities such as ideation, problem-solving, Proof of Concept development, Design
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Thinking, Intellectual Property Rights (IPR), and project management at the Pre- incubation/Incubation stage. By integrating these initiatives, the IIC model at JKKN Dental
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                College &amp; Hospital strives to create a robust innovation ecosystem, addressing challenges in dental education and research while promoting start-up culture among learners and senior learners.
              </p>
            </div>
          </div>

          {/* Vision of IIC */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">VISION OF IIC</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {visionItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-4 hover:border-[#7cb983] hover:shadow-sm transition-all duration-200"
                >
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-bold text-[#006837]">{item.label}</span>{' '}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trained Human Resources */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">TRAINED HUMAN RESOURCES ON IIC</h2>
            </div>
            <div className="p-6">
              <img
                src="/images/TRAINED-HUMAN-RESOURCES-ON-IIC.png"
                alt="Trained Human Resources on IIC"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Learning Modules */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">LEARNING MODULES</h2>
            </div>
            <div className="p-6 flex justify-center">
              <div className="w-full max-w-4xl">
                <img
                  src="/images/LEARNING-MODULES.png"
                  alt="Learning Modules - Innovation Council Activities"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Join the Future CTA */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">
                Join the Future of Dental Innovation with IIC - JKKN Dental College &amp; Hospital!
              </h2>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Are you a learner, researcher, or aspiring entrepreneur passionate about transforming dental healthcare? The Institution&apos;s Innovation Council (IIC) at JKKN Dental College &amp; Hospital is your gateway to innovation and success. We invite you to collaborate, ideate, and innovate, turning visionary ideas into impactful solutions that redefine the future of dentistry and oral healthcare.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Be a part of our thriving innovation and startup ecosystem—where research meets entrepreneurship, and ideas turn into reality!
              </p>

              {/* Contact Box */}
              <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-3">
                <h3 className="text-base font-bold text-[#006837] mb-3">
                  Explore, Learn, and Build Your Future with JKKN
                </h3>
                <div className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <MapPin className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold">Location:</span> JKKN Dental College &amp; Hospital, Natarajapuram, NH-544 (Salem to Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu – 638183.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                  <Phone className="w-5 h-5 text-[#7cb983] flex-shrink-0" />
                  <p><span className="font-semibold">Contact:</span> Dr.Radhika, 7708611112</p>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                  <Mail className="w-5 h-5 text-[#7cb983] flex-shrink-0" />
                  <p><span className="font-semibold">E mail:</span> dental@jkkn.ac.in</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Join us in revolutionizing the world of dentistry through education, research, and innovation ventures!
              </p>
            </div>
          </div>

          {/* PDF Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pdfLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-[#006837] border-2 border-[#006837] text-[#006837] hover:text-white font-bold py-4 px-5 rounded-xl transition-all duration-200 shadow-sm group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#006837] group-hover:bg-white flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 text-white group-hover:text-[#006837] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-sm leading-snug">{link.label}</span>
              </a>
            ))}
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
