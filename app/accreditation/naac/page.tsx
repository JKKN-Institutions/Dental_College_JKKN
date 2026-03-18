'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function NAAC() {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Over View' },
    { id: 'vision-mission', label: 'Vision and Mission' },
    { id: 'core-values', label: 'Core Values' },
    { id: 'assessment', label: 'Assessment And Accreditation' },
    { id: 'extended-profile', label: 'extended profile' },
    { id: 'criterion-i', label: 'Criterion I' },
    { id: 'criterion-ii', label: 'Criterion II' },
    { id: 'criterion-iii', label: 'Criterion III' },
    { id: 'criterion-iv', label: 'Criterion IV' },
    { id: 'criterion-v', label: 'Criterion V' },
    { id: 'criterion-vi', label: 'Criterion VI' },
    { id: 'criterion-vii', label: 'Criterion VII' },
    { id: 'part-b', label: 'PART-B DENTAL' },
    { id: 'dvv', label: 'DVV' },
    { id: 'ssr', label: 'SSR' },
  ];

  return (
    <main className="overflow-x-hidden w-full">
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Accreditation', url: 'https://dental.jkkn.ac.in/accreditation/' },
        { name: 'NAAC', url: 'https://dental.jkkn.ac.in/accreditation/naac/' },
      ]} />
      <Header />

      <div className="bg-white py-8 px-4">
        {/* Page Title */}
        <div className="max-w-7xl mx-auto mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B5E20]">
            OVER VIEW
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white overflow-hidden">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-6 py-4 font-bold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gray-400 text-white'
                        : 'bg-[#89B54C] text-white hover:bg-[#7aa03d]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white">
              {activeSection === 'overview' && (
                <div>
                  {/* Introduction Section */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      INTRODUCTION
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <button className="bg-[#1B5E20] hover:bg-[#145018] text-white font-bold py-3 px-6 rounded transition-all duration-300">
                        Best practice 1-Rural Smiles
                      </button>
                      <button className="bg-[#1B5E20] hover:bg-[#145018] text-white font-bold py-3 px-6 rounded transition-all duration-300">
                        Best practice 2-Lead JKKN
                      </button>
                      <button className="bg-[#1B5E20] hover:bg-[#145018] text-white font-bold py-3 px-6 rounded transition-all duration-300">
                        Institutional Distinctiveness
                      </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-gray-800 leading-relaxed text-justify">
                      <p>
                        India has one of the largest and most diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of higher education. To address these Mconcerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies and advocated the establishment of an independent National Accreditation Agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is to make quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).
                      </p>

                      <p>
                        The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers, and senior academicians from a cross-section of the Indian higher education system. The Chairperson of the UGC is the President of the
                      </p>

                      <p>
                        GC of the NAAC and the Chairperson of the EC is an eminent academician nominated by the president of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member-secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities, the NAAC is advised by the advisory and consultative committees constituted from time to time.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'vision-mission' && (
                <div>
                  {/* Vision and Mission Section */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">
                      Vision and Mission
                    </h2>

                    {/* Content */}
                    <div className="space-y-6 text-gray-800 leading-relaxed">
                      <p className="text-justify">
                        The vision of NAAC is: To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion and sustenance initiatives. The mission statements of the NAAC aim at translating the NAAC's vision into action plans and define NAAC's engagement and endeavor as given below:
                      </p>

                      {/* Bulleted List */}
                      <ul className="list-none space-y-4 ml-6">
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            To arrange for periodic assessment and accreditation of Institutions of Higher Education or units thereof, or specific academic programmes or projects;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            To stimulate the academic environment for promotion of quality in teaching-learning and research in Higher Education Institutions;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            To encourage self-evaluation, accountability, autonomy and innovations in Higher Education;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            To undertake quality-related research studies, consultancy and training programmes, and To collaborate with other stakeholders of higher education for quality evaluation, promotion and sustenance.
                          </span>
                        </li>
                      </ul>

                      <p className="text-justify">
                        Striving to achieve its goals as guided by its vision and mission statements, NAAC primarily focuses on assessment of the quality of Higher Education Institutions in the country. The NAAC methodology for Assessment and Accreditation is very much similar to that followed by Quality Assurance (QA) agencies across the world and consists of self-assessment by the Institution along with external peer assessment organized by NAAC.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'core-values' && (
                <div>
                  {/* Core Values Section */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      core value
                    </h2>

                    {/* Content */}
                    <div className="space-y-6 text-gray-800 leading-relaxed">
                      <p className="text-justify">
                        Throughout the world, Higher Education Institutions (HEIs) function in a dynamic environment. The need to expand the system of higher education, the impact of technology on the educational delivery, the increasing private participation in higher education and the impact of globalization (including liberal cross-border and trans-national educational imperatives), have necessitated marked changes in the Indian higher education system. These changes and the consequent shift in values have been taken into cognizance by NAAC while formulating the core values. Accordingly, in order to ensure external and internal validity and credibility, the QA process of NAAC is grounded within a value framework which is suitable and appropriate to the National context.
                      </p>

                      <p className="text-justify">
                        The accreditation framework of NAAC is thus based on five core values detailed below.
                      </p>

                      {/* Core Value 1 */}
                      <div>
                        <h3 className="font-bold text-black mb-3">(i) Contributing to National Development:</h3>
                        <p className="text-justify">
                          Most of the HEIs have a capacity to adapt to changes and at the same time, pursue the goals and objectives that they have set forth for themselves. Contributing to national development has always been an implicit goal of Indian HEIs. The role of HEIs is significant in human resource development and capacity building of individuals, to cater to the needs of the economy, society and the country as a whole, thereby, contributing to the development of the Nation. Serving the cause of social justice, ensuring equity and increasing access to higher education are a few ways by which HEIs can contribute to the national development. It is therefore appropriate that the Assessment and Accreditation (A&A) process of NAAC looks into the ways HEIs have been responding to and contributing towards National Development.
                        </p>
                      </div>

                      {/* Core Value 2 */}
                      <div>
                        <h3 className="font-bold text-black mb-3">(ii) Fostering Global Competencies among Students:</h3>
                        <p className="text-justify">
                          The spiraling developments at the global level also warrant that the NAAC includes in its scope of assessment skill development of students, on par with their counterparts elsewhere in the world. With liberalization and globalization of economic activities, the need to develop skilled human resources of a high caliber is imperative. Consequently, the demand for internationally acceptable standards in higher education is evident. Therefore, the accreditation process of NAAC needs to examine the role of HEIs in preparing the students to achieve core competencies, to face the global challenges successfully. This requires that the HEIs be innovative, creative and entrepreneurial in their approach. Towards achieving this, HEIs may establish collaborations with industries, network with the neighborhood agencies/bodies and foster a closer relationship between the "world of competent-learning" and the "world of skilled work".
                        </p>
                      </div>

                      {/* Core Value 3 */}
                      <div>
                        <h3 className="font-bold text-black mb-3">(iii) Inculcating a Value System among Students:</h3>
                        <p className="text-justify">
                          Although skill development is crucial to the success of students in the job market, skills are of less value in the absence of appropriate value systems. The HEIs have to shoulder the responsibility of inculcating desirable value systems among students. In a country like India, with cultural pluralities and diversities, it is essential that students imbibe the appropriate values commensurate with social, cultural, economic and environmental realities, at the local, national and universal levels. Whatever be the pluralities and diversities that exist in the country, there is a persisting concern for inculcating the core universal values like truth and righteousness apart from other values emphasized in the various policy documents of the country. The seeds of values such as cooperation and mutual understanding during the early stages of education have to be reiterated and re emphasized at the higher education also through appropriate learning experiences and opportunities. The NAAC assessment therefore examines how these essential and desirable values are being inculcated in the students, by the HEIs.
                        </p>
                      </div>

                      {/* Core Value 4 */}
                      <div>
                        <h3 className="font-bold text-black mb-3">(iv) Promoting the Use of Technology:</h3>
                        <p className="text-justify">
                          Most of the significant developments that one can observe today can be attributed to the impact of Science and Technology. While the advantages of using modern tools and technological innovations in the day-to-day-life are well recognized, the corresponding changes in the use of new technologies, for teaching learning and governance of HEIs is an ongoing process. Technological advancement and innovations in educational transactions have to be undertaken by all HEIs, to make a visible impact on academic development as well as administration. At a time when our educational institutions are expected to perform as good as their global partners, significant technological innovations have to be adopted. Traditional methods of delivering higher education have become less motivating to a large number of students. To keep pace with the developments in other spheres of human endeavor, HEIs have to enrich the learning experiences of their students by providing them with state-of-the-art educational technologies. The campus community must be adequately prepared to make use of Information and Communication Technology (ICT) optimally. Conscious effort is also needed to invest in hardware and to orient the faculty suitably. In addition to using technology as a learning resource, managing the activities of the institution in a technology-enabled way will ensure effective institutional functioning. For example, documentation and data management in the HEIs are areas where the process of assessment by NAAC has made a significant impact. Moving towards electronic data management and having institutional website to provide ready and relevant information to stakeholders are desirable steps in this direction. In other words, effective use of ICT in HEIs will be able to provide ICT literacy to the campus community, using ICT for resource sharing and networking, as well as adoptingICT-enabled administrative processes. Therefore, NAAC accreditation would look at how the HEIs have put in place their electronic data management systems and electronic resources and their access to  internal and external stakeholders particularly the student community.
                        </p>
                      </div>

                      {/* Core Value 5 */}
                      <div>
                        <h3 className="font-bold text-black mb-3">(v) Quest for Excellence:</h3>
                        <p className="text-justify">
                          Contributing to nation-building and skills development of students, HEIs should demonstrate a drive to develop themselves into centers of excellence. Excellence in all that they will contribute to the overall development of the system of higher education of the country as a whole.
                        </p>
                        <p className="text-justify mt-4">
                          This "Quest for Excellence" could start with the assessment or even earlier, by the establishment of the Steering Committee for the preparation of the Self – Study Report (SSR) of an Institution. Another step in this direction could be the identification of the strengths and weaknesses in the teaching and learning processes as carried out by the institution. The five core values as outlined above form the foundation for assessment of institutions that volunteer for accreditation by NAAC. The HEIs may also add their own core values to these in conformity with the goals and mission.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'assessment' && (
                <div>
                  {/* Assessment And Accreditation Section */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      ASSESSMENT AND ACCREDITATION OF HIGHER EDUCATION INSTITUTIONS
                    </h2>

                    {/* Undertaking Button */}
                    <div className="mb-6">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded transition-all duration-300">
                        Undertaking
                      </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-gray-800 leading-relaxed">
                      <p className="text-justify">
                        The NAAC has been carrying out the process of quality assessment and accreditation of HEIs over the past two decades. Several HEIs have gone through this process and a sizeable number has also undergone subsequent cycles of accreditation. True to its commitment for promoting quality culture in HEIs in consonance with the overall developments in the field of education as well as the outside world, NAAC has strived to be sensitive to these and adequately reflect these in its processes. The A&A process of NAAC continue to be an exercise in partnership of NAAC with the HEI being assessed. As is known by now, the A&A process of NAAC is being revised and this revision attempts to enhance such a partnership. Over years the feedback procured from the HEIs, other stakeholders and the developments in the national scene – all have contributed for the revision process of NAAC. Revised Assessment and Accreditation(A&A)Framework The Revised Assessment and Accreditation Framework is launched in July 2017. It represents an explicit Paradigm Shift making it ICT enabled, objective, transparent, scalable and robust. The Shift is:
                      </p>

                      {/* Bulleted List */}
                      <ul className="list-none space-y-3 ml-6">
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            from qualitative peer judgement to data based quantitative indicator evaluation with increased objectivity and transparency
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            towards extensive use of ICT confirming scalability and robustness
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            in terms of simplification of the process resulting in drastic reduction in number of questions, size of the report, visit days, and so on
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            introducing Pre-qualifier for peer team visit, as 25% of system
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            generated score introducing System Generated Scores (SGS) with the combination of online evaluation (about 70%) and peer judgement (about 30%)
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            in introducing the element of third party validation of data
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            in providing appropriate differences in the metrics, weightages and benchmarks to universities and affiliated/constituent colleges
                          </span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-gray-700 font-bold">■</span>
                          <span>
                            in revising several metrics to bring in enhanced participation of students and alumni in the assessment process
                          </span>
                        </li>
                      </ul>

                      {/* Focus of Assessment */}
                      <div className="mt-8">
                        <h3 className="font-bold text-black mb-3">Focus of Assessment:</h3>
                        <p className="text-justify">
                          The NAAC continues with its focus on quality culture of the institution in terms of Quality Initiatives, Quality Sustenance and Quality Enhancement, as reflected in its vision, objectives, operations and the processes. Experience has reiterated that these can be ascertained either by on site observations and/or through the facts and figures about the various aspects of institutional functioning. The Revised Manual places greater emphasis in the latter as reflective of internal institutional processes. In line with NAAC"s conviction that quality concerns are institutional, Quality Assessment (QA) can better be done through self-evaluation. The self-evaluation process and the subsequent preparation of the Self Study Report (SSR) to be submitted to NAAC involves the participation of all the stakeholders – management, faculty members, administrativestaff, students, parents, employers, community and alumni. While the participation of internal stakeholders i.e. management, staff and students provide credibility and ownership to the activity and could lead to newer initiatives, interaction with the external stakeholders facilitate the development process of the institution and their educational services. Overall, the QA is expected to serve as a catalyst for institutional self-improvement, promote innovation and strengthen the urge to excel. It is attempted to enlarge the digital coverage of the entire process of A&A. This, it is believed, will not only accelerate the process but also bring in greater objectivity into the process. The possible differentiation required in respect of HEIs which are going for subsequent cycles of A&A, appropriate scope has been provided in the Process. This will allow the HEIs to appropriately represent the developments they have attempted after the previous A&A cycle.
                        </p>
                      </div>

                      {/* Quality Indicator Framework */}
                      <div className="mt-8">
                        <h3 className="font-bold text-black mb-3">III. QUALITY INDICATOR FRAMEWORK (QIF) – DESCRIPTION</h3>
                        <p className="text-justify mb-4">
                          The criteria based assessment forms the backbone of A&A process of NAAC. The seven criteria represent the core functions and activities of a HEI. In the revised framework not only the academic and administrative aspects of institutional functioning but also the emerging issues have been included. The seven Criteria that would serve as basis for assessment of HEIs are:
                        </p>

                        <div className="space-y-2">
                          <p className="font-bold">1. Curricular Aspects</p>
                          <p className="font-bold">2. Teaching-Learning and Evaluation</p>
                          <p className="font-bold">3. Research, Innovations and Extension</p>
                          <p className="font-bold">4. Infrastructure and Learning Resources</p>
                          <p className="font-bold">5. Student Support and Progression</p>
                          <p className="font-bold">6. Governance, Leadership and Management</p>
                          <p className="font-bold">7. Institutional Values and Best Practices</p>
                        </div>

                        <p className="text-justify mt-4">
                          Under each Criterion, a set of few Key Indicators are identified. These Key Indicators (KIs) are further delineated as Metrics which actually elicit responses from the HEIs. These seven criteria along with their KIs are detailed below explicating the aspects they represent.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'extended-profile' && (
                <div>
                  {/* Extended Profile Section */}
                  <section className="space-y-8">
                    {/* Students Details */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                        1.STUDENTS DETAILS
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                DESCRIPTION
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-semibold">1.1</td>
                              <td className="border border-gray-300 px-4 py-3">
                                NUMBER OF STUDENTS YEAR-WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-semibold">1.2</td>
                              <td className="border border-gray-300 px-4 py-3">
                                NUMBER OF OUTGOING / FINAL YEAR STUDENTS YEAR-WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-semibold">1.3</td>
                              <td className="border border-gray-300 px-4 py-3">
                                NUMBER OF FIRST YEAR STUDENTS ADMITTED YEAR-WISE IN LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Teachers Details */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                        2.TEACHERS DETAILS
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                DESCRIPTION
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-semibold">2.1</td>
                              <td className="border border-gray-300 px-4 py-3">
                                NUMBER OF FULL TIME TEACHERS YEAR-WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-semibold">2.2</td>
                              <td className="border border-gray-300 px-4 py-3">
                                NUMBER OF SANCTIONED POSTS YEAR-WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Institution Details */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                        3.INSTITUTION DETAILS( AUDITED UTILIZATION CERTIFICATE)
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                DESCRIPTION
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-semibold">3.1</td>
                              <td className="border border-gray-300 px-4 py-3">
                                DETAILS OF TOTAL EXPENDITURE EXCLUDING SALARY YEAR WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-i' && (
                <div className="space-y-12">
                  {/* Curricular Planning and Implementation */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Curricular Planning and Implementation
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.1.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION ENSURES EFFECTIVE CURRICULUM PLANNING, DELIVERY AND EVALUATION THROUGH A WELL DEFINED PROCESS AS PRESCRIBED BY THE RESPECTIVE REGULATORY COUNCILS AND THE AFFILIATING UNIVERSITY.<br />
                              PROVIDE A DESCRIPTION OF ABOVE MENTIONED PROCESS WITHIN 500 WORDS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.1.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF FULLTIME TEACHERS PARTICIPATING IN BOS /ACADEMIC COUNCIL OF UNIVERSITIES VIEW DURING THE LAST FIVE YEARS. (RESTRICT DATA TO BOS /ACADEMIC COUNCIL ONLY)<br />
                              NUMBER OF TEACHERS OF THE INSTITUTION PARTICIPATING IN BOS/ACADEMIC COUNCIL OF UNIVERSITIES YEAR-WISE DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Academic Flexibility */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Academic Flexibility
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF INTER-DISCIPLINARY / INTER-DEPARTMENTAL COURSES /TRAINING ACROSS ALL THE VIEW PROGRAMMES OFFERED BY THE COLLEGE DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF INTERDISCIPLINARY/INTERDEPARTMENTAL COURSES/TRAINING ACROSS THE VIEW PROGRAMMES OFFERED BY THE COLLEGE DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              ADDITIONAL INFO FINAL UPLOAD
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              COURSE INFO SHEET MDS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              LIST OF INTERDISP FINAL UPLOAD
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF COURSES OFFERED ACROSS ALL PROGRAMMES DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF INTERDISCIPLINARY/INTERDEPARTMENTAL COURSES/TRAINING ACROSS THE VIEW PROGRAMMES OFFERED BY THE COLLEGE DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF COURSES OFFERED ACROSS ALL PROGRAMMES DURING THE LAST FIVE YEARS (33 )
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              MINUTES OF MEETING FINAL UPLOAD
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              ADDITIONAL INFO FINAL UPLOAD
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              LIST OF INTERDISP FINAL UPLOAD
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE/DIPLOMA/ADD-ON VIEW COURSES AS AGAINST THE TOTAL NUMBER OF STUDENTS DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE DIPLOMA
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE/DIPLOMA VIEW PROGRAMS/ADD-ON PROGRAMS AS AGAINST THE TOTAL NUMBER OF STUDENTS DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DETAILS OF THE STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE/DIPLOMA/ADD-ON COURSE
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE/DIPLOMA VIEW PROGRAMS/ADD-ON PROGRAMS AS AGAINST THE TOTAL NUMBER OF STUDENTS DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DETAILS OF THE STUDENTS ENROLLED FINAL UPLOAD
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DETAILS OF THE STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE/DIPLOMA/ADD-ON COURSEVIEW ATTENDANCE COPY OF THE STUDENTS ENROLLED FOR THE COURSE
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              YEARWISE LIST LINK PAGE
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Curriculum Enrichment */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Curriculum Enrichment
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION INTEGRATES CROSS-CUTTING ISSUES RELEVANT TO GENDER, ENVIRONMENT ANDVIEW SUSTAINABILITY, HUMAN VALUES, HEALTH DETERMINANTS, RIGHT TO HEALTH AND EMERGING DEMOGRAPHIC ISSUES AND PROFESSIONAL ETHICS INTO THE CURRICULUM AS PRESCRIBED BY THE UNIVERSITY / RESPECTIVE REGULATIVE COUNCILS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.3.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF VALUE-ADDED COURSES OFFERED DURING THE LAST FIVE YEARS THAT IMPART TRANSFERABLEVIEW AND LIFE SKILLS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.3.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN THE VALUE-ADDED COURSES DURING THE LAST FIVEVIEW YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.3.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF STUDENTS UNDERTAKING FIELD VISITS/CLINICAL/INDUSTRY INTERNSHIPS/RESEARCHVIEW PROJECTS/INDUSTRY VISITS/COMMUNITY POSTINGS (DATA FOR THE PRECEDING ACADEMIC YEAR)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Feedback System */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Feedback System
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.4.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              MECHANISM IS IN PLACE TO OBTAIN STRUCTURED FEEDBACK ON CURRICULA/SYLLABI FROM VARIOUSVIEW STAKEHOLDERS<br />
                              <strong>STRUCTURED FEEDBACK RECEIVED FROM</strong><br />
                              1) STUDENTS<br />
                              2) TEACHERS<br />
                              3) EMPLOYERS<br />
                              4) ALUMNI<br />
                              5) PROFESSIONALS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">1.4.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              FEEDBACK ON CURRICULA AND SYLLABI OBTAINED FROM STAKEHOLDERS IS PROCESSED IN TERMS OF:<br />
                              <strong>OPTIONS (CHOOSE ONE THAT IS APPLICABLE):</strong><br />
                              <strong>A. FEEDBACK COLLECTED, ANALYSED AND ACTION TAKEN ON FEEDBACK AND RELEVANT DOCUMENTS MADE AVAILABLE ON THE INSTITUTIONAL WEBSITE</strong><br />
                              <strong>B. FEEDBACK COLLECTED, ANALYSED AND ACTION HAS BEEN TAKEN</strong><br />
                              <strong>C. FEEDBACK COLLECTED AND ANALYSED</strong><br />
                              <strong>D. FEEDBACK COLLECTED</strong><br />
                              <strong>E. FEEDBACK NOT COLLECTED</strong>
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-ii' && (
                <div className="space-y-12">
                  {/* Student Enrolment and Profile */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Student Enrolment and Profile
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.1.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DUE CONSIDERATION IS GIVEN TO EQUITY AND INCLUSIVENESS BY PROVIDING RESERVATION OF SEATSVIEW TO ALL CATEGORIES DURING THE ADMISSION PROCESS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.1.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF SEATS FILLED IN FOR THE VARIOUS PROGRAMMES AS AGAINST THE APPROVEDVIEW INTAKE
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.1.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS ENROLLED DEMONSTRATES A NATIONAL SPREAD AND INCLUDESVIEW STUDENTS FROM OTHER STATES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Catering to Student Diversity */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Catering to Student Diversity
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION ASSESSES THE LEARNING LEVELS OF THE STUDENTS, AFTER ADMISSION AND ORGANISESVIEW SPECIAL PROGRAMMES FOR ADVANCED LEARNERS AND SLOW PERFORMERS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              STUDENT – FULLTIME TEACHER RATIO (DATA FOR THE PRECEDING ACADEMIC YEAR)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.2.3 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION FACILITATES BUILDING AND SUSTENANCE OF INNATE TALENT/APTITUDE OF INDIVIDUALVIEW STUDENTS (EXTRAMURAL ACTIVITIES/BEYOND THE CLASSROOM ACTIVITIES SUCH AS STUDENT CLUBS, CULTURAL SOCIETIES, ETC)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Teaching-Learning Process */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Teaching-Learning Process
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              STUDENT-CENTRIC METHODS ARE USED FOR ENHANCING LEARNING EXPERIENCES BY...
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.3.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION FACILITATES THE USE OF CLINICAL SKILLS LABORATORY / SIMULATION BASED LEARNING
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.3.3 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TEACHERS USE ICT-ENABLED TOOLS FOR EFFECTIVE TEACHING AND LEARNING PROCESS INCLUDINGVIEW ONLINE E-RESOURCES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.3.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              STUDENT : MENTOR RATIO (PRECEDING ACADEMIC YEAR)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.3.5 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE TEACHING LEARNING PROCESS OF THE INSTITUTION NURTURES CREATIVITY, ANALYTICAL SKILLSVIEW AND INNOVATION AMONG STUDENTS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Teacher Profile and Quality */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Teacher Profile and Quality
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.4.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF FULLTIME TEACHERS AGAINST SANCTIONED POSTS DURING THE LAST FIVEVIEW YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.4.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF FULLTIME TEACHERS WITH PH.D./D.SC./D.LIT./DM/M CH/DNB IN SUPERVIEW SPECIALITIES /OTHER PG DEGREES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.4.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE TEACHING EXPERIENCE OF FULLTIME TEACHERS IN NUMBER OF YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.4.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS TRAINED FOR DEVELOPMENT AND DELIVERY OF E-CONTENT / E-VIEW COURSES DURING THE LAST 5 YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.4.5 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF FULLTIME TEACHERS WHO RECEIVED AWARDS AND RECOGNITIONS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Evaluation Process and Reforms */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Evaluation Process and Reforms
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.5.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION ADHERES TO THE ACADEMIC CALENDAR FOR THE CONDUCT OF CONTINUOUS INTERNALVIEW EVALUATION AND ENSURES THAT IT IS ROBUST AND TRANSPARENT
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.5.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              MECHANISM TO DEAL WITH EXAMINATION-RELATED GRIEVANCES IS TRANSPARENT, TIME-BOUND ANDVIEW EFFICIENT
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.5.3 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              REFORMS IN THE PROCESS AND PROCEDURE IN THE CONDUCT OF EVALUATION/EXAMINATION;VIEW INCLUDING THE AUTOMATION OF THE EXAMINATION SYSTEM
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.5.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION PROVIDES OPPORTUNITIES TO STUDENTS FOR MIDCOURSE IMPROVEMENT OFVIEW PERFORMANCE THROUGH SPECIFIC INTERVENTIONS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Student Performance and Learning Outcome */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Student Performance and Learning Outcome
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.6.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS STATED THE LEARNING OUTCOMES (GENERIC AND PROGRAMME-SPECIFIC)...
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.6.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INCREMENTAL PERFORMANCE IN PASS PERCENTAGE OF FINAL YEAR STUDENTS IN THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.6.3 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE TEACHING LEARNING AND ASSESSMENT PROCESSES OF THE INSTITUTION ARE ALIGNED WITH THEVIEW STATED LEARNING OUTCOMES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.6.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PRESENCE AND PERIODICITY OF PARENT-TEACHERS MEETINGS, REMEDIAL MEASURES UNDERTAKEN ANDVIEW OUTCOME ANALYSIS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Student Satisfaction Survey */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Student Satisfaction Survey
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">2.7.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              ONLINE STUDENT SATISFACTION SURVEY REGARDING TEACHING LEARNING PROCESSVIEW
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-iii' && (
                <div className="space-y-12">
                  {/* Resource Mobilization for Research */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Resource Mobilization for Research
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.1.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF TEACHERS RECOGNIZED AS PG/PH.D RESEARCH GUIDES BY THE RESPECTIVE UNIVERSITY
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.1.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS AWARDED NATIONAL /INTERNATIONAL FELLOWSHIPS / FINANCIALVIEW SUPPORT FOR ADVANCED STUDIES/COLLABORATIVE RESEARCH AND PARTICIPATION IN CONFERENCES DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.1.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF RESEARCH PROJECTS/CLINICAL TRIALS FUNDED BY GOVERNMENT, INDUSTRIES AND NON-VIEW GOVERNMENTAL AGENCIES DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Innovation Ecosystem */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Innovation Ecosystem
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.2.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS CREATED AN ECOSYSTEM FOR INNOVATIONS INCLUDING INCUBATION CENTRE ANDVIEW OTHER INITIATIVES FOR CREATION AND TRANSFER OF KNOWLEDGE
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF WORKSHOPS/SEMINARS CONDUCTED ON INTELLECTUAL PROPERTY RIGHTS (IPR) RESEARCHVIEW METHODOLOGY, GOOD CLINICAL, LABORATORY, PHARMACY AND COLLECTION PRACTICES, WRITING FOR RESEARCH GRANTS AND INDUSTRY-ACADEMIA COLLABORATIONS DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Research Publications and Awards */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Research Publications and Awards
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.3.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION ENSURES IMPLEMENTATION OF ITS STATED CODE OF ETHICS FOR RESEARCH.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.3.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF PH.D/DM/M CH/PG DEGREE IN THE RESPECTIVE DISCIPLINES RECEIVED PERVIEW RECOGNIZED PG TEACHERS* OF THE INSTITUTION DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.3.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF PAPERS PUBLISHED PER TEACHER IN THE JOURNALS NOTIFIED ON UGC -CARE LIST INVIEW THE UGC WEBSITE/SCOPUS/WEB OF SCIENCE/PUBMED DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.3.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF BOOKS AND CHAPTERS IN EDITED VOLUMES/BOOKS PUBLISHED AND PAPERS PUBLISHED INVIEW NATIONAL/INTERNATIONAL CONFERENCE PROCEEDINGS INDEXED IN UGC-CARE LIST ON THE UGC WEBSITE/SCOPUS/WEB OF SCIENCE/PUBMED/ DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Extension Activities */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Extension Activities
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.4.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TOTAL NUMBER OF EXTENSION AND OUTREACH ACTIVITIES CARRIED OUT IN COLLABORATION WITHVIEW NATIONAL AND INTERNATIONAL AGENCIES, INDUSTRY, THE COMMUNITY, GOVERNMENT AND NON-GOVERNMENT ORGANIZED BODIES THROUGH NSS/NCC DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.4.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS PARTICIPATING IN EXTENSION AND OUTREACH ACTIVITIES DURINGVIEW THE LAST 5 YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.4.3 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF AWARDS AND RECOGNITIONS RECEIVED FOR EXTENSION AND OUTREACH ACTIVITIES FROMVIEW GOVERNMENT / OTHER RECOGNISED BODIES DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.4.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTIONAL SOCIAL RESPONSIBILITY ACTIVITIES IN THE NEIGHBOURHOOD COMMUNITY IN TERMS OFVIEW EDUCATION, ENVIRONMENTAL ISSUES LIKE SWACHH BHARATH, HEALTH AND HYGIENE AWARENESS AND SOCIO-ECONOMIC DEVELOPMENT ISSUES CARRIED OUT BY THE STUDENTS AND STAFF DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Collaboration */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Collaboration
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.5.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF COLLABORATIVE ACTIVITIES FOR RESEARCH, FACULTY EXCHANGE, STUDENTVIEW EXCHANGE/ INDUSTRY-INTERNSHIP ETC. PER YEAR FOR THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">3.5.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TOTAL NUMBER OF FUNCTIONAL MOUS WITH INSTITUTIONS/ INDUSTRIES IN INDIA AND ABROAD FORVIEW ACADEMIC, CLINICAL TRAINING / INTERNSHIP, ON-THE JOB TRAINING, PROJECT WORK, STUDENT / FACULTY EXCHANGE, COLLABORATIVE RESEARCH PROGRAMMES ETC. YEAR-WISE DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-iv' && (
                <div className="space-y-12">
                  {/* Physical Facilities */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Physical Facilities
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.1.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS ADEQUATE FACILITIES FOR TEACHING-LEARNING.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.1.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS ADEQUATE FACILITIES TO SUPPORT PHYSICAL AND RECREATIONAL REQUIREMENTSVIEW OF STUDENTS AND STAFF.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.1.3 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVAILABILITY AND ADEQUACY OF GENERAL CAMPUS FACILITIES AND OVERALL AMBIENCE.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.1.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF EXPENDITURE INCURRED, EXCLUDING SALARY, FOR INFRASTRUCTUREVIEW DEVELOPMENT AND AUGMENTATION DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Clinical, Equipment and Laboratory Learning Resources */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Clinical, Equipment and Laboratory Learning Resources
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.2.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TEACHING HOSPITAL, EQUIPMENT, CLINICAL TEACHING-LEARNING AND LABORATORY FACILITIES ASVIEW STIPULATED BY THE RESPECTIVE REGULATORY BODIES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF PATIENTS PER YEAR TREATED AS OUTPATIENTS AND INPATIENTS IN THE TEACHINGVIEW HOSPITAL FOR THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.2.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF STUDENTS PER YEAR EXPOSED TO LEARNING RESOURCE SUCH AS LABORATORIES,VIEW ANIMAL HOUSE & HERBAL GARDEN (IN HOUSE OR HIRED) DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.2.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVAILABILITY OF INFRASTRUCTURE FOR COMMUNITY-BASED LEARNING.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Library as a Learning Resource */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Library as a Learning Resource
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              LIBRARY IS AUTOMATED USING INTEGRATED LIBRARY MANAGEMENT SYSTEM (ILMS).
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.3.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TOTAL NUMBER OF TEXTBOOKS, REFERENCE VOLUMES, JOURNALS, COLLECTION OF RARE BOOKS,VIEW MANUSCRIPTS, DIGITALIZED TRADITIONAL MANUSCRIPTS, DISCIPLINE-SPECIFIC LEARNING RESOURCES FROM ANCIENT INDIAN LANGUAGES, SPECIAL REPORTS OR ANY OTHER KNOWLEDGE RESOURCE FOR LIBRARY ENRICHMENT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.3.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DOES THE INSTITUTION HAVE AN E-LIBRARY WITH MEMBERSHIP / REGISTRATION FOR VARIOUSVIEW RESOURCES?
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.3.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE ANNUAL EXPENDITURE FOR THE PURCHASE OF BOOKS AND JOURNALS INCLUDING E-JOURNALSVIEW DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.3.5 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              IN-PERSON AND REMOTE ACCESS USAGE OF LIBRARY AND THE LEARNER SESSIONS/LIBRARY USAGEVIEW PROGRAMMES ORGANIZED FOR THE TEACHERS AND STUDENTS (DATA FOR THE PRECEDING ACADEMIC YEAR).
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.3.6 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              E-CONTENT RESOURCES USED BY TEACHERS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* IT Infrastructure */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      IT Infrastructure
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.4.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF CLASSROOMS, SEMINAR HALLS AND DEMONSTRATION ROOMS LINKED WITH INTERNETVIEW /WI-FI-ENABLED ICT FACILITIES (DATA FOR THE PRECEDING ACADEMIC YEAR).
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.4.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION FREQUENTLY UPDATES ITS IT FACILITIES AND COMPUTER AVAILABILITY FOR STUDENTSVIEW INCLUDING WI-FI.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.4.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVAILABLE BANDWIDTH OF INTERNET CONNECTION IN THE INSTITUTION (LEASED LINE).
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Maintenance of Campus Infrastructure */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Maintenance of Campus Infrastructure
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.5.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE EXPENDITURE INCURRED ON MAINTENANCE OF PHYSICAL FACILITIES AND ACADEMIC SUPPORTVIEW FACILITIES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">4.5.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THERE ARE ESTABLISHED SYSTEMS AND PROCEDURES FOR MAINTAINING AND UTILIZING PHYSICAL,VIEW ACADEMIC AND SUPPORT FACILITIES – LABORATORY, LIBRARY, SPORTS FACILITIES, COMPUTERS, CLASSROOMS ETC.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-v' && (
                <div className="space-y-12">
                  {/* Student Support */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Student Support
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.1.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS BENEFITED BY SCHOLARSHIPS / FREESHIPS / FEE-WAIVERS BY GOVERNMENT / NON-GOVERNMENTAL AGENCIES / INSTITUTION DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.1.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              CAPABILITY ENHANCEMENT AND DEVELOPMENT SCHEMES EMPLOYED BY THE INSTITUTION FOR VIEW STUDENTS:
                              <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>SOFT SKILL DEVELOPMENT</li>
                                <li>LANGUAGE AND COMMUNICATION SKILL DEVELOPMENT</li>
                                <li>YOGA AND WELLNESS</li>
                                <li>ANALYTICAL SKILL DEVELOPMENT</li>
                                <li>HUMAN VALUE DEVELOPMENT</li>
                                <li>PERSONALITY AND PROFESSIONAL DEVELOPMENT</li>
                                <li>EMPLOYABILITY SKILL DEVELOPMENT</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.1.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS PROVIDED TRAINING AND GUIDANCE FOR COMPETITIVE VIEW EXAMINATIONS AND CAREER COUNSELING OFFERED BY THE INSTITUTION DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.1.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS AN ACTIVE INTERNATIONAL STUDENT CELL TO FACILITATE STUDY IN INDIA VIEW PROGRAM, ETC.DESCRIBE THE INTERNATIONAL STUDENT CELL ACTIVITIES WITHIN 500 WORDS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.1.5 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS A TRANSPARENT MECHANISM FOR TIMELY REDRESSAL OF STUDENT GRIEVANCES / VIEW PREVENTION OF SEXUAL HARASSMENT / PREVENTION OF RAGGING.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Student Progression */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Student Progression
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.2.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF STUDENTS QUALIFYING IN STATE/ NATIONAL/ INTERNATIONAL LEVEL VIEW EXAMINATIONS (E.G. GATE/GMAT/GPAT/CAT/NEET/GRE/TOEFL/PLAB/USMLE/AYUSH/CIVIL SERVICES/DEFENCE/UPSC/STATE GOVERNMENT EXAMINATIONS/AIIMSPGET, JIPMER ENTRANCE TEST, PGIMER ENTRANCE TEST, ETC.) DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.2.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF PLACEMENT / SELF-EMPLOYMENT (IN RELEVANT FIELD) IN PROFESSIONAL VIEW SERVICES OF OUTGOING STUDENTS DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.2.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PERCENTAGE OF THE BATCH OF GRADUATED STUDENTS OF THE PRECEDING YEAR, WHO HAVE PROGRESSED VIEW TO HIGHER EDUCATION.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Student Participation and Activities */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Student Participation and Activities
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.3.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              NUMBER OF AWARDS/MEDALS FOR OUTSTANDING PERFORMANCE IN SPORTS/CULTURAL ACTIVITIES AT VIEW STATE/REGIONAL (ZONAL)/NATIONAL/INTERNATIONAL LEVELS (AWARD FOR A TEAM EVENT SHOULD BE COUNTED AS ONE) DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.3.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PRESENCE OF A STUDENT COUNCIL, ITS ACTIVITIES RELATED TO STUDENT WELFARE AND STUDENT VIEW REPRESENTATION IN ACADEMIC & ADMINISTRATIVE BODIES/COMMITTEES OF THE INSTITUTION.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.3.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF SPORTS AND CULTURAL ACTIVITIES/COMPETITIONS ORGANIZED BY THE VIEW INSTITUTION DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Alumni Engagement */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Alumni Engagement
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.4.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE ALUMNI ASSOCIATION IS REGISTERED AND HOLDS REGULAR MEETINGS TO PLAN ITS INVOLVEMENT VIEW AND DEVELOPMENTAL ACTIVITIES WITH THE SUPPORT OF THE COLLEGE DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">5.4.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PROVIDE THE AREAS OF CONTRIBUTION BY THE ALUMNI ASSOCIATION / CHAPTERS DURING THE LAST FIVE VIEW YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-vi' && (
                <div className="space-y-12">
                  {/* Institutional Vision and Leadership */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Institutional Vision and Leadership
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.1.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS CLEARLY STATED VISION AND MISSION WHICH ARE REFLECTED IN ITS ACADEMICVIEW AND ADMINISTRATIVE GOVERNANCE.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.1.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              EFFECTIVE LEADERSHIP IS REFLECTED IN VARIOUS INSTITUTIONAL PRACTICES SUCH ASVIEW DECENTRALIZATION AND PARTICIPATIVE MANAGEMENT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Strategy Development and Deployment */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Strategy Development and Deployment
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.2.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTIONAL HAS WELL DEFINED ORGANISATIONAL STRUCTURE, STATUTORY BODIES/COMMITTEESVIEW OF THE COLLEGE WITH RELEVANT RULES, NORMS AND GUIDELINES ALONG WITH STRATEGIC PLAN EFFECTIVELY DEPLOYED
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.2.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              IMPLEMENTATION OF E-GOVERNANCE IN AREAS OF OPERATION
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Faculty Empowerment Strategies */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Faculty Empowerment Strategies
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS EFFECTIVE WELFARE MEASURES FOR TEACHING AND NON-TEACHING STAFF
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS PROVIDED WITH FINANCIAL SUPPORT TO ATTENDVIEW CONFERENCES/WORKSHOPS AND TOWARDS MEMBERSHIP FEE OF PROFESSIONAL BODIES DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE NUMBER OF PROFESSIONAL DEVELOPMENT / ADMINISTRATIVE TRAINING PROGRAMMESVIEW ORGANIZED BY THE INSTITUTION FOR TEACHING AND NON- TEACHING STAFF DURING THE LAST FIVE YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.4 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS UNDERGOING FACULTY DEVELOPMENT PROGRAMMES (FDP)VIEW INCLUDING ONLINE PROGRAMMES (ORIENTATION / INDUCTION PROGRAMMES, REFRESHER COURSE, SHORT TERM COURSE ETC.) DURING THE LAST FIVE YEARS..
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.3.5 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION HAS PERFORMANCE APPRAISAL SYSTEM FOR TEACHING AND NON-TEACHING STAFF
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Financial Management and Resource Mobilization */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Financial Management and Resource Mobilization
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.4.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTIONAL STRATEGIES FOR MOBILISATION OF FUNDS AND THE OPTIMAL UTILISATION OFVIEW RESOURCES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.4.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION CONDUCTS INTERNAL AND EXTERNAL FINANCIAL AUDITS REGULARLY
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.4.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              FUNDS / GRANTS RECEIVED FROM GOVERNMENT/NON-GOVERNMENT BODIES, INDIVIDUALS,VIEW PHILANTHROPISTS DURING THE LAST FIVE YEARS (NOT COVERED IN CRITERION III)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Internal Quality Assurance System */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Internal Quality Assurance System
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.5.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              INSTITUTION HAS A STREAMLINED INTERNAL QUALITY ASSURANCE MECHANISM
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.5.2 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              AVERAGE PERCENTAGE OF TEACHERS ATTENDING PROGRAMS/WORKSHOPS/SEMINARS SPECIFIC TOVIEW QUALITY IMPROVEMENT IN THE LAST 5 YEARS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">6.5.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION ADOPTS SEVERAL QUALITY ASSURANCE INITIATIVES
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'criterion-vii' && (
                <div className="space-y-12">
                  {/* Institutional Values and Social Responsibilities */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Institutional Values and Social Responsibilities
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.1 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              TOTAL NUMBER OF GENDER EQUITY SENSITIZATION PROGRAMMES ORGANIZED BY THE INSTITUTIONVIEW DURING THE LAST FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              MEASURES INITIATED BY THE INSTITUTION FOR THE PROMOTION OF GENDER EQUITY DURING THE LASTVIEW FIVE YEARS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.3 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS FACILITIES FOR ALTERNATE SOURCES OF ENERGY AND ENERGY CONSERVATIONVIEW DEVICES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DESCRIBE THE FACILITIES IN THE INSTITUTION FOR THE MANAGEMENT OF THE FOLLOWING TYPES OF DEGRADABLE AND NON-DEGRADABLE WASTE (WITHIN 500 WORDS)
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.5 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              WATER CONSERVATION FACILITIES AVAILABLE IN THE INSTITUTION:
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.6 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              GREEN CAMPUS INITIATIVES OF THE INSTITUTION
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.7 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION HAS DIVYANGJAN FRIENDLY, BARRIER-FREE ENVIRONMENT IN THE CAMPUS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.8 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DESCRIBE THE INSTITUTIONAL EFFORTS/INITIATIVES IN PROVIDING AN INCLUSIVE ENVIRONMENT I.E., TOLERANCE AND HARMONY TOWARDS CULTURAL, REGIONAL, LINGUISTIC, COMMUNAL SOCIO-ECONOMIC AND OTHER DIVERSITIES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.9 QNM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              CODE OF CONDUCT HANDBOOK EXISTS FOR STUDENTS, TEACHERS AND ACADEMIC AND ADMINISTRATIVE STAFF INCLUDING THE DEAN / PRINCIPAL /OFFICIALS AND SUPPORT STAFF..
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.1.10 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              THE INSTITUTION CELEBRATES / ORGANIZES NATIONAL AND INTERNATIONAL COMMEMORATIVE DAYS, EVENTS AND FESTIVALS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Best Practices */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Best Practices
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700" colSpan={2}>
                              METRIC NO.TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.2.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              DESCRIBE TWO INSTITUTIONAL BEST PRACTICES AS PER THE NAAC FORMAT PROVIDED IN THE MANUAL.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Institutional Distinctiveness */}
                  <section className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      Institutional Distinctiveness
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">7.3.1 QLM</td>
                            <td className="border border-gray-300 px-4 py-3">
                              PORTRAY THE PERFORMANCE OF THE INSTITUTION IN ONE AREA DISTINCTIVE TO ITS PRIORITY ANDVIEW THRUST WITHIN 500 WORDS.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'part-b' && (
                <div>
                  {/* CRITERIA VIII */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                      CRITERIA VIII
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              METRIC NO
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.1QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              NEET PERCENTILE SCORES OF STUDENTS ENROLLED FOR THE BDS PROGRAMME FOR THEPRECEDINGVIEW ACADEMIC YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.2 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE INSTITUTION ENSURES ADEQUATE TRAINING FOR STUDENTS IN PRE-CLINICALSKILLS
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.3.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              INSTITUTION FOLLOWS INFECTION CONTROL PROTOCOLS DURING CLINICAL TEACHING DURINGVIEW PRECEDING ACADEMIC YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.4 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              ORIENTATION / FOUNDATION COURSES PRACTICED IN THE INSTITUTION FORSTUDENTS ENTERING THEVIEW COLLEGE / CLINICS / INTERNSHIP.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.5.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE STUDENTS ARE TRAINED FOR USING HIGH END EQUIPMENT FORDIAGNOSTIC AND THERAPEUTICVIEW PURPOSES IN THE INSTITUTION. DATA FOR THEPRECEDING ACADEMIC YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.6.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE INSTITUTION PROVIDES STUDENT TRAINING IN SPECIALIZED CLINICS AND FACILITIES FOR CARE ANDVIEW TREATMENT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.7.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              NUMBER OF FULL-TIME TEACHERS WHO HAVE ACQUIRED ADDITIONALVIEW POSTGRADUATEDEGREES/DIPLOMAS/FELLOWSHIPS BEYOND THE ELIGIBILITY REQUIREMENTS FROM RECOGNIZED CENTERS/UNIVERSITIES IN INDIA OR ABROAD. (EG: AB, FRCS, MRCP, FAMS, FAIMER & IFME, FELLOWSHIPS, PH D IN DENTAL EDUCATION ETC.) DURING THE YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.8 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE INSTITUTION HAS INTRODUCED OBJECTIVE METHODS TO MEASURE AND CERTIFY ATTAINMENT OFVIEW SPECIFIC CLINICAL COMPETENCIES BY BDS STUDENTS/INTERNS AS STATED IN THE UNDERGRADUATE CURRICULUM BY THE DENTAL COUNCIL OF INDIA
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.9. QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              NUMBER OF FIRST YEAR STUDENTS, PROVIDED WITH PROPHYLACTIC IMMUNIZATIONVIEW AGAINSTCOMMUNICABLE DISEASES LIKE HEPATITIS-B DURING THEIR CLINICAL WORK DURING THE YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.10 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              THE COLLEGE HAS ADOPTED METHODS TO DEFINE AND IMPLEMENT DENTAL GRADUATE ATTRIBUTESVIEW WITH A SYSTEM OF EVALUATION OF ATTAINMENT OF SUCH ATTRIBUTES.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.11.QNM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              PER CAPITA EXPENDITURE ON DENTAL MATERIALS AND OTHER CONSUMABLES USED FOR STUDENTVIEW TRAINING DURING THE YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">8.1.12 QLM</td>
                            <td className="border border-gray-300 px-4 py-3 italic">
                              ESTABLISHMENT OF DENTAL EDUCATION DEPARTMENT BY THE COLLEGE FORTHE RANGE AND QUALITYVIEW OF FACULTY DEVELOPMENT PROGRAMMES IN EMERGING TRENDS IN DENTAL EDUCATIONAL TECHNOLOGY ORGANIZED BY IT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">VIEW</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'dvv' && (
                <div className="space-y-12">
                  {/* Criterion I */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion I
                    </h2>

                    {/* Curricular Planning and Implementation */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Curricular Planning and Implementation
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.1.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PERCENTAGE OF FULLTIME TEACHERS PARTICIPATING IN BOS /ACADEMIC COUNCIL OF UNIVERSITIES DURING THE LAST FIVE YEARS. (RESTRICT DATA TO BOS /ACADEMIC COUNCIL ONLY)<br />
                                NUMBER OF TEACHERS OF THE INSTITUTION PARTICIPATING IN BOS/ACADEMIC COUNCIL OF UNIVERSITIES YEAR-WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Academic Flexibility */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Academic Flexibility
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.2.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PERCENTAGE OF INTER-DISCIPLINARY / INTER-DEPARTMENTAL COURSES /TRAINING ACROSS ALL THE PROGRAMMES OFFERED BY THE COLLEGE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.2.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN SUBJECT-RELATED CERTIFICATE/DIPLOMA/ADD-ON COURSES AS AGAINST THE TOTAL NUMBER OF STUDENTS DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Curriculum Enrichment */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Curriculum Enrichment
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.3.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                NUMBER OF VALUE-ADDED COURSES OFFERED DURING THE LAST FIVE YEARS THAT IMPART TRANSFERABLE AND LIFE SKILLS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.3.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS ENROLLED IN THE VALUE-ADDED COURSES DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.3.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PERCENTAGE OF STUDENTS UNDERTAKING FIELD VISITS/CLINICAL/INDUSTRY INTERNSHIPS/RESEARCH PROJECTS/INDUSTRY VISITS/COMMUNITY POSTINGS (DATA FOR THE PRECEDING ACADEMIC YEAR)
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Feedback System */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Feedback System
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.4.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                MECHANISM IS IN PLACE TO OBTAIN STRUCTURED FEEDBACK ON CURRICULA/SYLLABI FROM VARIOUS STAKEHOLDERS<br />
                                STRUCTURED FEEDBACK RECEIVED FROM<br />
                                1) STUDENTS<br />
                                2) TEACHERS<br />
                                3) EMPLOYERS<br />
                                4) ALUMNI<br />
                                5) PROFESSIONALS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                1.4.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                FEEDBACK ON CURRICULA AND SYLLABI OBTAINED FROM STAKEHOLDERS IS PROCESSED IN TERMS OF:<br />
                                OPTIONS (CHOOSE ONE THAT IS APPLICABLE):<br />
                                A. FEEDBACK COLLECTED, ANALYSED AND ACTION TAKEN ON FEEDBACK AND RELEVANT DOCUMENTS MADE AVAILABLE ON THE INSTITUTIONAL WEBSITE<br />
                                B. FEEDBACK COLLECTED, ANALYSED AND ACTION HAS BEEN TAKEN<br />
                                C. FEEDBACK COLLECTED AND ANALYSED<br />
                                D. FEEDBACK COLLECTED<br />
                                E. FEEDBACK NOT COLLECTED
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Criterion II */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion II
                    </h2>

                    {/* Student Enrolment and Profile */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Student Enrolment and Profile
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.1.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                DUE CONSIDERATION IS GIVEN TO EQUITY AND INCLUSIVENESS BY PROVIDING RESERVATION OF SEATS TO ALL CATEGORIES DURING THE ADMISSION PROCESS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.1.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF SEATS FILLED IN FOR THE VARIOUS PROGRAMMES AS AGAINST THE APPROVED INTAKE
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.1.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS ENROLLED DEMONSTRATES A NATIONAL SPREAD AND INCLUDES STUDENTS FROM OTHER STATES
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Catering to Student Diversity */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Catering to Student Diversity
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.2.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION ASSESSES THE LEARNING LEVELS OF THE STUDENTS, AFTER ADMISSION AND ORGANISES SPECIAL PROGRAMMES FOR ADVANCED LEARNERS AND SLOW PERFORMERS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.2.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                STUDENT - FULLTIME TEACHER RATIO (DATA FOR THE PRECEDING ACADEMIC YEAR)
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Teaching-Learning Process */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Teaching-Learning Process
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.3.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                INSTITUTION FACILITATES THE USE OF CLINICAL SKILLS LABORATORY / SIMULATION BASED LEARNING
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.3.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                STUDENT : MENTOR RATIO (PRECEDING ACADEMIC YEAR)
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Teacher Profile and Quality */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Teacher Profile and Quality
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.4.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF FULLTIME TEACHERS AGAINST SANCTIONED POSTS DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.4.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF FULLTIME TEACHERS WITH PH.D./D.SC./D.LIT./DM/M CH/DNB IN SUPER SPECIALITIES /OTHER PG DEGREES
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.4.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE TEACHING EXPERIENCE OF FULLTIME TEACHERS IN NUMBER OF YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.4.4
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.4.5 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF FULLTIME TEACHERS WHO RECEIVED AWARDS AND RECOGNITIONS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Evaluation Process and Reforms */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Evaluation Process and Reforms
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.5.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION PROVIDES OPPORTUNITIES TO STUDENTS FOR MIDCOURSE IMPROVEMENT OF PERFORMANCE THROUGH SPECIFIC INTERVENTIONS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Student Performance and Learning Outcome */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Student Performance and Learning Outcome
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                2.6.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                INCREMENTAL PERFORMANCE IN PASS PERCENTAGE OF FINAL YEAR STUDENTS IN THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Criterion III */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion III
                    </h2>

                    {/* Resource Mobilization for Research */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Resource Mobilization for Research
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.1.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PERCENTAGE OF TEACHERS RECOGNIZED AS PG/PH.D RESEARCH GUIDES BY THE RESPECTIVE UNIVERSITY
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.1.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF TEACHERS AWARDED NATIONAL /INTERNATIONAL FELLOWSHIPS / FINANCIAL SUPPORT FOR ADVANCED STUDIES/COLLABORATIVE RESEARCH AND PARTICIPATION IN CONFERENCES DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.1.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                NUMBER OF RESEARCH PROJECTS/CLINICAL TRIALS FUNDED BY GOVERNMENT, INDUSTRIES AND NON-GOVERNMENTAL AGENCIES DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Innovation Ecosystem */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Innovation Ecosystem
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.2.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                NUMBER OF WORKSHOPS/SEMINARS CONDUCTED ON INTELLECTUAL PROPERTY RIGHTS (IPR) RESEARCH METHODOLOGY, GOOD CLINICAL, LABORATORY, PHARMACY AND COLLECTION PRACTICES, WRITING FOR RESEARCH GRANTS AND INDUSTRY-ACADEMIA COLLABORATIONS DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Research Publications and Awards */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Research Publications and Awards
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.3.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION ENSURES IMPLEMENTATION OF ITS STATED CODE OF ETHICS FOR RESEARCH.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.3.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF PH.D/DM/M CH/PG DEGREE IN THE RESPECTIVE DISCIPLINES RECEIVED PER RECOGNIZED PG TEACHERS* OF THE INSTITUTION DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.3.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF PAPERS PUBLISHED PER TEACHER IN THE JOURNALS NOTIFIED ON UGC -CARE LIST IN THE UGC WEBSITE/SCOPUS/WEB OF SCIENCE/PUBMED DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.3.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                NUMBER OF BOOKS AND CHAPTERS IN EDITED VOLUMES/BOOKS PUBLISHED AND PAPERS PUBLISHED IN NATIONAL/INTERNATIONAL CONFERENCE PROCEEDINGS INDEXED IN UGC-CARE LIST ON THE UGC WEBSITE/SCOPUS/WEB OF SCIENCE/PUBMED/ DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Extension Activities */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Extension Activities
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.4.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                TOTAL NUMBER OF EXTENSION AND OUTREACH ACTIVITIES CARRIED OUT IN COLLABORATION WITH NATIONAL AND INTERNATIONAL AGENCIES, INDUSTRY, THE COMMUNITY, GOVERNMENT AND NON-GOVERNMENT ORGANIZED BODIES THROUGH NSS/NCC DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.4.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS PARTICIPATING IN EXTENSION AND OUTREACH ACTIVITIES DURING THE LAST 5 YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Collaboration */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Collaboration
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.5.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF COLLABORATIVE ACTIVITIES FOR RESEARCH, FACULTY EXCHANGE, STUDENT EXCHANGE/ INDUSTRY-INTERNSHIP ETC. PER YEAR FOR THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                3.5.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                TOTAL NUMBER OF FUNCTIONAL MOUS WITH INSTITUTIONS/ INDUSTRIES IN INDIA AND ABROAD FOR ACADEMIC, CLINICAL TRAINING / INTERNSHIP, ON-THE JOB TRAINING, PROJECT WORK, STUDENT / FACULTY EXCHANGE, COLLABORATIVE RESEARCH PROGRAMMES ETC. YEAR-WISE DURING THE LAST FIVE YEARS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Criterion IV */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion IV
                    </h2>

                    {/* Physical Facilities */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Physical Facilities
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.1.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF EXPENDITURE INCURRED, EXCLUDING SALARY, FOR INFRASTRUCTURE DEVELOPMENT AND AUGMENTATION DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Clinical, Equipment and Laboratory Learning Resources */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Clinical, Equipment and Laboratory Learning Resources
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.2.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF PATIENTS PER YEAR TREATED AS OUTPATIENTS AND INPATIENTS IN THE TEACHING HOSPITAL FOR THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.2.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF STUDENTS PER YEAR EXPOSED TO LEARNING RESOURCE SUCH AS LABORATORIES, ANIMAL HOUSE & HERBAL GARDEN (IN HOUSE OR HIRED) DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.2.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVAILABILITY OF INFRASTRUCTURE FOR COMMUNITY-BASED LEARNING.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Library as a Learning Resource */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Library as a Learning Resource
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.3.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                DOES THE INSTITUTION HAVE AN E-LIBRARY WITH MEMBERSHIP / REGISTRATION FOR VARIOUS RESOURCES?
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.3.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE ANNUAL EXPENDITURE FOR THE PURCHASE OF BOOKS AND JOURNALS INCLUDING E-JOURNALS DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.3.6 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                E-CONTENT RESOURCES USED BY TEACHERS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* IT Infrastructure */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        IT Infrastructure
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.4.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PERCENTAGE OF CLASSROOMS, SEMINAR HALLS AND DEMONSTRATION ROOMS LINKED WITH INTERNET /WI-FI-ENABLED ICT FACILITIES (DATA FOR THE PRECEDING ACADEMIC YEAR).
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.4.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVAILABLE BANDWIDTH OF INTERNET CONNECTION IN THE INSTITUTION (LEASED LINE).
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Maintenance of Campus Infrastructure */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Maintenance of Campus Infrastructure
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                4.5.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE EXPENDITURE INCURRED ON MAINTENANCE OF PHYSICAL FACILITIES AND ACADEMIC SUPPORT FACILITIES.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Criterion V */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion V
                    </h2>

                    {/* Student Support */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Student Support
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.1.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS BENEFITED BY SCHOLARSHIPS / FREESHIPS / FEE-WAIVERS BY GOVERNMENT / NON-GOVERNMENTAL AGENCIES / INSTITUTION DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.1.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                CAPABILITY ENHANCEMENT AND DEVELOPMENT SCHEMES EMPLOYED BY THE INSTITUTION FOR STUDENTS:<br /><br />
                                <span className="inline-block mr-2">■</span> SOFT SKILL DEVELOPMENT<br />
                                <span className="inline-block mr-2">■</span> LANGUAGE AND COMMUNICATION SKILL DEVELOPMENT<br />
                                <span className="inline-block mr-2">■</span> YOGA AND WELLNESS<br />
                                <span className="inline-block mr-2">■</span> ANALYTICAL SKILL DEVELOPMENT<br />
                                <span className="inline-block mr-2">■</span> HUMAN VALUE DEVELOPMENT<br />
                                <span className="inline-block mr-2">■</span> PERSONALITY AND PROFESSIONAL DEVELOPMENT<br />
                                <span className="inline-block mr-2">■</span> EMPLOYABILITY SKILL DEVELOPMENT
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.1.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS PROVIDED TRAINING AND GUIDANCE FOR COMPETITIVE EXAMINATIONS AND CAREER COUNSELING OFFERED BY THE INSTITUTION DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.1.5 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION HAS A TRANSPARENT MECHANISM FOR TIMELY REDRESSAL OF STUDENT GRIEVANCES / PREVENTION OF SEXUAL HARASSMENT / PREVENTION OF RAGGING.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Student Progression */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Student Progression
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.2.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF STUDENTS QUALIFYING IN STATE/ NATIONAL/ INTERNATIONAL LEVEL EXAMINATIONS (E.G. GATE/GMAT/GPAT/CAT/NEET/GRE/TOEFL/PLAB/USMLE/AYUSH/CIVIL SERVICES/DEFENCE/UPSC/STATE GOVERNMENT EXAMINATIONS/AIIMSPGET, JIPMER ENTRANCE TEST, PGIMER ENTRANCE TEST, ETC.) DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.2.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF PLACEMENT / SELF-EMPLOYMENT (IN RELEVANT FIELD) IN PROFESSIONAL SERVICES OF OUTGOING STUDENTS DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.2.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PERCENTAGE OF THE BATCH OF GRADUATED STUDENTS OF THE PRECEDING YEAR, WHO HAVE PROGRESSED TO HIGHER EDUCATION.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Student Participation and Activities */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Student Participation and Activities
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.3.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                NUMBER OF AWARDS/MEDALS FOR OUTSTANDING PERFORMANCE IN SPORTS/CULTURAL ACTIVITIES AT STATE/REGIONAL (ZONAL)/NATIONAL/INTERNATIONAL LEVELS (AWARD FOR A TEAM EVENT SHOULD BE COUNTED AS ONE) DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.3.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF SPORTS AND CULTURAL ACTIVITIES/COMPETITIONS ORGANIZED BY THE INSTITUTION DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Alumni Engagement */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Alumni Engagement
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                5.4.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                PROVIDE THE AREAS OF CONTRIBUTION BY THE ALUMNI ASSOCIATION / CHAPTERS DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Criterion VI */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion VI
                    </h2>

                    {/* Strategy Development and Deployment */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Strategy Development and Deployment
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.2.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                IMPLEMENTATION OF E-GOVERNANCE
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Faculty Empowerment Strategies */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Faculty Empowerment Strategies
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.3.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF TEACHERS PROVIDED WITH FINANCIAL SUPPORT TO ATTEND CONFERENCES/WORKSHOPS AND TOWARDS THE MEMBERSHIP FEE OF PROFESSIONAL BODIES DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.3.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE NUMBER OF PROFESSIONAL DEVELOPMENT/ADMINISTRATIVE TRAINING PROGRAMS ORGANIZED BY THE INSTITUTION FOR TEACHING AND NON-TEACHING/TECHNICAL STAFF DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.3.4 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF TEACHERS UNDERGOING FACULTY DEVELOPMENT PROGRAMS (FDP) INCLUDING ONLINE PROGRAMS DURING THE LAST FIVE YEARS (ORIENTATION/INDUCTION PROGRAMS, REFRESHER COURSE, SHORT TERM COURSE, ETC.).
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Financial Management and Resource Mobilization */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Financial Management and Resource Mobilization
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.4.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                FUNDS/GRANTS RECEIVED FROM GOVERNMENT/NON-GOVERNMENT BODIES, INDIVIDUALS, PHILANTHROPISTS (INR IN LAKHS) DURING THE LAST FIVE YEARS (NOT COVERED IN CRITERION III).
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Internal Quality Assurance System */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Internal Quality Assurance System
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.5.2 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                AVERAGE PERCENTAGE OF TEACHERS ATTENDING PROGRAMS/WORKSHOPS/SEMINARS SPECIFIC TO QUALITY IMPROVEMENT IN THE LAST 5 YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                6.5.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION ADOPTS SEVERAL QUALITY ASSURANCE INITIATIVES.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Criterion VII */}
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                      Criterion VII
                    </h2>

                    {/* Institutional Values and Social Responsibilities */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Institutional Values and Social Responsibilities
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                METRIC NO.
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                TITLE
                              </th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                                LINK
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                7.1.1 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                TOTAL NUMBER OF GENDER EQUITY SENSITIZATION PROGRAMMES ORGANIZED BY THE INSTITUTION DURING THE LAST FIVE YEARS.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                7.1.3 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION HAS FACILITIES FOR ALTERNATE SOURCES OF ENERGY AND ENERGY CONSERVATION DEVICES.
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                7.1.5 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                WATER CONSERVATION FACILITIES AVAILABLE IN THE INSTITUTION:
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                7.1.6 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                GREEN CAMPUS INITIATIVES OF THE INSTITUTION
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                7.1.7 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                THE INSTITUTION HAS DIVYANGJAN FRIENDLY, BARRIER-FREE ENVIRONMENT IN THE CAMPUS
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                                7.1.9 QNM
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                                CODE OF CONDUCT HANDBOOK EXISTS FOR STUDENTS, TEACHERS AND ACADEMIC AND ADMINISTRATIVE STAFF INCLUDING THE DEAN / PRINCIPAL /OFFICIALS AND SUPPORT STAFF..
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                  VIEW
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* PART-B (Dental) */}
                  <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                      PART-B (Dental)
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                              METRIC NO
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                              TITLE
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800 uppercase">
                              LINK
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.1QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              NEET PERCENTILE SCORES OF STUDENTS ENROLLED FOR THE BDS PROGRAMME FOR THEPRECEDING ACADEMIC YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.3.QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              INSTITUTION FOLLOWS INFECTION CONTROL PROTOCOLS DURING CLINICAL TEACHING DURING PRECEDING ACADEMIC YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.5.QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed italic">
                              THE STUDENTS ARE TRAINED FOR USING HIGH END EQUIPMENT FORDIAGNOSTIC AND THERAPEUTIC PURPOSES IN THE INSTITUTION. DATA FOR THEPRECEDING ACADEMIC YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.6.QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              THE INSTITUTION PROVIDES STUDENT TRAINING IN SPECIALIZED CLINICS AND FACILITIES FOR CARE AND TREATMENT.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.7.QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              NUMBER OF FULL-TIME TEACHERS WHO HAVE ACQUIRED ADDITIONAL POSTGRADUATEDEGREES/DIPLOMAS/FELLOWSHIPS BEYOND THE ELIGIBILITY REQUIREMENTS FROM RECOGNIZED CENTERS/UNIVERSITIES IN INDIA OR ABROAD. (EG: AB, FRCS, MRCP, FAMS, FAIMER & IFME, FELLOWSHIPS, PH D IN DENTAL EDUCATION ETC.) DURING THE YEAR
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.9. QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              NUMBER OF FIRST YEAR STUDENTS, PROVIDED WITH PROPHYLACTIC IMMUNIZATION AGAINSTCOMMUNICABLE DISEASES LIKE HEPATITIS-B DURING THEIR CLINICAL WORK DURING THE YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-bold text-gray-800">
                              8.1.11.QNM
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-800 font-bold uppercase leading-relaxed">
                              PER CAPITA EXPENDITURE ON DENTAL MATERIALS AND OTHER CONSUMABLES USED FOR STUDENT TRAINING DURING THE YEAR.
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                              <a href="#" className="text-[#1B5E20] font-bold hover:underline">
                                VIEW
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              )}

              {activeSection === 'ssr' && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                    SSR
                  </h2>
                  <div>
                    <button className="bg-[#89B54C] hover:bg-[#7aa03d] text-white font-bold py-3 px-8 rounded transition-all duration-300">
                      Pre Qualified SSR
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Send Button */}
      <button className="fixed bottom-8 right-8 bg-[#89B54C] hover:bg-[#7aa03d] text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
