/** @format */
import Image from "next/image";
import heroImage from "@/assets/services/audio-visual/hero.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]  2xl:min-h-[950px] 3xl:min-h-[1290px] bg-gradient-to-r from-gray-800 to-transparent overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Technology Meets Experience"
          className="w-full h-full object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start lg:py-16">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl 3xl:max-w-4xl mt-32 sm:mt-40 lg:mt-48 3xl:mt-56">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium text-white leading-tight mb-6">
            Where Technology Meets Experience
            {/* <br/> */}
          </h1>
          <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-200 mb-8 max-w-md sm:max-w-lg lg:max-w-xl">
            Modern Surveillance &amp; A/V Solutions for Every Space
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 2xl:px-10 3xl:px-12 py-3 sm:py-4 3xl:py-6  rounded-md text-base sm:text-lg 2xl:text-xl font-medium transition-colors">
            Schedule a Free Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}
