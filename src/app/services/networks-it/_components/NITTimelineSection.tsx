/** @format */
import Image from "next/image";
const service = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fnetworks-it%2Fservice.png";
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
export default function NITTimelineSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[85rem] 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-12">
        {/* <div className="container mx-auto px-6 lg:px-8"> */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-gray-800 mb-4">
            Full-Service from Start to Finish
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach ensures your infrastructure project is
            handled professionally at every stage.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <Image
                src={service}
                alt="Network Installation Process"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg 3xl:w-[80%]  mx-auto"
              />
            </div>

            {/* Right side - Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-2 top-0 bottom-0 w-0.5 bg-blue-600 transform -translate-x-6 3xl:-translate-x-7"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12 ">
                {timelineSteps.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col lg:flex-row  items-center lg:items-start "
                  >
                    {/* Timeline Dot */}
                    <div className=" lg:absolute -left-8 3xl:-left-10 w-8 h-10 lg:h-8 3xl:w-10 3xl:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {item.step}
                    </div>

                    {/* Content */}
                    <div className="bg-gray-50 rounded-lg p-5 sm:p-6 2xl:p-8 3xl:p-10 shadow-sm w-full h-full ml-2 mt-2 lg:mt-0 ">
                      <h3 className="text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-medium text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base  text-gray-600 leading-relaxed">
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
    </section>
  );
}
