"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Syed Irfan Zaidi",
    role: "Graphic Designer",
    image: "https://i.pravatar.cc/150?u=irfan",
    text: "Excelente atendimento e telemóveis de confiança. Recomendo a todos em Moçambique!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Freelancer",
    image: "https://i.pravatar.cc/150?u=sara",
    text: "Comprei o meu Infinix aqui e chegou muito rápido. Produto original e selado.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "Tech Enthusiast",
    image: "https://i.pravatar.cc/150?u=ahmed",
    text: "A ShariaMobiZone é a melhor loja para quem procura qualidade e bons preços.",
    rating: 4,
  },
  {
    id: 4,
    name: "Zeeshan Ali",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=zeeshan",
    text: "Muito satisfeita com a minha compra. O suporte ao cliente é nota 10!",
    rating: 5,
  },
  {
    id: 5,
    name: "Mariam Sheikh",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?u=mariam",
    text: "Preços imbatíveis e entrega segura. Finalmente uma loja online de confiança.",
    rating: 5,
  },
  {
    id: 6,
    name: "Hamza Malik",
    role: "Vlogger",
    image: "https://i.pravatar.cc/150?u=hamza",
    text: "Produtos de alta qualidade e entrega pontual em Maputo. Cinco estrelas!",
    rating: 4,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds baad slide change hogi
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 uppercase italic mb-2">
            What Our <span className="text-red-600">Customers</span> Say
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Content */}
          <div className="relative h-[350px] md:h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative w-full"
              >
                <Quote className="absolute top-6 right-8 text-red-100" size={80} />
                
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <div className="absolute inset-0 bg-red-600 rounded-full rotate-6"></div>
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          fill={i < testimonials[currentIndex].rating ? "#facc15" : "none"} 
                          className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-200"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg italic mb-4 leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <h4 className="font-bold text-xl text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-red-600 font-medium uppercase tracking-widest">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${index === currentIndex ? "w-8 bg-red-600" : "w-2 bg-gray-300"}`}
                ></div>
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}