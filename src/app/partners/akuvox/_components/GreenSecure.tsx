/** @format */

import Image from "next/image";
const greenSecureImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fakuvox%2Fgreen-secure.png";

export default function GreenSecure() {
  return (
    <section className="w-full bg-gray-50 flex justify-center items-center py-6 sm:py-10">
      <div className="w-full max-w-[2120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 mx-auto">
        <Image
          src={greenSecureImg}
          alt="Akuvox Green Secure Section"
          width={2120}
          height={600}
          className="w-full h-auto object-contain scale-105"
          priority
          quality={95}
        />
      </div>
    </section>
  );
}
