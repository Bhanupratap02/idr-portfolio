/** @format */


import Link from "next/link";
export default function CallToActionSection() {
  return (
    <section className="w-full  relative  overflow-hidden   bg-[#17254E]">
      <div className="relative max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32  h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px]  2xl:h-[600px]  flex flex-col items-center justify-center text-center">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-8 3xl:space-y-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium leading-tight drop-shadow-lg">
            Feel The Digital Education Difference
          </h2>

          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed drop-shadow-md px-2 sm:px-0">
            Learn how partnering with us can help you fulfill your technology
            vision.
          </p>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-6 3xl:pt-8">
            <Link
              href={"/contact"}
              className="bg-white text-[#004AAD] hover:bg-gray-100 hover:text-[#003A8C] active:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl font-medium px-6 sm:px-7 md:px-8 lg:px-8 xl:px-8 2xl:px-10 3xl:px-12 py-2.5 sm:py-3 md:py-4 lg:py-4 xl:py-4 2xl:py-5 3xl:py-6 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      {/* Additional overlay for better contrast on very bright backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
    </section>
  );
}
