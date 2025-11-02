import img4 from "@/assets/idr-advantage/partnership.png";
import heroImage from "@/assets/ongoing-partnership-hero.jpg";
import Link from "next/link";

export default function OngoingPartnership() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section - Two Column */}
      <div className="relative overflow-hidden  bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="bg-blue-500/20 text-gray-800 px-4 py-2 rounded-full text-sm sm:text-base font-semibold border border-blue-400/30">
                  Long-Term Support
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-800 leading-tight tracking-tight">
                Ongoing Partnership
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-relaxed max-w-2xl">
                At IDR, our work doesn&apos;t end when your system is installed — that&apos;s when the partnership begins. We stay with you for the long haul, providing expert support, preventative maintenance, and guidance as your technology and needs evolve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={'/services'} className="bg-blue-900 hover:bg-blue-850 text-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
                  Explore Service Plans
                </Link>
                <Link href={'/contact'} className="bg-white/10 hover:bg-white/20 text-gray-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:h-[400px] xl:h-[500px] 2xl:h-[600px] h-[300px] sm:h-[350px] order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img 
                  src={heroImage.src} 
                  alt="IDR Technology Operations Center - 24/7 Monitoring and Support" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/20">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">24/7</div>
                    <div className="text-xs sm:text-sm text-blue-200">Support</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/20">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">99.9%</div>
                    <div className="text-xs sm:text-sm text-blue-200">Uptime</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/20">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">&lt;2hr</div>
                    <div className="text-xs sm:text-sm text-blue-200">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 "></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        
        {/* Service Agreements Section with Image */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 hover:shadow-2xl transition-shadow duration-300">
              <div className="inline-block bg-blue-100 rounded-lg px-4 py-2 mb-6">
                <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Core Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Service Agreements & Support
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Our Service Level Agreement (SLA) clients receive a truly connected experience designed for long-term reliability and responsiveness:
              </p>
              <ul className="space-y-4">
                {[
                  "Direct access to IDR's in-house technical support team — no third-party call centers",
                  "Full transparency through the IDR Portal with live ticket tracking, photos, and service history",
                  "Scheduled maintenance visits to prevent downtime and ensure performance",
                  "Priority response times for urgent service requests",
                  "Clear documentation and annual system reviews for Gold and Platinum clients"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-4 text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group h-64 sm:h-80 md:h-96 lg:h-full">
              <img src={img4.src} alt="Camera Monitoring Center" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Two Column Cards Section */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 xl:gap-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          {/* Continuous Improvement Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-block bg-green-100 rounded-lg px-4 py-2 mb-6">
              <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">Evolution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Continuous Improvement
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
              Your system shouldn&apos;t just work — it should keep getting better.
            </p>
            <ul className="space-y-4">
              {[
                "Regular firmware and software updates to maintain peak reliability",
                "Optimization and tuning for performance, coverage, and analytics accuracy",
                "Proactive technology updates to keep your system current with evolving standards",
                "A proactive, consultative approach to keeping your system aligned with your goals"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1 group-hover:bg-green-600 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="ml-4 text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Monitoring Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-block bg-purple-100 rounded-lg px-4 py-2 mb-6">
              <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">24/7 Service</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Monitoring & Rapid Response
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              For clients who need real-time visibility, IDR offers 24/7 camera monitoring — an optional add-on to SLA coverage that delivers AI-powered alerts, incident video pulls, and law enforcement collaboration when seconds matter.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-900">Real-Time Protection</p>
                  <p className="text-sm text-purple-700">AI-powered monitoring available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Mindset Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/10 rounded-lg px-4 py-2 mb-6">
              <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Our Commitment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              Partnership Mindset
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 leading-relaxed">
              We&apos;re more than a vendor — we&apos;re your ongoing technology partner. From design to daily operation, IDR remains accountable, accessible, and invested in your success for the life of your system.
            </p>
            
            {/* Quote */}
            <div className="relative mt-8 sm:mt-12">
              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"></path>
                </svg>
              </div>
              <blockquote className="relative pt-6 sm:pt-8 px-4 sm:px-8">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white italic leading-relaxed">
                  Our partnership doesn&apos;t end at installation — it begins there.
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            Start Your Partnership Today
          </button>
        </div> */}
      </div>
    </div>
  );
}
