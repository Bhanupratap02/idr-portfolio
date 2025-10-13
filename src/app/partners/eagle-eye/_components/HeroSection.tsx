import { Button } from "@/components/ui/button";
import heroImg from "@/assets/partners/eagleeye/heroImg.png"
import Image from "next/image";




const EagleEyeHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100 min-h-[75vh]  md:min-h-[80vh] lg:min-h-0 xl:min-h-[87vh] 2xl:min-h-[82vh] 3xl:min-h-[60vh]  py-12 sm:py-16 md:py-20 xl:py-26 2xl:py-30 flex items-center justify-center">
      <div className="relative mx-auto w-full max-w-[1720px] 3xl:max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column */}

          <div className="space-y-5 sm:space-y-6 md:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[3.6rem] 3xl:text-[4rem] font-medium text-gray-900 leading-tight">
              Eagle Eye Networks <br className="hidden md:block" /> Video
              Surveillance
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  2xl:text-2xl leading-relaxed  max-w-0 lg:max-w-lg 3xl:max-w-xl font-light">
              Smarter, Simpler, Safer Cloud Video — with the cameras you already
              own.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              
              <Button
                size="lg"
                className="bg-[#052557] hover:bg-[#052557]/90 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-normal rounded-lg transition-all duration-300 hover:scale-105 shadow-md h-auto cursor-pointer"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#052557] text-[#052557] hover:bg-[#052557]/10 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-normal rounded-lg transition-all duration-300 hover:scale-105 h-auto cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full h-[14rem] sm:h-[16rem] md:h-[20rem] lg:h-[16rem] xl:h-[20rem] 2xl:h-[24rem] flex justify-center">
            <Image
              src={heroImg}
              alt="Eagle Eye Networks Dashboard"
              fill
              className="object-fill scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EagleEyeHeroSection;
