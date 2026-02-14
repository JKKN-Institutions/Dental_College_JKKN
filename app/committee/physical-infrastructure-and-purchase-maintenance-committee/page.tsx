import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Physical Infrastructure and Purchase & Maintenance Committee | JKKN Dental College',
  description: 'Managing campus infrastructure, maintenance, and upgrades. Ensuring modern, safe, and functional facilities for quality education.',
  keywords: 'infrastructure committee, campus maintenance, facility management, building upgrades, JKKN dental college, campus facilities',
};

export default function PhysicalInfrastructureCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D7C66] mb-8">
            PHYSICAL INFRASTRUCTURE AND PURCHASE & MAINTENANCE COMMITTEE
          </h1>

          {/* Description Paragraphs */}
          <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify font-semibold">
            Physical infrastructure refers to the built environment and facilities that support an institution or organization's operations. This includes buildings, classrooms, laboratories, libraries, sports facilities, dormitories, and other physical structures.
          </p>

          <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify font-semibold">
            Maintenance and Upgradation of physical infrastructure are essential to ensure the safety, functionality, and efficiency of the facilities. It involves ongoing inspections, repairs, and improvements to keep the infrastructure in optimal condition. Regular maintenance includes tasks like plumbing and electrical repairs, HVAC (heating, ventilation, and air conditioning) system checks, structural inspections, and general upkeep.
          </p>

          <p className="text-base text-gray-700 mb-4 leading-relaxed text-justify font-semibold">
            Upgradation, on the other hand, focuses on enhancing the infrastructure to meet changing needs and technological advancements. This may involve renovating existing buildings, upgrading equipment and technology, improving energy efficiency, or expanding facilities to accommodate a growing population.
          </p>

          <p className="text-base text-gray-700 mb-8 leading-relaxed text-justify font-semibold">
            Efficient maintenance and strategic upgradation of physical infrastructure contribute to creating a conducive environment for learning, research, and other institutional activities. It also reflects the institution's commitment to providing a high-quality and modern learning environment for its community. Proper planning and allocation of resources are essential to ensure that physical infrastructure remains functional, safe, and up-to-date.
          </p>

          {/* Committee Members */}
          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            1 .Chairperson- Mrs. Senthamarai
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            2.Managing Director- Mr.Ommsharravana
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            3.Trustee-Mrs.O.Isvarya Lakshmi- (chair)
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            4. Chief Administrative Offi cer-Mr.Rajendiran
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            5.Principal-Prof.Dr.Dhanasekar B (Member secretary)
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            6. Members-Vice Principal-Prof.Dr.B.Sasirekha
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            7.Members- Prof.Dr.C.Vignesh Kumar
          </p>

          <p className="text-base text-gray-700 font-bold mb-2 leading-relaxed">
            8..Members- Dr.Sakthi Saranya Devi
          </p>

          <p className="text-base text-gray-700 font-bold mb-12 leading-relaxed">
            9..Members-Mr.Suresh
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
