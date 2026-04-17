import Image from "next/image";
import { InfiniteScrollGallery } from "../ui/infinite-gallery";
import { getHeroEventData } from "@/lib/supabase-server";

export default async function Hero() {
  const data = await getHeroEventData('dashboard');

  const bgUrl = data?.background_photo_url || '/images/hero3.png';
  const button1Text = data?.button1_text || 'Buy Ticket';
  const button1Url = data?.button1_url || 'https://drsn.me/escapemakassar2026';
  const button2Text = data?.button2_text || 'Check Details';
  const button2Url = data?.button2_url || '/offline';

  return (
    <section className="relative bg-black">
      <Image
        src={bgUrl}
        alt=""
        fill
        priority
        className="invisible absolute"
        aria-hidden
      />
      <div className="relative mx-auto flex w-full flex-col">
        <div className="relative w-full mb-10 aspect-3/4 sm:aspect-4/3 md:aspect-1440/900">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${bgUrl}')` }}
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-end lg:pb-6">
            <div className="flex gap-4">
              <a
                href={button1Url}
                className="rounded-lg border border-black bg-[#DA393C] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b52b2d] active:scale-95 sm:px-8 sm:py-3 sm:text-base"
              >
                {button1Text}
              </a>
              <a
                href={button2Url}
                className="rounded-lg border border-white bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:px-8 sm:py-3 sm:text-base"
              >
                {button2Text}
              </a>
            </div>
          </div>
        </div>

        <div className="w-full py-4">
          <InfiniteScrollGallery />
        </div>
      </div>
    </section>
  );
}