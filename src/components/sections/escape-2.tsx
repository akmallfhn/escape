export default function Escape2Section() {
    return (
        <section className="bg-black py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">

                {/* Embedded YouTube Video */}
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/-HTgSYyIE-U?si=e1O0gEs4ZvDsO2vs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                {/* Text Content */}
                <div className="mt-12 flex flex-col items-center text-center gap-4">
                    <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                        Escape 2.0 is now out on Youtube!
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
                        Season terbaru dari Escape sudah tayang di Youtube Raymond Chin. Lebih dalam, lebih
                        kritis, lebih seru! Tonton sekarang dan temukan sudut pandang baru yang bikin kamu
                        mikir dua kali.
                    </p>

                    {/* CTAs */}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://www.youtube.com/watch?v=-HTgSYyIE-U"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#b52b2d] active:scale-95 md:text-base"
                        >
                            Watch Escape 2.0
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-70 md:text-base"
                        >
                            More Details
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}