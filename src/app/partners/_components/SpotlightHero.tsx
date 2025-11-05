/** @format */

const heroImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fhero.png";
import Image from "next/image";

export default function SpotlightHero() {
  return (
    <section className="relative min-h-[40vh]  md:min-h-[45vh] lg:min-h-[50vh] xl:min-h-[50vh]  flex items-start lg:items-center xl:items-start 2xl:items-center justify-center  overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImg}
            alt="Technology Background"
            width={1920}
            height={1080}
            className="absolute h-[120%] w-full object-cover -top-[10%]"
          />
        </div>
        <div className="absolute inset-0 bg-gray-600/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex  items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl text-center">
          <div className="backdrop-blur-[1.85px] bg-white/5 border border-gray-300/20 rounded-lg px-7 py-5 sm:px-12 sm:py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl font-semibold text-white leading-[76px] mb-3">
              Our Spotlight partners
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-3xl font-light text-white leading-[1.61] max-w-5xl 2xl:max-w-6xl mx-auto">
              We want to refer and endorse selected partners to our clients so
              our customers achieve their goals, with the comfort that we will
              support them as and when they need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
