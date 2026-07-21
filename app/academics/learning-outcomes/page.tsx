import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the key learning outcomes of the BDS program at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS graduates from JKKN Dental College acquire critical thinking and problem-solving abilities, comprehensive patient care competencies, scientific investigation skills, and proficiency in diagnosing and managing a wide range of dental disorders. They are also trained in pain control, oral health awareness, and evidence-based healthcare practice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the MDS program at JKKN Dental College prepare students for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MDS program at JKKN Dental College prepares postgraduate students to apply scientific knowledge and expertise in their chosen dental specialty. Graduates are equipped for advanced clinical practice, research, academic careers, and leadership in their respective specializations including Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry, and Oral Medicine.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seats are available in the BDS program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College offers 100 seats in the BDS (Bachelor of Dental Surgery) program. The course spans 5 years including 4 years of academic training and 1 year of compulsory rotatory internship.',
      },
    },
    {
      '@type': 'Question',
      name: 'What university is JKKN Dental College affiliated to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College & Hospital is affiliated to TN Dr. MGR Medical University (The Tamil Nadu Dr. M.G.R. Medical University), Chennai, and its programs are approved by the Dental Council of India (DCI).',
      },
    },
    {
      '@type': 'Question',
      name: 'What clinical exposure do BDS students get at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BDS students at JKKN Dental College receive extensive clinical training from early in their program. The college operates a hospital with 200+ dental chairs, 100+ beds, and handles 500+ daily patients, providing students with broad and diverse hands-on clinical experience across all dental disciplines.',
      },
    },
  ],
};

