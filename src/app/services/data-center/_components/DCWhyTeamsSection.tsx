/** @format */
import Image from "next/image";
const enterprise = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fdata-center%2Ficons%2Fenterprise.png";
const airflow = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fdata-center%2Ficons%2Fair_flow.png";
const certified = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fdata-center%2Ficons%2Fcertified.png";
const code = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fdata-center%2Ficons%2Fchecklist.png";
const technicians = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fdata-center%2Ficons%2Ftechnician.png";
const portal = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fdata-center%2Ficons%2Fportal.png";
  const teamFeatures = [
    {
      title: "Enterprise-grade install + documentation",
      description:
        "Professional infrastructure built to enterprise standards with comprehensive documentation.",
      icon: enterprise,
    },
    {
      title: "Built-in airflow & power planning",
      description:
        "Optimized thermal management and power distribution for maximum efficiency.",
      icon: airflow,
    },
    {
      title: "Certified by industry leaders",
      description:
        "Installations certified by Belden, Panduit,Ortronics and other leading manufacturers.",
      icon: certified,
    },
    {
      title: "Code-compliant installations",
      description:
        "All work meets or exceeds NEC, NFPA, IEEE,and other relevant standards.",
      icon: code,
    },
    {
      title: "In-house trained technicians",
      description:
        "Skilled professionals with specialized training in data center infrastructure.",
      icon: technicians,
    },
    {
      title: "Service agreements + Portal access",
      description:
        "Ongoing support and real-time access to documentation through our client portal.",
      icon: portal,
    },
  ];
export default function DCWhyTeamsSection() {


  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-4">
            Why Teams Choose IDR
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to infrastructure delivers reliability,
            efficiency, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12 mb-12">
          {teamFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8  3xl:p-14 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl 2xl:text-2xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base xl:text-lg 2xl:text-xl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
