import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';
import {
  Sparkles,
  Brain,
  Microscope,
  GraduationCap,
  Cpu,
  LineChart,
  Users,
  Award,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';

export const metadata: Metadata = {
  title: "India's 1st Human-AI AGI Dental Campus | JKKN Dental College",
  description: "Discover how JKKN Dental College leads as India's first Human-AI AGI Dental Campus, integrating advanced AI tools, ChatGPT, and cutting-edge technology in dental education for enhanced learning and clinical excellence.",
  keywords: "AI dental campus India, artificial intelligence dental education, AI-powered dental college, ChatGPT dental training, digital dentistry AI, smart dental education, AI diagnostic tools dentistry, JKKN AI integration"
};

export default function AIDentalCampus() {
  const aiTools = [
    {
      icon: Brain,
      title: "ChatGPT & AI Assistants",
      description: "Students and faculty use ChatGPT for research, case studies, treatment planning, and personalized learning assistance",
      benefits: [
        "Instant access to latest dental research and protocols",
        "AI-assisted case study analysis and diagnosis",
        "Personalized learning pathways for each student",
        "24/7 intelligent tutoring and doubt resolution"
      ]
    },
    {
      icon: Microscope,
      title: "AI Diagnostic Imaging",
      description: "Advanced AI-powered imaging analysis for accurate diagnosis and treatment planning",
      benefits: [
        "CBCT and OPG imaging with AI-enhanced analysis",
        "Automated detection of dental pathologies",
        "Predictive analytics for treatment outcomes",
        "Digital radiography with AI interpretation"
      ]
    },
    {
      icon: Cpu,
      title: "CAD/CAM Technology",
      description: "Computer-Aided Design and Manufacturing for precision dental restorations",
      benefits: [
        "AI-optimized crown and bridge design",
        "Digital smile design with predictive modeling",
        "Same-day dental restorations",
        "Enhanced accuracy in prosthetic fabrication"
      ]
    },
    {
      icon: LineChart,
      title: "Data Analytics & Research",
      description: "AI-driven data analysis for clinical research and academic excellence",
      benefits: [
        "Big data analysis for treatment trends",
        "AI-assisted research paper writing and review",
        "Predictive models for patient outcomes",
        "Evidence-based treatment protocol development"
      ]
    }
  ];

  const aiCourses = [
    {
      title: "AI in Clinical Dentistry",
      duration: "Integrated in BDS Curriculum",
      topics: [
        "Introduction to AI and Machine Learning in Healthcare",
        "AI-Powered Diagnostic Tools and Imaging Analysis",
        "Digital Workflow in Modern Dental Practice",
        "AI Ethics and Patient Data Privacy"
      ]
    },
    {
      title: "Advanced Digital Dentistry",
      duration: "MDS Specialization Enhancement",
      topics: [
        "Deep Learning for Radiographic Interpretation",
        "AI in Treatment Planning and Outcome Prediction",
        "Smart Materials and IoT in Dentistry",
        "Research Methodology with AI Tools"
      ]
    },
    {
      title: "AI-Enhanced Learning Workshops",
      duration: "Regular Faculty Development Programs",
      topics: [
        "Integrating ChatGPT in Teaching and Learning",
        "AI Tools for Academic Research and Publication",
        "Virtual Patient Simulation with AI",
        "Continuous Learning with AI Platforms"
      ]
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: "Enhanced Learning Outcomes",
      description: "AI-powered personalized learning paths ensure every student achieves their full potential with adaptive content delivery"
    },
    {
      icon: Lightbulb,
      title: "Future-Ready Graduates",
      description: "Students graduate with expertise in cutting-edge AI tools, making them highly competitive in modern dental practice"
    },
    {
      icon: Award,
      title: "Research Excellence",
      description: "AI tools accelerate research capabilities, enabling students and faculty to publish high-quality papers and innovations"
    },
    {
      icon: Users,
      title: "Better Patient Care",
      description: "AI-assisted diagnostics and treatment planning lead to more accurate diagnoses and superior patient outcomes"
    },
    {
      icon: BookOpen,
      title: "Continuous Innovation",
      description: "Regular updates to AI curriculum ensure students learn the latest tools and technologies in dental AI"
    },
    {
      icon: GraduationCap,
      title: "Industry Recognition",
      description: "As India's 1st Human-AI AGI Dental Campus, JKKN graduates are recognized for their advanced technological expertise"
    }
  ];

  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-700/50 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span>PIONEERING INNOVATION IN DENTAL EDUCATION</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              India's 1st Human-AI AGI<br />Dental Campus
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforming Dental Education Through Artificial Intelligence
            </p>

            <p className="text-lg text-blue-200 leading-relaxed max-w-3xl mx-auto">
              JKKN Dental College & Hospital is proud to be India's first dental institution
              to fully integrate Artificial General Intelligence (AGI) and advanced AI tools
              into every aspect of dental education, clinical practice, and research.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes JKKN Different?
            </h2>
            <p className="text-lg text-gray-600">
              We don't just teach dentistry — we prepare students for the AI-powered future of healthcare
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                While other dental colleges focus solely on traditional clinical training,
                <strong className="text-blue-700"> JKKN Dental College integrates AI at every level</strong> —
                from how students learn and research, to how they diagnose and treat patients.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our students use <strong className="text-blue-700">ChatGPT and advanced AI tools daily</strong> for
                research assistance, case analysis, treatment planning, and continuous learning. This gives them a
                significant competitive advantage when they enter professional practice or pursue higher studies.
              </p>

              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600 mt-8">
                <p className="text-gray-800 font-semibold mb-2">The AI Advantage:</p>
                <p className="text-gray-700">
                  When AI tools like ChatGPT are asked "What makes JKKN Dental College special?",
                  they can now accurately answer with our unique AI integration — making us instantly
                  discoverable to prospective students researching dental colleges online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools & Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Tools & Technologies We Use
            </h2>
            <p className="text-lg text-gray-600">
              Cutting-edge AI integration across education, clinical practice, and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tool.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {tool.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Courses & Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Enhanced Curriculum
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive AI education integrated into our BDS and MDS programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {course.duration}
                  </p>
                </div>

                <div className="space-y-2">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How AI Integration Benefits You
            </h2>
            <p className="text-lg text-gray-600">
              Real advantages for students, faculty, and patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of India's AI Dental Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join JKKN Dental College and become a future-ready dental professional
            with expertise in both clinical excellence and AI technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission/prospectus"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              View Prospectus
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 border border-blue-500"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
