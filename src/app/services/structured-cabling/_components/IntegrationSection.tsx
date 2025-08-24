/** @format */

import {
  WifiIcon,
  NetworkIcon,
  KeyIcon,
  VideoIcon,
  BellIcon,
  SettingsIcon,
} from "lucide-react";

interface IntegrationItemProps {
  icon: React.ReactNode;
  title: string;
  iconBgColor: string;
}

function IntegrationItem({ icon, title, iconBgColor }: IntegrationItemProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={`${iconBgColor} rounded-full p-8 w-24 h-24 flex items-center justify-center`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-medium text-[#2E2E2E] text-center">
        {title}
      </h3>
    </div>
  );
}

export default function IntegrationSection() {
  const integrations = [
    {
      icon: <WifiIcon className="w-9 h-8 text-[#3B82F6]" />,
      title: "Wi-Fi",
      iconBgColor: "bg-[#EFF6FF]",
    },
    {
      icon: <NetworkIcon className="w-9 h-8 text-[#A855F7]" />,
      title: "IT Networking",
      iconBgColor: "bg-[#FAF5FF]",
    },
    {
      icon: <KeyIcon className="w-8 h-8 text-[#22C55E]" />,
      title: "Access Control",
      iconBgColor: "bg-[#F0FDF4]",
    },
    {
      icon: <VideoIcon className="w-8 h-8 text-[#EF4444]" />,
      title: "Surveillance",
      iconBgColor: "bg-[#FEF2F2]",
    },
    {
      icon: <BellIcon className="w-7 h-8 text-[#EAB308]" />,
      title: "Intercoms & Alarms",
      iconBgColor: "bg-[#FEFCE8]",
    },
    {
      icon: <SettingsIcon className="w-8 h-8 text-[#6366F1]" />,
      title: "A/V & BMS Systems",
      iconBgColor: "bg-[#EEF2FF]",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-28">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-medium text-[#2E2E2E]">
            Designed for Integration
          </h2>
          <p className="text-base text-[#626262] max-w-3xl mx-auto leading-relaxed">
            Our structured cabling systems serve as the foundation for all your
            technology needs, ensuring seamless integration across platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((item, index) => (
            <IntegrationItem
              key={index}
              icon={item.icon}
              title={item.title}
              iconBgColor={item.iconBgColor}
            />
          ))}
        </div>

        <div className="mt-16 bg-[#F9FAFB] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-medium text-[#2E2E2E] mb-4">
            Future-proof your tech stack
          </h3>
          <p className="text-base text-[#626262] max-w-4xl mx-auto leading-relaxed">
            Our structured cabling solutions are designed to accommodate your
            current needs while providing the flexibility to adapt to future
            technological advancements.
          </p>
        </div>
      </div>
    </section>
  );
}
