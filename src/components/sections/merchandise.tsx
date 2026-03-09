import Image from "next/image";

export default function MerchandiseSection() {
    const products = [
        {
            name: '[PREMIUM] Gua Hira Jacket Sajadah ESCAPE x Antarestar Special ',
            category: 'Hoodie',
            price: 'Rp 280.000',
            image: '/images/merch/merc-1.png',
        },
        {
            name: '[PREMIUM] Lateral Orbit T-shirt ESCAPE x Antarestar Special Collaboration',
            category: 'T-shirt',
            price: 'Rp 180.000',
            image: '/images/merch/merc-2.png',
        },
        {
            name: '[PREMIUM] Second Coming Shirt Jacket ESCAPE x Antarestar Special',
            category: 'Outer',
            price: 'Rp 230.000',
            image: '/images/merch/merc-3.png',
        },
        {
            name: '[PREMIUM] Escape From Injustice Hoodie ESCAPE x Antarestar Special Collaboration',
            category: 'Hoodie',
            price: 'Rp 380.000',
            image: '/images/merch/merc-4.png',
        },
        {
            name: 'Totebag Vol.3',
            category: 'Merchandise',
            price: 'Rp 80.000',
            image: '/images/merch/merc-5.png',
        },
        {
            name: '[T-shirt Vol.2] Menjadi Manusia Sebelum Beragama',
            category: 'T-shirt',
            price: 'Rp 180.000',
            image: '/images/merch/merc-6.png',
        },
    ];

    return (
        <section className="bg-black py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Escape Official Merchandise
                    </h2>
                    <p className="mt-3 text-sm text-gray-400 md:text-base">
                        Jadi bagian dari Escape dengan membeli merchandise dan fashion dari Escape
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col group">
                            {/* Card — white background, portrait ratio */}
                            <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center aspect-[3/4] p-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={500}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Product Info — below card, left aligned */}
                            <div className="mt-4 text-center">
                                <p className="text-sm font-semibold text-white md:text-base">
                                    {product.name}
                                </p>
                                <p className="mt-0.5 text-xs text-gray-500 md:text-sm">
                                    {product.category}
                                </p>
                                <p className="mt-2 text-lg font-bold text-white md:text-xl">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-4 md:mt-16">
                    <a
                        href="https://shopee.co.id/escapeid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#b52b2d] active:scale-95 md:text-base"
                    >
                        Buy on Shopee
                    </a>
                    <a
                        href="/merch"
                        className="rounded-lg border border-white bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:px-8 sm:py-3 sm:text-base"
                    >
                        View All Catalogue
                    </a>
                </div>

            </div>
        </section>
    );
}