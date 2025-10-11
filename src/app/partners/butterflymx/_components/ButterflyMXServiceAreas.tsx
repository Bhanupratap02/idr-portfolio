/** @format */

import { MapPin, Globe } from "lucide-react";

interface ServiceAreaCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
}

function ServiceAreaCard({
  icon,
  title,
  subtitle,
  bgColor,
}: ServiceAreaCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-[12px] ${bgColor} p-6 text-center transition-all hover:scale-105  md:p-8`}
    >
      <div className="flex size-10 items-center justify-center md:size-12 lg:size-14">
        {icon}
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function ButterflyMXServiceAreas() {
  const areas = [
    {
      icon: <MapPin className="size-6 text-blue-600 md:size-7 lg:size-8" />,
      title: "New York City",
      subtitle: "All Boroughs",
      bgColor: "bg-blue-50",
    },
    {
      icon: <MapPin className="size-6 text-green-600 md:size-7 lg:size-8" />,
      title: "New Jersey",
      subtitle: "North & Central",
      bgColor: "bg-green-50",
    },
    {
      icon: <MapPin className="size-6 text-orange-600 md:size-7 lg:size-8" />,
      title: "South Florida",
      subtitle: "Full Coverage",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Globe className="size-7 text-purple-600 md:size-8 lg:size-9" />,
      title: "Nationwide",
      subtitle: "Partner Network",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-12 lg:py-20 xl:px-20 2xl:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 text-center">
          <h2 className="mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10 text-2xl font-bold text-gray-900 sm:text-3xl  md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Service Areas
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            IDR designs and installs ButterflyMX systems nationwide
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {areas.map((area, index) => (
            <ServiceAreaCard key={index} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
