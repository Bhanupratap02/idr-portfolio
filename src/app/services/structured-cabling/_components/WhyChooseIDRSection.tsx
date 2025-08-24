/** @format */

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import team from "@/assets/services/structured-cabling/teams.png"
interface BenefitItemProps {
  title: string;
}

function BenefitItem({ title }: BenefitItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-[#DCFCE7] rounded-full p-2.5 flex-shrink-0">
        <CheckIcon className="w-3.5 h-4 text-[#16A34A]" />
      </div>
      <span className="text-lg text-[#2E2E2E] font-normal">{title}</span>
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
    <section className="w-full bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-[#2E2E2E]">
            Why Teams Choose IDR
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Left Content - Benefits List */}
            <div className="space-y-6 col-span-1 lg:col-span-1">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} title={benefit} />
              ))}
            </div>

            {/* Right Content - Team Image */}
            <div className="flex justify-center lg:col-span-2 ">
              <Image
                src={team}
                alt="IDR Team"
                className="w-full max-w-full h-[256px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
