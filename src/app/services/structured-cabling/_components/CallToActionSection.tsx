/** @format */

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 3xl:px-28 text-center">
        <div className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 2xl:space-y-10">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-white">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl text-white/90  mx-auto">
            IDR makes it simple to build strong foundations for future
            technology.
          </p>
          <div className="pt-2 sm:pt-4 lg:pt-6">
            <Link href={"/contact"} className="bg-white text-[#8B5CF6] hover:bg-gray-50 hover:scale-105 px-6 sm:px-8 lg:px-10 2xl:px-12 3xl:px-14 py-3 sm:py-4 lg:py-5 2xl:py-5.5 3xl:py-6.5 text-base sm:text-lg lg:text-lg xl:text-xl 3xl:text-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-200 rounded-lg group w-full sm:w-auto cursor-pointer">
              Get a Free Site Walk & Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
