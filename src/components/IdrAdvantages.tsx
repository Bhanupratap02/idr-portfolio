"use client"
import { useState, useEffect } from 'react';
import { CheckCircle, Shield, ClipboardList, Users } from 'lucide-react';

export default function IdrAdvantage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('idr-advantage');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: CheckCircle,
      title: "Consultation & Design",
      description: "Solutions tailored to your unique environment and goals.",
      delay: 0
    },
    {
      icon: Shield,
      title: "Certified Installation",
      description: "Clean, documented installs by manufacturer-certified technicians.",
      delay: 100
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "Dedicated PM ensures smooth, on-time, and stress-free delivery.",
      delay: 200
    },
    {
      icon: Users,
      title: "Ongoing Partnership",
      description: "Proactive service, system health checks, and optional 24/7 camera monitoring with human review.",
      delay: 300
    }
  ];

  return (
    <section id="idr-advantage" className="bg-[#0B1218] text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with fade-up animation */}
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            The <span className='text-red-700'>IDR</span> Advantage
          </h2>
          <p className="mt-4 md:mt-6 text-slate-300 text-base md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Premium service isn&apos;t just about technology — it&apos;s about the partnership, process,
            and protection that only IDR delivers.
          </p>
        </div>

        {/* Cards with staggered animations */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col items-start sm:items-center xl:items-start text-left sm:text-center xl:text-left gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${advantage.delay}ms` : '0ms',
                  transitionDuration: '800ms'
                }}
              >
                {/* Icon with hover animation */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-indigo-600/10 p-4 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300">
                    <IconComponent 
                      className="w-8 h-8 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-blue-100 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Optional: Add floating elements for extra visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-indigo-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
}