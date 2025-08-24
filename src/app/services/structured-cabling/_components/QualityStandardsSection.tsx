/** @format */

import { CheckIcon } from "lucide-react";
import cables from "@/assets/services/structured-cabling/cables.png";
import cloud from "@/assets/services/structured-cabling/cloud.png";
import Image from "next/image";
interface QualityItemProps {
  title: string;
  description: string;
}

function QualityItem({ title, description }: QualityItemProps) {
  return (
    <div className="flex items-start space-x-5">
      <div className="bg-[#DCFCE7] rounded-full p-2.5 flex-shrink-0">
        <CheckIcon className="w-3.5 h-4 text-[#16A34A]" />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-[#2E2E2E]">{title}</h3>
        <p className="text-base text-[#626262] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function QualityStandardsSection() {
  const qualityItems = [
    {
      title: "NEC & IEEE Compliance",
      description:
        "All installations adhere to National Electrical Code and IEEE standards.",
    },
    {
      title: "Proper Infrastructure",
      description:
        "Grounded racks, cable ladders, and trays installed to specification.",
    },
    {
      title: "Detailed Documentation",
      description: "Laminated floorplans and comprehensive labeling systems.",
    },
    {
      title: "Safety-First Methods",
      description:
        "Firestopping and safety protocols that exceed requirements.",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={cables}
              alt="Network Infrastructure Rack"
              className="w-full max-w-[519px] h-[590px] rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-[#2E2E2E]">
                Done Right — Not Just Done
              </h2>
              <p className="text-xl text-[#626262] leading-relaxed">
                At IDR, we believe in doing the job right the first time. Our
                installations meet the highest industry standards and are built
                to last.
              </p>
            </div>

            <div className="space-y-6">
              {qualityItems.map((item, index) => (
                <QualityItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            {/* Partner Logos */}
            <div className="flex items-center space-x-6 pt-8">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Image
                    key={index}
                    src={cloud}
                    alt="Partner Logo"
                    className="w-12 h-12 opacity-70"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
