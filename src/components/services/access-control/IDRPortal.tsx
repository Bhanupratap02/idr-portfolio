/** @format */

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
    <section className="bg-white px-4 lg:px-28 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#2E2E2E] text-4xl font-medium mb-6">
              The IDR Portal: Total Transparency
            </h2>
            <p className="text-[#626262] text-xl leading-relaxed mb-12">
              Access everything about your system in one secure location. From
              installation documentation to support requests, everything is at
              your fingertips.
            </p>

            {/* Portal Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {portalFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-7 h-6 bg-[#FFD700] rounded flex items-center justify-center text-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-[#2E2E2E] text-lg font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#626262] text-base">{feature.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[#626262] text-xl italic">
              "Manage 1 site or 50 — you stay informed and in control."
            </p>
          </div>

          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e1dfc6dd0191f9db860405a2c859bf3ed283d1a9?width=1168"
              alt="IDR Portal Interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
