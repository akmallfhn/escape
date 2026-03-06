import Cards from "@/components/sections/cards";
import ContactSection from "@/components/sections/contact";
import EventDetailSection from "@/components/sections/event-details";
import HeroVideo from "@/components/sections/hero-video";
import PastEvents from "@/components/sections/past-events";
import SeatPlan from "@/components/sections/seat-plan";
import TermsSection from "@/components/sections/terms";
import Why from "@/components/sections/why";
import LogoScroll from "@/components/ui/logo-stripe";

export default function Offline() {
    return (
        <div className="bg-black text-white overflow-hidden">
           <HeroVideo />
           <Why />
           <SeatPlan />
           <Cards />
           {/* <LogoScroll /> */}
           <PastEvents />
           <EventDetailSection />
           <TermsSection />
           <ContactSection />
           {/* <LogoScroll /> */}

        </div>
    )
}