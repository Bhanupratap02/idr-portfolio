/** @format */

import { Phone, Mail, MapPin } from "lucide-react";

export default function AlphaTouchCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-tr from-[#667EEA] to-[#764BA2]">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
            Start Your Intercom Upgrade Today
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Whether you&apos;re upgrading an old system or building from
            scratch, AlphaTouch + IDR is a powerful combination for modern
            building access control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
              Get Your Free Quote
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Property Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white">
                <option>Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Mixed-Use</option>
                <option>Healthcare</option>
                <option>Senior Living</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Get Free Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-1">
                  Call Us Now
                </h4>
                <p className="text-blue-100">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-1">
                  Email Us
                </h4>
                <p className="text-blue-100">info@alphatouch.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-1">
                  Service Areas
                </h4>
                <p className="text-blue-100">NY, NJ, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
