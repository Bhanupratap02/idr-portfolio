/** @format */

import { Check, ArrowRight } from "lucide-react";

export default function LegacySystemsSection() {
  const features = [
    {
      title: "Hybrid System Compatibility",
      description:
        "Seamlessly integrate new wireless components with existing hardwired infrastructure.",
    },
    {
      title: "Alarm Panel Upgrades",
      description:
        "Replace outdated control panels while preserving your investment in sensors and wiring.",
    },
    {
      title: "Takeovers and Reprogramming",
      description:
        "We can take over and reprogram systems installed by other providers.",
    },
    {
      title: "Hardwired Device Support",
      description:
        "Maintain compatibility with existing hardwired sensors and devices.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6130e18364d24b9baecb4e09ffc44d00b7c32cbe?width=592"
                alt="Legacy system before"
                className="w-full h-80 object-cover"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c42038448f6f8bf7da9ec7a59fa9436d2b5cc7f4?width=592"
                alt="Modern system after"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Centered Arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <ArrowRight className="w-4 h-4 text-[#0056B3]" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-[#2E2E2E] text-3xl lg:text-4xl font-medium">
              Yes, We Support Legacy Systems
            </h2>

            <p className="text-[#626262] text-xl leading-relaxed">
              Upgrade your existing hardwired systems without ripping out
              infrastructure.
            </p>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="text-[#2E2E2E] text-xl font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#626262] text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
