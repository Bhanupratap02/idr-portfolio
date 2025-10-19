/** @format */

import { Button } from "@/components/ui/button";
import heroBg from "@/assets/partners/speco/hero-bg.png";
import heroMain from "@/assets/partners/speco/hero-main.png";
import Image from "next/image";
import Link from "next/link";
export default function SpecoHeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[75vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[89vh] 2xl:min-h-[94vh] 3xl:min-h-[95vh]  py-12 md:py-20 lg:py-24 2xl:py-28  flex md:items-center justify-center bg-gray-100">
      {/* Background Image Container */}
      <div className="absolute inset-0 ">
        <Image
          src={heroBg}
          alt="Vivotek and Vortex surveillance technology background"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
      </div>
      {/* Enhanced Overlay System */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/35 to-purple-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/40" /> */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-45 3xl:px-35 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-14   items-center z-10">
        {/* Content */}
        <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 xl:gap-10 3xl:gap-12  max-w-none lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl 3xl:max-w-5xl">
          <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8 3xl:gap-10 w-full">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white leading-tight">
              Reliable Video Surveillance, Audio & Access Control
            </h1>

            <div className="flex flex-col gap-2 sm:gap-3 xl:gap-4 2xl:gap-6 3xl:gap-8">
              <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-white font-medium">
                {"Proven Technology. Practical Security."}
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg  xl:text-xl 2xl:text-2xl text-white font-light leading-relaxed">
                Speco Technologies delivers reliable, cost-effective
                surveillance for schools, apartments, retail, and warehouses. As
                a certified Speco installer, IDR Technology Solutions ensures
                seamless deployment — on-prem or cloud- connected.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <Link href={"/contact"}>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-medium h-auto cursor-pointer ">
                Get a Free Consultation
              </Button>
            </Link>
            <Link href={"/portfolio"}>
         
              <Button className=" bg-[#F1F1F1] text-[#2E2E2E] hover:bg-blue-900 hover:border-none hover:text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-medium h-auto cursor-pointer">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-start lg:justify-end ">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg   2xl:max-w-[33rem] 3xl:max-w-xl ">
            <Image
              src={heroMain}
              alt="Akuvox Intercom and Access Control Solutions"
              className="w-full h-auto rounded-lg"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
