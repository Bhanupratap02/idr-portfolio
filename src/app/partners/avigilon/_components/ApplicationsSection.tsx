import { GraduationCap, Building2, Heart } from "lucide-react";

export function ApplicationsSection() {
  const applications = [
    {
      icon: GraduationCap,
      color: "bg-blue-600",
      title: "Education",
      description: "Find lost badges, correlate access logs with video to locate misuse, and ensure campus safety with real-time identity tracking.",
      quote: "Reduced security incidents by 40% with integrated video verification"
    },
    {
      icon: Building2,
      color: "bg-green-600",
      title: "Commercial/Enterprise",
      description: "Multi-site identity replication enables seamless travel between offices and simplified onboarding after acquisitions.",
      quote: "Streamlined access for 10,000+ employees across 50 locations"
    },
    {
      icon: Heart,
      color: "bg-red-600",
      title: "Healthcare",
      description: "Scenes + identity mustering enables faster roll call and targeted responder dispatch on restricted-door alarms.",
      quote: "Emergency response time improved by 60% with automated mustering"
    }
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#2e2e2e]">
            Real-World Applications
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            See how organizations across industries benefit from unified security
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
            >
              <div className={`${app.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <app.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-4 text-[#2e2e2e]">{app.title}</h3>
              <p className="text-gray-600 mb-6">{app.description}</p>
              
              {/* Quote */}
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-sm text-gray-600 italic">&quot;{app.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
