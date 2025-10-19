/** @format */

import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  TargetIcon,
  FileText,
  MonitorCog,
} from "lucide-react";

import whyUs4 from "@/assets/why_us/why_us_4.png";
import whyUs7 from "@/assets/why_us/why_us_7.png";
import whyUs8 from "@/assets/why_us/why_us_8.png";
import whyUs9 from "@/assets/why_us/why_us_9.png";

const featureCards = [
  {
    title: "Professional Project Management",
    description:
      "Every job is managed by a dedicated project manager to ensure clear communication, smooth coordination, and flawless delivery.",
    icon: ClipboardList,
    image: whyUs4,
  },
  {
    title: "Regional Reach, Local Focus",
    description:
      "Serving clients across New York, New Jersey, Florida, and surrounding regions with responsive, local service.",
    icon: TargetIcon,
    image: whyUs7,
  },
  {
    title: "Clean Documentation & Labeling",
    description:
      "Labeled racks, drop maps, test reports, and laminated plans provided for every system.",
    icon: FileText,
    image: whyUs8,
  },
  {
    title: "The IDR Portal",
    description:
      "A secure dashboard for every client — view service records, documentation, tickets, licensing, and more.",
    icon: MonitorCog,
    image: whyUs9,
  },
];

export default function WhyChooseUsFeatures() {
  return (
    <section className="w-full bg-[#EFF5FF] mt-20 rounded-3xl py-16 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20 3xl:px-32 overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 2xl:gap-10 w-full">
          {featureCards.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                       className="
                  group relative bg-white rounded-xl overflow-hidden shadow-sm 
                  transition duration-300 cursor-pointer 
                  flex flex-col justify-center 
                  hover:shadow-lg
                  h-[300px] sm:h-[230px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[320px] 3xl:h-[420px]
                "
                // className="group relative bg-white rounded-xl overflow-hidden shadow-sm transition duration-300 cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[280px] 2xl:min-h-[320px] hover:shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-opacity group-hover:opacity-0 duration-500 z-10">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-fill"
         
                  />
                </div>

                {/* Hover Content */}
                <div className="relative z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 2xl:p-8 flex flex-col justify-center">
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-[#052557] mb-4">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl  font-semibold text-[#2E2E2E] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base 2xl:text-lg text-[#626262] leading-relaxed ">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link href="/contact">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-medium text-base hover:px-10 hover:py-4.5 transition-all cursor-pointer">
              Schedule A Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
