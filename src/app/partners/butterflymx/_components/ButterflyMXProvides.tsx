/** @format */
import { Check } from "lucide-react";

const ButterflyMXProvides = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      <div className="mx-auto max-w-[1920px]">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 mb-4">
            What ButterflyMx Provides
          </h2>
        </div>

        {/* Service List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-18 2xl:gap-x-22 gap-y-6 sm:gap-y-8 md:gap-y-10 xl:gap-y-12 max-w-6xl 2xl:max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8  xl:space-y-9 2xl:space-y-9.5">
            {[
              "Multi-family dwelling intercoms",
              " ⁠Access Control",
              " ⁠Vehicle Access Control",
              " ⁠Elevator Access Control",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-5 md:gap-6"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 2xl:w-9 2xl:h-9 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 2xl:w-5 2xl:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl font-light text-gray-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 xl:space-y-10 2xl:space-y-12">
            {[
              " ⁠Cameras including adopting any camera making Butterfly camera agnostic",
              " ⁠Integrates with BasIP to provide inside stations for apartment units",
              " ⁠Offers Visitor management",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-5 md:gap-6"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 2xl:w-9 2xl:h-9  rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 2xl:w-5 2xl:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl font-light text-gray-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButterflyMXProvides;
