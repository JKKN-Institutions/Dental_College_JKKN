import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Phone, Mail } from 'lucide-react';
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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            START-UP
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Startups at JKKN Dental College & Hospital
          </h2>

          {/* Empowering Section */}
          <h3 className="text-base md:text-lg font-bold text-gray-700 mb-3">
            Empowering Future Dental Entrepreneurs & Professionals
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            At JKKN Dental College & Hospital, we believe that innovation and entrepreneurship are key drivers of progress in healthcare. To bridge the gap between research, technology, and clinical practice, we have established a startup ecosystem that nurtures groundbreaking ideas, fosters innovation, and supports entrepreneurial ventures in dentistry and healthcare.
          </p>

          {/* Our Vision for Startups */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Our Vision for Startups
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            The JKKN Startup Hub is designed to:
          </p>

          <div className="space-y-3 mb-8 text-gray-700">
            <p className="leading-relaxed">
              <span className="font-bold">Encourage Innovation –</span> Support the development of novel dental technologies, digital healthcare solutions, and advanced treatment modalities.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Bridge Research & Market Needs –</span> Transform research-driven discoveries into commercially viable solutions.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Support Student & Faculty Entrepreneurs –</span> Provide mentorship, funding assistance, and incubation opportunities for innovative ideas.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Promote Industry Collaborations –</span> Partner with healthcare industries, technology firms, and investors to accelerate startup growth.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Foster Interdisciplinary Research –</span> Integrate AI, biotechnology, nanotechnology, and material sciences into dental healthcare solutions.
            </p>
          </div>

          {/* Startup Support & Resources */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Startup Support & Resources
          </h2>

          {/* Innovation & Incubation Center */}
          <h3 className="text-base md:text-lg font-bold text-gray-700 mb-2">
            Innovation & Incubation Center
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A dedicated space for ideation, prototyping, and technology development.
          </p>

          {/* Mentorship & Training */}
          <h3 className="text-base md:text-lg font-bold text-gray-700 mb-2">
            Mentorship & Training
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Expert guidance from leading entrepreneurs, researchers, and industry professionals.
          </p>

          {/* Funding & Investment Opportunities */}
          <h3 className="text-base md:text-lg font-bold text-gray-700 mb-2">
            Funding & Investment Opportunities
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Support through grants, seed funding, and venture partnerships.
          </p>

          {/* Collaboration & Networking */}
          <h3 className="text-base md:text-lg font-bold text-gray-700 mb-2">
            Collaboration & Networking
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Access to national and international startup networks, healthcare professionals, and business accelerators.
          </p>

          {/* Technology & Infrastructure Support */}
          <h3 className="text-base md:text-lg font-bold text-gray-700 mb-2">
            Technology & Infrastructure Support
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            State-of-the-art research labs and advanced dental facilities for product development and testing.
          </p>

          {/* Focus Areas of Startups */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Focus Areas of Startups
          </h2>

          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700 font-bold">
            <li>Digital Dentistry & AI-based Diagnostics</li>
            <li>Innovative Dental Biomaterials & 3D Printing</li>
            <li>Tele-Dentistry & Remote Patient Care Solutions</li>
            <li>Bioconvergence & Regenerative Dentistry</li>
            <li>Preventive & Community Oral Healthcare Innovations</li>
          </ul>

          {/* Join the Future */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Join the Future of Dental Innovation!
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            If you are a student, researcher, or entrepreneur with a vision to revolutionize dental healthcare, the JKKN Startup Hub is your launchpad to success. We invite you to collaborate, innovate, and transform ideas into impactful solutions that shape the future of dentistry.
          </p>

          {/* Explore, Learn, and Build */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Explore, Learn, and Build Your Future with JKKN
          </h2>

          <div className="text-gray-700 mb-2 leading-relaxed">
            📍 <span className="font-bold">Location:</span> JKKN Dental College & Hospital, Natarajapuram, NH-544 (Salem to Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183.
          </div>

          <div className="text-gray-700 mb-2 leading-relaxed">
            <Phone className="w-5 h-5 inline-block mr-1" /> <span className="font-bold">Contact:</span> Dr Nivethitha, 9080063924
          </div>

          <div className="text-gray-700 mb-6 leading-relaxed">
            <Mail className="w-5 h-5 inline-block mr-1" /> <span className="font-bold">E mail:</span> dental@jkkn.ac.in
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Join us in revolutionizing the world of dentistry through education, research, and start-up ventures!
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <a
              href="/pdf/LIST-OF-START-UPS-.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              List Of Start Ups
            </a>
            <a
              href="/pdf/National-Innovation-and-Startup-Policy.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              National Innovation And Startup Policy
            </a>
            <a
              href="/pdf/STARTUP-AWARDS.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              Startup Awards
            </a>
            <a
              href="/pdf/Tamil-Nadu-Startup-and-Innovation-Policy-2023.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              Tamil nadu startup and innovation policy-2023
            </a>
            <a
              href="/pdf/NIF-START-UP-POLICY.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              Nif Start Up Policy
            </a>
            <a
              href="/pdf/START-UP-EVENTS.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              Start Up Events
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
