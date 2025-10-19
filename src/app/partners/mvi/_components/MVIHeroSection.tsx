/** @format */
import Image from "next/image";
import heroImg from "@/assets/partners/mvi/hero-main.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MVIHeroSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 xl:space-y-9">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 leading-tight tracking-tight">
                MVI Systems – IP Video Intercoms Built for Scale
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                Modern video access for modern buildings. Trusted by IDR and
                installed in 100+ properties.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={"/contact"}>
                {" "}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg font-semibold h-auto hover:shadow-lg transition-all duration-200 cursor-pointer">
                  Request a Quote
                </Button>
              </Link>
              <Link href={"/contact"}>
                {" "}
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg font-semibold h-auto hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  See a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={heroImg}
                alt="MVI Systems IP Video Intercom Device - Modern building access control solution"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                priority
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}