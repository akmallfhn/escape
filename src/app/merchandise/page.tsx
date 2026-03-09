import MerchHero from "@/components/sections/hero-merch";
import MerchCarousel from "@/components/sections/merch-carrousel";
import NewArrivals from "@/components/sections/new-arrivals";
import ProductCollection from "@/components/sections/product-collection";
import LogoScroll from "@/components/ui/logo-stripe";
export const dynamic = 'force-static';


export default function Merchandise() {
    return (
        <div className="bg-black text-white overflow-hidden">
           <MerchHero />
           <NewArrivals />
           {/* <MerchCarousel /> */}
           <ProductCollection />
           {/* <LogoScroll /> */}

        </div>
    )
}