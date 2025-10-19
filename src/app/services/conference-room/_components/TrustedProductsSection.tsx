/** @format */
  
import sonos from "@/assets/services/conference-room/icons/Sonos.png";
import mic2 from "@/assets/services/conference-room/icons/mic_2.png";
import dsp from "@/assets/services/conference-room/icons/DSP.png";
import amplifier from "@/assets/services/conference-room/icons/amplifier.png";
import panels from "@/assets/services/conference-room/icons/panels.png";
import tv from "@/assets/services/conference-room/icons/tv_2.png";
import Image from "next/image";
const products = [
  {
    name: "Biamp & Bose DSP",
    icon: dsp,
    classNames:"w-10 h-10 md:w-10 md:h-12 2xl:w-12 2xl:h-14 3xl:w-18 3xl:h-18 scale-x-195 scale-y-145 mix-blend-multiply",
  },
  {
    name: "Sennheiser",
    icon: mic2,
    classNames:"w-10 h-10 md:w-10 md:h-12 2xl:w-12 2xl:h-14 3xl:w-14 3xl:h-16",
  },
  {
    name: "JBL Amplifiers",
    icon: amplifier,
    classNames: "w-12 h-10 md:w-18 md:h-16  2xl:w-20 2xl:h-18 3xl:w-22 3xl:h-20",
  },
  {
    name: "Kramer Panels",
    icon: panels,
    classNames: "w-10 h-10 md:w-10 md:h-12 2xl:w-12 2xl:h-14 3xl:w-14 3xl:h-16",
  },
  {
    name: "Samsung/LG",
    icon: tv,
    classNames: "w-10 h-10 md:w-10 md:h-12 2xl:w-12 2xl:h-14 3xl:w-14 3xl:h-16",
  },
  {
    name: "Sonos",
    icon: sonos,
    classNames: "w-10 h-10 md:w-10 md:h-12 2xl:w-12 2xl:h-14 3xl:w-18 3xl:h-18 scale-x-185 scale-y-155 mix-blend-multiply",
  },
];
export default function TrustedProductsSection() {
// Built with Trusted Products
// Change the setnence underneath this to say "Only trusted, world-class components — delivering reliability without compromise."

  return (
    <section className="py-16 md:py-20 2xl:py-24  bg-white">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-medium text-gray-900 mb-4">
            Built with Trusted Products
          </h2>
          <p className="text-xl md:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
            Only trusted, world-class components — delivering reliability
            without compromise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 mt-16 2xl:mt-20 3xl:mt-24">
          {products?.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              role="img"
              aria-label={product?.name}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32 bg-gray-50 rounded-full flex items-center justify-center">
                <Image
                  src={product.icon}
                  alt={product.name}
                  className={product.classNames}
                />
              </div>
              <h3 className="text-base md:text-lg 2xl:text-xl font-medium text-gray-900">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
