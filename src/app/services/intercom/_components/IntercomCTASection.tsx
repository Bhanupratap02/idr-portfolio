/** @format */

import Link from "next/link";

/** @format */
export function IntercomCTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24 text-center">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold leading-snug mb-6">
          Ready to Upgrade Your Building&apos;s Intercom System?
        </h2>
        <p className="text-blue-100 text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed mb-10  mx-auto">
          Let&apos;s discuss how IDR Technology Solutions can enhance your
          property&apos;s security and convenience with modern intercom solutions and expert intercom systems installation NYC.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={"/contact"}
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4
           2xl:px-10 2x:py-5 3x:px-12 3xl:py-6  rounded-lg text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Schedule Consultation
          </Link>

          {/* Click-to-call link */}
          <a
            href="tel:+17185947865"
            aria-label="Call IDR Technology Solutions at 718-594-7865"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 
  2xl:px-10 2x:py-5 3x:px-12 3xl:py-6 rounded-lg text-sm sm:text-base lg:text-lg 
  hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
          >
            Call (718) 594-7865
          </a>
        </div>
      </div>
    </section>
  );
}
