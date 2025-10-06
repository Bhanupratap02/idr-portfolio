// BrivoLanding.jsx
import {
  BadgeCheck,
  Wallet,
  PlayCircle,
  Key,
  BatteryCharging,
  Zap,
  Mail,
  DownloadCloud,
  PlusSquare,
  Send,
  ShieldCheck,
  Smartphone,
  Lock,
  CheckCircle,
  Building,
  Users,
  Eye,
  AlertTriangle,
  Server,
  Star,
  Briefcase,
  Calendar,
} from "lucide-react";

import imgImg from "@/assets/brivo1.png" // img1 (kept)
import imgImg1 from "@/assets/brivo2.png"; // img2 (kept)

function HeroSection() {
  return (
    <section className="relative w-full bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e6f3ff] text-[#0066cc] px-4 py-2 rounded-full text-sm font-medium mb-4 lg:mb-6">
            <BadgeCheck className="w-4 h-4 text-[#0066cc]" aria-hidden />
            Next-Gen Access & Visitor Management
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto mb-4 lg:mb-6">
            Access Your Corporate Spaces{" "}
            <span className="text-[#0066cc]">Smarter</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6 lg:mb-8">
            Employee Badge in Apple Wallet — Now Available from Brivo. Eliminate the need for physical badges with seamless workplace access using just your iPhone or Apple Watch.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0066cc] text-white px-6 py-3 rounded-lg font-semibold text-base flex items-center justify-center gap-2">
              <Wallet className="w-5 h-5" aria-hidden />
              Add to Apple Wallet
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-base flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" aria-hidden />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2e2e2e] leading-tight">
              Get In Faster, Stay Secure
            </h2>

            <div className="space-y-6">
              {/* Instant Access */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Key className="w-5 h-5 text-green-600" aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#2e2e2e] mb-2">Instant Access</h3>
                  <p className="text-base text-[#626262] leading-relaxed">
                    Unlock doors, elevators, turnstiles, and more by simply holding your device near a reader.
                  </p>
                </div>
              </div>

              {/* Power Reserve */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BatteryCharging className="w-6 h-5 text-blue-600" aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#2e2e2e] mb-2">Power Reserve</h3>
                  <p className="text-base text-[#626262] leading-relaxed">
                    Even if your iPhone needs a charge, access continues for up to 5 hours.
                  </p>
                </div>
              </div>

              {/* Express Mode */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-5 text-purple-600" aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#2e2e2e] mb-2">Express Mode</h3>
                  <p className="text-base text-[#626262] leading-relaxed">
                    No need to wake or unlock your device—just tap and go.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8">
              <div className="relative">
                <img
                  src={imgImg.src}
                  alt="iPhone showing Apple Wallet badge"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-lg mb-4"
                />
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-medium text-white">
                    Your Badge Works Even When Phone Battery is Low
                  </h4>
                  <p className="text-sm text-blue-100">Safe, secure, and always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

function ActivationSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#2e2e2e] mb-4">
              Simple & Secure Activation
            </h2>
            <p className="text-lg sm:text-xl lg:text-[20px] text-[#626262]">
              Getting started is easy, fast, and secure with Brivo Access.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f3ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-[#0066cc]">1</span>
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-3">Open Email Invitation</h3>
              <p className="text-lg text-[#626262] leading-relaxed mb-4">Open your Brivo Mobile Pass email invitation</p>
              <div className="flex justify-center">
                <Mail className="w-6 h-6 text-[#0066cc]" aria-hidden />
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f3ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-[#0066cc]">2</span>
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-3">Download App</h3>
              <p className="text-lg text-[#626262] leading-relaxed mb-4">Download the Brivo Mobile Pass app</p>
              <div className="flex justify-center">
                <DownloadCloud className="w-5 h-6 text-[#0066cc]" aria-hidden />
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f3ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-[#0066cc]">3</span>
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-3">Add to Wallet</h3>
              <p className="text-lg text-[#626262] leading-relaxed mb-4">Tap &quot;Add to Apple Wallet&quot; on your badge</p>
              <div className="flex justify-center">
                <Wallet className="w-5 h-6 text-[#0066cc]" aria-hidden />
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-xl font-medium text-[#2e2e2e]">That&apos;s it—your badge is now ready on iPhone and Apple Watch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyAdvantagesSection() {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#2e2e2e] mb-4">
            Key Advantages
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Remote Distribution */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Server className="w-4 h-4 text-green-600" aria-hidden />
            </div>
            <h3 className="text-lg font-medium text-[#2e2e2e] mb-3">Remote Distribution</h3>
            <p className="text-base text-[#626262] leading-relaxed">No need to print or deliver physical badges.</p>
          </div>

          {/* Easy Management */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-4 h-4 text-blue-600" aria-hidden />
            </div>
            <h3 className="text-lg font-medium text-[#2e2e2e] mb-3">Easy Management</h3>
            <p className="text-base text-[#626262] leading-relaxed">Manage credentials directly in Brivo Access.</p>
          </div>

          {/* Privacy-First */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-4 text-purple-600" aria-hidden />
            </div>
            <h3 className="text-lg font-medium text-[#2e2e2e] mb-3">Privacy-First</h3>
            <p className="text-base text-[#626262] leading-relaxed">Badges stored securely on-device. Apple cannot track locations.</p>
          </div>

          {/* Lost Device */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <AlertTriangle className="w-3 h-4 text-red-600" aria-hidden />
            </div>
            <h3 className="text-lg font-medium text-[#2e2e2e] mb-3">Lost Device?</h3>
            <p className="text-base text-[#626262] leading-relaxed">Use Find My to lock, locate, or erase your device and badge.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitorManagementSection() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-800 to-gray-900 py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-white">Brivo Visitor Management</h2>
              <p className="text-xl text-gray-300 leading-relaxed">Powered by Envoy – Enhanced Hospitality Without Compromising Security</p>
              <p className="text-xl text-gray-200 leading-relaxed">Welcome guests with confidence. Brivo&apos;s visitor management solution ensures secure, streamlined check-ins for every visit.</p>
            </div>

            {/* Features List (bulleted) */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" aria-hidden />
                <p className="text-lg text-white">Compliance Ready: Automate visitor logs for audit and legal documentation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" aria-hidden />
                <p className="text-lg text-white">Fully Connected: Unified platform with access control and surveillance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" aria-hidden />
                <p className="text-lg text-white">Efficient Check-Ins: Pre-invite guests and reduce wait times</p>
              </div>
            </div>
          </div>

          {/* Right Image Card (keep imgImg1) */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <div className="bg-white rounded-xl p-6 lg:p-8">
              <img
                src={imgImg1.src}
                alt="Modern Kiosk Experience"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Modern Kiosk Experience</h3>
                <p className="text-base text-gray-600">Easy-to-use tablet or mobile interface for quick registration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecuritySuiteSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#2e2e2e] mb-4">Brivo Security Suite Editions</h2>
          <p className="text-xl sm:text-2xl lg:text-[24px] text-[#626262]">Unify Access Control, Video Intelligence, Visitor Management, and Intrusion Detection</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Standard Edition */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 lg:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-5 h-5 text-gray-600" aria-hidden />
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-2">Standard Edition</h3>
              <p className="text-base text-[#626262]">Core Security Tools</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Event tracking & user management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Credential administration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Facility lockdown features</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Integrated video surveillance</span>
              </li>
            </ul>

            <button className="w-full border-2 border-gray-300 text-[#626262] py-3 rounded-lg font-medium flex items-center justify-center">Learn More</button>
          </div>

          {/* Professional Edition - Popular */}
          <div className="relative bg-white border-2 border-[#0066cc] rounded-xl shadow-lg p-6 lg:p-8">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#0066cc] text-white px-4 py-1 rounded-full text-sm font-medium">POPULAR</span>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#e6f3ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-5 h-5 text-[#0066cc]" aria-hidden />
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-2">Professional Edition</h3>
              <p className="text-base text-[#626262]">Enhanced Intelligence</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Reader commands & occupancy tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Trend analysis & enhanced access tools</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Brivo Snapshot and more</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">All Standard features</span>
              </li>
            </ul>

            <button className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-medium flex items-center justify-center">Get Started</button>
          </div>

          {/* Enterprise Edition */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 lg:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-4 h-5 text-yellow-700" aria-hidden />
              </div>
              <h3 className="text-xl font-medium text-[#2e2e2e] mb-2">Enterprise Edition</h3>
              <p className="text-base text-[#626262]">Scaled for Complexity</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Data Explorer & Anomaly Detection</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Incident Management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">Advanced video capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" aria-hidden />
                <span className="text-base text-[#626262]">All Professional features</span>
              </li>
            </ul>

            <button className="w-full border-2 border-gray-300 text-[#626262] py-3 rounded-lg font-medium flex items-center justify-center">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="w-full bg-[#0066cc] py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-white mb-6">Ready to Upgrade Your Workplace Security?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">Empower your employees and welcome your visitors—securely, simply, and smartly with Brivo.</p>

        <blockquote className="border-l-4 border-blue-300 pl-6 mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-blue-100 text-center italic">&quot;Discover how Brivo + Apple Wallet + Envoy can transform your physical security and visitor experience.&quot;</p>
        </blockquote>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#0066cc] px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-3">
            <PlayCircle className="w-5 h-5" aria-hidden />
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-3">
            <Calendar className="w-4 h-5" aria-hidden />
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Brivo() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <ActivationSection />
      <KeyAdvantagesSection />
      <VisitorManagementSection />
      <SecuritySuiteSection />
      <CallToActionSection />
    </div>
  );
}
