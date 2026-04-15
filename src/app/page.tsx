import Hero from "@/components/sections/hero";
import CollabSection from "@/components/sections/collabs";
import ContactSection from "@/components/sections/contact";
import EventDetailSection from "@/components/sections/event-details";
import Escape2Section from "@/components/sections/escape-2";
import MerchandiseSection from "@/components/sections/merchandise";

// Dynamic so it always fetches fresh data from Supabase
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Landing() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <EventDetailSection />
      <Escape2Section />
      <CollabSection />
      <MerchandiseSection />
      <ContactSection />
    </div>
  );
}