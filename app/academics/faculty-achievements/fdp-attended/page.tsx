import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Faculty Development Programs Attended - JKKN Dental College',
  description: 'View FDP attended by JKKN Dental College faculty members. Committed to continuous professional development and educational excellence. Learn more.',
  keywords: 'faculty development program, FDP attended, faculty training, professional development, dental faculty achievements, JKKN faculty, academic excellence',
};

export default function FdpAttended() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            FDP ATTENDED
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
