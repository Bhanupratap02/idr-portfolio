/** @format */
import { CheckCircle } from "lucide-react";
import imgImg1 from "@/assets/brivo2.png"; // img2 (kept)

const features = [
  "Compliance Ready: Automate visitor logs for audit and legal documentation.",
  "Fully Connected: Unified platform with access control and surveillance.",
  "Efficient Check-Ins: Pre-invite guests and reduce wait times.",
];

export default function VisitorManagementSection() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-800 to-gray-900  py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-[100rem] mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            {/* Heading */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-white leading-snug sm:leading-tight">
                Brivo Visitor Management
              </h2>
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-300 leading-relaxed  max-w-2xl">
                Powered by Envoy – Enhanced Hospitality Without Compromising
                Security.
              </p>
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-200 leading-relaxed font-light  max-w-2xl">
                Welcome guests with confidence. Brivo&apos;s visitor management
                solution ensures secure, streamlined check-ins for every visit.
              </p>
            </div>

            {/* Features List (looped) */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 max-w-2xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 text-left"
                >
                  <CheckCircle
                    className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-green-400"
                    aria-hidden
                  />
                  <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none 2xl:max-w-3xl">
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={imgImg1.src}
                alt="Modern Kiosk Experience"
                className="w-full h-48 sm:h-56 md:h-64 xl:h-72 object-cover rounded-lg mb-4 sm:mb-6"
              />
              <div className="space-y-1 sm:space-y-2 text-center lg:text-left">
                <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-gray-900">
                  Modern Kiosk Experience
                </h3>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 font-light">
                  Easy-to-use tablet or mobile interface for quick registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
