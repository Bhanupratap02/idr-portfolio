/** @format */

import { Smartphone, Video, Key, Home, FileText, Puzzle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 md:p-7 xl:p-8 2xl:p-10 shadow-sm hover:shadow-md transition-all duration-300 group hover:transform hover:scale-105">
      <div
        className={`flex size-10 sm:size-11 md:size-12 xl:size-14 2xl:size-16 items-center justify-center rounded-lg ${bgColor} group-hover:scale-110 transition-transform duration-300`}
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

export function ButterflyMXFeatures() {
  const features = [
    {
      icon: (
        <Smartphone className="size-5 sm:size-6 xl:size-7 2xl:size-8 text-blue-600" />
      ),
      title: "Mobile App Unlock",
      description: "Let tenants open doors from anywhere with the mobile app",
      bgColor: "bg-blue-100",
    },
    {
      icon: (
        <Video className="size-5 sm:size-6 xl:size-7 2xl:size-8 text-green-600" />
      ),
      title: "Video Calling + Guest Access",
      description: "See who's at the door before letting them in",
      bgColor: "bg-green-100",
    },
    {
      icon: (
        <Key className="size-5 sm:size-6 xl:size-7 2xl:size-8 text-purple-600" />
      ),
      title: "Virtual Keys & PINs",
      description: "Secure delivery codes and virtual access keys",
      bgColor: "bg-purple-100",
    },
    {
      icon: (
        <Home className="size-5 sm:size-6 xl:size-7 2xl:size-8 text-red-600" />
      ),
      title: "No In-Unit Hardware",
      description: "Works with phones, tablets, and cloud infrastructure",
      bgColor: "bg-red-100",
    },
    {
      icon: (
        <FileText className="size-5 sm:size-6 xl:size-7 2xl:size-8 text-orange-600" />
      ),
      title: "Event Logging",
      description: "Time-stamped photos and comprehensive activity logs",
      bgColor: "bg-orange-100",
    },
    {
      icon: (
        <Puzzle className="size-5 sm:size-6 xl:size-7 2xl:size-8 text-teal-600" />
      ),
      title: "Easy Integration",
      description: "Connects with access control, smart locks, and PMS",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 text-center">
          <h2 className="mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
            Why ButterflyMX?
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            Advanced features that make property access simple and secure
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
