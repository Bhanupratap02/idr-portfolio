/** @format */
import Image from "next/image";
import hero from "@/assets/services/networks-it/hero.png";
export default function NITHeroSection() {
  return (
    <section className="relative min-h-[600px] lg:h-[88vh] 2xl:h-[90vh]  bg-gradient-to-r from-blue-900/10 to-purple-900/10 py-16 sm:py-20 lg:py-24 2xl:py-28 flex items-center">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="container mx-auto px-6 lg:px-8"> */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left ">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium leading-tight text-gray-800">
              Networks & IT
              <br />
              Infrastructure
            </h1>
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-normal text-gray-800 leading-relaxed">
              The Backbone of Every Smart Building
            </h2>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600 leading-relaxed 3xl:leading-loose max-w-2xl mx-auto lg:mx-0">
              Modern buildings demand modern infrastructure. At IDR Technology
              Solutions, we design, install, and support IT networks that power
              everything from tenant Wi-Fi to surveillance, access control,
              intercoms, and smart building systems.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 text-white px-6 2xl:px-8 py-3 2xl:py-4 rounded-lg font-medium sm:text-lg 2xl:text-xl hover:bg-blue-700 transition-colors">
                Get Network Assessment
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 2xl:px-8 py-3 2xl:py-4 rounded-lg font-medium sm:text-lg 2xl:text-xl hover:bg-gray-50 transition-colors">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* <Image
              src={hero}
              alt="Network Infrastructure Server Room"
              className="w-full h-auto rounded-lg shadow-xl"
            /> */}
            <Image
              src={hero}
              alt="Network Infrastructure Server Room"
              className="w-full max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl  h-auto rounded-lg shadow-xl mx-auto lg:mx-0 3xl:aspect-[18/12]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
