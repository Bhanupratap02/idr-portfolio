/** @format */

import { Check } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface IntegrationCardProps {
  title: string;
  description: string;
  feature: string;
  image: StaticImageData;
}

export default function IntegrationCard({
  title,
  description,
  feature,
  image,
}: IntegrationCardProps) {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 md:h-56 lg:h-60 xl:h-65 2xl:h-75 3xl:h-80 overflow-hidden">
        <Image
          src={image}
          alt={`${title} - Integrations That Work Smarter Together`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 sm:p-7 md:p-8 lg:p-6 xl:p-7 2xl:p-10 3xl:p-11">
        <h3 className="text-lg sm:text-xl  md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-3 lg:mb-2 xl:mb-3 2xl:mb-3.5 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed  group-hover:text-gray-700 transition-colors duration-300 font-light">
          {description}
        </p>
        {/* Feature badge */}
        <div className="mt-2 md:mt-4 lg:mt-3 xl:mt-4 flex items-center space-x-2">
          <div className="  backdrop-blur-sm p-1 2xl:p-1.5 rounded-full bg-[#052557]">
            <Check className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 xl:w-2.5 xl:h-2.5 2xl:w-3 2xl:h-3 text-white" />
          </div>
          <span className="text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-[#052557] font-light">
            {feature}
          </span>
        </div>
      </div>
    </div>
  );
}
