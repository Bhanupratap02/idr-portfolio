/** @format */
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import youtubeIcon from "@/assets/youtube.png";
import linkedinIcon from "@/assets/linkedin.png";
import facebookIcon from "@/assets/facebook.png";
const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-medium text-[#333] mb-4">
            Contact us
          </h2>
          <p className="text-lg text-[#333] font-light max-w-4xl">
            Leave an inquiry or contact us via email and phone. We will contact
            you within 24 hours during work days
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-[#144187] to-[#052557] p-8 lg:p-12 text-white relative">
              {/* Decorative circles */}
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#052557] bg-opacity-76 z-10"></div>
              <div className="absolute bottom-25 right-28 w-28 h-28 rounded-full bg-[#052557]/58 "></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-12 text-left">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6" />
                    <div className="text-base leading-relaxed">
                      NY: 718-594-7865
                      <br />
                      NJ: 732-217-3550
                      <br />
                      FL: 813-685-4022
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6" />
                    <div className="text-base leading-relaxed">
                      Sales:
                      <br />
                      sales@idrtechnologysolutions.com
                      <br />
                      Support: support@idrtechnologysolutions.com
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6" />
                    <div className="text-base">
                      Office Address: 91 Bay 31 St, Brooklyn, NY 11214
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-16 flex justify-start space-x-4">
                  <div className="w-8 h-8 [#052557] bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
                    <Image
                      src={youtubeIcon}
                      alt="YouTube"
                      width={20}
                      className=""
                      height={20}
                    />
                  </div>
                  <div className="w-8 h-8 [#052557] bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
                    <Image
                      src={linkedinIcon}
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="w-8 h-8 [#052557] bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-normal text-[#333] capitalize mb-2">
                  get in touch
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  We&apos;re always excited to explore new opportunities and
                  challenges. Whether you&apos;re a startup or an established
                  enterprise, we&apos;d love to hear from you. Contact us to
                  discuss how we can help you achieve your digital goals.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    className="w-full px-5 py-3 border border-[#E0E0E0] text-sm placeholder-[#828282] focus:outline-none focus:border-[#052557]"
                    required
                  />
                </div>
                <div className="relative">
                  <select className="w-full px-5 py-3 border border-[#E0E0E0] text-sm text-black appearance-none focus:outline-none focus:border-[#052557] bg-white">
                    <option value="">How did you find us?</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-3 h-3 text-[#CBCBCB] rotate-90"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M6 9L10.5 3L1.5 3L6 9Z" />
                    </svg>
                  </div>
                </div>

                <div className="pt-10 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#052557] text-white px-6 py-3 text-sm capitalize hover:bg-[#041f42] transition-colors rounded"
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
