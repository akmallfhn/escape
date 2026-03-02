import Image from "next/image";

export default function OnlineHero() {
    return (
        <section className="relative h-screen max-h-[95vh] min-h-[650px] bg-black overflow-hidden">

            {/* Background — full bleed photo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero2.png"
                    alt="Escape 2.0"
                    fill
                    priority
                    className="object-cover object-top"
                />
            </div>

            {/* Content — pinned to very bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14 lg:pb-16">
                <div className="mx-auto max-w-7xl px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end">

                        {/* Left — Logo + Title + CTA */}
                        <div className="flex flex-col gap-2">
                            <Image
                                src="/images/escape.png"
                                alt="escape"
                                width={110}
                                height={32}
                                className="w-20 md:w-24 opacity-90 mb-2"
                            />
                            <h1 className="text-5xl font-black uppercase leading-none text-white md:text-6xl lg:text-7xl xl:text-8xl">
                                ESCAPE 2.0
                            </h1>
                            <p className="text-xs font-bold uppercase tracking-widest text-white md:text-sm">
                                IS OUT! WATCH NOW ON YOUTUBE!
                            </p>
                            <div className="mt-3 flex flex-wrap gap-3">
                                <a
                                    href="https://youtu.be/-HTgSYyIE-U?si=6ZjBCHWOCSFb_2Bu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#b52b2d] active:scale-95"
                                >
                                    Watch Now!
                                </a>
                                <a
                                    href="https://youtube.com/playlist?list=PLSNt1tjjz_ArTDv1jVMjhHlaHM51euDq0&si=OqVnRwGtmnPrz-S5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-transparent px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-white/10 active:scale-95"
                                >
                                    Season 1
                                </a>
                            </div>
                        </div>

                        {/* Right — Starring + Description */}
                        <div className="flex flex-col gap-2 md:max-w-sm lg:max-w-md ml-auto">
                            <h2 className="text-base font-bold leading-snug text-white md:text-lg">
                                Starring Raymond Chin, Felix Siauw,
                                <br />
                                Koiyo Cabe, Verren Ornela
                            </h2>
                            <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
                                Siap-siap ngabuburit beda dari biasanya! Raymond, Ustadz Felix,
                                Koi, dan Veren hadir kembali untuk menantang cara berpikirmu.
                                Lewat konsep lateral thinking, kita bakal bedah tuntas makna
                                spiritualitas dari sudut pandang yang lebih dalam dan tak terduga.
                                Jadikan puasa kali ini lebih bermakna bersama kami!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}