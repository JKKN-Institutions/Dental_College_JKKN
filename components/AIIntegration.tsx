import Link from 'next/link';
import { Sparkles, Brain, Microscope, GraduationCap } from 'lucide-react';

export default function AIIntegration() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Advanced AI tools integrated into curriculum for enhanced diagnostic accuracy and treatment planning"
    },
    {
      icon: Microscope,
      title: "Digital Diagnostics",
      description: "AI-assisted imaging analysis and CAD/CAM technology for precision dental procedures"
    },
    {
      icon: GraduationCap,
      title: "Smart Education",
      description: "ChatGPT and AI tools for research, case studies, and personalized learning pathways"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>PIONEERING INNOVATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            India's 1st Human-AI AGI Dental Campus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading the future of dental education with cutting-edge AI integration,
            empowering students with technology-enhanced learning and clinical excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/ai-dental-campus"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore AI Integration
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
