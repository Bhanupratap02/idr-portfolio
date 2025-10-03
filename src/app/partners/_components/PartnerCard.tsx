/** @format */
import Link from "next/link";
interface PartnerCardProps {
  logo: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

export default function PartnerCard({
  logo,
  title,
  description,
  url,
}: PartnerCardProps) {
  return (
    <div className="bg-white rounded-xl px-6 sm:px-8 py-8 sm:py-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Logo and Brand Bar */}
      <div className="flex flex-col gap-4 mb-2 md:mb-3 items-start">
        <div className="flex items-start justify-start h-7 md:h-9 2xl:h-10  ">
          {logo}
        </div>

        <div className="h-1 w-24 md:w-32 xl:w-34 2xl:36 bg-[#052557] rounded-full" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-grow mb-3 md:mb-4 lg:mb-6 2xl:mb-8">
        <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light flex-grow line-clamp-4">
          {description}
        </p>
      </div>

      {/* Read More Button */}
       <Link
        href={url}
        className="self-start border border-[#052557] text-[#052557] px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg font-light text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl hover:bg-[#052557] hover:text-white transition-colors duration-200 cursor-pointer"
      >
        Read More
      </Link>
    </div>
  );
}
