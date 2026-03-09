import Image from "next/image";

interface Product {
    name: string;
    variant: string;
    price: string;
    image: string;
}

const vol2Products: Product[] = [
    { name: "T-shirt Vol.2", variant: "T-shirt", price: "Rp 189.000", image: "/images/merch/merc-6.png" },
    { name: "Gelas Escape", variant: "Merchandise", price: "Sold Out", image: "/images/merch/merc-12.png" },
    { name: "Pouch Canvas", variant: "Merchandise", price: "Sold Out", image: "/images/merch/merc-8.png" },
    { name: "Escape: Unlearning - Lanyard", variant: "Merchandise", price: "Sold Out", image: "/images/merch/merc-9.png" },
    { name: "Sticker Escape Vol.2", variant: "Merchandise", price: "Sold Out", image: "/images/merch/merc-11.png" },
];

const vol1Products: Product[] = [
    { name: "T-shirt Escape Vol.1", variant: "T-shirt", price: "Sold Out", image: "/images/merch/merc-10.png" },
    { name: "Hoodie Escape Vol.1", variant: "Hoodie", price: "Sold Out", image: "/images/merch/merc-7.png" },
    { name: "Escape Totebag Vol.1", variant: "Merchandise", price: "Rp 110.000", image: "/images/merch/merc-13.png" },
];

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-col gap-3 group cursor-pointer">
            <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center p-4 sm:p-8 aspect-[4/5]">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="text-center">
                <p className="text-sm font-semibold text-white">{product.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{product.variant}</p>
                <p className="text-base font-bold text-white mt-2">{product.price}</p>
            </div>
        </div>
    );
}

export default function ProductCollection() {
    const vol2Row1 = vol2Products.slice(0, 3);
    const vol2Row2 = vol2Products.slice(3, 5);

    return (
        <section className="bg-black py-16 md:py-20 lg:py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-col gap-4 md:gap-6">

                {/* Escape Vol.2 */}
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                    Escape Vol.2
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                    {vol2Row1.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {vol2Row2.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>

                {/* Escape Vol.1 */}
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl mt-8 md:mt-12">
                    Escape Vol.1
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                    {vol1Products.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

                <a href="https://shopee.co.id/escapeid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#b52b2d] active:scale-95 md:text-base"
                >
                    Shop on Shopee
                </a>
            </div>
        </section>
    );
}