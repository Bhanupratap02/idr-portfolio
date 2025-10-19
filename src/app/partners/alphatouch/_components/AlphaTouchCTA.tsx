/** @format */
"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, CheckCircle2, XCircle } from "lucide-react";
import { submitToSheet } from "@/utils/submitToSheet";

export default function AlphaTouchCTA() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Automatically hide toast after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  const form = e.currentTarget;

  const formData = {
    property: (form.elements.namedItem("property") as HTMLInputElement)?.value || "",
    email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
    phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
    propertyType: (form.elements.namedItem("propertyType") as HTMLSelectElement)?.value || "",
    message: "AlphaTouch Quote Request",
    source: "AlphaTouch Page",
  };

  try {
    const result = await submitToSheet(formData);
    if (result.success) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="relative py-16 bg-gradient-to-tr from-[#667EEA] to-[#764BA2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-white mb-4">
            Start Your Intercom Upgrade Today
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Whether you&apos;re upgrading an old system or building from scratch,
            AlphaTouch + IDR is a powerful combination for modern building access
            control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl relative">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">
              Get Your Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="property"
                type="text"
                placeholder="Property Name"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <select
                name="propertyType"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition"
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
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
                }`}
              >
                {loading ? "Sending..." : "Get Free Quote"}
              </button>
            </form>

            {/* Toast Notification */}
            {status && (
              <div
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg text-white flex items-center gap-2 text-sm sm:text-base transition-all duration-300 ${
                  status === "success" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Request sent successfully!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium">Call Us Now</h4>
                <p className="text-blue-100">(718) 594-7865</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium">Email Us</h4>
                <p className="text-blue-100">info@alphatouch.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium">Service Areas</h4>
                <p className="text-blue-100">NY, NJ, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
