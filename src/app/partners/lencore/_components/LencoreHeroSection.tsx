/** @format */

import { Button } from "@/components/ui/button";

export default function LencoreHeroSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col items-start gap-8 max-w-xl">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className=" text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
              Lencore Sound Masking & Audio Solutions
            </h1>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl text-gray-600 font-light">
                Smarter Soundscapes for Better Productivity
              </h2>

              <p className="text-lg text-gray-600 font-light leading-relaxed">
                At IDR Technology Solutions, we specialize in deploying
                Lencore&apos;s cutting-edge sound masking and audio solutions
                for offices, healthcare, education, and secure government
                environments.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-base font-normal h-auto">
              Schedule Consultation
            </Button>

            <Button
              variant="outline"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-base font-normal h-auto"
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[604px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d9fbaedd661d453e739c6d326545a46ea912e705?width=1208"
              alt="Lencore Sound Masking Solutions"
              className="w-full  h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
