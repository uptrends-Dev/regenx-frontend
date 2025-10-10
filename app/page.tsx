// import Image from "next/image";
import Hero from "@/components/website/landingPage/Hero";
import MarketOpportunityHighlight from "@/components/website/landingPage/MarketOpportunityHighlight";
import MissionSection from "@/components/website/landingPage/MissionSection";
import { TestimonialsOrPartners } from "../components/website/landingPage/testiDemo";
import ThreePillarsSnapshot from "@/components/website/landingPage/ThreePillarsSnapshot";
import RegenxModel from "@/components/website/landingPage/modals";
import OurModelSection from "@/components/website/landingPage/modals";
import RegenxInnovateSlide from "@/components/website/landingPage/RegenxInnovateSlide";
import RegenxSolutionSection from "@/components/website/landingPage/RegenxSolutionSection";
import ContactSection from "@/components/website/landingPage/ContactSection";
export default function Home() {
  return (
    <div className="">
      <>
        <Hero backgroundUrl="/images/p2.jpg" />
        <MissionSection />
        <MarketOpportunityHighlight />
        <ThreePillarsSnapshot />
        <RegenxInnovateSlide />
        <OurModelSection />
        <RegenxSolutionSection />
        <ContactSection />
       
      </>
    </div>
  );
}
