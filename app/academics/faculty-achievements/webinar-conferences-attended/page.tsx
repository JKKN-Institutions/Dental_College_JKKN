import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Webinars and Conferences Attended - JKKN Dental College',
  description: 'Explore webinars and conferences attended by JKKN faculty. Staying updated with latest dental research and innovations for quality education. View list.',
  keywords: 'webinars attended, dental conferences, faculty achievements, continuing education, dental research, professional development, academic conferences',
};

export default function WebinarConferencesAttended() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            WEBINAR/CONFERENCES ATTENDED
          </h1>

          {/* View Document Button */}
          <a
            href="#"
            className="inline-block bg-[#E8E3F3] hover:bg-[#d9d3e8] text-gray-700 font-semibold py-4 px-8 rounded transition-all duration-300"
          >
            View Document
          </a>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
