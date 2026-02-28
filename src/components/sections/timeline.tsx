export default function TimelineSection() {
    const timelineData = [
        {
            date: '24 NOV 2024',
            title: 'RAYMOND CHIN X FELIX SIAUW',
            description:
                'Raymond yang dikenal kritis mempertanyakan agama Islam hingga belajar logika Islam langsung bersama Ustadz Felix.',
        },
        {
            date: '17 FEB 2025',
            title: 'ESCAPE',
            description:
                'Bari keredahan dan pertengkaran audience yang dengan negarapra. sedikit nama ESCAPE sebagai nama untuk yang lebih teraksis.',
        },
        {
            date: '1 MARCH 2025',
            title: 'ESCAPE PODCAST RAMADHAN',
            description:
                'ESCAPE hadir sebagai podcast Ramadan yang bertermasuk mengodili, keserluatan, pebealaren, dengan format unik bersama Raymond, Ustadz Felix, Koi, dan Yeven.',
        },
        {
            date: '4 MAY 2025',
            title: 'ESCAPE LIVE PODCAST MEDAN',
            description:
                'Perjalanan ibu membawa ESCAPE ke Medan lewat live podcast bersama RUMAH TAHFIDZ.',
        },
        {
            date: '20 SEPT 2025',
            title: 'ESCAPE LIVE PODCAST BANDUNG',
            description:
                'Setelah sukses di Medan, ESCAPE merealisakan live podcast di Bandung dengan tema CEO.',
        },
        {
            date: '23 NOV 2025',
            title: 'ESCAPE JAPAN: 少しずつ',
            description:
                'Sesuai harapan Yeven, perjalanan berlanjut ke Jepang untuk mencari makna little by little.',
        },
        {
            date: '29 NOV 2025',
            title: 'ESCAPE LIVE PODCAST JAKARTA',
            description:
                'Menyatu seluruh ESCAPE merealisikan seluruh perjalanan dalam live podcast Jakarta bersama ADDINU.',
        },
    ];

    return (
        <section className="relative mt-8 min-h-3/4 overflow-hidden bg-black py-16">
            {/* Heading */}
            <div className="my-6 lg:translate-y-20 text-center md:my-0">
                <h2 className=" text-4xl font-bold text-cream uppercase md:mb-0 md:text-5xl lg:text-6xl">
                    ESCAPE JOURNEY
                </h2>
            </div>

            {/* ── MOBILE TIMELINE (visible on small screens, hidden on md+) ── */}
            <div className="block px-6 md:hidden">
                <div className="relative">
                    {/* Vertical dashed line */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-white/40" />

                    {timelineData.map((item, i) => {
                        const isLeft = i % 2 === 0;

                        return (
                            <div
                                key={i}
                                className="relative mb-10 flex items-start"
                            >
                                {/* LEFT side content */}
                                <div
                                    className={`w-[calc(50%-20px)] pr-4 ${isLeft ? 'block' : 'invisible'}`}
                                >
                                    <p className="mb-1 text-[10px] text-gray-400">
                                        {item.date}
                                    </p>
                                    <h3 className="mb-2 text-xs leading-tight font-bold text-cream uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-[9px] leading-relaxed font-light text-gray-300">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Dot */}
                                <div className="relative z-10 flex w-10 shrink-0 justify-center">
                                    <div className="mt-1 size-5 rounded-full bg-[#EB4447] shadow-lg" />
                                </div>

                                {/* RIGHT side content */}
                                <div
                                    className={`w-[calc(50%-20px)] pl-4 ${!isLeft ? 'block' : 'invisible'}`}
                                >
                                    <p className="mb-1 text-[10px] text-gray-400">
                                        {item.date}
                                    </p>
                                    <h3 className="mb-2 text-xs leading-tight font-bold text-white uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-[9px] leading-relaxed font-light text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {/* Final "2026?" item */}
                    <div className="relative mb-10 flex items-start">
                        {/* LEFT — invisible placeholder to keep dot centered */}
                        <div className="invisible w-[calc(50%-20px)] pr-4" />

                        {/* Dot */}
                        <div className="relative z-10 flex w-10 shrink-0 justify-center">
                            <div className="mt-1 size-5 rounded-full bg-[#EB4447] shadow-lg" />
                        </div>

                        {/* RIGHT — 2026 text */}
                        <div className="w-[calc(50%-20px)] pl-4">
                            <h3 className="text-xl font-bold text-white">
                                2026?
                            </h3>
                            <p className="text-xs font-bold text-white">
                                STAY TUNED!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── DESKTOP TIMELINE (hidden on mobile, visible on md+) ── */}
            <div className="mx-auto hidden max-w-7xl px-6 md:block lg:px-8">
                <div className="relative px-4 md:px-12">
                    {/* Horizontal dashed line */}
                    <div className="absolute top-1/2 right-0 left-0 ml-[calc(-50vw+50%)] flex w-screen -translate-y-1/2 items-center">
                        <div className="w-full border-t-2 border-dashed border-white/40" />
                    </div>

                    {/* Timeline Items */}
                    <div className="relative flex justify-between">
                        {timelineData.map((item, i) => {
                            const isTop = i % 2 === 0;

                            return (
                                <div
                                    key={i}
                                    className="relative grid h-fit w-50 grid-cols-1 grid-rows-2 justify-center md:w-36 lg:w-56 xl:w-65"
                                >
                                    {/* Dot */}
                                    <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                        <div className="size-6 rounded-full bg-[#EB4447] shadow-lg" />
                                    </div>

                                    {/* Over */}
                                    <div className="min-h-65"></div>

                                    {/* Content */}
                                    <div
                                        className={`min-h-65 -translate-x-1/2 px-4 ${
                                            isTop
                                                ? 'top-0 order-first mb-16 place-content-end pb-0 text-left'
                                                : 'bottom-0 order-last mt-16 pt-0 text-left'
                                        }`}
                                    >
                                        <div className="w-50 md:w-36 lg:w-56 xl:w-65">
                                            <p className="mb-2 text-[11px] text-gray-400">
                                                {item.date}
                                            </p>
                                            <h3 className="mb-3 text-sm leading-tight font-bold text-white uppercase md:text-base lg:text-lg">
                                                {item.title}
                                            </h3>
                                            <p className="text-[10px] leading-relaxed font-light text-gray-300 md:text-[10px] lg:text-[10px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* Final Item — 2026 — centered on the line */}
                        <div className="relative flex h-fit w-50 items-center justify-center self-center md:w-36 lg:w-56 xl:w-65">
                            <div className="absolute left-1/2 z-10 -translate-x-1/2">
                                <div className="size-6 rounded-full bg-[#EB4447] shadow-lg" />
                            </div>
                            <div className="w-fit translate-x-14 relative">
                                <div className='absolute inset-y-0 w-screen bg-linear-to-r from-black/50 to-black from-0% to-15% z-0'></div>
                                <h3 className="text-xl leading-none font-bold text-white md:text-2xl z-1 relative">
                                    2026?
                                </h3>
                                <p className="text-xs font-bold text-white z-1 relative">
                                    STAY TUNED!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
