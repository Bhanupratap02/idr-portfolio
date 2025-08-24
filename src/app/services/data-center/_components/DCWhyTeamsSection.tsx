/** @format */

export default function DCWhyTeamsSection() {
  const teamFeatures = [
    {
      title: "Enterprise-grade install + documentation",
      description:
        "Professional infrastructure built to enterprise standards with comprehensive documentation.",
    },
    {
      title: "Built-in airflow & power planning",
      description:
        "Optimized thermal management and power distribution for maximum efficiency.",
    },
    {
      title: "Certified by industry leaders",
      description:
        "Installations certified by Belden, Panduit,Ortronics and other leading manufacturers.",
    },
    {
      title: "Code-compliant installations",
      description:
        "All work meets or exceeds NEC, NFPA, IEEE,and other relevant standards.",
    },
    {
      title: "In-house trained technicians",
      description:
        "Skilled professionals with specialized training in data center infrastructure.",
    },
    {
      title: "Service agreements + Portal access",
      description:
        "Ongoing support and real-time access to documentation through our client portal.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Teams Choose IDR
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to infrastructure delivers reliability,
            efficiency, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
}
