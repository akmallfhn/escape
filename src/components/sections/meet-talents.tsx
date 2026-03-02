import Image from "next/image";

export default function MeetTalent() {
    const talents = [
        {
            name: "Raymond Chin",
            role: "The Relentless Contender",
            description: "Pemikir yang tidak takut berselisih paham — justru di situlah percakapan paling menarik terjadi.",
            instagram: "@raymondchins",
            followers: "1.3 M Followers",
            image: "/images/rc-1.png",
            href: "https://www.instagram.com/raymondchins",
        },
        {
            name: "Felix Siauw",
            role: "The Logic Sniper",
            description: "Konsisten dalam nilai, berani dalam menyampaikan — Felix Siauw adalah suara yang selalu punya bobot di setiap obrolan.",
            instagram: "@felix.siauw",
            followers: "2.1 M Followers",
            image: "/images/fs-1.png",
            href: "https://www.instagram.com/felix.siauw",
        },
        {
            name: "Koiyo Cabe",
            role: "The Chaos Simplifier",
            description: "Energi yang menular dan kejujuran yang segar — Koiyo membuktikan bahwa autentisitas adalah senjata paling kuat.",
            instagram: "@koiyocabe",
            followers: "514 K Followers",
            image: "/images/kc-1.png",
            href: "https://www.instagram.com/koiyocabe",
        },
        {
            name: "Verren Ornela",
            role: "The Innocent Provoker",
            description: "Perspektif yang jernih, pertanyaan yang tepat sasaran — Veren menghadirkan kedalaman di setiap momen yang ia masuki.",
            instagram: "@verren.ornela",
            followers: "138 K Followers",
            image: "/images/vo-1.png",
            href: "https://www.instagram.com/verren.ornela",
        },
    ];

    return (
        <section className="bg-black py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-8 lg:px-16">

                {/* Header */}
                <div className="mb-16 text-center md:mb-20">
                    <h2 className="mb-3 text-3xl font-light text-white md:text-4xl lg:text-5xl">
                        Meet our talent
                    </h2>
                    <p className="text-sm text-gray-400 md:text-base">
                        Mengenal lebih dalam dengan 4 talent Escape!
                    </p>
                </div>

                {/* Talent Grid — 2 columns, image left + text right */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-x-16 lg:gap-y-20">
                    {talents.map((talent, index) => (
                        <a
                            key={index}
                            href={talent.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex gap-6 items-start"
                        >
                            {/* Photo */}
                            <div className="shrink-0 w-36 sm:w-44 md:w-40 lg:w-48 xl:w-52 overflow-hidden rounded-2xl aspect-square">
                                <Image
                                    src={talent.image}
                                    alt={talent.name}
                                    width={220}
                                    height={220}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-3 pt-1">
                                {/* Role Badge */}
                                <span className="w-fit rounded-md bg-[#DA393C] px-3 py-1 text-xs font-medium text-white">
                                    {talent.role}
                                </span>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-white md:text-2xl">
                                    {talent.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-400 md:text-sm">
                                    {talent.description}
                                </p>

                                {/* Instagram */}
                                <p className="mt-1 text-sm font-semibold text-white">
                                    {talent.instagram} - {talent.followers}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}