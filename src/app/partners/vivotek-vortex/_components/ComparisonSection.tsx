/** @format */

export default function ComparisonSection() {
  const features = [
    {
      title: "Vivotek = On-Premises Power",
      points: [
        "Traditional architecture with NVRs and direct camera control",
        "Ideal for secure local storage or high-density environments",
      ],
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/b8314cb8806425844629f8cea541b663051f3a89?width=378",
      imageAlt: "Vivotek Camera System",
      imageClasses:
        "bottom-5 -right-5 w-35 h-25 md:w-50 md:h-40 lg:w-40 lg:h-30 xl:w-48 xl:h-40 2xl:w-56 2xl:h-45 3xl:w-64 3xl:h-55",
    },
    {
      title: "Vortex = Cloud Simplicity",
      points: [
        "Access footage from anywhere via secure browser or app",
        "Perfect for multi-site management, remote monitoring, and flexible growth",
      ],
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/c5a62611182428f9a3b2dfd35ba216cd58865824?width=380",
      imageAlt: "Vortex Cloud System",
      imageClasses:
        "bottom-15 -right-5 w-30 h-29 md:w-50 md:h-49 lg:w-35 lg:h-34 xl:w-48 xl:h-47 2xl:w-56 2xl:h-55 3xl:w-64 3xl:h-63",
    },
  ];
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-20 xl:py-22  2xl:py-24 3xl:py-28">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#333] leading-tight">
            What&apos;s the Difference?
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20 max-w-[65rem] 2xl:max-w-[80rem] 3xl:max-w-[90rem] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] hover:from-[#F1F5F9] hover:to-[#E2E8F0] rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 2xl:p-10 3xl:p-12 relative transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200 "
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8 mb-5 sm:mb-6 md:mb-7 lg:mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12 ">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl  text-[#333] leading-tight">
                  {feature.title}
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262] max-w-[65%] font-light">
                  <p className="leading-relaxed">• {feature.points[0]}</p>
                  <p className="leading-relaxed">• {feature.points[1]}</p>
                </div>
              </div>

              {/* Vivotek Image */}
              <div
                className={` absolute ${feature.imageClasses} opacity-99 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover rounded-lg  group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
