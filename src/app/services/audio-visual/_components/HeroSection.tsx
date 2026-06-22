/** @format */
import Image from "next/image";
const heroImage = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faudio-visual%2Fhero.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] 2xl:min-h-[65vh]  bg-gradient-to-r from-gray-800 to-transparent overflow-hidden py-16 md:py-20 lg:py-24 2xl:py-28 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Technology Meets Experience"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem]  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-20 3xl:px-32">
        <div className="flex flex-col justify-between items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium text-white leading-tight mb-6">
            Advanced Commercial Audio Visual (AV) Solutions
            {/* <br/> */}
          </h1>
          <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-200 mb-8 ">
            Expertly Engineered Commercial A/V Solutions for Any Setting
          </p>
          <Link href={"/contact"} className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 2xl:px-10 3xl:px-12 py-3 sm:py-4 3xl:py-6  rounded-md text-base sm:text-lg 2xl:text-xl font-medium transition-colors cursor-pointer">
            Schedule a Free Site Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
// "Modern Surveillance & A/V Solutions for Every Space" replace this sentence with "Expertly Engineered A/V Solutions for Any Setting"