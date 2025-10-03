/** @format */

export default function ServiceAreasSection() {
  const serviceAreas = [
    {
      icon: "📍",
      title: "NYC",
      description: "All Boroughs",
    },
    {
      icon: "📍",
      title: "New Jersey",
      description: "North & Central",
    },
    {
      icon: "📍",
      title: "South Florida",
      description: null,
    },
    {
      icon: "🌎",
      title: "Nationwide",
      description: "Developer portfolios",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-38 bg-gray-50">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center text-gray-800 mb-8 sm:mb-8 md:mb-10 xl:mb-16 2xl:mb-18 3xl:mb-20">
          Service Areas
        </h2>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-[#E2E8F0] rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-8 3xl:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4 2xl:mb-5 3xl:mb-6">
                <span className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                  {area.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-gray-800 mb-2">
                {area.title}
              </h3>

              {/* Description */}
              {area.description && (
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-light text-gray-600">
                  {area.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
