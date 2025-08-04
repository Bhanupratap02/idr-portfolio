import Image from 'next/image';
import IDR_VAN from "@/assets/aboutus/idr-van.png";
import IDR_TEAM from "@/assets/aboutus/team-photo.png";

export default function OurStory() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        
        {/* First Section - Team Photo & Story */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24">
          
          {/* Team Photo */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
              <Image
                src={IDR_TEAM}
                alt="IDR Company Team Photo"
                width={1106}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8 3xl:space-y-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-idr-text">
                Our Story
              </h2>
              
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
                <p className="text-gray-700">
                  IDR Technology Solutions was founded in 2007 by a 21-year-old
                  entrepreneur with $600, a credit card, and a relentless drive to build
                  something bigger. What began as an online electronics store quickly
                  evolved into a service-based company, offering AV installations and
                  computer support to small businesses and residential clients.
                </p>
                <p className="text-gray-700">
                  By 2009, we expanded into structured cabling and IT consulting, laying
                  the groundwork for what IDR would eventually become. In 2013, we
                  secured our New York City security alarm installer license and entered
                  the security integration space—one that would soon define our future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Story Continuation & Van Photo */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 mt-12 sm:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 3xl:mt-32">
          
          {/* Left content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full lg:order-last">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
                <p className="text-gray-700">
                  For years, we operated behind the scenes as a subcontractor, quietly
                  building our reputation through hard work, hands-on service, and a
                  refusal to cut corners. In 2015, everything changed. We started taking
                  on major clients—nonprofits, enterprises, and multi-site
                  organizations—earning their trust with white glove service, dedicated
                  project management, and true technical partnership.
                </p>
                <p className="text-gray-700">
                  Today, after 18 years in business, we&apos;ve grown into a trusted regional
                  integrator with reach across NYC, New Jersey, Florida, Texas, California,
                  and beyond. But our core hasn&apos;t changed—we still show up, solve real
                  problems, and support every system we sell.
                </p>
                <p className="font-semibold text-gray-900 text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                  We didn&apos;t get here overnight. We earned it.
                </p>
              </div>
            </div>
          </div>

          {/* Van Photo */}
          <div className="w-full lg:w-1/2 lg:order-first">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
              <Image
                src={IDR_VAN}
                alt="IDR Van"
                width={1052}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}