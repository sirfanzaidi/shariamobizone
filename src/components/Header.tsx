"use client";

import { useState, useEffect } from "react"; // useEffect add kiya
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Phone,
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
  MapPin,
  User,
  ChevronRight,
} from "lucide-react";

import { useCurrency } from "@/context/CurrencyContext";
import { useCartStore } from "@/store/useCartStore";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Mobile Phones",
    href: "/mobile-phones",
    dropdown: [
      "All Mobile Phones", "APPLE", "SAMSUNG", "XIAOMI", "OPPO", 
      "REALME", "INFINIX", "TECNO", "VIVO", "NOKIA",
    ],
  },
  {
    name: "Tablets",
    href: "/tablets",
    dropdown: [
      "All Tablets", "Apple iPads", "Samsung Tablets", "Xiaomi Tablets", "Huawei Tablets",
    ],
  },
  {
    name: "Accessories",
    href: "/accessories",
    dropdown: [
      "All Accessories", "Headphones & Speakers", "Power Banks", 
      "Chargers & Cables", "Cases & Screen Protectors",
    ],
  },
];

export default function Header() {
  const [mounted, setMounted] = useState(false); // Hydration check
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { currency, setCurrency } = useCurrency();
  const router = useRouter();

  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // --- FIX: Hydration Handle ---
  // Jab component browser mein mount ho jaye tab 'mounted' ko true karein
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSidebarOpen(false);
    }
  };

  const getHrefPath = (item: any, subItem: string) => {
    const isAll = subItem.toLowerCase().includes("all");
    if (isAll) return item.href;
    if (item.name === "Mobile Phones") return `/brand/${subItem.toLowerCase()}`;
    const slug = subItem.toLowerCase().replace(/\s+/g, "-");
    return `${item.href}/${slug}`;
  };

  return (
    <>
      {/* --- AMAZON SIDEBAR (DRAWER) --- */}
      <div 
        className={`fixed inset-0 bg-black/70 z-[100] transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={() => setIsSidebarOpen(false)}
      />
      <div className={`fixed top-0 left-0 h-full w-[280px] md:w-[350px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="bg-[#232f3e] text-white p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center"><User size={20} /></div>
          <p className="font-bold text-lg">Hello, Sign In</p>
          <X size={24} className="ml-auto cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        </div>
        <div className="overflow-y-auto h-full pb-20">
          <div className="py-4 border-b">
            <h3 className="px-6 text-lg font-bold text-gray-900 mb-2">Shop By Category</h3>
            <ul className="text-sm text-gray-700">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsSidebarOpen(false)}>
                  <li className="px-6 py-3 hover:bg-gray-100 flex justify-between items-center">
                    {item.name} <ChevronRight size={16} className="text-gray-400" />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <header className="w-full sticky top-0 z-50">
        <div className="bg-[#131921] text-white py-2">
          <div className="container mx-auto px-4 flex items-center gap-4">
            <Link href="/" className="flex-shrink-0 border border-transparent hover:border-white p-1 transition-all">
              <Image 
                src="/Logo.png"
                alt="Sharia MobiZone"
                width={170}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center border border-transparent hover:border-white p-1 cursor-pointer">
              <MapPin size={16} className="mt-2 text-gray-300" />
              <div className="ml-1">
                <p className="text-[11px] text-gray-400 leading-none">Deliver to</p>
                <p className="text-[13px] font-bold leading-none">Pakistan</p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="flex-1 flex h-10 items-center">
              <div className="flex w-full h-full relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Sharia MobiZone"
                  className="w-full h-full rounded-l-md px-4 text-black text-sm focus:outline-none"
                />
                <button type="submit" className="bg-[#febd69] hover:bg-[#f3a847] h-full px-5 rounded-r-md flex items-center justify-center transition-colors">
                  <Search className="text-[#131921]" size={20} />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden sm:flex flex-col border border-transparent hover:border-white p-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">Currency</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-[13px] font-bold outline-none cursor-pointer text-white"
                >
                  <option value="MNZ" className="text-black">MNZ</option>
                  <option value="USD" className="text-black">USD</option>
                  <option value="EUR" className="text-black">EUR</option>
                </select>
              </div>

              {/* --- UPDATED CART SECTION --- */}
              <Link href="/cart" className="flex items-center border border-transparent hover:border-white p-1 relative h-10">
                <div className="relative">
                  <ShoppingCart size={32} />
                  {/* Mounted check: Sirf browser load hone ke baad count dikhaye ga */}
                  {mounted && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#f3a847] text-[16px] font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
                <p className="hidden md:block font-bold self-end mb-1 ml-1 text-sm">Cart</p>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM LAYER */}
        <div className="bg-[#232f3e] text-white px-4 py-1 flex items-center gap-1 md:gap-4 text-[13px] font-medium relative z-40">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-1 border border-transparent hover:border-white px-2 py-1 font-bold whitespace-nowrap"
          >
            <Menu size={18} /> All
          </button>

          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group whitespace-nowrap"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.href} className="border border-transparent hover:border-white px-2 py-1 flex items-center gap-0.5 transition-all">
                {item.name} {item.dropdown && <ChevronDown size={14} className="opacity-60" />}
              </Link>

              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute left-0 top-[100%] bg-white shadow-2xl border border-gray-200 py-3 min-w-[220px] z-[999] text-gray-800 rounded-b-sm">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub}
                      href={getHrefPath(item, sub)}
                      className="block px-6 py-2 hover:bg-gray-100 hover:text-[#007185] transition-colors font-semibold text-xs border-b border-gray-50 last:border-0"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="ml-auto hidden md:flex items-center gap-2 text-[#febd69] font-bold whitespace-nowrap">
            <Phone size={14} /> 847772888          </div>
        </div>
      </header>
    </>
  );
}