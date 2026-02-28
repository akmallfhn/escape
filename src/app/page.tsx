import CollabSection from "@/components/sections/collabs";
import ContactSection from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import PastEventSection from "@/components/sections/past-events";
import TalentsSection from "@/components/sections/tallents";
import TimelineSection from "@/components/sections/timeline";
import WatchSection from "@/components/sections/watch";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import LogoScroll from "@/components/ui/logo-stripe";
import RedStripe from "@/components/ui/red-stripe";

// Reusable Infinite Scroll Component

export default function Landing() {
  return (
    <div className=" bg-black text-white">
      <Header />

      <Hero />

      <LogoScroll />

      <WatchSection />

      <LogoScroll />

      <TalentsSection />

      <TimelineSection />

      <CollabSection />

      <RedStripe />

      <PastEventSection />

      <ContactSection />

      <LogoScroll />

      <Footer />
    </div>
  );
}
