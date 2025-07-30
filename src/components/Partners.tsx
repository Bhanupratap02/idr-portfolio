/** @format */

import Image from "next/image";
import partner1 from "@/assets/partners/partner_1.png";
import partner2 from "@/assets/partners/partner_2.png";
import partner3 from "@/assets/partners/partner_3.png";
import partner4 from "@/assets/partners/partner_4.png";
import partner5 from "@/assets/partners/partner_5.png";
import partner6 from "@/assets/partners/partner_6.png";
import partner7 from "@/assets/partners/partner_7.png";
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
              className="h-6 sm:h-8 md:h-10 w-auto object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
