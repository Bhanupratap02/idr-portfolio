"use client";
import { submitToSheet } from "@/utils/submitToSheet";
export function ContactSection() {
    const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name?.value || "",
      email: form.email?.value || "",
      phone: form.phone?.value || "",
      message: form.message?.value || "",
      source: "Kisi Page",
    };

    const result = await submitToSheet(formData);
    if (result.success) {
      form.reset();
      alert("✅ Kisi request submitted successfully!");
    } else {
      alert("❌ Submission failed. Try again.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-white mb-8">
            <h2 className="text-3xl lg:text-4xl mb-6">Let&apos;s Build Your Kisi System</h2>
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              Whether you&apos;re outfitting a new space or upgrading legacy access control, IDR is your trusted Kisi partner.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl text-[#2e2e2e] text-center mb-8">Schedule a Free Consultation</h3>
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
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Get Started Today
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}