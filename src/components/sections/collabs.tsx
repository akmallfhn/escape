import Image from "next/image";

export default function CollabSection() {
    const collaborators = [
        { image: '/images/people/1.png' },
        { image: '/images/people/2.png' },
        { image: '/images/people/3.png' },
        { image: '/images/people/4.png' },
        { image: '/images/people/5.png' },
        { image: '/images/people/6.png' },
        { image: '/images/people/7.png' },
        { image: '/images/people/8.png' },
        { image: '/images/people/9.png' },
        { image: '/images/people/10.png' },
        { image: '/images/people/11.png' },
        { image: '/images/people/12.png' },
        { image: '/images/people/13.png' },
        { image: '/images/people/14.png' },
    ];

    const brands = [
        { src: '/images/brand1.png', alt: 'Brand 8', width: 71,  height: 64  },
        { src: '/images/brand2.png', alt: 'Brand 7', width: 70,  height: 45  },
        { src: '/images/brand3.png', alt: 'Brand 3', width: 130, height: 28  },
        { src: '/images/brand4.png', alt: 'Brand 4', width: 89,  height: 89  },
        { src: '/images/brand5.png', alt: 'Brand 5', width: 89,  height: 89  },
        { src: '/images/brand6.png', alt: 'Brand 6', width: 89,  height: 89  },
    ];

    const BrandStrip = ({ keyPrefix }: { keyPrefix: string }) => (
        <>
            {[...Array(5)].map((_, setIndex) => (
                <div
                    key={`${keyPrefix}-${setIndex}`}
                    className="flex shrink-0 items-center"
                >
                    {brands.map((brand, brandIndex) => (
                        <div
                            key={brandIndex}
                            className="mx-4 flex h-12 items-center sm:mx-6 sm:h-14 md:mx-8 md:h-16"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="h-full w-auto max-w-[80px] object-contain sm:max-w-[100px] md:max-w-[120px] grayscale"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );

    return (
        <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Infinite Scroll Brands */}
                <div className="mb-10 overflow-hidden sm:mb-12 md:mb-14 lg:mb-16">
                    <div className="animate-scroll-seamless flex items-center">
                        <BrandStrip keyPrefix="set1" />
                        <BrandStrip keyPrefix="set2" />
                    </div>
                </div>

                {/* Collaborators Grid */}
                <div className="grid px-8 grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3 md:grid-cols-7 md:gap-4 lg:gap-5 xl:gap-6">
                    {collaborators.map((collab, index) => (
                        <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-xl bg-gray-800 sm:rounded-2xl"
                        >
                            <Image
                                src={collab.image}
                                alt=""
                                className="h-full w-full object-cover grayscale"
                                width={89}
                                height={89}
                            />
                        </div>
                    ))}
                </div>

                {/* Section Title */}
                <div className="mt-10 text-center sm:mt-12 md:mt-14 lg:mt-16">
                    <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        BRAND AND PEOPLE COLLABORATE WITH US
                    </h2>
                </div>

            </div>
        </section>
    );
}