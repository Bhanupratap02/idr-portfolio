/** @format */

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function TeleportivityCTA() {
  return (
    <section className="bg-white w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 mb-8 sm:mb-8 md:mb-10 2xl:mb-14  max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto">
          Let&apos;s Get Virtual
        </h2>
        <p className="text-base sm:text-lg md:text-xl xl:text-xl lg:text-lg 2xl:text-2xl text-gray-600 max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 2xl:mb-12 font-light">
          Ready to upgrade your entry experience?
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 2xl:mb-12 font-light">
          Call us or submit the form to connect with our design team —
          we&apos;ll walk you through real use cases, show you a live demo, and
          put together a turnkey rollout plan.
        </p>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Link
            href="tel:"
            className="bg-[#052557] text-white px-6 md:px-8 py-3 md:py-4 xl:px-10 xl:py-5 shadow rounded-lg hover:bg-[#041e45] transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
            Call Now
          </Link>

          <Link
            href="/contact"
            className="border border-[#052557] text-[#052557] px-6 md:px-8 py-3 md:py-4 xl:px-10 xl:py-4.5 rounded-lg hover:bg-[#052557] hover:text-white transition-colors duration-200 flex items-center gap-2 font-light text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
