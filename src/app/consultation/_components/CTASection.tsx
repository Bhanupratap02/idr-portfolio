/** @format */

import { Lightbulb } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="text-center mt-16">
      <div className="inline-flex flex-col sm:flex-row gap-6">
        <Link
          href={"/contact"}
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-5 rounded-2xl text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 cursor-pointer"
        >
          <span>Schedule a Consultation</span>
          <Lightbulb className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
