import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Disciplinary Committee | JKKN Dental College',
  description: 'Maintaining discipline and enforcing codes of conduct to create a safe and respectful learning environment at JKKN Dental College.',
  keywords: 'disciplinary committee, student discipline, code of conduct, institutional rules, student accountability, JKKN dental college',
};

export default function DisciplinaryCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            DISCIPLINARY COMMITTEE
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-black mb-8 leading-relaxed text-justify">
            The Disciplinary Committee is a crucial body within educational institutions tasked with maintaining discipline and enforcing codes of conduct among students and staff. Comprising faculty members, administrators, and sometimes student representatives, the committee handles disciplinary issues and violations of institutional rules. It conducts impartial investigations, provides fair hearings to individuals involved, and imposes appropriate disciplinary actions when necessary. The committee aims to create a safe and respectful learning environment, instilling a sense of responsibility and accountability among the student community. By upholding disciplinary standards and promoting ethical behavior, the committee fosters a conducive atmosphere for academic growth, character development, and overall well-being within the institution.
          </p>

          {/* Committee Members */}
          <p className="text-base text-black mb-2 leading-relaxed">
            Chairman – Dr. Vignesh Kumar
          </p>
          <p className="text-base text-black mb-2 leading-relaxed">
            Co-Chairman – Mr.Rozario Cyril
          </p>
          <p className="text-base text-black mb-12 leading-relaxed">
            Executive members – Dr.Dhivya, Dr.Arunima
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
