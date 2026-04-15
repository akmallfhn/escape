import ContactSection from "@/components/sections/contact";
import HeroOnline from "@/components/sections/hero-online";
import PlaylistSection from "@/components/sections/playlist";
import SpotifySection from "@/components/sections/spotify";
import StreamSection from "@/components/sections/stream";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Online() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <HeroOnline />
      <PlaylistSection />
      <SpotifySection />
      <StreamSection />
      <ContactSection />
    </div>
  );
}