"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const [activeFilter, setActiveFilter] = useState("");

  // Ye dummy logic hai, real app mein aap ID se database se data nikalenge
  const isTablet = params.id?.toString().startsWith("tab-");
  const isAccessory = params.id?.toString().startsWith("acc-");

  let categoryLabel = "Mobile Phones";
  if (isTablet) categoryLabel = "Tablets";
  if (isAccessory) categoryLabel = "Accessories";

  const product = {
    name: isTablet ? "Premium Tablet Series" : "Oppo A6c",
    specs: isTablet ? "(Multi-Color 256GB + 8GB)" : "(Feather White 64GB + 4GB)",
    price: isTablet ? "145,000" : "33,900",
    oldPrice: isTablet ? "155,000" : "34,999",
    discount: isTablet ? "6% OFF" : "3% OFF",
    image: isTablet ? "/products/ipad-pro.jpg" : "/products/oppo-a6c.jpg",
  };

  const colorOptions = [
    { id: 1, name: "Default", filter: "" },
    { id: 2, name: "Deep Gray", filter: "brightness(0.5) contrast(1.2)" },
    { id: 3, name: "Silver Shine", filter: "saturate(0) brightness(1.2)" },
  ];

  const specifications = [
    { label: "Display", value: isTablet ? "12.9 inches Liquid Retina XDR" : "6.75 inches IPS LCD" },
    { label: "Battery", value: isTablet ? "10,000 mAh with Fast Charging" : "7,000 mAh Li-Po" },
    { label: "Processor", value: isTablet ? "M4 Chip / Snapdragon 8 Gen 2" : "Unisoc T7280 Octa-core" },
    { label: "Memory", value: isTablet ? "256GB Built-in, 8GB RAM" : "64GB Built-in, 4GB RAM" },
    { label: "OS", value: "Android 16 / iPadOS 17" },
    { label: "Camera", value: "13MP Main, 12MP Ultra-wide" },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* TOP SECTION: IMAGE & PRICE */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex flex-col md:flex-row gap-8">
          
          {/* Left: Gallery */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] w-full border border-gray-100 mb-6 rounded-lg bg-white overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-4 transition-all duration-500"
                style={{ filter: activeFilter }} 
              />
            </div>

            {/* Color Thumbnails */}
            <div className="flex items-center justify-center gap-4 relative max-w-sm mx-auto">
              <button className="p-1 bg-red-600 rounded-full text-white absolute -left-6 z-10 hover:bg-red-700"><ChevronLeft size={20}/></button>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <div 
                    key={color.id} 
                    onClick={() => setActiveFilter(color.filter)}
                    className={`border-2 rounded-md p-1 w-20 h-20 relative cursor-pointer ${activeFilter === color.filter ? "border-red-600" : "border-gray-200"}`}
                  >
                    <Image src={product.image} alt={color.name} fill className="object-contain" style={{ filter: color.filter }} />
                  </div>
                ))}
              </div>
              <button className="p-1 bg-red-600 rounded-full text-white absolute -right-6 z-10 hover:bg-red-700"><ChevronRight size={20}/></button>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 flex flex-col pt-2">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 uppercase leading-tight">
              {product.name} {product.specs} - Price & Specs
            </h1>
            <div className="my-4"><span className="bg-[#51b478] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">In Stock</span></div>
            <div className="flex flex-col gap-0.5 mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-[#d21e25]">Rs</span>
                <span className="text-3xl font-bold text-[#d21e25]">{product.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-lg italic">Rs {product.oldPrice}</span>
                <span className="bg-[#4d94ff] text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1 font-bold uppercase">
                   <Zap size={10} fill="white"/> {isTablet ? "Tablets" : "Mobile Phones"}
                </span>
              </div>
            </div>
            <div className="inline-block w-fit bg-red-600 text-white font-bold py-2 px-8 rounded-md border-2 border-yellow-400 shadow-[0_4px_0_0_rgba(181,26,32,1)] uppercase italic">
              {product.discount}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: SPECS TABLE */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="bg-[#0052cc] p-3 flex items-center justify-between">
            <h2 className="text-white font-bold text-sm uppercase">Specifications of {product.name}</h2>
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {specifications.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#fcfcfc]"}>
                  <td className="p-4 border border-gray-100 font-bold text-gray-700 w-1/4 text-sm bg-[#fcfcfc]">{spec.label}</td>
                  <td className="p-4 border border-gray-100 text-gray-600 text-sm">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}