import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Phone, Mail, MapPin, Lightbulb, TrendingUp, Users, Network, Cpu, FileText, Award, BookOpen } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Startup Hub & Entrepreneurship | JKKN Dental College',
  description: 'Empowering dental entrepreneurs with incubation support, mentorship, and funding for innovative healthcare solutions and startups.',
  keywords: 'dental startups, healthcare entrepreneurship, incubation hub, digital dentistry, AI diagnostics, dental innovation, JKKN startup',
  openGraph: {
    title: 'Startup Hub & Entrepreneurship | JKKN Dental College',
    description: 'Empowering dental entrepreneurs with incubation support, mentorship, and funding for innovative healthcare solutions and startups.',
    url: 'https://dental.jkkn.ac.in/research/start-up/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function StartUp() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Startup Hub & Entrepreneurship | JKKN Dental College',
    description: 'Empowering dental entrepreneurs with incubation support, mentorship, and funding for innovative healthcare solutions and startups.',
    url: 'https://dental.jkkn.ac.in/research/start-up/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Start-Up', url: 'https://dental.jkkn.ac.in/research/start-up/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            START-UP
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-200 mb-2">
            Startups at JKKN Dental College &amp; Hospital
          </h2>
          <p className="text-green-100 text-base md:text-lg font-medium mb-6">
            Empowering Future Dental Entrepreneurs &amp; Professionals
          </p>
          <p className="hero-description text-green-50 max-w-3xl leading-relaxed text-base md:text-lg">
            At JKKN Dental College &amp; Hospital, we believe that innovation and entrepreneurship are key drivers of progress in healthcare. To bridge the gap between research, technology, and clinical practice, we have established a startup ecosystem that nurtures groundbreaking ideas, fosters innovation, and supports entrepreneurial ventures in dentistry and healthcare.
          </p>
        </div>
      </section>

      {/* Our Vision for Startups */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">
            Our Vision for Startups
          </h2>
          <p className="text-gray-600 mb-8 text-base">
            The JKKN Startup Hub is designed to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e8f5e9] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-[#006837]" />
              </div>
              <h3 className="font-bold text-[#006837] text-base mb-2">Encourage Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support the development of novel dental technologies, digital healthcare solutions, and advanced treatment modalities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e8f5e9] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#006837]" />
              </div>
              <h3 className="font-bold text-[#006837] text-base mb-2">Bridge Research &amp; Market Needs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transform research-driven discoveries into commercially viable solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e8f5e9] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#006837]" />
              </div>
              <h3 className="font-bold text-[#006837] text-base mb-2">Support Learner &amp; Senior Learner Entrepreneurs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provide mentorship, funding assistance, and incubation opportunities for innovative ideas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e8f5e9] rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-[#006837]" />
              </div>
              <h3 className="font-bold text-[#006837] text-base mb-2">Promote Industry Collaborations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Partner with healthcare industries, technology firms, and investors to accelerate startup growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#e8f5e9] rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-[#006837]" />
              </div>
              <h3 className="font-bold text-[#006837] text-base mb-2">Foster Interdisciplinary Research</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrate AI, biotechnology, nanotechnology, and material sciences into dental healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Support & Resources */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-8">
            Startup Support &amp; Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#7cb983] pl-5 py-2">
              <h3 className="font-bold text-[#002309] text-base mb-2">Innovation &amp; Incubation Center</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A dedicated space for ideation, prototyping, and technology development.
              </p>
            </div>

            <div className="border-l-4 border-[#7cb983] pl-5 py-2">
              <h3 className="font-bold text-[#002309] text-base mb-2">Mentorship &amp; Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance from leading entrepreneurs, researchers, and industry professionals.
              </p>
            </div>

            <div className="border-l-4 border-[#7cb983] pl-5 py-2">
              <h3 className="font-bold text-[#002309] text-base mb-2">Funding &amp; Investment Opportunities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support through grants, seed funding, and venture partnerships.
              </p>
            </div>

            <div className="border-l-4 border-[#7cb983] pl-5 py-2">
              <h3 className="font-bold text-[#002309] text-base mb-2">Collaboration &amp; Networking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access to national and international startup networks, healthcare professionals, and business accelerators.
              </p>
            </div>

            <div className="border-l-4 border-[#7cb983] pl-5 py-2">
              <h3 className="font-bold text-[#002309] text-base mb-2">Technology &amp; Infrastructure Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                State-of-the-art research learning labs and advanced dental facilities for product development and testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-8">
            Focus Areas of Startups
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Digital Dentistry & AI-based Diagnostics',
              'Innovative Dental Biomaterials & 3D Printing',
              'Tele-Dentistry & Remote Patient Care Solutions',
              'Bioconvergence & Regenerative Dentistry',
              'Preventive & Community Oral Healthcare Innovations',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <span className="font-semibold text-[#002309] text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Join the Future of Dental Innovation!
          </h2>
          <p className="text-green-100 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            If you are a learner, researcher, or entrepreneur with a vision to revolutionize dental healthcare, the JKKN Startup Hub is your launchpad to success. We invite you to collaborate, innovate, and transform ideas into impactful solutions that shape the future of dentistry.
          </p>
        </div>
      </section>

      {/* Contact & Downloads */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-8">
            Explore, Learn, and Build Your Future with JKKN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-5 border border-green-100">
              <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <p className="font-bold text-[#002309] text-sm mb-1">Location:</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  JKKN Dental College &amp; Hospital, Natarajapuram, NH-544 (Salem to Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-5 border border-green-100">
              <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <p className="font-bold text-[#002309] text-sm mb-1">Contact:</p>
                <p className="text-gray-600 text-sm">Dr Nivethitha, 9080063924</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-5 border border-green-100">
              <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <p className="font-bold text-[#002309] text-sm mb-1">E mail:</p>
                <p className="text-gray-600 text-sm">dental@jkkn.ac.in</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-center font-medium mb-8">
            Join us in revolutionizing the world of dentistry through education, research, and start-up ventures!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/pdf/LIST-OF-START-UPS-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              List Of Start Ups
            </a>
            <a
              href="/pdf/National-Innovation-and-Startup-Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              National Innovation And Startup Policy
            </a>
            <a
              href="/pdf/STARTUP-AWARDS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <Award className="w-4 h-4 flex-shrink-0" />
              Startup Awards
            </a>
            <a
              href="/pdf/Tamil-Nadu-Startup-and-Innovation-Policy-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              Tamil nadu startup and innovation policy-2023
            </a>
            <a
              href="/pdf/NIF-START-UP-POLICY.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              Nif Start Up Policy
            </a>
            <a
              href="/pdf/START-UP-EVENTS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              Start Up Events
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
