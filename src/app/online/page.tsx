import ContactSection from "@/components/sections/contact";
import HeroOnline from "@/components/sections/hero-online";
import PlaylistSection from "@/components/sections/playlist";
import SpotifySection from "@/components/sections/spotify";
import StreamSection from "@/components/sections/stream";
import LogoScroll from "@/components/ui/logo-stripe";

export default function Offline() {
    return (
        <div className="bg-black text-white overflow-hidden">
          <HeroOnline />
          <PlaylistSection />
          <SpotifySection />
          <StreamSection />
          <ContactSection />
          <LogoScroll />

        </div>
    )
}