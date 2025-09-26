/** @format */

import { BarChart3, Upload, Users, Building } from "lucide-react";

export default function PowerfulToolsSection() {
  const tools = [
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description:
        "Monitor the status of all intercom stations and hardware in real-time from a central dashboard.",
    },
    {
      icon: Upload,
      title: "Remote Updates",
      description:
        "Deploy firmware updates and security patches remotely without disrupting service.",
    },
    {
      icon: Users,
      title: "Directory Management",
      description:
        "Easily update resident directories and manage access permissions from any web browser.",
    },
    {
      icon: Building,
      title: "Multi-Building Management",
      description:
        "Centralized web dashboards for managing intercom systems across multiple properties.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-800">
            Powerful Tools for Property Teams
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/37c28a15e5316be8f3d13b064453ec68ad764603?width=1200"
              alt="MVI Systems Management Dashboard"
              className="w-full max-w-2xl h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
