import { Workflow, FileText, Video, Fingerprint } from "lucide-react";

export function IntegrationsSection() {
  const integrations = [
    {
      icon: Workflow,
      color: "bg-purple-100",
      title: "Orchestrate",
      description: "Automation workflows"
    },
    {
      icon: FileText,
      color: "bg-blue-100",
      title: "DMS",
      description: "Document management"
    },
    {
      icon: Video,
      color: "bg-green-100",
      title: "Unity Video",
      description: "Integrated surveillance"
    },
    {
      icon: Fingerprint,
      color: "bg-orange-100",
      title: "Biometrics",
      description: "Identity verification"
    }
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#2e2e2e]">
            Integrations & Ecosystem
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            Connect with your existing systems and third-party hardware
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
            >
              <div className={`${integration.color} w-20 h-20 rounded-xl flex items-center justify-center mx-auto`}>
                <integration.icon className="w-8 h-8 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl mb-1 text-[#2e2e2e]">{integration.title}</h3>
                <p className="text-lg text-gray-600">{integration.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
