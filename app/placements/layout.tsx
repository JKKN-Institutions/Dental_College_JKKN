import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqPageSchema } from '@/lib/faq';
import { dentalOrganizationSchema } from '@/lib/schema/organization';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: { absolute: 'BDS & MDS Placements | JKKN Dental College' },
  description: '93.9% placed or in higher studies (2024-25 batch) at JKKN Dental College. Alumni at Apollo Dental, Clove Dental, NHS UK & govt hospitals. BDS & MDS career guidance.',
  keywords: 'dental college placements Tamil Nadu, BDS placement, MDS placement JKKN, salary after BDS, dental job opportunities, JKKN dental placements',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/placements/',
  },
  openGraph: {
    title: 'BDS & MDS Placements | JKKN Dental College',
    description: '93.9% placed or in higher studies (2024-25 batch) at JKKN Dental College. Alumni at Apollo Dental, Clove Dental, NHS UK & govt hospitals. BDS & MDS career guidance.',
    url: 'https://dental.jkkn.ac.in/placements/',
    siteName: 'JKKN Dental College & Hospital',
    images: [
      {
        url: 'https://dental.jkkn.ac.in/images/BDS-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'BDS & MDS Placements at JKKN Dental College'
      }
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDS & MDS Placements | JKKN Dental College',
    description: '93.9% placed or in higher studies (2024-25 batch) at JKKN Dental College. Alumni at Apollo Dental, Clove Dental, NHS UK & govt hospitals. BDS & MDS career guidance.',
    images: ['https://dental.jkkn.ac.in/images/BDS-hero-image.webp'],
    site: '@jaborejkkn',
  },
};

const faqSchema = faqPageSchema(faqs);


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Placements", "item": "https://dental.jkkn.ac.in/placements/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BDS & MDS Placements | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/placements/",
  "dateModified": "2026-03-26",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-description", "h1", ".faq-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How the Placement Process Works at JKKN Dental College",
  "description": "The Career Development Centre (CDC) at JKKN Dental College follows a structured 5-step placement process to connect graduates with top employers.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Registration & Profile Building", "text": "Learners register with the CDC and build their professional profiles including academic records, clinical experience, and career preferences." },
    { "@type": "HowToStep", "position": 2, "name": "Resume Workshop & Skill Development", "text": "CDC conducts resume writing workshops, soft skills training, and professional development sessions to prepare learners for the job market." },
    { "@type": "HowToStep", "position": 3, "name": "Company Connect & Campus Drives", "text": "CDC organises campus recruitment drives, industry interactions, and connects learners with 25+ recruiting partners including corporate dental chains and hospitals." },
    { "@type": "HowToStep", "position": 4, "name": "Interview Preparation & Mock Sessions", "text": "Dedicated interview preparation with mock interviews, group discussions, and clinical case presentations to build confidence and readiness." },
    { "@type": "HowToStep", "position": 5, "name": "Offer Facilitation & Joining Support", "text": "CDC facilitates offer letters, salary negotiations, and provides joining support including relocation guidance for outstation and international placements." },
  ]
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Recruiters at JKKN Dental College",
  "description": "Leading dental healthcare organisations that recruit from JKKN Dental College & Hospital.",
  "numberOfItems": 14,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Apollo Dental" },
    { "@type": "ListItem", "position": 2, "name": "Clove Dental" },
    { "@type": "ListItem", "position": 3, "name": "Sabka Dentist" },
    { "@type": "ListItem", "position": 4, "name": "MyDentist" },
    { "@type": "ListItem", "position": 5, "name": "Apollo Hospitals" },
    { "@type": "ListItem", "position": 6, "name": "Fortis Healthcare" },
    { "@type": "ListItem", "position": 7, "name": "Manipal Hospitals" },
    { "@type": "ListItem", "position": 8, "name": "Government PHCs & District Hospitals" },
    { "@type": "ListItem", "position": 9, "name": "ESIC Hospitals" },
    { "@type": "ListItem", "position": 10, "name": "NHS UK" },
    { "@type": "ListItem", "position": 11, "name": "Cleveland Clinic Abu Dhabi" },
    { "@type": "ListItem", "position": 12, "name": "Saudi Ministry of Health" },
    { "@type": "ListItem", "position": 13, "name": "Singapore Dental Clinics" },
    { "@type": "ListItem", "position": 14, "name": "ESIC Dental Centres" },
  ]
};

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
