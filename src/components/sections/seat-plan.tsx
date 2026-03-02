const seats = [
    {
        tier: "PLATINUM",
        description:
            "Nikmati pengalaman terbaik dengan posisi tempat duduk eksklusif di barisan paling depan (front row). Pemegang tiket ini juga mendapatkan akses tambahan berupa 40 menit di dalam Exclusive Room, sebuah ruang tunggu khusus yang nyaman dan terbatas.",
    },
    {
        tier: "VIP",
        description:
            "Memberikan kenyamanan menonton yang maksimal dengan posisi tempat duduk di area depan. Kategori ini memastikan Anda agar mendapatkan jarak pandang yang jelas dan dekat ke panggung.",
    },
    {
        tier: "REGULER",
        description:
            "Pilihan akses standar dengan tempat duduk di area umum. Area ini tetap dirancang agar seluruh penonton dapat menikmati jalannya acara dengan nyaman.",
    },
];

export default function SeatPlan() {
    return (
        <section
            className="relative w-full text-white"
            style={{
                backgroundImage: "url('/images/seat.png')",
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000",
            }}
        >
            {/* dark fade — heavy at top, transparent at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />

            {/* content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-16 lg:pb-32">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
                    <div className="lg:w-1/3">
                        <h2 className="text-5xl font-black uppercase leading-none tracking-wide sm:text-6xl lg:text-7xl">
                            SEAT PLAN
                        </h2>
                    </div>

                    <div className="flex flex-col gap-10 lg:w-2/3">
                        {seats.map((seat) => (
                            <div key={seat.tier}>
                                <h3 className="mb-3 text-xl font-black uppercase tracking-wider sm:text-2xl">
                                    {seat.tier}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                    {seat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* bottom spacer so seat rows show beneath the text */}
                <div className=" h-[28vw] max-h-[480px]" />
            </div>
        </section>
    );
}