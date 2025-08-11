

export default function IncludedSection() {
  const includedServices = [
    {
      title: "Expert consulting and site walkthroughs",
      description:
        "We analyze your space and needs before recommending solutions.",
    },
    {
      title: "Custom room design and system selection",
      description:
        "Tailored solutions that match your specific requirements and budget.",
    },
    {
      title: "Installation by certified A/V technicians",
      description:
        "Expert installation that ensures everything works perfectly.",
    },
    {
      title: "DSP programming & audio tuning",
      description:
        "Precisely calibrated audio for perfect sound in your unique space.",
    },
    {
      title: "Staff training & walkthrough",
      description:
        "We ensure your team knows how to use all features effectively.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            What's Included in Every IDR Conference Room
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Conference Room Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d07c8d91d447038ea1e5028c480946df4b0835b6?width=864"
              alt="Modern Conference Room Setup"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Services List */}
          <div className="order-1 lg:order-2 space-y-8">
            {includedServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
