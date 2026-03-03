import Image from "next/image";

interface Product {
    name: string;
    variant: string;
    price: string;
    image: string;
}

const products: Product[] = [
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-1.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-2.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-3.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-4.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-5.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-1.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-2.png" },
    { name: "Product name", variant: "Variant", price: "Rp 189.000", image: "/images/merch/merc-3.png" },
];

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-col gap-3 group cursor-pointer">
            <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center p-8 aspect-[4/5]">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div>
                <p className="text-sm font-semibold text-white">{product.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{product.variant}</p>
                <p className="text-base font-bold text-white mt-2">{product.price}</p>
            </div>
        </div>
    );
}

export default function ProductCollection({ title = "Escape Vol 2" }: { title?: string }) {
    const row1 = products.slice(0, 3);
    const row2 = products.slice(3, 5);
    const row3 = products.slice(5, 8);

    return (
        <section className="bg-black py-16 md:py-20 lg:py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-col gap-4 md:gap-6">

                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                    {title}
                </h2>

                {/* Row 1 — 3 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {row1.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>

                {/* Row 2 — 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {row2.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>

                {/* Row 3 — 3 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {row3.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
}