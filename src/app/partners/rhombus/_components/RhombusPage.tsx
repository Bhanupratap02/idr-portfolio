"use client";
import { CheckCircle,XCircle, Cloud, Shield, Smartphone, Search, Users, Key, Speaker, Link as LinkIcon, MapPin, Globe, Headphones } from "lucide-react";
import Link from "next/link";
import { submitToSheet } from "@/utils/submitToSheet";
import { useEffect, useState } from "react";
export default function Index() {
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState<"success" | "error" | null>(null);

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
    company: (form.elements.namedItem("company") as HTMLInputElement)?.value || "",
    email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
    requestType: (form.elements.namedItem("requestType") as HTMLSelectElement)?.value || "",
    source: "Rhombus Page",
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

  return (
    <div className="min-h-screen bg-white">

{/* Hero Section */}
<section className="w-full min-h-[500px] lg:min-h-[700px] xl:min-h-[800px] bg-gradient-to-r from-white to-blue-50 relative">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px] h-full flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-12 lg:py-16">
      {/* Left Content */}
      <div className="max-w-full lg:max-w-[601px] flex flex-col gap-3 sm:gap-4 order-2 lg:order-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl  font-semibold leading-[150%] text-rhombus-text-dark">
          Rhombus Systems: Smart Video Surveillance in the Cloud
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-rhombus-text-medium">
          Certified by Rhombus. Designed, Installed, and Supported by IDR Technology Solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6 lg:mt-8">
          <Link href={"/contact"} className="bg-[#052557] text-white px-5 sm:px-6 py-3 sm:py-4 rounded-md hover:opacity-90 transition-opacity">
            Get a Free Demo
          </Link>
          <Link href="/contact" className="border border-rhombus-dark-blue text-rhombus-dark-blue px-5 sm:px-7 py-3 sm:py-4 rounded-md hover:bg-gray-50 transition-colors">
            Design My System
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full order-1 lg:order-2">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8512b1041619ec2a5b83341b4d9fb0e31fa692a6?width=1179"
          alt="Rhombus Camera System"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[484px] rounded-lg sm:rounded-[22px] object-cover mx-auto"
        />
      </div>
    </div>
  </div>
</section>

{/* Smarter, Simpler Section */}
<section className="w-full py-10 sm:py-12 lg:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-rhombus-text-dark mb-10 sm:mb-12 lg:mb-16">
      Smarter, Simpler, and Fully Cloud-Native
    </h2>
    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-24">
      <div className="flex-1 max-w-full lg:max-w-[663px] order-2 lg:order-1">
        <p className="text-base sm:text-lg lg:text-xl leading-[150%] text-rhombus-text-dark mb-6 sm:mb-8">
          Rhombus delivers powerful, easy-to-manage cloud-native surveillance. No servers. No DVRs. Just intelligent, scalable security from anywhere.
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-[150%] text-rhombus-text-dark mb-8 sm:mb-10 lg:mb-12">
          IDR has deployed Rhombus across campuses, offices, and residential properties — handling everything from design to install and staff training.
        </p>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg lg:text-xl text-blue-600">No on-premises servers required</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg lg:text-xl text-blue-600">Accessible from any device, anywhere</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg lg:text-xl text-blue-600">Automatic updates and maintenance</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto lg:flex-1 max-w-md lg:max-w-[451px] mx-auto order-1 lg:order-2">
        <div className="relative w-full aspect-square">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9c69a9c01fa1193403d90d5d91bc526f06e5b717?width=902" 
            alt="Cloud Native Solution" 
            className="w-full h-full rounded-lg sm:rounded-[19px] object-cover shadow-lg"
          />
          <div className="absolute top-2 sm:top-3 left-3 sm:left-[18px] bg-blue-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-[10px] sm:text-xs font-bold">100% Cloud</div>
              <div className="text-white text-[10px] sm:text-xs font-bold">Native</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Teams Choose Rhombus */}
