/** @format */

export default function DCProcessSection() {
  const processes = [
    {
      step: "1",
      title: "Walkthrough & Site Assessment",
      description:
        "We evaluate your space, document requirements, and identify potential challenges before planning begins.",
      side: "left",
    },
    {
      step: "2",
      title: "Rack Planning & Panel Design",
      description:
        "Detailed design of rack layouts, cable paths, and panel configurations to optimize space and airflow.",
      side: "right",
    },
    {
      step: "3",
      title: "BoM & Vendor Coordination",
      description:
        "Comprehensive bill of materials creation and coordination with trusted vendors to ensure quality components.",
      side: "left",
    },
    {
      step: "4",
      title: "Physical Install",
      description:
        "Expert technicians install equipment, run cables, and implement designed solutions with precision.",
      side: "right",
    },
    {
      step: "5",
      title: "Dressing & Testing",
      description:
        "Professional cable management and comprehensive testing of all installed components.",
      side: "left",
    },
    {
      step: "6",
      title: "Firestop & Compliance",
      description:
        "Implementation of fire safety measures and verification of compliance with relevant codes.",
      side: "right",
    },
    {
      step: "7",
      title: "Diagrams & Documentation",
      description:
        "Detailed documentation of the installed infrastructure, including diagrams, test results, and warranties.",
      side: "left",
    },
    {
      step: "8",
      title: "Portal Access & Ongoing Support",
      description:
        "Setup of portal access for documentation and configuration of ongoing support services.",
      side: "right",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-800 mb-4">
            The IDR Process
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our structured approach ensures quality, consistency, and
            transparency at every stage of your infrastructure project.
          </p>
        </div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-blue-200 h-full"></div>

          <div className="space-y-12">
            {processes.map((process, index) => (
              <div key={index} className="relative flex items-center">
                {/* Step number circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-normal text-xl z-10">
                  {process.step}
                </div>

                {/* Content box */}
                <div
                  className={`w-full ${
                    process.side === "left" ? "pr-14" : "pl-14"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      process.side === "left" ? "ml-0" : "ml-auto"
                    } ${process.side === "right" ? "text-left" : "text-right"}`}
                  >
                    <div className="space-y-3">
                      <h3 className="text-xl font-normal text-gray-800">
                        {process.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
