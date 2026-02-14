import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library Facilities | Digital Library | JKKN Dental College',
  description: 'JKKN Dental College library offers extensive collection of dental textbooks, journals, research papers, e-resources, and digital library facilities for students and faculty.',
  keywords: 'dental library, digital library, dental textbooks, research journals, e-library, dental resources',
};

export default function Library() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            Library
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/library-1.png"
                alt="Dental students in library"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/library-2.png"
                alt="Student reading in library"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/library-3.webp"
                alt="Library interior"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Dental College Library – Your Partner in Dental Excellence
          </p>

          {/* Explore our Comprehensive Dental Collection */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Explore our Comprehensive Dental Collection:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Boasting an extensive array of textbooks, journals, and research papers, our library serves as a treasure trove for dental knowledge. Dive into our collection to enrich your understanding of dental science.</strong>
            </p>
          </div>

          {/* Study Spaces Tailored for Success */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Study Spaces Tailored for Success:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>From quiet reading corners to collaboration zones, we provide a conducive learning environment. Find the perfect space to suit your study needs.</strong>
            </p>
          </div>

          {/* Stay Ahead with Digital Dexterity */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Stay Ahead with Digital Dexterity:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Access state-of-the-art digital resources through our online portal. E-books, e-journals, and multimedia materials keep you abreast of the latest dental advancements.</strong>
            </p>
          </div>

          {/* Expert Assistance & Research Hub */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Expert Assistance & Research Hub:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Our librarians stand ready to support your academic journey. Embark on research projects with literature reviews, data analysis, and citation management.</strong>
            </p>
          </div>

          {/* Engage with Workshops, Seminars & Dental News */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Engage with Workshops, Seminars & Dental News:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Participate in educational workshops and seminars from renowned dental experts. Stay informed with curated news on the latest developments in dentistry.</strong>
            </p>
          </div>

          {/* Community, Collaboration & Personalized Learning */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Community, Collaboration & Personalized Learning:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Connect with like-minded dental enthusiasts and explore personalized learning resources. From visual aids to interactive modules, we make learning engaging.</strong>
            </p>
          </div>

          {/* Relaxation, Reflection & History Exhibit */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Relaxation, Reflection & History Exhibit:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Find solace in our relaxation zone, or explore the evolution of dentistry through our historical exhibit. Appreciate the profession's rich heritage.</strong>
            </p>
          </div>

          {/* Library Membership Benefits */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Library Membership Benefits:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Become a member to enjoy exclusive access to resources, borrowing privileges, and priority registration for workshops.</strong>
            </p>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-700">
              <strong>At the Dental College Library, we are committed to your growth in dental excellence. Explore, learn, collaborate, and contribute to the future of dentistry with us.</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
