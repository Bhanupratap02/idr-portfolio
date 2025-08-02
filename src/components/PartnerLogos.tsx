/** @format */

import Image, { StaticImageData } from "next/image";

const PartnerLogos = ({ logos }: { logos: StaticImageData[] }) => {
  return (
    <div className="w-full bg-[#052557] py-4 overflow-hidden">
      <div className="flex animate-scroll space-x-8 sm:space-x-12 2xl:space-x-16">
        {[...logos, ...logos].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-6 md:h-10 2xl:h-12 flex items-center justify-center px-3 sm:px-4 md:px-6 2xl:px-8"
          >
            <Image
              src={img}
              alt={`Partner Logo ${idx + 1}`}
              // className=" w-full h-auto object-cover max-w-[180px] max-h-[180px]"
              className="w-full h-auto object-contain max-w-[120px] sm:max-w-[150px] md:max-w-[180px] 2xl:max-w-[220px] max-h-[180px] filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
