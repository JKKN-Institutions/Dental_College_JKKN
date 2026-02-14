import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campus Gallery | JKKN Dental College & Hospital Photos',
  description: 'Explore JKKN Dental College campus through our photo gallery. View our modern infrastructure, clinical facilities, laboratories, classrooms, library, and student activities.',
  keywords: 'JKKN campus photos, dental college gallery, campus facilities, infrastructure photos',
};

export default function Gallery() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8 sm:mb-10 md:mb-12">
            GALLERY
          </h1>

          {/* Gallery Grid */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Pongal Celebration */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Pongal Celebration
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Pongal-Celebration-gallery.jpg"
                    alt="Pongal Celebration"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Farewell Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Farewell Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Farewell-Day-gallery.webp"
                    alt="Farewell Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founders Day 2022 */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Founders Day 2022
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Founders-Day-2022-gallery.jpg"
                    alt="Founders Day 2022"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Blood Camp */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Blood Camp
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Blood-Camp-gallery.webp"
                    alt="Blood Camp"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* World Hemophilia Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  World Hemophilia Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/World-Hemophilia-Day-gallery.jpg"
                    alt="World Hemophilia Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* World No Tobacco Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  World No Tobacco Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/World-No-Tobacco-Day-gallery.webp"
                    alt="World No Tobacco Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* World Oral Health Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  World Oral Health Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/World-Oral-Health-Day-gallery.webp"
                    alt="World Oral Health Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stem Cell */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Stem Cell
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Stem-cell-gallery.webp"
                    alt="Stem Cell"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 35th College Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  35th College Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/35th-College-Day-gallery.webp"
                    alt="35th College Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* ANTI RAGGING SEMINAR */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  ANTI RAGGING SEMINAR
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ANTI-RAGGING-SEMINAR-gallery.webp"
                    alt="ANTI RAGGING SEMINAR"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 26th Graduation Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  26th Graduation Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/26th-Graduation-Day-gallery.webp"
                    alt="26th Graduation Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Basic Of Cancer and Awareness */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Basic Of Cancer and Awareness
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Basic-Of-Cancer-and-Awareness-gallery.webp"
                    alt="Basic Of Cancer and Awareness"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Fire and safety */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Fire and safety
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Fire-and-safety-gallery.webp"
                    alt="Fire and safety"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Prosthodontist Day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Prosthodontist Day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Prosthodontist-Day-gallery.webp"
                    alt="Prosthodontist Day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Yoga day */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B5E20] mb-3 sm:mb-4">
                  Yoga day
                </h2>
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Yoga-day-gallery.webp"
                    alt="Yoga day"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