export const metadata: Metadata = {
  alternates: { canonical: '/academics/learning-outcomes/' },
  title: 'Learning Outcomes - BDS & MDS Programs - JKKN Dental College',
  description: 'Explore comprehensive learning outcomes for BDS and MDS programs at JKKN Dental College. Quality-focused dental education objectives. Discover more.',
  keywords: 'learning outcomes, BDS program outcomes, MDS program outcomes, dental education objectives, curriculum outcomes, JKKN academics, program goals',
  openGraph: {
    title: 'Learning Outcomes - BDS & MDS Programs - JKKN Dental College',
    description: 'Explore comprehensive learning outcomes for BDS and MDS programs at JKKN Dental College. Quality-focused dental education objectives. Discover more.',
    url: 'https://dental.jkkn.ac.in/academics/learning-outcomes/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function LearningOutcomes() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/learning-outcomes/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Learning Outcomes - BDS & MDS Programs - JKKN Dental College',
    description: 'Explore comprehensive learning outcomes for BDS and MDS programs at JKKN Dental College. Quality-focused dental education objectives. Discover more.',
    url: 'https://dental.jkkn.ac.in/academics/learning-outcomes/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Learning Outcomes', url: 'https://dental.jkkn.ac.in/academics/learning-outcomes/' },
      ]} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-white/70">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><span className="text-white/40">›</span></li>
              <li><span className="text-white/70">Academics</span></li>
              <li><span className="text-white/40">›</span></li>
              <li><span className="text-white">Learning Outcomes</span></li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">Learning Outcomes</h1>
          <p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl">
            Comprehensive program and course outcomes for BDS &amp; MDS programs at JKKN Dental College &amp; Hospital.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="bg-[#FBFBEE] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* PROGRAM OUTCOME - BDS */}
          <section className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#006837]/20">
              <div className="bg-[#006837] px-6 py-5 flex items-center gap-3">
                <span className="bg-white text-[#006837] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">BDS Program</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  PROGRAM OUTCOME – BDS
                </h2>
              </div>
              <div className="bg-white px-6 py-6">
                <p className="text-base md:text-lg text-[#006837] font-semibold mb-6 border-l-4 border-[#7cb983] pl-4">
                  The graduates should acquire the following during the period of training:
                </p>
                <ol className="space-y-3">
                  {[
                    "Use critical thinking and problem-solving abilities, as well as capabilities in comprehensive patient care, scientific investigation, and research technique.",
                    "Adequate understanding of the developmental, structure, and function of the teeth, mouth, jaws, and associated structures in health and disease as well as their relationship and effect on general health and patient's physical and social well-being.",
                    "Assist in developing a thorough grasp of the origin, epidemiology, differential diagnosis, pathophysiology, prevention, treatment, and prognosis of oral and oral-related illnesses.",
                    "Understand the principles of ethical decision-making and professional accountability, as well as the legal and regulatory obligations relevant to the supply and/or support of oral health care services.",
                    "Capable of diagnosing and managing a wide range of common dental disorders found in general dentistry practice while keeping in mind society's expectations and right to the best possible treatment accessible whenever possible.",
                    "Able to prevent and manage complications during general dental practice, various dental surgical procedures, and other dental procedures.",
                    "Acquire the knowledge to investigate the procedures and the capabilities of interpretation of laboratory findings.",
                    "Create oral health awareness and prevention of oral diseases wherever and whenever possible.",
                    "Possess the skill in pain control and management of anxiety before and during dental treatment.",
                    "Acquire skills in screening and assessment of risk in head and neck cancer.",
                    "Possess adequate dexterity in preclinical laboratory skill",
                    "Acquire knowledge of the biological function and a person's behavior in health and disease as well as the effect of natural and social environment on health and so far as it affects dentistry.",
                    "Practice evidence-based health care and continue to acquire the relevant knowledge.",
                    "Acquire the skill to recognize the complexity of the patient treatment and identification when the referral is indicated.",
                    "Willing to apply the current skills and capabilities acquired in the best way possible for the welfare of the patients and community health.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-700 text-base leading-relaxed">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* PROGRAM OUTCOME - MDS */}
          <section className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#7cb983]/30">
              <div className="bg-[#002309] px-6 py-5 flex items-center gap-3">
                <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">MDS Program</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  PROGRAM OUTCOME – MDS
                </h2>
              </div>
              <div className="bg-white px-6 py-6">
                <p className="text-base md:text-lg text-[#002309] font-semibold mb-5 border-l-4 border-[#7cb983] pl-4">
                  Utilize scientific knowledge and expertise to practice your respective specialty successfully and effectively.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Maintain high ethical standards while exercising empathy and a caring mindset.",
                    "Maintain a strong commitment to continuous professional development in the specialty and the allied specializations, whether you are a teacher or a practitioner.",
                    "Willing to share knowledge and skills with any learner, junior, or colleague.",
                    "To choose the most logical course of action, develop the capacity for critical analysis and evaluation of numerous notions and viewpoints. Show that you comprehend the fundamental science that is important to your field.",
                    "Describe the origin, pathophysiology, principles of diagnosis and therapy of prevalent issues in adults and children within the field.",
                    "Recognize the issues that may fall outside of the scope of your specialty/competence and send them to an appropriate specialist.",
                    "Identify and account for social, economic, environmental, and emotional in a given situation while planning therapy.",
                    "Conduct audits employ information technology, and conduct clinical research with the goal of publishing or presenting the work at various gatherings.",
                    "Update knowledge by self-study and attendance at relevant courses, conferences, and seminars.",
                    "Adopt ethical principles in all aspects of practice",
                    "Acquire adequate skills and competence in performing various procedures required in these specialties.",
                    "Take a thorough clinical history, examine the patient, execute necessary diagnostic procedures, and interpret relevant tests to arrive at an accurate diagnosis of the problem.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-gray-700 text-base">
                      <span className="flex-shrink-0 text-[#7cb983] mt-1 font-bold text-lg leading-none">›</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#7cb983]/30 pt-6">
                  <p className="text-base md:text-lg text-[#002309] font-semibold mb-5 border-l-4 border-[#006837] pl-4">
                    The learners should acquire the following during the period of training:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "The learners should acquire knowledge and understanding of the fundamental principles and concepts of oral health and dental science, including anatomy, physiology, pathology, microbiology, pharmacology, and restorative dentistry.",
                      "Acquire clinical skills in dental procedures, such as diagnosis, treatment planning, and the provision of dental care.",
                      "Effective communication skills with patients, colleagues, and other healthcare professionals.",
                      "Professionalism and ethical behavior, including understanding the legal and ethical aspects of the dental practice, and the ability to work with integrity and in the best interests of the patient.",
                      "Ability to use and interpret radiographic images to aid in diagnosis and treatment planning",
                      "Competence in the provision of basic periodontal treatment, endodontic treatment, Orthodontics treatment, prosthodontics treatment, and preventive treatment.",
                      "Knowledge and skills in the use of different types of anesthesia, pain management techniques, and management of dental emergencies.",
                      "Understanding of the principles of infection control and the ability to implement appropriate infection control measures to ensure patient and staff safety.",
                      "Understanding of the impact of oral health on overall health, and the ability to educate patients on the importance of oral health and disease prevention.",
                      "The graduates develop dynamic leadership skills by taking the lead in various healthcare situations and promoting teamwork.",
                      "The graduates acquire the ability to demonstrate innovative thinking and the knowledge and skills to use technological advancement to enhance patient care.",
                      "Critical thinking and problem-solving skills, including the ability to assess complex dental problems, and to develop and implement appropriate treatment plans.",
                      "Research skills, including the ability to critically evaluate scientific literature, and to design and conduct research projects.",
                      "Social responsibility and community engagement, including an understanding of the broader social and cultural contexts of oral health, and a commitment to promoting oral health and reducing oral health disparities.",
                      "Willingness to continue professional development and lifelong learning, including participation in continuing education programs in specialized areas of dental practice",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-gray-700 text-base">
                        <span className="flex-shrink-0 text-[#006837] mt-1 font-bold text-lg leading-none">›</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* COURSE OUTCOME - BDS GENERAL ANATOMY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">COURSE OUTCOME – BDS GENERAL ANATOMY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To identify, show, draw, and describe the structural components of the body responsible for carrying out normal body functions.",
                      "To know the process of development of human embryo emphasizing the development and developmental anomalies of oral, dental, and maxillofacial structures including head and neck region",
                      "Demonstrates knowledge about histologic structures of different parts of the body system and organs",
                      "To understand the importance of the study of embryologyKnowledge about the derivatives of germ layers: ectoderm, mesoderm, and endoder",
                      "To describe the anatomical basis of clinical disorders of the head and neck and CNSTo identify and demonstrate the different parts of bones of the head and neck, state the gross features and attachments of skull bones including the base of the skull and cervical vertebrae",
                      "To demonstrate movements of joints of the head and neck",
                      "To demonstrate the boundary and identify the contents of the oral cavity, the gross features of the nerve supply of tongue, gum, and teeth Skills:",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To understand the knowledge acquire in anatomy and to correlate, appreciate and apply in other subjects taught in the BDS courseThe learner must be able to describe the location, nerve supply, mode of termination of ducts of salivary glands, and their functions",
                      "To describe and classify neurons and neuralgia",
                      "To define and describe the congenital anomalies of the head and neck",
                      "To draw and demonstrate the important anatomical points and structures of the head and neck",
                      "To identify the layers of the scalp and the contents of the temporal region and Infratemporal fossa",
                      "To correlate the important clinical conditions associated with structures in the head and neck",
                      "To identify the different types of tissue on the slide under the microscope",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* DENTAL ANATOMY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">DENTAL ANATOMY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "The learner should be able to identify different teeth in the different dentitions",
                      "To differentiate between normal and pathological states of oral structures",
                      "Demonstrate knowledge about the development of the maxilla, mandible,",
                      "palate, tongue, and lips and state the congenital defects during their formation",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To describe the physiological process of tooth development",
                      "To describe any tooth by its morphology",
                      "Mention the chronology of Deciduous and permanent teeth",
                      "To describe the types of dentition, dental formula, and notation",
                      "To describe the mechanism and pattern of tooth shedding and its clinical significance",
                      "Mention the pattern of tooth eruption and its clinical significance",
                      "To carve human teeth morphology in wax blocks",
                      "To identify and describe different histologic structures of oro-dental tissues",
                      "To explain the clinical importance of teeth and oral tissues",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* HUMAN PHYSIOLOGY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">HUMAN PHYSIOLOGY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To understand the goal of Physiology",
                      "To perform physiological experiments",
                      "To interpret experimental and investigational data",
                      "To demonstrate basic knowledge and understanding of the normal functions of all the organ systems of the human body and apply it as a background for clinical subjects.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To develop a sound attitude for continuing- self-education to improve efficiency and skill in physiology",
                      "To demonstrate knowledge about blood grouping and blood transfusion",
                      "To explain heart rate and radial pulse",
                      "To describe blood pressure and its regulation",
                      "To describe the general mechanism of action, functions, and regulation of secretion of hormones",
                      "To describe the physiology and regulation of body temperature",
                      "To demonstrate the parts of the microscope and skill in using it",
                      "To collect and prepare blood sample",
                      "To examine the radial pulse and its application",
                      "s To examine the respiratory rate",
                      "To elicit light reflex",
                      "To record oral and axillary temperature",
                      "To determine the bleeding time, clotting time, ESR, differential count of WBC",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* BIOCHEMISTRY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">BIOCHEMISTRY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Demonstrate basic knowledge and understanding of major biomolecules, forming the structure of the human body, their functions, and their role in health and disease",
                      "Knowledge about the role of enzymes in the diagnosis of disease",
                      "To explain the metabolic reactions in the body",
                      "To acquire knowledge on fundamental chemical principles involved in body mechanism upon which life process depends",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Demonstrate skills in performing and interpreting common biochemistry laboratory tests",
                      "To apply the knowledge and understanding of biochemistry in medicine and surgery",
                      "To estimate glucose, abnormal constituents of urine",
                      "To diagnose diabetes mellitus, renal, liver, and thyroid functions",
                      "The learner will be able to list the laboratory hazards and the precautions to prevent them",
                      "To interpret the result of serum urea, creatinine, total protein, bilirubin",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL MICROBIOLOGY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">GENERAL MICROBIOLOGY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Demonstrate the knowledge and understanding of microorganisms and their role in disease",
                      "Knowledge and understanding of immunology for the prevention of disease",
                      "To understand the various methods of sterilization and disinfection and their importance in dentistry",
                      "To understand the classification of microorganisms- bacteria, viruses, fungus",
                      "State bacterial anatomy, physiology, growth, and death",
                      "To demonstrate the pathogenesis of dental caries, host response, and the virulence factors of bacteria",
                      "Demonstrate knowledge about the general concept of viruses with clinical importance.",
                      "Knowledge about common fungal diseases of the oral cavity",
                      "Knowledge about cross infections and nosocomial infections and methods to prevent them in dental practice",
                      "Understanding the role of various microorganisms in oral lesions and diseases (oral thrush), other systemic and opportunistic fungi",
                      "To understand the concept, the introduction of a fungus with its clinical importance",
                      "Demonstrate knowledge about general concepts of immunology and its applications",
                      "To state culture media with sensitivity and its clinical importance",
                      "Knowledge about oral microbiology with clinical importance",
                      "To interpret microbiological and serological laboratory tests for the diagnosis of disease",
                      "To apply microbiological knowledge in practicing dental surgery to improve the oral and dental health of the patients.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Learners should be able to follow proper aseptic techniques in dental practice",
                      "Should be able to collect samples from the oral cavity and carefully transfer them to the laboratory",
                      "To understand the general concepts of immunology and its applications, immunity classification, and difference",
                      "To define and classify hypersensitivity with mechanism and function",
                      "Knowledge about the importance of respiratory viruses with their pathogenesis, clinical importance, and lab diagnosis.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL PATHOLOGY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">GENERAL PATHOLOGY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Understanding about causes and pathogenesis of diseases",
                      "Understanding about preventive aspects of diseases",
                      "To describe haematological diseases and haematological disorders",
                      "To interpret clinical pathological specimens to evaluate the diagnosis of disease",
                      "Demonstrate basic tissue changes in acute and chronic inflammation",
                      "Demonstrate understanding of healing after dental surgery (tooth extraction) and its complications",
                      "Understanding the mechanism of generalized edema",
                      "Knowledge about stages of wound healing",
                      "Demonstrate principles of tissue preservation",
                      "State different diagnostic procedures for tumors",
                      "Knowledge about various hematologic disorders",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "The learner should be able to identify and differentiate neoplastic and non-neoplastic lesions around the head and neck region",
                      "Advise appropriate investigations for correct diagnosis of disease",
                      "To apply the knowledge acquired in pathology while practicing dental surgery",
                      "Identify acute, chronic, and granulomatous inflammation",
                      "Identify granulation tissue under the microscope",
                      "To know the procedure for sending a biopsy specimen to the laboratory and cytology",
                      "To identify common tumors and tumor-like lesions of the oral cavity",
                      "To mention the importance of jaundice in dentistry",
                      "To define and classify diabetes mellitus and describe its complications",
                      "To perform and interpret Benedict's test",
                      "To know the importance of diabetes mellitus in dentistry",
                      "To interpret TC, DC, absolute values, ESR, platelet count, bone marrow examination, BT, CT, and PT and determine their clinical significance",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL& DENTAL PHARMACOLOGY & THERAPEUTICS */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">GENERAL&amp; DENTAL PHARMACOLOGY &amp; THERAPEUTICS</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Understanding of the pharmacokinetics and pharmacodynamics of essential and commonly used drugs in dentistry",
                      "To understand the indications, contraindications, interactions, and adverse reactions of commonly used drugs in dentistry",
                      "To understand the principles underlying the concepts of essential medicines",
                      "To demonstrate knowledge and understanding of teratogenic medicines",
                      "To evaluate the ethical and legal issues involved in drug prescribing",
                      "Knowledge about geriatric pharmacology, treatment for medically compromised patients, pregnant women, and common dental problems",
                      "Knowledge about medical emergencies of relevance to dental practice like syncope, angina pectoris, myocardial infarction, cardiac arrest, hypertension, hypotension, acute allergic reactions/anaphylaxis, insulin shock/diabetic coma, asthma",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Management of shock",
                      "Understanding the drugs for medical emergencies in dental practice and management",
                      "Write a rational prescription",
                      "Able to execute Therapeutic decision making",
                      "To define mouthwash and dentifrices,",
                      "Management of common dental infections",
                      "Management of dental pain",
                      "Proper use of local anesthetic agents",
                      "Prescribing from the essential medicine list",
                      "State the indication, mechanism of action, and side effects of chlorhexidine-containing mouthwash",
                      "State and explain the uses of anticoagulant therapy",
                      "To take necessary action before giving dental treatment to a patient on anticoagulant therapy",
                      "Method of application and mechanism of action of anti-plaque agents",
                      "State the principles of cancer chemotherapy and the chemotherapeutic drugs",
                      "State the pharmacology of sialogogues and antisialogogues",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* DENTAL MATERIALS */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">DENTAL MATERIALS</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To understand the physical, chemical, biological, and mechanical properties of materials used in dentistry",
                      "Describe the proper handling and caring of materials",
                      "Knowledge about the selection of required instruments",
                      "To understand the toxic and side effects of the materials and protective measures to be taken",
                      "To understand the biocompatibility of the materials",
                      "To understand tarnish and corrosion and the preventive measures of the metallic-made prostheses and restoratives used in the oral cavity",
                      "Understand the criteria for the selection and use of dental ceramics",
                      "To enumerate the composition, and properties of different types of cement used in dentistry",
                      "Knowledge about the setting mechanism of dental cement",
                      "Knowledge about classification and principles of cutting or polishing materials",
                      "Understanding of cast partial dentures",
                      "Knowledge about denture base materials, techniques of manipulation, maintenance, and allergic reactions",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "The learner should be able to",
                      "To identify the materials used in dentistry",
                      "Selection of appropriate material for clinical use",
                      "Proper use of instruments",
                      "Manipulate different types of cement",
                      "Manipulate gypsum products without loss of properties.",
                      "Manipulate amalgam",
                      "Manipulate acrylic resin and construct denture base",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PRECLINICAL CONSERVATIVE DENTISTRY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">PRECLINICAL CONSERVATIVE DENTISTRY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Understanding of the treatment procedures carried out in conservative dentistry",
                      "Knowledge about the composition and properties of restorative materials",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Preparation of different types of cavities in plaster models and simulation phantom heads.",
                      "Identification of different types of restorative materials",
                      "Manipulation for the various types of restorative materials like zinc oxide eugenol cement, zinc phosphate cement",
                      "Manipulation of light-cured composite resins",
                      "Manipulation of calcium hydroxide",
                      "To list the dentin bonding agents and their mechanism of adhesion",
                      "To describe the pit and fissure sealants",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PRECLINICAL PROSTHODONTICS */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">PRECLINICAL PROSTHODONTICS</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Knowledge about the structure and functions of teeth, and jaws and their physiological importance in the physical and social well-being of a patient",
                      "Understanding teeth occlusion",
                      "Knowledge about abnormalities in occlusion",
                      "Knowledge about sequelae following discrepancies in occlusion following improper fabrication of dentures",
                      "Demonstrate understanding of the properties and composition of elastomeric impression materials",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Fabrication of removal of partial dentures",
                      "Fabrication of fixed partial dentures",
                      "To understand the casting procedure",
                      "Prepare wax pattern",
                      "To describe the importance, properties of the important base metals used in dentistry",
                      "Manipulation of base plate wax to make a special tray/temporary base",
                      "Manipulation of modelling wax to make a wax pattern",
                      "Technique to construct denture base using acrylic resin",
                      "Technique to repair fractured denture /mode",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL MEDICINE */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">GENERAL MEDICINE</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Understanding the various manifestations of common diseases",
                      "To understand the basic principles of history-taking and clinical examination",
                      "Knowledge to correlate the clinical symptoms and physical signs to make a provisional diagnosis of common diseases and suggest relevant investigation.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skill
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To elicit the required history from the patient,",
                      "To develop communication skills so as to establish effective communication with the patients and with the scientific community",
                      "Able to record arterial pulse, blood pressure, temperature, and respiration",
                      "Able to perform CPR",
                      "Diagnosis of common clinical problems",
                      "To interpret common haematological reports, X-ray chest, ECG, CT scan",
                      "Writing prescriptions and following professional ethics during practice",
                      "To acquire skills in performing intramuscular and intravenous injections.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL SURGERY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">GENERAL SURGERY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Knowledge about common surgical conditions of head and neck",
                      "Knowledge about the appropriate",
                      "Radiological and haematological investigations",
                      "Knowledge about the various benign and malignant lesions of the head and neck",
                      "Region and to learn surgical principles.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To perform the proper general, local, and systemic examination",
                      "To identify common surgical problems",
                      "Interpretation of investigational results of common surgical problems",
                      "To provide first aid with the prompt referral of complicated patients",
                      "To know minor surgical procedures like abscess drainage, taking a biopsy",
                      "To know about the universal precautions to be taken against HIV, Hepatitis.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ORAL PATHOLOGY AND ORAL MICROBIOLOGY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">ORAL PATHOLOGY AND ORAL MICROBIOLOGY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To know the basic mechanism of different types of diseases that involves the orofacial tissues",
                      "To know the oral manifestations of systemic and metabolic diseases",
                      "To know the use of oral histopathology, FNAC, cytological examination, frozen section, and immunohistochemistry",
                      "Knowledge about common developmental disturbances of teeth and jaws",
                      "To know about developmental disturbances of oral soft tissues and para-oral tissues",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Writing oral histopathology and requisition form",
                      "Handling and maintenance of microscope",
                      "Interpretation of pathological reports and data",
                      "Preservation of surgical specimens and preparation of fixative for surgical specimens in 10%formalin",
                      "Preservation of surgical specimens for immunohistochemistry",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ORAL MEDICINE AND RADIOLOGY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">ORAL MEDICINE AND RADIOLOGY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To know the treatment plan and differential diagnosis of common infective and non-infective ulcers occurring in the oral cavity",
                      "To describe the clinical features, histopathology, and laboratory investigations for common infective and non-infective ulcers in the oral cavity.",
                      " Knowledge about pathogenesis, clinical features, and treatment of common autoimmune diseases of the oral cavity",
                      "Knowledge about the identification and differentiation between traumatic and various reactive lesions occurring in the oral cavity",
                      "Knowledge about various effects of radiation on the oral cavity",
                      "Knowledge about common viral and bacterial diseases of salivary glands",
                      "Knowledge about causes and complications of xerostomia",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Able to manage dental, and non-dental pain",
                      "Management of trigeminal neuralgia, facial paralysis",
                      "Management of autoimmune diseases of the oral cavity",
                      "Management of leukoplakia and other premalignant lesions of the oral cavity",
                      "Management of xerostomia",
                      "Ability to frame appropriate treatment planning",
                      "Ability to take intraoral periapical radiographs and orthopantomograms and interpret",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CONSERVATIVE DENTISTRY AND ENDODONTICS */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">CONSERVATIVE DENTISTRY AND ENDODONTICS</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To have theoretical knowledge about conservative dentistry and endodontic, in order to integrate theory and practice",
                      "Knowledge about current concepts of operative and endodontic care",
                      "Knowledge about new concepts of aesthetic dentistry",
                      "Knowledge about dental radiology",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skill
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "The learner should be able to demonstrate adequate diagnostic skills, restorative skills, endodontic skills,",
                      "Ability to perform manual skill and dexterity",
                      "Communication skills to obtain a medical and psychosocial history",
                      "Ability to frame an effective treatment plan for the individual patient",
                      "Skilled enough to work in a team and show professionalism",
                      "Ability to perform emergency pain management",
                      "Competent enough to practice Minimally Invasive Dentistry (MID) and",
                      "Evidence-Based Dentistry (EBD) with scientific understanding and thought",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PERIODONTICS */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">PERIODONTICS</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "The learner should be able to describe the background and scope of Periodontology",
                      "Knowledge about the classification of periodontal diseases and framing of treatment plan as required",
                      "Knowledge about the prevention and progression of periodontal diseases",
                      "Knowledge about the basic tissues of periodontium, clinical features of healthy and inflamed gingival",
                      "Adequate knowledge of the etiology, pathophysiology, diagnosis, and treatment planning of various periodontal diseases",
                      "Knowledge about the interrelationship between periodontal disease and systemic disease",
                      "Knowledge about the basic concepts and periodontal aspects of dental implants and management of periodontal health of implants",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Skilled enough to diagnose and manage common periodontal diseases",
                      "To develop an attitude for further learning of subjects",
                      "To execute the basic principles of periodontal instrumentation",
                      "Competent enough to perform scaling, root planning, and curettage with oral hygiene instructions with full aseptic precaution",
                      "To list and identify the basic periodontal instruments",
                      "To provide a proper referral to a specialist consultant",
                      "To apply the knowledge and understanding of the prevention of periodontal diseases",
                      "To apply knowledge of Periodontology to integrate with a multidisciplinary treatment approach",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROSTHODONTICS AND CROWN AND BRIDGE */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">PROSTHODONTICS AND CROWN AND BRIDGE</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To understand the normal relations of human teeth and jaws in dentulous patients",
                      "To demonstrate knowledge about complete anatomy and physiology of complete or parte edentulous state.",
                      "Knowledge about articulation and the concept of occlusion",
                      "Knowledge about the stepwise process, finish and deliver of different prosthesis",
                      "To understand the concept of osseointegration and the value of implant-supported prosthodontic procedures",
                      "To understand the basic concepts of TMJ movements",
                      "To understand the basic principles of natural and artificial occlusion",
                      "To understand the basic principles of tooth preparation for the construction of crowns",
                      "To understand the basic principles of diagnosis, treatment planning of maxillofacial defects",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To handle various dental materials effectively",
                      "Competent to treat edentulous and partially edentulous patients",
                      "Skilled enough to treat maxilla-facial defect patient",
                      "To diagnose and refer patients requiring treatment",
                      "Ability to identify occlusal discrepancies and correct them appropriately",
                      "Skilled enough to perform construction of inlay, onlay, partial veneer crown, and full veneer crown",
                      "Skilled enough to perform various impression techniques",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ORAL AND MAXILLOFACIAL SURGERY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">ORAL AND MAXILLOFACIAL SURGERY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To demonstrate knowledge about basic concepts in oral and maxillofacial surgery",
                      "Demonstrate the appropriate attitude to practice in the oral and maxillofacial surgical field",
                      "Knowledge about diagnosis and effective management of common",
                      "To understand the principles of management of major oral surgical problems",
                      "To value the ethical issues",
                      "To understand the principles of inpatient management",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skill
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "History taking and clinical examination of common disorders of oral and maxillofacial surgery",
                      "Competent enough to make appropriate decisions based on risk benefits of maxillofacial surgery",
                      "To motivate and counsel the importance of regular oral health screening regarding oral cancer",
                      "Competent enough to perform basic surgical skills of common disorders of oral and maxillofacial surgery",
                      "To apply the basic principles of surgery like asepsis and hand scrub, care of the hospitalized patient.",
                      "Able to manage medical emergencies in the dental office providing primary care Ability to manage complications during the operative and postoperative",
                      "phase",
                      "Appropriate referral of high-risk patients",
                      "Competent enough to carry out extraction of teeth under local anesthesia and general anesthesia",
                      "Able to perform the biopsy and other minor oral surgical procedures",
                      "To maintain a high standard of professional ethics",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Knowledge about the etiology, pathophysiology, principles of diagnosis, and management of common dentofacial and orthodontic problems",
                      "To demonstrate basic knowledge and skill to examine, investigate and diagnose the patient's malocclusion for orthodontic treatment",
                      "To understand the basic concept of fixed orthodontic appliance",
                      "To understand the design, plan, and fabrication of functional appliance",
                      "Understand the principles of cephalometric tracing",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To identify and diagnose anomalies of dentition, occlusion, facial structures, and abnormal functional conditions (orthodontic patients)",
                      "Skilled enough to detect deviations in the development of dentition, facial growth, and the occurrence of functional abnormalities",
                      "Skilled enough to identify pernicious oral habits that may lead to malocclusion To evaluate the need for orthodontic treatment",
                      "To plan and execute interceptive orthodontic measures",
                      "Competent enough to convince the patient to specialized orthodontic",
                      "consultation",
                      "To develop communicative skills with the patient regarding preventive, curative, and rehabilitative orthodontic care",
                      "To formulate a treatment plan for simple types of malocclusions and execute",
                      "To outline the management protocol",
                      "To manage simple orthodontic problems",
                      "Skilled enough to insert and activate the functional appliance",
                      "To identify normal and abnormal growth patterns of jaws and dentition",
                      "To identify the changes in face form and facial profile",
                      "To evaluate the psychological and social impact of abnormal growth and malocclusion",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PEDODONTICS AND PREVENTIVE DENTISTRY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">PEDODONTICS AND PREVENTIVE DENTISTRY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To demonstrate knowledge about the diagnosis of dental diseases in pediatric patients",
                      "To demonstrate knowledge of relative analgesia",
                      "To understand the concept of fixed and removable space maintainer",
                      "Understanding simple surgical procedures like excision of cysts, epulis, and ranula",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To identify primary dentition",
                      "To differentiate between primary and permanent dentition",
                      "To instill a positive attitude and behavior in patients to maintain good health",
                      "To promote infant's and children's healthy feeding practice",
                      "To assess and refer pediatric patients to different specialties appropriately",
                      "To motivate and treat psychologically challenged pediatric dental patients",
                      "To counsel and motivate children and parents about good oral hygiene and health",
                      "To do anterior striping and stainless steel crown",
                      "To interpret radiographs used in pediatric dentistry",
                      "To manage a traumatized anterior segment of dentition",
                      "To apply pit and fissure sealants and fluorides",
                      "To manage different types of pulpal pathologies",
                      "To teach pediatric patients about different brushing techniques",
                      "To diagnose, manage and refer patients with communicative disorders",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PUBLIC HEALTH DENTISTRY */}
          <section className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="bg-[#006837] px-5 py-4 flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold text-white">PUBLIC HEALTH DENTISTRY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">BDS</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
                <div className="px-5 py-5">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "To demonstrate a complete understanding of the concepts of public health and primary healthcare and their delivery system in the community",
                      "To understand the different preventive measures to address the prevailing oral and dental problems in the community at each and every level",
                      "To describe the concept and methods of epidemiology to design simple research in dental background",
                      "To understand the concept of dental jurisprudence and address the legal issues in dentistryDemonstrate knowledge of the social and psychological patterns of disease causation and its management accordingly",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Competent to plan and conduct field surveys properly",
                      "To interact with the community people about oral health status",
                      "Competent to work in primary healthcare settings",
                      "Act as an oral health educator",
                      "Act as a social worker regarding establishing a good oral health status among the community people",
                      "To provide instruction about- brushing, flossing, interdental cleansing aid, mouthwash",
                      "To interpret research findings from published journals and articles",
                      "To promote health promotional materials such as posters, festoons, leaflets, handbills, banners, etc.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* COURSE OUTCOME - MDS PERIODONTICS */}
          <section className="mb-10">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#006837]/20">
              <div className="bg-[#002309] px-6 py-5 flex items-center gap-3">
                <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">MDS</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">COURSE OUTCOME – MDS PERIODONTICS</h2>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {/* Knowledge */}
                <div className="px-6 py-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#006837]">
                    <span className="w-3 h-3 rounded-sm bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Discuss historical perspective to advancement in the subject proper and related topics.",
                      "• Describe the etiology, pathogenesis, diagnosis, and management of common periodontal diseases with emphasis on the Indian population",
                      "• Familiarize with the biochemical, microbiologic, and immunologic genetic aspects of periodontal pathology",
                      "• Describe various preventive periodontal measures",
                      "• Describe various treatment modalities of periodontal disease from historical aspect to currently available ones",
                      "• Describe the interrelationship between periodontal disease and various systemic conditions",
                      "• Describe periodontal hazards due to estrogenic causes and deleterious habits and prevention of it",
                      "• Identify rarities in periodontal disease and environmental/Emotional determinates in a given case",
                      "• Recognize conditions that may be outside the area of his/her Speciality/ competence and refer them to an appropriate Specialist",
                      "• Decide regarding non-surgical or surgical management of the case",
                      "• Update the learner by attending courses, conferences, and seminars relevant to periodontics or by self-learning process.",
                      "• Plan out/ carry out research activity both basic and clinical aspects with the aim of publishing his/her work in scientific journals",
                      "• Reach out to the public to motivate and educate them regarding periodontal disease, its prevention, and its consequences if not treated.",
                      "• Plan out the epidemiological survey to assess the prevalence and incidence of early-onset periodontitis and adult periodontitis in the Indian population (Region wise)",
                      "• Shall develop knowledge and skill in the science and practice of Oral Implantology",
                      "• Shall develop teaching skills in the field of Periodontology and Oral Implantology",
                      "• Principals of Surgery and Medical Emergencies.",
                      "To sensitize learners about the interdisciplinary approach towards the soft tissues of the oral cavity with the help of specialists from other departments.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#006837] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Skills */}
                <div className="px-6 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#7cb983]">
                    <span className="w-3 h-3 rounded-sm bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "• Take a proper clinical history, thorough examination of intraoral,",
                      "extraoral, medical history evaluation, advice on essential diagnostic procedures, and interpret them to come to a reasonable diagnosis",
                      "• Effective motivation and education regarding periodontal disease maintenance after the treatment",
                      "• Perform both non-surgical & education regarding periodontal disease, maintenance after the treatment",
                      "• Perform both non-surgical and surgical procedures independently",
                      "• Provide Basic Life Support Service (BLS) recognizes the need for",
                      "advanced life support and does the immediate need for that.",
                      "• Human values, ethical practice to communication abilities",
                      "• Adopt ethical principles in all aspects of treatment modalities; Professional honesty & integrity are to be fostered. Develop Communication skills to make awareness regarding periodontal disease Apply high moral and ethical standards while carrying out human or animal research, Be humble, accept the limitations in his/her knowledge and skill, ask for help from colleagues when needed, Respect patient's rights and privileges, including patients right to information and right to seek a second opinion.",
                      "• To learn the principal of lip repositioning and perio esthetics surgeries.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROSTHODONTICS AND CROWN AND BRIDGES (MDS) */}
          <section className="mb-10">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#006837]/20">
              <div className="bg-[#002309] px-6 py-5 flex items-center gap-3">
                <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">MDS</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">PROSTHODONTICS AND CROWN AND BRIDGES</h2>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                <div className="px-6 py-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#006837]">
                    <span className="w-3 h-3 rounded-sm bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "The candidate should possess knowledge of applied basic and systemic medical sciences.",
                      "• On human anatomy, embryology, histology, applied in general and particularly to head and neck, Physiology & Biochemistry, Pathology Microbiology & virology; health and diseases of various systems of the body (systemic) principles in surgery and medicine, pharmacology, nutrition, behavioral science, age changes, genetics, Immunology, Congenital defects & syndromes and Anthropology. Bio-medical & Biological Principles",
                      "• The learner shall acquire knowledge of various Dental Materials used in the specialty and be able to provide an appropriate indication, understand the manipulation characteristics, compare with other materials available, and be adept with recent advancements of the same.",
                      "• Learners shall acquire knowledge and practice of history taking, Diagnosis, treatment planning, prognosis, and record maintenance of oral, craniofacial, and systemic regions.",
                      "• Ability for comprehensive rehabilitation concept with a pre-prosthetic treatment plan including surgical re-evaluation and prosthodontic treatment planning, impressions, jaw relations, utility of face bows, articulators, selection and positioning of teeth, teeth 43 arrangement for retention, stability, esthetics, phonation, psychological comfort, fit and insertion.",
                      "• Instructions for patients in aftercare and preventive Prosthodontics and management of failed restorations shall be possessed by the learners.",
                      "• Understanding of all the applied aspects of achieving physical, and psychological well-being of the patients for control of diseases and/or treatment-related syndromes with the patient satisfaction and restoring the function of the Craniomandibular system for a quality life of a patient.",
                      "• Ability to diagnose and plan treatment for patients requiring Prosthodontic therapy",
                      "• Ability to read and interpret radiographs, and other investigations for the purpose of diagnosis and treatment planning.",
                      "• The theoretical knowledge and clinical practice shall include principles involved for support, retention, stability, esthetics, phonation, mastication, occlusion, behavioral, psychological, preventive, and social aspects of Prosthodontics science of Oral and Maxillofacial Prosthodontics and Implantology",
                      "• Tooth and tooth surface restorations, Complete denture Prosthodontics, removable partial denture Prosthodontics, fixed prosthodontics and maxillofacial and Craniofacial Prosthodontics, implants, and implant-supported Prosthodontics, T.M.J., and occlusion, craniofacial esthetics, and biomaterials, craniofacial disorders, problems of psychogenic origin.",
                      "• Should have knowledge of age changes, geriatric psychology, nutritional considerations, and prosthodontic therapy in the aged population.",
                      "• Should have the ability to diagnose failed restoration and provide prosthodontic therapy and aftercare.",
                      "• Should have essential knowledge of ethics, laws, jurisprudence, and",
                      "Forensic Odontology in Prosthodontics.",
                      "• Should know general health conditions and emergencies related to prosthodontics treatment like an allergy to various materials and first-line management of aspiration of prosthesis",
                      "• Should identify social, cultural, economic, environmental, educational, and emotional determinants of the patient and consider them in planning the treatment.",
                      "• Should identify cases, which are outside the area of his specialty/competence, refer them to appropriate specialists, and perform interdisciplinary case management.",
                      "• To advice regarding case management involving surgical and interim treatment",
                      "• Should be competent in the specialization of team management in craniofacial prosthesis design.",
                      "• To have adequate acquired knowledge, and understanding of applied basic, and systemic medical science knowledge in general and in particular to head and neck regions.",
                      "• Should attend continuing education programs, seminars, and conferences related to Prosthodontics, thus updating himself/herself.",
                      "• To teach and guide his/her team, colleagues, and other learners.",
                      "• Should be able to use information technology tools and carry out research both in basic and clinical areas, with the aim of publishing his/ her work and presenting his/her work at various scientific forums.",
                      "• Should have essential knowledge of personal hygiene, infection control, prevention of cross-infection, and safe disposal of waste, keeping in view the risk of transmission of potential communicable and transmissible infections like Hepatitis and HIV.",
                      "• Should have the ability to plan and establish Prosthodontics clinic/hospital teaching department and practice management.",
                      "• Should have a sound knowledge (of the applications in pharmacology, effects of drugs on oral tissues and systems of the body and in medically compromised patients.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#006837] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#7cb983]">
                    <span className="w-3 h-3 rounded-sm bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "• The candidate should be able to examine the patients requiring Prosthodontic therapy, investigate the patient systemically, analyze the investigation results, and radiographs, diagnose the ailment, plan the treatment, communicate it with the patient, and execute it. 44",
                      "• To understand the prevalence and prevention of diseases of the craniomandibular system related to prosthetic dentistry.",
                      "• The candidate should be able to restore lost functions of the stomatognathic system like mastication, speech, appearance, and psychological comforts by understanding biological, biomedical, and bioengineering principles and systemic conditions of the patients to provide quality health care in the craniofacial regions.",
                      "• The candidate should be able to demonstrate good interpersonal, and communication skills and a team approach in interdisciplinary care by interacting with other specialties including medical specialty for planned team management of patients for craniofacial & oral acquired and congenital defects, temporomandibular joint syndromes, esthetics, Implant supported Prosthetics and problems of Psychogenic origins.",
                      "• Should be able to demonstrate the clinical competence necessary to carry out appropriate treatment at a higher level of knowledge, training, and practice skills currently available in their specialty area with a patient-centered approach.",
                      "• Should be able to interpret various radiographs like IOPA, OPG, CBCT, and CT. Should and be able to plan and modify treatment plans based on radiographic findings",
                      "• Should be able to critically appraise articles published and understand various components of different types of articles and be able to gather the weight of evidence from the same",
                      "• To identify target diseases and create awareness amongst the population regarding Prosthodontic therapy.",
                      "• To perform Clinical and Laboratory procedures with a clear understanding of biomaterials, and tissue conditions related to the prosthesis and have the required dexterity & skill for performing clinical and laboratory all procedures in fixed, removable, implant, maxillofacial, TMJ, and esthetics Prosthodontics.",
                      "• To carry out necessary adjunctive procedures to prepare the patient before prosthesis like tissue preparation and pre-prosthetic surgery and to prepare the patient before prosthesis / prosthetic procedures",
                      "• To understand the demographic distribution and target diseases of the Craniomandibular region related to Prosthodontics.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 bg-amber-50">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-amber-700">
                    <span className="w-3 h-3 rounded-sm bg-amber-500 inline-block"></span>
                    Attitudes
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "• To adopt ethical principles in Prosthodontic practice, Professional honesty, credibility, and integrity are to be fostered. Treatment is to be delivered irrespective of the social status, caste, creed, or religion of the patient. • Should be willing to share knowledge and clinical experience with professional colleagues.",
                      "• Should develop an attitude towards quality, excellence, and non-compromising in treatment.",
                      "• Should be able to self-evaluate, reflect and improve on their own.",
                      "• Should pursue research with a goal to contribute significant, relevant, and useful information, concept, or methodology to the scientific fraternity.",
                      "• Should be able to demonstrate evidence-based practice while handling cases",
                      "• Should be willing to adopt new methods and techniques in prosthodontics from time to time based on scientific research, which is in the patient's best interest.",
                      "• Should respect patient's rights and privileges, including patient's right to information and right to seek a second opinion.",
                      "• To develop communication skills, in particular, and to explain treatment options available in the management.",
                      "• To provide leadership and get the best out of his / her group in a congenial working atmosphere.",
                      "• Should be able to communicate in simple understandable language with the patient and explain the principles of prosthodontics to the patient. She/he should be able to guide and counsel the patient with regard to various treatment modalities available.",
                      "• To develop the ability to communicate with professional colleagues through various media like the Internet, e-mails, videoconferences, etc. to render the best possible treatment. Should demonstrate good explanatory and demonstrating ability as a teacher in order to facilitate learning among learners",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-amber-600 font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CONSERVATIVE DENTISTRY AND ENDODONTICS (MDS) */}
          <section className="mb-10">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#006837]/20">
              <div className="bg-[#002309] px-6 py-5 flex items-center gap-3">
                <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">MDS</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">CONSERVATIVE DENTISTRY AND ENDODONTICS</h2>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                <div className="px-6 py-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#006837]">
                    <span className="w-3 h-3 rounded-sm bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "At the end of 36 months of training, the candidates should be able to:",
                      "• Describe etiology, pathophysiology, periapical diagnosis, and management of common restorative situations, and endodontic situations that will include contemporary management of dental caries, management of trauma, and pulpal pathosis including periodontal situations.",
                      "• Demonstrate understanding of basic sciences as relevant to conservative/restorative dentistry and Endodontics.",
                      "• Identify social, economic, environmental, and emotional determinants in a given case or community and take them into account for planning and execution at individual and community levels.",
                      "• Ability to master differential diagnosis and recognize conditions that may require a multi-disciplinary approach or a clinical situation outside the realm of the specialty, which he or she should be able to recognize and refer to appropriate specialists.",
                      "• Update himself by self-study and by attending basic and advanced courses, conferences, seminars, and workshops in the specialty of –Conservative Dentistry-Endodontics-Dental Materials and Restorative Dentistry.",
                      "• Ability to teach/guide, colleagues and other learners. Use information technology tools and carry out research both basic and clinical with the aim of publishing his work and presenting the same on a scientific platform.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#006837] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#7cb983]">
                    <span className="w-3 h-3 rounded-sm bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "• Take proper chair side history, examine the patient, and perform medical and dental diagnostic procedures as well as perform relevant tests and interpret them to come to a reasonable diagnosis about the dental condition in general and Conservative Dentistry – Endodontics in particular. And undertake complete patient monitoring including preoperative as well as post-operative care of the patient.",
                      "• Perform all levels of restorative work, surgical and non-surgical Endodontics as well as endodontic-periodontal surgical procedures as part of the multidisciplinary approach to clinical condition.",
                      "• Provide basic life-saving support in emergency situations.",
                      "• Manage acute pulpal and pulp periodontal situations.",
                      "• Have a thorough knowledge of infection control measures in the dental clinical environment and laboratories.",
                      "• Should have proper knowledge of sterilization procedures.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 bg-amber-50">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-amber-700">
                    <span className="w-3 h-3 rounded-sm bg-amber-500 inline-block"></span>
                    Human values, Ethical practice, Communication abilities
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "• Adopt ethical principles in all aspects of restorative and contemporary Endodontics including non-surgical and surgical Endodontics.",
                      "• Professional honesty and integrity should be the top priority.",
                      "• Dental care has to be provided regardless of the social status, caste, creed, or religion of the patient.",
                      "• Develop communication skills in particular to explain various options available for management and to obtain true informed consent from the patient.",
                      "• Apply high moral and ethical standards while carrying on human or animal research.",
                      "• She/he shall not carry out any heroic procedures and must know his limitations in performing all aspects of restorative dentistry including Endodontics. Ask for help from colleagues or seniors when required without hesitation.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-amber-600 font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS (MDS) */}
          <section className="mb-10">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#006837]/20">
              <div className="bg-[#002309] px-6 py-5 flex items-center gap-3">
                <span className="bg-[#7cb983] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">MDS</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS</h2>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                <div className="px-6 py-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#006837]">
                    <span className="w-3 h-3 rounded-sm bg-[#006837] inline-block"></span>
                    Knowledge and Understanding
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "1. The dynamic interaction of biologic processes and mechanical forces acting on the stomatognathic system during orthodontic treatment",
                      "2. The etiology, pathophysiology, diagnosis, and treatment planning of various common Orthodontic problems",
                      "3. Various treatment modalities in Orthodontics – preventive, interceptive, and corrective.",
                      "4. Basic sciences relevant to the practice of Orthodontics",
                      "5. Interaction of social, cultural, economic, genetic, and environmental factors and their relevance to the management of orofacial deformities",
                      "6. Factors affecting the long-range stability of orthodontic correction and their management",
                      "7. Personal hygiene and infection control, prevention of cross-infection, and safe disposal of hospital waste keeping in view the high prevalence of Hepatitis and HIV, and other highly contagious diseases.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#006837] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 bg-[#FBFBEE]">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-[#7cb983]">
                    <span className="w-3 h-3 rounded-sm bg-[#7cb983] inline-block"></span>
                    Skills
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "1. To obtain proper clinical history, and methodical examination of the patient, perform essential diagnostic procedures and interpret them and arrive at a reasonable diagnosis about the dentofacial deformities.",
                      "2. To be competent to fabricate and manage the most appropriate appliance – intra or extra oral, removable or fixed, mechanical or functional, and active or passive – for the treatment of any orthodontic problem to be treated singly or as a part of multidisciplinary treatment of oro-facial deformities.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5 bg-amber-50">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 text-amber-700">
                    <span className="w-3 h-3 rounded-sm bg-amber-500 inline-block"></span>
                    Attitude
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "1. Develop an attitude to adopt ethical principles in all aspects of Orthodontic practice.",
                      "2. Professional honesty and integrity are to be fostered",
                      "3. Treatment care is to be delivered irrespective of the social status, caste, creed, and religion of the patients.",
                      "4. Willingness to share knowledge and clinical experience with professional colleagues",
                      "5. Willingness to adopt, after a critical assessment, new methods and techniques of orthodontic management developed from time to time based on scientific research, which is in the best interest of the patient",
                      "6. Respect patients' rights and privileges, including patient's right to information and the right to seek a second opinion",
                      "7. Develop an attitude to seek opinions from allied medical and dental specialists as and when required",
                      "8. Develop adequate communication skills particularly with the patients giving them the various options available to manage a particular Dento-facial problem and to obtain true informed consent from them for the most appropriate treatment available at that point in time.",
                      "9. Develop the ability to communicate with professional colleagues, in Orthodontics or other specialties through various media like correspondence.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm leading-relaxed">
                        <span className="flex-shrink-0 text-amber-600 font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FORMATIVE/INTERNAL ASSESSMENT */}
          <section className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <div className="bg-[#006837] px-6 py-5">
                <h2 className="text-xl md:text-2xl font-bold text-white">FORMATIVE/INTERNAL ASSESSMENT</h2>
              </div>
              <div className="bg-white px-6 py-6">
                <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] rounded-r-lg px-5 py-4 mb-6 text-gray-700 text-sm leading-relaxed">
                  The continuing assessment examination (both Theory/Practical) held at least 3 times in a particular year and the better of two examinations should be considered. The Internal Assessment marks are to be submitted to the University, once every three months. The marks scored by the learners shall be displayed on the Notice board and a copy forwarded by HOD shall be sent to the University once every 3 months.
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Total", value: "20 Marks" },
                    { label: "Theory IA", value: "10 Marks" },
                    { label: "Practical IA", value: "10 Marks" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#006837] rounded-xl px-4 py-5 text-center">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-white/80 text-xs mt-1 font-medium uppercase tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-bold text-[#006837] mb-4 border-b border-gray-200 pb-2">
                  ASSESSMENT METHOD OF LEARNING OUTCOME – MDS LEARNING FRAMEWORK
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837] text-white rounded-full text-sm font-bold flex items-center justify-center">A</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Theory:</p>
                      <p className="text-gray-600 text-sm mt-1"><strong>Part – I: Basic Sciences Paper</strong></p>
                      <p className="text-gray-600 text-sm"><strong>Part – II: Paper-I, Paper-II &amp; Paper-III</strong></p>
                      <p className="text-gray-600 text-sm mt-1">The written examination shall consist of Basic Sciences (Part-I) of three hours duration and shall be conducted at the end of the First year of the MDS course. Part-II Examination shall be conducted at the end of the Third year of the MDS course. Part-II Examination shall consist of Paper-I, Paper-II, and Paper-III, each of three hours duration.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#7cb983] text-white rounded-full text-sm font-bold flex items-center justify-center">B</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Practical / Clinical Examination: 200 Marks (Varies with different subjects)</p>
                      <p className="text-gray-600 text-sm mt-1">The clinical examination shall be of two days duration</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837] text-white rounded-full text-sm font-bold flex items-center justify-center">C</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Viva Voce: 100 Marks</p>
                      <p className="text-gray-600 text-sm mt-1"><strong>I. Viva-Voce examination: 80 marks</strong></p>
                      <p className="text-gray-600 text-sm mt-1">All examiners will conduct viva-voce conjointly on the candidate's comprehension, analytical approach, expression, interpretation of data, and communication skills. It includes all components of course content. It includes a presentation and discussion on the dissertation also.</p>
                      <p className="text-gray-600 text-sm mt-2"><strong>II. Pedagogy Exercise: 20 marks</strong></p>
                      <p className="text-gray-600 text-sm mt-1">A topic will be given to each candidate at the beginning of the clinical examination. He/she is asked to make a presentation on the topic for 8-10 minutes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL ANATOMY */}
          <section className="mb-6">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#006837] px-5 py-3 flex items-center justify-between">
                <h2 className="text-base md:text-lg font-bold text-white">GENERAL ANATOMY</h2>
                <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">Competencies</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="px-5 py-4 bg-white">
                  <h3 className="text-xs font-bold text-[#006837] uppercase tracking-wide mb-2.5">Specific Competencies</h3>
                  <ul className="space-y-1.5">
                    {[
                      "To acquire knowledge about structural components of the body (macroscopic and microscopic) and correlate it with normal body functions.",
                      "To emphasize development and developmental anomalies of oral, dental, and maxillofacial structures",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm">
                        <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 py-4 bg-[#006837]/5">
                  <h3 className="text-xs font-bold text-[#006837] uppercase tracking-wide mb-2.5">Steps Taken to Attain</h3>
                  <ol className="space-y-1.5">
                    {[
                      "Dissection of human cadavers",
                      "Study of preserved specimens",
                      "Demonstrations",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-600 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#006837] text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {[
            {
              title: "HUMAN PHYSIOLOGY",
              competencies: [
                "• To acquire adequate knowledge and develop skills to perform physiology laboratory tests.",
                "• To interpret these normal functions with a view to differentiate from abnormal functions",
                "• To demonstrate the knowledge and understanding of biomolecules",
              ],
              steps: [
                "• Estimation of Hb concentration.",
                "• Determination of differential count of white blood cells (WBC)",
                "• Determination of bleeding time & clotting time.",
                "• Determination of blood grouping & cross-matching.",
                "• Determination of Erythrocyte Sedimentation Rate (ESR).",
                "• OSPE: Recording BP by palpatory and auscultatory method Examination of the radial pulse",
              ],
            },
            {
              title: "BIOCHEMISTRY",
              competencies: [
                "• To apply the knowledge and understanding of biochemistry in dentistry",
                "• To demonstrate the knowledge and understanding of biomolecules forming the structure of the human body, their functions, and their role in health and disease.",
                "• To learn the normal biochemical values in conventional and SI. Units",
                "• To diagnose diabetes.",
              ],
              steps: [
                "• To Estimate blood glucose",
                "• To Estimate abnormal constituents of urine (sugar, protein & ketone bodies) and their clinical significance",
              ],
            },
            {
              title: "DENTAL ANATOMY, EMBRYOLOGY, AND ORAL HISTOLOGY",
              competencies: [
                "• To identify different teeth in the different dentitions",
                "• To explain any tooth by its morphology",
                "• To acquire the clinical importance of teeth and oral tissues.",
                "• To mention the histological structures of teeth and associated oral structures",
                "• To differentiate between normal and pathological states of oral structures.",
                "• To Outline the development of maxillae, mandible, palate, tongue, and lips.",
                "• Able to understand the age changes of normal oral structures",
                "• Able to learn the chronology and pattern of tooth eruption and its clinical significance",
                "• To learn the physiologic process of tooth development.",
                "• To learn in detail the formation of enamel, dentine, cementum, pulp, periodontal ligament, salivary glands, and Temporomandibular joint.",
                "• To learn the mechanisms and theories of tooth eruption",
              ],
              steps: [
                "• Wax carving of permanent tooth",
                "• Microscopic examination and study of dental and oral structures, salivary glands",
              ],
            },
            {
              title: "GENERAL PATHOLOGY",
              competencies: [
                "• To learn about the causes & pathogenesis of diseases",
                "• To demonstrate the knowledge and understanding of general pathological and preventive knowledge about diseases",
                "• To apply pathological knowledge in practicing dental surgery to improve the oral and dental health",
              ],
              steps: [
                "• Test for abnormal constituents of urine like sugar, albumin, and ketone bodies",
                "• Demonstration of specimens.",
                "OSPE",
                "• Hematological investigation – total and differential count",
              ],
            },
            {
              title: "MICROBIOLOGY",
              competencies: [
                "• To have knowledge & understanding of sterilization, asepsis, and infection prevention",
                "• To learn about the characteristics of different types of disease-causing microorganisms",
              ],
              steps: [
                "• To study different types and parts of the microscope",
                "OSPE:",
                "• Gram staining",
                "• Biomedical waste segregation",
                "• Hand washing technique",
              ],
            },
            {
              title: "GENERAL PHARMACOLOGY",
              competencies: [
                "• Describe indications, contraindications and side effects of medicines related to dental practice.",
                "• To manage dental pain",
                "• To learn about the proper use of local anaesthetic agents",
                "• To prescribe drugs for common dental problems",
                "• To learn therapeutic decision making",
                "• To write rational prescription",
              ],
              steps: [
                "OSPE:",
                "• Preparation of tooth powder",
                "• Preparation of tooth paste",
                "• Writing prescription",
              ],
            },
            {
              title: "DENTAL MATERIALS",
              competencies: [
                "• To have knowledge about physical and chemical properties of dental materials",
                "• A learner must learn to manipulate dental materials to be used in clinical practice",
              ],
              steps: [
                "• Making of impression with impression compound",
                "• Manipulation of gypsum products",
                "• Manipulation of dental cements",
              ],
            },
            {
              title: "PRE-CLINICAL CONSERVATIVE DENTISTRY",
              competencies: [
                "• To develop skills in cavity preparation and restorative procedures",
                "• To develop skills in the manipulation of dental materials used in conservative dentistry",
              ],
              steps: [
                "• Cavity preparation in plaster models",
                "• Cavity preparation and restoration in phantom models",
              ],
            },
            {
              title: "PRE-CLINICAL PROSTHODONTICS & CROWN & BRIDGE",
              competencies: [
                "• To develop skills for the fabrication of complete dentures and removable partial dentures",
                "• To develop skills in the manipulation of various impression materials for clinical practice",
              ],
              steps: [
                "• Preparation of special trays",
                "• Preparation of occlusal rims and teeth setting in the articulator",
              ],
            },
            {
              title: "GENERAL MEDICINE",
              competencies: [
                "• The learner should be able to perform a general physical examination and look for anemia, cyanosis, clubbing, and jaundice and to record vital signs- pulse, BP, temperature.",
                "• To know history taking from the patient and writing",
                "• To diagnose various systemic diseases from history and physical findings",
                "• Interpret and correlate physical findings with investigations like X-ray, hematology, urine and stool examination",
                "• To learn intramuscular and intravenous injections",
                "• Prescription writing",
              ],
              steps: [
                "• Patient examination and case presentation",
                "• Case discussions of diagnosis of various systemic diseases and investigations. systemic diseases from history and physical findings",
              ],
            },
            {
              title: "GENERAL SURGERY",
              competencies: [
                "• To identify the common surgical problems, consider the differential diagnosis and complications",
                "• The learner must be able to learn and mention benign and malignant tumors of soft and hard tissue of the head and neck",
                "• To be able to perform minor surgical procedures like incision and drainage of abscess",
                "• To take biopsy under local anesthesia",
                "• Understanding about personal and patient safety in OPD and OT through proper asepsis and infection prevention",
                "• Knowledge and management of shock and appropriate referral in potential emergency situations during dental procedures.",
              ],
              steps: [
                "OSCE:",
                "• Patient care- diagnosis and treatment planning",
                "• Case discussions",
              ],
            },
            {
              title: "ORAL PATHOLOGY AND ORAL MICROBIOLOGY",
              competencies: [
                "• To learn the oral manifestations of systemic diseases",
                "• To learn the etiology, clinical features, radiographic and histopathological features of common developmental disturbances of teeth and jaws",
                "• To acquire knowledge about clinical and histopathologic features of odontogenic, non – odontogenic, and salivary gland tumors",
                "• Basic knowledge about biopsy and frozen section in the diagnosis of oral disease",
              ],
              steps: [
                "• Microscopic examination of the histopathologic slide",
                "• Demonstration of specimens",
                "• Demonstration of models",
              ],
            },
            {
              title: "ORAL MEDICINE AND RADIOLOGY",
              competencies: [
                "• Knowledge about red and white lesions of oral cavity",
                "• To know about clinical features and laboratory investigations for common infective and non-infective ulcers of the oral cavity",
                "• Knowledge about radiation safety, hazards,",
                "• Must be able to take and interpret intraoral radiographs",
                "• Knowledge about clinical features and pathogenesis of vesiculobullous lesions of the oral mucosa",
              ],
              steps: [
                "• Oral cavity examination with detailed recording of case history",
                "• Taking intraoral periapical radiographs and their interpretation",
              ],
            },
            {
              title: "CONSERVATIVE DENTISTRY AND ENDODONTICS",
              competencies: [
                "• To be able to diagnose all types of carious lesions",
                "• To prepare class I and class II cavities and restore them with amalgam",
                "• Competent to carry out small composite restorations",
                "• To understand the principles of aesthetic dental procedures",
                "• The learner should learn about patient assessment and diagnostic procedures for endodontic therapy",
                "• Able to perform RCT for anterior teeth",
              ],
              steps: [
                "• Class I and class II amalgam restorations",
                "• Composite restorations",
                "• Deep caries management",
                "• Endodontic procedures of anterior teeth",
              ],
            },
            {
              title: "ORAL AND MAXILLOFACIAL SURGERY",
              competencies: [
                "• Able to diagnose, manage and treat patients with oral surgical problems",
                "• Understand and practice the basic principles of sterilization",
                "• Should be competent in the extraction of teeth",
                "• Able to provide primary care and manage medical emergencies in the dental office",
                "• Have a broad knowledge of maxillofacial surgery and oral implantology",
                "• Should be familiar with legal, ethical, and moral issues pertaining to patient care and communication skills",
              ],
              steps: [
                "• Extraction of teeth under local anesthesia",
                "• Assisting surgical procedures",
                "• Patient history taking",
                "• Case discussions",
              ],
            },
            {
              title: "ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS",
              competencies: [
                "• To understand about the normal growth and development of facial skeleton and dentition",
                "• To diagnose different types of malocclusion",
                "• To manage and treat simple malocclusion like anterior spacing using removable appliances",
                "• Treatment planning and execution of preventive and interceptive orthodontics",
              ],
              steps: [
                "• Cephalometric tracing",
                "• Orthodontic wire bending",
                "• Fabrication of simple orthodontic appliances",
              ],
            },
            {
              title: "PAEDIATRIC AND PREVENTIVE DENTISTRY",
              competencies: [
                "• Knowledge about management of dental diseases in children",
                "• Able to manage physically and mentally disabled children efficiently according to their treatment needs",
                "• Able to guide and counsel the parents about the various paediatric dental treatment modalities available",
                "• To understand the principles of prevention and preventive dentistry in children",
              ],
              steps: [
                "• Scaling and restorative procedures",
                "• Case history taking.",
              ],
            },
            {
              title: "PERIODONTOLOGY",
              competencies: [
                "• To diagnose and manage common periodontal diseases",
                "• To learn the basic principles of periodontal instrumentation and perform it",
                "• Identification of periodontal instruments",
                "• To perform scaling and root planning with full aseptic precautions",
                "• To provide oral hygiene instructions to patients",
                "• To learn appropriate investigations to diagnose periodontal diseases",
                "• To have an understanding of prevention of periodontal diseases",
                "• Must be able to furnish initial treatment plan and treat gingivitis and periodontitis cases",
                "• To be able to perform minor surgical procedures like abscess drainage, operculectomy etc.",
              ],
              steps: [
                "• Case history and case discussion",
                "• Assisting surgical procedures",
                "• Oral prophylaxis",
              ],
            },
            {
              title: "PROSTHODONTICS AND CROWN AND BRIDGE",
              competencies: [
                "• Competent to carry out conventional complete and partial removable dentures, fixed partial dentures",
                "• Able to understand and use various dental materials",
                "• Competent to carry out routine prosthodontic procedures",
              ],
              steps: [
                "• Fabrication of removable and fixed partial dentures",
                "• Fabrication of complete dentures",
              ],
            },
            {
              title: "PUBLIC HEALTH DENTISTRY",
              competencies: [
                "• Apply the principles of health promotion and disease prevention",
                "• To have knowledge about the provision of community dental healthcare",
                "• To have community-based preventive measures",
                "• To administer oral hygiene instructions, topical fluoride therapy, pit, and sealant application",
              ],
              steps: [
                "• Conducting Dental health education campaigns",
                "• Recording of Indices",
                "• Prevention of dental restorative procedure",
              ],
            },
          ].map((subject, idx) => (
            <section key={idx} className="mb-6">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="bg-[#006837] px-5 py-3 flex items-center justify-between">
                  <h2 className="text-base md:text-lg font-bold text-white">{subject.title}</h2>
                  <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-widest">Competencies</span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="px-5 py-4 bg-white">
                    <h3 className="text-xs font-bold text-[#006837] uppercase tracking-wide mb-2.5">Specific Competencies</h3>
                    <ul className="space-y-1.5">
                      {subject.competencies.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-gray-600 text-sm">
                          <span className="flex-shrink-0 text-[#7cb983] font-bold mt-0.5">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-5 py-4 bg-[#006837]/5">
                    <h3 className="text-xs font-bold text-[#006837] uppercase tracking-wide mb-2.5">Steps Taken to Attain</h3>
                    <ol className="space-y-1.5">
                      {subject.steps.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-gray-600 text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#006837] text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          ))}

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
