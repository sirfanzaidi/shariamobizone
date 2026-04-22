"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { useCartStore } from "@/store/useCartStore"; // --- 1. Store Import karein ---

interface Product {
  id: string;
  name: string;
  specs: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductSection({ title, products, viewAllLink }: ProductSectionProps) {
  const { formatPrice } = useCurrency();
  const addToCart = useCartStore((state) => state.addToCart); // --- 2. Action nikalen ---

  return (
    <section className="py-8">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-6 border-b-2 border-red-600 pb-2">
        <h2 className="text-xl font-bold text-gray-800 uppercase italic flex items-center gap-2">
          <div className="w-2 h-6 bg-red-600"></div>
          {title}
        </h2>
        {viewAllLink && (
          <Link 
            href={viewAllLink} 
            className="text-sm font-bold text-red-600 hover:underline uppercase"
          >
            View All
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => {
          // --- 3. Har product ke liye handle function ---
          const handleAction = (e: React.MouseEvent) => {
            e.preventDefault(); // Redirect hone se rokta hai
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            });
          };

          return (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`} 
              className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full relative"
            >
              {/* Discount Badge */}
              {product.discount && product.discount > 0 && (
                <div className="absolute top-2 right-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded italic border border-yellow-400">
                  {product.discount}% OFF
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-48 w-full mb-4 bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 150px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1 group-hover:text-red-600 transition-colors">
                  {product.name} {product.specs}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <div className="flex flex-col mb-3">
                    <span className="text-lg font-bold text-red-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && product.originalPrice > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-xs italic">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center gap-0.5 font-bold">
                          <Zap size={8} fill="white"/> MOBILES
                        </span>
                      </div>
                    )}
                  </div>

                  {/* --- 4. Updated Button --- */}
                  <button 
                    onClick={handleAction}
                    className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] py-2 rounded-lg text-xs font-bold transition-all shadow-sm border border-[#fcd200] active:scale-95"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}