import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Phone } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Institution\'s Innovation Council (IIC) | JKKN Dental College',
  description: 'MIC-AICTE supported innovation council fostering entrepreneurship, IPR, and startup culture in dental education at JKKN Dental College.',
  keywords: 'Innovation Council, IIC, dental entrepreneurship, startup culture, IPR, AICTE innovation, Ministry of Education, dental innovation',
  openGraph: {
    title: 'Institution\'s Innovation Council (IIC) | JKKN Dental College',
    description: 'MIC-AICTE supported innovation council fostering entrepreneurship, IPR, and startup culture in dental education at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/research/institutions-innovation-council-iic/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function InstitutionsInnovationCouncilIIC() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: "Institution's Innovation Council (IIC) | JKKN Dental College",
    description: 'MIC-AICTE supported innovation council fostering entrepreneurship, IPR, and startup culture in dental education at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/research/institutions-innovation-council-iic/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'IIC', url: 'https://dental.jkkn.ac.in/research/institutions-innovation-council-iic/' },
      ]} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>INSTITUTION'S INNOVATION COUNCIL ( IIC )</span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            INSTITUTION'S INNOVATION COUNCIL ( IIC )
          </h1>

          {/* Certificate Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-3xl bg-white border-4 border-[#D4A574] p-8 rounded shadow-lg">
              <img
                src="/images/INSTITUTIONS-INNOVATION-COUNCIL.png"
                alt="IIC Certificate of Establishment"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* About IIC */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            About IIC
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            In the academic year 2021-22, JKKN Dental College & Hospital established the Institution's Innovation Council (IIC) under the guidance of the Ministry of Education's Innovation Cell (MIC) in collaboration with AICTE. The IIC at JKKN aims to systematically foster a culture of innovation and entrepreneurship within the institution by engaging faculty, students, and staff in various activities such as ideation, problem-solving, Proof of Concept development, Design
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            Thinking, Intellectual Property Rights (IPR), and project management at the Pre- incubation/Incubation stage. By integrating these initiatives, the IIC model at JKKN Dental
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            College & Hospital strives to create a robust innovation ecosystem, addressing challenges in dental education and research while promoting start-up culture among students and faculty.
          </p>

          {/* Vision of IIC */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            VISION OF IIC
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Foster Innovation Culture –</span> To cultivate a dynamic environment that encourages creativity, research, and innovation in dental education and healthcare.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Promote Entrepreneurship –</span> To nurture entrepreneurial thinking among students and faculty, enabling them to develop innovative healthcare solutions and dental start-ups.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Encourage Research & Development –</span> To support research-driven problem-solving in dentistry and allied health sciences, addressing real-world challenges.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Enhance Industry Collaboration –</span> To establish strong partnerships with industries, research organizations, and incubation centers to facilitate technology transfer and commercialization of ideas.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Support Intellectual Property & Start-ups –</span> To guide students and faculty in patenting innovations, protecting intellectual property, and transforming ideas into viable business ventures.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Strengthen Pre-incubation & Incubation Activities –</span> To provide necessary mentorship, infrastructure, and funding support for budding innovators and start-ups.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Contribute to Societal Impact –</span> To develop innovative dental solutions that improve oral healthcare access, affordability, and quality for the community.
            </p>
          </div>

          {/* Trained Human Resources */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            TRAINED HUMAN RESOURCES ON IIC
          </h2>

          {/* Trained Human Resources Image */}
          <div className="mb-12 flex justify-center">
            <div className="w-full">
              <img
                src="/images/TRAINED-HUMAN-RESOURCES-ON-IIC.png"
                alt="Trained Human Resources on IIC"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Learning Modules */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            LEARNING MODULES
          </h2>

          {/* Learning Modules Image Placeholder */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <img
                src="/images/LEARNING-MODULES.png"
                alt="Learning Modules - Innovation Council Activities"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Join the Future Section */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Join the Future of Dental Innovation with IIC - JKKN Dental College & Hospital!
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            Are you a student, researcher, or aspiring entrepreneur passionate about transforming dental healthcare? The Institution's Innovation Council (IIC) at JKKN Dental College & Hospital is your gateway to innovation and success. We invite you to collaborate, ideate, and innovate, turning visionary ideas into impactful solutions that redefine the future of dentistry and oral healthcare.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            Be a part of our thriving innovation and startup ecosystem—where research meets entrepreneurship, and ideas turn into reality!
          </p>

          {/* Contact Information */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Explore, Learn, and Build Your Future with JKKN
          </h3>

          <div className="text-gray-700 mb-2 leading-relaxed">
            📍 <span className="font-semibold">Location:</span> JKKN Dental College & Hospital, Natarajapuram, NH-544 (Salem to Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu – 638183.
          </div>

          <div className="text-gray-700 mb-2 leading-relaxed">
            <Phone className="w-5 h-5 inline-block mr-1" /> <span className="font-semibold">Contact:</span> Dr.Radhika, 7708611112
          </div>

          <div className="text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold">E mail:</span> dental@jkkn.ac.in
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Join us in revolutionizing the world of dentistry through education, research, and innovation ventures!
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <a
              href="/pdf/IIC-APPRECIATION-LETTER.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              IIC APPRECIATION LETTER
            </a>
            <a
              href="/pdf/IIC-PROGRAMS-AND-ACTIVITIES.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              PROGRAMS AND ACTIVITIES
            </a>
            <a
              href="/pdf/INNOVATION-AND-ENTREPREUNERSHIP-AWARDS-IIC.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              INNOVATION AND ENTREPREUNERSHIP AWARDS
            </a>
          </div>

          <div className="mb-12">
            <a
              href="/pdf/IIC-PROGRAMS-AND-ACTIVITIES.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center max-w-xs"
            >
              PROGRAMS AND ACTIVITIES
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
