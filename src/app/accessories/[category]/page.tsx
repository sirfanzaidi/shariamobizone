"use client";

import { useParams } from "next/navigation";
import HeroSlider from "@/components/HeroSlider";
import ProductSection from "@/components/ProductSection";

// Accessories Data (Vahi data jo main page par hai)
const allAccessories = [
  { id: "acc-1", name: "Sony WH-1000XM5 Wireless Headphones", specs: "(Black - Noise Cancelling)", price: 85000, originalPrice: 88000, discount: 3, image: "/products/sony-xm5.jpg" },
  { id: "acc-4", name: "Samsung Galaxy Buds 2 Pro", specs: "(Bora Purple - Wireless)", price: 35000, originalPrice: 38000, discount: 8, image: "/products/buds-2-pro.jpg" },
  { id: "acc-7", name: "JBL Flip 6 Waterproof Speaker", specs: "(Blue - Portable)", price: 28000, originalPrice: 32000, discount: 12, image: "/products/jbl-flip-6.jpg" },
  { id: "acc-2", name: "Anker PowerCore 20K", specs: "(Black - 20000mAh Power Bank)", price: 12500, originalPrice: 15000, discount: 17, image: "/products/anker-20k.jpg" },
  { id: "acc-3", name: "Apple MagSafe Charger", specs: "(White - 15W Fast Charging)", price: 9500, originalPrice: 11000, discount: 14, image: "/products/magsafe.jpg" },
  { id: "acc-5", name: "iPhone 15 Pro Silicone Case", specs: "(Storm Blue - MagSafe)", price: 4500, originalPrice: 5000, discount: 10, image: "/products/iphone-case.jpg" },
];

export default function AccessoryCategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string; // e.g., "headphones-&-speakers"

  // URL slug ko readable title mein badalna
  const formattedTitle = categorySlug
    .replace(/-/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Category ke mutabiq products filter karna
  const filteredProducts = allAccessories.filter(item => {
    const name = item.name.toLowerCase();
    const cat = categorySlug.toLowerCase();

    if (cat.includes("headphones") || cat.includes("audio")) {
      return name.includes("sony") || name.includes("buds") || name.includes("speaker");
    }
    if (cat.includes("power") || cat.includes("charger")) {
      return name.includes("anker") || name.includes("magsafe") || name.includes("power");
    }
    if (cat.includes("case") || cat.includes("protector")) {
      return name.includes("case") || name.includes("cover");
    }
    return true; // Default: show all if no match
  });

  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-20">
      <HeroSlider />
      <div className="container mx-auto px-4">
        {filteredProducts.length > 0 ? (
          <ProductSection 
            title={`${formattedTitle}`} 
            products={filteredProducts} 
          />
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-400 uppercase italic">No Products Found</h2>
            <p className="text-gray-500 mt-2">Hum jald hi is section mein naye items add karenge.</p>
          </div>
        )}
      </div>
    </main>
  );
}