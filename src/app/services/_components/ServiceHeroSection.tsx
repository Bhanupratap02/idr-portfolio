/** @format */
import Image from "next/image";
import hero from "@/assets/services/hero.png"
import heroCamera1 from "@/assets/services/hero_camera_1.png";
import heroCamera2 from "@/assets/services/hero_camera_2.png";
import heroCamera3 from "@/assets/services/hero_camera_3.png";
export default function ServiceHeroSection() {
  return (
    <section className="relative  min-h-[600px] sm:min-h-[700px] lg:min-h-[850px] 2xl:min-h-[950px] 3xl:min-h-[1100px] bg-gray-900 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 top-[-15%] ">
        <Image
          src={hero}
          alt="Security Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Security Camera Images */}
      {/* Camera 1 */}
      <div
        className="absolute w-[120px] sm:w-[160px] lg:w-[200px] 2xl:w-[230px] 3xl:w-[260px] aspect-square rounded-xl overflow-visible z-10 
      top-[50%] left-[55%] sm:top-[45%] sm:left-[60%] lg:top-[48%] lg:left-[58%] 2xl:top-[46%] 2xl:left-[60%] 3xl:top-[44%] 3xl:left-[62%]"
      >
        <Image
          src={heroCamera1}
          alt="Camera 1"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Camera 2 */}
      <div
        className="absolute w-[140px] sm:w-[180px] lg:w-[220px] 2xl:w-[250px] 3xl:w-[280px] aspect-square rounded-xl overflow-visible z-20 
      top-[35%] left-[65%] sm:top-[30%] sm:left-[67%] lg:top-[32%] lg:left-[66%] 2xl:top-[30%] 2xl:left-[68%] 3xl:top-[28%] 3xl:left-[70%]"
      >
        <Image
          src={heroCamera2}
          alt="Camera 2"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Camera 3 */}
      <div
        className="absolute w-[120px] sm:w-[160px] lg:w-[200px] 2xl:w-[230px] 3xl:w-[260px] aspect-square rounded-xl overflow-visible z-10 
      top-[55%] left-[72%] sm:top-[50%] sm:left-[74%] lg:top-[52%] lg:left-[73%] 2xl:top-[50%] 2xl:left-[75%] 3xl:top-[48%] 3xl:left-[77%]"
      >
        <Image
          src={heroCamera3}
          alt="Camera 3"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 sm:px-10 lg:px-16 2xl:px-28 3xl:px-40 py-16">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mt-32 sm:mt-40 lg:mt-48">
          {/* Subtitle */}
          <p className="text-white text-lg sm:text-xl font-light mb-4">
            Quality Service at a fair price.
          </p>

          {/* Main Title */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium leading-tight mb-6 ">
            Specialized, efficient,
            <br />
            and thorough security
            <br />
            services
          </h1>

          {/* Description */}
          <p className="text-[#B4B4B4] text-base sm:text-lg lg:text-xl 2xl:text-2xl mb-10 max-w-xl">
            We provide best Performing security cameras using the least amount
            of time, energy, and money.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#191919] text-white text-sm sm:text-base rounded-md hover:bg-gray-800 transition">
              Get Start Now
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-[#666] text-white text-sm sm:text-base rounded-md hover:bg-white hover:text-gray-900 transition">
              View all Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
