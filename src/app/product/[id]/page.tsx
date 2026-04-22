"use client";

import { useCartStore } from "@/store/useCartStore";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ShoppingCart, Zap, ShieldCheck, Truck } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const { formatPrice } = useCurrency();
  const addToCart = useCartStore((state) => state.addToCart);

  // Note: Yahan aap apna asli products data fetch karein ge
  // Abhi ke liye hum placeholder data use kar rahe hain testing ke liye
  const product = {
    id: params.id as string,
    name: "Product Name", // Replace with real product name logic
    price: 45000,
    image: "/products/oppo-a6c.jpg", // Replace with real image path
    description: "Premium quality mobile with advanced features and long battery life.",
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    // Optional: Alert ko hata dein ya success message dikhayein
    // alert("Added to cart!"); 
  };

  return (
    <div className="bg-white min-h-screen py-6 md:py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Image Section */}
          <div className="lg:col-span-1">
            <div className="relative aspect-square border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-6"
                priority
              />
            </div>
          </div>

          {/* MIDDLE: Product Info */}
          <div className="lg:col-span-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-[#007185] hover:underline cursor-pointer text-sm mb-4">Visit the Store</p>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">★★★★☆</div>
              <span className="text-[#007185] text-sm italic">1,240 ratings</span>
            </div>

            <hr className="mb-6 border-gray-200" />
            
            <div className="mb-6">
              <span className="text-3xl font-medium text-red-700">
                {formatPrice(product.price)}
              </span>
              <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-600">About this item:</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700 leading-relaxed">
                <li>High-performance processor for seamless multitasking.</li>
                <li>Stunning display quality for an immersive experience.</li>
                <li>Long-lasting battery with fast charging support.</li>
                <li>Professional grade camera system.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Checkout Box */}
          <div className="lg:col-span-1">
            <div className="border border-gray-300 rounded-2xl p-6 sticky top-24 shadow-md bg-white">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {formatPrice(product.price)}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-medium">
                <Truck size={18} className="text-gray-400" />
                <span>FREE delivery in 24 hours</span>
              </div>

              <div className="text-green-700 font-bold text-lg mb-6">In Stock</div>

              <div className="space-y-3">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black py-3 rounded-full font-bold text-sm shadow-sm transition-all border border-[#fcd200] flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>

                <button 
                  className="w-full bg-[#ffa41c] hover:bg-[#fa8914] text-black py-3 rounded-full font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Zap size={18} /> Buy Now
                </button>
              </div>

              <div className="mt-8 space-y-3 text-xs text-gray-600 border-t pt-6">
                <div className="flex justify-between">
                  <span>Ships from:</span>
                  <span className="font-semibold text-gray-900">Sharia MobiZone</span>
                </div>
                <div className="flex justify-between">
                  <span>Sold by:</span>
                  <span className="font-semibold text-gray-900">Sharia MobiZone</span>
                </div>
                <div className="flex items-center gap-2 text-[#007185] cursor-pointer hover:underline">
                  <ShieldCheck size={14} />
                  <span>Secure transaction</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}