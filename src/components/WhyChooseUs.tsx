/** @format */

import Image from "next/image";
import {
  BadgeCheck,
  HouseWifi,
  SquareCode,
  ClipboardList,
  Network,
  Truck,
  TargetIcon,
  FileText,
  MonitorCog,
} from "lucide-react";

import whyUs1 from "@/assets/why_us/why_us_1.png";
import whyUs2 from "@/assets/why_us/why_us_2.png";
import whyUs3 from "@/assets/why_us/why_us_3.png";
import whyUs4 from "@/assets/why_us/why_us_4.png";
import whyUs5 from "@/assets/why_us/why_us_5.png";
import whyUs6 from "@/assets/why_us/why_us_6.png";
import whyUs7 from "@/assets/why_us/why_us_7.png";
import whyUs8 from "@/assets/why_us/why_us_8.png";
import whyUs9 from "@/assets/why_us/why_us_9.png";

const iconMap = {
  "Certified & Trusted Teams": BadgeCheck,
  "Smart, Consultative Design": HouseWifi,
  "Code-Compliant, Standards": SquareCode,
  "Professional Project Management": ClipboardList,
  "Integrated Technology Expertise": Network,
  "True End-to-End Delivery": Truck,
  "Regional Reach, Local Focus": TargetIcon,
  "Clean Documentation & Labeling": FileText,
  "The IDR Portal": MonitorCog,
};

const imageMap = [
  whyUs1,
  whyUs2,
  whyUs3,
  whyUs4,
  whyUs5,
  whyUs6,
  whyUs7,
  whyUs8,
  whyUs9,
];

const features = [
  {
    title: "Certified & Trusted Teams",
    description:
      "Our work is performed by IDR-certified technicians and carefully vetted subcontractors who meet our exact standards.",
  },
  {
    title: "Smart, Consultative Design",
    description:
      "Every project starts with thoughtful planning, needs analysis, and system design — not just labor.",
  },
  {
    title: "Code-Compliant, Standards",
    description:
      "We build to NEC, NFPA, IEEE, TIA, and BICSI standards across all installations.",
  },
  {
    title: "Professional Project Management",
    description:
      "Every job is managed by a dedicated project manager to ensure clear communication, smooth coordination, and flawless delivery.",
  },
  {
    title: "Integrated Technology Expertise",
    description:
      "We connect systems the right way: networking, A/V, access control, intercoms, surveillance, alarms, and more.",
  },
  {
    title: "True End-to-End Delivery",
    description:
      "From consulting and design to installation and long-term support — we handle every phase in-house.",
  },
  {
    title: "Regional Reach, Local Focus",
    description:
      "Serving clients across New York, New Jersey, Florida, and surrounding regions with responsive, local service.",
  },
  {
    title: "Clean Documentation & Labeling",
    description:
      "Labeled racks, drop maps, test reports, and laminated plans provided for every system.",
  },
  {
    title: "The IDR Portal",
    description:
      "A secure dashboard for every client — view service records, documentation, tickets, licensing, and more.",
  },
] as const;

type FeatureTitle = (typeof features)[number]["title"];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#EFF5FF] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[100rem] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl 3xl:text-7xl font-semibold text-[#3D3D3D] text-center mb-12 sm:mb-16 leading-tight">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 3xl:gap-14">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.title as FeatureTitle];
            const HoverImage = imageMap[index];

            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm p-6 2xl:p-8 flex flex-col transition duration-300"
              >
                {/* Hover Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <Image
                    src={HoverImage}
                    alt={feature.title}
                    fill
                    className="object-fill"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 text-[#052557] mb-4">
                    {IconComponent && (
                      <IconComponent className="w-full h-full" />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#2E2E2E] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-[#626262] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
