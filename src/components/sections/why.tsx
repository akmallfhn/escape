import Image from "next/image";

const stats = [
    {
        value: "50%",
        heading: "Short heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        value: "50%",
        heading: "Short heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        value: "50%",
        heading: "Short heading goes here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export default function Why() {
    return (
        <section className="bg-black px-6 py-20 text-white lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* top text block */}
                <div className="mb-14 max-w-lg">
                    <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-wide sm:text-5xl">
                        Kenapa Harus Ikut Escape Offline?
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>

                {/* bottom: image + stats */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                    {/* image */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/bdg.png"
                            alt="Escape Offline Event"
                            width={900}
                            height={700}
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>

                    {/* stats */}
                    <div className="flex w-full flex-col gap-8 lg:w-1/2">
                        {stats.map((stat, i) => (
                            <div key={i} className="border-l-2 border-white/30 pl-6">
                                <p className="mb-1 text-5xl font-bold sm:text-6xl">{stat.value}</p>
                                <p className="mb-1 text-base font-bold">{stat.heading}</p>
                                <p className="text-sm text-gray-400">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}