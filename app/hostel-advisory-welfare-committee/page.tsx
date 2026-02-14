import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Hostel Advisory & Welfare Committee | JKKN Dental College',
  description: 'Ensuring safe and comfortable hostel living for students. View hostel staff and welfare programs creating home-away-from-home experience.',
  keywords: 'hostel advisory, hostel welfare, student accommodation, hostel safety, boys hostel, girls hostel, JKKN dental college, student living',
};

export default function HostelAdvisoryWelfareCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            HOSTEL ADVISORY & WELFARE COMMITTEE
          </h1>

          {/* Description */}
          <p className="text-base text-black mb-8 leading-relaxed text-justify">
            <span className="font-bold">The Hostel Advisory and Welfare Committee is a significant body within educational institutions responsible for overseeing the welfare and well-being of students residing in hostels. Comprising faculty members, hostel wardens, and student representatives, the committee addresses hostel-related concerns and ensures a safe and conducive living environment. It formulates and enforces hostel rules and regulations, promoting discipline and mutual respect. The committee also organizes recreational and cultural activities, fostering a sense of community and camaraderie among hostel residents. In addition, it addresses grievances and provides support to students facing challenges, striving to create a comfortable and supportive home-away-from-home experience for students living in the hostels.</span>
          </p>

          {/* Boys Hostel Staff Incharge */}
          <div className="mb-8">
            <p className="text-base text-gray-700 mb-1">Boys Hostel Staff Incharge</p>
            <p className="text-base text-black font-bold">Dr. N. Jegadeesan</p>
            <p className="text-base text-black font-bold">Dr. P.K. Sasikumar</p>
            <p className="text-base text-black font-bold">Dr. J. Vijaythiyagarajan</p>
            <p className="text-base text-black font-bold">Dr. N.S. Naveenraj</p>
            <p className="text-base text-black font-bold">Dr. S. Sivasuiryan</p>
          </div>

          {/* Girls Hostel Staff Incharge */}
          <div className="mb-8">
            <p className="text-base text-gray-700 mb-1">Girls Hostel Staff Incharge</p>
            <p className="text-base text-black font-bold">Dr. M. Rekha</p>
            <p className="text-base text-black font-bold">Dr. K. Sakthisaranyadevi</p>
            <p className="text-base text-black font-bold">Dr. Linda Christabel</p>
            <p className="text-base text-black font-bold">Dr. R. Dhivya</p>
            <p className="text-base text-black font-bold">Dr. N. Kalaranjeni</p>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
