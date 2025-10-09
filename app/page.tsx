// import Image from "next/image";
import Hero from "@/components/website/landingPage/Hero";
import MarketOpportunityHighlight from "@/components/website/landingPage/MarketOpportunityHighlight";
import MissionSection from "@/components/website/landingPage/MissionSection";
import { TestimonialsOrPartners } from "../components/website/landingPage/testiDemo";
import ThreePillarsSnapshot from "@/components/website/landingPage/ThreePillarsSnapshot";
import RegenxModel from "@/components/website/landingPage/modals";
import OurModelSection from "@/components/website/landingPage/modals";
import RegenxInnovateSlide from "@/components/website/landingPage/RegenxInnovateSlide";
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
        {/* <TestimonialsOrPartners /> */}
        {/* <RegenxModel
          pillar2Bg={{
            url: "/images/lab-1.jpg",
            overlayClassName: "bg-white/75",
          }}
          pillar3Bg={{
            url: "/images/lab-2.jpg",
            overlayClassName: "bg-white/75",
          }}
        /> */}
      </>
    </div>
  );
}
