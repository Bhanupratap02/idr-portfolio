/** @format */
  
import mic1 from "@/assets/services/conference-room/icons/mic_1.png";
import mic2 from "@/assets/services/conference-room/icons/mic_2.png";
import sound from "@/assets/services/conference-room/icons/sound.png";
import panels from "@/assets/services/conference-room/icons/panels.png";
import tv from "@/assets/services/conference-room/icons/tv_2.png";
import warning from "@/assets/services/conference-room/icons/warning.png";
import Image from "next/image";
const products = [
    {
      name: "Biamp DSP",
      icon:mic1,
    },
    {
      name: "Sennheiser",
      icon: mic2,
    },
    {
      name: "QSC Amplifiers",
      icon: sound,
    },
    {
      name: "Kramer Panels",
      icon: panels,
    },
    {
      name: "Samsung/LG",
      icon: tv,
    },
    {
      name: "Sonos Speakers",
      icon: warning,
    },
  ];
export default function TrustedProductsSection() {


  return (
    <section className="py-16 md:py-20 2xl:py-24  bg-white">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-medium text-gray-900 mb-4">
            Built with Trusted Products
          </h2>
          <p className="text-xl md:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
            We select just the right components — no over-engineering — for
            clean, reliable performance.
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
                  className="w-10 h-10 md:w-10 md:h-12 2xl:w-12 2xl:h-14 3xl:w-14 3xl:h-16"
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
