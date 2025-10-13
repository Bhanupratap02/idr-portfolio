/** @format */

import { Workflow, FileText, Video, Fingerprint } from "lucide-react";

export function IntegrationsSection() {
  const integrations = [
    {
      icon: Workflow,
      color: "bg-purple-100",
      title: "Orchestrate",
      description: "Automation workflows",
    },
    {
      icon: FileText,
      color: "bg-blue-100",
      title: "DMS",
      description: "Document management",
    },
    {
      icon: Video,
      color: "bg-green-100",
      title: "Unity Video",
      description: "Integrated surveillance",
    },
    {
      icon: Fingerprint,
      color: "bg-orange-100",
      title: "Biometrics",
      description: "Identity verification",
    },
  ];

  return (
    <section className="w-full bg-white py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Header */}
        <div className="mb-10 text-center md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  mb-4 md:mb-6 text-[#2e2e2e]">
            Integrations & Ecosystem
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light text-gray-600 leading-relaxed">
            Connect with your existing systems and third-party hardware
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10  mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="text-center space-y-4 xl:space-y-5 2xl:space-y-6 group"
            >
              <div
                className={`${integration.color} size-16 md:size-18 xl:size-20 2xl:size-22 rounded-xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-200`}
              >
                <integration.icon className="size-6 md:size-7 xl:size-8 2xl:size-9 text-gray-700 group-hover:scale-102 transition-transform duration-200" />
              </div>
              <div>
                <h3 className="text-lg  md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl mb-1 text-[#2e2e2e]">
                  {integration.title}
                </h3>
                <p className="text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light text-gray-600">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
