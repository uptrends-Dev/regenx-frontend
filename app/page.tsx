// import Image from "next/image";
import Hero from "@/components/website/landingPage/Hero";
import MarketOpportunityHighlight from "@/components/website/landingPage/MarketOpportunityHighlight";
import MissionSection from "@/components/website/landingPage/MissionSection";
import TestimonialsOrPartners from "@/components/website/landingPage/TestimonialsOrPartners";
import ThreePillarsSnapshot from "@/components/website/landingPage/ThreePillarsSnapshot";
export default function Home() {
  return (
    <div className="">
      <>
        <Hero backgroundUrl="/images/p2.jpg" />
        <MissionSection />
        <ThreePillarsSnapshot />
        <MarketOpportunityHighlight />
        <TestimonialsOrPartners />
      </>
    </div>
  );
}
