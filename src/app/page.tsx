"use client";

import HeroSlider from "@/components/HeroSlider";
import { allProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext"; // Import add kiya

export default function HomePage() {
  const { currency } = useCurrency(); // Currency hook call kiya

  // Categories paths check kar lein
  const categories = [
    { title: "Mobile Phones", image: "/products/oppo-a6c.jpg", link: "/mobile-phones" },
    { title: "Tablets", image: "/products/mi-pad-6.jpg", link: "/tablets" },
    { title: "Accessories", image: "/products/sony-xm5.jpg", link: "/accessories" },
    { title: "Latest Deals", image: "/products/S26plus.jpg", link: "/deals" },
  ];

  return (
    <main className="bg-[#E3E6E6] min-h-screen pb-12 font-sans">
      <HeroSlider />

      <div className="container mx-auto px-4 relative z-20 -mt-10 md:-mt-20 lg:-mt-24">
        {/* --- Amazon Grid: Category Boxes --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-5 shadow-sm flex flex-col h-[420px]">
              <h2 className="text-xl font-bold text-[#0F1111] mb-3">{cat.title}</h2>
              <div className="flex-1 relative bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={300}
                  height={300}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Link href={cat.link} className="text-[#007185] text-sm font-semibold mt-4 hover:text-[#C7511F] hover:underline">
                Shop now
              </Link>
            </div>
          ))}
        </div>

        {/* --- Best Sellers: Electronics (General) --- */}
        <div className="bg-white p-6 shadow-sm mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0F1111]">Best Sellers in Electronics</h2>
            <Link href="/mobile-phones" className="text-[#007185] hover:underline text-sm font-semibold">See all</Link>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {allProducts.slice(0, 10).map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="min-w-[160px] group">
                <div className="h-40 w-full flex items-center justify-center mb-3 bg-white">
                  <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-sm text-[#007185] group-hover:text-[#C7511F] group-hover:underline line-clamp-2 h-10 mb-1">{p.name}</p>
                <p className="text-lg font-bold text-[#0F1111]">{currency} {p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* --- 1. Best Sellers in Mobile Phones --- */}
        <div className="bg-white p-6 shadow-sm mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0F1111]">Best Sellers in Mobile Phones</h2>
            <Link href="/mobile-phones" className="text-[#007185] hover:underline text-sm font-semibold">See all</Link>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {allProducts.filter((p: any) => p.category === "Mobile Phones").slice(0, 10).map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="min-w-[160px] group">
                <div className="h-40 w-full flex items-center justify-center mb-3 bg-white">
                  <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-sm text-[#007185] group-hover:text-[#C7511F] group-hover:underline line-clamp-2 h-10 mb-1">{p.name}</p>
                <p className="text-lg font-bold text-[#0F1111]">{currency} {p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* --- 2. Best Sellers in Tablets --- */}
        <div className="bg-white p-6 shadow-sm mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0F1111]">Best Sellers in Tablets</h2>
            <Link href="/tablets" className="text-[#007185] hover:underline text-sm font-semibold">See all</Link>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {allProducts.filter((p: any) => p.category === "Tablets").slice(0, 10).map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="min-w-[160px] group">
                <div className="h-40 w-full flex items-center justify-center mb-3 bg-white">
                  <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-sm text-[#007185] group-hover:text-[#C7511F] group-hover:underline line-clamp-2 h-10 mb-1">{p.name}</p>
                <p className="text-lg font-bold text-[#0F1111]">{currency} {p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* --- 3. Best Sellers in Accessories --- */}
        <div className="bg-white p-6 shadow-sm mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0F1111]">Best Sellers in Accessories</h2>
            <Link href="/accessories" className="text-[#007185] hover:underline text-sm font-semibold">See all</Link>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {allProducts.filter((p: any) => p.category === "Accessories").slice(0, 10).map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="min-w-[160px] group">
                <div className="h-40 w-full flex items-center justify-center mb-3 bg-white">
                  <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-sm text-[#007185] group-hover:text-[#C7511F] group-hover:underline line-clamp-2 h-10 mb-1">{p.name}</p>
                <p className="text-lg font-bold text-[#0F1111]">{currency} {p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}