import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generatePageMetadata, generateBreadcrumbSchema, generateContactPageSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { MessageCircle } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Contact Us | JKKN Dental College & Hospital, Komarapalayam',
  description: 'Contact JKKN Dental College & Hospital in Komarapalayam. Phone: +91 93458 55001, Email: dental@jkkn.ac.in. Get admission details, visit campus, or schedule a consultation.',
  keywords: 'contact JKKN Dental, dental college contact, admission enquiry, Komarapalayam dental college address, directions to JKKN Dental',
  canonicalPath: '/contact',
  datePublished: '2024-01-15',
  dateModified: '2025-02-13'
});

export default function Contact() {
  // Generate structured data for this page
  const breadcrumbSchema = generateBreadcrumbSchema('/contact');
  const contactPageSchema = generateContactPageSchema();
  const webPageSchema = generateWebPageSchema({
    title: 'Contact JKKN Dental College & Hospital',
    description: 'Contact information, location, and visiting hours for JKKN Dental College & Hospital in Komarapalayam, Tamil Nadu.',
    url: 'https://dental.jkkn.ac.in/contact',
    datePublished: '2024-01-15',
    dateModified: '2025-02-13'
  });

  // Schema #4e: BreadcrumbList – /contact Page
  const contactBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://dental.jkkn.ac.in/contact/" }
    ]
  };
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Contact Us | JKKN Dental College & Hospital, Komarapalayam',
    description: 'Contact JKKN Dental College & Hospital in Komarapalayam. Phone: +91 93458 55001, Email: dental@jkkn.ac.in. Get admission details, visit campus, or schedule a consultation.',
    url: 'https://dental.jkkn.ac.in/contact/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={contactPageSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={contactBreadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6 sm:mb-8">
            Contact Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-4xl">
            Have questions about admissions, courses, or campus facilities? We're here to help! JKKN Dental College & Hospital welcomes prospective students, parents, and visitors. Reach out to us through any of the contact methods below or visit our campus in Komarapalayam, Tamil Nadu.
          </p>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
            {/* Main Office */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#1B5E20]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Main Office</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+919345855001" className="text-[#1B5E20] hover:underline">+91 93458 55001</a></p>
              <p className="text-sm sm:text-base text-gray-600"><span className="font-semibold">Email:</span> <a href="mailto:dental@jkkn.ac.in" className="text-[#1B5E20] hover:underline break-all">dental@jkkn.ac.in</a></p>
            </div>

            {/* Admissions Office */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#5FA866]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#5FA866]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Admissions</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+919345855001" className="text-[#1B5E20] hover:underline">+91 93458 55001</a></p>
              <p className="text-sm sm:text-base text-gray-600"><span className="font-semibold">Email:</span> <a href="mailto:admissions@jkkn.ac.in" className="text-[#1B5E20] hover:underline break-all">admissions@jkkn.ac.in</a></p>
            </div>

            {/* Hospital Reception */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#7cb983]">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Hospital & Patient Care</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+919345855002" className="text-[#1B5E20] hover:underline">+91 93458 55002</a></p>
              <p className="text-sm sm:text-base text-gray-600"><span className="font-semibold">Email:</span> <a href="mailto:hospital@jkkn.ac.in" className="text-[#1B5E20] hover:underline break-all">hospital@jkkn.ac.in</a></p>
            </div>
          </div>

          {/* Campus Address & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            {/* Address Section */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4 sm:mb-6 border-b-4 border-[#1B5E20] inline-block pb-1">
                Campus Location
              </h2>

              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-8 h-8 text-[#1B5E20] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">JKKN Dental College & Hospital</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Natarajapuram,<br />
                      NH-544 (Salem to Coimbatore National Highway),<br />
                      Komarapalayam (TK), Namakkal (DT),<br />
                      Tamil Nadu - 638183, India
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5FA866]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    Visiting Hours
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-gray-700">
                    <p><span className="font-semibold">Office Hours:</span> Monday - Saturday, 9:00 AM - 5:00 PM</p>
                    <p><span className="font-semibold">Hospital OPD:</span> Monday - Saturday, 9:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Emergency:</span> 24/7 Available</p>
                    <p><span className="font-semibold">Closed:</span> Sundays and Public Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4 sm:mb-6 border-b-4 border-[#1B5E20] inline-block pb-1">
                Find Us on Map
              </h2>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md h-[350px] sm:h-[400px] lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4567890123456!2d77.5654321!3d11.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzA0LjQiTiA3N8KwMzMnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JKKN Dental College Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <a
                  href="https://maps.google.com/?q=JKKN+Dental+College+Komarapalayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B5E20] hover:underline font-semibold"
                >
                  Open in Google Maps →
                </a>
              </p>
            </div>
          </div>

          {/* How to Reach */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6 sm:mb-8 border-b-4 border-[#1B5E20] inline-block pb-1">
              How to Reach JKKN Dental College
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* By Air */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#1B5E20]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                  <h3 className="text-lg font-bold text-gray-800">By Air</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">Nearest Airport:</span> Coimbatore International Airport (75 km, ~1.5 hours)<br />
                  <span className="font-semibold">Alternative:</span> Salem Airport (45 km, ~1 hour)
                </p>
              </div>

              {/* By Train */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#1B5E20]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 4.96.48 5.57 1H6.43c.61-.52 2.06-1 5.57-1zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7H6V7h12v3z"/>
                  </svg>
                  <h3 className="text-lg font-bold text-gray-800">By Train</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">Nearest Railway Station:</span> Erode Junction (25 km, ~30 minutes)<br />
                  <span className="font-semibold">Alternative:</span> Salem Junction (50 km, ~1 hour)
                </p>
              </div>

              {/* By Road */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#1B5E20]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                  <h3 className="text-lg font-bold text-gray-800">By Road</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Located on <span className="font-semibold">NH-544</span> (Salem-Coimbatore Highway). Well-connected by bus from Salem, Erode, Coimbatore, and nearby towns. <span className="font-semibold">Landmark:</span> Near Komarapalayam Bus Stand (3 km)
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Parking & Campus Access */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4 sm:mb-6 border-b-4 border-[#1B5E20] inline-block pb-1">
                Parking & Campus Access
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#5FA866] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span><span className="font-semibold">Ample Parking:</span> Spacious parking available for cars, two-wheelers, and buses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#5FA866] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span><span className="font-semibold">Security:</span> 24/7 campus security with visitor registration at main gate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#5FA866] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span><span className="font-semibold">Accessibility:</span> Wheelchair accessible campus with ramps and elevators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#5FA866] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span><span className="font-semibold">Campus Tours:</span> Guided tours available on weekdays (prior appointment recommended)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Online Admission */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4 sm:mb-6 border-b-4 border-[#1B5E20] inline-block pb-1">
                Apply Online
              </h2>
              <div className="bg-gradient-to-br from-[#1B5E20] to-[#145018] p-8 rounded-xl shadow-lg mt-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Start Your Dental Career Journey</h3>
                <p className="text-sm sm:text-base mb-6 leading-relaxed">
                  Ready to join JKKN Dental College? Apply online for BDS and MDS programs. Our admission team will guide you through the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                    className="inline-flex items-center justify-center bg-white hover:bg-gray-100 active:bg-gray-200 text-[#1B5E20] font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-300 shadow-md min-h-[44px] touch-manipulation"
                  >
                    Apply Now →
                  </a>
                  <a
                    href="tel: +91 93458 55001"
                    className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-[#1B5E20] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-300 min-h-[44px] touch-manipulation"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 inline-block" /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Note */}
          <div className="mt-10 sm:mt-12 md:mt-16 bg-[#D4E8D4] p-6 sm:p-8 rounded-xl">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
              <span className="font-bold text-[#1B5E20]">Need Immediate Assistance?</span> Call us at <a href="tel:+919345855001" className="text-[#1B5E20] font-bold hover:underline">+91 93458 55001</a> or email <a href="mailto:dental@jkkn.ac.in" className="text-[#1B5E20] font-bold hover:underline">dental@jkkn.ac.in</a>. Our team is ready to answer your questions about admissions, courses, campus facilities, or any other inquiries.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
