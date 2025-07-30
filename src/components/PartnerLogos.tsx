/** @format */

import Image, { StaticImageData } from "next/image";

const PartnerLogos = ({ logos }: { logos: StaticImageData[] }) => {
  return (
    <div className="w-full bg-[#052557] py-4 overflow-hidden">
      <div className="flex animate-scroll space-x-12">
        {[...logos, ...logos].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-6 md:h-10 flex items-center justify-center px-4 sm:px-6"
          >
            <Image
              src={img}
              alt={`Partner Logo ${idx + 1}`}
              className=" w-full h-auto object-cover max-w-[180px] max-h-[180px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
