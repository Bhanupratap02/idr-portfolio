/** @format */

import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  icon: StaticImageData | string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl  shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 p-5 sm:p-6 md:p-7  xl:p-9 2xl:p-11 3xl:p-12 h-full">
      <div className="flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8 h-full">
        <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 p-2.5 sm:p-3 md:p-4 lg:p-3 xl:p-4 2xl:p-5 3xl:p-6 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl 3xl:rounded-2xl group-hover:scale-110">
          <div className="relative w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-6.5 lg:h-6.5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 28px, (max-width: 1280px) 32px, (max-width: 1536px) 40px, 48px"
            />
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-2 xl:space-y-3 2xl:space-y-4 3xl:space-y-5 flex-1">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
