import React from "react";
import Hero from "./Hero";
import MissionSection from "./MissionSection";
import ThreePillarsSnapshot from "./ThreePillarsSnapshot";
import MarketOpportunityHighlight from "./MarketOpportunityHighlight";
import TestimonialsOrPartners from "./TestimonialsOrPartners";
const LandingPage = () => {
  return (
    <>
      <Hero backgroundUrl="/images/p2.jpg" />
      {/* <MissionSection /> */}
      <MissionSection />
      <ThreePillarsSnapshot />
      <MarketOpportunityHighlight />
      <TestimonialsOrPartners />
    </>
  );
};

export default LandingPage;
