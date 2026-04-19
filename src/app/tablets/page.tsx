"use client";

import HeroSlider from "@/components/HeroSlider";
import ProductSection from "@/components/ProductSection";

// 6 Dummy Tablets Data
const allTablets = [
  { id: "tab-1", name: "Apple iPad Pro M4", specs: "(Space Gray 256GB + 8GB)", price: 285000, originalPrice: 295000, discount: 3, image: "/products/ipad-pro.jpg" },
  { id: "tab-2", name: "Samsung Galaxy Tab S9 Ultra", specs: "(Beige 512GB + 12GB)", price: 215000, originalPrice: 230000, discount: 7, image: "/products/tab-s9-ultra.jpg" },
  { id: "tab-3", name: "Xiaomi Pad 6 Pro", specs: "(Black 128GB + 8GB)", price: 95000, originalPrice: 99000, discount: 4, image: "/products/mi-pad-6.jpg" },
  { id: "tab-4", name: "Huawei MatePad Pro", specs: "(Golden Black 256GB)", price: 125000, originalPrice: 130000, discount: 4, image: "/products/matepad.jpg" },
  { id: "tab-5", name: "Lenovo Tab P12", specs: "(Storm Grey 128GB)", price: 75000, originalPrice: 80000, discount: 6, image: "/products/lenovo-p12.jpg" },
  { id: "tab-6", name: "Realme Pad 2", specs: "(Inspiration Green 128GB)", price: 55000, originalPrice: 58000, discount: 5, image: "/products/realme-pad.jpg" },
];

export default function AllTabletsPage() {
  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-20">
      {/* Top Slider */}
      <HeroSlider />

      <div className="container mx-auto px-4">
        {/* All Tablets Section */}
        <ProductSection 
          title="All Tablets & Prices in Mozambique" 
          products={allTablets} 
          viewAllLink="/tablets"
        />

        {/* Categories by Price (Jaisa mobile page par tha) */}
        <ProductSection 
          title="High-End Professional Tablets" 
          products={allTablets.slice(0, 3)} 
        />
        
        <ProductSection 
          title="Budget Friendly Tablets" 
          products={allTablets.slice(3, 6)} 
        />
      </div>
    </main>
  );
}