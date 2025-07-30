/** @format */

"use client";
import {
  BadgeCheck,
  HouseWifi,
  SquareCode,
  ClipboardList,
  Network,
  Truck,
  TargetIcon,
  FileText,
  // LayoutDashboard,
  MonitorCog,
} from "lucide-react";

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
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#EFF5FF] px-4 sm:px-6 lg:px-32 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#3D3D3D] text-center mb-12 sm:mb-16 leading-tight">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, i) => {
            const IconComponent = iconMap[feature.title];
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col"
              >
                <div className="w-10 h-10 text-[#052557] mb-4">
                  {IconComponent && <IconComponent className="w-full h-full" />}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
