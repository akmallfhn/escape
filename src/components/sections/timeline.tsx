import Image from "next/image";
import LogoIcon from "../icons/logo";

const timelineData = [
    {
        title: "Raymond Chin x Felix Siauw",
        description:
            "Raymond yang dikenal kritis mempertanyakan agama Islam hingga belajar logika Islam langsung bersama Ustadz Felix.",
    },
    {
        title: "The Begining of ESCAPE",
        description:
            "Dari keresahan dan pertanyaan audience yang serupa dengan Raymond, lahirlah nama ESCAPE sebagai ruang dialog yang lebih terbuka.",
    },
    {
        title: "ESCAPE Podcast Ramadhan",
        description:
            "ESCAPE hadir sebagai podcast Ramadan yang berkembang mengikuti keresahan penonton, dengan formasi unik bersama Raymond, Ustad Felix, Koi, dan Veren.",
    },
    {
        title: "Escape Live Podcast: Medan",
        description:
            "Perjalanan itu membawa ESCAPE ke Medan lewat live podcast bertema RUMAH TANGGA",
    },
    {
        title: "Escape Live Podcast Bandung",
        description:
            "Setelah sukses di Medan, ESCAPE melanjutkan live podcast di Bandung dengan tema EGO.",
    },
    {
        title: "ESCAPE JAPAN: 少しずつ",
        description:
            "Sesuai harapan Verren, perjalanan berlanjut ke Jepang untuk mencari makna little by little",
    },
    {
        title: "Escape Live Podcast Jakarta",
        description:
            "Menutup tahun, ESCAPE merangkum seluruh perjalanan dalam live podcast Jakarta bertema ASCEND",
    },
];

export default function TimelineSection() {
    return (
        <section className="relative bg-black py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col gap-5 lg:flex-row">

                    {/* LEFT — heading + stacked cards (desktop only) */}
                    <div className="hidden lg:flex lg:w-1/2 lg:shrink-0 lg:flex-col">
                        <p className="mb-3 text-sm text-gray-400">Lateral Thinking</p>
                        <h2 className="mb-12 text-5xl font-light leading-tight">
                            Mengenal lebih dalam tentang timeline Escape!
                        </h2>

                        {/* stacked cards image */}
                        <div className="relative flex-1">
                            <Image
                                src="/images/quad-card.png"
                                alt="Escape cards"
                                width={567}
                                height={1034}
                                className="w-5/6 h-full object-contain object-top"
                            />
                        </div>
                    </div>

                    {/* mobile heading */}
                    <div className="lg:hidden">
                        <p className="mb-2 text-sm text-gray-400">Lateral Thinking</p>
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                            Mengenal lebih dalam tentang timeline Escape!
                        </h2>
                    </div>

                    {/* RIGHT — vertical timeline */}
                    <div className="flex-1">
                        <div className="relative">
                            {/* vertical line */}
                            <div className="absolute top-0 bottom-0 left-[19px] w-px bg-white/20" />

                            <div className="flex flex-col gap-10">
                                {timelineData.map((item, i) => (
                                    <div key={i} className="relative flex gap-6 pl-12">
                                        {/* dot */}
                                        <div className="absolute left-0 top-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                                            <LogoIcon className="size-7 bg-black" />
                                        </div>

                                        <div>
                                            <h3 className="mb-1.5 text-lg font-bold sm:text-lg">
                                                {item.title}
                                            </h3>
                                            <p className="text-base leading-relaxed text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* final item */}
                                <div className="relative flex gap-6 pl-12">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                                        <LogoIcon className="size-7 bg-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold">2026? Stay Tuned!</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}