import { Video, Cloud, Smartphone, Users, Lock, Bell, CheckCircle2, Truck, HandHeart, Headphones, Zap, Globe, Monitor, GraduationCap, Building2, ShoppingBag, Landmark, Utensils } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0059A0] to-[#0071C5] text-white  py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Verkada: Smarter, Simpler, Unified Cloud Security
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                All-in-one platform with cameras, access control, sensors, alarms & more — controlled from a single cloud dashboard.
              </p>
              <button className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Video className="w-5 h-5" />
                Get a Free Demo
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/47f36f16d992501ec41d29b6e34eaef911605f80?width=1502" 
                alt="Verkada Security Camera" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Verkada Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
              Why Customers Choose Verkada
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-light">
              A modern approach to security that eliminates the complexity of traditional systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white border border-verkada-accent rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-verkada-blue-light rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5-Minute Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Plug & play installation with no on-site servers or complex configuration required.
              </p>
            </div>

            <div className="bg-white border border-verkada-accent-light rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-verkada-blue-light rounded-full flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hybrid-Cloud Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure local storage combined with cloud accessibility for the best of both worlds.
              </p>
            </div>

            <div className="bg-white border border-verkada-accent-light rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-verkada-blue-light rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remote Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Access and manage your entire security system from anywhere, on any device.
              </p>
            </div>

            <div className="bg-white border border-verkada-blue-dark rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-verkada-blue-light rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unlimited Users</h3>
              <p className="text-gray-600 leading-relaxed">
                Add as many users as needed with customizable role-based access controls.
              </p>
            </div>

            <div className="bg-white border border-verkada-blue-dark rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-verkada-blue-light rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Encryption</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with SOC 2 & GDPR compliance for complete peace of mind.
              </p>
            </div>

            <div className="bg-white border border-verkada-blue-dark rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-verkada-blue-light rounded-full flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Alerts</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive instant notifications for security events that matter most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
              Verkada Core Products Installed by IDR
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-light">
              Complete security ecosystem with integrated hardware and software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/19901816c1b6744224cf24fd8dfd6a4adab6aedc?width=789" 
                  alt="Security Cameras" 
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Cameras</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  High-definition security cameras with advanced AI capabilities for intelligent monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Dome</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Bullet</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Mini</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">LPR</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Multisensor</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/179f467c165398713326ff5d3464e332daf25160?width=789" 
                  alt="Access Control" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Secure your facilities with cloud-managed access control systems that integrate with your cameras.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Door Readers</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Keypads</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Lockdown</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/83f805e54e5e02faf2afd8fa5aed95d3216bd38b?width=789" 
                  alt="Intercoms" 
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Intercoms</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  HD video intercoms with mobile and desktop notifications for seamless visitor management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">HD Video</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Mobile Alerts</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Two-Way Audio</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ec04eb4d14e9ec0d0c900b4524f0038fff7d844e?width=789" 
                  alt="Environmental Sensors" 
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Environmental Sensors</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Monitor air quality, detect vaping, and track environmental conditions in real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Vape</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">CO2</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Motion</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Air Quality</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53fb7ca33c6fbea420d60fe97e43620c6dc2ef3c?width=789" 
                  alt="Alarms" 
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Alarms</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Intelligent alarm systems with smart triggers and 24/7 professional monitoring options.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Smart Triggers</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">24/7 Monitoring</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">Instant Alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
              Seamless Integration Across Devices
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light">
              Create powerful automated workflows between your security devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-verkada-blue-dark rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-verkada-blue-dark" />
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3.5 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                </div>
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-verkada-blue-dark" />
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3.5 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                </div>
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-verkada-blue-dark" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Door Held Open Alert</h3>
              <p className="text-gray-600 leading-relaxed">
                Camera detects a door held open, triggering an immediate alert to security personnel with video clip.
              </p>
            </div>

            <div className="bg-white border border-verkada-blue-dark rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-verkada-blue-dark" />
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3.5 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                </div>
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-verkada-blue-dark" />
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3.5 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                </div>
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-verkada-blue-dark" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vape Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Vape sensor detects use, triggers nearby cameras to record, and immediately notifies administrators.
              </p>
            </div>

            <div className="bg-white border border-gray-400 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-verkada-blue-dark" />
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3.5 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                </div>
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-verkada-blue-dark" />
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3.5 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-400 border-y-2 border-y-transparent"></div>
                </div>
                <div className="w-12 h-12 bg-verkada-blue-light rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-verkada-blue-dark" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Door Forced Open</h3>
              <p className="text-gray-600 leading-relaxed">
                Access control detects forced entry, triggers alarm, and captures high-resolution video evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IDR Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                Why Choose IDR for Verkada?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-12 font-light leading-relaxed">
                We provide expert installation and support services nationwide, ensuring your security system works flawlessly from day one.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-verkada-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Verkada Partner</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our technicians are fully certified and trained on all Verkada products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-verkada-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Deployment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We can deploy to multiple locations across the country with consistent quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HandHeart className="w-6 h-6 text-verkada-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">White Glove Setup & Training</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete installation, configuration, and hands-on training for your team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Headphones className="w-6 h-6 text-verkada-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Support + Local Techs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      24/7 remote support plus local technicians for on-site assistance when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/11784803e0181c7858dfff9eaae36df24fc6ac1c?width=1372" 
                alt="Verkada Camera Products" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* No IT Headaches Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
              No IT Headaches, Just Peace of Mind
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-light">
              Verkada's cloud-first approach eliminates traditional security system complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-verkada-blue rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-verkada-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Servers to Maintain</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate the need for expensive NVRs, DVRs, and on-premise servers.
              </p>
            </div>

            <div className="bg-white border border-verkada-blue rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-verkada-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Patching or Port-Forwarding</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatic updates and secure cloud connectivity without complex network configuration.
              </p>
            </div>

            <div className="bg-white border border-verkada-blue rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-verkada-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-verkada-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Just Open Your Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Access your entire security system from a single intuitive interface, anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Institutions Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
              Trusted by Leading Institutions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-light">
              Verkada solutions deployed across diverse industries nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <GraduationCap className="w-12 h-12 text-verkada-blue mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900">Charter Schools</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Building2 className="w-12 h-12 text-verkada-blue mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900">Corporate HQs</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Building2 className="w-12 h-12 text-verkada-blue mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900">High-Rise Apartments</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <ShoppingBag className="w-12 h-12 text-verkada-blue mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900">Regional Retail</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Landmark className="w-12 h-12 text-verkada-blue mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900">Government Sites</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Utensils className="w-12 h-12 text-verkada-blue mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-900">National Franchises</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
