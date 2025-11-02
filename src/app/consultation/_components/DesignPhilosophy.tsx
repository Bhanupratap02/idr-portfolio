/** @format */

import { Target, Puzzle, TrendingUp, CheckCircle, Users } from "lucide-react";

export default function DesignPhilosophy() {
  const items = [
    {
      icon: Target,
      title: "Tailored to Your Needs",
      desc: "Every system we design is built around your environment, workflows, and budget — no two projects are ever the same.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Puzzle,
      title: "Integration-Focused",
      desc: "IDR designs solutions that integrate seamlessly — access control, cameras, radios, visitor systems like Envoy, and unified logins.",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: TrendingUp,
      title: "Future-Ready",
      desc: "Our designs anticipate growth, updates, and emerging technologies so your investment remains relevant for years.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: CheckCircle,
      title: "Real-World Experience",
      desc: "Because we install what we design, our plans are grounded in what actually works in the field.",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: Users,
      title: "Client-First Collaboration",
      desc: "We guide you through every step, explaining the why behind each recommendation so you can decide confidently.",
      color: "text-indigo-600 bg-indigo-100",
    },
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-100 rounded-lg px-4 py-2 mb-6">
          <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
            How We Work
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-slate-900">
          Our Design Philosophy
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(({ icon: Icon, title, desc, color }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200"
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color} mb-6`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
