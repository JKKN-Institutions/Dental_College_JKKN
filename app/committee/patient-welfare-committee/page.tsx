import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Welfare Committee | JKKN Dental College',
  description: 'Ensuring quality patient care and welfare at JKKN Dental Hospital. View committee members dedicated to patient rights and safety.',
  keywords: 'patient welfare committee, patient care, patient rights, hospital welfare, dental hospital, JKKN dental college, healthcare quality',
  openGraph: {
    title: 'Patient Welfare Committee | JKKN Dental College',
    description: 'Ensuring quality patient care and welfare at JKKN Dental Hospital. View committee members dedicated to patient rights and safety.',
    url: 'https://dental.jkkn.ac.in/committee/patient-welfare-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PatientWelfareCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/patient-welfare-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Patient Welfare Committee - JKKN Dental College',
    description: 'Ensuring quality patient care and welfare at JKKN Dental Hospital. View committee members dedicated to patient rights and safety.',
    url: 'https://dental.jkkn.ac.in/committee/patient-welfare-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Patient Welfare Committee | JKKN Dental College',
    description: 'Ensuring quality patient care and welfare at JKKN Dental Hospital. View committee members dedicated to patient rights and safety.',
    url: 'https://dental.jkkn.ac.in/committee/patient-welfare-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  const members = [
    '1 .Convener – Principal- Prof.Dr.Elancheziyan (Chair)',
    '2. Vice Principal- Prof.Dr.B.Sasirekha',
    '3.Dr. Naveen Raj',
    '5.Dr.Santosh',
    '6. Dr.Thangammani Ammal',
    'T.Student members- I.Mr.Mohammed Mufa',
    '2.Dr.Surya.A.S',
    '3.Mrs.Shivee Sankari',
    '4..Dr.Bharathi',
  ];

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            PATIENT WELFARE COMMITTEE
          </h1>
        </div>
      </section>

      {/* Members */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member) => (
              <div key={member} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-semibold text-sm leading-relaxed">{member}</p>
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
