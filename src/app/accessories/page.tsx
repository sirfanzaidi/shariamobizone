"use client";


import ProductSection from "@/components/ProductSection";

// 6 Dummy Accessories Data
const allAccessories = [
  { 
    id: "acc-1", 
    name: "Sony WH-1000XM5 Wireless Headphones", 
    specs: "(Black - Noise Cancelling)", 
    price: 85000, 
    originalPrice: 88000, 
    discount: 3, 
    image: "/products/sony-xm5.jpg" 
  },
  { 
    id: "acc-2", 
    name: "Anker PowerCore 20K", 
    specs: "(Black - 20000mAh Power Bank)", 
    price: 12500, 
    originalPrice: 15000, 
    discount: 17, 
    image: "/products/anker-20k.jpg" 
  },
  { 
    id: "acc-3", 
    name: "Apple MagSafe Charger", 
    specs: "(White - 15W Fast Charging)", 
    price: 9500, 
    originalPrice: 11000, 
    discount: 14, 
    image: "/products/magsafe.jpg" 
  },
  { 
    id: "acc-4", 
    name: "Samsung Galaxy Buds 2 Pro", 
    specs: "(Bora Purple - Wireless)", 
    price: 35000, 
    originalPrice: 38000, 
    discount: 8, 
    image: "/products/buds-2-pro.jpg" 
  },
  { 
    id: "acc-5", 
    name: "iPhone 15 Pro Silicone Case", 
    specs: "(Storm Blue - MagSafe)", 
    price: 4500, 
    originalPrice: 5000, 
    discount: 10, 
    image: "/products/iphone-case.jpg" 
  },
  { 
    id: "acc-6", 
    name: "Logitech MX Master 3S", 
    specs: "(Pale Grey - Wireless Mouse)", 
    price: 22000, 
    originalPrice: 24000, 
    discount: 8, 
    image: "/products/mx-master.jpg" 
  },
];

export default function AccessoriesPage() {
  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-20">
      {/* Slider */}
      

      <div className="container mx-auto px-4">
        {/* Main Section */}
        <ProductSection 
          title="All Accessories & Prices in Mozambique" 
          products={allAccessories} 
        />

        {/* Category: Audio */}
        <ProductSection 
          title="Headphones & Speakers" 
          products={allAccessories.filter(a => a.id === "acc-1" || a.id === "acc-4")} 
        />
        
        {/* Category: Power & Charging */}
        <ProductSection 
          title="Power Banks & Chargers" 
          products={allAccessories.filter(a => a.id === "acc-2" || a.id === "acc-3")} 
        />
      </div>
    </main>
  );
}