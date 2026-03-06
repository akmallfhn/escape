import CollabSection from "@/components/sections/collabs";
import ContactSection from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import LogoScroll from "@/components/ui/logo-stripe";
import EventDetailSection from "@/components/sections/event-details";
import Escape2Section from "@/components/sections/escape-2";
import MerchandiseSection from "@/components/sections/merchandise";
export const dynamic = 'force-static';



// Reusable Infinite Scroll Component

export default function Landing() {
  return (
    <div className="bg-black text-white">      

      <Hero />

      <EventDetailSection /> 

      {/* <LogoScroll /> */}

      <Escape2Section /> 

      <CollabSection />

      {/* <LogoScroll /> */}

      <MerchandiseSection />

      <ContactSection />

      {/* <LogoScroll /> */}

    </div>
  );
}
