/** @format */

import { Button } from "@/components/ui/button";

export default function SurveillanceCallToActionSection() {
  return (
    <section className="w-full bg-[#2563EB] py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-32 text-center">
        <h2 className="text-4xl font-medium text-white leading-[111.111%] mb-8">
          Ready to Secure Your Property?
        </h2>
        <p className="text-2xl text-[#DBEAFE] leading-[150%] max-w-4xl mx-auto mb-12">
          Get started with a consultation and custom system design tailored to
          your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-[#2563EB] hover:bg-gray-100 px-8 py-6 text-base rounded-lg h-[60px] w-full sm:w-auto">
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 text-base rounded-lg h-[60px] w-full sm:w-auto"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
