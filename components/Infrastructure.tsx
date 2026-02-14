import { Building2, Laptop, Microscope, Cog, BookOpen, Home, Activity, LucideIcon } from 'lucide-react';

export default function Infrastructure() {
  const facilities: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    bgColor: string;
  }> = [
    {
      icon: Building2,
      title: '200+ Dental Chairs & 100+ Hospital Beds',
      description: 'Treating 500+ patients daily',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Laptop,
      title: 'Simulation Labs',
      description: 'Pre-clinical training',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Microscope,
      title: 'Advanced Imaging',
      description: 'CBCT, OPG, RVG systems',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Cog,
      title: 'CAD/CAM Lab',
      description: 'Digital prosthetics',
      bgColor: 'bg-pink-100'
    },
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: '10,000+ resources',
      bgColor: 'bg-green-100'
    },
    {
      icon: Microscope,
      title: 'Research Labs',
      description: 'Dedicated research facilities',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Home,
      title: 'Hostels',
      description: 'Separate for men & women',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Activity,
      title: 'Sports Complex',
      description: 'Indoor & outdoor facilities',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Infrastructure</h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
            State-of-the-Art Facilities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Experience dental education with cutting-edge technology and comprehensive clinical infrastructure.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${facility.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <facility.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2">{facility.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
