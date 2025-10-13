/** @format */

import AlphaTouchCTA from "./_components/AlphaTouchCTA";
import AlphaTouchDemo from "./_components/AlphaTouchDemo";
import AlphaTouchFeatures from "./_components/AlphaTouchFeatures";
import AlphaTouchHero from "./_components/AlphaTouchHero";
import AlphaTouchIntegration from "./_components/AlphaTouchIntegration";
import AlphaTouchPropertyTypes from "./_components/AlphaTouchPropertyTypes";
import AlphaTouchResidentBenefits from "./_components/AlphaTouchResidentBenefits";
import AlphaTouchSIPRelay from "./_components/AlphaTouchSIPRelay";



export default function AlphaTouchPage() {
  return (
    <div className="min-h-screen bg-white">
      <AlphaTouchHero />
      <AlphaTouchFeatures />
      <AlphaTouchDemo />
      <AlphaTouchSIPRelay />
      <AlphaTouchPropertyTypes />
      <AlphaTouchResidentBenefits />
      <AlphaTouchIntegration />
      <AlphaTouchCTA />
    </div>
  );
}
