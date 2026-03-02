import Image from "next/image";

export default function ContactSection() {
    return(
        <section className="bg-black py-16 md:py-24">
                <div className="mx-8 max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left Column - Text Content */}
                        <div className="max-w-2xl">
                            <h2 className="mb-4 text-3xl leading-tight font-bold text-cream uppercase md:text-5xl lg:text-5xl">
                                Have an interesting
                                <br />
                                question about
                                <br />
                                <span className="text-[#DA393C]">
                                    Collaboration?
                                </span>
                            </h2>

                            <p className="mb-8 text-base font-normal text-gray-300 md:text-sm">
                                Buat kalian yang mau kolaborasi bareng kita,
                                langsung aja
                                <br />
                                kirim proposal kolaborasinya ke sini!
                            </p>

                            <button className="rounded-lg bg-[#DA393C] px-12 py-4 text-base font-bold text-white uppercase transition-colors duration-300 hover:bg-[#bc3133]">
                                Contact Us!
                            </button>
                        </div>

                        {/* Right Column - Phone Mockup */}
                        <div className="relative flex justify-center lg:justify-end">
                            <Image
                                src="/images/KartuLuar.png"
                                alt=""
                                className="w-full md:w-2/3  mx-auto"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>
    )
}