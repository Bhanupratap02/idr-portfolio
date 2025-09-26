/** @format */

import { BarChart3, Upload, Users, Building } from "lucide-react";
import Image from "next/image";
import DashboardImg from "@/assets/partners/mvi/dashboard.png";
export default function PowerfulToolsSection() {
  const tools = [
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description:
        "Monitor the status of all intercom stations and hardware in real-time from a central dashboard.",
    },
    {
      icon: Upload,
      title: "Remote Updates",
      description:
        "Deploy firmware updates and security patches remotely without disrupting service.",
    },
    {
      icon: Users,
      title: "Directory Management",
      description:
        "Easily update resident directories and manage access permissions from any web browser.",
    },
    {
      icon: Building,
      title: "Multi-Building Management",
      description:
        "Centralized web dashboards for managing intercom systems across multiple properties.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 leading-tight">
            Powerful Tools for Property Teams
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-14 2xl:gap-2 items-center">
          <div className="flex justify-center">
            <Image
              src={DashboardImg}
              alt="MVI Systems Management Dashboard interface showing intercom monitoring"
              className="w-full max-w-xl sm:max-w-2xl xl:max-w-2xl  h-auto rounded-xl  hover:-translate-y-4 transition-all duration-700"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 xl:gap-12">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 sm:gap-5 md:gap-6 hover:translate-x-1 transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 sm:p-4 rounded-full">
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5  2xl:w-6 2xl:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 max-w-none xl:max-w-lg 2xl:max-w-xl">
                    <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-800 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base xl:text-lg 2xl:text-xl font-light leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
