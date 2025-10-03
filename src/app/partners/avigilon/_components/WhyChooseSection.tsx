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
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#2e2e2e]">
            Why Choose Avigilon Unity + Alta
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            Three core advantages that set us apart
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-[#2e2e2e]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
