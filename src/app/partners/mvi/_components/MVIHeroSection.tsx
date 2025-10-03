/** @format */
import Image from "next/image";
import heroImg from "@/assets/partners/mvi/hero-main.png";
import { Button } from "@/components/ui/button";

export default function MVIHeroSection() {
  return (
    <section className="w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[85vh] 2xl:min-h-[94vh] py-12 sm:py-16 md:py-18 xl:py-20 2xl:py-24 bg-gray-50 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center">
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12 order-2 lg:order-1">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-800 leading-tight">
              MVI Systems – IP Video Intercoms Built for Scale
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600  leading-relaxed font-light">
              Modern video access for modern buildings. Trusted by IDR and
              installed in 100+ properties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-3.5 md:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-light h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Request a Quote
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-3.5 md:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-light h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              See a Demo
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-none sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl  overflow-hidden">
            <Image
              src={heroImg}
              alt="MVI Systems IP Video Intercom Device - Modern building access control solution"
              className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-700"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
