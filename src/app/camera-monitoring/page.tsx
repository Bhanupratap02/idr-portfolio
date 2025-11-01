import { Eye, Shield, Bell, Users, Radio, FileText, Zap, CheckCircle2, Camera } from 'lucide-react';
import img3 from "@/assets/idr-advantage/camera.jpeg";

export default function CameraMonitoring() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section with Dark Theme */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTQwYWYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 lg:pb-32">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 mb-8">
              <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
              Camera Monitoring
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 font-light mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
              When the lights go out, your security system shouldn&apos;t.
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">
              IDR&apos;s camera monitoring services deliver real-time visibility, AI-driven alerts, and live human response — ensuring every incident gets attention the moment it happens.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>

      {/* Main Content Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        
        {/* Description with Large Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our monitoring centers use advanced analytics to detect movement, identify people or vehicles, and distinguish real threats from false alarms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Human Verification</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Every alert is verified by our dedicated monitoring team, who act immediately to help protect your property and personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder - Replace with your actual image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 group">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 flex items-center justify-center">
             <img src={img3.src} alt="Camera Monitoring Center" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute inset-0 border-2 border-blue-400/20 rounded-2xl group-hover:border-blue-400/40 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-blue-500/10 rounded-lg px-4 py-2 mb-6 border border-blue-500/20">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Comprehensive Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              What You Get with IDR Monitoring
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "Custom Solutions",
                description: "Custom monitoring solutions tailored to your site's needs — including options for extended hours or 24/7 coverage",
                color: "blue"
              },
              {
                icon: Zap,
                title: "AI Detection",
                description: "AI-based detection for people, vehicles, and perimeter activity",
                color: "yellow"
              },
              {
                icon: CheckCircle2,
                title: "Human Verification",
                description: "Active human verification — no ignored alerts or endless notifications",
                color: "green"
              },
              {
                icon: Users,
                title: "Response Team",
                description: "Dedicated response team that coordinates with law enforcement when necessary",
                color: "purple"
              },
              {
                icon: Radio,
                title: "Voice Deterrence",
                description: "Optional speaker integration for live, on-site voice deterrence",
                color: "red"
              },
              {
                icon: FileText,
                title: "Secure Portal",
                description: "Incident footage and reports stored securely in a client-accessible portal",
                color: "indigo"
              },
              {
                icon: Bell,
                title: "Rapid Escalation",
                description: "Rapid escalation to your IDR account and support teams for coordinated follow-up",
                color: "orange"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 sm:p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${feature.color}-500/10 border border-${feature.color}-500/30 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 border border-slate-700/50 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 sm:mb-12">
                <div className="inline-block bg-purple-500/10 rounded-lg px-4 py-2 mb-6 border border-purple-500/20">
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">Our Promise</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
                  Why It Matters
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 leading-relaxed mb-8">
                  Security doesn&apos;t stop after installation — it lives in how quickly you see, act, and respond.
                </p>
                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
                  With IDR&apos;s camera monitoring, every alert is backed by trained professionals who know your system, understand your site, and treat every alarm like it&apos;s their own.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {[
                  { icon: Users, title: "Real People", color: "blue" },
                  { icon: Zap, title: "Real Response", color: "purple" },
                  { icon: Shield, title: "Real Protection", color: "green" }
                ].map((pillar, idx) => (
                  <div key={idx} className="text-center group">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-${pillar.color}-500/10 border-2 border-${pillar.color}-500/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${pillar.color}-400`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{pillar.title}</h3>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white italic">
                  Tailored to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-900/70 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
              <span>Get Protected Today</span>
              <Shield className="w-5 h-5" />
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl border-2 border-slate-600 hover:border-slate-500 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
              <span>Learn More</span>
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </div>
  );
}