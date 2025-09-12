/** @format */

import { Button } from "@/components/ui/button";

export default function SurveillanceCallToActionSection() {
  return (
    <section className="w-full bg-[#2563EB] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-white leading-snug mb-8">
          Ready to Secure Your Property?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[#DBEAFE] leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl 2xl:max-w-[5xl]  3xl:max-w-6xl mx-auto mb-12">
          Get started with a consultation and custom system design tailored to
          your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#2563EB] hover:bg-gray-100 px-8 py-6 2xl:px-10 2xl:py-7 3xl:px-12 3xl:py-8 text-base 2xl:text-lg rounded-lg  w-full sm:w-auto cursor-pointer"
          >
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#2563EB] px-8 py-6 2xl:px-10 2xl:py-7 3xl:px-12 3xl:py-8 text-base 2xl:text-lg rounded-lg  w-full sm:w-auto cursor-pointer"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
