import {
  Smartphone,
  Cloud,
  QrCode,
  Shield,
  Building2,
  MapPin,
  Calendar,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: "Mobile Unlock",
    description: "Unlock doors with your smartphone, badge, or PIN",
  },
  {
    icon: <Cloud className="w-8 h-6 text-blue-600" />,
    title: "Cloud Native",
    description: "Control from anywhere with real-time monitoring",
  },
  {
    icon: <QrCode className="w-5 h-6 text-blue-600" />,
    title: "QR Visitor Entry",
    description: "Seamless visitor access with Terminal Pro",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Instant Lockdown",
    description: "Emergency lockdown from your mobile app",
  },
  {
    icon: <Building2 className="w-5 h-6 text-blue-600" />,
    title: "Multi-Site Management",
    description: "Manage multiple locations from one dashboard",
  },
  {
    icon: <MapPin className="w-5 h-6 text-blue-600" />,
    title: "Geo-Verification",
    description: "Remote unlock with location verification",
  },
  {
    icon: <Calendar className="w-5 h-6 text-blue-600" />,
    title: "Visitor Scheduling",
    description: "Pre-schedule visitor access with time limits",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Analytics",
    description: "Detailed access logs and usage insights",
  },
];

export function WhyChooseKisiSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#2e2e2e] mb-4">
            Why Choose Kisi?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Modern access control that adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg text-[#2e2e2e] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
