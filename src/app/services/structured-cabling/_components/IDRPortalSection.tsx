/** @format */

import { MapIcon, TrendingUpIcon, ImageIcon, TicketIcon } from "lucide-react";
const portal = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Fportal.png";
const maps = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fmaps.png";
const results = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fresults.png";
const photos = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fphotos.png";
const ticket = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fticket.png";
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
    <div className="flex items-start space-x-4 sm:space-x-5 lg:space-x-6 group">
      <div
        className={`${iconBgColor} rounded-full p-3 md:p-3.5 lg:p-4  2xl:p-5 flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}
      >
        {icon}
      </div>
      <div className="space-y-1 3xl:space-y-2 min-w-0 flex-1">
        <h3 className="text-lg sm:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E]">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function IDRPortalSection() {
  const portalFeatures = [
    {
      icon: (
        <Image
          src={maps}
          alt="Drop Maps & Port Labels"
          width={28}
          height={28}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#2563EB]"
        />
      ),
      title:"Drop Maps & Port Labels",
      description:
        "Interactive maps of your entire cabling infrastructure with detailed port information.",
      iconBgColor: "bg-[#DBEAFE]",
    },
    {
      icon: (
        <Image
          src={results}
          alt="Cable Test Results"
          width={28}
          height={28}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#16A34A]"
        />
      ),
      title: "Cable Test Results",
      description:
        "Access detailed test results for every cable in your infrastructure.",
      iconBgColor: "bg-[#DCFCE7]",
    },
    {
      icon: (
        <Image
          src={photos}
          alt="Rack & Tray Photos"
          width={28}
          height={28}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#9333EA]"
        />
      ),
      title: "Rack & Tray Photos",
      description:
        "Visual documentation of your installation for reference and planning.",
      iconBgColor: "bg-[#F3E8FF]",
    },
    {
      icon: (
        <Image
          src={ticket}
          alt="Real-time Ticket Updates"
          width={28}
          height={28}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#DC2626]"
        />
      ),
      title: "Real-time Ticket Updates",
      description:
        "Track the status of your support requests and service tickets in real-time.",
      iconBgColor: "bg-[#FEE2E2]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[92rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 3xl:px-28">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12  xl:gap-14 3xl:gap-20 items-center">
          {/* Left Content - Portal Image */}
          <div className="flex justify-center items-center lg:justify-end h-full order-2 lg:order-1">
            <div className="relative aspect-[584/400]">
              <Image
                src={portal}
                alt="IDR Portal Dashboard"
                fill
                className="w-full  h-full rounded-lg object-fill"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-7   3xl:space-y-10 flex flex-col justify-center h-full order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4 lg:space-y-4  3xl:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E] leading-tight">
                The IDR Portal — Everything in One Place
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl max-w-3xl text-[#626262] leading-relaxed">
                Access all your cabling documentation, testing results, and
                support tickets through our intuitive client portal.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-5.5  3xl:space-y-8">
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

            <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-[#2E2E2E] font-normal">
              No paperwork. Just clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
