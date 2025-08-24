/** @format */

import { MapIcon, TrendingUpIcon, ImageIcon, TicketIcon } from "lucide-react";
import portal from "@/assets/services/structured-cabling/portal.png"
import Image from "next/image";
interface PortalFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

function PortalFeature({
  icon,
  title,
  description,
  iconBgColor,
}: PortalFeatureProps) {
  return (
    <div className="flex items-center space-x-6">
      <div className={`${iconBgColor} rounded-full p-3.5 flex-shrink-0`}>
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-medium text-[#2E2E2E]">{title}</h3>
        <p className="text-base text-[#626262] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function IDRPortalSection() {
  const portalFeatures = [
    {
      icon: <MapIcon className="w-4.5 h-4 text-[#2563EB]" />,
      title: "Drop Maps & Port Labels",
      description:
        "Interactive maps of your entire cabling infrastructure with detailed port information.",
      iconBgColor: "bg-[#DBEAFE]",
    },
    {
      icon: <TrendingUpIcon className="w-4 h-4 text-[#16A34A]" />,
      title: "Cable Test Results",
      description:
        "Access detailed test results for every cable in your infrastructure.",
      iconBgColor: "bg-[#DCFCE7]",
    },
    {
      icon: <ImageIcon className="w-4 h-4 text-[#9333EA]" />,
      title: "Rack & Tray Photos",
      description:
        "Visual documentation of your installation for reference and planning.",
      iconBgColor: "bg-[#F3E8FF]",
    },
    {
      icon: <TicketIcon className="w-4.5 h-4 text-[#DC2626]" />,
      title: "Real-time Ticket Updates",
      description:
        "Track the status of your support requests and service tickets in real-time.",
      iconBgColor: "bg-[#FEE2E2]",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Portal Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={portal}
                alt="IDR Portal Dashboard"
                className="w-full max-w-[584px] h-full rounded-lg  object-fill"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium text-[#2E2E2E] leading-tight">
                The IDR Portal — Everything in One Place
              </h2>
              <p className="text-xl text-[#626262] leading-relaxed">
                Access all your cabling documentation, testing results, and
                support tickets through our intuitive client portal.
              </p>
            </div>

            <div className="space-y-6">
              {portalFeatures.map((feature, index) => (
                <PortalFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconBgColor={feature.iconBgColor}
                />
              ))}
            </div>

            <div className="pt-6">
              <p className="text-xl text-[#2E2E2E] font-normal">
                No paperwork. Just clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
