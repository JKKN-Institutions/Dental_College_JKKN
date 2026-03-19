import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

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

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            PATIENT WELFARE COMMITTEE
          </h1>

          {/* Committee Members List */}
          <p className="text-base text-black mb-3 leading-relaxed">
            1 .Convener – Principal- Prof.Dr.Elancheziyan (Chair)
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            2. Vice Principal- Prof.Dr.B.Sasirekha
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            3.Dr. Naveen Raj
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            5.Dr.Santosh
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            6. Dr.Thangammani Ammal
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            T.Student members- I.Mr.Mohammed Mufa
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            2.Dr.Surya.A.S
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            3.Mrs.Shivee Sankari
          </p>
          <p className="text-base text-black mb-12 leading-relaxed">
            4..Dr.Bharathi
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
