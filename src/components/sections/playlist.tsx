import Image from "next/image";

const episodes = [
    {
        image: "/images/playlist/pl-1.png",
        type: "Online Podcast",
        duration: "17+ Hours",
        title: "ESCAPE SEASON 2 (2026)",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
        href: "https://www.youtube.com/playlist?list=PLSNt1tjjz_ArbAOmvUSXCAyUaksGy0lDs",
    },
    {
        image: "/images/playlist/pl-2.png",
        type: "Online Podcast",
        duration: "300+ min",
        title: "ESCAPE SEASON 1 (2025)",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
        href: "https://youtube.com/playlist?list=PLSNt1tjjz_ArTDv1jVMjhHlaHM51euDq0&si=OqVnRwGtmnPrz-S5",
    },
    {
        image: "/images/playlist/pl-3.png",
        type: "Offline Podcast",
        duration: "300+ min",
        title: "ESCAPE MEDAN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
        href: "https://youtu.be/HeU0S4LOaWs?si=t5p4oLWfs5OYGD93",
    },
    {
        image: "/images/playlist/pl-4.png",
        type: "Offline Podcast",
        duration: "300+ min",
        title: "ESCAPE BANDUNG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
        href: "#",
    },
    {
        image: "/images/playlist/pl-5.png",
        type: "Offline Podcast",
        duration: "300+ min",
        title: "ESCAPE JAKARTA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
        href: "#",
    },
    {
        image: "/images/playlist/pl-6.png",
        type: "Offline Podcast",
        duration: "300+ min",
        title: "ESCAPE JEPANG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
        href: "https://youtu.be/TdqRoCpXFXE?si=2ve_EpAITqxXhwLJ",
    },
];

export default function PlaylistSection() {
    return (
        <section className="bg-black py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-8 lg:px-16">

                {/* Heading */}
                <h2 className="mb-12 text-3xl font-light text-white md:text-4xl lg:text-5xl md:mb-16">
                    Jangan lewatkan Escape lainnya!
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:gap-x-16 lg:gap-y-14">
                    {episodes.map((ep, index) => (
                        <a
                            key={index}
                            href={ep.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex gap-5 items-start"
                        >
                            {/* Thumbnail */}
                            <div className="shrink-0 w-36 sm:w-44 md:w-40 lg:w-44 xl:w-48 aspect-square overflow-hidden rounded-2xl bg-gray-900">
                                <Image
                                    src={ep.image}
                                    alt={ep.title}
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-2.5 pt-1 min-w-0">
                                {/* Badges */}
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                        {ep.type}
                                    </span>
                                    <span className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                        {ep.duration}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-extrabold uppercase text-white md:text-lg leading-tight">
                                    {ep.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs leading-relaxed text-gray-400 md:text-sm line-clamp-3">
                                    {ep.description}
                                </p>

                                {/* Watch Link */}
                                <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white transition-opacity group-hover:opacity-70">
                                    Watch Now!
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}