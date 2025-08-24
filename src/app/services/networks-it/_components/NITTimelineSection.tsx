/** @format */

export default function NITTimelineSection() {
  const timelineSteps = [
    {
      step: "1",
      title: "Consultation",
      description:
        "We assess your needs, building layout, and existing infrastructure to develop requirements.",
    },
    {
      step: "2",
      title: "Design + Mapping",
      description:
        "Detailed network design with heat maps, cable paths, and equipment specifications.",
    },
    {
      step: "3",
      title: "Project Coordination",
      description:
        "Scheduling, permitting, and coordination with other trades and stakeholders.",
    },
    {
      step: "4",
      title: "Cable & Rack Work",
      description:
        "Professional installation with meticulous attention to detail and quality standards.",
    },
    {
      step: "5",
      title: "Documentation",
      description:
        "Comprehensive documentation including network maps, IP schemes, and credentials.",
    },
    {
      step: "6",
      title: "Support Agreement",
      description:
        "Ongoing maintenance, monitoring, and support to keep your infrastructure running smoothly.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-800 mb-4">
            Full-Service from Start to Finish
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach ensures your infrastructure project is
            handled professionally at every stage.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6b75b8a7cc8b434f198a20d71da6e485079766e2?width=587"
                  alt="Network Installation Process"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              {/* Right side - Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 transform -translate-x-6"></div>

                <div className="space-y-8">
                  {timelineSteps.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                        {item.step}
                      </div>

                      {/* Content */}
                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
