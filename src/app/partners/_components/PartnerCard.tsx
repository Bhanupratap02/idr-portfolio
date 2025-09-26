/** @format */

interface PartnerCardProps {
  logo: React.ReactNode;
  title: string;
  description: string;
  onReadMore?: () => void;
}

export default function PartnerCard({
  logo,
  title,
  description,
  onReadMore,
}: PartnerCardProps) {
  return (
    <div className="bg-white rounded-xl px-8 py-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Logo and Brand Bar */}
      <div className="flex flex-col gap-4 mb-8 items-start justify-start">
        <div className="flex items-start justify-start h-9 min-h-[36px] ">
          {logo}
        </div>

        <div className="h-1 w-32 bg-[#052557] rounded-full" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-grow">
        <h3 className="text-2xl font-semibold text-gray-900 leading-[52px] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-[1.54] text-base flex-grow font-light">
          {description}
        </p>
      </div>

      {/* Read More Button */}
      <button
        onClick={onReadMore}
        className="mt-10 self-start border border-[#052557] text-[#052557] px-7 py-2.5 rounded-lg font-light text-base hover:bg-[#052557] hover:text-white transition-colors duration-200"
      >
        Read More
      </button>
    </div>
  );
}