<section className="w-full py-10 sm:py-12 lg:py-16 bg-gray-100">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-rhombus-text-dark mb-10 sm:mb-12 lg:mb-16">
      Why Teams Choose Rhombus
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
      {/* True Cloud Platform */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="w-10 h-8 sm:w-12 sm:h-9 mb-4 sm:mb-6">
          <Cloud className="w-full h-full text-blue-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">True Cloud Platform</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-6">
          No local servers or port forwarding needed. Pure cloud-based architecture.
        </p>
      </div>

      {/* Smart Detection */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="w-8 h-8 sm:w-9 sm:h-9 mb-4 sm:mb-6">
          <Users className="w-full h-full text-blue-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Smart Detection</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-6">
          AI-powered detection for people, vehicles, vape, tampering, and more.
        </p>
      </div>

      {/* Encrypted Recording */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="w-7 h-8 sm:w-8 sm:h-9 mb-4 sm:mb-6">
          <Shield className="w-full h-full text-blue-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Encrypted Recording</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-6">
          Secure, continuous recording with customizable retention periods.
        </p>
      </div>

      {/* Access Anywhere */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="w-6 h-8 sm:w-7 sm:h-9 mb-4 sm:mb-6">
          <Smartphone className="w-full h-full text-blue-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Access Anywhere</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-6">
          Mobile and web access with role-based permissions for your team.
        </p>
      </div>

      {/* AI-Powered Search */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="w-8 h-8 sm:w-9 sm:h-9 mb-4 sm:mb-6">
          <Search className="w-full h-full text-blue-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">AI-Powered Search</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-6">
          Find events by face, license plate, or specific behaviors.
        </p>
      </div>

      {/* Easy Integration */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <div className="w-6 h-8 sm:w-7 sm:h-9 mb-4 sm:mb-6">
          <LinkIcon className="w-full h-full text-blue-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Easy Integration</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-6">
          Connects with Kisi, intercoms, alarm systems, and more.
        </p>
      </div>
    </div>
    <div className="text-center">
      <button className="bg-rhombus-dark-blue text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md hover:opacity-90 transition-opacity">
        See Rhombus in Action
      </button>
    </div>
  </div>
</section>

      {/* Rhombus, Perfected by IDR */}
  {/* Rhombus, Perfected by IDR */}
<section className="w-full py-10 sm:py-12 lg:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-rhombus-text-dark mb-10 sm:mb-12 lg:mb-16">
      Rhombus, Perfected by IDR
    </h2>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      <div className="flex-1 order-2 lg:order-1">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/10af6719b844487bd8ef3ae4f4a405aaadbeb29a?width=1191" 
          alt="IDR Technology Solutions" 
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[489px] rounded-lg sm:rounded-[22px] object-cover"
        />
      </div>
      <div className="flex-1 space-y-6 sm:space-y-8 order-1 lg:order-2">
        <div className="bg-blue-50 rounded-lg p-5 sm:p-6 lg:p-8">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base sm:text-lg font-medium text-rhombus-text-dark mb-2">Certified Rhombus Partner</h4>
                <p className="text-sm sm:text-base text-gray-600">Officially trained and endorsed by Rhombus Systems</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base sm:text-lg font-medium text-rhombus-text-dark mb-2">Licensed + Insured</h4>
                <p className="text-sm sm:text-base text-gray-600">NYS Alarm License and fully insured for your protection</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <Users className="w-5 h-5 sm:w-5 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base sm:text-lg font-medium text-rhombus-text-dark mb-2">Multi-Site Experience</h4>
                <p className="text-sm sm:text-base text-gray-600">Expertise with large-scale, multi-site rollouts</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <svg className="w-5 h-5 sm:w-5 sm:h-6 text-blue-600 flex-shrink-0 mt-1" viewBox="0 0 21 25" fill="currentColor">
                <path d="M10.4991 0.0800781C9.66941 0.0800781 8.9991 0.750391 8.9991 1.58008V2.48008C5.57723 3.17383 2.9991 6.20195 2.9991 9.83008V10.7113C2.9991 12.9145 2.18817 15.0426 0.725665 16.6926L0.37879 17.0816C-0.0149598 17.5223 -0.10871 18.1551 0.130353 18.6941C0.369415 19.2332 0.908478 19.5801 1.4991 19.5801H19.4991C20.0897 19.5801 20.6241 19.2332 20.8679 18.6941C21.1116 18.1551 21.0132 17.5223 20.6194 17.0816L20.2725 16.6926C18.81 15.0426 17.9991 12.9191 17.9991 10.7113V9.83008C17.9991 6.20195 15.421 3.17383 11.9991 2.48008V1.58008C11.9991 0.750391 11.3288 0.0800781 10.4991 0.0800781Z"/>
              </svg>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-rhombus-text-dark mb-2">Alert Configuration Experts</h4>
                <p className="text-sm sm:text-base text-gray-600">Custom alerting and notification setup</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <LinkIcon className="w-6 h-5 sm:w-8 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base sm:text-lg font-medium text-rhombus-text-dark mb-2">Integration Specialists</h4>
                <p className="text-sm sm:text-base text-gray-600">Connecting Rhombus to Kisi, intercoms, and more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-5 sm:p-6 border-l-4 border-blue-600">
          <blockquote className="text-base sm:text-lg text-rhombus-text-dark mb-3 sm:mb-4">
            &quot;We don&apos;t just install Rhombus — we help you unlock its full potential.&quot;
          </blockquote>
          <cite className="text-sm sm:text-base font-medium text-rhombus-text-dark">— IDR Technology Solutions Team</cite>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Security That Reacts in Real-Time */}
<section className="w-full py-10 sm:py-12 lg:py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-rhombus-text-dark mb-10 sm:mb-12 lg:mb-16">
      Security That Reacts in Real-Time
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-10 sm:mb-12 lg:mb-16">
      {/* Rhombus + Kisi */}
      <div className="flex gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <Key className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Rhombus + Kisi</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-6">
            LinkIcon access events to video footage automatically. See who actually used each badge for enhanced security.
          </p>
          <div className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm">
            <svg className="w-3 h-3.5 flex-shrink-0" viewBox="0 0 13 15" fill="currentColor">
              <path d="M11.993 8.36807C12.3348 8.02627 12.3348 7.47119 11.993 7.1294L7.61797 2.75439C7.27617 2.4126 6.72109 2.4126 6.3793 2.75439C6.0375 3.09619 6.0375 3.65127 6.3793 3.99307L9.26406 6.8751H0.875C0.391016 6.8751 0 7.26611 0 7.7501C0 8.23408 0.391016 8.6251 0.875 8.6251H9.26133L6.38203 11.5071C6.04023 11.8489 6.04023 12.404 6.38203 12.7458C6.72383 13.0876 7.27891 13.0876 7.6207 12.7458L11.9957 8.3708L11.993 8.36807Z"/>
            </svg>
            <span>Badge events trigger video recordings</span>
          </div>
        </div>
      </div>

      {/* Rhombus + Access Control */}
      <div className="flex gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <Users className="w-6 h-5 sm:w-7 sm:h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Rhombus + Access Control</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-6">
            Integrate with your existing access control system to create a unified security ecosystem.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm">
              <svg className="w-3 h-3.5 flex-shrink-0" viewBox="0 0 13 15" fill="currentColor">
                <path d="M11.993 8.36807C12.3348 8.02627 12.3348 7.47119 11.993 7.1294L7.61797 2.75439C7.27617 2.4126 6.72109 2.4126 6.3793 2.75439C6.0375 3.09619 6.0375 3.65127 6.3793 3.99307L9.26406 6.8751H0.875C0.391016 6.8751 0 7.26611 0 7.7501C0 8.23408 0.391016 8.6251 0.875 8.6251H9.26133L6.38203 11.5071C6.04023 11.8489 6.04023 12.404 6.38203 12.7458C6.72383 13.0876 7.27891 13.0876 7.6207 12.7458L11.9957 8.3708L11.993 8.36807Z"/>
              </svg>
              <span>Door events LinkIconed to video logs</span>
            </div>
            <div className="flex items-start gap-2 text-blue-600 text-xs sm:text-sm">
              <svg className="w-3 h-3.5 flex-shrink-0 mt-0.5" viewBox="0 0 13 15" fill="currentColor">
                <path d="M11.993 8.36807C12.3348 8.02627 12.3348 7.47119 11.993 7.1294L7.61797 2.75439C7.27617 2.4126 6.72109 2.4126 6.3793 2.75439C6.0375 3.09619 6.0375 3.65127 6.3793 3.99307L9.26406 6.8751H0.875C0.391016 6.8751 0 7.26611 0 7.7501C0 8.23408 0.391016 8.6251 0.875 8.6251H9.26133L6.38203 11.5071C6.04023 11.8489 6.04023 12.404 6.38203 12.7458C6.72383 13.0876 7.27891 13.0876 7.6207 12.7458L11.9957 8.3708L11.993 8.36807Z"/>
              </svg>
              <span>Real time facial detection video alerting with 1 second latency video feeds when the wrong person uses an access badge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rhombus + Vape Detection */}
      <div className="flex gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-5 sm:w-8 sm:h-6 text-blue-600" viewBox="0 0 30 24" fill="currentColor">
            <path d="M21 1.5V2.01562C21 3.80625 21.7125 5.52188 22.9781 6.7875L23.9625 7.77188C24.9469 8.75625 25.5 10.0922 25.5 11.4844V12C25.5 12.8297 24.8297 13.5 24 13.5C23.1703 13.5 22.5 12.8297 22.5 12V11.4844C22.5 10.8891 22.2609 10.3172 21.8391 9.89531L20.8547 8.91094C19.0266 7.08281 18 4.59844 18 2.01562V1.5C18 0.670312 18.6703 0 19.5 0C20.3297 0 21 0.670312 21 1.5Z"/>
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Rhombus + Vape Detection</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-6">
            Specialized sensors detect vaping in bathrooms and other areas, with immediate video verification.
          </p>
          <div className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm">
            <svg className="w-3 h-3.5 flex-shrink-0" viewBox="0 0 13 15" fill="currentColor">
              <path d="M11.993 8.36807C12.3348 8.02627 12.3348 7.47119 11.993 7.1294L7.61797 2.75439C7.27617 2.4126 6.72109 2.4126 6.3793 2.75439C6.0375 3.09619 6.0375 3.65127 6.3793 3.99307L9.26406 6.8751H0.875C0.391016 6.8751 0 7.26611 0 7.7501C0 8.23408 0.391016 8.6251 0.875 8.6251H9.26133L6.38203 11.5071C6.04023 11.8489 6.04023 12.404 6.38203 12.7458C6.72383 13.0876 7.27891 13.0876 7.6207 12.7458L11.9957 8.3708L11.993 8.36807Z"/>
            </svg>
            <span>Real-time alerts with video clips</span>
          </div>
        </div>
      </div>

      {/* Rhombus + Annunciators */}
      <div className="flex gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <Speaker className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium text-rhombus-text-dark mb-3 sm:mb-4">Rhombus + Annunciators</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-6">
            Trigger automated audio messages when people enter restricted areas or during specific events.
          </p>
          <div className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm">
            <svg className="w-3 h-3.5 flex-shrink-0" viewBox="0 0 13 15" fill="currentColor">
              <path d="M11.993 8.36807C12.3348 8.02627 12.3348 7.47119 11.993 7.1294L7.61797 2.75439C7.27617 2.4126 6.72109 2.4126 6.3793 2.75439C6.0375 3.09619 6.0375 3.65127 6.3793 3.99307L9.26406 6.8751H0.875C0.391016 6.8751 0 7.26611 0 7.7501C0 8.23408 0.391016 8.6251 0.875 8.6251H9.26133L6.38203 11.5071C6.04023 11.8489 6.04023 12.404 6.38203 12.7458C6.72383 13.0876 7.27891 13.0876 7.6207 12.7458L11.9957 8.3708L11.993 8.36807Z"/>
            </svg>
            <span>Auto-alerts for loitering or restricted areas</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/31eb2bd2aeb23e1aafa31a58283ea6d71690ec62?width=2170" 
        alt="Security Integration Dashboard" 
        className="w-full max-w-full sm:max-w-3xl lg:max-w-[1085px] h-auto rounded-lg sm:rounded-[23px] mx-auto"
      />
    </div>
  </div>
</section>

{/* Where We Deploy */}
<section className="w-full py-10 sm:py-12 lg:py-16 bg-gray-100">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center text-rhombus-text-dark mb-10 sm:mb-12 lg:mb-16">
      Where We Deploy
    </h2>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
      <div className="flex-1 w-full order-2 lg:order-1">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6a10efdc708145f9c838e55620601ea599fc5002?width=1200" 
          alt="Deployment Map" 
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="w-full lg:w-auto lg:max-w-md xl:max-w-[600px] bg-white rounded-lg p-6 sm:p-8 shadow-md order-1 lg:order-2">
        <h3 className="text-xl sm:text-2xl font-medium text-rhombus-text-dark mb-6 sm:mb-8">
          IDR supports Rhombus installs across:
        </h3>
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <MapPin className="w-4 h-4 sm:w-4 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg text-rhombus-text-dark">New York City & Metropolitan Area</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <MapPin className="w-4 h-4 sm:w-4 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg text-rhombus-text-dark">North & Central New Jersey</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <MapPin className="w-4 h-4 sm:w-4 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg text-rhombus-text-dark">South Florida</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg text-rhombus-text-dark">Nationwide via remote support & partner network</span>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
          <Headphones className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span className="text-sm sm:text-base text-rhombus-text-dark">Remote support available for all locations</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Final CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 shadow-xl">
            <div className="flex gap-12 items-center">
              <div className="flex-1 text-white">
                <h2 className="text-4xl font-medium mb-6 leading-[40px]">
                  Smarter Surveillance Starts Here
                </h2>
                <p className="text-xl leading-7 mb-8">
                  Upgrade to a cloud-native solution that&apos;s scalable, intelligent, and secure. Let IDR help you design a system tailored to your space and team.
                </p>
                <div className="flex gap-4">
                  <Link href={"/contact"} className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                    Request a Demo
                  </Link>
                  <Link href={"/contact"} className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                    Talk to an Expert
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg w-[553px] relative">
                <h3 className="text-2xl font-medium text-rhombus-text-dark mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-base text-gray-600 mb-2">Name</label>
                    <input 
                      type="text"
                      name="name"
                      placeholder="Your name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-base text-gray-600 mb-2">Company</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="Your company" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-base text-gray-600 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-base text-gray-600 mb-2">Request Type</label>
                    <select name="requestType"  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                      <option>Request a Demo</option>
                      <option>Design Consultation</option>
                      <option>Support Question</option>
                      <option>Partnership Inquiry</option>
                    </select>
                  </div>
                 <button
  type="submit"
  disabled={loading}
  className={`w-full font-medium py-3 rounded-md transition-colors ${
    loading
      ? "bg-blue-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 text-white"
  }`}
>
  {loading ? "Sending..." : "Submit Request"}
</button>

{/* Toast Notification */}
{status && (
  <div
    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg text-white flex items-center gap-2 text-sm sm:text-base transition-all duration-300 ${
      status === "success" ? "bg-green-600" : "bg-red-600"
    }`}
  >
    {status === "success" ? (
      <>
        <CheckCircle className="w-5 h-5" />
        <span>Request submitted successfully!</span>
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
    </div>
  );
}
