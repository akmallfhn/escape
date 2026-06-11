import Image from "next/image";
import { getHeroEventData } from "@/lib/supabase-server";
import HeroYoutubeBackground from "./hero-youtube-bg";

export default async function HeroVideo() {
  const data = await getHeroEventData('offline');

  const bgUrl = data?.background_photo_url || null;
  const pngUrl = data?.png_image_url || '/images/escape-room.png';
  const button1Text = data?.button1_text || 'Buy Ticket';
  const button1Url = data?.button1_url || 'https://drsn.me/escapemakassar2026';

  return (
    <section className="relative w-full overflow-hidden bg-black h-[75vh] sm:h-[80vh] md:aspect-video md:h-auto">
      {/* YouTube background */}
      {!bgUrl && <HeroYoutubeBackground />}

      {/* Custom background image if set in admin */}
      {bgUrl && (
        <div className="absolute inset-0">
          <Image src={bgUrl} alt="" fill priority className="object-cover" />
        </div>
      )}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[110%] bg-linear-to-t from-black to-transparent" />

      {/* bottom center content */}
      <div className="absolute inset-x-0 bottom-[8%] flex flex-col items-center">
        <Image
          src={pngUrl}
          alt="Live Podcast Escape Room Makassar"
          width={400}
          height={200}
          priority
          className="w-48 sm:w-64 md:w-80 lg:w-100 object-contain"
        />

        <div className="mt-4 flex gap-3 sm:gap-4">
          <a
            href={button1Url}
            target="_blank"
            className="rounded-lg bg-[#DA393C] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b52b2d] active:scale-95 sm:px-8 sm:py-3 sm:text-base"
          >
            {button1Text}
          </a>
        </div>
      </div>
    </section>
  );
}