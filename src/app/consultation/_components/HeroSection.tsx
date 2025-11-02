/** @format */

import {
  Sparkles,
  ArrowRight,
  Target,
  Puzzle,
  Users,
  TrendingUp,
} from "lucide-react";
import heroConsultation from "@/assets/idr-advantage/hero-consultation-professional.jpg";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-[#1e2761] via-[#1E3A8A]/90 to-slate-900 
  min-h-[90vh] sm:min-h-[85vh] lg:min-h-screen xl:min-h-[88vh] 2xl:min-h-[90vh] 3xl:min-h-[65vh] flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 2xl:space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Expert Consultation
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  font-bold text-white leading-[1.1]">
            Consultation <br />{" "}
            <span className="text-shadow-blue-50 ">& Design</span>
            <br />
            <div className="w-[20%] h-1 bg-white rounded-2xl mt-3"></div>
          </h1>

          <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-slate-100 leading-relaxed max-w-2xl font-light">
            We start by understanding your environment and goals — then partner,
            design, and engineer tailored solutions that truly work for your
            site.
          </p>

          <Link
            href={"/contact"}
            className="inline-flex group bg-primary hover:bg-primary/90 text-white font-bold px-10 py-5 rounded-xl text-lg 2xl:text-xl shadow-2xl  items-center space-x-3 hover:scale-105 transition-all duration-300"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: Target, label: "Tailored Solutions" },
              { icon: Puzzle, label: "Seamless Integration" },
              { icon: Users, label: "Expert Guidance" },
              { icon: TrendingUp, label: "Future-Ready Design" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm 2xl:text-base text-white font-light">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative h-[350px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
          <Image
            src={heroConsultation}
            alt="IDR Professional Consultation Team"
            className="w-full h-full object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
}
