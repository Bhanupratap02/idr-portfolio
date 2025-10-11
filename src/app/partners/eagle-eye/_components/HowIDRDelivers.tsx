/** @format */
import { Check } from "lucide-react";

const HowIDRDelivers = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      <div className="mx-auto max-w-[1920px]">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 mb-4">
            How IDR Delivers
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2 text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just resellers — we&apos;re Eagle Eye experts. Our
            services include:
          </p>
        </div>

        {/* Service List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 gap-y-6 sm:gap-y-8 md:gap-y-10 xl:gap-y-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            {[
              "Infrastructure assessments and bandwidth planning",
              "Eagle Eye Bridge or CMVR installation and setup",
              "Post-install support, training, and optimization",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-5 md:gap-6"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 2xl:w-9 2xl:h-9 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 2xl:w-5 2xl:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl font-medium text-gray-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            {[
              "Camera system design (reuse, replace, or hybrid)",
              "Fine-tuned alerting, retention, and mobile access",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-5 md:gap-6"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 2xl:w-9 2xl:h-9  rounded-full bg-blue-600 flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 2xl:w-5 2xl:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl font-medium text-eagle-gray-800 leading-snug">
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

export default HowIDRDelivers;
