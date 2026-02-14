import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Criteria | BDS & MDS Eligibility | JKKN Dental',
  description: 'JKKN Dental College admission criteria for BDS and MDS programs. Learn about NEET eligibility, qualifying marks, age limits, and selection process for dental courses.',
  keywords: 'admission criteria, eligibility, NEET requirements, BDS eligibility, MDS eligibility, admission requirements',
};

export default function AdmissionCriteria() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-8">
            ADMISSION CRITERIA
          </h1>

          {/* Content */}
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p className="font-semibold">
              Candidate must have obtained 50% marks in Physics, Chemistry and Biology taken together also should have compulsorily qualified from NEET-UG examination.
            </p>

            <p className="font-semibold">
              The minimum eligibility for MDS is a BDS degree with a one year mandatory internship from a dental college recognized by the Dental Council of India.
            </p>

            <p className="font-semibold">
              The score in the NEET- MDS will be the basis of selection in MDS course.
            </p>

            <p className="font-bold">
              BDS ADMISSION
            </p>

            <p className="font-bold">
              PROGRAM -BDS
            </p>

            <p className="font-bold">
              ELIGIBILITY CRITERIA-50% marks taken together in 12th physics, chemistry, biology with NEET-UG qualified
            </p>

            <p className="font-bold">
              DURATION-5 years (4 years +1 year CRRI)
            </p>

            <p className="font-bold">
              SEAT METRIX-GOVERNMENT:35
            </p>

            <p className="font-bold">
              MANAGEMENT:65
            </p>

            <p className="font-bold">
              MDS ADMISSION
            </p>

            <p className="font-bold">
              PROGRAM-MDS
            </p>

            <p className="font-bold">
              ELIGIBILITY CRITERIA-BDS degree from DCI recognized dental college + NEET-PG qualified
            </p>

            <p className="font-bold">
              SPECIALIZATION AND DURATION-
            </p>

            <p className="font-bold">
              PROSTHODONTICS & ORAL IMPLANTOLOGY-3 years
            </p>

            <p className="font-bold">
              CONSERVATIVE DENTISTRY & ENDODONTICS-3 years
            </p>

            <p className="font-bold">
              ORTHODONTICS & DENTOFACIAL ORTHOPEDICS-3 years
            </p>

            <p className="font-bold">
              PERIODONTICS-3 years
            </p>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
