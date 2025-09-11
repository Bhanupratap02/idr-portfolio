/** @format */
import cabling from "@/assets/services/structured-cabling/icons/cabling.png";
import fiber from "@/assets/services/structured-cabling/icons/fiber.png";
import panel from "@/assets/services/structured-cabling/icons/panel.png";
import buildings from "@/assets/services/structured-cabling/icons/buildings.png";
import poe from "@/assets/services/structured-cabling/icons/poe.png";
import av from "@/assets/services/structured-cabling/icons/av.png";
import Image from "next/image";
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
    <div className="bg-[#F9FAFB] rounded-lg p-4 sm:p-5 lg:p-6 2xl:p-7 3xl:p-8 space-y-4 h-full flex flex-col items-start border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className=" flex gap-5 items-center">
        <div className={`${iconBgColor} rounded-full p-3.5 flex-shrink-0`}>
          {icon}
        </div>
        <h3 className="text-base sm:text-lg xl:text-xl  2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E] leading-7">
          {title}
        </h3>
      </div>

      <p className="text-sm sm:text-base lg:text-base 2xl:text-lg 3xl:text-xl text-[#626262] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ProfessionalCablingSection() {
  const services = [
    {
      icon: (
        <Image
          src={cabling}
          alt="Cat5e / Cat6 / Cat6a Cabling"
          className="w-6 h-6 2xl:w-8 2xl:h-7 text-[#3B82F6]"
        />
      ),
      title: "Cat5e / Cat6 / Cat6a Cabling",
      description:
        "High-speed network cabling solutions supporting bandwidths from 1Gbps to 10Gbps for your critical infrastructure.",
      iconBgColor: "bg-[#DBEAFE]",
    },
    {
      icon: (
        <Image
          src={fiber}
          alt="Fiber Optic Backbone"
          className="w-6 h-6 2xl:w-8 2xl:h-7 text-[#8B5CF6]"
        />
      ),
      title: "Fiber Optic Backbone",
      description:
        "Future-proof your network with high-capacity fiber optic cabling for long-distance, high-bandwidth applications.",
      iconBgColor: "bg-[#F3E8FF]",
    },
    {
      icon: (
        <Image
          src={panel}
          alt="Patch Panels & Faceplates"
          className="w-5 h-5 2xl:w-8 2xl:h-7 text-[#16A34A]"
        />
      ),
      title: "Patch Panels & Faceplates",
      description:
        "Professional-grade connectivity components for organized, manageable, and scalable network infrastructure.",
      iconBgColor: "bg-[#DCFCE7]",
    },
    {
      icon: (
        <Image
          src={buildings}
          alt="MDF/IDF Builds"
          className="w-4 h-5 2xl:w-8 2xl:h-7 text-[#DC2626]"
        />
      ),
      title: "MDF/IDF Builds",
      description:
        "Custom-designed telecommunications rooms with proper racking, cooling, and power to support your network infrastructure.",
      iconBgColor: "bg-[#FEE2E2]",
    },
    {
      icon: (
        <Image
          src={poe}
          alt="POE for Devices"
          className="w-4 h-5 2xl:w-8 2xl:h-7 text-[#CA8A04]"
        />
      ),
      title: "POE for Devices",
      description:
        "Power over Ethernet solutions for phones, wireless access points, cameras, and other network devices.",
      iconBgColor: "bg-[#FEF9C3]",
    },
    {
      icon: (
        <Image
          src={av}
          alt="A/V & Automation Cabling"
          className="w-6 h-5 2xl:w-8 2xl:h-7 text-[#4F46E5]"
        />
      ),
      title: "A/V & Automation Cabling",
      description:
        "Specialized cabling solutions for audio/visual systems and smart building automation technologies.",
      iconBgColor: "bg-[#E0E7FF]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28 3xl:px-32">
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 mb-12 sm:mb-14 lg:mb-16 xl:mb-18 3xl:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E]">
            Professional Cabling We Offer
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] max-w-4xl 3xl:max-w-5xl mx-auto leading-relaxed">
            Our comprehensive cabling solutions support all your networking
            needs with the highest standards of quality and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 xl:gap-10 3xl:gap-12">
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
