"use client";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

import { submitToSheet } from "@/utils/submitToSheet";
export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

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
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email:
        (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      phone:
        (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ||
        "",
      source: "Kisi Page",
    };

    const result = await submitToSheet(formData);
    setLoading(false);

    if (result.success) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
              <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-3xl  mx-auto text-center">
          <div className="text-white mb-8 sm:mb-10 md:mb-12   text-center">
            <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl  xl:text-5xl  leading-tight mb-6">
              Let&apos;s Build Your Kisi System
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl  font-light text-blue-100 leading-relaxed">
              Whether you&apos;re outfitting a new space or upgrading legacy
              access control, IDR is your trusted Kisi partner.
            </p>
          </div>
           <div className="bg-white rounded-2xl p-8 shadow-xl relative max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl 3xl:text-3xl  text-[#2e2e2e] text-center mb-8">
              Schedule a Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg transition-colors text-center 2xl:text-lg cursor-pointer ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {loading ? "Sending..." : "Get Started Today"}
              </button>
              {status && (
                <div
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg text-white flex items-center gap-2 text-sm sm:text-base transition-all duration-300 ${
                    status === "success" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Request submitted successfully!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
