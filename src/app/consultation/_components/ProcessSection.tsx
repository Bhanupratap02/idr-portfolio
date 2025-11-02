/** @format */

export default function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Listen & Understand",
      desc: "We start by learning about your goals, challenges, and environment.",
    },
    {
      step: "2",
      title: "Analyze & Strategize",
      desc: "We assess your needs and develop tailored solutions.",
    },
    {
      step: "3",
      title: "Design & Present",
      desc: "We create detailed plans with clear explanations of every recommendation.",
    },
    {
      step: "4",
      title: "Refine & Optimize",
      desc: "We collaborate with you to perfect the design before implementation.",
    },
    {
      step: "5",
      title: "Install & Support",
      desc: "We bring the design to life with certified installation and ongoing partnership.",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-slate-900 mb-8">
        Our Consultative Process
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {steps.map(({ step, title, desc }, i) => (
          <div key={i} className="flex items-start space-x-6 group">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step}
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                {title}
              </h3>
              <p className="text-slate-600 font-light md:text-lg">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
