/** @format */
import { Calendar, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="w-full bg-[#0066cc] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-[1480px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
          Ready to Upgrade Your Workplace Security?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Empower your employees and welcome your visitors—securely, simply, and
          smartly with Brivo.
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-blue-200 pl-5 sm:pl-6 md:pl-8 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-blue-100 italic text-center font-light">
            &quot;Discover how Brivo + Apple Wallet + Envoy can transform your
            physical security and visitor experience.&quot;
          </p>
        </blockquote>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 xl:gap-14 2xl:gap-18">
          {/* Primary Button */}
          <Link href={"/contact"}>
            <button className="bg-white text-[#0066cc] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
              Start Free Trial
            </button>
          </Link>

          {/* Secondary Button */}
          <Link href={"/contact"}>
            <button className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
              Schedule Demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
