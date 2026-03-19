import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Alumni Network | JKKN Dental College Alumni Association',
  description: 'Join JKKN Dental College Alumni Network. Connect with fellow graduates, attend alumni events, contribute to college development, and stay engaged with your alma mater.',
  keywords: 'alumni network, dental alumni, JKKN alumni, alumni association, dental college alumni',
  openGraph: {
    title: 'Alumni Network | JKKN Dental College Alumni Association',
    description: 'Join JKKN Dental College Alumni Network. Connect with fellow graduates, attend alumni events, contribute to college development, and stay engaged with your alma mater.',
    url: 'https://dental.jkkn.ac.in/alumni/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Alumni() {
  const breadcrumbSchema = generateBreadcrumbSchema('/alumni');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Alumni Network | JKKN Dental College Alumni Association',
    description: 'Join JKKN Dental College Alumni Network. Connect with fellow graduates, attend alumni events, contribute to college development, and stay engaged with your alma mater.',
    url: 'https://dental.jkkn.ac.in/alumni/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBFBEE] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            ALUMNI
          </h1>

          {/* Alumni Logo/Badge */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <Image
                src="/images/alumni-logo.png"
                alt="JKKN Dental College Alumni Association Namaskara"
                width={500}
                height={400}
                className="mx-auto"
              />
              <p className="mt-4 text-sm text-gray-600">
                The Alumni Association of<br />
                J.K.K. Nattraja Dental College
              </p>
            </div>
          </div>

          {/* Association Name */}
          <h2 className="text-xl md:text-2xl font-bold text-[#1B5E20] text-center mb-8">
            JKKN DENTAL COLLEGE ALUMNI ASSOCIATION "NAMASKARA"
          </h2>

          {/* Introduction */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">
              INTRODUCTION:
            </h3>
            <p className="text-base leading-relaxed text-black mb-4">
              Alumni cell of JKKN Dental College & Hospital nurtures a mutually beneficial relationship with the alumni and leverage their expertise and experience for the growth of institution.
            </p>
            <p className="text-base leading-relaxed text-black">
              Alumni association was officially inaugurated in the name "NAMASKARA" by our chairperson and managing director. The association was officially registered as registration act of Tamil Nadu in the name of "NAMASKARA" old students' association in march 2022.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">
              VISION:
            </h3>
            <ul className="space-y-2 text-base text-black">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To promote a goodwill and sense of pride to both alumni and students.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To help and support alumnus develop and spread a philanthropic and entrepreneurial mindset among students.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To advise and conduct activities that shall motivate and upgrade student skill sets, in which both the alumni and the students are benefited.</span>
              </li>
            </ul>
          </div>

          {/* Mission and Goals */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">
              MISSION AND GOALS:
            </h3>
            <ul className="space-y-2 text-base text-black">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Recognize that alumni offer a great diversity of talents, skills and abilities, which should be acknowledged and engaged to benefit the College, the Association and one another.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>The association collects the feedback from the alumni which meets with the demands and standards.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To nurture relationships with current and future alumni.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To coordinate and promote programs that instill good will and provide opportunities for professional growth and social interaction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To mentor and channelize the efforts of the students seeking better opportunities to learn and grow.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To work with university assets to suggest new technologies and improvements that shall benchmark industrial expectations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To associate with the university management in planning and execution of alumni events.</span>
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">
              CORE VALUES:
            </h3>
            <div className="space-y-3 text-base text-black">
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Belonging</span> – We are a welcoming, diverse and inclusive alumni community.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Curiosity</span> – We foster a culture of alumni and friends who champion and inspire lifelong learning and growth.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Excellence</span> – We aim for the extraordinary, recognizing that personal growth and meaningful accomplishment require bold and innovative aspirations, courageous risk-taking, and focused effort.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Flourishing</span> – we promote active engagement in the life of the university through going, giving, and serving.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Integrity</span> – We are honorable, equitable, trustworthy, and committed to the highest ethical standards in all that we do.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Respect</span> – We treat one another with mutual respect, recognizing and upholding each person's inherent dignity and worth.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Service</span> – We engage with alumni and friends both near and far, promoting dedication, commitment, and philanthropy to alma mater and to the greater good.
              </p>
              <p>
                <span className="mr-2">●</span>
                <span className="font-bold">Pride</span> – We are the Alma Mater of the Nation. We celebrate lifelong pride of the alumni community and encourage expressions of pride by our alumni around the world.
              </p>
            </div>
          </div>

          {/* Rules and Responsibilities */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">
              RULES AND RESPONSIBILITIES:
            </h3>
            <p className="text-base font-bold text-black mb-3">
              Our prime focus is to :
            </p>
            <ul className="space-y-2 text-base text-black mb-6">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To promote the interests of the department and the profession.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To organize social events and raise funds, for the organization.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To impart the strategic growth and advancement of higher education programs.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>To Create an alumni-focused recruiting program</span>
              </li>
            </ul>

            <p className="text-base text-black mb-3">
              <span className="font-bold">Brand building</span> – one way for an institute to stand out from the domestic and international competition is by promoting its brand. And an institute's alumni are its best bet.
            </p>
            <p className="text-base text-black">
              <span className="mr-2">●</span>
              <span className="font-bold">Grading and giving back</span> – the race for rankings gains more prominence as more institutions throw their hat into the ring. While factors from infrastructure, quality of faculty, curriculum design and research facilities, are taken into consideration, now alumni success and engagement are also increasingly being given weightage for the additional edge.
            </p>
          </div>

          {/* Alumni Engagement Coordination Committee */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold text-black mb-6">
              Alumni Engagement Coordination Committee
            </h3>

            {/* Committee Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-gray-50">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-3 text-left text-sm md:text-base font-bold text-gray-700">
                      ROLE
                    </th>
                    <th className="border border-gray-400 px-6 py-3 text-left text-sm md:text-base font-bold text-gray-700">
                      PERSON
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                      ADVISORS
                    </td>
                    <td className="border border-gray-400 px-6 py-3 text-sm md:text-base text-gray-600">
                      - MANAGING DIRECTOR-MR. OMMSHARRAVANA<br />
                      - CEO -MR. RANGARAJAN
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                      SPECIAL INVITEE
                    </td>
                    <td className="border border-gray-400 px-6 py-3 text-sm md:text-base text-gray-600">
                      -PRINCIPAL- DR. DHANASEKAR BALAKRISHNAN
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                      COORDINATOR
                    </td>
                    <td className="border border-gray-400 px-6 py-3 text-sm md:text-base text-gray-600">
                      - DR. D. SAI SADAN
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Alumni engagement coordination committee members */}
            <h4 className="text-base md:text-lg font-bold text-[#1B5E20] mb-6">
              Alumni engagement coordination committee members
            </h4>

            {/* Team 1 */}
            <div className="mb-6">
              <p className="text-base font-bold text-black mb-2">
                Team 1- For Career guidance and Mock interview programs
              </p>
              <ul className="text-base text-black space-y-1">
                <li>Dr. Sasikumar</li>
                <li>Dr. Kumaran</li>
                <li>Dr. Deepak</li>
                <li>Dr. Nandhini & Dr. Sowmya</li>
              </ul>
            </div>

            {/* Team 2 */}
            <div className="mb-6">
              <p className="text-base font-bold text-black mb-2">
                Team 2-For clinical skill workshop &amp; Group Mentoring programs
              </p>
              <ul className="text-base text-black space-y-1">
                <li>Dr. Sai sadan</li>
                <li>Dr. Dhivya R</li>
                <li>Dr. Shruthy</li>
                <li>Dr. Venakatesh Praveen</li>
                <li>Dr. Jothilaxmi & Dr. Jenifer</li>
              </ul>
            </div>

            {/* Team 3 */}
            <div className="mb-6">
              <p className="text-base font-bold text-black mb-2">
                Team 3-For Research Collaborations
              </p>
              <ul className="text-base text-black space-y-1">
                <li>Dr. Dinesh Kumar T</li>
                <li>Dr. Chris Susan</li>
                <li>Dr. Santhosh Kumar</li>
                <li>Dr. Jasmine & Dr. Keerthana</li>
              </ul>
            </div>

            {/* Team 4 */}
            <div className="mb-6">
              <p className="text-base font-bold text-black mb-2">
                Team 4- For Alumni Shadowing
              </p>
              <ul className="text-base text-black space-y-1">
                <li>Dr.Saisadan</li>
                <li>Dr.Sasikumar</li>
                <li>Dr.Jayaprakash</li>
                <li>Dr.Muthukumaran & Dr.Harish</li>
              </ul>
            </div>
          </div>

          {/* Alumni Statistics Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    PERIOD
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    NUMBER OF SEATS PER YEAR
                  </th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    TOTAL ALUMNI PASSED OUT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    1987 TO 2005
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    40 SEATS
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    720
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    2006 TO 2007
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    40 — 60 SEATS
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    120
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    2008 TO TILL DATE
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    100 SEATS
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-semibold text-gray-600">
                    1600
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-bold text-gray-700" colSpan={2}>
                    TOTAL
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-sm md:text-base font-bold text-gray-700">
                    2240
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/alumni-association-activities"
              className="bg-[#5CB85C] hover:bg-[#4CAF50] text-white font-bold py-3 px-8 rounded transition-colors duration-300 text-base md:text-lg text-center"
            >
              ALUMNI ASSOCIATION ACTIVITIES
            </a>
            <a
              href="/alumni-registration-certificate"
              className="bg-[#5CB85C] hover:bg-[#4CAF50] text-white font-bold py-3 px-8 rounded transition-colors duration-300 text-base md:text-lg text-center"
            >
              ALUMNI REGISTRATION CERTIFICATE
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section with Three Columns */}
      <div className="bg-[#1B5E20] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: JKKN Dental College & Hospital */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-secondary pb-2">
                JKKN Dental College & Hospital
              </h3>
              <div className="mt-6">
                {/* Map placeholder */}
                <div className="bg-gray-200 h-48 rounded flex items-center justify-center text-gray-600">
                  <p className="text-center text-sm">Google Map<br/>(Komarapalayam)</p>
                </div>
              </div>
            </div>

            {/* Column 2: OUR INSTITUTIONS */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-secondary pb-2">
                OUR INSTITUTIONS
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    JKKN Dental College & Hospital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    JKKN College of Allied Health Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    JKKN College of Pharmacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: CONTACT US */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-secondary pb-2">
                CONTACT US
              </h3>
              <div className="space-y-3 text-sm">
                <p>
                  <span className="font-bold">Call:</span> +91 93458 55001
                </p>
                <p>
                  <span className="font-bold">Email:</span> dental@jkkn.ac.in
                </p>
                <p className="text-xs leading-relaxed">
                  <span className="font-bold">WWW:</span> Dental.jkkn.ac.in | www.jkkn.org
                </p>
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
