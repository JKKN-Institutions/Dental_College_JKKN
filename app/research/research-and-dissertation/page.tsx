import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Research and Dissertation | JKKN Dental College',
  description: 'Comprehensive research and dissertation programs fostering academic excellence and scientific advancement in dental education at JKKN.',
  keywords: 'dental research, dissertation programs, MDS research, academic research, dental thesis, postgraduate research, JKKN Dental College',
  openGraph: {
    title: 'Research and Dissertation | JKKN Dental College',
    description: 'Comprehensive research and dissertation programs fostering academic excellence and scientific advancement in dental education at JKKN.',
    url: 'https://dental.jkkn.ac.in/research/research-and-dissertation/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ResearchAndDissertation() {
  notFound();
}
