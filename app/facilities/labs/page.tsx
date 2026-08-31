import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Eye, Monitor, Smile, Scissors, Users, ShieldCheck, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/facilities/labs/' },
  title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
  description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning.',
  keywords: 'dental labs, laboratory facilities, preclinical labs, dental equipment, dental training labs',
  openGraph: {
    title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
    description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning.',
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

const features = [
  {
    icon: Eye,
    title: 'Anatomy, Histology, Radiology & Imaging Learning Labs:',
    description: 'From exploring the intricate details of oral structures to mastering dental imaging, these learning labs form the bedrock of clinical expertise. Learn diagnosis and planning through X-rays, 3D scans, and microscopic examinations.',
  },
  {
    icon: Monitor,
    title: 'Preclinical Simulation & Digital Dentistry:',
    description: 'Perfect dental techniques on lifelike mannequins and embrace CAD/CAM technologies. Gain experience in design, fabrication, and aesthetics through advanced digital tools.',
  },
  {
    icon: Smile,
    title: 'Prosthodontics, Restorative, Orthodontics & Endodontics Learning Labs:',
    description: 'Specialized learning labs focusing on restorative practices, braces, and root canal therapies provide hands-on opportunities to develop proficiency in restoring smiles and correcting malocclusions.',
  },
  {
    icon: Scissors,
    title: 'Periodontics & Oral Surgery Learning Labs:',
    description: 'Venture into periodontal health management and minor surgical procedures. Develop confidence and precision in treatments that enhance oral hygiene and surgical excellence.',
  },
  {
    icon: Users,
    title: 'Interdisciplinary Collaborations:',
    description: 'Collaborate with peers across dental specialties for a multidisciplinary approach. Simulate real-world scenarios and learn the value of teamwork in complex cases.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Practices & Infection Control:',
    description: 'Uphold the highest standards of professionalism through ethical practices and stringent infection control measures. Prioritize patient safety and integrity.',
  },
  {
    icon: BookOpen,
    title: 'Senior Learner-Guided Learning & Innovative Research:',
    description: "Benefit from our senior learners' mentorship and participate in groundbreaking research. Shape the future of dentistry by contributing to advancements in materials, techniques, and treatment modalities.",
  },
];

export default function Labs() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/labs');
  const webPageSchema = generateWebPageSchema({
    title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
    description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning.',
    url: 'https://dental.jkkn.ac.in/facilities/labs/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Laboratory Facilities | Modern Dental Labs | JKKN Dental',
    description: 'State-of-the-art dental laboratories at JKKN Dental College with advanced equipment for preclinical training, research, and hands-on learning.',
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

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Labs
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/lab-1.webp"
                alt="JKKN Dental College preclinical lab with students practicing dental procedures at workbenches"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/lab-2.webp"
                alt="Dental students working with dental materials and impression trays in JKKN preclinical laboratory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/lab-3.webp"
                alt="Faculty demonstrating clinical dental procedure to students at JKKN Dental College lab"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro — State-of-the-Art Facilities */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#006837] mb-3">State-of-the-Art Facilities:</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            <strong>Our world-class dental learning labs, equipped with cutting-edge technologies, foster a learning environment where innovation and hands-on skills development thrive.</strong>
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#006837]">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed"><strong>{description}</strong></p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-4">Join Us at the Dental College Learning Labs:</h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            <strong>Blending theory with practice, our learning labs empower you to become a skilled and compassionate dental professional. Embrace the challenges and emerge as a proficient practitioner, poised to impact oral health positively.</strong>
          </p>
        </div>
      </section>

      <FaqAccordion schema={faqSchema} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
