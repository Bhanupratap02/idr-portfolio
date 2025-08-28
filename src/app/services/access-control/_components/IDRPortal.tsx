/** @format */
import Image from "next/image";
import portal from "@/assets/services/access-control/portal.png";

export default function IDRPortal() {
  const portalFeatures = [
    {
      icon: "📷",
      title: "Photos/Videos of Work",
      desc: "Visual documentation of installations",
    },
    {
      icon: "📁",
      title: "Equipment Docs",
      desc: "Manuals and specifications",
    },
    {
      icon: "❓",
      title: "Warranty Tracking",
      desc: "Monitor coverage status",
    },
    {
      icon: "🎫",
      title: "Submit & Track Requests",
      desc: "Manage support tickets",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6">
              The IDR Portal: Total Transparency
            </h2>
            <p className="text-[#626262] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12">
              Access everything about your system in one secure location. From
              installation documentation to support requests, everything is at
              your fingertips.
            </p>

            {/* Portal Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {portalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD700] rounded flex items-center justify-center text-lg sm:text-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-[#2E2E2E] text-base sm:text-lg font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#626262] text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#626262] text-base sm:text-lg lg:text-xl italic">
              Manage 1 site or 50 — you stay informed and in control.
            </p>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
            <Image
              src={portal}
              alt="IDR Portal Interface"
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
