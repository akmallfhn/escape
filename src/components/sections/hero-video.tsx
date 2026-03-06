import Image from "next/image";

export default function HeroVideo() {
    return (
        <section className="relative w-full overflow-hidden bg-black h-[75vh] sm:h-[80vh] md:[aspect-ratio:16/9] md:h-auto">
           <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                    src="https://res.cloudinary.com/djylg2vjv/video/upload/teaser_mhhesl.mp4"
                    type="video/mp4"
                />
            </video>

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-[110%] bg-gradient-to-t from-black to-transparent" />

            {/* bottom center content */}
            <div className="absolute inset-x-0 bottom-[8%] flex flex-col items-center">
                <Image
                    src="/images/escape-room.png"
                    alt="Live Podcast Escape Room Makassar"
                    width={400}
                    height={200}
                    className="w-48 sm:w-64 md:w-80 lg:w-[400px] object-contain"
                />

                <div className="mt-4 flex gap-3 sm:gap-4">
                    <a
                        href="#ticket"
                        className="rounded-lg bg-[#DA393C] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b52b2d] active:scale-95 sm:px-8 sm:py-3 sm:text-base"
                    >
                        Buy Ticket
                    </a>
                    <a
                        href="#detail"
                        className="rounded-lg border border-white bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:px-8 sm:py-3 sm:text-base"
                    >
                        Check Details
                    </a>
                </div>
            </div>
        </section>
    );
}