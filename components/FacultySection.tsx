import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. [Principal Name]',
    designation: 'Principal & Dean',
    qualification: 'MDS, PhD',
    experience: '25+ years',
    department: 'Administration',
  },
  {
    name: 'Dr. [Faculty Name]',
    designation: 'Professor & HOD',
    qualification: 'MDS (Orthodontics)',
    experience: '18+ years',
    department: 'Orthodontics & Dentofacial Orthopedics',
  },
  {
    name: 'Dr. [Faculty Name]',
    designation: 'Professor & HOD',
    qualification: 'MDS (Periodontics)',
    experience: '15+ years',
    department: 'Periodontics',
  },
  {
    name: 'Dr. [Faculty Name]',
    designation: 'Professor & HOD',
    qualification: 'MDS (Prosthodontics)',
    experience: '16+ years',
    department: 'Prosthodontics Crown & Bridge',
  },
  {
    name: 'Dr. [Faculty Name]',
    designation: 'Professor & HOD',
    qualification: 'MDS (Conservative Dentistry)',
    experience: '14+ years',
    department: 'Conservative Dentistry & Endodontics',
  },
];

export default function FacultySection() {
  return (
    <section className="hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Meet Our Experts</h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
            Our Faculty
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Learn from experienced dental professionals with decades of clinical and academic expertise.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-[#FBFBEE] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#006837]">{member.name}</h4>
                  <p className="text-xs text-[#7cb983] font-semibold">{member.designation}</p>
                </div>
              </div>
              <div className="space-y-1.5 text-sm text-gray-600">
                <p><span className="font-medium text-gray-700">Qualification:</span> {member.qualification}</p>
                <p><span className="font-medium text-gray-700">Experience:</span> {member.experience}</p>
                <p><span className="font-medium text-gray-700">Department:</span> {member.department}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to faculty page */}
        <div className="text-center">
          <Link
            href="/faculty"
            className="inline-block bg-[#006837] hover:bg-[#00532c] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm sm:text-base"
          >
            View All Faculty →
          </Link>
        </div>
      </div>
    </section>
  );
}
