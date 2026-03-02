export default function History() {
    return (
        <section className="bg-black py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-8 lg:px-16">

                {/* Top — Two Column Text */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">

                    {/* Left — Title */}
                    <div>
                        <h2 className="text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
                            HISTORY OF ESCAPE
                        </h2>
                    </div>

                    {/* Right — Description */}
                    <div className="flex flex-col gap-6 text-sm leading-relaxed text-gray-300 md:text-base text-justify">
                        <p>
                            Escape adalah ruang di mana ide bertumbuh, perspektif diuji, dan
                            kebenaran disampaikan tanpa tedeng aling-aling. Kami percaya
                            bahwa konten berkualitas bukan hanya tentang hiburan — melainkan
                            tentang bagaimana sebuah obrolan bisa meninggalkan jejak yang
                            berarti dalam kehidupan seseorang.
                        </p>
                        <p>
                            Dari studio sederhana, kami tumbuh menjadi salah satu podcast
                            paling berpengaruh di Indonesia. Bukan karena kami sempurna, tapi
                            karena kami konsisten — dalam nilai, dalam keberanian, dan dalam
                            keinginan untuk terus relevan.
                        </p>
                    </div>

                </div>

                {/* Bottom — YouTube Embed */}
                <div className="mt-16 md:mt-20 lg:mt-24">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/MIo4tGN11j0?si=9X1DxcZUOYqg8nGV"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}