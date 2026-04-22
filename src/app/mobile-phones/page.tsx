"use client";


import ProductSection from "@/components/ProductSection";

// Full Dummy Data with Specs and IDs
const allMobileProducts = [
  { id: "1", name: "Oppo A6c", specs:"(Feather White 64GB + 4GB)", price: 33900, originalPrice: 34999, discount: 3, image: "/products/oppo-A6c - Copy.jpg" },
  { id: "2", name: "Tecno Camon 50 4G", specs: "(Black 256GB + 8GB)", price: 74000, originalPrice: 75000, discount: 1, image: "/products/Tecno-Camon-50-4G.jpg" },
  { id: "3", name: "Infinix Note 60 Pro 5G", specs: "(256GB + 8GB)", price: 109999, originalPrice: 0, discount: 0, image: "/products/Infinix-Note-60-Pro-5G.jpg" },
  { id: "4", name: "Xiaomi Poco C85 4G", specs: "(Black 256GB + 8GB)", price: 44500, originalPrice: 47999, discount: 7, image: "/products/Xiaomi-Poco-C85-4G.jpg" },
  { id: "5", name: "Xiaomi Redmi Note 15 Pro 4G", specs: "(Black 256GB + 12GB)", price: 113700, originalPrice: 114999, discount: 1, image: "/products/Xiaomi-Redmi-Note-15-Pro-4G.jpg" },
  { id: "6", name: "Xiaomi Redmi Note 15 4G", specs: "(Forest Green 128GB + 8GB)", price: 68900, originalPrice: 69999, discount: 2, image: "/products/Xiaomi-Redmi-Note-15-4G.jpg" },
];

export default function MobilePhonesPage() {
  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-20">
      

      <div className="container mx-auto px-4">
        {/* All Mobiles Section */}
        <ProductSection 
          title="All Mobile Phones & Prices in Mozambique" 
          products={allMobileProducts} 
        />

        {/* Price Categories */}
        <ProductSection 
          title="Rs. 45,000 and More Mobile Phones" 
          products={allMobileProducts.filter(p => p.price >= 45000)} 
        />
        
        <ProductSection 
          title="Budget Mobile Phones" 
          products={allMobileProducts.filter(p => p.price < 45000)} 
        />
      </div>
    </main>
  );
}