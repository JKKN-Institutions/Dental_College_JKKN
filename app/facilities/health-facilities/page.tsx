import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Health Facilities - Medical Care at JKKN Dental College Campus',
  description: 'JKKN offers comprehensive health facilities including on-duty doctors, multidisciplinary dental hospital, and upcoming 100-bed multi-specialty hospital.',
  keywords: 'health facilities JKKN, campus medical care, dental emergency services, multi-specialty hospital, on-campus healthcare, student health services, medical emergency preparedness',
};

export default function HealthFacilities() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            HEALTH FACILITIES
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
            At JKKN Institutions, the safety and well-being of our community are of paramount importance. While our on-campus facilities are centered around our multidisciplinary dental hospital, we are well-prepared for various emergency situations through a multi-tiered approach.
          </p>

          {/* Immediate Medical Attention */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Immediate Medical Attention:
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-2">
              On-duty Doctors: Highly-trained medical professionals are available to provide first aid and preliminary care.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Connectivity:
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Strategic Location: Our campus is strategically located near national highways, providing rapid access to specialized care at nearby hospitals.
            </p>
          </div>

          {/* Upcoming Facilities */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Upcoming Facilities:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              In-Construction Multi-Speciality Hospital: We are currently building a state-of-the-art, 100-bed multi-speciality hospital to offer comprehensive healthcare services on campus.
            </p>
          </div>

          {/* Dental Emergency */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Dental Emergency:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Multidisciplinary Dental Hospital: An advanced facility for all kinds of dental emergencies, staffed by specialized dentists and oral healthcare experts.
            </p>
          </div>

          {/* Preparedness */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Preparedness:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Training and Drills: Regular training for staff and students to handle various kinds of medical emergencies efficiently.
            </p>
          </div>

          {/* Future-Ready */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Future-Ready:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Investment in Advanced Medical Technologies: As part of our commitment to healthcare excellence, our upcoming hospital will feature the latest medical technologies.
            </p>
          </div>

          {/* Comfort and Care */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Comfort and Care:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Soothing Environment: Our existing and upcoming healthcare facilities aim to offer a comforting environment to ease stress during medical situations.
            </p>
          </div>

          {/* Accessibility */}
          <div className="mb-6">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-2">
              Accessibility:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Affordable Care: Upholding our commitment to community service, we strive to make healthcare accessible to all.
            </p>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-600">
              At JKKN Institutions, we are diligently working to create a holistic healthcare ecosystem that aligns with our institutional values and vision. As we construct our new hospital, we continue to enhance our existing medical preparedness to ensure the safety and well-being of our community.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
