/** @format */
import { Phone, ClipboardList, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-4 sm:mb-6">
          Ready to Upgrade? Let&apos;s Talk.
        </h2>
        <p className="text-base sm:text-lg md:text-xl xl:text-xl lg:text-lg 2xl:text-2xl text-blue-100 max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 font-light">
          Whether it&apos;s new construction, a network refresh, or scaling up,
          we&apos;re here to help.
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
         <a
            href="tel:+17185947865"
            aria-label="Call IDR Technology Solutions at 718-594-7865"
            className="flex items-center gap-2 bg-white text-blue-600  px-6 sm:px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 fill-blue-600 text-white" />
            Call Now
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white px-6 sm:px-8 py-3 rounded-lg  hover:bg-white hover:text-blue-600 transition-colors duration-200 font-light text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl w-full sm:w-auto justify-center"
          >
            <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-blue-600  fill-white" />
            Submit a Quick Form
          </Link>
        </div>

        {/* Footer Note */}
        <div className="flex justify-center items-center gap-2 text-blue-100 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 fill-yellow-300 text-yellow-300" />
          <p>You&apos;ll connect with a real expert — no sales fluff.</p>
        </div>
      </div>
    </section>
  );
}
