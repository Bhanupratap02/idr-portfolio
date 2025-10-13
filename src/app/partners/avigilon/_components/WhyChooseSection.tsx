import { Monitor, Cloud, Shield } from "lucide-react";

export function WhyChooseSection() {
  const features = [
    {
      icon: Monitor,
      color: "bg-blue-500",
      title: "Unified Operations",
      description: "Video + access correlated in one workflow for complete situational awareness."
    },
    {
      icon: Cloud,
      color: "bg-orange-500",
      title: "Deploy How You Want",
      description: "On-prem appliances or cloud-native Alta with remote management flexibility."
    },
    {
      icon: Shield,
      color: "bg-green-600",
      title: "Resilient & Scalable",
      description: "Peer replication, hot standby, and multi-appliance scale to thousands of doors."
    }
  ];

  return (
    <section className="w-full bg-gray-50  py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Header */}
        <div className="mb-10 text-center md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  mb-4 md:mb-6 text-[#2e2e2e]">
            Why Choose Avigilon Unity + Alta
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light text-gray-600 leading-relaxed">
            Three core advantages that set us apart
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 xl:p-8 2xl:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`${feature.color} size-14 md:size-16 2xl:size-18 rounded-xl flex items-center justify-center mb-6`}
              >
                <feature.icon className=" text-white size-6 md:size-7 2xl:size-8" />
              </div>
              <h3 className="text-lg  md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl mb-3 text-[#2e2e2e] font-[450]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
