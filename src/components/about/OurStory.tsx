import Image from 'next/image';
import IDR_VAN from "@/assets/aboutus/idr-van.png";
import IDR_TEAM from "@/assets/aboutus/team-photo.png";

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-idr-text">Our Story</h2>
        </div>

        {/* First Story Section - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-20">
          {/* Team Photo */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src={IDR_TEAM}
                alt="IDR Company Team Photo"
                width={1106}
                height={800}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <div className="text-lg sm:text-xl text-idr-text leading-relaxed space-y-6">
              <p>
                IDR Technology Solutions was founded in 2007 by a 21-year-old
                entrepreneur with $600, a credit card, and a relentless drive
                to build something bigger. What began as an online electronics
                store quickly evolved into a service-based company, offering
                AV installations and computer support to small businesses and
                residential clients.
              </p>
              <p>
                By 2009, we expanded into structured cabling and IT
                consulting, laying the groundwork for what IDR would
                eventually become. In 2013, we secured our New York City
                security alarm installer license and entered the security
                integration space—one that would soon define our future.
              </p>
            </div>
          </div>
        </div>

        {/* Second Story Section - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2 lg:pr-4 lg:order-1">
            <div className="text-lg sm:text-xl text-idr-text leading-relaxed space-y-6">
              <p>
                For years, we operated behind the scenes as a subcontractor,
                quietly building our reputation through hard work, hands-on
                service, and a refusal to cut corners. In 2015, everything
                changed. We started taking on major clients—nonprofits,
                enterprises, and multi-site organizations—earning their trust
                with white glove service, dedicated project management, and
                true technical partnership.
              </p>
              <p>
                Today, after 18 years in business, we&apos;ve grown into a
                trusted regional integrator with reach across NYC, New Jersey,
                Florida, Texas, California, and beyond. But our core
                hasn&apos;t changed—we still show up, solve real problems, and
                support every system we sell.
              </p>
              <p className="font-bold text-idr-text text-xl sm:text-2xl">
                We didn&apos;t get here overnight. We earned it.
              </p>
            </div>
          </div>

          {/* Van Photo */}
          <div className="w-full lg:w-1/2 lg:order-2">
            <div className="relative">
              <Image
                src={IDR_VAN}
                alt="IDR Van"
                width={1052}
                height={800}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}