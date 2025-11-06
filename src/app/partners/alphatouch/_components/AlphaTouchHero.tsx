/** @format */

// /** @format */

const imgAlphaTouchHero = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2FHeroImg.png";
import Image from "next/image";

// export default function AlphaTouchHero() {
//   return (
//     <section className="relative w-full min-h-fit  lg:min-h-screen xl:min-h-[90vh] 2xl:min-h-[95vh] 3xl:min-h-fit bg-gray-300 flex items-center">
//       {/* Full Image Display - Ensures complete image is always visible */}
//       <div className="relative w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-screen xl:min-h[90vh] xl:h-[88vh] 2xl:min-h-[94vh] 2xl:h-[92vh] 3xl:min-h-[98vh] 3xl:h-[96vh]  flex items-center justify-center overflow-hidden">
//         <Image
//           src={imgAlphaTouchHero}
//           alt="AlphaTouch Solutions - Professional technology services and solutions"
//           className="object-cover lg:object-fill xl:object-cover xl:object-left-top"
//           priority
//           quality={100}
//           sizes="100vw"
//         />
//       </div>
//     </section>
//   );
// }

export default function AlphaTouchHero() {
  return (
    <section className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-screen xl:min-h-[90vh] 2xl:min-h-[95vh] 3xl:min-h-screen bg-gray-300 flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imgAlphaTouchHero}
          alt="AlphaTouch Solutions - Professional technology services and solutions"
          fill
          // width={1920}
          // height={1080}
          className="object-fill  object-left-top"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

 
    </section>
  );
}
