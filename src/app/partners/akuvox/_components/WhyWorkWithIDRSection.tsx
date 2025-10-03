/** @format */

export default function WhyWorkWithIDRSection() {
  const leftBenefits = [
    {
      title: "Certified Akuvox Installer",
      description: null,
    },
    {
      title: "Deep Experience",
      description: "Apartment, commercial, and hybrid systems",
    },
    {
      title: "In-house Install & Programming",
      description: "No outsourcing, complete control",
    },
  ];

  const rightBenefits = [
    {
      title: "Complete Integration",
      description: "Door strikes, magnetic locks, cameras, mobile platforms",
    },
    {
      title: "Trusted by Professionals",
      description: "Developers, building managers, security directors",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24  2xl:py-28 3xl:py-32 bg-blue-50">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center text-gray-800 mb-10 sm:mb-12 md:mb-16  xl:mb-18 2xl:mb-22 3xl:mb-24">
          Why Work with IDR?
        </h2>

        {/* Benefits Grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-64 xl:gap-70 2xl:gap-75 justify-center mb-10 sm:mb-12 md:mb-16  xl:mb-18 2xl:mb-22 3xl:mb-24">
          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4 xl:space-y-6 2xl:space-y-8 3xl:space-y-9">
            {leftBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 "
              >
                <span className="text-green-500 text-lg md:text-xl 2xl:text-2xl  flex-shrink-0">
                  ✅
                </span>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl lg:text-lg xl:text-[1.35rem] 2xl:text-2xl 3xl:text-3xl font-medium text-gray-800 leading-7">
                    {benefit.title}
                  </h3>
                  {benefit.description && (
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-light leading-relaxed mt-1.5 md:mt-2">
                      {benefit.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3 sm:space-y-4 xl:space-y-6 2xl:space-y-8 3xl:space-y-9">
            {rightBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 xl:gap-5 2xl:gap-6"
              >
                <span className="text-green-500 text-lg md:text-xl 2xl:text-2xl  flex-shrink-0">
                  ✅
                </span>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl lg:text-lg xl:text-[1.35rem] 2xl:text-2xl 3xl:text-3xl font-medium text-gray-800 leading-7">
                    {benefit.title}
                  </h3>
                  {benefit.description && (
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-light leading-relaxed mt-1.5 md:mt-2">
                      {benefit.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-7 xl:p-8 2xl:p-10 3xl:p-12 text-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[1.35rem]  2xl:text-3xl 3xl:text-4xl text-gray-600 leading-relaxed font-light">
            We install Akuvox systems that look great, work flawlessly, and
            scale with your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
