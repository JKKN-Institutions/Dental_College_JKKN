import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
  description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning in all dental specialties.',
  keywords: 'dental labs, laboratory facilities, preclinical labs, dental equipment, dental training labs',
  openGraph: {
    title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
    description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning in all dental specialties.',
    url: 'https://dental.jkkn.ac.in/facilities/labs/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What lab facilities are available at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College has world-class dental laboratories equipped with cutting-edge technologies. Available labs include: Anatomy, Histology, Radiology and Imaging Labs; Preclinical Simulation and Digital Dentistry Labs (with CAD/CAM technology and lifelike mannequins); Prosthodontics, Restorative, Orthodontics and Endodontics Labs; Periodontics and Oral Surgery Labs; and interdisciplinary collaboration spaces. All labs are DCI approved and designed to provide hands-on clinical training from the first year of the BDS program."
      }
    },
    {
      "@type": "Question",
      "name": "How many dental chairs are there at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital has over 200 dental chairs, providing extensive clinical training capacity for students. The hospital serves 500+ patients daily, giving BDS and MDS students significant hands-on clinical exposure. The hospital also has 100+ beds for inpatient dental and maxillofacial care."
      }
    },
    {
      "@type": "Question",
      "name": "Do students get hands-on clinical training from Year 1 at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College provides clinical exposure from the first year of the BDS program. Students begin with preclinical lab training using simulation mannequins and advanced equipment, progressing to real patient care under faculty supervision in the attached teaching hospital. This early clinical exposure ensures students develop confidence and competence in dental procedures throughout their 5-year BDS program."
      }
    },
    {
      "@type": "Question",
      "name": "What advanced equipment is available in the labs at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College labs are equipped with advanced dental technology including digital X-ray and 3D scanning systems for the radiology lab, CAD/CAM technology for digital dentistry and prosthodontics, simulation mannequins for preclinical practice, microscopic examination equipment for histology, instruments for endodontics, orthodontics, periodontics, and oral surgery training, and research-grade equipment for faculty and student research projects."
      }
    },
    {
      "@type": "Question",
      "name": "Are the labs at JKKN Dental College DCI approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College & Hospital is approved by the Dental Council of India (DCI). All laboratory and clinical facilities meet DCI standards for dental education. The college is affiliated with TN Dr. MGR Medical University and maintains compliance with DCI inspection requirements for both the BDS (100 seats) and MDS programs across 5 specializations."
      }
    }
  ]
};

export default function Labs() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/labs');
  const webPageSchema = generateWebPageSchema({
    title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
    description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning in all dental specialties.',
    url: 'https://dental.jkkn.ac.in/facilities/labs/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
    description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning in all dental specialties.',
    url: 'https://dental.jkkn.ac.in/facilities/labs/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            Labs
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/lab-1.jpg"
                alt="JKKN Dental College preclinical lab with students practicing dental procedures at workbenches"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/lab-2.jpg"
                alt="Dental students working with dental materials and impression trays in JKKN preclinical laboratory"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/lab-3.jpg"
                alt="Faculty demonstrating clinical dental procedure to students at JKKN Dental College lab"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              State-of-the-Art Facilities:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Our world-class dental labs, equipped with cutting-edge technologies, foster a learning environment where innovation and hands-on skills development thrive.</strong>
            </p>
          </div>

          {/* Anatomy, Histology, Radiology & Imaging Labs */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Anatomy, Histology, Radiology & Imaging Labs:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>From exploring the intricate details of oral structures to mastering dental imaging, these labs form the bedrock of clinical expertise. Learn diagnosis and planning through X-rays, 3D scans, and microscopic examinations.</strong>
            </p>
          </div>

          {/* Preclinical Simulation & Digital Dentistry */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Preclinical Simulation & Digital Dentistry:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Perfect dental techniques on lifelike mannequins and embrace CAD/CAM technologies. Gain experience in design, fabrication, and aesthetics through advanced digital tools.</strong>
            </p>
          </div>

          {/* Prosthodontics, Restorative, Orthodontics & Endodontics Labs */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Prosthodontics, Restorative, Orthodontics & Endodontics Labs:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Specialized labs focusing on restorative practices, braces, and root canal therapies provide hands-on opportunities to develop proficiency in restoring smiles and correcting malocclusions.</strong>
            </p>
          </div>

          {/* Periodontics & Oral Surgery Labs */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Periodontics & Oral Surgery Labs:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Venture into periodontal health management and minor surgical procedures. Develop confidence and precision in treatments that enhance oral hygiene and surgical excellence.</strong>
            </p>
          </div>

          {/* Interdisciplinary Collaborations */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Interdisciplinary Collaborations:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Collaborate with peers across dental specialties for a multidisciplinary approach. Simulate real-world scenarios and learn the value of teamwork in complex cases.</strong>
            </p>
          </div>

          {/* Ethical Practices & Infection Control */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Ethical Practices & Infection Control:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Uphold the highest standards of professionalism through ethical practices and stringent infection control measures. Prioritize patient safety and integrity.</strong>
            </p>
          </div>

          {/* Instructor-Guided Learning & Innovative Research */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Instructor-Guided Learning & Innovative Research:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Benefit from our faculty's mentorship and participate in groundbreaking research. Shape the future of dentistry by contributing to advancements in materials, techniques, and treatment modalities.</strong>
            </p>
          </div>

          {/* Join Us at the Dental College Labs */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Join Us at the Dental College Labs:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Blending theory with practice, our labs empower you to become a skilled and compassionate dental professional. Embrace the challenges and emerge as a proficient practitioner, poised to impact oral health positively.</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
