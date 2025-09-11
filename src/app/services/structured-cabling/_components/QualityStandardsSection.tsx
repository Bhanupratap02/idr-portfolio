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
    <div className="flex items-start space-x-4 sm:space-x-5">
      <div className="bg-[#DCFCE7] rounded-full p-2 sm:p-2.5 lg:p-3 xl:p-3.5 2xl:p-4 flex-shrink-0">
        <CheckIcon className="w-3 h-3 sm:w-3.5 sm:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-green-700" />
      </div>
      <div className="space-y-1 sm:space-y-2 min-w-0 flex-1">
        <h3 className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E] leading-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262] leading-relaxed">
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
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-stretch h-full">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start h-full order-2 lg:order-1 border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <Image
              src={cables}
              alt="Network Infrastructure Rack"
              className="w-full h-full  rounded-lg object-cover shadow-md "
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 450px, (max-width: 1280px) 500px, (max-width: 1920px) 519px, 600px"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 2xl:space-y-10 3xl:space-y-12 flex flex-col justify-center h-full order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4 lg:space-y-4 2xl:space-y-5 3xl:space-y-7">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E] leading-tight">
                Done Right — Not Just Done
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] leading-relaxed 3xl:leading-loose">
                At IDR, we believe in doing the job right the first time. Our
                installations meet the highest industry standards and are built
                to last.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 lg:space-y-5 2xl:space-y-7 3xl:space-y-8">
              {qualityItems.map((item, index) => (
                <QualityItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            {/* Partner Logos */}
            <div className="flex items-center space-x-6  2xl:pt-2 3xl:pt-8">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Image
                    key={index}
                    src={cloud}
                    alt="Partner Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
