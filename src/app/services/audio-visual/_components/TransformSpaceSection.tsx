/** @format */
"use client";
import { submitToSheet } from "@/utils/submitToSheet";
export default function TransformSpaceSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name?.value || "",
      email: form.email?.value || "",
      phone: form.phone?.value || "",
      interest: form.interest?.value || "",
      source: "AudioVisual Page",
    };

    const result = await submitToSheet(formData);
    if (result.success) {
      form.reset();
      alert("✅ Your A/V consultation request was submitted!");
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-800">
      <div className="mx-auto max-w-3xl md:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white mb-4 sm:mb-6 lg:mb-8">
          Ready to Transform Your Space?
        </h2>
        <p className="text-base sm:text-lg md:text-xl  2xl:text-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-16">
          Schedule a free consultation and site visit with our A/V experts
        </p>
        {/* Contact Form */}
        <form  onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              aria-label="Full Name"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              aria-label="Email Address"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="tel"
            name="phone"
            aria-label="Phone Number"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <select
             name="interest"
              className="w-full px-4 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              aria-label="Service Interest"
            >
              <option>I&apos;m interested in...</option>
              <option>Conference Room Solutions</option>
              <option>Audio/Visual Systems</option>
              <option>Sound Masking</option>
              <option>Home Theater</option>
              <option>Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6  rounded-md font-medium transition-colors cursor-pointer"
          >
            Schedule My Free Consultation
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 17 16"
            >
              <path
                d="M6.04375 0.769455C5.80312 0.188205 5.16875 -0.12117 4.5625 0.0444546L1.8125 0.794455C1.26875 0.944455 0.890625 1.4382 0.890625 2.0007C0.890625 9.73195 7.15938 16.0007 14.8906 16.0007C15.4531 16.0007 15.9469 15.6226 16.0969 15.0788L16.8469 12.3288C17.0125 11.7226 16.7031 11.0882 16.1219 10.8476L13.1219 9.59758C12.6125 9.38508 12.0219 9.53195 11.675 9.96008L10.4125 11.5007C8.2125 10.4601 6.43125 8.67883 5.39062 6.47883L6.93125 5.21945C7.35938 4.86945 7.50625 4.28195 7.29375 3.77258L6.04375 0.77258V0.769455Z"
                fill="#0099FF"
              />
            </svg>
            {/* <span className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
              (555) 123-4567
            </span> */}
            <span>718-594-7865</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 17 16"
            >
              <path
                d="M1.70312 2C0.875 2 0.203125 2.67188 0.203125 3.5C0.203125 3.97187 0.425 4.41562 0.803125 4.7L7.60313 9.8C7.95937 10.0656 8.44688 10.0656 8.80313 9.8L15.6031 4.7C15.9812 4.41562 16.2031 3.97187 16.2031 3.5C16.2031 2.67188 15.5312 2 14.7031 2H1.70312ZM0.203125 5.5V12C0.203125 13.1031 1.1 14 2.20312 14H14.2031C15.3062 14 16.2031 13.1031 16.2031 12V5.5L9.40312 10.6C8.69063 11.1344 7.71563 11.1344 7.00313 10.6L0.203125 5.5Z"
                fill="#0099FF"
              />
            </svg>
            <span>support@idrtechnologysolutions.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
