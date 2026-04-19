"use client";

import { useParams } from "next/navigation";
import HeroSlider from "@/components/HeroSlider";
import ProductSection from "@/components/ProductSection";

// Tablets ka Dummy Data
const tabletProducts = [
  { id: "t1", name: "Apple iPad Air M2", specs: "(Space Gray 128GB + 8GB)", price: 185000, originalPrice: 190000, discount: 3, image: "/products/ipad-pro-max.jpg" },
  { id: "t2", name: "Samsung Galaxy Tab S9", specs: "(Graphite 256GB + 12GB)", price: 145000, originalPrice: 155000, discount: 6, image: "/products/tab-s9-ultra.jpg" },
  { id: "t3", name: "Xiaomi Pad 6", specs: "(Gravity Gray 128GB + 8GB)", price: 89000, originalPrice: 95000, discount: 6, image: "/products/mi-pad-6.jpg" },
];

export default function TabletBrandPage() {
  const params = useParams();
  const brandName = params.brandName as string;

  // URL slug ko saaf karke Heading banana (e.g. apple-ipads -> Apple Ipads)
  const formattedTitle = brandName
    .replace("-", " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-20">
      {/* Hero Slider for Tablets (Aap yahan tablet specific slider bhi laga sakte hain) */}
      <HeroSlider />

      <div className="container mx-auto px-4">
        {/* Dynamic Title */}
        <ProductSection 
          title={`${formattedTitle} and Prices`} 
          products={tabletProducts} 
        />
        
        {/* Additional Sections */}
        <ProductSection title="Latest Tablets in Mozambique" products={tabletProducts} />
        <ProductSection title="Budget Friendly Tablets" products={tabletProducts} />
      </div>
    </main>
  );
}