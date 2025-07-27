/** @format */

import Image from "next/image";
import partner1 from "@/assets/partners/partner_1.png";
import partner2 from "@/assets/partners/partner_2.png";
import partner3 from "@/assets/partners/partner_3.png";
import partner4 from "@/assets/partners/partner_4.png";
import partner5 from "@/assets/partners/partner_5.png";
import partner6 from "@/assets/partners/partner_6.png";
const logos = [partner1, partner2, partner3, partner4, partner5, partner6];
const Partners = () => {
  return (
    <div className="w-full bg-[#052557] py-4 overflow-hidden">
      <div className="flex animate-scroll space-x-14">
        {/* First set of logos */}
        <div className="flex items-center space-x-14 flex-shrink-0 px-10">
          {logos.map((logo, i) => (
            <Image
              key={`logo-a-${i}`}
              src={logo}
              alt={`Partner Logo ${i + 1}`}
              className="h-10 w-auto"
            />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        {/* <div className="flex items-center space-x-14 flex-shrink-0">
          {logos.map((logo, i) => (
            <Image
              key={`logo-b-${i}`}
              src={logo}
              alt={`Partner Logo ${i + 1}`}
              className="h-10 w-auto"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Partners;
