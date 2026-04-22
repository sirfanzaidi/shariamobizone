"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, image: "/banners/banner1.jpg", title: "Latest Smartphones" },
  { id: 2, image: "/banners/banner2.jpg", title: "Accessories Deals" },
  { id: 3, image: "/banners/banner3.jpg", title: "Tablets Collection" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
<div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[500px] overflow-hidden">      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-top"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Amazon Style Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E3E6E6] via-[#E3E6E6]/60 to-transparent z-10" />
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:bg-black/20 rounded"
      >
        <span className="text-4xl">‹</span>
      </button>
      <button 
        onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:bg-black/20 rounded"
      >
        <span className="text-4xl">›</span>
      </button>
    </div>
  );
}