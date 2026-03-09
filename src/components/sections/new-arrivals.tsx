import Image from "next/image";

const newArrivals = [
    {
        name: "Jaket Sajadah",
        category: "Outer",
        price: "Rp 470.000",
        image: "/images/merch/merc-1.png",
    },
    {
        name: "T-Shirt Vol.3",
        category: "T-shirt",
        price: "Rp 189.000",
        image: "/images/merch/merc-2.png",
    },
    {
        name: 'Shirt Jacket - The Second Coming',
        category: "Outer",
        price: "Rp 289.000",
        image: "/images/merch/merc-3.png",
    },
    {
        name: "Hoodie Vol.3",
        category: "Hoodie",
        price: "Rp 350.000",
        image: "/images/merch/merc-4.png",
    },
];

export default function NewArrivals() {
    return (
        <section className="bg-black py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                    New Arrivals - Vol.3
                </h2>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {newArrivals.map((product, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center aspect-square p-4 sm:p-8 md:p-12">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="mt-4 text-left">
                                <p className="text-sm font-semibold text-white sm:text-base">
                                    {product.name}
                                </p>
                                <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                                    {product.category}
                                </p>
                                <p className="mt-2 text-base font-bold text-white sm:text-lg">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    
                    <a    href="https://shopee.co.id/escapeid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#b52b2d] active:scale-95 md:text-base"
                    >
                        Shop on Shopee
                    </a>
                </div>
            </div>
        </section>
    );
}