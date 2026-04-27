import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Physical Infrastructure & Maintenance | JKKN Dental',
  description: 'Managing campus infrastructure, maintenance, and upgrades. Ensuring modern, safe, and functional facilities for quality education.',
  keywords: 'infrastructure committee, campus maintenance, facility management, building upgrades, JKKN dental college, campus facilities',
  openGraph: {
    title: 'Physical Infrastructure & Maintenance | JKKN Dental',
    description: 'Managing campus infrastructure, maintenance, and upgrades. Ensuring modern, safe, and functional facilities for quality education.',
    url: 'https://dental.jkkn.ac.in/committee/physical-infrastructure-and-purchase-maintenance-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PhysicalInfrastructureCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/physical-infrastructure-and-purchase-maintenance-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Infrastructure & Maintenance Committee | JKKN Dental',
    description: 'Managing campus infrastructure, maintenance, and upgrades. Ensuring modern, safe, and functional facilities for quality education.',
    url: 'https://dental.jkkn.ac.in/committee/physical-infrastructure-and-purchase-maintenance-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Physical Infrastructure & Maintenance | JKKN Dental',
    description: 'Managing campus infrastructure, maintenance, and upgrades. Ensuring modern, safe, and functional facilities for quality education.',
    url: 'https://dental.jkkn.ac.in/committee/physical-infrastructure-and-purchase-maintenance-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            PHYSICAL INFRASTRUCTURE AND PURCHASE &amp; MAINTENANCE COMMITTEE
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983] space-y-5">
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify font-semibold">
              Physical infrastructure refers to the built environment and facilities that support an institution or organization&apos;s operations. This includes buildings, classrooms, laboratories, libraries, sports facilities, dormitories, and other physical structures.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify font-semibold">
              Maintenance and Upgradation of physical infrastructure are essential to ensure the safety, functionality, and efficiency of the facilities. It involves ongoing inspections, repairs, and improvements to keep the infrastructure in optimal condition. Regular maintenance includes tasks like plumbing and electrical repairs, HVAC (heating, ventilation, and air conditioning) system checks, structural inspections, and general upkeep.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify font-semibold">
              Upgradation, on the other hand, focuses on enhancing the infrastructure to meet changing needs and technological advancements. This may involve renovating existing buildings, upgrading equipment and technology, improving energy efficiency, or expanding facilities to accommodate a growing population.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify font-semibold">
              Efficient maintenance and strategic upgradation of physical infrastructure contribute to creating a conducive environment for learning, research, and other institutional activities. It also reflects the institution&apos;s commitment to providing a high-quality and modern learning environment for its community. Proper planning and allocation of resources are essential to ensure that physical infrastructure remains functional, safe, and up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              '1 .Chairperson- Mrs. Senthamarai',
              '2.Managing Director- Mr.Ommsharravana',
              '3.Trustee-Mrs.O.Isvarya Lakshmi- (chair)',
              '4. Chief Administrative Offi cer-Mr.Rajendiran',
              '5.Principal-Prof.Dr.Dhanasekar B (Member secretary)',
              '6. Members-Vice Principal-Prof.Dr.B.Sasirekha',
              '7.Members- Prof.Dr.C.Vignesh Kumar',
              '8..Members- Dr.Sakthi Saranya Devi',
              '9..Members-Mr.Suresh',
            ].map((member) => (
              <div key={member} className="bg-[#FBFBEE] rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-bold text-sm leading-relaxed">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
