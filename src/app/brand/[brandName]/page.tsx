"use client";

import { useParams } from "next/navigation";

import ProductSection from "@/components/ProductSection"; // Path check karlein

// Dummy Data (Wahi jo Mobile Phones page par tha)
const products = [
  { id: "1", name: "Oppo A6c", specs: "(Feather White 64GB + 4GB)", price: 33900, originalPrice: 34999, discount: 3, image: "/products/oppo-A6c - Copy .jpg" },
  { id: "2", name: "Tecno Camon 50 4G", specs: "(Black 256GB + 8GB)", price: 74000, originalPrice: 75000, discount: 1, image: "/products/Tecno-Camon-50-4G.jpg" },
  { id: "3", name: "Infinix Note 60 Pro 5G", specs: "(256GB + 8GB)", price: 109999, originalPrice: 0, discount: 0, image: "/products/Infinix-Note-60-Pro-5G.jpg" },
  { id: "4", name: "Xiaomi Poco C85 4G", specs: "(Black 256GB + 8GB)", price: 44500, originalPrice: 47999, discount: 7, image: "/products/Xiaomi-Poco-C85-4G.jpg" },
  { id: "5", name: "Xiaomi Redmi Note 15 Pro 4G", specs: "(Black 256GB + 12GB)", price: 113700, originalPrice: 114999, discount: 1, image: "/products/Xiaomi-Redmi-Note-15-Pro-4G.jpg" },
  { id: "6", name: "Xiaomi Redmi Note 15 4G", specs: "(Forest Green 128GB + 8GB)", price: 68900, originalPrice: 69999, discount: 2, image: "/products/Xiaomi-Redmi-Note-15-4G.jpg" },
];

export default function BrandPage() {
  const params = useParams();
  const brandName = params.brandName as string;

  // URL se brand ka naam nikal kar capitalize karna (e.g. apple -> Apple)
  const formattedBrand = brandName.charAt(0).toUpperCase() + brandName.slice(1);

  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-20">
      

      <div className="container mx-auto px-4">
        {/* Ab title dynamic ho jayega: Apple Mobile Phones, Samsung Mobile Phones etc. */}
        <ProductSection 
          title={`${formattedBrand} Mobile Phones`} 
          products={products} 
        />
        
        {/* Baki sections jo aapne pehle maange thay */}
        <ProductSection title="Rs. 45,000 and More Mobile Phones" products={products} />
        <ProductSection title="Rs. 35,000 - Rs. 45,000 Mobile Phones" products={products} />
        <ProductSection title="Rs. 25,000 - Rs. 35,000 Mobile Phones" products={products} />
      </div>
    </main>
  );
}