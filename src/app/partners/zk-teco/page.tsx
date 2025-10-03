import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./_components/ui/card";
import { Phone, Calendar, Fingerprint, Smartphone, Network, CheckCircle, Star, Shield, Wrench, Building, Home, Dumbbell, GraduationCap, Factory, Video, HelpCircle, Clock, MapPin, Globe } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full h-[699px] bg-zkteco-hero-bg flex items-center">
        <div className="container mx-auto px-28 flex items-center justify-between">
          <div className="flex flex-col gap-6 max-w-[569px]">
            <h1 className="text-[48px] font-semibold leading-[140%] text-zkteco-text-dark">
              ZKTeco Access Control & Biometric Solutions
            </h1>
            <p className="text-xl text-zkteco-text-medium leading-[140%]">
              Advanced Biometric Entry, Card Readers, and Standalone Systems | Installed by IDR Technology Solutions
            </p>
            <div className="flex gap-4 mt-8">
              <Button className="bg-zkteco-primary-blue hover:bg-zkteco-primary-blue/90 text-white bg-[#052557] px-7 py-4 h-[54px] text-lg">
                Schedule Demo
              </Button>
              <Button variant="outline" className="border-zkteco-primary-blue text-zkteco-primary-blue hover:bg-zkteco-primary-blue hover:text-white px-8 py-4 h-[54px] text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d6d7475810597578f7263c5d4f164eb36d8e9b4d?width=1304" 
              alt="ZKTeco Access Control System" 
              className="w-[652px] h-[368px] rounded-[10px]"
            />
          </div>
        </div>
      </section>

      {/* Fast, Flexible Access Section */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-28">
          <div className="text-center mb-16 max-w-[861px] mx-auto">
            <h2 className="text-4xl font-semibold text-zkteco-text-dark mb-4 leading-[111%]">
              Fast, Flexible Access with Biometrics at the Core
            </h2>
            <p className="text-xl text-zkteco-text-gray leading-[150%]">
              ZKTeco delivers high-performance access control systems with an emphasis on biometric security, mobile access, and versatile reader configurations. From standalone fingerprint terminals to integrated multi-door systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-none bg-white">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Fingerprint className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-zkteco-text-dark">Biometric Security</h3>
                <p className="text-xl text-zkteco-text-gray leading-[150%]">
                  Advanced fingerprint and facial recognition technology for secure, contactless access control.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-none bg-white">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-zkteco-text-dark">Mobile Ready</h3>
                <p className="text-xl text-zkteco-text-gray leading-[150%]">
                  Mobile credential support for modern, smartphone-based access management.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-none bg-white">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Network className="w-8 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-zkteco-text-dark">Flexible Systems</h3>
                <p className="text-xl text-zkteco-text-gray leading-[150%]">
                  Standalone or networked configurations ideal for single doors to full building deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ZKTeco Section */}
      <section className="w-full py-16 bg-zkteco-section-gray">
        <div className="container mx-auto px-28 flex gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-semibold text-zkteco-text-dark leading-[111%]">Why ZKTeco</h2>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                    Fingerprint, Facial, Card & PIN Access
                  </h3>
                  <p className="text-zkteco-text-medium leading-[150%]">
                    Multiple authentication methods for maximum flexibility and security.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                    All-in-One Devices
                  </h3>
                  <p className="text-zkteco-text-medium leading-[150%]">
                    Combine reader, controller, and lock relay in one compact unit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                    ZKBioSecurity Platform
                  </h3>
                  <p className="text-zkteco-text-medium leading-[150%]">
                    Unified software for access, elevator, visitor, and video integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zkteco-text-dark leading-[156%]">
                    Cost-Effective Hardware
                  </h3>
                  <p className="text-zkteco-text-medium leading-[150%]">
                    Powerful features without enterprise pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/136e0405a0d8f792e97a582d9c773b276da130f2?width=1168" 
              alt="ZKTeco Access Control Device" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Work with IDR Section */}
      <section className="w-full py-16 bg-zkteco-primary-blue">
        <div className="container mx-auto px-28">
          <div className="text-center mb-16 max-w-[630px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 leading-[111%]">
              Why Work with IDR?
            </h2>
            <p className="text-lg sm:text-xl text-zkteco-light-blue leading-[140%]">
              Certified expertise and reliable service for your ZKTeco installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-zkteco-card-blue border-0 p-6 text-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-zkteco-orange rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Certified ZKTeco Installer</h3>
                <p className="text-zkteco-light-blue">
                  Official certification and training for optimal<br />
                  system performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-6 text-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-zkteco-orange rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Licensed & Insured</h3>
                <p className="text-zkteco-light-blue">
                  NYS Alarm Certified with full insurance<br />
                  coverage for peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-6 text-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-zkteco-orange rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Integration</h3>
                <p className="text-zkteco-light-blue">
                  Seamless integration with cameras,<br />
                  intercoms, and third-party systems.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg sm:text-xl lg:text-2xl italic font-medium text-white leading-[150%] max-w-[1118px] mx-auto px-4">
              &quot;We design ZKTeco systems to do more than unlock doors — they simplify operations and improve security.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Where ZKTeco Shines Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-28">
          <div className="text-center mb-16 max-w-[390px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zkteco-text-dark mb-4 leading-[111%]">
              Where ZKTeco Shines
            </h2>
            <p className="text-lg sm:text-xl text-zkteco-text-gray leading-[140%]">
              Versatile solutions for every environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-zkteco-section-gray border-0 p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-3 h-4 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zkteco-text-dark mb-4">Corporate Offices</h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Entry control and shared workspace management
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-section-gray border-0 p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-5 h-4 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zkteco-text-dark mb-4">Apartments & Condos</h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Secure residential access points and amenity areas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-section-gray border-0 p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Dumbbell className="w-5 h-4 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zkteco-text-dark mb-4">Gyms & Wellness</h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Member check-in and facility access control
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-section-gray border-0 p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-5 h-4 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zkteco-text-dark mb-4">Schools & Campus</h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  Educational facility security and access management
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-section-gray border-0 p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-5 h-4 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zkteco-text-dark mb-4">Industrial Sites</h3>
                <p className="text-zkteco-text-gray text-sm sm:text-base">
                  High-security entry and restricted area control
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Integration Section */}
      <section className="w-full py-16 bg-zkteco-section-gray">
        <div className="container mx-auto px-28">
          <div className="text-center mb-16 max-w-[414px] mx-auto">
            <h2 className="text-4xl font-semibold text-zkteco-text-dark mb-4 leading-[111%]">
              Smart Integration
            </h2>
            <p className="text-xl text-zkteco-text-gray leading-[140%]">
              Connect ZKTeco with your existing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zkteco-text-dark">Elevator Control</h3>
                </div>
                <p className="text-zkteco-text-gray">
                  Manage floor access by credential or biometric authentication
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-4 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zkteco-text-dark">Surveillance Integration</h3>
                </div>
                <p className="text-zkteco-text-gray">
                  Log access events with linked video snapshots for enhanced<br />
                  security
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zkteco-text-dark">Intercom Systems</h3>
                </div>
                <p className="text-zkteco-text-gray">
                  Allow visitor verification through integrated communication<br />
                  interfaces
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zkteco-text-dark">Time & Attendance</h3>
                </div>
                <p className="text-zkteco-text-gray">
                  Streamline payroll and employee tracking with integrated<br />
                  timekeeping
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Service Areas Section */}
      <section className="w-full py-16 bg-blue-800">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white mb-4 leading-[111%]">
              Our Service Areas
            </h2>
            <p className="text-xl text-zkteco-light-blue leading-[140%]">
              Professional ZKTeco installation across multiple regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-zkteco-card-blue border-0 p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">New York City</h3>
                <p className="text-zkteco-light-blue">All five boroughs covered</p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-5 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">New Jersey</h3>
                <p className="text-zkteco-light-blue">North & Central regions</p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">South Florida</h3>
                <p className="text-zkteco-light-blue">
                  Miami-Dade, Broward, Palm<br />
                  Beach
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zkteco-card-blue border-0 p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-zkteco-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Nationwide</h3>
                <p className="text-zkteco-light-blue">
                  Multi-site deployments<br />
                  available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Talk Access Control Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-68">
          <div className="text-center max-w-[896px] mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-semibold text-zkteco-text-dark mb-3 leading-[111%]">
                Let&apos;s Talk Access Control
              </h2>
              <p className="text-xl text-zkteco-text-gray mb-4 leading-[140%]">
                Ready to upgrade your entry experience?
              </p>
              <p className="text-lg text-zkteco-text-gray leading-[150%]">
                Need fingerprint or facial recognition-based entry? We&apos;ll build the right system for your space, workflow, and budget.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-zkteco-primary-blue hover:bg-zkteco-primary-blue/90 text-white px-8 py-5 h-[62px] text-lg flex items-center gap-3">
                <Phone className="w-[18px] h-[18px]" />
                Call Now
              </Button>
              <Button variant="outline" className="border-zkteco-primary-blue text-zkteco-primary-blue hover:bg-zkteco-primary-blue hover:text-white px-8 py-5 h-[62px] text-lg flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
