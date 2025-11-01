import {
  Building2,     // Offices & Coworking
  Home,          // Residential
  GraduationCap, // Education
  Dumbbell,      // Fitness Centers
  Globe2         // Multi-Location
} from "lucide-react";

const industries = [
  {
    icon: <Building2 className="size-8 md:size-10 text-blue-500" />,
    title: "Offices & Coworking",
    description: "Flexible access for modern workspaces"
  },
  {
    icon: <Home className="size-8 md:size-10 text-blue-500" />,
    title: "Residential",
    description: "Secure apartment and condo access"
  },
  {
    icon: <GraduationCap className="size-8 md:size-10 text-blue-500" />,
    title: "Education",
    description: "Campus and school security solutions"
  },
  {
    icon: <Dumbbell className="size-8 md:size-10 text-blue-500" />,
    title: "Fitness Centers",
    description: "24/7 gym access management"
  },
  {
    icon: <Globe2 className="size-8 md:size-10 text-blue-500" />,
    title: "Multi-Location",
    description: "Remote teams and distributed offices"
  }
];

export function IndustriesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
              <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16  text-center">
                    <h2  className="mb-3 sm:mb-4 md:mb-6   text-2xl font-bold text-[#2e2e2e] sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
            Powering Security Across Industries
          </h2>
                   <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            Trusted by businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl mb-2">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-base 2xl:text-lg font-light">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
