// /** @format */

import imgAlphaTouchHero from "@/assets/partners/alphatouch/HeroImg.png";
import Image from "next/image";

export default function AlphaTouchHero() {
  return (
    <section className="relative w-full min-h-fit  lg:min-h-screen bg-gray-300 flex items-center">
      {/* Full Image Display - Ensures complete image is always visible */}
      <div className="relative w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={imgAlphaTouchHero}
          alt="AlphaTouch Solutions - Professional technology services and solutions"
          className="object-cover lg:object-fill xl:object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

    </section>
  );
}