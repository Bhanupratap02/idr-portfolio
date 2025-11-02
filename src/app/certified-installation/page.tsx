import { Award, Shield, CheckCircle, Wrench, Cable, Network, FileCheck, TrendingUp, Star, BadgeCheck, Layers, Zap } from 'lucide-react';
import img2 from "@/assets/idr-advantage/Certified.jpeg";
import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/certified-installation-hero.jpg";
import heroImage from "@/assets/certified-installation-hero1.jpeg";
import Link from 'next/link';

export default function CertifiedInstallation() {
  const brands = [
    "Meraki", "Kisi", "Vivotek", "Vicon", "ButterflyMX", 
    "Brivo", "Eagle Eye Networks", "Verkada", "Ortronix", "Belden"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section - Two Column with Larger Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20 xl:py-28 2xl:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-stretch">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center">
              <div className="inline-flex items-center justify-center lg:justify-start p-3 sm:p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl lg:rounded-3xl mb-6 sm:mb-8 w-fit mx-auto lg:mx-0">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-blue-600" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight">
                Certified Installation
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-700 font-light mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                Quality installations start with certified expertise.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At IDR, every system we install is backed by training, certification, and experience from the world&apos;s leading manufacturers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" passHref>
                <Button size="lg" className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 h-auto">
                  <span>Get Certified Installation</span>
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-2" />
                </Button>
                </Link>
                 {/* <Link href="/contact" passHref>
                <Button variant="outline" size="lg" className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 h-auto">
                  <span>View Certifications</span>
                  <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-2" />
                </Button>
                </Link> */}
              </div>
            </div>
            
            {/* Right Column - Image Matched to Content Height */}
            <div className="order-1 lg:order-2 flex">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group w-full min-h-[400px] lg:min-h-full">
                <img 
                  src={heroImage.src} 
                  alt="Certified technicians installing security system" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 flex flex-wrap gap-2 sm:gap-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                      <span className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900">10+ Certifications</span>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" />
                      <span className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900">25 Year Warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28">
        
        {/* Certified Brands Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28 xl:mb-32">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block bg-blue-100 rounded-lg px-4 py-2 mb-4 sm:mb-6">
              <span className="text-blue-800 font-semibold text-xs sm:text-sm lg:text-base uppercase tracking-wide">Trusted Partners</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Our technicians are certified by brands such as:
            </h2>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-10 sm:mb-12 lg:mb-16">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-blue-300 group"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-white" />
                  </div>
                  <p className="text-center font-semibold text-slate-800 text-xs sm:text-sm lg:text-base xl:text-lg">{brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined: Certification Statement with Technician Image - Two Column */}
        <div className="mb-16 sm:mb-20 lg:mb-28 xl:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-stretch">
            {/* Left - Certification Statement */}
            <div className="order-2 lg:order-1 flex">
              <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-14 shadow-2xl flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                        <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4">
                        Certification Guarantee
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300">
                        Backed by the world&apos;s leading manufacturers
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-200 leading-relaxed mb-6 sm:mb-8">
                    This extensive certification network ensures your system is installed to <span className="font-bold text-white">manufacturer specifications</span>, meets <span className="font-bold text-white">code-compliance standards</span>, and performs reliably for <span className="font-bold text-white">years to come</span>.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-700">
                  <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">10+</div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-400">Certifications</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">25</div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-400">Year Warranty</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">100%</div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-400">Compliant</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Technician Image */}
            <div className="order-1 lg:order-2 flex">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group w-full">
                <img 
                  src={img2.src} 
                  alt="IDR Certified Technicians Installing Security System" 
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg border-2 border-blue-200">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Certified</div>
                        <div className="text-xs text-slate-600">Professionals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Certification Matters Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28 xl:mb-32">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block bg-green-100 rounded-lg px-4 py-2 mb-4 sm:mb-6">
              <span className="text-green-800 font-semibold text-xs sm:text-sm lg:text-base uppercase tracking-wide">The Difference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Why Certification Matters
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
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
                className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Precision & Pride Section */}
        <div className="relative mb-16 sm:mb-20 lg:mb-28 xl:mb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-blue-100 to-slate-100 rounded-3xl blur-sm opacity-70"></div>
          
          <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-14 xl:p-20 2xl:p-24 shadow-xl border border-slate-200">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 lg:mb-14">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl border-2 border-yellow-300 mb-6 sm:mb-8 shadow-lg">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-6 sm:mb-8">
                  Precision & Pride
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-700 leading-relaxed mb-6 sm:mb-8 px-4">
                  Every wire, connection, and device we install is treated with precision and pride.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-600 leading-relaxed max-w-4xl mx-auto px-4">
                  From network infrastructure to advanced AI-enabled camera systems, IDR&apos;s certified approach ensures your technology investment performs flawlessly — day one and every day after.
                </p>
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-8 sm:mt-12">
                {[
                  { icon: Network, label: "Network Infrastructure" },
                  { icon: Layers, label: "System Integration" },
                  { icon: Zap, label: "AI-Enabled Systems" },
                  { icon: Wrench, label: "Professional Setup" }
                ].map((service, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white rounded-xl border-2 border-slate-200 mb-3 sm:mb-4 group-hover:border-blue-400 group-hover:shadow-lg transition-all duration-300 shadow-md">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-blue-600" />
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-700 font-medium px-2">{service.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The IDR Difference - Three Pillars */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-14 xl:p-20 2xl:p-24 shadow-xl border border-slate-200">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              The IDR Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 max-w-6xl mx-auto">
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
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-2xl bg-gradient-to-br ${pillar.color} mb-4 sm:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">{pillar.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed px-2">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-16 xl:mt-20 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-slate-700 italic px-4">
              That&apos;s the IDR difference.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base sm:text-lg lg:text-xl px-6 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 h-auto w-full sm:w-auto">
              <span>Get Certified Installation</span>
              <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg lg:text-xl px-6 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 h-auto w-full sm:w-auto">
              <span>View Certifications</span>
              <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-2" />
            </Button>
          </div>
        </div> */}
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
    </div>
  );
}