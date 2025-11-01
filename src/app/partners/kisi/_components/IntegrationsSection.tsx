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
      "Kisi seemlessly integrates with visitor management systems",
    bgColor: "bg-green-100"
  }
];

export function IntegrationsSection() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
        <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
     <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16  text-center">
            <h2  className="mb-3 sm:mb-4 md:mb-6   text-2xl font-bold text-[#2e2e2e] sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
            Smart Integrations That Work Together
          </h2>
           <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            Connect your entire security ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md group hover:shadow-2xl transition-shadow duration-200"
            >
              <div
                className={`${integration.bgColor} rounded-lg size-10 sm:size-11 md:size-12 xl:size-14 2xl:size-16 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mb-6`}
              >
                {integration.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl mb-4">
                {integration.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
