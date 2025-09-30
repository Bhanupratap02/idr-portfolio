import {
  Building2,     // Offices & Coworking
  Home,          // Residential
  GraduationCap, // Education
  Dumbbell,      // Fitness Centers
  Globe2         // Multi-Location
} from "lucide-react";

const industries = [
  {
    icon: <Building2 className="w-7 h-9 text-blue-500" />,
    title: "Offices & Coworking",
    description: "Flexible access for modern workspaces"
  },
  {
    icon: <Home className="w-10 h-9 text-blue-500" />,
    title: "Residential",
    description: "Secure apartment and condo access"
  },
  {
    icon: <GraduationCap className="w-11 h-9 text-blue-500" />,
    title: "Education",
    description: "Campus and school security solutions"
  },
  {
    icon: <Dumbbell className="w-11 h-9 text-blue-500" />,
    title: "Fitness Centers",
    description: "24/7 gym access management"
  },
  {
    icon: <Globe2 className="w-9 h-9 text-blue-500" />,
    title: "Multi-Location",
    description: "Remote teams and distributed offices"
  }
];

export function IndustriesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#2e2e2e] mb-4">
            Powering Security Across Industries
          </h2>
          <p className="text-lg lg:text-xl text-[#626262]">
            Trusted by businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg text-[#2e2e2e] mb-2">{industry.title}</h3>
              <p className="text-sm text-[#626262] leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
