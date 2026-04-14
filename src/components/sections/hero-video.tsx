import Image from "next/image";

export default function HeroVideo() {
    return (
        <section className="relative w-full overflow-hidden bg-black h-[75vh] sm:h-[80vh] md:aspect-video md:h-auto">
            {/* YouTube background — desktop/tablet */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
                <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube-nocookie.com/embed/HeU0S4LOaWs?autoplay=1&mute=1&loop=1&playlist=HeU0S4LOaWs&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&start=0&end=40"
                    title=""
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                />
            </div>

            {/* Static poster image — mobile fallback */}
            <div className="md:hidden absolute inset-0">
                <Image
                    src="/images/hero-poster.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-[110%] bg-linear-to-t from-black to-transparent" />

            {/* bottom center content */}
            <div className="absolute inset-x-0 bottom-[8%] flex flex-col items-center">
                <Image
                    src="/images/escape-room.png"
                    alt="Live Podcast Escape Room Makassar"
                    width={400}
                    height={200}
                    priority
                    className="w-48 sm:w-64 md:w-80 lg:w-100 object-contain"
                />

                <div className="mt-4 flex gap-3 sm:gap-4">
                    <a
                        href="https://drsn.me/escapemakassar2026"
                        target="_blank"
                        className="rounded-lg bg-[#DA393C] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b52b2d] active:scale-95 sm:px-8 sm:py-3 sm:text-base"
                    >
                        Buy Ticket
                    </a>
                </div>
            </div>
        </section>
    );
}