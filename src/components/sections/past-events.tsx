"use client";
import Image from "next/image";

interface PastEventData {
    category: string;
    title: string;
    description: string;
    date: string;
    audience: string;
    image: string;
}

const pastEvents: PastEventData[] = [
    {
        category: "Offline Podcast",
        title: "Escape Medan: Rumah Tangga",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        date: "5 May 2025",
        audience: "1000+ Audience",
        image: "/images/mdn.png",
    },
    {
        category: "Offline Podcast",
        title: "Escape Bandung: Rumah Tangga",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        date: "11 Jan 2022",
        audience: "1000+ Audience",
        image: "/images/bdg.png",
    },
    {
        category: "Offline Podcast",
        title: "Escape Jakarta: Rumah Tangga",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        date: "11 Jan 2022",
        audience: "1000+ Audience",
        image: "/images/jkt.png",
    },
];

function EventCard({ event }: { event: PastEventData }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full rounded-2xl overflow-hidden bg-[#d4d4d4]" style={{ aspectRatio: "4 / 3" }}>
                <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    
                    className="w-full h-full object-fill"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-white/60 text-sm font-medium">{event.category}</p>
                <h3 className="text-white font-bold text-xl leading-snug">{event.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-2 text-white/80 text-sm pt-1">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.audience}</span>
                </div>
            </div>
        </div>
    );
}

export default function PastEvents() {
    return (
        <section className="bg-black w-full flex flex-col items-center py-20 px-6">
            <div className="w-full max-w-5xl lg:max-w-6xl flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-white font-normal text-4xl md:text-5xl tracking-tight">
                        Escape Offline Past Event
                    </h2>
                    <p className="text-white/70 text-base md:text-lg max-w-xl">
                        Kota mana aja sih yang udah Escape datengin? siapa tau selanjutnya adalah kotamu!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                    {pastEvents.map((event) => (
                        <EventCard key={event.title} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
}