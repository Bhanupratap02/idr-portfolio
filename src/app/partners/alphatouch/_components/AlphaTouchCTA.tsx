/** @format */
"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { submitToSheet } from "@/utils/submitToSheet";


export default function AlphaTouchCTA() {
  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.property?.value || "", // property name as 'name' field in sheet
    email: form.email?.value || "",
    phone: form.phone?.value || "",
    foundBy: form.propertyType?.value || "",
    message: "AlphaTouch Quote Request",
    source: "AlphaTouch Page",
  };

  const result = await submitToSheet(formData);

  if (result.success) {
    form.reset();
    alert("Thank you! Your request has been submitted.");
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden bg-gradient-to-tr from-[#667EEA] to-[#764BA2]">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white leading-tight mb-3 sm:mb-4 md:mb-5 xl:mb-6 2xl:mb-7">
            Start Your Intercom Upgrade Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-blue-100 leading-relaxed font-light max-w-3xl 2xl:max-w-4xl mx-auto">
            Whether you&apos;re upgrading an old system or building from
            scratch, AlphaTouch + IDR is a powerful combination for modern
            building access control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-16 items-center max-w-6xl 2xl:max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl  text-gray-900 mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8 text-center">
              Get Your Free Quote
            </h3>

           <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 xl:space-y-5 2xl:space-y-6">
  <input
    name="property"
    type="text"
    placeholder="Property Name"
    required
    className="w-full px-3 sm:px-4 xl:px-5 2xl:px-6 py-2.5 sm:py-3 xl:py-4 2xl:py-5 text-sm sm:text-base  2xl:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
  />

  <input
    name="email"
    type="email"
    placeholder="Email Address"
    required
    className="w-full px-3 sm:px-4 xl:px-5 2xl:px-6 py-2.5 sm:py-3 xl:py-4 2xl:py-5 text-sm sm:text-base 2xl:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
  />

  <input
    name="phone"
    type="tel"
    placeholder="Phone Number"
    required
    className="w-full px-3 sm:px-4 xl:px-5 2xl:px-6 py-2.5 sm:py-3 xl:py-4 2xl:py-5 text-sm sm:text-base 2xl:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
  />

  <select
    name="propertyType"
    required
    className="w-full px-3 sm:px-4 xl:px-5 2xl:px-6 py-2.5 sm:py-3 xl:py-4 2xl:py-5 text-sm sm:text-base 2xl:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
  >
    <option value="">Property Type</option>
    <option value="Residential">Residential</option>
    <option value="Commercial">Commercial</option>
    <option value="Mixed-Use">Mixed-Use</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Senior Living">Senior Living</option>
  </select>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2.5 sm:py-3 xl:py-4 2xl:py-5 text-sm sm:text-base xl:text-lg 2xl:text-xl rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
  >
    Get Free Quote
  </button>
</form>

          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 xl:space-y-10 2xl:space-y-12">
            <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 2xl:w-18 2xl:h-18  flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7  text-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl 2xl:text-2xl  font-medium text-white mb-0.5 sm:mb-1">
                  Call Us Now
                </h4>
                <p className="text-sm sm:text-base md:text-lg 2xl:text-xl  text-blue-100 font-light">
                  (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 2xl:w-18 2xl:h-18  flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7  text-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl 2xl:text-2xl  font-medium text-white mb-0.5 sm:mb-1">
                  Email Us
                </h4>
                <p className="text-sm sm:text-base md:text-lg 2xl:text-xl  text-blue-100 font-light">
                  info@alphatouch.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 2xl:w-18 2xl:h-18  flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7  text-white" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl 2xl:text-2xl  font-medium text-white mb-0.5 sm:mb-1">
                  Service Areas
                </h4>
                <p className="text-sm sm:text-base md:text-lg 2xl:text-xl  text-blue-100 font-light">
                  NY, NJ, FL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
