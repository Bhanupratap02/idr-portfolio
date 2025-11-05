/** @format */

const hero = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Fhero.png";
import Image from "next/image";
import Link from "next/link";

export default function CablingHeroSection() {
  return (
    <section className="w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] xl:min-h-[85vh] 2xl:min-h-[75vh] 3xl:min-h-[65vh] bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] relative py-16 sm:py-20 lg:py-24 2xl:py-28  flex items-center">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-20 3xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-40 items-center h-full  ">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 3xl:space-y-10 flex flex-col justify-center h-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-snug xl:leading-tight 2xl:leading-tight 3xl:leading-tight text-center lg:text-left text-[#2E2E2E]">
              Structured Cabling
            </h1>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 3xl:space-y-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-[#4B5563] text-center lg:text-left">
                Built for Today — and Scalable for Tomorrow
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl  text-[#4B5563] leading-relaxed max-w-2xl 3xl:leading-loose text-center  lg:text-left">
                We deliver clean, scalable, and code-compliant cabling
                installations that form the backbone of your technology
                infrastructure.
              </p>
            </div>
            <Link
              href={"/contact"}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-3.5 xl:px-12 xl:py-4.5 2xl:px-14 2xl:py-5 3xl:px-16 3xl:py-6 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl rounded-md  w-fit max-lg:mx-auto cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Schedule a Site Walk
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end items-center h-full">
            <div className="relative w-full  lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[750px] 3xl:max-w-[850px] aspect-[530/365] 3xl:aspect-[560/362]">
              <Image
                src={hero}
                alt="Structured Cabling Infrastructure"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 450px, (max-width: 1280px) 500px, (max-width: 1920px) 667px, 650px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
