/** @format */

import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-white">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            IDR makes it simple to build strong foundations for future
            technology.
          </p>
          <div className="pt-4">
            <Button
              className="bg-white text-[#8B5CF6] hover:bg-gray-50 px-10 py-6 text-lg font-normal shadow-lg"
              size="lg"
            >
              Get a Free Site Walk & Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
