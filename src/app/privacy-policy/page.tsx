/** @format */

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title:"Privacy Policy | IDR Technologies",
  description:"Read the IDR Technologies privacy policy to understand how we collect, use, and protect your information and website data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-white text-[#1E1E1E] py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#052557] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Effective Date: <span className="font-medium">July 15, 2025</span>
          </p>
        </div>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
          At <strong>IDR Technology Solutions</strong>, your privacy is
          important to us. This Privacy Policy outlines how we collect, use, and
          protect the information you provide through our website, forms, and
          communication channels.
        </p>

        {/* Sections */}
        <div className="space-y-10 sm:space-y-12">
          {/* Information We Collect */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              Information We Collect
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-3">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, job title, and other information
                submitted through our contact forms or lead capture forms.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, and usage data via cookies and
                analytics tools.
              </li>
              <li>
                <strong>Marketing Data:</strong> Information on how you interact
                with our site, including page views and click activity (e.g.,
                through LinkedIn, Google Ads, Facebook).
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              We may use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-3">
              <li>Respond to inquiries and schedule consultations or site visits</li>
              <li>Send relevant follow-ups or promotional offers</li>
              <li>Provide quotes or service information</li>
              <li>Improve our website and advertising performance</li>
              <li>Comply with legal or contractual obligations</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              We use cookies and third-party tools (such as Google Analytics and
              LinkedIn Insight Tag) to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-3">
              <li>Measure website traffic</li>
              <li>Understand visitor behavior</li>
              <li>Run targeted advertisements and remarketing campaigns</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              You can adjust your browser settings to refuse cookies or alert
              you when they are being used.
            </p>
          </section>

          {/* How We Protect Your Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              How We Protect Your Information
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We implement reasonable security measures to protect your personal
              data from unauthorized access, disclosure, or misuse. However, no
              online transmission is 100% secure.
            </p>
          </section>

          {/* Third-Party Disclosure */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              Third-Party Disclosure
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information. We may
              share your data with trusted service providers (like CRM
              platforms, ad networks, or email tools) strictly to help us
              operate and grow our business.
            </p>
          </section>

          {/* Your Choices */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              Your Choices
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              You may:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-3">
              <li>Opt out of marketing emails at any time</li>
              <li>Request that we update or delete your information</li>
              <li>
                Contact us with privacy-related concerns at:{" "}
                <a
                  href="mailto:sales@idrtechnologysolutions.com"
                  className="text-[#052557] underline hover:text-[#021b3f]"
                >
                  sales@idrtechnologysolutions.com
                </a>
              </li>
            </ul>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              Compliance
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our practices aim to comply with relevant privacy regulations,
              including the California Consumer Privacy Act (CCPA) and General
              Data Protection Regulation (GDPR), where applicable.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#052557] mb-4">
              Policy Updates
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We may update this policy periodically. Changes will be posted on
              this page with the updated date.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
