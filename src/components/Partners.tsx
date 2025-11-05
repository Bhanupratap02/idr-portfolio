/** @format */

import Image from "next/image";
const partner1 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_1.png";
const partner2 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_2.png";
const partner3 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_3.png";
const partner4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_4.png";
const partner5 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_5.png";
const partner6 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_6.png";
const partner7 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fpartner_7.png";
const logos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  // partner7,
];
const Partners = () => {
  return (
    <div className="w-full bg-[#052557] py-4 overflow-hidden">
      <div className="flex animate-scroll space-x-6 sm:space-x-10 lg:space-x-14">
        {/* First set of logos */}
        <div className="flex items-center space-x-6 sm:space-x-10 md:space-x-14  flex-shrink-0 px-4 sm:px-4">
          {logos.map((logo, i) => (
            <Image
              key={`logo-a-${i}`}
              src={logo}
              alt={`Partner Logo ${i + 1}`}
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto object-cover"
            />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-6 sm:space-x-10 md:space-x-14  flex-shrink-0 px-4 sm:px-6">
          {logos.map((logo, i) => (
            <Image
              key={`logo-a-${i}`}
              src={logo}
              alt={`Partner Logo ${i + 1}`}
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
