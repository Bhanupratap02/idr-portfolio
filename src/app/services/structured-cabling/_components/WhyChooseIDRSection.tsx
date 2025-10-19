/** @format */

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import IDR_TEAM from "@/assets/aboutus/team-photo.png";
interface BenefitItemProps {
  title: string;
}

function BenefitItem({ title }: BenefitItemProps) {
  return (
    <div className="flex items-center space-x-3 sm:space-x-4 group">
      <div className="bg-[#DCFCE7] rounded-full p-2 2xl:p-2.5  3xl:p-3 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
        <CheckIcon className="w-3 h-3 sm:w-3.5 sm:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-[#16A34A]" />
      </div>
      <span className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[#2E2E2E] font-normal">
        {title}
      </span>
    </div>
  );
}

export default function WhyChooseIDRSection() {
  const benefits = [
    "Code-compliant installations",
    "Certified technicians",
    "Expert cable management",
    "All systems in-house",
    "Integrated documentation",
    "Optional support & MAC",
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[92rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 3xl:px-28">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-18 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E]  mx-auto leading-relaxed">
            Why Teams Choose IDR
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-7 lg:p-8  3xl:p-10 hover:shadow-xl transition-shadow duration-200">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12  3xl:gap-18 items-center">
            {/* Left Content - Benefits List */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 col-span-1 lg:col-span-1 order-2 lg:order-1">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} title={benefit} />
              ))}
            </div>

            {/* Right Content - Team Image */}
            <div className="flex justify-center lg:col-span-2 order-1 lg:order-2">
              <Image
                src={IDR_TEAM}
                alt="IDR Team"
                className="w-full max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
