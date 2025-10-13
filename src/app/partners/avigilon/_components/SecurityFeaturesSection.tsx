import { UserCircle, RefreshCw, AlertTriangle, Video, CloudLightning, Zap } from "lucide-react";

export function SecurityFeaturesSection() {
  const features = [
    {
      icon: UserCircle,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Identity Management & Badging",
      description: "Integrated badging and role-based access control for streamlined operations."
    },
    {
      icon: RefreshCw,
      color: "bg-green-100",
      iconColor: "text-green-600",
      title: "Peer-to-peer Replication",
      description: "Keep directories synchronized across appliances for seamless operations."
    },
    {
      icon: AlertTriangle,
      color: "bg-red-100",
      iconColor: "text-red-600",
      title: "Hot Standby Auto Failover",
      description: "Built-in redundancy to reduce downtime and ensure continuous protection."
    },
    {
      icon: Video,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Unity + Video Integration",
      description: "Launch Appearance Search, verify identity and pull associated video directly from access events."
    },
    {
      icon: CloudLightning,
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Alta Cloud Services",
      description: "Automated updates, remote monitoring, sensors, visitor & mailroom workflows."
    },
    {
      icon: Zap,
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Orchestrate Automation",
      description: "No-code workflows to trigger actions like lock doors and notify responders."
    }
  ];

  return (
    <section className="w-full bg-gray-50  py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Header */}
        <div className="mb-10 text-center md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  mb-4 md:mb-6 text-[#2e2e2e]">
            Comprehensive Security Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light text-gray-600">
            Everything you need for modern access control and monitoring
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg  p-4 sm:p-5 md:p-6 xl:p-8 2xl:p-10 hover:shadow-xl transition-shadow"
            >
              <div
                className={`${feature.color} size-14 md:size-16 2xl:size-18 rounded-lg flex items-center justify-center mb-5 md:mb-6`}
              >
                <feature.icon
                  className={`size-6 md:size-7 2xl:size-8 ${feature.iconColor}`}
                />
              </div>
              <h3 className="text-lg  md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl mb-3 text-[#2e2e2e] font-[450]">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-2 md:mb-4 text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-1 text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
