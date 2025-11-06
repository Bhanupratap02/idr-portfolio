import { Eye, Shield, Bell, Users, Radio, FileText, Zap, CheckCircle2, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";

import Link from 'next/link';
import Image from 'next/image';

export default function CameraMonitoring() {
  const cameraMonitoringHero =
    "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fcamera-monitoring-hero.jpg";
    const img3 =
      "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fidr-advantage%2Fcamera.jpeg";
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section - Two Column Design */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start p-3 bg-blue-500/10 rounded-xl backdrop-blur-sm border border-blue-500/20 mb-5">
                <Camera className="w-8 h-8 text-blue-400" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                Camera Monitoring
              </h1>

              <p className="text-xl sm:text-2xl lg:text-2xl text-blue-200 font-light mb-4 sm:mb-6 leading-relaxed">
                When the lights go out, your security system shouldn&apos;t.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                IDR&apos;s camera monitoring services deliver real-time
                visibility, AI-driven alerts, and live human response — ensuring
                every incident gets attention the moment it happens.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/contact" passHref>
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 h-auto"
                  >
                    Get Protected Today
                  </Button>
                </Link>
                <Link href="/portfolio" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 h-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src={cameraMonitoringHero}
                  alt="Security Operations Center"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-xs font-semibold text-slate-600">
                    Live Monitoring
                  </div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-xs font-semibold text-slate-600">
                    Response Time
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    &lt;60s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Description with Large Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Advanced Analytics
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our monitoring centers use advanced analytics to detect
                    movement, identify people or vehicles, and distinguish real
                    threats from false alarms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Human Verification
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every alert is verified by our dedicated monitoring team,
                    who act immediately to help protect your property and
                    personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100 flex items-center justify-center">
                <Image
                  src={img3}
                  alt="Camera Monitoring Center"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-blue-100 rounded-lg px-4 py-2 mb-6">
              <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">
                Comprehensive Coverage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
              What You Get with IDR Monitoring
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "Custom Solutions",
                description:
                  "Custom monitoring solutions tailored to your site's needs — including options for extended hours or 24/7 coverage",
                color: "blue",
              },
              {
                icon: Zap,
                title: "AI Detection",
                description:
                  "AI-based detection for people, vehicles, and perimeter activity",
                color: "yellow",
              },
              {
                icon: CheckCircle2,
                title: "Human Verification",
                description:
                  "Active human verification — no ignored alerts or endless notifications",
                color: "green",
              },
              {
                icon: Users,
                title: "Response Team",
                description:
                  "Dedicated response team that coordinates with law enforcement when necessary",
                color: "purple",
              },
              {
                icon: Radio,
                title: "Voice Deterrence",
                description:
                  "Optional speaker integration for live, on-site voice deterrence",
                color: "red",
              },
              {
                icon: FileText,
                title: "Secure Portal",
                description:
                  "Incident footage and reports stored securely in a client-accessible portal",
                color: "indigo",
              },
              {
                icon: Bell,
                title: "Rapid Escalation",
                description:
                  "Rapid escalation to your IDR account and support teams for coordinated follow-up",
                color: "orange",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${feature.color}-100 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-7 h-7 text-${feature.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters Section - Light Background */}
        <div className="relative bg-gradient-to-br from-white via-blue-50 to-white rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 shadow-xl mb-16 sm:mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block bg-purple-100 rounded-lg px-4 py-2 mb-6">
                <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
                  Our Promise
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8">
                Why It Matters
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 leading-relaxed mb-6 sm:mb-8">
                Security doesn&apos;t stop after installation — it lives in how
                quickly you see, act, and respond.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-10">
                With IDR&apos;s camera monitoring, every alert is backed by
                trained professionals who know your system, understand your
                site, and treat every alarm like it&apos;s their own.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {[
                { icon: Users, title: "Real People", color: "blue" },
                { icon: Zap, title: "Real Response", color: "purple" },
                { icon: Shield, title: "Real Protection", color: "green" },
              ].map((pillar, idx) => (
                <div key={idx} className="text-center group">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-${pillar.color}-100 border-2 border-${pillar.color}-200 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 text-${pillar.color}-600`}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 italic">
                Tailored to you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-7 h-auto shadow-lg hover:shadow-xl">
              <Shield className="w-5 h-5 mr-2" />
              Get Protected Today
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 font-semibold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-7 h-auto">
              <Eye className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
