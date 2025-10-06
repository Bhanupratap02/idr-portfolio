import Image from "next/image";
import imgDemo from "../../../../assets/partners/avigilon/avigilon.png";

export function HeroSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-[#2e2e2e]">One platform. Every access point.</span>
              <span className="text-blue-500"> Smarter response.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600">
              Unify access control, video, and site automation — on-prem or in the cloud — for real-time visibility and faster incident response.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600">
              Avigilon Unity Access and Avigilon Alta bring together browser-based access management, scenes-driven maps, and cloud-native monitoring so security teams can act faster with fewer tools.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#052557] text-white rounded-lg hover:bg-[#041e44] transition-colors">
                Request a Demo
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-slate-800 text-slate-800 rounded-lg hover:bg-slate-50 transition-colors">
                Compare Editions
              </button>
            </div>
            
            <p className="text-sm text-gray-500 pt-2">
              Demo includes guided Systems overview and tailored scale recommendations.
            </p>
          </div>

          {/* Right Content - Video Preview */}
          <div className="flex items-center">
            <div className="w-full rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative w-full h-[450px] lg:h-[550px]">
                <Image 
                  src={imgDemo} 
                  alt="Demo" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}