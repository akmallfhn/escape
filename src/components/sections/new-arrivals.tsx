import Image from "next/image";

interface MerchItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image_url: string;
}

async function getNewArrivals(): Promise<MerchItem[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/merchandise`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    const all: MerchItem[] = Array.isArray(data) ? data : [];
    return all.slice(0, 4);
  } catch {
    return [];
  }
}

export default async function NewArrivals() {
  const products = await getNewArrivals();

  if (products.length === 0) {
    return (
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl lg:text-4xl">New Arrivals</h2>
          <p className="text-gray-600 text-sm">No products yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center aspect-square p-8 sm:p-10 md:p-12">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-contain"
                  unoptimized={product.image_url.startsWith('http')}
                />
              </div>
              <div className="mt-4 text-left">
                <p className="text-base font-semibold text-white">{product.name}</p>
                <p className="mt-0.5 text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 text-lg font-bold text-white">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://shopee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#DA393C] px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#b52b2d] active:scale-95 md:text-base"
          >
            Shop on Shopee
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-95 md:text-base"
          >
            View All Catalogue
          </a>
        </div>

      </div>
    </section>
  );
}