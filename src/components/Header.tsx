"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ShoppingCart,
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Mobile Phones",
    href: "/mobile-phones",
    dropdown: [
      "All Mobile Phones", "APPLE Mobile Phones", "SAMSUNG Mobile Phones",
      "XIAOMI Mobile Phones", "OPPO Mobile Phones", "REALME Mobile Phones",
      "INFINIX Mobile Phones", "TECNO Mobile Phones", "VIVO Mobile Phones",
      "NOKIA Mobile Phones",
    ],
  },
  {
    name: "Tablets",
    href: "/tablets",
    dropdown: [
      "All Tablets", "Apple iPads", "Samsung Tablets",
      "Xiaomi Tablets", "Huawei Tablets",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { currency, setCurrency } = useCurrency();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setMobileMenuOpen(false);
    }
  };

  const getHrefPath = (item: any, subItem: string) => {
    const isAll = subItem.toLowerCase().includes("all");
    if (isAll) return item.href;
    const slug = subItem.toLowerCase().replace(/\s+/g, "-");
    if (item.name === "Mobile Phones") {
      const brandOnly = subItem.split(" ")[0].toLowerCase();
      return `/brand/${brandOnly}`;
    }
    return `${item.href}/${slug}`;
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#51b478] text-white text-[11px] py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="hidden md:block font-medium">
            Best Mobile Shop in Mozambique
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-2 py-0.5 rounded border border-white/30">
              <span className="text-[10px] font-bold">CURRENCY:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-[11px] font-bold outline-none cursor-pointer text-white"
              >
                <option value="MZN" className="text-black">MZN</option>
                <option value="PKR" className="text-black">PKR</option>
                <option value="USD" className="text-black">USD</option>
                <option value="EUR" className="text-black">EUR</option>
              </select>
            </div>
            <a href="tel:+258840463231" className="flex items-center gap-1 font-bold">
              <Phone size={12} /> +258 840 463 231
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
          
          {/* 1. Logo (Smaller) */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/products/Logo.png"
              alt="shariaMobiZone"
              width={150}
              height={45}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* 2. Middle Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-[11px] xl:text-[12px] font-extrabold text-gray-700 hover:text-[#51b478] uppercase tracking-tighter flex items-center gap-0.5 whitespace-nowrap transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={12} className="opacity-50" />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full bg-white shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href={getHrefPath(item, sub)}
                        className="block px-5 py-2 text-[11px] text-gray-700 hover:bg-gray-50 hover:text-[#51b478] font-bold border-l-2 border-transparent hover:border-[#51b478]"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 3. Search Bar (Compact) */}
          <form onSubmit={handleSearch} className="hidden md:flex max-w-[240px] xl:max-w-[300px] w-full">
            <div className="flex w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:border-[#51b478] text-xs transition-all"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-[#d21e25]">
                <Search size={16} />
              </button>
            </div>
          </form>

          {/* 4. Action Icons */}
          <div className="flex items-center gap-3">
            <button className="relative text-gray-700 hover:text-[#d21e25] transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#d21e25] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button className="lg:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white fixed inset-0 top-[100px] z-40 overflow-y-auto pb-20 border-t">
          <div className="p-4 bg-gray-50">
            <form onSubmit={handleSearch} className="flex relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full p-2.5 border rounded-full pl-4 pr-12 outline-none focus:border-[#51b478]"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#d21e25] text-white p-1.5 rounded-full">
                <Search size={18} />
              </button>
            </form>
          </div>
          <ul className="divide-y divide-gray-100">
            {navItems.map((item) => (
              <li key={item.name} className="flex flex-col">
                <Link
                  href={item.href}
                  className="px-6 py-4 text-gray-800 font-bold uppercase text-sm flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="bg-gray-50 px-8 py-2 grid grid-cols-1 gap-2">
                    {item.dropdown.slice(0, 6).map((sub) => (
                      <Link
                        key={sub}
                        href={getHrefPath(item, sub)}
                        className="py-1.5 text-xs text-gray-600 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}