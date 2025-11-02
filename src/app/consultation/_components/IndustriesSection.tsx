/** @format */

import { GraduationCap, Home, Building2, Briefcase } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { icon: GraduationCap, label: "Schools & Education" },
    { icon: Home, label: "Multifamily Communities" },
    { icon: Building2, label: "Enterprise Campuses" },
    { icon: Briefcase, label: "Office Environments" },
  ];

  return (
    <div
      className="bg-gradient-to-br from-[#1e2761] via-[#1E3A8A]/90 to-slate-900 
rounded-3xl p-12 shadow-2xl"
    >
      <div className="text-center mb-12">
        <div className="inline-block bg-white/10 rounded-lg px-4 py-2 mb-6 border border-white/20">
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">
            Trusted Across Industries
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-6">
          We Transform Complex Challenges
        </h2>
        <p className="text-base md:text-lg xl:text-xl text-blue-100 max-w-3xl mx-auto font-light">
          From schools and multifamily communities to enterprise campuses and
          offices, IDR transforms complex challenges into reliable, integrated
          solutions — built to last and designed for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map(({ icon: Icon, label }, i) => (
          <div key={i} className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl border-2 border-white/20 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <Icon className="w-6 h-6 md:w-10 md:h-10 text-blue-300" />
            </div>
            <p className="text-white font-semibold text-base md:text-lg">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
