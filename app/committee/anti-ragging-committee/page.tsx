import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { BookOpen, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anti Ragging Committee | JKKN Dental College',
  description: 'JKKN Dental College maintains zero-tolerance towards ragging. View committee members, UGC guidelines, and helpline for a safe campus.',
  keywords: 'anti ragging committee, ragging free campus, student safety, UGC guidelines, zero tolerance policy, JKKN dental college, anti ragging helpline',
};

export default function AntiRaggingCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
            ANTI RAGGING COMMITTEE
          </h1>

          {/* Anti-Ragging Committee Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D7C66] mb-6">
            Anti-Ragging Committee
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-6">
            Creating a Safe, Respectful, and Inclusive Campus for All
          </h3>

          <p className="text-base text-black mb-4 leading-relaxed">
            At <span className="font-bold">JKKN Dental College & Hospital</span>, we uphold the highest standards of student welfare, dignity, and discipline. In line with the directives of the University Grants Commission (UGC) and Dental Council of India, our college maintains a strict zero-tolerance policy towards ragging in any form.
          </p>

          <p className="text-base text-black mb-12 leading-relaxed">
            The Anti-Ragging Committee has been constituted to ensure a ragging-free environment on campus, actively monitor student interactions, and take swift action in case of any violations. We are committed to maintaining a culture of respect, safety, and academic excellence.
          </p>

          {/* Members of the Anti-Ragging Committee */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <span className="text-2xl mr-3">👥</span> Members of the Anti-Ragging Committee
          </h3>

          <p className="text-base text-black mb-6 leading-relaxed">
            Click the link below to view the current members of the Anti-Ragging Committee:
          </p>

          <div className="mb-12">
            <a
              href="/pdf/ANTI-RAGGING-COMMITTEE-ViewCommitteeMembers.pdf"
              className="inline-block bg-[#0D5E2E] hover:bg-[#0A4A23] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-sm uppercase"
            >
              VIEW COMMITTEE MEMBERS
            </a>
          </div>

          {/* Public Disclosure as per UGC Guidelines */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <span className="text-2xl mr-3">📢</span> Public Disclosure as per UGC Guidelines
          </h3>

          <p className="text-base text-black mb-6 leading-relaxed">
            In compliance with UGC regulations, the following measures are in place to prevent and address ragging:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Display of anti-ragging posters across campus and hostels.
            </li>
            <li className="font-semibold">
              Mandatory anti-ragging undertakings by all students and parents at the time of admission.
            </li>
            <li className="font-semibold">
              Orientation programs sensitizing students about ragging and its consequences.
            </li>
            <li className="font-semibold">
              Round-the-clock availability of anti-ragging helpline numbers and email.
            </li>
            <li className="font-semibold">
              Immediate disciplinary action against offenders, including suspension or expulsion as per UGC rules.
            </li>
          </ul>

          <div className="mb-12">
            <a
              href="/pdf/ANTI-RAGGING-COMMITTEE-PublicDisclosures.pdf"
              className="inline-block bg-[#0D5E2E] hover:bg-[#0A4A23] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-sm uppercase"
            >
              DOWNLOAD UGC PUBLIC DISCLOSURE
            </a>
          </div>

          {/* UGC Guidelines on Ragging */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 inline-block" /> UGC Guidelines on Ragging
          </h3>

          <p className="text-base text-black mb-6 leading-relaxed">
            The UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 provide a comprehensive framework to prevent and penalize ragging. Highlights include:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Definition and forms of ragging.
            </li>
            <li className="font-semibold">
              Preventive measures for institutions.
            </li>
            <li className="font-semibold">
              Role and responsibilities of the Anti-Ragging Committee and Squad.
            </li>
            <li className="font-semibold">
              Procedures for lodging and addressing complaints.
            </li>
            <li className="font-semibold">
              Punishments ranging from warning to rustication and legal prosecution.
            </li>
          </ul>

          <div className="mb-12">
            <a
              href="/pdf/ANTI-RAGGING-COMMITTEE-UGC-Guideliness.pdf"
              className="inline-block bg-[#0D5E2E] hover:bg-[#0A4A23] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-sm uppercase"
            >
              READ FULL UGC GUIDELINES
            </a>
          </div>

          {/* Anti-Ragging Helpline */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <Phone className="w-6 h-6 mr-3 inline-block" /> Anti-Ragging Helpline
          </h3>

          <ul className="list-disc list-inside mb-12 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              College Helpline:
            </li>
            <li className="font-semibold">
              UGC National Anti-Ragging Helpline: 1800-180-5522
            </li>
            <li className="font-semibold">
              Email: <span className="text-black">helpline@antiragging.in</span>
            </li>
            <li className="font-semibold">
              Website:<span className="text-black">www.antiragging.in</span>
            </li>
          </ul>

          {/* Report Ragging */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <span className="text-2xl mr-3">📣</span> Report Ragging
          </h3>

          <p className="text-base text-black mb-12 leading-relaxed">
            If you or someone you know is experiencing ragging, do not stay silent. Report immediately using the helpline or contact any faculty member of the Anti-Ragging Committee. All reports will be handled with strict confidentiality and urgency.
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
