/** @format */

import {
  NetworkIcon,
  CableIcon,
  HardDriveIcon,
  BuildingIcon,
  ZapIcon,
  MonitorIcon,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

function ServiceCard({
  icon,
  title,
  description,
  iconBgColor,
}: ServiceCardProps) {
  return (
    <div className="bg-[#F9FAFB] rounded-lg p-6 space-y-4 h-full">
      <div className="flex items-start space-x-4">
        <div className={`${iconBgColor} rounded-full p-3.5 flex-shrink-0`}>
          {icon}
        </div>
        <div className="space-y-4 flex-1">
          <h3 className="text-xl font-medium text-[#2E2E2E] leading-7">
            {title}
          </h3>
          <p className="text-base text-[#626262] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalCablingSection() {
  const services = [
    {
      icon: <NetworkIcon className="w-6 h-6 text-[#3B82F6]" />,
      title: "Cat5e / Cat6 / Cat6a Cabling",
      description:
        "High-speed network cabling solutions supporting bandwidths from 1Gbps to 10Gbps for your critical infrastructure.",
      iconBgColor: "bg-[#DBEAFE]",
    },
    {
      icon: <CableIcon className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Fiber Optic Backbone",
      description:
        "Future-proof your network with high-capacity fiber optic cabling for long-distance, high-bandwidth applications.",
      iconBgColor: "bg-[#F3E8FF]",
    },
    {
      icon: <HardDriveIcon className="w-5 h-5 text-[#16A34A]" />,
      title: "Patch Panels & Faceplates",
      description:
        "Professional-grade connectivity components for organized, manageable, and scalable network infrastructure.",
      iconBgColor: "bg-[#DCFCE7]",
    },
    {
      icon: <BuildingIcon className="w-4 h-5 text-[#DC2626]" />,
      title: "MDF/IDF Builds",
      description:
        "Custom-designed telecommunications rooms with proper racking, cooling, and power to support your network infrastructure.",
      iconBgColor: "bg-[#FEE2E2]",
    },
    {
      icon: <ZapIcon className="w-4 h-5 text-[#CA8A04]" />,
      title: "POE for Devices",
      description:
        "Power over Ethernet solutions for phones, wireless access points, cameras, and other network devices.",
      iconBgColor: "bg-[#FEF9C3]",
    },
    {
      icon: <MonitorIcon className="w-6 h-5 text-[#4F46E5]" />,
      title: "A/V & Automation Cabling",
      description:
        "Specialized cabling solutions for audio/visual systems and smart building automation technologies.",
      iconBgColor: "bg-[#E0E7FF]",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-28">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-medium text-[#2E2E2E]">
            Professional Cabling We Offer
          </h2>
          <p className="text-xl text-[#626262] max-w-4xl mx-auto leading-relaxed">
            Our comprehensive cabling solutions support all your networking
            needs with the highest standards of quality and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
