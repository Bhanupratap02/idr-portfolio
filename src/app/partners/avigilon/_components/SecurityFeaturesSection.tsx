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
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#2e2e2e]">
            Comprehensive Security Features
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            Everything you need for modern access control and monitoring
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl mb-3 text-[#2e2e2e]">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-1">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
