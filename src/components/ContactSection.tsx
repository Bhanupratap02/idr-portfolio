

const ContactSection = () => {
  return (
    <section className="px-6 lg:px-20 py-20">
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
              {/* <div className="absolute top-80 right-8 w-48 h-48 rounded-full bg-[#052557] bg-opacity-76"></div>
              <div className="absolute top-12 left-12 w-28 h-28 rounded-full bg-white bg-opacity-8"></div>
              <div className="absolute bottom-12 left-12 w-28 h-28 rounded-full bg-white bg-opacity-8"></div> */}

              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-12 text-left">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-white">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base leading-relaxed">
                        NY: 718-594-7865
                        <br />
                        NJ: 732-217-3550
                        <br />
                        FL: 813-685-4022
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-white">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2zm-4 2L12 13 4 6h16zm0 2.5l-8 6.5-8-6.5V18h16V8.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base leading-relaxed">
                        Sales:
                        <br />
                        sales@idrtechnologysolutions.com
                        <br />
                        Support: support@idrtechnologysolutions.com
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-white">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base">
                        Office Address: 91 Bay 31 St, Brooklyn, NY 11214
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                {/* <div className="mt-16 flex justify-center space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-normal text-[#333] capitalize mb-2">
                  get in touch
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  We're always excited to explore new opportunities and
                  challenges. Whether you're a startup or an established
                  enterprise, we'd love to hear from you. Contact us to discuss
                  how we can help you achieve your digital goals.
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
}

export default ContactSection