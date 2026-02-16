import Header from '@/components/Header';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Hero from '@/components/Hero';
import AboutInstitution from '@/components/AboutInstitution';
import AIIntegration from '@/components/AIIntegration';
import AcademicPrograms from '@/components/AcademicPrograms';
import Infrastructure from '@/components/Infrastructure';
import WhyChooseJKKN from '@/components/WhyChooseJKKN';
import AdmissionsSection from '@/components/AdmissionsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Dental College in Tamilnadu | JKKN Dental College',
  description: 'JKKN Dental College & Hospital is one of the best dental colleges in Tamilnadu. DCI approved with excellent placements, modern labs & attached hospital.',
  keywords: 'best dental college in tamilnadu, private dental colleges in tamilnadu, top 10 dental colleges in tamilnadu, top dental colleges in tamilnadu, list of dental colleges in tamilnadu, self financing dental colleges in tamilnadu, list of private dental colleges in tamilnadu',
  openGraph: {
    title: 'Best Dental College in Tamilnadu | JKKN Dental College',
    description: 'JKKN Dental College & Hospital is one of the best dental colleges in Tamilnadu. DCI approved with excellent placements, modern labs & attached hospital.',
    url: 'https://dental.jkkn.ac.in',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: '/images/dental-logo.png',
        width: 1200,
        height: 630,
        alt: 'Best Dental College in Tamilnadu - JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental College in Tamilnadu | JKKN Dental College',
    description: 'JKKN Dental College & Hospital is one of the best dental colleges in Tamilnadu. DCI approved with excellent placements, modern labs & attached hospital.',
    images: ['/images/dental-logo.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  // College/University Schema
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "JKKN Dental College & Hospital",
    "alternateName": "J.K.K. Nattraja Dental College & Hospital",
    "url": "https://dental.jkkn.ac.in",
    "logo": "https://dental.jkkn.ac.in/images/dental-logo.png",
    "description": "India's 1st Human-AI AGI Dental Campus - DCI approved & NAAC A grade accredited dental college offering BDS & MDS programmes with advanced AI integration",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nattrajapuram, NH-544 (Salem To Coimbatore National Highway)",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    },
    "telephone": "+91 93458 55001",
    "email": "dental@jkkn.ac.in",
    "foundingDate": "1987",
    "knowsAbout": [
      "Artificial Intelligence in Dental Education",
      "AI-Powered Diagnostic Imaging",
      "ChatGPT for Dental Research",
      "CAD/CAM Technology",
      "Digital Dentistry",
      "AI-Enhanced Clinical Training"
    ],
    "award": [
      "India's 1st Human-AI AGI Dental Campus",
      "NAAC A Grade Accreditation"
    ],
    "hasCredential": [
      "Dental Council of India (DCI) Approved",
      "Affiliated to The Tamil Nadu Dr. M.G.R. Medical University"
    ],
    "sameAs": [
      "https://www.facebook.com/jkkndentalcollege",
      "https://www.instagram.com/jkkndental",
      "https://www.linkedin.com/company/jkkn-dental"
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses are offered at JKKN Dental College & Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College & Hospital offers BDS (Bachelor of Dental Surgery) - a 5-year undergraduate program with comprehensive training across 9 departments including Oral Surgery, Orthodontics, Periodontics, Prosthodontics, Conservative Dentistry, Pedodontics, Oral Medicine, Oral Pathology, and Public Health Dentistry. We also offer MDS (Master of Dental Surgery) postgraduate programs in 5 specializations: Conservative Dentistry & Endodontics, Prosthodontics, Periodontics, Oral Medicine & Radiology, and Orthodontics & Dentofacial Orthopedics."
        }
      },
      {
        "@type": "Question",
        "name": "Is JKKN Dental College & Hospital DCI approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN Dental College & Hospital is fully approved by the Dental Council of India (DCI) and National Medical Commission (NMC). The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and NAAC accredited."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for BDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BDS admission is based on NEET-UG scores through state or All India Quota counseling. Candidates need 10+2 with Physics, Chemistry, and Biology with minimum 50% marks (40% for reserved categories). After counseling allocation, complete document verification and fee payment."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities does JKKN Dental College offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our campus features a 200+ chair dental hospital treating 500+ patients daily, digital simulation labs, CBCT and OPG imaging, CAD/CAM laboratory, library with e-resources, research labs, separate hostels, cafeteria, sports facilities, and 24/7 Wi-Fi."
        }
      },
      {
        "@type": "Question",
        "name": "What is the placement record?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College & Hospital provides 100% placement assistance. Alumni work at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and private practices. Many pursue higher studies abroad or establish their own clinics."
        }
      },
      {
        "@type": "Question",
        "name": "What makes JKKN different from other dental colleges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN stands out as India's 1st Human-AI AGI Dental Campus, integrating advanced AI tools like ChatGPT, AI-powered diagnostic imaging, and CAD/CAM technology into dental education. Combined with 57+ years of educational legacy (JKKN Group founded 1969), exceptional clinical exposure (500+ daily patients), state-of-the-art infrastructure, and comprehensive placement support, JKKN prepares future-ready dental professionals with expertise in both clinical excellence and AI technology."
        }
      },
      {
        "@type": "Question",
        "name": "How does JKKN integrate AI in dental education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College is India's 1st Human-AI AGI Dental Campus. Students use ChatGPT and AI tools for research, case studies, and personalized learning. The campus features AI-powered diagnostic imaging (CBCT, OPG), CAD/CAM technology for precision dental restorations, AI-enhanced clinical training, and data analytics for research. AI courses are integrated into both BDS and MDS curriculum, ensuring graduates are equipped with cutting-edge technological expertise alongside clinical skills."
        }
      }
    ]
  };

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={collegeSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <Hero />
      <AboutInstitution />
      {/* <AIIntegration /> */}
      <AcademicPrograms />
      <Infrastructure />
      <WhyChooseJKKN />
      <AdmissionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
