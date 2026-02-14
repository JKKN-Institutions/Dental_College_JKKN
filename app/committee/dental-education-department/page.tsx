import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Dental Education Department | JKKN Dental College',
  description: 'Enhancing quality dental education through curriculum development, research integration, and modern teaching methodologies at JKKN.',
  keywords: 'dental education department, curriculum development, dental faculty, educational quality, teaching methodology, JKKN dental college',
};

export default function DentalEducationDepartment() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            DENTAL EDUCATION DEPARTMENT
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-black mb-8 leading-relaxed text-justify">
            The Dental Education Department is a vital entity within dental schools or institutions dedicated to overseeing and enhancing the quality of dental education. Comprising dental faculty, administrators, and sometimes external experts, the committee collaborates to ensure the curriculum aligns with industry standards and educational objectives. It assesses and updates the dental program regularly, integrating advancements in dental research and technology. The committee also reviews teaching methodologies, assessment strategies, and clinical training to promote effective learning and skill development among dental students. By fostering a supportive learning environment and continuously improving the educational experience, the Dental Education Committee aims to produce competent and compassionate dental professionals prepared to meet the challenges of the dental field.
          </p>

          {/* Committee Members */}
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Chairman – Dr. B . Dhanasekar
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Co-Chairman – Dr.B. Sasirekha
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Secretary – Dr.N.S.Naveenraj
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Coordinator – Dr. SaiSadan
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Joint Coordinator – Dr. Vinod Thangasamy
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Executive members :
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Dr. Kumaran
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Dr. Linda Christabel
          </p>
          <p className="text-base text-black font-bold mb-2 leading-relaxed">
            Dr. Swathiraman
          </p>
          <p className="text-base text-black font-bold mb-12 leading-relaxed">
            Dr. Radhika
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
