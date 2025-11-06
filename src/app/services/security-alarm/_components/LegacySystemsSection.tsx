/** @format */
import Image from "next/image";
const legacy_before = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fsecurity-alarm%2Flegacy_before.png";
const legacy_after = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fsecurity-alarm%2Flegacy_after.png";
import { Check, ArrowRight } from "lucide-react";
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
export default function LegacySystemsSection() {


  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-36 bg-white">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 rounded-lg overflow-hidden ">
              <Image
                src={legacy_before}
                alt="Legacy system before"
                width={800}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 2xl:h-[400px]  object-cover"
              />
              <Image
                src={legacy_after}
                alt="Modern system after"
                width={800}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 2xl:h-[400px]  object-cover"
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
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[2.75rem] 3xl:text-[3.4rem]  font-semibold ">
              Yes, We Support Legacy Systems
            </h2>

            <p className="text-[#626262] text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed">
              Upgrade your existing hardwired systems without ripping out
              infrastructure.
            </p>

            <ul className="space-y-4 sm:space-y-6 2xl:space-y-7 3xl:space-y-9">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="text-[#2E2E2E] text-lg md:text-xl 3xl:text-2xl  font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#626262] text-sm md:text-base xl:text-lg 2xl:text-[1.2rem] 3xl:text-xl leading-relaxed">
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
