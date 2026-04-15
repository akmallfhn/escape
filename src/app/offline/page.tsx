import Cards from "@/components/sections/cards";
import ContactSection from "@/components/sections/contact";
import EventDetailSection from "@/components/sections/event-details";
import HeroVideo from "@/components/sections/hero-video";
import PastEvents from "@/components/sections/past-events";
import SeatPlan from "@/components/sections/seat-plan";
import TermsSection from "@/components/sections/terms";
import Why from "@/components/sections/why";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Offline() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <HeroVideo />
      <Why />
      <SeatPlan />
      <Cards />
      <PastEvents />
      <EventDetailSection />
      <TermsSection />
      <ContactSection />
    </div>
  );
}