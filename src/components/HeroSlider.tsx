"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { image: "/slides/Apple-iphone-17e-1600x600-2.jpg", alt: "Latest Mobile Deals" },
  { image: "/slides/Nothing-CMF-2-PRO-1600x600-1.jpg", alt: "New Arrivals" },
  { image: "/slides/realme-16-series-1600-x-600-2.jpg", alt: "Realme 16 Series" },
  { image: "/slides/Samsung-Galaxy-S26-Series-1600x600-3.jpg", alt: "Galaxy S26" },
  { image: "/slides/vivo-x300-pro-1600x600-3.jpg", alt: "Vivo X300 Pro" },
  { image: "/slides/xiaomi-17-Series-1600x600-2.jpg", alt: "Xiaomi 17 Series" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 py-6">
      <section className="relative w-full overflow-hidden group rounded-2xl shadow-xl bg-white border border-gray-100">
        
        {/* Slide Wrapper */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="min-w-full relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px]"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover" 
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow - 50% Opacity */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white via-gray-200 to-gray-500 opacity-50 hover:opacity-100 p-4 rounded-r-lg shadow-md z-20 transition-all flex items-center justify-center border-y border-r border-gray-400/40"
        >
          <ChevronLeft size={28} className="text-black" />
        </button>

        {/* Right Arrow - 180 Degree Rotated Gradient & 50% Opacity */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white via-gray-200 to-gray-500 opacity-50 hover:opacity-100 p-4 rounded-l-lg shadow-md z-20 transition-all flex items-center justify-center border-y border-l border-gray-400/40 rotate-180"
        >
          {/* Icon ko wapas seedha dikhane ke liye yahan bhi rotate kiya hai */}
          <ChevronRight size={28} className="text-black rotate-180" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? "bg-[#51b478] w-10" 
                  : "bg-white/80 w-2 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}