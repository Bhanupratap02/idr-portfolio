/** @format */
import Image from "next/image";
const heroMainImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fhero-main.png";
const heroBgImg =
  "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fhero-bg.png?width=1920&height=1080&format=webp&fit=crop";
import Link from "next/link";
export default function ViconHeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[89vh] 2xl:min-h-[94vh] 3xl:min-h-[95vh] flex items-center justify-center w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBgImg}
          alt="Background"
          fill
          className="w-full h-full object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,60,112,0.9)] to-[rgba(6,73,135,0.8)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-14 2xl:gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-none lg:max-w-2xl xl:max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white leading-tight mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8">
                Vicon + VAX by IDR: Smarter Surveillance Meets Scalable Access
                Control
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white/90 mb-6 sm:mb-7 md:mb-8 xl:mb-9 2xl:mb-10 leading-relaxed font-light">
                Certified installation. Flexible integrations. Crystal-clear
                video. Seamless access.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 xl:gap-6 2xl:gap-7">
                <Link href={"/contact"} className="bg-white text-[#0055a4] px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-3.5 md:py-4 xl:py-5 2xl:py-6 rounded-md text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  Request a Free Demo
                </Link>
                <Link href="/contact" className="bg-[#006cca] text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-3.5 md:py-4 xl:py-5 2xl:py-6 rounded-md text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-semibold hover:bg-[#0056a3] hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Images */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <Image
                  src={heroMainImg}
                  alt="Vicon security camera system - Professional surveillance equipment"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                  width={1200}
                  height={800}
                  priority
                  quality={90}
                />

                {/* Optional decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div> */}
    </section>
  );
}
