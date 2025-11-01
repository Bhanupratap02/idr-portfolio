import { Award, Shield, CheckCircle, Wrench, Cable, Network, FileCheck, TrendingUp, Star, BadgeCheck, Layers, Zap } from 'lucide-react';
import img2 from "@/assets/idr-advantage/Certified.jpeg";
export default function CertifiedInstallation() {
  const brands = [
    "Meraki", "Kisi", "Vivotek", "Vicon", "ButterflyMX", 
    "Brivo", "Eagle Eye Networks", "Verkada", "Ortronix", "Belden"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00di0yaDJ2MmgtMnptLTQgMHYtMmgydjJoLTJ6bTgtNHYtMmgydjJoLTJ6bS00IDB2LTJoMnYyaC0yem0tNCAydi0yaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 mb-8">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
              Certified Installation
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-light max-w-4xl mx-auto leading-relaxed">
              Quality installations start with certified expertise.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-28">
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed">
            At IDR, every system we install is backed by <span className="font-semibold text-blue-700">training, certification, and experience</span> from the world&apos;s leading manufacturers in networking, access control, and video surveillance.
          </p>
        </div>

        {/* Certified Brands Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-blue-100 rounded-lg px-4 py-2 mb-6">
              <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Trusted Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our technicians are certified by brands such as:
            </h2>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-blue-300 group"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-center font-semibold text-slate-800 text-sm sm:text-base">{brand}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <p className="text-lg sm:text-xl lg:text-2xl text-white text-center leading-relaxed">
              This extensive certification network ensures your system is installed to <span className="font-bold">manufacturer specifications</span>, meets <span className="font-bold">code-compliance standards</span>, and performs reliably for <span className="font-bold">years to come</span>.
            </p>
          </div>
        </div>

        {/* Image Section - Certified Technicians at Work */}
       <img 
  src={img2.src} 
  alt="IDR Certified Technicians Installing Security System" 
  className="w-full h-full object-cover"
/>

        {/* Why Certification Matters Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-green-100 rounded-lg px-4 py-2 mb-6">
              <span className="text-green-800 font-semibold text-sm uppercase tracking-wide">The Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Certification Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: Shield,
                title: "Manufacturer-Backed Warranties",
                description: "Including up to 5 years on Vivotek equipment when installed by IDR Gold Certified professionals",
                color: "blue",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Cable,
                title: "Extended Cabling Warranties",
                description: "Structured cabling warranties of up to 25 years through Ortronix and Belden-certified installations",
                color: "purple",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: TrendingUp,
                title: "Continuously Updated Training",
                description: "Trained and credentialed technicians who stay current with the latest standards in cabling, networking, and system integration",
                color: "green",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: FileCheck,
                title: "Code-Compliant Installations",
                description: "Code-compliant installations with documented test results, labeling, and professional cable management",
                color: "orange",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Precision & Pride Section */}
        <div className="relative mb-16 sm:mb-24 lg:mb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl blur-sm opacity-90"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 shadow-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 sm:mb-14">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/20 rounded-2xl border-2 border-yellow-500/40 mb-8">
                  <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Precision & Pride
                </h2>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 leading-relaxed mb-8">
                  Every wire, connection, and device we install is treated with precision and pride.
                </p>
                
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  From network infrastructure to advanced AI-enabled camera systems, IDR&apos;s certified approach ensures your technology investment performs flawlessly — day one and every day after.
                </p>
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12">
                {[
                  { icon: Network, label: "Network Infrastructure" },
                  { icon: Layers, label: "System Integration" },
                  { icon: Zap, label: "AI-Enabled Systems" },
                  { icon: Wrench, label: "Professional Setup" }
                ].map((service, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-xl border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-300" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 font-medium">{service.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The IDR Difference - Three Pillars */}
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-200">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
              The IDR Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Certified",
                description: "Manufacturer-trained and industry-certified technicians",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: FileCheck,
                title: "Compliant",
                description: "Code-compliant installations with full documentation",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Network,
                title: "Connected",
                description: "Seamlessly integrated systems that work together",
                color: "from-purple-500 to-purple-600"
              }
            ].map((pillar, idx) => (
              <div key={idx} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${pillar.color} mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-700 italic">
              That&apos;s the IDR difference.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
              <span>Get Certified Installation</span>
              <Award className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl border-2 border-slate-300 hover:border-slate-400 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 shadow-md">
              <span>View Certifications</span>
              <BadgeCheck className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
    </div>
  );
}