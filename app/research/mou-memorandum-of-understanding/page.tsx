import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check, FileText, Phone, User } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/research/mou-memorandum-of-understanding/' },
  title: 'MOU - Memorandum of Understanding | JKKN Dental College',
  description: 'Strategic partnerships with academic institutions, hospitals, and healthcare organizations advancing dental education and research excellence.',
  keywords: 'memorandum of understanding, MOU, academic partnerships, healthcare collaborations, dental education, research collaborations, JKKN partnerships',
  openGraph: {
    title: 'MOU - Memorandum of Understanding | JKKN Dental College',
    description: 'Strategic partnerships with academic institutions, hospitals, and healthcare organizations advancing dental education and research excellence.',
    url: 'https://dental.jkkn.ac.in/research/mou-memorandum-of-understanding/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MOUPage() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'MOU - Memorandum of Understanding | JKKN Dental College',
    description: 'Strategic partnerships with academic institutions, hospitals, and healthcare organizations advancing dental education and research excellence.',
    url: 'https://dental.jkkn.ac.in/research/mou-memorandum-of-understanding/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'MoU', url: 'https://dental.jkkn.ac.in/research/mou-memorandum-of-understanding/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            MOU (Memorandum of Understanding)
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-200 mb-2">
            Memorandum of Understanding (MOU)
          </h2>
          <p className="text-green-100 text-base md:text-lg font-medium mb-6">
            Fostering Strategic Collaborations for Excellence
          </p>
          <p className="hero-description text-green-50 max-w-3xl leading-relaxed text-base md:text-lg">
            <span className="font-bold text-white">At JKKN Dental College &amp; Hospital,</span> we believe that collaboration is the key to academic and research excellence. Our Memorandums of Understanding (MOUs) serve as formal agreements that establish strategic partnerships with leading academic institutions, research organizations, healthcare industries, and other stakeholders. These partnerships enable us to create a dynamic environment for learning, innovation, and professional growth.
          </p>
        </div>
      </section>

      {/* Purpose & Benefits */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">
            Purpose &amp; Benefits of MOUs
          </h3>
          <h4 className="text-base md:text-lg font-bold text-[#002309] mb-8">
            Through MOUs, we aim to:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-[#006837]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Enhance Educational Opportunities – Facilitate senior learner and learner exchange programs, specialized training, and workshops.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-[#006837]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strengthen Research Collaborations – Enable joint research projects, resource sharing, and knowledge exchange with reputed institutions.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-[#006837]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Promote Industry-Academia Linkages – Bridge the gap between academic learning and practical industry applications.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-[#006837]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Encourage Skill Development &amp; Innovation – Provide hands-on experience, internships, and exposure to cutting-edge dental technologies.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 md:col-span-2">
              <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-[#006837]" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expand Global &amp; National Networks – Establish strong relationships with universities, research centers, and healthcare organizations worldwide. Our Commitment to Excellence By forging meaningful collaborations, <span className="font-bold text-[#002309]">JKKN Dental College is committed to:</span>
              </p>
            </div>
          </div>

          {/* Commitment Points */}
          <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983] shadow-sm">
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              Advancing dental education through shared expertise.&nbsp;&nbsp;&nbsp;&nbsp;Promoting ethical and impactful research.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Driving innovative solutions in oral healthcare. Through these strategic alliances, we continue to broaden our horizons, drive meaningful change, and make a lasting impact in the field of dentistry.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100 inline-block">
            <p className="text-[#002309] font-bold mb-3 text-base">
              ◆◆ For partnership inquiries or more details on our MOUs, Please contact
            </p>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-[#006837]" />
              </div>
              <p className="text-[#002309] font-bold text-sm">Dr T Dinesh Kumar</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#006837]" />
              </div>
              <p className="text-[#002309] font-bold text-sm">Contact No. 8610365007</p>
            </div>
          </div>
        </div>
      </section>

      {/* MOU Image Cards */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="p-5 border-b border-green-100">
                <h4 className="text-sm font-bold text-[#006837] leading-snug">
                  MEMORUNDUM OF UNDERSTANDING WITH SENTHIL MULTISPECIALITY HOSPITAL
                </h4>
              </div>
              <div className="p-4">
                <img
                  src="/images/mou-1.png"
                  alt="MOU with Senthil Multispeciality Hospital"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="p-5 border-b border-green-100">
                <h4 className="text-sm font-bold text-[#006837] leading-snug">
                  MEMORUNDUM OF UNDERSTANDING WITH NANDHA DENTAL College &amp; Hospital
                </h4>
              </div>
              <div className="p-4">
                <img
                  src="/images/mou-2.png"
                  alt="MOU with Nandha Dental College & Hospital"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="p-5 border-b border-green-100">
                <h4 className="text-sm font-bold text-[#006837] leading-snug">
                  MEMORUNDUM OF UNDERSTANDING WITH AROKYA HOSPITAL SALEM
                </h4>
              </div>
              <div className="p-4">
                <img
                  src="/images/mou-3.png"
                  alt="MOU with Arokya Hospital Salem"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/pdf/AROKYA-HOSPITAL-SALEM-MOU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              AROKYA HOSPITAL SALEM MOU
            </a>
            <a
              href="/pdf/DHANVANTHRI-MOU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              DHANVANTHRI MOU
            </a>
            <a
              href="/pdf/NANDHA-COLLEGE-MOU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              NANDHA COLLEGE MOU
            </a>
            <a
              href="/pdf/SENTHIL-MULTI-SPECIALIT-HOSPITAL-MOU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              SENTHIL MULTI SPECIALIT HOSPITAL- MOU- 06.03.2025
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
