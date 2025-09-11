/** @format */
import wifi from "@/assets/services/structured-cabling/icons/wifi.png";
import it from "@/assets/services/structured-cabling/icons/it.png";
import access from "@/assets/services/structured-cabling/icons/access.png";
import camera from "@/assets/services/structured-cabling/icons/camera.png";
import intercoms from "@/assets/services/structured-cabling/icons/intercoms.png";
import bms from "@/assets/services/structured-cabling/icons/bms.png";
import Image from "next/image";

interface IntegrationItemProps {
  icon: React.ReactNode;
  title: string;
  iconBgColor: string;
}

function IntegrationItem({ icon, title, iconBgColor }: IntegrationItemProps) {
  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5 2xl:space-y-6 group">
      <div
        className={`${iconBgColor} rounded-full p-4 sm:p-6 lg:p-7 xl:p-8 2xl:p-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
      >
        {icon}
      </div>
      <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-[#2E2E2E] text-center leading-tight max-w-[120px] sm:max-w-none">
        {title}
      </h3>
    </div>
  );
}

export default function IntegrationSection() {
  const integrations = [
    {
      icon: (
        <Image
          src={wifi}
          alt="Wi-Fi"
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11 "
        />
      ),
      title: "Wi-Fi",
      iconBgColor: "bg-[#EFF6FF]",
    },
    {
      icon: (
        <Image
          src={it}
          alt="IT"
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11 text-[#A855F7]"
        />
      ),
      title: "IT Networking",
      iconBgColor: "bg-[#FAF5FF]",
    },
    {
      icon: (
        <Image
          src={access}
          alt="Access Control"
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11 text-[#22C55E]"
        />
      ),
      title: "Access Control",
      iconBgColor: "bg-[#F0FDF4]",
    },
    {
      icon: (
        <Image
          src={camera}
          alt="Surveillance"
          className="w-7 h-6 sm:w-8 sm:h-7 lg:w-9 lg:h-8 xl:w-10 xl:h-9 2xl:w-12 2xl:h-11 text-[#EF4444]"
        />
      ),
      title: "Surveillance",
      iconBgColor: "bg-[#FEF2F2]",
    },
    {
      icon: (
        <Image
          src={intercoms}
          alt="Intercoms & Alarms"
          className="w-6 h-7 sm:w-7 sm:h-8 lg:w-8 lg:h-9 xl:w-9 xl:h-10 2xl:w-11 2xl:h-12 text-[#EAB308]"
        />
      ),
      title: "Intercoms & Alarms",
      iconBgColor: "bg-[#FEFCE8]",
    },
    {
      icon: (
        <Image
          src={bms}
          alt="A/V & BMS Systems"
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11 text-[#6366F1]"
        />
      ),
      title: "A/V & BMS Systems",
      iconBgColor: "bg-[#EEF2FF]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 mb-12 sm:mb-14 lg:mb-16 xl:mb-18 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E] leading-tight">
            Designed for Integration
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] max-w-2xl sm:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto leading-relaxed">
            Our structured cabling systems serve as the foundation for all your
            technology needs, ensuring seamless integration across platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">
          {integrations.map((item, index) => (
            <IntegrationItem
              key={index}
              icon={item.icon}
              title={item.title}
              iconBgColor={item.iconBgColor}
            />
          ))}
        </div>

        {/* Future-proof Section */}
        <div className="mt-12 sm:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20">
          <div className="bg-[#F9FAFB] rounded-xl p-6 sm:p-7 lg:p-8 xl:p-10 2xl:p-12 text-center border border-gray-100">
            <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium text-[#2E2E2E] mb-3 sm:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6 leading-tight">
              Future-proof your tech stack
            </h3>
            <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262] max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed">
              Our structured cabling solutions are designed to accommodate your
              current needs while providing the flexibility to adapt to future
              technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
