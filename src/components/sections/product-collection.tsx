import Image from "next/image";

interface MerchItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image_url: string;
}

async function getAllMerch(): Promise<MerchItem[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/merchandise`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function ProductCard({ product }: { product: MerchItem }) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center p-8 aspect-[4/5]">
        <Image
          src={product.image_url}
          alt={product.name}
          width={500}
          height={500}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          unoptimized={product.image_url.startsWith('http')}
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{product.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
        <p className="text-base font-bold text-white mt-2">{product.price}</p>
      </div>
    </div>
  );
}

export default async function ProductCollection({ title = "All Products" }: { title?: string }) {
  const products = await getAllMerch();

  if (products.length === 0) {
    return (
      <section className="bg-black py-16 md:py-20 lg:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl mb-4">{title}</h2>
          <p className="text-gray-600 text-sm">No products available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-4 md:gap-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}