import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./_components/Card";
import {
  Shield,
  Bell,
  Car,
  Cloud,Check

} from "lucide-react"; 

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 lg:px-16 xl:px-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium text-eagle-gray-800 leading-tight">
                Eagle Eye Networks Video Surveillance
              </h1>
              <p className="text-lg md:text-xl text-eagle-gray-600 leading-relaxed">
                Smarter, Simpler, Safer Cloud Video — With the Cameras You Already Own
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-eagle-blue-600 hover:bg-eagle-blue-600/90 text-white bg-[#052557] px-8 py-6 text-lg rounded-lg"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-eagle-blue-600 text-eagle-blue-600 hover:bg-eagle-blue-50 px-8 py-6 text-lg rounded-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dbc1fa6eb5d3b7acf710b913c6548e69236c5340?width=1168"
                  alt="Eagle Eye Networks Dashboard"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Love Eagle Eye Networks */}
      <section className="px-4 py-16 lg:px-16 xl:px-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-medium text-eagle-gray-800 text-center mb-12">
            Why We Love Eagle Eye Networks
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-eagle-gray-600 leading-relaxed">
            <p>
              At IDR, we love Eagle Eye Networks because they make video surveillance smarter without locking you into proprietary hardware. 
              Their system is truly camera agnostic — meaning you can use almost any IP or even TVI camera, including cameras you already have on-site.
            </p>
            <p>
              Even better? Eagle Eye&apos;s powerful analytics and AI run at the edge, so you get smart detection and alerts regardless of which camera you&apos;re using. 
              With Eagle Eye, you unlock next-gen cloud capabilities without ripping and replacing your infrastructure.
            </p>
            <p>
              As a certified Eagle Eye partner and experienced integrator, IDR is here to help you take full advantage of this flexible, cloud-first platform.
            </p>
            <p>Eagle Eye integrates with many access control panels including Brivo</p>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye Networks? - Feature Cards */}
      <section className="px-4 py-16 lg:px-16 xl:px-28 bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-medium text-eagle-gray-800 text-center mb-16">
            Why Eagle Eye Networks?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Card 1 */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-eagle-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-eagle-blue-600" fill="currentColor" viewBox="0 0 30 24">
                    <path d="M0 15.75C0 19.4766 3.02344 22.5 6.75 22.5H24C27.3141 22.5 30 19.8141 30 16.5C30 13.5984 27.9375 11.175 25.2 10.6219C25.3922 10.1203 25.5 9.57187 25.5 9C25.5 6.51562 23.4844 4.5 21 4.5C20.0766 4.5 19.2141 4.78125 18.5016 5.25937C17.2031 3.00937 14.7797 1.5 12 1.5C7.85625 1.5 4.5 4.85625 4.5 9C4.5 9.12656 4.50469 9.25313 4.50937 9.37969C1.88437 10.3031 0 12.8062 0 15.75Z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">100% Cloud Managed VMS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  View and manage footage from anywhere — no onsite servers or complicated software needed.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-eagle-green-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-6 text-eagle-green-600" fill="currentColor" viewBox="0 0 28 24">
                    <path d="M0.5 6C0.5 4.34531 1.84531 3 3.5 3H15.5C17.1547 3 18.5 4.34531 18.5 6V18C18.5 19.6547 17.1547 21 15.5 21H3.5C1.84531 21 0.5 19.6547 0.5 18V6ZM26.7078 4.67813C27.1953 4.94063 27.5 5.44688 27.5 6V18C27.5 18.5531 27.1953 19.0594 26.7078 19.3219C26.2203 19.5844 25.6297 19.5562 25.1656 19.2469L20.6656 16.2469L20 15.8016V15V9V8.19844L20.6656 7.75312L25.1656 4.75313C25.625 4.44844 26.2156 4.41563 26.7078 4.67813Z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">Camera Agnostic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Use virtually any camera — Eagle Eye supports IP, TVI, and ONVIF-compliant systems, old or new.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-eagle-purple-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-eagle-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.625 0C10.0734 0 11.25 1.17656 11.25 2.625V21.375C11.25 22.8234 10.0734 24 8.625 24C7.27031 24 6.15469 22.9734 6.01406 21.6516C5.77031 21.7172 5.5125 21.75 5.25 21.75C3.59531 21.75 2.25 20.4047 2.25 18.75C2.25 18.4031 2.31094 18.0656 2.41875 17.7562C1.00312 17.2219 0 15.8531 0 14.25C0 12.7547 0.876562 11.4609 2.14687 10.8609C1.73906 10.35 1.5 9.70312 1.5 9C1.5 7.56094 2.5125 6.36094 3.8625 6.06562C3.7875 5.80781 3.75 5.53125 3.75 5.25C3.75 3.84844 4.71563 2.66719 6.01406 2.33906C6.15469 1.02656 7.27031 0 8.625 0ZM15.375 0C16.7297 0 17.8406 1.02656 17.9859 2.33906C19.2891 2.66719 20.25 3.84375 20.25 5.25C20.25 5.53125 20.2125 5.80781 20.1375 6.06562C21.4875 6.35625 22.5 7.56094 22.5 9C22.5 9.70312 22.2609 10.35 21.8531 10.8609C23.1234 11.4609 24 12.7547 24 14.25C24 15.8531 22.9969 17.2219 21.5812 17.7562C21.6891 18.0656 21.75 18.4031 21.75 18.75C21.75 20.4047 20.4047 21.75 18.75 21.75C18.4875 21.75 18.2297 21.7172 17.9859 21.6516C17.8453 22.9734 16.7297 24 15.375 24C13.9266 24 12.75 22.8234 12.75 21.375V2.625C12.75 1.17656 13.9266 0 15.375 0Z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">AI and Analytics on the Edge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Real-time alerts for loitering, line-crossing, vehicles, license plates, and more — even on legacy cameras.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-eagle-orange-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-5 h-6 text-eagle-orange-600" fill="currentColor" viewBox="0 0 18 24">
                    <path d="M2.25 0C1.00781 0 0 1.00781 0 2.25V21.75C0 22.9922 1.00781 24 2.25 24H6.75V20.25C6.75 19.0078 7.75781 18 9 18C10.2422 18 11.25 19.0078 11.25 20.25V24H15.75C16.9922 24 18 22.9922 18 21.75V2.25C18 1.00781 16.9922 0 15.75 0H2.25ZM3 11.25C3 10.8375 3.3375 10.5 3.75 10.5H5.25C5.6625 10.5 6 10.8375 6 11.25V12.75C6 13.1625 5.6625 13.5 5.25 13.5H3.75C3.3375 13.5 3 13.1625 3 12.75V11.25ZM8.25 10.5H9.75C10.1625 10.5 10.5 10.8375 10.5 11.25V12.75C10.5 13.1625 10.1625 13.5 9.75 13.5H8.25C7.8375 13.5 7.5 13.1625 7.5 12.75V11.25C7.5 10.8375 7.8375 10.5 8.25 10.5ZM12 11.25C12 10.8375 12.3375 10.5 12.75 10.5H14.25C14.6625 10.5 15 10.8375 15 11.25V12.75C15 13.1625 14.6625 13.5 14.25 13.5H12.75C12.3375 13.5 12 13.1625 12 12.75V11.25ZM3.75 4.5H5.25C5.6625 4.5 6 4.8375 6 5.25V6.75C6 7.1625 5.6625 7.5 5.25 7.5H3.75C3.3375 7.5 3 7.1625 3 6.75V5.25C3 4.8375 3.3375 4.5 3.75 4.5ZM7.5 5.25C7.5 4.8375 7.8375 4.5 8.25 4.5H9.75C10.1625 4.5 10.5 4.8375 10.5 5.25V6.75C10.5 7.1625 10.1625 7.5 9.75 7.5H8.25C7.8375 7.5 7.5 7.1625 7.5 6.75V5.25ZM12.75 4.5H14.25C14.6625 4.5 15 4.8375 15 5.25V6.75C15 7.1625 14.6625 7.5 14.25 7.5H12.75C12.3375 7.5 12 7.1625 12 6.75V5.25C12 4.8375 12.3375 4.5 12.75 4.5Z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">Enterprise-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Built for scale: manage hundreds of cameras across multiple locations with one clean dashboard.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-eagle-red-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-eagle-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C12.2156 0 12.4313 0.046875 12.6281 0.135938L21.4547 3.88125C22.486 4.31719 23.2547 5.33438 23.25 6.5625C23.2266 11.2125 21.3141 19.7203 13.2375 23.5875C12.4547 23.9625 11.5453 23.9625 10.7625 23.5875C2.68596 19.7203 0.773459 11.2125 0.750021 6.5625C0.745334 5.33438 1.51408 4.31719 2.54533 3.88125L11.3766 0.135938C11.5688 0.046875 11.7844 0 12 0ZM12 3.13125V20.85C18.4688 17.7188 20.2078 10.7859 20.25 6.62813L12 3.13125Z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">Top-Tier Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Encrypted video streams, user-based permissions, and full audit logs ensure compliance and peace of mind.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How IDR Delivers */}
      <section className="px-4 py-16 lg:px-16 xl:px-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-medium text-eagle-gray-800 text-center mb-8">
            How IDR Delivers
          </h2>
          <p className="text-lg md:text-xl text-eagle-gray-600 text-center mb-16">
            We&apos;re not just resellers — we&apos;re Eagle Eye experts. Our services include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-eagle-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-eagle-gray-800">
                  Infrastructure assessments and bandwidth planning
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-eagle-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-eagle-gray-800">
                  Eagle Eye Bridge or CMVR installation and setup
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-eagle-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-eagle-gray-800">
                  Post-install support, training, and optimization
                </span>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-eagle-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-eagle-gray-800">
                  Camera system design (reuse, replace, or hybrid)
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-eagle-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium text-eagle-gray-800">
                  Fine-tuned alerting, retention, and mobile access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Eagle Eye Excels */}
      <section className="px-4 py-16 lg:px-16 xl:px-28 bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-medium text-eagle-gray-800 text-center mb-16">
            Where Eagle Eye Excels
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="bg-white shadow-lg border-0 p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-eagle-gray-800">Multi-Tenant & Office Buildings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Unify your locations into one view with cloud VMS and custom roles for staff or tenants.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-lg border-0 p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-eagle-gray-800">Schools & Campuses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Enable secure remote viewing and AI alerts while retaining full control over user access.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white shadow-lg border-0 p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-eagle-gray-800">Retail & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Use customer flow analytics, POS integration, and mobile access to optimize security and operations.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white shadow-lg border-0 p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-eagle-gray-800">Hybrid Camera Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-eagle-gray-600 text-base leading-relaxed">
                  Keep your existing cameras, add smart features, and push it all to the cloud. It&apos;s that simple.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration-Ready */}
      <section className="px-4 py-16 lg:px-16 xl:px-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-medium text-eagle-gray-800 text-center mb-8">
            Integration-Ready
          </h2>
          <p className="text-lg md:text-xl text-eagle-gray-600 text-center mb-16">
            Eagle Eye easily connects to:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Integration 1 */}
            <div className="bg-eagle-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-eagle-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-8" fill="currentColor" viewBox="0 0 28 31">
                  <path d="M9.3125 9.1875V12H18.6875V9.1875C18.6875 6.59766 16.5898 4.5 14 4.5C11.4102 4.5 9.3125 6.59766 9.3125 9.1875ZM5.5625 12V9.1875C5.5625 4.5293 9.3418 0.75 14 0.75C18.6582 0.75 22.4375 4.5293 22.4375 9.1875V12H23.375C25.4434 12 27.125 13.6816 27.125 15.75V27C27.125 29.0684 25.4434 30.75 23.375 30.75H4.625C2.55664 30.75 0.875 29.0684 0.875 27V15.75C0.875 13.6816 2.55664 12 4.625 12H5.5625Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-eagle-gray-800">Access Control Platforms</h3>
            </div>

            {/* Integration 2 */}
            <div className="bg-eagle-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-eagle-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-8" fill="currentColor" viewBox="0 0 28 31">
                  <path d="M13.9989 0.75C12.9618 0.75 12.1239 1.58789 12.1239 2.625V3.75C7.84653 4.61719 4.62388 8.40234 4.62388 12.9375V14.0391C4.62388 16.793 3.61021 19.4531 1.78208 21.5156L1.34849 22.002C0.8563 22.5527 0.739113 23.3438 1.03794 24.0176C1.33677 24.6914 2.0106 25.125 2.74888 25.125H25.2489C25.9872 25.125 26.6551 24.6914 26.9598 24.0176C27.2645 23.3438 27.1415 22.5527 26.6493 22.002L26.2157 21.5156C24.3876 19.4531 23.3739 16.7988 23.3739 14.0391V12.9375C23.3739 8.40234 20.1512 4.61719 15.8739 3.75V2.625C15.8739 1.58789 15.036 0.75 13.9989 0.75ZM16.6532 29.6543C17.3563 28.9512 17.7489 27.9961 17.7489 27H13.9989H10.2489C10.2489 27.9961 10.6415 28.9512 11.3446 29.6543C12.0477 30.3574 13.0028 30.75 13.9989 30.75C14.995 30.75 15.9501 30.3574 16.6532 29.6543Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-eagle-gray-800">Alarm Panels</h3>
            </div>

            {/* Integration 3 */}
            <div className="bg-eagle-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-eagle-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 30 31">
                  <path d="M7.92188 7.62891L6.39258 12H23.6074L22.0781 7.62891C21.8145 6.87891 21.1055 6.375 20.3086 6.375H9.69141C8.89453 6.375 8.18555 6.87891 7.92188 7.62891ZM2.32031 12.2812L4.38281 6.39258C5.17383 4.13672 7.30078 2.625 9.69141 2.625H20.3086C22.6992 2.625 24.8262 4.13672 25.6172 6.39258L27.6797 12.2812C29.0391 12.8438 30 14.1855 30 15.75V24.1875V27C30 28.0371 29.1621 28.875 28.125 28.875H26.25C25.2129 28.875 24.375 28.0371 24.375 27V24.1875H5.625V27C5.625 28.0371 4.78711 28.875 3.75 28.875H1.875C0.837891 28.875 0 28.0371 0 27V24.1875V15.75C0 14.1855 0.960937 12.8438 2.32031 12.2812ZM7.5 17.625C7.5 17.1277 7.30246 16.6508 6.95083 16.2992C6.59919 15.9475 6.12228 15.75 5.625 15.75C5.12772 15.75 4.65081 15.9475 4.29917 16.2992C3.94754 16.6508 3.75 17.1277 3.75 17.625C3.75 18.1223 3.94754 18.5992 4.29917 18.9508C4.65081 19.3025 5.12772 19.5 5.625 19.5C6.12228 19.5 6.59919 19.3025 6.95083 18.9508C7.30246 18.5992 7.5 18.1223 7.5 17.625ZM24.375 19.5C24.8723 19.5 25.3492 19.3025 25.7008 18.9508C26.0525 18.5992 26.25 18.1223 26.25 17.625C26.25 17.1277 26.0525 16.6508 25.7008 16.2992C25.3492 15.9475 24.8723 15.75 24.375 15.75C23.8777 15.75 23.4008 15.9475 23.0492 16.2992C22.6975 16.6508 22.5 17.1277 22.5 17.625C22.5 18.1223 22.6975 18.5992 23.0492 18.9508C23.4008 19.3025 23.8777 19.5 24.375 19.5Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-eagle-gray-800">License Plate Recognition</h3>
            </div>

            {/* Integration 4 */}
            <div className="bg-eagle-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-eagle-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-8" fill="currentColor" viewBox="0 0 38 31">
                  <path d="M0.25 20.4375C0.25 25.0957 4.0293 28.875 8.6875 28.875H30.25C34.3926 28.875 37.75 25.5176 37.75 21.375C37.75 17.748 35.1719 14.7188 31.75 14.0273C31.9902 13.4004 32.125 12.7148 32.125 12C32.125 8.89453 29.6055 6.375 26.5 6.375C25.3457 6.375 24.2676 6.72656 23.377 7.32422C21.7539 4.51172 18.7246 2.625 15.25 2.625C10.0703 2.625 5.875 6.82031 5.875 12C5.875 12.1582 5.88086 12.3164 5.88672 12.4746C2.60547 13.6289 0.25 16.7578 0.25 20.4375Z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-eagle-gray-800">Cloud Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 lg:px-16 xl:px-28 bg-[#2563EB] ">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
            Get Started With Eagle Eye + IDR
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-12">
            Whether you&apos;re upgrading an outdated system or building something new, Eagle Eye&apos;s flexibility and intelligence make it a standout choice. 
            Let IDR design a system that works for your building, your budget, and your team.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-eagle-blue-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
