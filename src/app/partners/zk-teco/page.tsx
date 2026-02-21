/** @format */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./_components/ui/card";
import {
  Phone,
  Calendar,
  Fingerprint,
  Smartphone,
  Network,
  CheckCircle,
  Star,
  Shield,
  Wrench,
  Building,
  Home,
  Dumbbell,
  GraduationCap,
  Factory,
  Video,
  HelpCircle,
  Clock,
  MapPin,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/partners/zk-teco",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full min-h-[500px] lg:min-h-[600px] xl:min-h-[85vh] 2xl:min-h-[75vh] 3xl:min-h-[65vh]  bg-blue-50 flex items-center py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-4 lg:gap-6 max-w-full lg:max-w-[569px] xl:max-w-[640px]">
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] font-semibold leading-[140%] text-zkteco-text-dark">
                ZKTeco Access Control & Biometric Solutions
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-[22px] text-zkteco-text-medium leading-[140%]">
                Advanced Biometric Entry, Card Readers, and Standalone Systems |
                Installed by IDR Technology Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-8">
                <Link href={"/contact"}>
                  <Button className="bg-[#052557] hover:bg-[#041e44] text-white px-6 lg:px-7 xl:px-8 py-3 lg:py-4  h-auto lg:h-[54px] xl:h-[60px] text-base lg:text-lg whitespace-nowrap cursor-pointer">
                    Schedule Demo
                  </Button>
                </Link>

                <Link href={"/contact"}>
                  <Button
                    variant="outline"
                    className="border-[#052557] text-[#052557] hover:bg-[#052557] hover:text-white px-6 lg:px-8 xl:px-9 py-3 lg:py-4 h-auto lg:h-[54px] xl:h-[60px] text-base lg:text-lg whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6d7475810597578f7263c5d4f164eb36d8e9b4d?width=1304"
                  alt="ZKTeco Access Control System"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast, Flexible Access Section */}
      <section className="w-full py-10 sm:py-12 lg:py-14 ]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-full sm:max-w-2xl lg:max-w-[861px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4 leading-[111%]">
              Fast, Flexible Access with Biometrics at the Core
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zkteco-text-gray leading-[150%]">
              ZKTeco delivers high-performance access control systems with an
              emphasis on biometric security, mobile access, and versatile
              reader configurations. From standalone fingerprint terminals to
              integrated multi-door systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-5 sm:p-6 text-center border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Fingerprint className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold ">
                  Biometric Security
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-[150%]">
                  Advanced fingerprint and facial recognition technology for
                  secure, contactless access control.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 sm:p-6 text-center border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold ">
                  Mobile Ready
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600  leading-[150%]">
                  Mobile credential support for modern, smartphone-based access
                  management.
                </p>
              </CardContent>
            </Card>

            <Card className="p-5 sm:p-6 text-center border-0 shadow-none bg-transparent sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0 space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Network className="w-7 h-5 sm:w-8 sm:h-6 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold ">
                  Flexible Systems
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600  leading-[150%]">
                  Standalone or networked configurations ideal for single doors
                  to full building deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ZKTeco Section */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-[#F9FAFB">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 max-w-[1920px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-5 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zkteco-text-dark leading-[111%]">
                Why ZKTeco
              </h2>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                      Fingerprint, Facial, Card & PIN Access
                    </h3>
                    <p className="text-sm sm:text-base text-zkteco-text-medium leading-[150%]">
                      Multiple authentication methods for maximum flexibility
                      and security.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                      All-in-One Devices
                    </h3>
                    <p className="text-sm sm:text-base text-zkteco-text-medium leading-[150%]">
                      Combine reader, controller, and lock relay in one compact
                      unit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                      ZKBioSecurity Platform
                    </h3>
                    <p className="text-sm sm:text-base text-zkteco-text-medium leading-[150%]">
                      Unified software for access, elevator, visitor, and video
                      integration.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                      Cost-Effective Hardware
                    </h3>
                    <p className="text-sm sm:text-base text-zkteco-text-medium leading-[150%]">
                      Powerful features without enterprise pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/136e0405a0d8f792e97a582d9c773b276da130f2?width=1168"
                  alt="ZKTeco Access Control Device"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with IDR Section */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-[#052557]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 max-w-[1920px]">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-full sm:max-w-xl lg:max-w-[630px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-3 sm:mb-4 leading-[111%]">
              Why Work with IDR?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-[140%] px-4">
              Certified expertise and reliable service for your ZKTeco
              installation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
            <Card className="bg-zkteco-card-blue border-0 p-5 sm:p-6 text-white">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zkteco-orange rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Star className="w-4 h-4 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Certified ZKTeco Installer
                </h3>
                <p className="text-sm sm:text-base text-white">
                  Official certification and training for optimal system
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-5 sm:p-6 text-white">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zkteco-orange rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Shield className="w-4 h-4 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-sm sm:text-base text-white">
                  NYS Alarm Certified with full insurance coverage for peace of
                  mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-5 sm:p-6 text-white sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zkteco-orange rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Wrench className="w-4 h-4 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Expert Integration
                </h3>
                <p className="text-sm sm:text-base text-white">
                  Seamless integration with cameras, intercoms, and third-party
                  systems.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl italic font-medium text-white leading-[150%] max-w-full sm:max-w-2xl lg:max-w-[1118px] mx-auto px-4">
              &quot;We design ZKTeco systems to do more than unlock doors — they
              simplify operations and improve security.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Where ZKTeco Shines Section */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-full sm:max-w-md lg:max-w-[390px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4 leading-[111%]">
              Where ZKTeco Shines
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zkteco-text-gray leading-[140%]">
              Versatile solutions for every environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            <Card className="bg-gray-100 border-0 p-4 sm:p-5 lg:p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Building className="size-3 md:size-5 2xl:size-6 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4">
                  Corporate Offices
                </h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Entry control and shared workspace management
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-0 p-4 sm:p-5 lg:p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Home className="size-3 md:size-5 2xl:size-6 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4">
                  Apartments & Condos
                </h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Secure residential access points and amenity areas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-0 p-4 sm:p-5 lg:p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Dumbbell className="size-3 md:size-5 2xl:size-6 text-purple-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4">
                  Gyms & Wellness
                </h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Member check-in and facility access control
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-0 p-4 sm:p-5 lg:p-6">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <GraduationCap className="size-3 md:size-5 2xl:size-6 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4">
                  Schools & Campus
                </h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Educational facility security and access management
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-0 p-4 sm:p-5 lg:p-6 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Factory className="size-3 md:size-5 2xl:size-6 text-red-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4">
                  Industrial Sites
                </h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  High-security entry and restricted area control
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Integration Section */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-full sm:max-w-md lg:max-w-[414px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zkteco-text-dark mb-3 sm:mb-4 leading-[111%]">
              Smart Integration
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zkteco-text-gray leading-[140%]">
              Connect ZKTeco with your existing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white shadow-lg border-0 p-5 sm:p-6 lg:p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark">
                    Elevator Control
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zkteco-text-gray">
                  Manage floor access by credential or biometric authentication
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 p-5 sm:p-6 lg:p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-4 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark">
                    Surveillance Integration
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zkteco-text-gray">
                  Log access events with linked video snapshots for enhanced
                  security
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 p-5 sm:p-6 lg:p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark">
                    Intercom Systems
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zkteco-text-gray">
                  Allow visitor verification through integrated communication
                  interfaces
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 p-5 sm:p-6 lg:p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zkteco-text-dark">
                    Time & Attendance
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zkteco-text-gray">
                  Streamline payroll and employee tracking with integrated
                  timekeeping
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Our Service Areas Section */}
      <section className="w-full py-10 sm:py-12 lg:py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px]">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4 leading-[111%]">
              Our Service Areas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-[140%] px-4">
              Professional ZKTeco installation across multiple regions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-[#1E40AF] border-0 p-5 sm:p-6 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Building className="w-7 h-5 sm:w-8 sm:h-6 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  New York City
                </h3>
                <p className="text-sm sm:text-base text-white">
                  All five boroughs covered
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E40AF] border-0 p-5 sm:p-6 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="w-4 h-5 sm:w-5 sm:h-6 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  New Jersey
                </h3>
                <p className="text-sm sm:text-base text-white">
                  North & Central regions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E40AF] border-0 p-5 sm:p-6 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  South Florida
                </h3>
                <p className="text-sm sm:text-base text-white">
                  Miami-Dade, Broward, Palm Beach
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E40AF] border-0 p-5 sm:p-6 text-center">
              <CardContent className="p-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-12 md:h-12 2xl:w-14 2xl:h-14 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  Nationwide
                </h3>
                <p className="text-sm sm:text-base text-white">
                  Multi-site deployments available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Talk Access Control Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="text-center max-w-full sm:max-w-2xl lg:max-w-[896px] mx-auto">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zkteco-text-dark mb-2 sm:mb-3 leading-[111%]">
                Let&apos;s Talk Access Control
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zkteco-text-gray mb-3 sm:mb-4 leading-[140%] px-4">
                Ready to upgrade your entry experience?
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-zkteco-text-gray leading-[150%] px-4">
                Need fingerprint or facial recognition-based entry? We&apos;ll
                build the right system for your space, workflow, and budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
            href="tel:+17185947865"
            aria-label="Call IDR Technology Solutions at 718-594-7865">
              <Button className="bg-[#052557]  text-white px-6 sm:px-8 md:px-10 xl:px-14 py-4 sm:py-5 h-auto sm:h-[62px] text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3  w-auto cursor-pointer">
                  <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] " />
                  Call Now
                </Button>
            </a>

                
 
              <Link href={"/contact"}>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 md:px-10 xl:px-14 py-4 sm:py-5 h-auto sm:h-[62px] text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 cursor-pointer w-auto"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
