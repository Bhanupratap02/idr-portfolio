/** @format */

export default function WhyAkuvoxSection() {
  const features = [
    {
      icon: "📞",
      title: "SIP-Based Intercom",
      description: "Integrates with phones, apps, and video call stations",
    },
    {
      icon: "👁️",
      title: "Touchscreen Directory",
      description: "Facial Recognition technology included",
    },
    {
      icon: "🔑",
      title: "Multiple Credentials",
      description: "PIN, card, QR, app, facial recognition options",
    },
    {
      icon: "☁️",
      title: "Cloud or On-Prem",
      description: "Manage remotely or locally based on your needs",
    },
    {
      icon: "🏙️",
      title: "Modern Aesthetics",
      description: "Sleek wall and flush-mount units",
    },
    {
      icon: "📱",
      title: "Mobile App Support",
      description: "Answer calls, unlock doors, view footage",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-38 bg-white">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center text-gray-800 mb-8 sm:mb-8 md:mb-10 2xl:mb-14 3xl:mb-16">
          Why Akuvox?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-8  3xl:p-10 flex flex-col items-center text-center   hover:bg-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 sm:mb-4 xl:mb-5 2xl:mb-6">
                <span className="text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl">
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-medium  text-center text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl  text-gray-600 text-center leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
