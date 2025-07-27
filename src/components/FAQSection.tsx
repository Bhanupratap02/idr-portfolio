
import { useState } from "react";
const FAQSection = () => {
   const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => {
      setOpenFaq(openFaq === index ? null : index);
    };
  return (
    <section className="bg-white px-6 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-medium text-[#3D3D3D] text-center mb-24">
          Frequently Asked Questions
        </h2>

        <div className="space-y-7">
          {/* FAQ Item 1 - Open by default */}
          <div
            className={`rounded-3xl transition-all duration-300 ${
              openFaq === 0 ? "bg-[#F7F6F2] p-8" : "bg-[#F7F6F2] shadow-sm p-8"
            }`}
          >
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggleFaq(0)}
            >
              <span className="text-lg font-medium text-[#333333] pr-4">
                What is your warranty?
              </span>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  openFaq === 0 ? "bg-[#052557]" : "bg-[#F7F6F2] shadow-lg"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openFaq === 0
                      ? "rotate-180 text-[#F7F6F2]"
                      : "text-[#052557]"
                  }`}
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
            </button>
            {openFaq === 0 && (
              <div className="mt-6 text-base text-[#626262] leading-relaxed">
                <p>
                  IDR provides a one-year warranty on all newly installed
                  cabling and hardware. For some of cabling projects we can
                  offer up to a 25 year warranty through the manufacturer if we
                  use their solution from end to end. Warranty covers parts and
                  labor. Warranty Exclusions include: Defects and damages caused
                  by improper use, tampering, theft, fire, water or natural
                  disaster.
                </p>
                <br />
                <p>
                  All configuration services are covered by our 30 day warranty.
                  During which time you may request minor configuration changes
                  that do not require a complete system redesign.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-[#F7F6F2] shadow-sm rounded-3xl p-8">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggleFaq(1)}
            >
              <span className="text-lg font-medium text-[#333333] pr-4">
                Do you offer financing?
              </span>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  openFaq === 1 ? "bg-[#052557]" : "bg-[#F7F6F2] shadow-lg"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openFaq === 1
                      ? "rotate-180 text-[#F7F6F2]"
                      : "text-[#052557]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-[#F7F6F2] shadow-sm rounded-3xl p-8">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggleFaq(2)}
            >
              <span className="text-lg font-medium text-[#333333] pr-4">
                What are your normal hours of service:
              </span>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  openFaq === 2 ? "bg-[#052557]" : "bg-[#F7F6F2] shadow-lg"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openFaq === 2
                      ? "rotate-180 text-[#F7F6F2]"
                      : "text-[#052557]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-[#F7F6F2] shadow-sm rounded-3xl p-8">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggleFaq(3)}
            >
              <span className="text-lg font-medium text-[#333333] pr-4">
                I hear a lot about the cloud, what are the benefits of a cloud
                solution?
              </span>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  openFaq === 3 ? "bg-[#052557]" : "bg-[#F7F6F2] shadow-lg"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openFaq === 3
                      ? "rotate-180 text-[#F7F6F2]"
                      : "text-[#052557]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-[#F7F6F2] shadow-sm rounded-3xl p-8">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggleFaq(4)}
            >
              <span className="text-lg font-medium text-[#333333] pr-4">
                Do you offer security alarm monitoring services?
              </span>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  openFaq === 4 ? "bg-[#052557]" : "bg-[#F7F6F2] shadow-lg"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openFaq === 4
                      ? "rotate-180 text-[#F7F6F2]"
                      : "text-[#052557]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* FAQ Items 6-11 continue with same pattern */}
          {[
            "Do you sell hardware?",
            "How do I place an order / schedule service?",
            "What is your response time for a serious event?",
            "Do you offer service agreements?",
            "What are the benefits of Service Agreements?",
          ].map((question, index) => (
            <div
              key={index + 5}
              className="bg-[#F7F6F2] shadow-sm rounded-3xl p-8"
            >
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => toggleFaq(index + 5)}
              >
                <span className="text-lg font-medium text-[#333333] pr-4">
                  {question}
                </span>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    openFaq === index + 5
                      ? "bg-[#052557]"
                      : "bg-[#F7F6F2] shadow-lg"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index + 5
                        ? "rotate-180 text-[#F7F6F2]"
                        : "text-[#052557]"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection