import { GraduationCap, Building2, Heart } from "lucide-react";

export function ApplicationsSection() {
  const applications = [
    {
      icon: GraduationCap,
      gradient: "from-blue-50 to-blue-100/40",
      color: "bg-blue-600",
      title: "Education",
      description:
        "Find lost badges, correlate access logs with video to locate misuse, and ensure campus safety with real-time identity tracking.",
      quote:
        "Reduced security incidents by 40% with integrated video verification",
    },
    {
      icon: Building2,
      color: "bg-green-600",
      gradient: "from-green-50 to-green-100/40",
      title: "Commercial/Enterprise",
      description:
        "Multi-site identity replication enables seamless travel between offices and simplified onboarding after acquisitions.",
      quote: "Streamlined access for 10,000+ employees across 50 locations",
    },
    {
      icon: Heart,
      color: "bg-red-600",
      gradient: "from-red-50 to-red-100/40",
      title: "Healthcare",
      description:
        "Scenes + identity mustering enables faster roll call and targeted responder dispatch on restricted-door alarms.",
      quote: "Emergency response time improved by 60% with automated mustering",
    },
  ];

  return (
    <section className="w-full bg-white py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Header */}
        <div className="mb-10 text-center md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  mb-4 md:mb-6 text-[#2e2e2e]">
            Real-World Applications
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light text-gray-600">
            See how organizations across industries benefit from unified
            security
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {applications.map((app, index) => (
            <div
              key={index}
              // className="rounded-xl overflow-hidden"
              className={`rounded-2xl p-6 sm:p-8 md:p-8 xl:p-10 bg-gradient-to-br ${app.gradient} shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div
                className={`${app.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 md:mb-6`}
              >
                <app.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg  md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl mb-3 text-[#2e2e2e] font-[450]">
                {app.title}
              </h3>
              <p className="text-gray-600 mb-6 text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light leading-relaxed">
                {app.description}
              </p>

              {/* Quote */}
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-100 ">
                <p className="text-sm xl:text-base text-gray-600 italic leading-snug">
                  &quot;{app.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
