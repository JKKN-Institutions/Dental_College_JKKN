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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* PROGRAM OUTCOME - BDS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PROGRAM OUTCOME – BDS
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-semibold mb-6">
              The graduates should acquire the following during the period of training:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-base text-gray-600">
              <li>Use critical thinking and problem-solving abilities, as well as capabilities in comprehensive patient care, scientific investigation, and research technique.</li>
              <li>Adequate understanding of the developmental, structure, and function of the teeth, mouth, jaws, and associated structures in health and disease as well as their relationship and effect on general health and patient's physical and social well-being.</li>
              <li>Assist in developing a thorough grasp of the origin, epidemiology, differential diagnosis, pathophysiology, prevention, treatment, and prognosis of oral and oral-related illnesses.</li>
              <li>Understand the principles of ethical decision-making and professional accountability, as well as the legal and regulatory obligations relevant to the supply and/or support of oral health care services.</li>
              <li>Capable of diagnosing and managing a wide range of common dental disorders found in general dentistry practice while keeping in mind society's expectations and right to the best possible treatment accessible whenever possible.</li>
              <li>Able to prevent and manage complications during general dental practice, various dental surgical procedures, and other dental procedures.</li>
              <li>Acquire the knowledge to investigate the procedures and the capabilities of interpretation of laboratory findings.</li>
              <li>Create oral health awareness and prevention of oral diseases wherever and whenever possible.</li>
              <li>Possess the skill in pain control and management of anxiety before and during dental treatment.</li>
              <li>Acquire skills in screening and assessment of risk in head and neck cancer.</li>
              <li>Possess adequate dexterity in preclinical laboratory skill</li>
              <li>Acquire knowledge of the biological function and a person's behavior in health and disease as well as the effect of natural and social environment on health and so far as it affects dentistry.</li>
              <li>Practice evidence-based health care and continue to acquire the relevant knowledge.</li>
              <li>Acquire the skill to recognize the complexity of the patient treatment and identification when the referral is indicated.</li>
              <li>Willing to apply the current skills and capabilities acquired in the best way possible for the welfare of the patients and community health.</li>
            </ul>
          </section>

          {/* PROGRAM OUTCOME - MDS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PROGRAM OUTCOME – MDS
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-semibold mb-6">
              Utilize scientific knowledge and expertise to practice your respective specialty successfully and effectively.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-base text-gray-600">
              <li>Maintain high ethical standards while exercising empathy and a caring mindset.</li>
              <li>Maintain a strong commitment to continuous professional development in the specialty and the allied specializations, whether you are a teacher or a practitioner.</li>
              <li>Willing to share knowledge and skills with any learner, junior, or colleague.</li>
              <li>To choose the most logical course of action, develop the capacity for critical analysis and evaluation of numerous notions and viewpoints. Show that you comprehend the fundamental science that is important to your field.</li>
              <li>Describe the origin, pathophysiology, principles of diagnosis and therapy of prevalent issues in adults and children within the field.</li>
              <li>Recognize the issues that may fall outside of the scope of your specialty/competence and send them to an appropriate specialist.</li>
              <li>Identify and account for social, economic, environmental, and emotional in a given situation while planning therapy.</li>
              <li>Conduct audits employ information technology, and conduct clinical research with the goal of publishing or presenting the work at various gatherings.</li>
              <li>Update knowledge by self-study and attendance at relevant courses, conferences, and seminars.</li>
              <li>Adopt ethical principles in all aspects of practice</li>
              <li>Acquire adequate skills and competence in performing various procedures required in these specialties.</li>
              <li>Take a thorough clinical history, examine the patient, execute necessary diagnostic procedures, and interpret relevant tests to arrive at an accurate diagnosis of the problem.</li>
            </ul>
            <p className="text-base md:text-lg text-gray-600 font-semibold mt-6 mb-4">
              The students should acquire the following during the period of training:
            </p>
            <ul className="list-disc pl-8 space-y-3 text-base text-gray-600">
              <li>The students should acquire knowledge and understanding of the fundamental principles and concepts of oral health and dental science, including anatomy, physiology, pathology, microbiology, pharmacology, and restorative dentistry.</li>
              <li>Acquire clinical skills in dental procedures, such as diagnosis, treatment planning, and the provision of dental care.</li>
              <li>Effective communication skills with patients, colleagues, and other healthcare professionals.</li>
              <li>Professionalism and ethical behavior, including understanding the legal and ethical aspects of the dental practice, and the ability to work with integrity and in the best interests of the patient.</li>
              <li>Ability to use and interpret radiographic images to aid in diagnosis and treatment planning</li>
              <li>Competence in the provision of basic periodontal treatment, endodontic treatment, Orthodontics treatment, prosthodontics treatment, and preventive treatment.</li>
              <li>Knowledge and skills in the use of different types of anesthesia, pain management techniques, and management of dental emergencies.</li>
              <li>Understanding of the principles of infection control and the ability to implement appropriate infection control measures to ensure patient and staff safety.</li>
              <li>Understanding of the impact of oral health on overall health, and the ability to educate patients on the importance of oral health and disease prevention.</li>
              <li>The graduates develop dynamic leadership skills by taking the lead in various healthcare situations and promoting teamwork.</li>
              <li>The graduates acquire the ability to demonstrate innovative thinking and the knowledge and skills to use technological advancement to enhance patient care.</li>
              <li>Critical thinking and problem-solving skills, including the ability to assess complex dental problems, and to develop and implement appropriate treatment plans.</li>
              <li>Research skills, including the ability to critically evaluate scientific literature, and to design and conduct research projects.</li>
              <li>Social responsibility and community engagement, including an understanding of the broader social and cultural contexts of oral health, and a commitment to promoting oral health and reducing oral health disparities.</li>
              <li>Willingness to continue professional development and lifelong learning, including participation in continuing education programs in specialized areas of dental practice</li>
            </ul>
          </section>

          {/* COURSE OUTCOME - BDS GENERAL ANATOMY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              COURSE OUTCOME – BDS GENERAL ANATOMY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <ul className="list-disc pl-8 space-y-3 text-base text-gray-600">
              <li>To identify, show, draw, and describe the structural components of the body responsible for carrying out normal body functions.</li>
              <li>To know the process of development of human embryo emphasizing the development and developmental anomalies of oral, dental, and maxillofacial structures including head and neck region</li>
              <li>Demonstrates knowledge about histologic structures of different parts of the body system and organs</li>
              <li>To understand the importance of the study of embryologyKnowledge about the derivatives of germ layers: ectoderm, mesoderm, and endoder</li>
              <li>To describe the anatomical basis of clinical disorders of the head and neck and CNSTo identify and demonstrate the different parts of bones of the head and neck, state the gross features and attachments of skull bones including the base of the skull and cervical vertebrae</li>
              <li>To demonstrate movements of joints of the head and neck</li>
              <li>To demonstrate the boundary and identify the contents of the oral cavity, the gross features of the nerve supply of tongue, gum, and teeth Skills:</li>
              <li>To understand the knowledge acquire in anatomy and to correlate, appreciate and apply in other subjects taught in the BDS courseThe student must be able to describe the location, nerve supply, mode of termination of ducts of salivary glands, and their functions</li>
              <li>To describe and classify neurons and neuralgia</li>
              <li>To define and describe the congenital anomalies of the head and neck</li>
              <li>To draw and demonstrate the important anatomical points and structures of the head and neck</li>
              <li>To identify the layers of the scalp and the contents of the temporal region and Infratemporal fossa</li>
              <li>To correlate the important clinical conditions associated with structures in the head and neck</li>
              <li>To identify the different types of tissue on the slide under the microscope</li>
            </ul>
          </section>

          {/* DENTAL ANATOMY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              DENTAL ANATOMY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">The student should be able to identify different teeth in the different dentitions</p>
            <p className="text-base text-gray-600 mb-2">To differentiate between normal and pathological states of oral structures</p>
            <p className="text-base text-gray-600 mb-4">Demonstrate knowledge about the development of the maxilla, mandible,</p>
            <p className="text-base text-gray-600 mb-4">palate, tongue, and lips and state the congenital defects during their formation</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">To describe the physiological process of tooth development</p>
            <p className="text-base text-gray-600 mb-2">To describe any tooth by its morphology</p>
            <p className="text-base text-gray-600 mb-2">Mention the chronology of Deciduous and permanent teeth</p>
            <p className="text-base text-gray-600 mb-2">To describe the types of dentition, dental formula, and notation</p>
            <p className="text-base text-gray-600 mb-2">To describe the mechanism and pattern of tooth shedding and its clinical significance</p>
            <p className="text-base text-gray-600 mb-2">Mention the pattern of tooth eruption and its clinical significance</p>
            <p className="text-base text-gray-600 mb-2">To carve human teeth morphology in wax blocks</p>
            <p className="text-base text-gray-600 mb-2">To identify and describe different histologic structures of oro-dental tissues</p>
            <p className="text-base text-gray-600 mb-2">To explain the clinical importance of teeth and oral tissues</p>
          </section>

          {/* HUMAN PHYSIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              HUMAN PHYSIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To understand the goal of Physiology</p>
            <p className="text-base text-gray-600 mb-2">To perform physiological experiments</p>
            <p className="text-base text-gray-600 mb-2">To interpret experimental and investigational data</p>
            <p className="text-base text-gray-600 mb-4">To demonstrate basic knowledge and understanding of the normal functions of all the organ systems of the human body and apply it as a background for clinical subjects.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">To develop a sound attitude for continuing- self-education to improve efficiency and skill in physiology</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate knowledge about blood grouping and blood transfusion</p>
            <p className="text-base text-gray-600 mb-2">To explain heart rate and radial pulse</p>
            <p className="text-base text-gray-600 mb-2">To describe blood pressure and its regulation</p>
            <p className="text-base text-gray-600 mb-2">To describe the general mechanism of action, functions, and regulation of secretion of hormones</p>
            <p className="text-base text-gray-600 mb-2">To describe the physiology and regulation of body temperature</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate the parts of the microscope and skill in using it</p>
            <p className="text-base text-gray-600 mb-2">To collect and prepare blood sample</p>
            <p className="text-base text-gray-600 mb-2">To examine the radial pulse and its application</p>
            <p className="text-base text-gray-600 mb-2">s To examine the respiratory rate</p>
            <p className="text-base text-gray-600 mb-2">To elicit light reflex</p>
            <p className="text-base text-gray-600 mb-2">To record oral and axillary temperature</p>
            <p className="text-base text-gray-600 mb-2">To determine the bleeding time, clotting time, ESR, differential count of WBC</p>
          </section>

          {/* BIOCHEMISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              BIOCHEMISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Demonstrate basic knowledge and understanding of major biomolecules, forming the structure of the human body, their functions, and their role in health and disease</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the role of enzymes in the diagnosis of disease</p>
            <p className="text-base text-gray-600 mb-2">To explain the metabolic reactions in the body</p>
            <p className="text-base text-gray-600 mb-4">To acquire knowledge on fundamental chemical principles involved in body mechanism upon which life process depends</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Demonstrate skills in performing and interpreting common biochemistry laboratory tests</p>
            <p className="text-base text-gray-600 mb-2">To apply the knowledge and understanding of biochemistry in medicine and surgery</p>
            <p className="text-base text-gray-600 mb-2">To estimate glucose, abnormal constituents of urine</p>
            <p className="text-base text-gray-600 mb-2">To diagnose diabetes mellitus, renal, liver, and thyroid functions</p>
            <p className="text-base text-gray-600 mb-2">The student will be able to list the laboratory hazards and the precautions to prevent them</p>
            <p className="text-base text-gray-600 mb-2">To interpret the result of serum urea, creatinine, total protein, bilirubin</p>
          </section>

          {/* GENERAL MICROBIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL MICROBIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Demonstrate the knowledge and understanding of microorganisms and their role in disease</p>
            <p className="text-base text-gray-600 mb-2">Knowledge and understanding of immunology for the prevention of disease</p>
            <p className="text-base text-gray-600 mb-2">To understand the various methods of sterilization and disinfection and their</p>
            <p className="text-base text-gray-600 mb-2 ml-4">importance in dentistry</p>
            <p className="text-base text-gray-600 mb-2">To understand the classification of microorganisms- bacteria, viruses, fungus</p>
            <p className="text-base text-gray-600 mb-2">State bacterial anatomy, physiology, growth, and death</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate the pathogenesis of dental caries, host response, and the virulence factors of bacteria</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate knowledge about the general concept of viruses with clinical importance.</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about common fungal diseases of the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about cross infections and nosocomial infections and methods to prevent them in dental practice</p>
            <p className="text-base text-gray-600 mb-2">Understanding the role of various microorganisms in oral lesions and diseases (oral thrush), other systemic and opportunistic fungi</p>
            <p className="text-base text-gray-600 mb-2">To understand the concept, the introduction of a fungus with its clinical importance</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate knowledge about general concepts of immunology and its applications</p>
            <p className="text-base text-gray-600 mb-2">To state culture media with sensitivity and its clinical importance</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about oral microbiology with clinical importance</p>
            <p className="text-base text-gray-600 mb-2">To interpret microbiological and serological laboratory tests for the diagnosis of disease</p>
            <p className="text-base text-gray-600 mb-2">To apply microbiological knowledge in practicing dental surgery to improve the oral and dental health of the patients.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Students should be able to follow proper aseptic techniques in dental practice</p>
            <p className="text-base text-gray-600 mb-2">Should be able to collect samples from the oral cavity and carefully transfer them to the laboratory</p>
            <p className="text-base text-gray-600 mb-2">To understand the general concepts of immunology and its applications, immunity classification, and difference</p>
            <p className="text-base text-gray-600 mb-2">To define and classify hypersensitivity with mechanism and function</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the importance of respiratory viruses with their pathogenesis, clinical importance, and lab diagnosis.</p>
          </section>

          {/* GENERAL PATHOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL PATHOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Understanding about causes and pathogenesis of diseases</p>
            <p className="text-base text-gray-600 mb-2">Understanding about preventive aspects of diseases</p>
            <p className="text-base text-gray-600 mb-2">To describe haematological diseases and haematological disorders</p>
            <p className="text-base text-gray-600 mb-2">To interpret clinical pathological specimens to evaluate the diagnosis of disease</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate basic tissue changes in acute and chronic inflammation</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate understanding of healing after dental surgery (tooth extraction) and its complications</p>
            <p className="text-base text-gray-600 mb-2">Understanding the mechanism of generalized edema</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about stages of wound healing</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate principles of tissue preservation</p>
            <p className="text-base text-gray-600 mb-2">State different diagnostic procedures for tumors</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about various hematologic disorders</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">The student should be able to identify and differentiate neoplastic and non-neoplastic lesions around the head and neck region</p>
            <p className="text-base text-gray-600 mb-2">Advise appropriate investigations for correct diagnosis of disease</p>
            <p className="text-base text-gray-600 mb-2">To apply the knowledge acquired in pathology while practicing dental surgery</p>
            <p className="text-base text-gray-600 mb-2">Identify acute, chronic, and granulomatous inflammation</p>
            <p className="text-base text-gray-600 mb-2">Identify granulation tissue under the microscope</p>
            <p className="text-base text-gray-600 mb-2">To know the procedure for sending a biopsy specimen to the laboratory and cytology</p>
            <p className="text-base text-gray-600 mb-2">To identify common tumors and tumor-like lesions of the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">To mention the importance of jaundice in dentistry</p>
            <p className="text-base text-gray-600 mb-2">To define and classify diabetes mellitus and describe its complications</p>
            <p className="text-base text-gray-600 mb-2">To perform and interpret Benedict's test</p>
            <p className="text-base text-gray-600 mb-2">To know the importance of diabetes mellitus in dentistry</p>
            <p className="text-base text-gray-600 mb-2">To interpret TC, DC, absolute values, ESR, platelet count, bone marrow examination, BT, CT, and PT and determine their clinical significance</p>
          </section>

          {/* GENERAL& DENTAL PHARMACOLOGY & THERAPEUTICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL& DENTAL PHARMACOLOGY & THERAPEUTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Understanding of the pharmacokinetics and pharmacodynamics of essential and commonly used drugs in dentistry</p>
            <p className="text-base text-gray-600 mb-2">To understand the indications, contraindications, interactions, and adverse reactions of commonly used drugs in dentistry</p>
            <p className="text-base text-gray-600 mb-2">To understand the principles underlying the concepts of essential medicines</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate knowledge and understanding of teratogenic medicines</p>
            <p className="text-base text-gray-600 mb-2">To evaluate the ethical and legal issues involved in drug prescribing</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about geriatric pharmacology, treatment for medically compromised patients, pregnant women, and common dental problems</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about medical emergencies of relevance to dental practice like syncope, angina pectoris, myocardial infarction, cardiac arrest, hypertension, hypotension, acute allergic reactions/anaphylaxis, insulin shock/diabetic coma, asthma</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Management of shock</p>
            <p className="text-base text-gray-600 mb-2">Understanding the drugs for medical emergencies in dental practice and management</p>
            <p className="text-base text-gray-600 mb-2">Write a rational prescription</p>
            <p className="text-base text-gray-600 mb-2">Able to execute Therapeutic decision making</p>
            <p className="text-base text-gray-600 mb-2">To define mouthwash and dentifrices,</p>
            <p className="text-base text-gray-600 mb-2">Management of common dental infections</p>
            <p className="text-base text-gray-600 mb-2">Management of dental pain</p>
            <p className="text-base text-gray-600 mb-2">Proper use of local anesthetic agents</p>
            <p className="text-base text-gray-600 mb-2">Prescribing from the essential medicine list</p>
            <p className="text-base text-gray-600 mb-2">State the indication, mechanism of action, and side effects of chlorhexidine-containing mouthwash</p>
            <p className="text-base text-gray-600 mb-2">State and explain the uses of anticoagulant therapy</p>
            <p className="text-base text-gray-600 mb-2">To take necessary action before giving dental treatment to a patient on anticoagulant therapy</p>
            <p className="text-base text-gray-600 mb-2">Method of application and mechanism of action of anti-plaque agents</p>
            <p className="text-base text-gray-600 mb-2">State the principles of cancer chemotherapy and the chemotherapeutic drugs</p>
            <p className="text-base text-gray-600 mb-2">State the pharmacology of sialogogues and antisialogogues</p>
          </section>

          {/* DENTAL MATERIALS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              DENTAL MATERIALS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To understand the physical, chemical, biological, and mechanical properties of materials used in dentistry</p>
            <p className="text-base text-gray-600 mb-2">Describe the proper handling and caring of materials</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the selection of required instruments</p>
            <p className="text-base text-gray-600 mb-2">To understand the toxic and side effects of the materials and protective measures to be taken</p>
            <p className="text-base text-gray-600 mb-2">To understand the biocompatibility of the materials</p>
            <p className="text-base text-gray-600 mb-2">To understand tarnish and corrosion and the preventive measures of the metallic-made prostheses and restoratives used in the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Understand the criteria for the selection and use of dental ceramics</p>
            <p className="text-base text-gray-600 mb-2">To enumerate the composition, and properties of different types of cement used in dentistry</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the setting mechanism of dental cement</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about classification and principles of cutting or polishing materials</p>
            <p className="text-base text-gray-600 mb-2">Understanding of cast partial dentures</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about denture base materials, techniques of manipulation, maintenance, and allergic reactions</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">The student should be able to</p>
            <p className="text-base text-gray-600 mb-2">To identify the materials used in dentistry</p>
            <p className="text-base text-gray-600 mb-2">Selection of appropriate material for clinical use</p>
            <p className="text-base text-gray-600 mb-2">Proper use of instruments</p>
            <p className="text-base text-gray-600 mb-2">Manipulate different types of cement</p>
            <p className="text-base text-gray-600 mb-2">Manipulate gypsum products without loss of properties.</p>
            <p className="text-base text-gray-600 mb-2">Manipulate amalgam</p>
            <p className="text-base text-gray-600 mb-2">Manipulate acrylic resin and construct denture base</p>
          </section>

          {/* PRECLINICAL CONSERVATIVE DENTISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PRECLINICAL CONSERVATIVE DENTISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Understanding of the treatment procedures carried out in conservative dentistry</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the composition and properties of restorative materials</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Preparation of different types of cavities in plaster models and simulation phantom heads.</p>
            <p className="text-base text-gray-600 mb-2">Identification of different types of restorative materials</p>
            <p className="text-base text-gray-600 mb-2">Manipulation for the various types of restorative materials like zinc oxide eugenol cement, zinc phosphate cement</p>
            <p className="text-base text-gray-600 mb-2">Manipulation of light-cured composite resins</p>
            <p className="text-base text-gray-600 mb-2">Manipulation of calcium hydroxide</p>
            <p className="text-base text-gray-600 mb-2">To list the dentin bonding agents and their mechanism of adhesion</p>
            <p className="text-base text-gray-600 mb-2">To describe the pit and fissure sealants</p>
          </section>

          {/* PRECLINICAL PROSTHODONTICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PRECLINICAL PROSTHODONTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Knowledge about the structure and functions of teeth, and jaws and their physiological importance in the physical and social well-being of a patient</p>
            <p className="text-base text-gray-600 mb-2">Understanding teeth occlusion</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about abnormalities in occlusion</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about sequelae following discrepancies in occlusion following improper fabrication of dentures</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate understanding of the properties and composition of elastomeric impression materials</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Fabrication of removal of partial dentures</p>
            <p className="text-base text-gray-600 mb-2">Fabrication of fixed partial dentures</p>
            <p className="text-base text-gray-600 mb-2">To understand the casting procedure</p>
            <p className="text-base text-gray-600 mb-2">Prepare wax pattern</p>
            <p className="text-base text-gray-600 mb-2">To describe the importance, properties of the important base metals used in dentistry</p>
            <p className="text-base text-gray-600 mb-2">Manipulation of base plate wax to make a special tray/temporary base</p>
            <p className="text-base text-gray-600 mb-2">Manipulation of modelling wax to make a wax pattern</p>
            <p className="text-base text-gray-600 mb-2">Technique to construct denture base using acrylic resin</p>
            <p className="text-base text-gray-600 mb-2">Technique to repair fractured denture /mode</p>
          </section>

          {/* GENERAL MEDICINE */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL MEDICINE
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Understanding the various manifestations of common diseases</p>
            <p className="text-base text-gray-600 mb-2">To understand the basic principles of history-taking and clinical examination</p>
            <p className="text-base text-gray-600 mb-2">Knowledge to correlate the clinical symptoms and physical signs to make a provisional diagnosis of common diseases and suggest relevant investigation.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skill:
            </h2>
            <p className="text-base text-gray-600 mb-2">To elicit the required history from the patient,</p>
            <p className="text-base text-gray-600 mb-2">To develop communication skills so as to establish effective communication with the patients and with the scientific community</p>
            <p className="text-base text-gray-600 mb-2">Able to record arterial pulse, blood pressure, temperature, and respiration</p>
            <p className="text-base text-gray-600 mb-2">Able to perform CPR</p>
            <p className="text-base text-gray-600 mb-2">Diagnosis of common clinical problems</p>
            <p className="text-base text-gray-600 mb-2">To interpret common haematological reports, X-ray chest, ECG, CT scan</p>
            <p className="text-base text-gray-600 mb-2">Writing prescriptions and following professional ethics during practice</p>
            <p className="text-base text-gray-600 mb-2">To acquire skills in performing intramuscular and intravenous injections.</p>
          </section>

          {/* GENERAL SURGERY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL SURGERY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Knowledge about common surgical conditions of head and neck</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the appropriate</p>
            <p className="text-base text-gray-600 mb-2">Radiological and haematological investigations</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the various benign and malignant lesions of the head and neck</p>
            <p className="text-base text-gray-600 mb-2">Region and to learn surgical principles.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">To perform the proper general, local, and systemic examination</p>
            <p className="text-base text-gray-600 mb-2">To identify common surgical problems</p>
            <p className="text-base text-gray-600 mb-2">Interpretation of investigational results of common surgical problems</p>
            <p className="text-base text-gray-600 mb-2">To provide first aid with the prompt referral of complicated patients</p>
            <p className="text-base text-gray-600 mb-2">To know minor surgical procedures like abscess drainage, taking a biopsy</p>
            <p className="text-base text-gray-600 mb-2">To know about the universal precautions to be taken against HIV, Hepatitis.</p>
          </section>

          {/* ORAL PATHOLOGY AND ORAL MICROBIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORAL PATHOLOGY AND ORAL MICROBIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To know the basic mechanism of different types of diseases that involves the orofacial tissues</p>
            <p className="text-base text-gray-600 mb-2">To know the oral manifestations of systemic and metabolic diseases</p>
            <p className="text-base text-gray-600 mb-2">To know the use of oral histopathology, FNAC, cytological examination, frozen section, and immunohistochemistry</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about common developmental disturbances of teeth and jaws</p>
            <p className="text-base text-gray-600 mb-2">To know about developmental disturbances of oral soft tissues and para-oral tissues</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Writing oral histopathology and requisition form</p>
            <p className="text-base text-gray-600 mb-2">Handling and maintenance of microscope</p>
            <p className="text-base text-gray-600 mb-2">Interpretation of pathological reports and data</p>
            <p className="text-base text-gray-600 mb-2">Preservation of surgical specimens and preparation of fixative for surgical specimens in 10%formalin</p>
            <p className="text-base text-gray-600 mb-2">Preservation of surgical specimens for immunohistochemistry</p>
          </section>

          {/* ORAL MEDICINE AND RADIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORAL MEDICINE AND RADIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To know the treatment plan and differential diagnosis of common infective and non-infective ulcers occurring in the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">To describe the clinical features, histopathology, and laboratory investigations for common infective and non-infective ulcers in the oral cavity.</p>
            <p className="text-base text-gray-600 mb-2"> Knowledge about pathogenesis, clinical features, and treatment of common autoimmune diseases of the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the identification and differentiation between traumatic and various reactive lesions occurring in the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about various effects of radiation on the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about common viral and bacterial diseases of salivary glands</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about causes and complications of xerostomia</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Able to manage dental, and non-dental pain</p>
            <p className="text-base text-gray-600 mb-2">Management of trigeminal neuralgia, facial paralysis</p>
            <p className="text-base text-gray-600 mb-2">Management of autoimmune diseases of the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Management of leukoplakia and other premalignant lesions of the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">Management of xerostomia</p>
            <p className="text-base text-gray-600 mb-2">Ability to frame appropriate treatment planning</p>
            <p className="text-base text-gray-600 mb-2">Ability to take intraoral periapical radiographs and orthopantomograms and interpret</p>
          </section>

          {/* CONSERVATIVE DENTISTRY AND ENDODONTICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              CONSERVATIVE DENTISTRY AND ENDODONTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To have theoretical knowledge about conservative dentistry and endodontic, in order to integrate theory and practice</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about current concepts of operative and endodontic care</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about new concepts of aesthetic dentistry</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about dental radiology</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skill:
            </h2>
            <p className="text-base text-gray-600 mb-2">The student should be able to demonstrate adequate diagnostic skills, restorative skills, endodontic skills,</p>
            <p className="text-base text-gray-600 mb-2">Ability to perform manual skill and dexterity</p>
            <p className="text-base text-gray-600 mb-2">Communication skills to obtain a medical and psychosocial history</p>
            <p className="text-base text-gray-600 mb-2">Ability to frame an effective treatment plan for the individual patient</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to work in a team and show professionalism</p>
            <p className="text-base text-gray-600 mb-2">Ability to perform emergency pain management</p>
            <p className="text-base text-gray-600 mb-2">Competent enough to practice Minimally Invasive Dentistry (MID) and</p>
            <p className="text-base text-gray-600 mb-2">Evidence-Based Dentistry (EBD) with scientific understanding and thought</p>
          </section>

          {/* PERIODONTICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PERIODONTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">The student should be able to describe the background and scope of Periodontology</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the classification of periodontal diseases and framing of treatment plan as required</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the prevention and progression of periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the basic tissues of periodontium, clinical features of healthy and inflamed gingival</p>
            <p className="text-base text-gray-600 mb-2">Adequate knowledge of the etiology, pathophysiology, diagnosis, and treatment planning of various periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the interrelationship between periodontal disease and systemic disease</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the basic concepts and periodontal aspects of dental implants and management of periodontal health of implants</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Skilled enough to diagnose and manage common periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">To develop an attitude for further learning of subjects</p>
            <p className="text-base text-gray-600 mb-2">To execute the basic principles of periodontal instrumentation</p>
            <p className="text-base text-gray-600 mb-2">Competent enough to perform scaling, root planning, and curettage with oral hygiene instructions with full aseptic precaution</p>
            <p className="text-base text-gray-600 mb-2">To list and identify the basic periodontal instruments</p>
            <p className="text-base text-gray-600 mb-2">To provide a proper referral to a specialist consultant</p>
            <p className="text-base text-gray-600 mb-2">To apply the knowledge and understanding of the prevention of periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">To apply knowledge of Periodontology to integrate with a multidisciplinary treatment approach</p>
          </section>

          {/* PROSTHODONTICS AND CROWN AND BRIDGE */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PROSTHODONTICS AND CROWN AND BRIDGE
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To understand the normal relations of human teeth and jaws in dentulous patients</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate knowledge about complete anatomy and physiology of complete or parte edentulous state.</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about articulation and the concept of occlusion</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about the stepwise process, finish and deliver of different prosthesis</p>
            <p className="text-base text-gray-600 mb-2">To understand the concept of osseointegration and the value of implant-supported prosthodontic procedures</p>
            <p className="text-base text-gray-600 mb-2">To understand the basic concepts of TMJ movements</p>
            <p className="text-base text-gray-600 mb-2">To understand the basic principles of natural and artificial occlusion</p>
            <p className="text-base text-gray-600 mb-2">To understand the basic principles of tooth preparation for the construction of crowns</p>
            <p className="text-base text-gray-600 mb-2">To understand the basic principles of diagnosis, treatment planning of maxillofacial defects</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">To handle various dental materials effectively</p>
            <p className="text-base text-gray-600 mb-2">Competent to treat edentulous and partially edentulous patients</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to treat maxilla-facial defect patient</p>
            <p className="text-base text-gray-600 mb-2">To diagnose and refer patients requiring treatment</p>
            <p className="text-base text-gray-600 mb-2">Ability to identify occlusal discrepancies and correct them appropriately</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to perform construction of inlay, onlay, partial veneer crown, and full veneer crown</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to perform various impression techniques</p>
          </section>

          {/* ORAL AND MAXILLOFACIAL SURGERY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORAL AND MAXILLOFACIAL SURGERY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To demonstrate knowledge about basic concepts in oral and maxillofacial surgery</p>
            <p className="text-base text-gray-600 mb-2">Demonstrate the appropriate attitude to practice in the oral and maxillofacial surgical field</p>
            <p className="text-base text-gray-600 mb-2">Knowledge about diagnosis and effective management of common</p>
            <p className="text-base text-gray-600 mb-2">To understand the principles of management of major oral surgical problems</p>
            <p className="text-base text-gray-600 mb-2">To value the ethical issues</p>
            <p className="text-base text-gray-600 mb-2">To understand the principles of inpatient management</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skill:
            </h2>
            <p className="text-base text-gray-600 mb-2">History taking and clinical examination of common disorders of oral and maxillofacial surgery</p>
            <p className="text-base text-gray-600 mb-2">Competent enough to make appropriate decisions based on risk benefits of maxillofacial surgery</p>
            <p className="text-base text-gray-600 mb-2">To motivate and counsel the importance of regular oral health screening regarding oral cancer</p>
            <p className="text-base text-gray-600 mb-2">Competent enough to perform basic surgical skills of common disorders of oral and maxillofacial surgery</p>
            <p className="text-base text-gray-600 mb-2">To apply the basic principles of surgery like asepsis and hand scrub, care of the hospitalized patient.</p>
            <p className="text-base text-gray-600 mb-2">Able to manage medical emergencies in the dental office providing primary care Ability to manage complications during the operative and postoperative</p>
            <p className="text-base text-gray-600 mb-2">phase</p>
            <p className="text-base text-gray-600 mb-2">Appropriate referral of high-risk patients</p>
            <p className="text-base text-gray-600 mb-2">Competent enough to carry out extraction of teeth under local anesthesia and general anesthesia</p>
            <p className="text-base text-gray-600 mb-2">Able to perform the biopsy and other minor oral surgical procedures</p>
            <p className="text-base text-gray-600 mb-2">To maintain a high standard of professional ethics</p>
          </section>

          {/* ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Knowledge about the etiology, pathophysiology, principles of diagnosis, and management of common dentofacial and orthodontic problems</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate basic knowledge and skill to examine, investigate and diagnose the patient's malocclusion for orthodontic treatment</p>
            <p className="text-base text-gray-600 mb-2">To understand the basic concept of fixed orthodontic appliance</p>
            <p className="text-base text-gray-600 mb-2">To understand the design, plan, and fabrication of functional appliance</p>
            <p className="text-base text-gray-600 mb-2">Understand the principles of cephalometric tracing</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">To identify and diagnose anomalies of dentition, occlusion, facial structures, and abnormal functional conditions (orthodontic patients)</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to detect deviations in the development of dentition, facial growth, and the occurrence of functional abnormalities</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to identify pernicious oral habits that may lead to malocclusion To evaluate the need for orthodontic treatment</p>
            <p className="text-base text-gray-600 mb-2">To plan and execute interceptive orthodontic measures</p>
            <p className="text-base text-gray-600 mb-2">Competent enough to convince the patient to specialized orthodontic</p>
            <p className="text-base text-gray-600 mb-2">consultation</p>
            <p className="text-base text-gray-600 mb-2">To develop communicative skills with the patient regarding preventive, curative, and rehabilitative orthodontic care</p>
            <p className="text-base text-gray-600 mb-2">To formulate a treatment plan for simple types of malocclusions and execute</p>
            <p className="text-base text-gray-600 mb-2">To outline the management protocol</p>
            <p className="text-base text-gray-600 mb-2">To manage simple orthodontic problems</p>
            <p className="text-base text-gray-600 mb-2">Skilled enough to insert and activate the functional appliance</p>
            <p className="text-base text-gray-600 mb-2">To identify normal and abnormal growth patterns of jaws and dentition</p>
            <p className="text-base text-gray-600 mb-2">To identify the changes in face form and facial profile</p>
            <p className="text-base text-gray-600 mb-2">To evaluate the psychological and social impact of abnormal growth and malocclusion</p>
          </section>

          {/* PEDODONTICS AND PREVENTIVE DENTISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PEDODONTICS AND PREVENTIVE DENTISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To demonstrate knowledge about the diagnosis of dental diseases in pediatric patients</p>
            <p className="text-base text-gray-600 mb-2">To demonstrate knowledge of relative analgesia</p>
            <p className="text-base text-gray-600 mb-2">To understand the concept of fixed and removable space maintainer</p>
            <p className="text-base text-gray-600 mb-2">Understanding simple surgical procedures like excision of cysts, epulis, and ranula</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">To identify primary dentition</p>
            <p className="text-base text-gray-600 mb-2">To differentiate between primary and permanent dentition</p>
            <p className="text-base text-gray-600 mb-2">To instill a positive attitude and behavior in patients to maintain good health</p>
            <p className="text-base text-gray-600 mb-2">To promote infant's and children's healthy feeding practice</p>
            <p className="text-base text-gray-600 mb-2">To assess and refer pediatric patients to different specialties appropriately</p>
            <p className="text-base text-gray-600 mb-2">To motivate and treat psychologically challenged pediatric dental patients</p>
            <p className="text-base text-gray-600 mb-2">To counsel and motivate children and parents about good oral hygiene and health</p>
            <p className="text-base text-gray-600 mb-2">To do anterior striping and stainless steel crown</p>
            <p className="text-base text-gray-600 mb-2">To interpret radiographs used in pediatric dentistry</p>
            <p className="text-base text-gray-600 mb-2">To manage a traumatized anterior segment of dentition</p>
            <p className="text-base text-gray-600 mb-2">To apply pit and fissure sealants and fluorides</p>
            <p className="text-base text-gray-600 mb-2">To manage different types of pulpal pathologies</p>
            <p className="text-base text-gray-600 mb-2">To teach pediatric patients about different brushing techniques</p>
            <p className="text-base text-gray-600 mb-2">To diagnose, manage and refer patients with communicative disorders</p>
          </section>

          {/* PUBLIC HEALTH DENTISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PUBLIC HEALTH DENTISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">To demonstrate a complete understanding of the concepts of public health and primary healthcare and their delivery system in the community</p>
            <p className="text-base text-gray-600 mb-2">To understand the different preventive measures to address the prevailing oral and dental problems in the community at each and every level</p>
            <p className="text-base text-gray-600 mb-2">To describe the concept and methods of epidemiology to design simple research in dental background</p>
            <p className="text-base text-gray-600 mb-2">To understand the concept of dental jurisprudence and address the legal issues in dentistryDemonstrate knowledge of the social and psychological patterns of disease causation and its management accordingly</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">Competent to plan and conduct field surveys properly</p>
            <p className="text-base text-gray-600 mb-2">To interact with the community people about oral health status</p>
            <p className="text-base text-gray-600 mb-2">Competent to work in primary healthcare settings</p>
            <p className="text-base text-gray-600 mb-2">Act as an oral health educator</p>
            <p className="text-base text-gray-600 mb-2">Act as a social worker regarding establishing a good oral health status among the community people</p>
            <p className="text-base text-gray-600 mb-2">To provide instruction about- brushing, flossing, interdental cleansing aid, mouthwash</p>
            <p className="text-base text-gray-600 mb-2">To interpret research findings from published journals and articles</p>
            <p className="text-base text-gray-600 mb-2">To promote health promotional materials such as posters, festoons, leaflets, handbills, banners, etc.</p>
          </section>

          {/* COURSE OUTCOME - MDS PERIODONTICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              COURSE OUTCOME – MDS PERIODONTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">Discuss historical perspective to advancement in the subject proper and related topics.</p>
            <p className="text-base text-gray-600 mb-2">• Describe the etiology, pathogenesis, diagnosis, and management of common periodontal diseases with emphasis on the Indian population</p>
            <p className="text-base text-gray-600 mb-2">• Familiarize with the biochemical, microbiologic, and immunologic genetic aspects of periodontal pathology</p>
            <p className="text-base text-gray-600 mb-2">• Describe various preventive periodontal measures</p>
            <p className="text-base text-gray-600 mb-2">• Describe various treatment modalities of periodontal disease from historical aspect to currently available ones</p>
            <p className="text-base text-gray-600 mb-2">• Describe the interrelationship between periodontal disease and various systemic conditions</p>
            <p className="text-base text-gray-600 mb-2">• Describe periodontal hazards due to estrogenic causes and deleterious habits and prevention of it</p>
            <p className="text-base text-gray-600 mb-2">• Identify rarities in periodontal disease and environmental/Emotional determinates in a given case</p>
            <p className="text-base text-gray-600 mb-2">• Recognize conditions that may be outside the area of his/her Speciality/ competence and refer them to an appropriate Specialist</p>
            <p className="text-base text-gray-600 mb-2">• Decide regarding non-surgical or surgical management of the case</p>
            <p className="text-base text-gray-600 mb-2">• Update the student by attending courses, conferences, and seminars relevant to periodontics or by self-learning process.</p>
            <p className="text-base text-gray-600 mb-2">• Plan out/ carry out research activity both basic and clinical aspects with the aim of publishing his/her work in scientific journals</p>
            <p className="text-base text-gray-600 mb-2">• Reach out to the public to motivate and educate them regarding periodontal disease, its prevention, and its consequences if not treated.</p>
            <p className="text-base text-gray-600 mb-2">• Plan out the epidemiological survey to assess the prevalence and incidence of early-onset periodontitis and adult periodontitis in the Indian population (Region wise)</p>
            <p className="text-base text-gray-600 mb-2">• Shall develop knowledge and skill in the science and practice of Oral Implantology</p>
            <p className="text-base text-gray-600 mb-2">• Shall develop teaching skills in the field of Periodontology and Oral Implantology</p>
            <p className="text-base text-gray-600 mb-2">• Principals of Surgery and Medical Emergencies.</p>
            <p className="text-base text-gray-600 mb-2">To sensitize students about the interdisciplinary approach towards the soft tissues of the oral cavity with the help of specialists from other departments.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Take a proper clinical history, thorough examination of intraoral,</p>
            <p className="text-base text-gray-600 mb-2">extraoral, medical history evaluation, advice on essential diagnostic procedures, and interpret them to come to a reasonable diagnosis</p>
            <p className="text-base text-gray-600 mb-2">• Effective motivation and education regarding periodontal disease maintenance after the treatment</p>
            <p className="text-base text-gray-600 mb-2">• Perform both non-surgical & education regarding periodontal disease, maintenance after the treatment</p>
            <p className="text-base text-gray-600 mb-2">• Perform both non-surgical and surgical procedures independently</p>
            <p className="text-base text-gray-600 mb-2">• Provide Basic Life Support Service (BLS) recognizes the need for</p>
            <p className="text-base text-gray-600 mb-2">advanced life support and does the immediate need for that.</p>
            <p className="text-base text-gray-600 mb-2">• Human values, ethical practice to communication abilities</p>
            <p className="text-base text-gray-600 mb-2">• Adopt ethical principles in all aspects of treatment modalities; Professional honesty & integrity are to be fostered. Develop Communication skills to make awareness regarding periodontal disease Apply high moral and ethical standards while carrying out human or animal research, Be humble, accept the limitations in his/her knowledge and skill, ask for help from colleagues when needed, Respect patient's rights and privileges, including patients right to information and right to seek a second opinion.</p>
            <p className="text-base text-gray-600 mb-2">• To learn the principal of lip repositioning and perio esthetics surgeries.</p>
          </section>

          {/* PROSTHODONTICS AND CROWN AND BRIDGES (MDS) */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PROSTHODONTICS AND CROWN AND BRIDGES
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">The candidate should possess knowledge of applied basic and systemic medical sciences.</p>
            <p className="text-base text-gray-600 mb-2">• On human anatomy, embryology, histology, applied in general and particularly to head and neck, Physiology & Biochemistry, Pathology Microbiology & virology; health and diseases of various systems of the body (systemic) principles in surgery and medicine, pharmacology, nutrition, behavioral science, age changes, genetics, Immunology, Congenital defects & syndromes and Anthropology. Bio-medical & Biological Principles</p>
            <p className="text-base text-gray-600 mb-2">• The student shall acquire knowledge of various Dental Materials used in the specialty and be able to provide an appropriate indication, understand the manipulation characteristics, compare with other materials available, and be adept with recent advancements of the same.</p>
            <p className="text-base text-gray-600 mb-2">• Students shall acquire knowledge and practice of history taking, Diagnosis, treatment planning, prognosis, and record maintenance of oral, craniofacial, and systemic regions.</p>
            <p className="text-base text-gray-600 mb-2">• Ability for comprehensive rehabilitation concept with a pre-prosthetic treatment plan including surgical re-evaluation and prosthodontic treatment planning, impressions, jaw relations, utility of face bows, articulators, selection and positioning of teeth, teeth 43 arrangement for retention, stability, esthetics, phonation, psychological comfort, fit and insertion.</p>
            <p className="text-base text-gray-600 mb-2">• Instructions for patients in aftercare and preventive Prosthodontics and management of failed restorations shall be possessed by the students.</p>
            <p className="text-base text-gray-600 mb-2">• Understanding of all the applied aspects of achieving physical, and psychological well-being of the patients for control of diseases and/or treatment-related syndromes with the patient satisfaction and restoring the function of the Craniomandibular system for a quality life of a patient.</p>
            <p className="text-base text-gray-600 mb-2">• Ability to diagnose and plan treatment for patients requiring Prosthodontic therapy</p>
            <p className="text-base text-gray-600 mb-2">• Ability to read and interpret radiographs, and other investigations for the purpose of diagnosis and treatment planning.</p>
            <p className="text-base text-gray-600 mb-2">• The theoretical knowledge and clinical practice shall include principles involved for support, retention, stability, esthetics, phonation, mastication, occlusion, behavioral, psychological, preventive, and social aspects of Prosthodontics science of Oral and Maxillofacial Prosthodontics and Implantology</p>
            <p className="text-base text-gray-600 mb-2">• Tooth and tooth surface restorations, Complete denture Prosthodontics, removable partial denture Prosthodontics, fixed prosthodontics and maxillofacial and Craniofacial Prosthodontics, implants, and implant-supported Prosthodontics, T.M.J., and occlusion, craniofacial esthetics, and biomaterials, craniofacial disorders, problems of psychogenic origin.</p>
            <p className="text-base text-gray-600 mb-2">• Should have knowledge of age changes, geriatric psychology, nutritional considerations, and prosthodontic therapy in the aged population.</p>
            <p className="text-base text-gray-600 mb-2">• Should have the ability to diagnose failed restoration and provide prosthodontic therapy and aftercare.</p>
            <p className="text-base text-gray-600 mb-2">• Should have essential knowledge of ethics, laws, jurisprudence, and</p>
            <p className="text-base text-gray-600 mb-2">Forensic Odontology in Prosthodontics.</p>
            <p className="text-base text-gray-600 mb-2">• Should know general health conditions and emergencies related to prosthodontics treatment like an allergy to various materials and first-line management of aspiration of prosthesis</p>
            <p className="text-base text-gray-600 mb-2">• Should identify social, cultural, economic, environmental, educational, and emotional determinants of the patient and consider them in planning the treatment.</p>
            <p className="text-base text-gray-600 mb-2">• Should identify cases, which are outside the area of his specialty/competence, refer them to appropriate specialists, and perform interdisciplinary case management.</p>
            <p className="text-base text-gray-600 mb-2">• To advice regarding case management involving surgical and interim treatment</p>
            <p className="text-base text-gray-600 mb-2">• Should be competent in the specialization of team management in craniofacial prosthesis design.</p>
            <p className="text-base text-gray-600 mb-2">• To have adequate acquired knowledge, and understanding of applied basic, and systemic medical science knowledge in general and in particular to head and neck regions.</p>
            <p className="text-base text-gray-600 mb-2">• Should attend continuing education programs, seminars, and conferences related to Prosthodontics, thus updating himself/herself.</p>
            <p className="text-base text-gray-600 mb-2">• To teach and guide his/her team, colleagues, and other students.</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to use information technology tools and carry out research both in basic and clinical areas, with the aim of publishing his/ her work and presenting his/her work at various scientific forums.</p>
            <p className="text-base text-gray-600 mb-2">• Should have essential knowledge of personal hygiene, infection control, prevention of cross-infection, and safe disposal of waste, keeping in view the risk of transmission of potential communicable and transmissible infections like Hepatitis and HIV.</p>
            <p className="text-base text-gray-600 mb-2">• Should have the ability to plan and establish Prosthodontics clinic/hospital teaching department and practice management.</p>
            <p className="text-base text-gray-600 mb-2">• Should have a sound knowledge (of the applications in pharmacology, effects of drugs on oral tissues and systems of the body and in medically compromised patients.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">• The candidate should be able to examine the patients requiring Prosthodontic therapy, investigate the patient systemically, analyze the investigation results, and radiographs, diagnose the ailment, plan the treatment, communicate it with the patient, and execute it. 44</p>
            <p className="text-base text-gray-600 mb-2">• To understand the prevalence and prevention of diseases of the craniomandibular system related to prosthetic dentistry.</p>
            <p className="text-base text-gray-600 mb-2">• The candidate should be able to restore lost functions of the stomatognathic system like mastication, speech, appearance, and psychological comforts by understanding biological, biomedical, and bioengineering principles and systemic conditions of the patients to provide quality health care in the craniofacial regions.</p>
            <p className="text-base text-gray-600 mb-2">• The candidate should be able to demonstrate good interpersonal, and communication skills and a team approach in interdisciplinary care by interacting with other specialties including medical specialty for planned team management of patients for craniofacial & oral acquired and congenital defects, temporomandibular joint syndromes, esthetics, Implant supported Prosthetics and problems of Psychogenic origins.</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to demonstrate the clinical competence necessary to carry out appropriate treatment at a higher level of knowledge, training, and practice skills currently available in their specialty area with a patient-centered approach.</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to interpret various radiographs like IOPA, OPG, CBCT, and CT. Should and be able to plan and modify treatment plans based on radiographic findings</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to critically appraise articles published and understand various components of different types of articles and be able to gather the weight of evidence from the same</p>
            <p className="text-base text-gray-600 mb-2">• To identify target diseases and create awareness amongst the population regarding Prosthodontic therapy.</p>
            <p className="text-base text-gray-600 mb-2">• To perform Clinical and Laboratory procedures with a clear understanding of biomaterials, and tissue conditions related to the prosthesis and have the required dexterity & skill for performing clinical and laboratory all procedures in fixed, removable, implant, maxillofacial, TMJ, and esthetics Prosthodontics.</p>
            <p className="text-base text-gray-600 mb-2">• To carry out necessary adjunctive procedures to prepare the patient before prosthesis like tissue preparation and pre-prosthetic surgery and to prepare the patient before prosthesis / prosthetic procedures</p>
            <p className="text-base text-gray-600 mb-2">• To understand the demographic distribution and target diseases of the Craniomandibular region related to Prosthodontics.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Attitudes:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To adopt ethical principles in Prosthodontic practice, Professional honesty, credibility, and integrity are to be fostered. Treatment is to be delivered irrespective of the social status, caste, creed, or religion of the patient. • Should be willing to share knowledge and clinical experience with professional colleagues.</p>
            <p className="text-base text-gray-600 mb-2">• Should develop an attitude towards quality, excellence, and non-compromising in treatment.</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to self-evaluate, reflect and improve on their own.</p>
            <p className="text-base text-gray-600 mb-2">• Should pursue research with a goal to contribute significant, relevant, and useful information, concept, or methodology to the scientific fraternity.</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to demonstrate evidence-based practice while handling cases</p>
            <p className="text-base text-gray-600 mb-2">• Should be willing to adopt new methods and techniques in prosthodontics from time to time based on scientific research, which is in the patient's best interest.</p>
            <p className="text-base text-gray-600 mb-2">• Should respect patient's rights and privileges, including patient's right to information and right to seek a second opinion.</p>
            <p className="text-base text-gray-600 mb-2">• To develop communication skills, in particular, and to explain treatment options available in the management.</p>
            <p className="text-base text-gray-600 mb-2">• To provide leadership and get the best out of his / her group in a congenial working atmosphere.</p>
            <p className="text-base text-gray-600 mb-2">• Should be able to communicate in simple understandable language with the patient and explain the principles of prosthodontics to the patient. She/he should be able to guide and counsel the patient with regard to various treatment modalities available.</p>
            <p className="text-base text-gray-600 mb-2">• To develop the ability to communicate with professional colleagues through various media like the Internet, e-mails, videoconferences, etc. to render the best possible treatment. Should demonstrate good explanatory and demonstrating ability as a teacher in order to facilitate learning among students</p>
          </section>

          {/* CONSERVATIVE DENTISTRY AND ENDODONTICS (MDS) */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              CONSERVATIVE DENTISTRY AND ENDODONTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">At the end of 36 months of training, the candidates should be able to:</p>
            <p className="text-base text-gray-600 mb-2">• Describe etiology, pathophysiology, periapical diagnosis, and management of common restorative situations, and endodontic situations that will include contemporary management of dental caries, management of trauma, and pulpal pathosis including periodontal situations.</p>
            <p className="text-base text-gray-600 mb-2">• Demonstrate understanding of basic sciences as relevant to conservative/restorative dentistry and Endodontics.</p>
            <p className="text-base text-gray-600 mb-2">• Identify social, economic, environmental, and emotional determinants in a given case or community and take them into account for planning and execution at individual and community levels.</p>
            <p className="text-base text-gray-600 mb-2">• Ability to master differential diagnosis and recognize conditions that may require a multi-disciplinary approach or a clinical situation outside the realm of the specialty, which he or she should be able to recognize and refer to appropriate specialists.</p>
            <p className="text-base text-gray-600 mb-2">• Update himself by self-study and by attending basic and advanced courses, conferences, seminars, and workshops in the specialty of –Conservative Dentistry-Endodontics-Dental Materials and Restorative Dentistry.</p>
            <p className="text-base text-gray-600 mb-2">• Ability to teach/guide, colleagues and other students. Use information technology tools and carry out research both basic and clinical with the aim of publishing his work and presenting the same on a scientific platform.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Take proper chair side history, examine the patient, and perform medical and dental diagnostic procedures as well as perform relevant tests and interpret them to come to a reasonable diagnosis about the dental condition in general and Conservative Dentistry – Endodontics in particular. And undertake complete patient monitoring including preoperative as well as post-operative care of the patient.</p>
            <p className="text-base text-gray-600 mb-2">• Perform all levels of restorative work, surgical and non-surgical Endodontics as well as endodontic-periodontal surgical procedures as part of the multidisciplinary approach to clinical condition.</p>
            <p className="text-base text-gray-600 mb-2">• Provide basic life-saving support in emergency situations.</p>
            <p className="text-base text-gray-600 mb-2">• Manage acute pulpal and pulp periodontal situations.</p>
            <p className="text-base text-gray-600 mb-2">• Have a thorough knowledge of infection control measures in the dental clinical environment and laboratories.</p>
            <p className="text-base text-gray-600 mb-2">• Should have proper knowledge of sterilization procedures.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Human values, Ethical practice,
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Communication abilities:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Adopt ethical principles in all aspects of restorative and contemporary Endodontics including non-surgical and surgical Endodontics.</p>
            <p className="text-base text-gray-600 mb-2">• Professional honesty and integrity should be the top priority.</p>
            <p className="text-base text-gray-600 mb-2">• Dental care has to be provided regardless of the social status, caste, creed, or religion of the patient.</p>
            <p className="text-base text-gray-600 mb-2">• Develop communication skills in particular to explain various options available for management and to obtain true informed consent from the patient.</p>
            <p className="text-base text-gray-600 mb-2">• Apply high moral and ethical standards while carrying on human or animal research.</p>
            <p className="text-base text-gray-600 mb-2">• She/he shall not carry out any heroic procedures and must know his limitations in performing all aspects of restorative dentistry including Endodontics. Ask for help from colleagues or seniors when required without hesitation.</p>
          </section>

          {/* ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS (MDS) */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Knowledge and Understanding:
            </h2>
            <p className="text-base text-gray-600 mb-2">1. The dynamic interaction of biologic processes and mechanical forces acting on the stomatognathic system during orthodontic treatment</p>
            <p className="text-base text-gray-600 mb-2">2. The etiology, pathophysiology, diagnosis, and treatment planning of various common Orthodontic problems</p>
            <p className="text-base text-gray-600 mb-2">3. Various treatment modalities in Orthodontics – preventive, interceptive, and corrective.</p>
            <p className="text-base text-gray-600 mb-2">4. Basic sciences relevant to the practice of Orthodontics</p>
            <p className="text-base text-gray-600 mb-2">5. Interaction of social, cultural, economic, genetic, and environmental factors and their relevance to the management of orofacial deformities</p>
            <p className="text-base text-gray-600 mb-2">6. Factors affecting the long-range stability of orthodontic correction and their management</p>
            <p className="text-base text-gray-600 mb-2">7. Personal hygiene and infection control, prevention of cross-infection, and safe disposal of hospital waste keeping in view the high prevalence of Hepatitis and HIV, and other highly contagious diseases.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Skills:
            </h2>
            <p className="text-base text-gray-600 mb-2">1. To obtain proper clinical history, and methodical examination of the patient, perform essential diagnostic procedures and interpret them and arrive at a reasonable diagnosis about the dentofacial deformities.</p>
            <p className="text-base text-gray-600 mb-2">2. To be competent to fabricate and manage the most appropriate appliance – intra or extra oral, removable or fixed, mechanical or functional, and active or passive – for the treatment of any orthodontic problem to be treated singly or as a part of multidisciplinary treatment of oro-facial deformities.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Attitude:
            </h2>
            <p className="text-base text-gray-600 mb-2">1. Develop an attitude to adopt ethical principles in all aspects of Orthodontic practice.</p>
            <p className="text-base text-gray-600 mb-2">2. Professional honesty and integrity are to be fostered</p>
            <p className="text-base text-gray-600 mb-2">3. Treatment care is to be delivered irrespective of the social status, caste, creed, and religion of the patients.</p>
            <p className="text-base text-gray-600 mb-2">4. Willingness to share knowledge and clinical experience with professional colleagues</p>
            <p className="text-base text-gray-600 mb-2">5. Willingness to adopt, after a critical assessment, new methods and techniques of orthodontic management developed from time to time based on scientific research, which is in the best interest of the patient</p>
            <p className="text-base text-gray-600 mb-2">6. Respect patients' rights and privileges, including patient's right to information and the right to seek a second opinion</p>
            <p className="text-base text-gray-600 mb-2">7. Develop an attitude to seek opinions from allied medical and dental specialists as and when required</p>
            <p className="text-base text-gray-600 mb-2">8. Develop adequate communication skills particularly with the patients giving them the various options available to manage a particular Dento-facial problem and to obtain true informed consent from them for the most appropriate treatment available at that point in time.</p>
            <p className="text-base text-gray-600 mb-2">9. Develop the ability to communicate with professional colleagues, in Orthodontics or other specialties through various media like correspondence.</p>
          </section>

          {/* FORMATIVE/INTERNAL ASSESSMENT */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              FORMATIVE/INTERNAL ASSESSMENT:
            </h1>
            <p className="text-base text-gray-600 mb-4">The continuing assessment examination (both Theory/Practical) held at least 3 times in a particular year and the better of two examinations should be considered. The Internal Assessment marks are to be submitted to the University, once every three months. The marks scored by the students shall be displayed on the Notice board and a copy forwarded by HOD shall be sent to the University once every 3 months.</p>
            <p className="text-base text-gray-600 mb-2"><strong>Total – 20 Marks</strong></p>
            <p className="text-base text-gray-600 mb-2"><strong>Theory IA – 10 Marks.</strong></p>
            <p className="text-base text-gray-600 mb-2"><strong>Practical IA -10 Marks.</strong></p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              ASSESSMENT METHOD OF LEARNING OUTCOME – MDS
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              CURRICULUM:
            </h2>
            <p className="text-base text-gray-600 mb-2"><strong>A. Theory:</strong></p>
            <p className="text-base text-gray-600 mb-2"><strong>Part – I: Basic Sciences Paper</strong></p>
            <p className="text-base text-gray-600 mb-2"><strong>Part – II: Paper-I, Paper-II & Paper-III</strong></p>
            <p className="text-base text-gray-600 mb-4">The written examination shall consist of Basic Sciences (Part-I) of three hours duration and shall be conducted at the end of the First year of the MDS course. Part-II Examination shall be conducted at the end of the Third year of the MDS course. Part-II Examination shall consist of Paper-I, Paper-II, and Paper-III, each of three hours duration.</p>

            <p className="text-base text-gray-600 mb-4"><strong>B. Practical / Clinical Examination: 200 Marks (Varies with different subjects)</strong></p>
            <p className="text-base text-gray-600 mb-4">The clinical examination shall be of two days duration</p>

            <p className="text-base text-gray-600 mb-2"><strong>C. Viva Voce: 100 Marks</strong></p>
            <p className="text-base text-gray-600 mb-2"><strong>I. Viva-Voce examination: 80 marks</strong></p>
            <p className="text-base text-gray-600 mb-4">All examiners will conduct viva-voce conjointly on the candidate's comprehension, analytical approach, expression, interpretation of data, and communication skills. It includes all components of course content. It includes a presentation and discussion on the dissertation also.</p>

            <p className="text-base text-gray-600 mb-2"><strong>II. Pedagogy Exercise: 20 marks</strong></p>
            <p className="text-base text-gray-600 mb-2">A topic will be given to each candidate at the beginning of the clinical examination. He/she is asked to make a presentation on the topic for 8-10 minutes.</p>
          </section>

          {/* GENERAL ANATOMY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL ANATOMY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <ul className="list-disc pl-8 space-y-3 text-base text-gray-600 mb-6">
              <li>To acquire knowledge about structural components of the body (macroscopic and microscopic) and correlate it with normal body functions.</li>
              <li>To emphasize development and developmental anomalies of oral, dental, and maxillofacial structures</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Steps taken to attain the specific competencies:
            </h2>
            <ul className="list-disc pl-8 space-y-3 text-base text-gray-600">
              <li>Dissection of human cadavers</li>
              <li>Study of preserved specimens</li>
              <li>Demonstrations</li>
            </ul>
          </section>

          {/* HUMAN PHYSIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              HUMAN PHYSIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To acquire adequate knowledge and develop skills to perform physiology laboratory tests.</p>
            <p className="text-base text-gray-600 mb-2">• To interpret these normal functions with a view to differentiate from abnormal functions</p>
            <p className="text-base text-gray-600 mb-2">• To demonstrate the knowledge and understanding of biomolecules</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Estimation of Hb concentration.</p>
            <p className="text-base text-gray-600 mb-2">• Determination of differential count of white blood cells (WBC)</p>
            <p className="text-base text-gray-600 mb-2">• Determination of bleeding time & clotting time.</p>
            <p className="text-base text-gray-600 mb-2">• Determination of blood grouping & cross-matching.</p>
            <p className="text-base text-gray-600 mb-2">• Determination of Erythrocyte Sedimentation Rate (ESR).</p>
            <p className="text-base text-gray-600 mb-2">• OSPE: Recording BP by palpatory and auscultatory method Examination of the radial pulse</p>
          </section>

          {/* BIOCHEMISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              BIOCHEMISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To apply the knowledge and understanding of biochemistry in dentistry</p>
            <p className="text-base text-gray-600 mb-2">• To demonstrate the knowledge and understanding of biomolecules forming the structure of the human body, their functions, and their role in health and disease.</p>
            <p className="text-base text-gray-600 mb-2">• To learn the normal biochemical values in conventional and SI. Units</p>
            <p className="text-base text-gray-600 mb-2">• To diagnose diabetes.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To Estimate blood glucose</p>
            <p className="text-base text-gray-600 mb-2">• To Estimate abnormal constituents of urine (sugar, protein & ketone bodies) and their clinical significance</p>
          </section>

          {/* DENTAL ANATOMY, EMBRYOLOGY, AND ORAL HISTOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              DENTAL ANATOMY, EMBRYOLOGY, AND ORAL HISTOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To identify different teeth in the different dentitions</p>
            <p className="text-base text-gray-600 mb-2">• To explain any tooth by its morphology</p>
            <p className="text-base text-gray-600 mb-2">• To acquire the clinical importance of teeth and oral tissues.</p>
            <p className="text-base text-gray-600 mb-2">• To mention the histological structures of teeth and associated oral structures</p>
            <p className="text-base text-gray-600 mb-2">• To differentiate between normal and pathological states of oral structures.</p>
            <p className="text-base text-gray-600 mb-2">• To Outline the development of maxillae, mandible, palate, tongue, and lips.</p>
            <p className="text-base text-gray-600 mb-2">• Able to understand the age changes of normal oral structures</p>
            <p className="text-base text-gray-600 mb-2">• Able to learn the chronology and pattern of tooth eruption and its clinical significance</p>
            <p className="text-base text-gray-600 mb-2">• To learn the physiologic process of tooth development.</p>
            <p className="text-base text-gray-600 mb-2">• To learn in detail the formation of enamel, dentine, cementum, pulp, periodontal ligament, salivary glands, and Temporomandibular joint.</p>
            <p className="text-base text-gray-600 mb-2">• To learn the mechanisms and theories of tooth eruption</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Wax carving of permanent tooth</p>
            <p className="text-base text-gray-600 mb-2">• Microscopic examination and study of dental and oral structures, salivary glands</p>
          </section>

          {/* GENERAL PATHOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL PATHOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To learn about the causes & pathogenesis of diseases</p>
            <p className="text-base text-gray-600 mb-2">• To demonstrate the knowledge and understanding of general pathological and preventive knowledge about diseases</p>
            <p className="text-base text-gray-600 mb-2">• To apply pathological knowledge in practicing dental surgery to improve the oral and dental health</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Test for abnormal constituents of urine like sugar, albumin, and ketone bodies</p>
            <p className="text-base text-gray-600 mb-2">• Demonstration of specimens.</p>
            <p className="text-base text-gray-600 mb-2"><strong>OSPE</strong></p>
            <p className="text-base text-gray-600 mb-2">• Hematological investigation – total and differential count</p>
          </section>

          {/* MICROBIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              MICROBIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To have knowledge & understanding of sterilization, asepsis, and infection prevention</p>
            <p className="text-base text-gray-600 mb-2">• To learn about the characteristics of different types of disease-causing microorganisms</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To study different types and parts of the microscope</p>
            <p className="text-base text-gray-600 mb-4"><strong>OSPE:</strong></p>
            <p className="text-base text-gray-600 mb-2">• Gram staining</p>
            <p className="text-base text-gray-600 mb-2">• Biomedical waste segregation</p>
            <p className="text-base text-gray-600 mb-2">• Hand washing technique</p>
          </section>

          {/* GENERAL PHARMACOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL PHARMACOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Describe indications, contraindications and side effects of medicines related to dental practice.</p>
            <p className="text-base text-gray-600 mb-2">• To manage dental pain</p>
            <p className="text-base text-gray-600 mb-2">• To learn about the proper use of local anaesthetic agents</p>
            <p className="text-base text-gray-600 mb-2">• To prescribe drugs for common dental problems</p>
            <p className="text-base text-gray-600 mb-2">• To learn therapeutic decision making</p>
            <p className="text-base text-gray-600 mb-2">• To write rational prescription</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-4"><strong>OSPE:</strong></p>
            <p className="text-base text-gray-600 mb-2">• Preparation of tooth powder</p>
            <p className="text-base text-gray-600 mb-2">• Preparation of tooth paste</p>
            <p className="text-base text-gray-600 mb-2">• Writing prescription</p>
          </section>

          {/* DENTAL MATERIALS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              DENTAL MATERIALS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To have knowledge about physical and chemical properties of dental materials</p>
            <p className="text-base text-gray-600 mb-2">• A student must learn to manipulate dental materials to be used in clinical practice</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Making of impression with impression compound</p>
            <p className="text-base text-gray-600 mb-2">• Manipulation of gypsum products</p>
            <p className="text-base text-gray-600 mb-2">• Manipulation of dental cements</p>
          </section>

          {/* PRE-CLINICAL CONSERVATIVE DENTISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PRE-CLINICAL CONSERVATIVE DENTISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To develop skills in cavity preparation and restorative procedures</p>
            <p className="text-base text-gray-600 mb-2">• To develop skills in the manipulation of dental materials used in conservative dentistry</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Cavity preparation in plaster models</p>
            <p className="text-base text-gray-600 mb-2">• Cavity preparation and restoration in phantom models</p>
          </section>

          {/* PRE-CLINICAL PROSTHODONTICS & CROWN & BRIDGE */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PRE-CLINICAL PROSTHODONTICS & CROWN & BRIDGE
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To develop skills for the fabrication of complete dentures and removable partial dentures</p>
            <p className="text-base text-gray-600 mb-2">• To develop skills in the manipulation of various impression materials for clinical practice</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Preparation of special trays</p>
            <p className="text-base text-gray-600 mb-2">• Preparation of occlusal rims and teeth setting in the articulator</p>
          </section>

          {/* GENERAL MEDICINE */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL MEDICINE
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• The student should be able to perform a general physical examination and look for anemia, cyanosis, clubbing, and jaundice and to record vital signs- pulse, BP, temperature.</p>
            <p className="text-base text-gray-600 mb-2">• To know history taking from the patient and writing</p>
            <p className="text-base text-gray-600 mb-2">• To diagnose various systemic diseases from history and physical findings</p>
            <p className="text-base text-gray-600 mb-2">• Interpret and correlate physical findings with investigations like X-ray, hematology, urine and stool examination</p>
            <p className="text-base text-gray-600 mb-2">• To learn intramuscular and intravenous injections</p>
            <p className="text-base text-gray-600 mb-2">• Prescription writing</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Patient examination and case presentation</p>
            <p className="text-base text-gray-600 mb-2">• Case discussions of diagnosis of various systemic diseases and investigations. systemic diseases from history and physical findings</p>
          </section>

          {/* GENERAL SURGERY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GENERAL SURGERY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To identify the common surgical problems, consider the differential diagnosis and complications</p>
            <p className="text-base text-gray-600 mb-2">• The student must be able to learn and mention benign and malignant tumors of soft and hard tissue of the head and neck</p>
            <p className="text-base text-gray-600 mb-2">• To be able to perform minor surgical procedures like incision and drainage of abscess</p>
            <p className="text-base text-gray-600 mb-2">• To take biopsy under local anesthesia</p>
            <p className="text-base text-gray-600 mb-2">• Understanding about personal and patient safety in OPD and OT through proper asepsis and infection prevention</p>
            <p className="text-base text-gray-600 mb-2">• Knowledge and management of shock and appropriate referral in potential emergency situations during dental procedures.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-4"><strong>OSCE:</strong></p>
            <p className="text-base text-gray-600 mb-2">• Patient care- diagnosis and treatment planning</p>
            <p className="text-base text-gray-600 mb-2">• Case discussions</p>
          </section>

          {/* ORAL PATHOLOGY AND ORAL MICROBIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORAL PATHOLOGY AND ORAL MICROBIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To learn the oral manifestations of systemic diseases</p>
            <p className="text-base text-gray-600 mb-2">• To learn the etiology, clinical features, radiographic and histopathological features of common developmental disturbances of teeth and jaws</p>
            <p className="text-base text-gray-600 mb-2">• To acquire knowledge about clinical and histopathologic features of odontogenic, non – odontogenic, and salivary gland tumors</p>
            <p className="text-base text-gray-600 mb-2">• Basic knowledge about biopsy and frozen section in the diagnosis of oral disease</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Microscopic examination of the histopathologic slide</p>
            <p className="text-base text-gray-600 mb-2">• Demonstration of specimens</p>
            <p className="text-base text-gray-600 mb-2">• Demonstration of models</p>
          </section>

          {/* ORAL MEDICINE AND RADIOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORAL MEDICINE AND RADIOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Knowledge about red and white lesions of oral cavity</p>
            <p className="text-base text-gray-600 mb-2">• To know about clinical features and laboratory investigations for common infective and non-infective ulcers of the oral cavity</p>
            <p className="text-base text-gray-600 mb-2">• Knowledge about radiation safety, hazards,</p>
            <p className="text-base text-gray-600 mb-2">• Must be able to take and interpret intraoral radiographs</p>
            <p className="text-base text-gray-600 mb-2">• Knowledge about clinical features and pathogenesis of vesiculobullous lesions of the oral mucosa</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Oral cavity examination with detailed recording of case history</p>
            <p className="text-base text-gray-600 mb-2">• Taking intraoral periapical radiographs and their interpretation</p>
          </section>

          {/* CONSERVATIVE DENTISTRY AND ENDODONTICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              CONSERVATIVE DENTISTRY AND ENDODONTICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To be able to diagnose all types of carious lesions</p>
            <p className="text-base text-gray-600 mb-2">• To prepare class I and class II cavities and restore them with amalgam</p>
            <p className="text-base text-gray-600 mb-2">• Competent to carry out small composite restorations</p>
            <p className="text-base text-gray-600 mb-2">• To understand the principles of aesthetic dental procedures</p>
            <p className="text-base text-gray-600 mb-2">• The student should learn about patient assessment and diagnostic procedures for endodontic therapy</p>
            <p className="text-base text-gray-600 mb-2">• Able to perform RCT for anterior teeth</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Class I and class II amalgam restorations</p>
            <p className="text-base text-gray-600 mb-2">• Composite restorations</p>
            <p className="text-base text-gray-600 mb-2">• Deep caries management</p>
            <p className="text-base text-gray-600 mb-2">• Endodontic procedures of anterior teeth</p>
          </section>

          {/* ORAL AND MAXILLOFACIAL SURGERY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORAL AND MAXILLOFACIAL SURGERY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Able to diagnose, manage and treat patients with oral surgical problems</p>
            <p className="text-base text-gray-600 mb-2">• Understand and practice the basic principles of sterilization</p>
            <p className="text-base text-gray-600 mb-2">• Should be competent in the extraction of teeth</p>
            <p className="text-base text-gray-600 mb-2">• Able to provide primary care and manage medical emergencies in the dental office</p>
            <p className="text-base text-gray-600 mb-2">• Have a broad knowledge of maxillofacial surgery and oral implantology</p>
            <p className="text-base text-gray-600 mb-2">• Should be familiar with legal, ethical, and moral issues pertaining to patient care and communication skills</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Extraction of teeth under local anesthesia</p>
            <p className="text-base text-gray-600 mb-2">• Assisting surgical procedures</p>
            <p className="text-base text-gray-600 mb-2">• Patient history taking</p>
            <p className="text-base text-gray-600 mb-2">• Case discussions</p>
          </section>

          {/* ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To understand about the normal growth and development of facial skeleton and dentition</p>
            <p className="text-base text-gray-600 mb-2">• To diagnose different types of malocclusion</p>
            <p className="text-base text-gray-600 mb-2">• To manage and treat simple malocclusion like anterior spacing using removable appliances</p>
            <p className="text-base text-gray-600 mb-2">• Treatment planning and execution of preventive and interceptive orthodontics</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Cephalometric tracing</p>
            <p className="text-base text-gray-600 mb-2">• Orthodontic wire bending</p>
            <p className="text-base text-gray-600 mb-2">• Fabrication of simple orthodontic appliances</p>
          </section>

          {/* PAEDIATRIC AND PREVENTIVE DENTISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PAEDIATRIC AND PREVENTIVE DENTISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Knowledge about management of dental diseases in children</p>
            <p className="text-base text-gray-600 mb-2">• Able to manage physically and mentally disabled children efficiently according to their treatment needs</p>
            <p className="text-base text-gray-600 mb-2">• Able to guide and counsel the parents about the various paediatric dental treatment modalities available</p>
            <p className="text-base text-gray-600 mb-2">• To understand the principles of prevention and preventive dentistry in children</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Scaling and restorative procedures</p>
            <p className="text-base text-gray-600 mb-2">• Case history taking.</p>
          </section>

          {/* PERIODONTOLOGY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PERIODONTOLOGY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• To diagnose and manage common periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">• To learn the basic principles of periodontal instrumentation and perform it</p>
            <p className="text-base text-gray-600 mb-2">• Identification of periodontal instruments</p>
            <p className="text-base text-gray-600 mb-2">• To perform scaling and root planning with full aseptic precautions</p>
            <p className="text-base text-gray-600 mb-2">• To provide oral hygiene instructions to patients</p>
            <p className="text-base text-gray-600 mb-2">• To learn appropriate investigations to diagnose periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">• To have an understanding of prevention of periodontal diseases</p>
            <p className="text-base text-gray-600 mb-2">• Must be able to furnish initial treatment plan and treat gingivitis and periodontitis cases</p>
            <p className="text-base text-gray-600 mb-2">• To be able to perform minor surgical procedures like abscess drainage, operculectomy etc.</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Case history and case discussion</p>
            <p className="text-base text-gray-600 mb-2">• Assisting surgical procedures</p>
            <p className="text-base text-gray-600 mb-2">• Oral prophylaxis</p>
          </section>

          {/* PROSTHODONTICS AND CROWN AND BRIDGE */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PROSTHODONTICS AND CROWN AND BRIDGE
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Competent to carry out conventional complete and partial removable dentures, fixed partial dentures</p>
            <p className="text-base text-gray-600 mb-2">• Able to understand and use various dental materials</p>
            <p className="text-base text-gray-600 mb-2">• Competent to carry out routine prosthodontic procedures</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Fabrication of removable and fixed partial dentures</p>
            <p className="text-base text-gray-600 mb-2">• Fabrication of complete dentures</p>
          </section>

          {/* PUBLIC HEALTH DENTISTRY */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              PUBLIC HEALTH DENTISTRY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">
              Specific Competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Apply the principles of health promotion and disease prevention</p>
            <p className="text-base text-gray-600 mb-2">• To have knowledge about the provision of community dental healthcare</p>
            <p className="text-base text-gray-600 mb-2">• To have community-based preventive measures</p>
            <p className="text-base text-gray-600 mb-2">• To administer oral hygiene instructions, topical fluoride therapy, pit, and sealant application</p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4 mt-6">
              Steps taken to attain the specific competencies:
            </h2>
            <p className="text-base text-gray-600 mb-2">• Conducting Dental health education campaigns</p>
            <p className="text-base text-gray-600 mb-2">• Recording of Indices</p>
            <p className="text-base text-gray-600 mb-2">• Prevention of dental restorative procedure</p>
          </section>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
