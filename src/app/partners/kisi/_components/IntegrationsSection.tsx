import {
  Camera,          // for Kisi + Rhombus (security/video)
  DoorOpen,        // for Kisi + ButterflyMX (intercom/entry)
  Building         // for Building Automation (facilities)
} from "lucide-react";

const integrations = [
  {
    icon: <Camera className="w-7 h-6 text-purple-600" />,
    title: "Kisi + Rhombus",
    description:
      "Access logs automatically linked with video footage for complete security oversight",
    bgColor: "bg-purple-100"
  },
  {
    icon: <DoorOpen className="w-6 h-6 text-orange-600" />,
    title: "Kisi + ButterflyMX",
    description:
      "Intercom, video calling, and remote unlock in one seamless experience",
    bgColor: "bg-orange-100"
  },
  {
    icon: <Building className="w-8 h-6 text-green-600" />,
    title: "Visitor management systems such as Envoy, Eden and others",
    description:
      "Integrate with lighting, HVAC, and other building systems for smart facilities",
    bgColor: "bg-green-100"
  }
];

export function IntegrationsSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#2e2e2e] mb-4">
            Smart Integrations That Work Together
          </h2>
          <p className="text-lg lg:text-xl text-[#626262]">
            Connect your entire security ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div
                className={`${integration.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-6`}
              >
                {integration.icon}
              </div>
              <h3 className="text-xl text-[#2e2e2e] mb-4">
                {integration.title}
              </h3>
              <p className="text-[#626262] leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
