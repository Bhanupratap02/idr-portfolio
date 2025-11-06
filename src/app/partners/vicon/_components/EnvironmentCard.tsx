/** @format */

import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface EnvironmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: StaticImageData | string;
}

export default function EnvironmentCard({
  icon: Icon,
  title,
  description,
  image,
}: EnvironmentCardProps) {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-72 xl:h-88 2xl:h-98 3xl:h-[28rem] overflow-hidden">
        <Image
          src={image}
          alt={`${title} - Professional security solutions for different environments`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, (max-width: 1536px) 33vw, 25vw"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300" />

        {/* Subtle Pattern Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10">
          <div className="bg-[#006cca] hover:bg-[#0056a3] transition-all duration-300 p-2.5 sm:p-3 md:p-4 lg:p-3 xl:p-4 2xl:p-5 3xl:p-6 rounded-full mb-2 sm:mb-2.5 md:mb-3    2xl:mb-4 inline-block group-hover:scale-110 ">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-5.5 2xl:h-5.5 text-white" />
          </div>
          {/* Title */}
          <h3 className="text-base sm:text-lg  md:text-xl lg:text-lg xl:text-xl 2xl:text-3xl  font-semibold text-white mb-2 sm:mb-3 md:mb-2.5 lg:mb-2 xl:mb-2.5 2xl:mb-3  leading-tight group-hover:text-blue-200 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed group-hover:text-white transition-colors duration-300 font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
