/** @format */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle2, XCircle } from "lucide-react";




import Link from "next/link";
import { submitToSheet } from "@/utils/submitToSheet";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Hide toast automatically after 3 seconds
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
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      foundBy:
        (form.elements.namedItem("foundBy") as HTMLSelectElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      source: "Contact Page",
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

  const socialLinks = [
    {
      href: "https://www.youtube.com/@Idrtechnologysolutions",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fyoutube.png",
      alt: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/idr-technology-solutions",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Flinkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100057472869428",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Ffacebook.png",
      alt: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@idrtechnologysolu?_t=ZP-8y9yjPO8tvL&_r=1",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Ftiktok_3.png",
      alt: "TikTok",
    },
    {
      href: "https://www.instagram.com/idrtechnologysolutions?igsh=MTNzcHBuanc3ZWM5ag%3D%3D&utm_source=qr",
      icon: "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Finstagram_2.png",
      alt: "Instagram",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-20 2xl:px-32 py-12 sm:py-16 lg:py-20 2xl:py-24 relative">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="mb-8 2xl:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Contact us
          </h2>
          <p className="text-lg text-[#333] font-light max-w-4xl">
            Leave an inquiry or contact us via email and phone. We will contact
            you within 24 hours during work days.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-[#144187] to-[#052557] p-8 lg:p-12 text-white relative">
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#052557]/80 z-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-12 text-left">
                  Contact Information
                </h3>

                <div className="space-y-8 text-base leading-relaxed">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href="tel:+17185947865"
                      className="block hover:no-underline transition"
                    >
                      NY: 718-594-7865
                    </a>

                    <a
                      href="tel:+17322173550"
                      className="block hover:no-underline transition"
                    >
                      NJ: 732-217-3550
                    </a>

                    <a
                      href="tel:+18136854022"
                      className="block hover:no-underline transition"
                    >
                      FL: 813-685-4022
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div>Sales:</div>
                      <a
                        href="mailto:sales@idrtechnologysolutions.com"
                        className="hover:no-underline break-all"
                      >
                        sales@idrtechnologysolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div>Support:</div>
                      <a
                        href="mailto:support@idrtechnologysolutions.com"
                        className="hover:no-underline break-all"
                      >
                        support@idrtechnologysolutions.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <Link
                    href="https://share.google/NV2hDUYMuvjcu3hFi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:no-underline"
                  >
                    Office Address: 91 Bay 31 St, Brooklyn, NY 11214
                  </Link>
                </div>
              </div>

                <div className="mt-16 flex justify-start space-x-4">
                  {socialLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
                    >
                      <Image src={item.icon} alt={item.alt} width={20} height={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12 relative">
              <div className="mb-8">
                <h3 className="text-3xl font-normal text-[#333] capitalize mb-4">
                  Get in touch
                </h3>
                <p className="text-base text-[#626262] leading-relaxed">
                  We&apos;re always excited to explore new opportunities and
                  challenges. Whether you&apos;re a startup or an established
                  enterprise, we&apos;d love to hear from you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 2xl:space-y-6 relative"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Name *"
                  required
                  className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number *"
                  required
                  className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                />

                <select
                  name="foundBy"
                  className="w-full px-5 py-3 border border-[#E0E0E0] text-sm focus:outline-none focus:border-[#052557] bg-white text-black"
                >
                  <option value="">How did you find us?</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Referral</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="How can we help? *"
                  required
                  rows={3}
                  className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                ></textarea>

                <div className="pt-10 flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[#052557] text-white px-8 py-4 text-sm capitalize rounded transition-colors ${
                      loading
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:bg-[#041f42]"
                    }`}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Toast */}
                {status && (
                  <div
                    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg text-white flex items-center gap-2 text-sm transition-all duration-300 ${
                      status === "success" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {status === "success" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message sent successfully!</span>
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
      </div>
    </section>
  );
};

export default ContactSection;
