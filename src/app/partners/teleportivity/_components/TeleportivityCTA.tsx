/** @format */

import { Phone, Calendar } from "lucide-react";

export default function TeleportivityCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Let&apos;s Get Virtual
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Ready to upgrade your entry experience?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Call us or submit the form to connect with our design team —
              we&apos;ll walk you through real use cases, show you a live demo,
              and put together a turnkey rollout plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#052557] text-white px-8 py-3 rounded-lg hover:bg-[#041e45] transition-colors duration-200 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>

            <button className="border border-[#052557] text-[#052557] px-8 py-3 rounded-lg hover:bg-[#052557] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
