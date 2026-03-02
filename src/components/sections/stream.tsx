import { JSX } from "react";

export default function StreamSection() {
    const stats = [
        { icon: "broadcast", value: "14.000+", label: "Penayangan" },
        { icon: "eye",       value: "22.000+", label: "Puncak tayang" },
        { icon: "thumbsup",  value: "8.000+",  label: "Total Likes" },
        { icon: "subscriber",value: "1145+",   label: "Subscriber baru" },
        { icon: "chat",      value: "35.000+", label: "Total chat" },
    ];

    const icons: Record<string, JSX.Element> = {
        broadcast: (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2"/>
                <path d="M4.93 4.93a10 10 0 0 0 0 14.14M19.07 4.93a10 10 0 0 1 0 14.14M7.76 7.76a6 6 0 0 0 0 8.49M16.24 7.76a6 6 0 0 1 0 8.49"/>
            </svg>
        ),
        eye: (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
            </svg>
        ),
        thumbsup: (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </svg>
        ),
        subscriber: (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
        chat: (
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
        ),
    };

    return (
        <section className="bg-black py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-8 lg:px-16">

                {/* YouTube Embed */}
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/3DviVcQhW9w?si=2ZenOvIRYJyKiENk"
                        title="Escape Live Stream - Veren Mau Resign"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                {/* Text */}
                <div className="mt-12 flex flex-col items-center text-center gap-3">
                    <h2 className="text-2xl font-light text-white md:text-3xl lg:text-4xl">
                        The first ever Escape Live Stream!
                    </h2>
                    <p className="max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
                        Lihat antusias para Escapers dari live stream pertama Escape di Season 2 ini dengan
                        total statistik sebagai berikut:
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-6 md:gap-x-14">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                                {icons[stat.icon]}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white md:text-base">{stat.value}</span>
                                <span className="text-xs text-gray-400">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://www.youtube.com/live/3DviVcQhW9w?si=oLDcZxNpWR0Y69__"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-black active:scale-95"
                    >
                        Watch our stream replay
                    </a>
                </div>

            </div>
        </section>
    );
}