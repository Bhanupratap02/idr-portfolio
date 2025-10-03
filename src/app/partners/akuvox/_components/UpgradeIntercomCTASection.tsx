/** @format */

import { Button } from "@/components/ui/button";

export default function UpgradeIntercomCTASection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-38 bg-blue-600">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 text-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white mb-8 sm:mb-8 md:mb-10 2xl:mb-14 3xl:mb-16">
          Let&apos;s Upgrade Your Intercom
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[1.35rem]  2xl:text-3xl 3xl:text-4xl text-blue-100 leading-relaxed mb-6 xl:mb-8 3xl:mb-9 max-w-[60rem] 2xl:max-w-6xl 3xl:max-w-[85rem] mx-auto font-light">
          Whether you&apos;sre replacing a legacy system or launching a new
          development, IDR builds intercom systems that match your goals,
          workflow, and design standards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row w-full  gap-4 xl:gap-5 2xl:gap-6 justify-center items-center">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5.5 2xl:py-6.5 text-sm sm:text-base  xl:text-lg 3xl:text-xl font-light h-auto cursor-pointer">
            Book a Site Walk
          </Button>

          <Button
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base  xl:text-lg 3xl:text-xl font-light h-auto cursor-pointer"
          >
            Request Design Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
