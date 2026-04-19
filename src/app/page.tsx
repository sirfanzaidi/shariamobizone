"use client";

import HeroSlider from "@/components/HeroSlider";
import BrandLogos from "@/components/BrandLogos";
import ProductSection from "@/components/ProductSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const featuredPhones = [
  {
    id: "1",
    name: "Apple iPhone 17 Pro Max",
    specs: "(Deep Blue 256GB + 12GB)",
    image: "/products/iphone-16-pro-max.jpg",
    price: 559400,
    originalPrice: 585000,
    discount: 4,
  },
  {
    id: "2",
    name: "Apple iPhone 17",
    specs: "(Sage 256GB + 8GB)",
    image: "/products/iPhone-17-Sage.jpg",
    price: 399500,
    originalPrice: 428300,
    discount: 7,
  },
  {
    id: "3",
    name: "Vivo X300 Pro",
    specs: "(Phantom Black 512GB + 16GB)",
    image: "/products/Vivo-X300-Pro.jpg",
    price: 324800,
    originalPrice: 349999,
    discount: 7,
  },
  {
    id: "4",
    name: "Samsung Galaxy S26+",
    specs: "(Cobalt Violet 512GB + 12GB)",
    image: "/products/S26plus.jpg",
    price: 409999,
    originalPrice: 419999,
    discount: 2,
  },
  {
    id: "5",
    name: "Samsung Galaxy S26",
    specs: "(Black 512GB + 12GB)",
    image: "/products/S262.jpg",
    price: 356999,
    originalPrice: 366999,
    discount: 3,
  },
  {
    id: "6",
    name: "Motorola Razr 50 5G",
    specs: "(Koala Grey 256GB + 8GB)",
    image: "/products/Razar.jpg",
    price: 218700,
    originalPrice: 229999,
    discount: 5,
  },
];

const latestPhones = [
  {
    id: "7",
    name: "Motorola Razr 50 5G",
    specs: "(Koala Grey 256GB + 8GB)",
    image: "/products/Razar.jpg",
    price: 218700,
    originalPrice: 229999,
    discount: 5,
  },
  {
    id: "8",
    name: "Samsung Galaxy S26",
    specs: "(Black 512GB + 12GB)",
    image: "/products/S262.jpg",
    price: 356999,
    originalPrice: 386999,
    discount: 1,
  },
  {
    id: "9",
    name: "Samsung Galaxy S26+",
    specs: "(Cobalt Violet 512GB + 12GB)",
    image: "/products/S26plus.jpg",
    price: 409999,
    originalPrice: 439999,
    discount: 7,
  },
  {
    id: "10", // Id missing thi, fix kar di
    name: "Apple iPhone 17",
    specs: "(Sage 256GB + 8GB)",
    image: "/products/iPhone-17-Sage.jpg",
    price: 399500,
    originalPrice: 428300,
    discount: 7,
  },
  {
    id: "11",
    name: "Apple iPhone 17 Pro Max",
    specs: "(Deep Blue 256GB + 12GB)",
    image: "/products/iphone-16-pro-max.jpg",
    price: 559400,
    originalPrice: 585000,
    discount: 4,
  },
  {
    id: "12",
    name: "Apple iPhone 17",
    specs: "(Sage 256GB + 8GB)",
    image: "/products/iPhone-17-Sage.jpg",
    price: 399500,
    originalPrice: 428300,
    discount: 7,
  },
];

const latestTablets = [
  { id: "tab-1", name: "Apple iPad Pro M4", specs: "(Space Gray 256GB + 8GB)", price: 285000, originalPrice: 295000, discount: 3, image: "/products/ipad-pro.jpg" },
  { id: "tab-2", name: "Samsung Galaxy Tab S9 Ultra", specs: "(Beige 512GB + 12GB)", price: 215000, originalPrice: 230000, discount: 7, image: "/products/tab-s9-ultra.jpg" },
  { id: "tab-3", name: "Xiaomi Pad 6 Pro", specs: "(Black 128GB + 8GB)", price: 95000, originalPrice: 99000, discount: 4, image: "/products/mi-pad-6.jpg" },
  { id: "tab-4", name: "Huawei MatePad Pro", specs: "(Golden Black 256GB)", price: 125000, originalPrice: 130000, discount: 4, image: "/products/matepad.jpg" },
  { id: "tab-5", name: "Lenovo Tab P12", specs: "(Storm Grey 128GB)", price: 75000, originalPrice: 80000, discount: 6, image: "/products/lenovo-p12.jpg" },
  { id: "tab-6", name: "Realme Pad 2", specs: "(Inspiration Green 128GB)", price: 55000, originalPrice: 58000, discount: 5, image: "/products/realme-pad.jpg" },
];

const latestAccessories = [
  {
    id: "19",
    name: "Nothing CMF Headphone 1",
    specs: "(Black Edition)",
    image: "/products/CMF-Headphone.jpg",
    price: 88300,
    originalPrice: 89900,
    discount: 2,
  },
  {
    id: "20",
    name: "Huawei Watch GT 6 46 mm",
    specs: "(Green Woven Strap)",
    image: "/products/GT6.jpg",
    price: 53900,
    originalPrice: 70000,
    discount: 23,
  },
  {
    id: "21",
    name: "Samsung Galaxy Fit 3 (Black)",
    specs: "(Official Warranty)",
    image: "https://ext.same-assets.com/638294991/906439899.png",
    price: 10500,
    originalPrice: 16650,
    discount: 37,
  },
  {
    id: "22",
    name: "Zero Navigator Smartwatch",
    specs: "(Orange Sport)",
    image: "/products/Zero-Navigator.jpg",
    price: 14900,
    originalPrice: 33000,
    discount: 55,
  },
  {
    id: "23",
    name: "Motorola Moto Buds+",
    specs: "(Forest Grey)",
    image: "/products/Moto-Buds.jpg",
    price: 17500,
    originalPrice: 19999,
    discount: 12,
  },
  {
    id: "24",
    name: "OnePlus Buds Pro 3",
    specs: "(Midnight Opus)",
    image: "/products/OnePlus-Buds.jpg",
    price: 38900,
    originalPrice: 50000,
    discount: 22,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSlider />
      <BrandLogos />
      <ProductSection
        title="Featured Mobile Phones"
        products={featuredPhones}
        viewAllLink="/mobile-phones"
      />
      <ProductSection
        title="Latest Mobile Phones and Prices"
        products={latestPhones}
        viewAllLink="/mobile-phones"
      />
      <ProductSection
        title="Latest Tablets and Prices"
        products={latestTablets}
        viewAllLink="/tablets"
      />
      <ProductSection
        title="Latest Accessories and Prices"
        products={latestAccessories}
        viewAllLink="/accessories"
      />
      <Testimonials />
      <Features />
      <BlogSection />
      <Footer />
    </main>
  );
}