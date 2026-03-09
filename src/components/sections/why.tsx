import Image from "next/image";

const features = [
    {
        icon: "/icons/why-1.svg",
        title: "CHALLENGE CARD",
        description: "Siap-siap terima kartu tantangan misterius langsung di hari H! Apa isi tantangannya? Rahasia. Cuma kamu yang datang ke venue yang bakal tahu dan ngerasain langsung keseruannya!",
    },
    {
        icon: "/icons/why-2.svg",
        title: "LIVE PODCAST",
        description: "Nikmati serunya obrolan ala podcast secara live! Beda dari biasanya, sesi ini bakal jauh lebih interaktif karena kita bakal libatin audience buat ikut ngobrol dan seru-seruan bareng.",
    },
    {
        icon: "/icons/why-3.svg",
        title: "ASBUN NETIZEN",
        description: "Ini saatnya kamu yang take over! Kami akan pilih 4 orang beruntung dari kursi penonton untuk naik ke atas panggung dan ngobrol langsung bareng 4 talent. Rasakan sensasi jadi bintang tamu podcast sungguhan!",
    },
    {
        icon: "/icons/why-4.svg",
        title: "MYSTERY GAMES",
        description: "Pecahkan kejutannya dan main games rahasia bareng 4 talent kita! Siapkan dirimu, menangkan permainannya, dan bawa pulang hadiah-hadiah menarik yang sudah menanti.",
    },
    {
        icon: "/icons/why-5.svg",
        title: "PLATINUM SESSION",
        description: "Sesi intimate super eksklusif khusus buat kamu pemegang tiket PLATINUM! Nikmati privilege ngobrol dan nongkrong dari jarak dekat bareng 4 talent selama 40 menit penuh. Kuota sangat terbatas, hanya untuk BEBERAPA ORANG SAJA!",
    },
];

export default function Why() {
    return (
        <section className="bg-black px-6 py-20 text-white lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

                    {/* LEFT — heading + image */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="mb-6 font-black uppercase leading-tight text-white text-4xl lg:text-5xl">
                                KENAPA HARUS IKUT ESCAPE OFFLINE?
                            </h2>
                            <h3 className="mb-5 text-xl font-black uppercase tracking-widest text-white">
                                SAATNYA &lsquo;LOG OFF&rsquo; UNTUK KEMBALI &lsquo;LIVE&rsquo;
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                Dunia terlalu bising. Escape Offline hadir sebagai tombol &lsquo;pause&rsquo; agar kamu bisa mendengar kembali suara hatimu yang paling dalam.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/images/bdg.png"
                                alt="Escape Offline Event"
                                width={900}
                                height={600}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT — feature list */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col gap-3 border-l-2 border-white pl-6 py-1 my-3">
                                <div className="size-8 shrink-0">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-contain object-left"
                                    />
                                </div>
                                <h3 className="text-base font-black uppercase tracking-wider text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}