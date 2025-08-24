/** @format */
import Image from "next/image";
import hero from "@/assets/services/hero.png"
import heroCamera1 from "@/assets/services/hero_camera_1.png";
import heroCamera2 from "@/assets/services/hero_camera_2.png";
import heroCamera3 from "@/assets/services/hero_camera_3.png";
export default function ServiceHeroSection() {
  return (
    <section className="relative min-h-[731px] bg-gray-900 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 top-[-15%]">
        <Image
          src={hero}
          alt="Security Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Security Camera Images */}
      <div className="absolute top-[289px] left-[807px] w-[212px] h-[212px] rounded-[16.591px] overflow-hidden z-10">
        <Image
          src={heroCamera1}
          alt="Security Camera 1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-[333px] left-[1105px] w-[212px] h-[212px] rounded-[16.278px] overflow-hidden z-10">
        <Image
          src={heroCamera3}
          alt="Security Camera 2"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-[208px] left-[936px] w-[253px] h-[253px] rounded-[19.8px] overflow-visible z-16 ">
        <Image
          src={heroCamera2}
          alt="Security Camera 3"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-[112px] py-16">
        <div className="max-w-[497px] mt-[192px]">
          {/* Subtitle */}
          <div className="text-white text-[20px] font-light leading-[120%] mb-3">
            Quality Service at a fair price.
          </div>

          {/* Main Title */}
          <h1 className="text-white text-[40px] font-medium leading-[115%] mb-6 w-[497px]">
            Specialized, efficient, and thorough security 
            <br/>
            services
          </h1>

          {/* Description */}
          <p className="text-[#B4B4B4] text-[18px] font-normal leading-[30px] mb-12 w-[497px]">
            We provide best Performing security cameras using the least amount
            of time, energy, and money.
          </p>

          {/* Buttons */}
          <div className="flex items-start gap-[25px]">
            <button className="flex items-center justify-center px-8 py-[17px] bg-[#191919] text-white text-[16px] font-normal rounded-[6px] hover:bg-gray-800 transition-colors">
              Get Start Now
            </button>
            <button className="flex items-center justify-center px-8 py-[17px] border border-[#666] text-white text-[16px] font-normal rounded-[6px] hover:bg-white hover:text-gray-900 transition-colors">
              View all Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
