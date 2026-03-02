interface CardData {
    tier: string;
    subtitle: string;
    features: string[];
    price: string;
    bg: string;
    dark: boolean;
}

const cards: CardData[] = [
    {
        tier: "REGULAR",
        subtitle: "Solid seat, full vibes",
        features: [
            "E-ticket (barcode) via email",
            "Networking opportunities",
            "Community-building moments",
            "Official ESCAPE LIVE PODCAST 2025 wristband",
            "Opportunity to chat with the 4 ESCAPE Gang",
        ],
        price: "Rp. 250.000",
        bg: "/images/KartuLuar.jpg",
        dark: false,
    },
    {
        tier: "VIP",
        subtitle: "Close & comfy, clear view",
        features: [
            "All what regular gets",
            "VIP seating & access",
            "Community-building moments",
            'Next-priority consideration for the "4 vs 4" segment',
            "Mic queue access after platinum during open floor",
        ],
        price: "Rp. 350.000",
        bg: "/images/KartuLuar2.jpg",
        dark: true,
    },
    {
        tier: "PLATINUM",
        subtitle: "Solid seat & full vibes.",
        features: [
            "All what regular & VIP gets.",
            "Mystery gift.",
            "First in mic queue during open .",
            'Priority consideration for the "4 vs 4" segment.',
            "VVIP seating & access (front section)",
        ],
        price: "Rp. 700.000",
        bg: "/images/KartuLuar1.jpg",
        dark: false,
    },
];


function CheckCircle({ dark }: { dark: boolean }) {
    return (
        <span className={`mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 ${dark ? "bg-white" : "bg-black"}`}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={dark ? "black" : "white"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

function TicketCard({ card }: { card: CardData }) {
    const text = card.dark ? "text-white" : "text-black";

    return (
        <div
            className="relative flex flex-col rounded-3xl overflow-hidden border-[3px] border-black"
            style={{
                aspectRatio: "6.54 / 10",
                backgroundImage: `url('${card.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex ml-2 flex-col items-stretch px-7 pt-[16%] pb-6">
                <div className={`flex flex-col gap-[10px] ${text}`}>
                    <h2 className="font-black uppercase text-4xl leading-tight tracking-wide">
                        {card.tier}
                    </h2>
                    <p className="text-xl opacity-80 font-medium leading-tight">
                        {card.subtitle}
                    </p>

                    <div className={`h-px w-4/5 my-1 ${card.dark ? "bg-white/30" : "bg-black/25"}`} />

                    <ul className="flex flex-col gap-[10px]">
                        {card.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle dark={card.dark} />
                                <span className="text-lg leading-snug">{f}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-5">
                        <span className="font-black text-4xl tracking-tight">
                            {card.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Cards() {
    return (
        <section className="bg-black w-full flex items-center justify-center py-16 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl lg:max-w-6xl">
                {cards.map((card) => (
                    <TicketCard key={card.tier} card={card} />
                ))}
            </div>
        </section>
    );
}