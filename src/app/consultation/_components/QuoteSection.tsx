/** @format */

import { Sparkles } from "lucide-react";

export default function QuoteSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl"></div>

      <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 shadow-xl border-2 border-slate-200">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg rotate-12">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="pt-4">
     

            <blockquote className="text-xl md:text-2xl xl:text-3xl font-light text-slate-800 italic leading-relaxed my-8">
              “We don&apos;t just design systems — we design confidence.”
            </blockquote>

            <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 h-1 w-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
