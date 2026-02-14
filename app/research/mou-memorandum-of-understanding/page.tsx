import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MOU - Memorandum of Understanding | JKKN Dental College',
  description: 'Strategic partnerships with academic institutions, hospitals, and healthcare organizations advancing dental education and research excellence.',
  keywords: 'memorandum of understanding, MOU, academic partnerships, healthcare collaborations, dental education, research collaborations, JKKN partnerships'
};

export default function MOUPage() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBFBEE] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12">
            MOU (Memorandum of Understanding)
          </h1>

          {/* Section Title */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Memorandum of Understanding (MOU)
          </h2>

          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Fostering Strategic Collaborations for Excellence
          </h3>

          {/* Introduction Paragraph */}
          <p className="text-base text-black mb-6 leading-relaxed">
            <span className="font-bold">At JKKN Dental College & Hospital,</span> we believe that collaboration is the key to academic and research excellence. Our Memorandums of Understanding (MOUs) serve as formal agreements that establish strategic partnerships with leading academic institutions, research organizations, healthcare industries, and other stakeholders. These partnerships enable us to create a dynamic environment for learning, innovation, and professional growth.
          </p>

          {/* Purpose & Benefits */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Purpose &amp; Benefits of MOUs
          </h3>

          <h4 className="text-base md:text-lg font-bold text-black mb-4">
            Through MOUs, we aim to:
          </h4>

          {/* Checkmark List */}
          <div className="mb-6 space-y-3">
            <div className="flex items-start">
              <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
              <p className="text-base text-black">
                Enhance Educational Opportunities – Facilitate faculty and student exchange programs, specialized training, and workshops.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
              <p className="text-base text-black">
                Strengthen Research Collaborations – Enable joint research projects, resource sharing, and knowledge exchange with reputed institutions.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
              <p className="text-base text-black">
                Promote Industry-Academia Linkages – Bridge the gap between academic learning and practical industry applications.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
              <p className="text-base text-black">
                Encourage Skill Development &amp; Innovation – Provide hands-on experience, internships, and exposure to cutting-edge dental technologies.
              </p>
            </div>
            <div className="flex items-start">
              <Check className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
              <p className="text-base text-black">
                Expand Global &amp; National Networks – Establish strong relationships with universities, research centers, and healthcare organizations worldwide. Our Commitment to Excellence By forging meaningful collaborations, <span className="font-bold">JKKN Dental College is committed to:</span>
              </p>
            </div>
          </div>

          {/* Additional Commitments */}
          <div className="mb-8 ml-6">
            <p className="text-base text-black mb-2">
              Advancing dental education through shared expertise.&nbsp;&nbsp;&nbsp;&nbsp;Promoting ethical and impactful research.
            </p>
            <p className="text-base text-black mb-6">
              Driving innovative solutions in oral healthcare. Through these strategic alliances, we continue to broaden our horizons, drive meaningful change, and make a lasting impact in the field of dentistry.
            </p>
          </div>

          {/* Contact Information */}
          <p className="text-base text-black font-bold mb-2">
            ◆◆ For partnership inquiries or more details on our MOUs, Please contact
          </p>
          <p className="text-base text-black font-bold mb-1">
            Dr T Dinesh Kumar
          </p>
          <p className="text-base text-black font-bold mb-12">
            Contact No. 8610365007
          </p>

          {/* Three MOU Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Senthil */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-black mb-4">
                MEMORUNDUM OF UNDERSTANDING WITH SENTHIL MULTISPECIALITY HOSPITAL
              </h4>
              <img
                src="/images/mou-1.png"
                alt="MOU with Senthil Multispeciality Hospital"
                className="w-full h-auto"
              />
            </div>

            {/* Card 2 - Nandha */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-black mb-4">
                MEMORUNDUM OF UNDERSTANDING WITH NANDHA DENTAL College & Hospital
              </h4>
              <img
                src="/images/mou-2.png"
                alt="MOU with Nandha Dental College & Hospital"
                className="w-full h-auto"
              />
            </div>

            {/* Card 3 - Arokya */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-black mb-4">
                MEMORUNDUM OF UNDERSTANDING WITH AROKYA HOSPITAL SALEM
              </h4>
              <img
                src="/images/mou-3.png"
                alt="MOU with Arokya Hospital Salem"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Green Buttons */}
          <div className="space-y-4 mb-12">
            <a
              href="/pdf/AROKYA-HOSPITAL-SALEM-MOU.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-4 px-6 rounded transition-all duration-300 text-base w-fit"
            >
              AROKYA HOSPITAL SALEM MOU
            </a>
            <a
              href="/pdf/DHANVANTHRI-MOU.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-4 px-6 rounded transition-all duration-300 text-base w-fit"
            >
              DHANVANTHRI MOU
            </a>
            <a
              href="/pdf/NANDHA-COLLEGE-MOU.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-4 px-6 rounded transition-all duration-300 text-base w-fit"
            >
              NANDHA COLLEGE MOU
            </a>
            <a
              href="/pdf/SENTHIL-MULTI-SPECIALIT-HOSPITAL-MOU.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-4 px-6 rounded transition-all duration-300 text-base w-fit"
            >
              SENTHIL MULTI SPECIALIT HOSPITAL- MOU- 06.03.2025
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
