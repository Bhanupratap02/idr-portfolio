/** @format */

import { Button } from "@/components/ui/button";

export default function MVIHeroSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl font-medium text-gray-800 leading-tight">
              MVI Systems – IP Video Intercoms Built for Scale
            </h1>
            <p className="text-xl text-gray-600 font-normal leading-relaxed">
              Modern video access for modern buildings. Trusted by IDR and
              installed in 100+ properties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium h-auto">
              Request a Quote
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 text-base font-medium h-auto"
            >
              See a Demo
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/76aef7e8db9a2bc8dc1fd76bcc292d59f1534a60?width=922"
              alt="MVI Systems IP Video Intercom Device"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
