import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Student Welfare Committee | JKKN Dental College',
  description: 'Dedicated to student well-being, academic support, and overall welfare. View committee members committed to student success.',
  keywords: 'student welfare committee, student wellbeing, academic support, student care, welfare programs, JKKN dental college, student services',
};

export default function StudentWelfareCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            STUDENT WELFARE COMMITTEE
          </h1>

          {/* Committee Members List */}
          <p className="text-base text-black mb-3 leading-relaxed">
            1 .Managing Director-Mr.Ommsharravana (Chair)
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            2. C hief Administrative Offi cer- Mr. K. M. Raj endiran
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            3. Principal-Prof. Dr. Dhanasekar B-( Member secretary)
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            4. Prof.Dr.Sasirekha
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            5. Prof.Sai Sadan
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            6.Dr. Jagadeesh
          </p>
          <p className="text-base text-black mb-12 leading-relaxed">
            T.Dr.Chris Susan
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
