/** @format */

import { MessageCircle, Users } from "lucide-react";
const ConsultImg =
  "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fidr-advantage%2FConsultation.jpeg";
export default function PartnershipSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Text */}
      <div className="order-2 lg:order-1">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
          <div className="inline-block bg-blue-100 rounded-lg px-4 py-2 mb-6">
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">
              Our Approach
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            More Than an Installer — A True Partner
          </h2>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 font-light">
            When you work with IDR, you&apos;re not just hiring an installer —
            you&apos;re gaining a partner who listens, consults, and engineers
            technology around your specific goals.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                  Led by Experience
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Led by founder{" "}
                  <span className="font-semibold text-indigo-700">
                    Michael LaPunzina
                  </span>
                  , our consultative approach combines hands-on field experience
                  with forward-thinking design. Michael’s{" "}
                  <span className="font-semibold">
                    24 years of real-world expertise
                  </span>{" "}
                  ensure every recommendation is practical, scalable, and
                  site-specific — not a cookie-cutter template.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Real Image */}
      <div className="order-1 lg:order-2">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={ConsultImg}
            alt="IDR Consultation & Design Team"
            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle gradient overlay for text contrast and depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
          {/* Decorative border for depth */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-2xl group-hover:border-white/30 transition-all duration-300"></div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-primary font-bold text-base sm:text-lg mb-1">
                    Expert Consultation
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base font-light">
                    Real-world expertise you can trust
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
