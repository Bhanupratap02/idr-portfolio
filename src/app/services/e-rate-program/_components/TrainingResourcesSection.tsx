/** @format */
"use client";
import { useState } from "react";
import { FileText, Video, Users, Download } from "lucide-react";
// import pdf from "@/assets/services/e-rate-program/pdf.png"
export default function TrainingResourcesSection() {
  const [activeTab, setActiveTab] = useState("pdfs");

  const trainingItems = [
    {
      icon: FileText,
      title: "Beginning E-Rate Services",
      downloadIcon: Download,
    },
    {
      icon: FileText,
      title: "Category Two Budgets",
      downloadIcon: Download,
    },
    {
      icon: FileText,
      title: "E-Rate Program Overview",
      downloadIcon: Download,
    },
    {
      icon: FileText,
      title: "Application Process Guide",
      downloadIcon: Download,
    },
    {
      icon: FileText,
      title: "Funding Year 2025 Timeline",
      downloadIcon: Download,
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32  bg-white overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32">
          <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Training Resources
          </h2>
          <p className="text-[#626262] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-2 sm:px-0">
            Access comprehensive training materials to help you navigate the
            E-Rate program application process and maximize your funding.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16">
          <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 3xl:space-x-16 overflow-x-auto">
            <button
              onClick={() => setActiveTab("pdfs")}
              className={`flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-5 3xl:py-6 px-4 sm:px-2 md:px-3 lg:px-2 xl:px-3 2xl:px-4 3xl:px-5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "pdfs"
                  ? "border-[#004AAD] text-[#004AAD] bg-blue-50 sm:bg-transparent"
                  : "border-transparent text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 sm:hover:bg-transparent"
              }`}
            >
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6  2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9" />
              <span className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium">
                PDFs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-5 3xl:py-6 px-4 sm:px-2 md:px-3 lg:px-2 xl:px-3 2xl:px-4 3xl:px-5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "videos"
                  ? "border-[#004AAD] text-[#004AAD] bg-blue-50 sm:bg-transparent"
                  : "border-transparent text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 sm:hover:bg-transparent"
              }`}
            >
              <Video className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6  2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9" />
              <span className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium">
                Videos
              </span>
            </button>

            <button
              onClick={() => setActiveTab("webinars")}
              className={`flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-5 3xl:py-6 px-4 sm:px-2 md:px-3 lg:px-2 xl:px-3 2xl:px-4 3xl:px-5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === "webinars"
                  ? "border-[#004AAD] text-[#004AAD] bg-blue-50 sm:bg-transparent"
                  : "border-transparent text-[#6B7280] hover:text-[#374151] hover:bg-gray-50 sm:hover:bg-transparent"
              }`}
            >
              <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6  2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9" />
              <span className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium">
                Webinars
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "pdfs" && (
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8 animate-in fade-in duration-300">
            {trainingItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#EFF6FF] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 2xl:p-6 3xl:p-8 flex items-center justify-between hover:bg-[#DBEAFE] transition-all duration-300 hover:shadow-md group cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8 flex-1 min-w-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6  2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 text-[#004AAD] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-full h-full" />
                  </div>
                  <span className="text-[#2E2E2E] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-normal truncate sm:truncate-none">
                    {item.title}
                  </span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6  2xl:w-8 2xl:h-8 3xl:w-9 3xl:h-9 text-[#004AAD] hover:text-[#003A8C] transition-all duration-300 flex-shrink-0 group-hover:scale-110 ">
                  <item.downloadIcon className="w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="flex items-center justify-center h-full animate-in fade-in duration-300">
            <div className="text-center py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
              <p className="text-[#6B7280] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                Video content coming soon...
              </p>
            </div>
          </div>
        )}

        {activeTab === "webinars" && (
          <div className="flex items-center justify-center h-full animate-in fade-in duration-300">
            <div className="text-center py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
              <p className="text-[#6B7280] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                Webinar content coming soon...
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
