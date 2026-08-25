"use client";

/**
 * MDS Direct Answer Blocks — AEO featured snippet bait
 *
 * 8 direct-answer blocks targeting high-volume PAA queries for "mds colleges
 * in tamilnadu" cluster. Each answer is 40–55 words, optimized for Google
 * featured snippet selection and voice search (Speakable markup).
 *
 * Queries covered:
 * 1. What are the top MDS colleges in Tamil Nadu?
 * 2. How many MDS seats are there in Tamil Nadu?
 * 3. What is the MDS course fees in Tamil Nadu?
 * 4. What is the duration of MDS course in Tamil Nadu?
 * 5. What is the eligibility for MDS admission in Tamil Nadu?
 * 6. How to get MDS admission in Tamil Nadu?
 * 7. Which is the best MDS specialization in Tamil Nadu?
 * 8. Is NEET MDS compulsory for MDS admission in Tamil Nadu?
 */

type AnswerBlock = {
  question: string;
  answer: string;
};

const answerBlocks: AnswerBlock[] = [
  {
    question: "What are the top MDS colleges in Tamil Nadu?",
    answer:
      "Tamil Nadu has 32+ MDS dental colleges, including JKKN Dental College & Hospital (Komarapalayam), Saveetha Dental College (Chennai), SRM Dental College (Chennai), Sri Ramachandra Dental College (Porur), and Meenakshi Ammal Dental College (Chennai). These institutions are DCI-approved and offer specialized postgraduate dental programs with strong clinical exposure.",
  },
  {
    question: "How many MDS seats are there in Tamil Nadu?",
    answer:
      "Tamil Nadu has 435 sanctioned MDS seats across 19 dental colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University for the academic year 2025-26 — 2 government colleges holding 79 seats and 17 self-financing colleges holding 356. Deemed-to-be universities such as Saveetha and SRM award their own degrees and are not in that matrix. JKKN Dental College holds 18 of the 435 seats across 5 specialisations.",
  },
  {
    question: "What is the MDS course fees in Tamil Nadu?",
    answer:
      "Tamil Nadu’s MDS prospectuses for 2026-27 set exactly one tuition amount: ₹30,000 a year for Government Institutions. For self-financing colleges, on government-quota and management or NRI seats alike, the prospectuses state the tuition is fixed by the Committee on Fixation of Fees in respect of Self-Financing Professional Colleges and publish no figure, so no reliable private-college range can be quoted. Security deposits are published: ₹30,000 for government colleges, ₹1,00,000 for government-quota seats in self-financing colleges and ₹2,00,000 for management quota. Source: Selection Committee, Directorate of Medical Education and Research, MDS Prospectus 2026-2027.",
  },
  {
    question: "What is the duration of MDS course in Tamil Nadu?",
    answer:
      "The MDS (Master of Dental Surgery) course duration in Tamil Nadu is 3 years, as per Dental Council of India (DCI) regulations. This is a full-time postgraduate program that includes theoretical coursework, clinical practice, research dissertation, and hands-on training across all specializations.",
  },
  {
    question: "What is the eligibility for MDS admission in Tamil Nadu?",
    answer:
      "To be eligible for MDS admission in Tamil Nadu, candidates must hold a BDS degree from a DCI-recognized dental college, complete a 1-year compulsory rotating internship, obtain permanent registration with State Dental Council, and qualify NEET MDS with a valid score meeting the annual cutoff.",
  },
  {
    question: "How to get MDS admission in Tamil Nadu?",
    answer:
      "To get MDS admission in Tamil Nadu: (1) Complete BDS with 1-year internship, (2) Register for NEET MDS conducted by NBEMS, (3) Qualify NEET MDS with minimum cutoff, (4) Apply for state or all-India counselling, (5) Participate in seat allotment, and (6) Complete document verification and enrollment.",
  },
  {
    question: "Which is the best MDS specialization in Tamil Nadu?",
    answer:
      "The best MDS specialization depends on career interest. High-demand specializations in Tamil Nadu include Orthodontics (dental alignment), Prosthodontics (implants & crowns), Conservative Dentistry & Endodontics (root canals), Periodontics (gum & implant surgery), and Oral Medicine & Radiology. JKKN Dental College offers all 5 core specializations.",
  },
  {
    question: "Is NEET MDS compulsory for MDS admission in Tamil Nadu?",
    answer:
      "Yes, NEET MDS is compulsory for all MDS admissions in Tamil Nadu, whether in government, private, or deemed universities. NEET MDS is conducted annually by the National Board of Examinations in Medical Sciences (NBEMS). Candidates must qualify with the cutoff score announced each year to be eligible for counselling.",
  },
];

export default function MDSDirectAnswers() {
  return (
    <section
      className="py-16 px-4 bg-[#FBFBEE]"
      aria-labelledby="mds-direct-answers-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
            <span className="text-white font-semibold text-sm uppercase">
              Quick Answers
            </span>
          </div>
        </div>

        <h2
          id="mds-direct-answers-heading"
          className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4"
        >
          MDS Tamil Nadu — Quick Answers
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Direct answers to the most common questions about MDS dental colleges,
          fees, admission, and eligibility in Tamil Nadu.
        </p>

        <div className="space-y-6">
          {answerBlocks.map((block, idx) => (
            <article
              key={idx}
              className="bg-white border-l-4 border-[#7cb983] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#006837] mb-3">
                {block.question}
              </h3>
              <p className="mds-direct-answer text-gray-700 leading-relaxed">
                {block.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
