import Image from "next/image";
import { InfiniteScrollGallery } from "../ui/infinite-gallery";

export default function Hero() {
    return (
        <section className="relative bg-black">
            <div className="relative mx-auto flex max-w-7xl flex-col">
                <div className="relative w-full mb-10 aspect-3/4 sm:aspect-4/3 md:aspect-1440/900">
                    <div className="absolute inset-0 z-0 bg-[url('/images/hero3.png')] bg-cover bg-center bg-no-repeat" />
                    <div className="relative z-10 flex h-full flex-col items-center justify-end lg:pb-6">
                        <div className="flex gap-4">
                            <a
                                href="#ticket"
                                className="rounded-lg border border-black bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-gray-300 hover:text-black active:scale-95 sm:px-8 sm:py-3 sm:text-base"
                            >
                                Buy Ticket
                            </a>
                            <a
                                href="#detail"
                                className="rounded-lg border border-white bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:px-8 sm:py-3 sm:text-base"
                            >
                                Check Details
                            </a>
                        </div>
                    </div>
                </div>

                {/* infinite scroll gallery */}
                <div className="w-full py-4">
                    <InfiniteScrollGallery />
                </div>
            </div>
        </section>
    );
}