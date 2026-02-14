import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers - Join JKKN Dental College & Hospital',
  description: 'Explore career opportunities at JKKN Dental College & Hospital. Join our team of excellence in dental education, research, and healthcare.',
  keywords: 'JKKN dental careers, dental college jobs, faculty positions, dental teaching jobs, healthcare careers, research positions, Namakkal jobs, dental education careers, hospital jobs, academic positions',
};

export default function Careers() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            CAREERS
          </h1>

          {/* Subheading */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-2">
            Career Opportunities at JKKN Dental College & Hospital
          </h2>

          {/* Second Subheading */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            Join Our Team of Excellence in Dental Education& Healthcare
          </h3>

          {/* Introduction */}
          <p className="text-base leading-relaxed text-black mb-6">
            At JKKN Dental College &amp; Hospital, we are committed to fostering a dynamic and innovative work environment where passionate professionals can thrive. As a premier institution dedicated to dental education, research, and patient care, we are always looking for talented individuals to join our team.
          </p>

          {/* Why Work with Us */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Why Work with Us?
            </h3>
            <div className="text-base leading-relaxed text-black space-y-2">
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Opportunities for Career Growth – Be part of a leading dental institution with access to cutting- edge research and academic excellence.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />State-of-the-Art Facilities – Work in a technologically advanced environment that supports innovation and excellence in dental healthcare.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Collaborative Work Culture – Engage in a vibrant community of educators, researchers, and healthcare professionals.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Commitment to Research &amp; Innovation – Contribute to groundbreaking dental research and clinical advancements.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Competitive Benefits &amp; Professional Development – Enjoy a rewarding career with ongoing learning opportunities.</p>
            </div>
          </div>

          {/* Current Job Openings */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Current Job Openings
            </h3>
            <p className="text-base leading-relaxed text-black mb-4">
              We are looking for highly motivated professionals in the following categories:
            </p>
            <div className="text-base leading-relaxed text-black space-y-3">
              <p>
                <strong>Faculty Positions –</strong> Professors, Associate Professors, and Assistant Professors in various dental and allied health sciences departments.
              </p>
              <p>
                <strong>Research & Development Roles –</strong> Researchers and innovators in oral healthcare technologies.
              </p>
              <p>
                Administrative & Support Staff – Roles in hospital management, academic administration, and technical support.
              </p>
            </div>
          </div>

          {/* How to Apply */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              How to Apply?
            </h3>
            <p className="text-base leading-relaxed text-black mb-3">
              Explore our latest job openings and submit your application online through our CVVIZ recruitment portal.
            </p>
            <p className="text-base leading-relaxed text-black mb-4">
              <strong>Apply Now:</strong> <a href="https://jobs.cvviz.com/jkkn_institutions" className="text-[#16A085] hover:underline" target="_blank" rel="noopener noreferrer">https://jobs.cvviz.com/jkkn_institutions</a>
            </p>
          </div>

          {/* Be a Part of Our Mission */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Be a Part of Our Mission
            </h3>
            <p className="text-base leading-relaxed text-black mb-4">
              At JKKN Dental College & Hospital, we are shaping the future of dental education and healthcare. If you are passionate about making a difference, we invite you to join our team and grow with us!
            </p>
          </div>

          {/* Contact Details */}
          <div className="mb-12">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              For job-related inquiries, contact us:
            </h3>
            <p className="text-base leading-relaxed text-black mb-1">
              <strong>Mr N. Narayan Rao</strong>
            </p>
            <p className="text-base leading-relaxed text-black">
              <strong>90923 27666</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
