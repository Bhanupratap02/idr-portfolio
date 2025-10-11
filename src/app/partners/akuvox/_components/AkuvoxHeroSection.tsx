/** @format */

import { Button } from "@/components/ui/button";
import heroImg from "@/assets/partners/akuvox/hero.png";
import Image from "next/image";
export default function AkuvoxHeroSection() {
  return (
    <section className="w-full overflow-hidden min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[87vh] 2xl:min-h-[94vh]  py-12 sm:py-16 md:py-18 lg:py-10 2xl:py-18 3xl:py-20 bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-10 2xl:gap-18 items-center">
        {/* Content */}
        <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12  max-w-none lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
          <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8 w-full">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 leading-tight">
              Akuvox Intercom & Access Control Spotlight
            </h1>

            <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-4 3xl:gap-5">
              <p className="text-base sm:text-lg md:text-xl lg:text-lg  xl:text-xl 2xl:text-2xl text-gray-600 font-light leading-relaxed">
                Smart Video Intercoms, Touchless Entry, and Cloud Connectivity |
                Installed by IDR Technology Solutions
              </p>
              <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-[#2E2E2E] font-medium">
                Modern Intercom, Smarter Access
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg  xl:text-xl 2xl:text-2xl text-gray-600 font-light leading-relaxed">
                Akuvox is a global leader in SIP-based intercom and access
                control solutions, offering beautifully designed devices powered
                by advanced features like facial recognition, QR entry, voice
                control, and mobile unlock.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-lg  xl:text-xl 2xl:text-2xl text-gray-600 font-light leading-relaxed">
                Whether you&apos;re outfitting an apartment building, office, or
                mixed-use development, Akuvox delivers flexibility, security,
                and a high-end user experience — and IDR delivers the install,
                setup, and long-term support that makes it seamless.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-medium h-auto cursor-pointer ">
              Schedule a Demo
            </Button>

            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-medium h-auto cursor-pointer"
            >
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-stretch ">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[604px] xl:max-w-3xl 2xl:max-w-3xl h-full flex items-center rounded-2xl">
            <div className="relative w-full h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] 2xl:min-h-[650px]">
              <Image
                src={heroImg}
                alt="Akuvox Intercom and Access Control Solutions"
                fill
                className="object-cover  rounded-2xl"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
