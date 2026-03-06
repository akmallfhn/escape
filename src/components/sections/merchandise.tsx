import Image from "next/image";

interface MerchItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image_url: string;
}

async function getMerchandise(): Promise<MerchItem[]> {
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

export default async function MerchandiseSection() {
  const products = await getMerchandise();

  if (products.length === 0) {
    return (
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4">
            Escape Official Merchandise
          </h2>
          <p className="text-gray-500">No products available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Escape Official Merchandise
          </h2>
          <p className="mt-3 text-sm text-gray-400 md:text-base">
            Jadi bagian dari Escape dengan membeli merchandise dan fashion dari Escape
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group">
              <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center aspect-[3/4] p-6">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="h-full w-full object-contain"
                  unoptimized={product.image_url.startsWith('http')}
                />
              </div>
              <div className="mt-4 text-left">
                <p className="text-sm font-semibold text-white md:text-base">{product.name}</p>
                <p className="mt-0.5 text-xs text-gray-500 md:text-sm">{product.category}</p>
                <p className="mt-2 text-lg font-bold text-white md:text-xl">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 md:mt-16">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:bg-gray-100 active:scale-95 md:text-base"
          >
            Buy on Shopee
          </a>
          <a
            href="/merchandise"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-95 md:text-base"
          >
            View All Catalogue
          </a>
        </div>

      </div>
    </section>
  );
}