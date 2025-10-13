/** @format */

import {
  Building2,
  Briefcase,
  Building,
  Home,
  GraduationCap,
  Users,
} from "lucide-react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  gradient: string;
}

function UseCaseCard({
  icon,
  title,
  description,
  bgColor,
  gradient,
}: UseCaseCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-3 sm:gap-4  rounded-2xl p-5 sm:p-6 md:p-7 xl:p-8 2xl:p-10 text-center transition-all transform hover:scale-105 hover:shadow-xl duration-300 group ${gradient}`}
    >
      <div
        className={`flex size-12 sm:size-14 md:size-16 xl:size-18 2xl:size-20 items-center justify-center rounded-full ${bgColor} group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1.5 sm:gap-2 xl:gap-2.5 2xl:gap-3">
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl ">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ButterflyMXUseCases() {
  const useCases = [
    {
      icon: (
        <Building2 className="size-6 sm:size-7 xl:size-8 2xl:size-9 text-white" />
      ),
      title: "Apartment & Condo Buildings",
      description: "Secure entry for residential properties",
      bgColor: "bg-blue-600",
      gradient: "bg-gradient-to-b from-blue-50 to-blue-100",
    },
    {
      icon: (
        <Briefcase className="size-6 sm:size-7 xl:size-8 2xl:size-9 text-white" />
      ),
      title: "Commercial Offices",
      description: "Professional access control for business",
      bgColor: "bg-green-600",
      gradient: "bg-gradient-to-b from-green-50 to-green-100",
    },
    {
      icon: (
        <Building className="size-6 sm:size-7 xl:size-8 2xl:size-9 text-white" />
      ),
      title: "Mixed-Use Developments",
      description: "Flexible solutions for complex properties",
      bgColor: "bg-purple-600",
      gradient: "bg-gradient-to-b from-purple-50 to-purple-100",
    },
    {
      icon: (
        <Home className="size-6 sm:size-7 xl:size-8 2xl:size-9 text-white" />
      ),
      title: "Gated Communities",
      description: "HOA properties and private communities",
      bgColor: "bg-orange-600",
      gradient: "bg-gradient-to-b from-orange-50 to-orange-100",
    },
    {
      icon: (
        <GraduationCap className="size-6 sm:size-7 xl:size-8 2xl:size-9 text-white" />
      ),
      title: "Student Housing",
      description: "Modern access for educational facilities",
      bgColor: "bg-teal-600",
      gradient: "bg-gradient-to-b from-teal-50 to-teal-100",
    },
    {
      icon: (
        <Users className="size-6 sm:size-7 xl:size-8 2xl:size-9 text-white" />
      ),
      title: "Urban Living Spaces",
      description: "Contemporary housing solutions",
      bgColor: "bg-red-600",
      gradient: "bg-gradient-to-b from-red-50 to-red-100",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 md:mb-6 xl:mb-8  text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
            Ideal Use Cases
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            Perfect for any property type that needs modern access control
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
