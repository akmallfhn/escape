import Image from "next/image";
import EscapeLogo from "@/components/icons/escape";

export default function MerchHero() {
    return (
        <section className="bg-black w-full">
            {/* Full-bleed hero image — no overlap */}
            <div className="relative w-full aspect-[16/9] max-h-[90vh] min-h-[500px]">
                <Image
                    src="/images/hero-merch.png"
                    alt="Escape Fashion & Merch"
                    fill
                    priority
                    className="object-cover object-top"
                />
                
            </div>

            {/* Text block — fully below the image */}
            <div className="px-8 py-12 md:py-16 lg:px-16">
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* Left — Logo + Headline + CTA */}
                    <div className="flex flex-col gap-4">
                        <EscapeLogo className="h-12 w-auto text-white opacity-90 self-start" />

                        <h1 className="text-3xl font-regular leading-tight text-white md:text-4xl lg:text-5xl">
                            Elevate your style with
                            <br />
                            Escape Fashion Merch!
                        </h1>

                        <div className="mt-2">
                            <a
                                href="https://shopee.co.id/escapeid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#b52b2d] active:scale-95"
                            >
                                Cek Shopee Escape!
                            </a>
                        </div>
                    </div>

                    {/* Right — Description */}
                    <div className="md:pt-10">
                        <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                            quis viverra ornare, eros dolor interdum nulla.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}