"use client";

import { X, ChevronRight, User } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop (Kala parda jo background hide karta hai) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`} 
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div className={`fixed top-0 left-0 h-full w-[280px] md:w-[350px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        
        {/* User Header (Amazon Style) */}
        <div className="bg-[#232f3e] text-white p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="text-[#232f3e]" size={20} />
          </div>
          <p className="font-bold text-lg">Hello, Sign In</p>
          <button onClick={onClose} className="ml-auto">
             <X size={24} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-[calc(100%-64px)] pb-10">
          
          <div className="py-4 border-b">
            <h3 className="px-6 text-lg font-bold text-gray-900 mb-2">Trending</h3>
            <ul className="text-sm text-gray-700">
              <Link href="/deals" onClick={onClose}><li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Best Sellers</li></Link>
              <Link href="/" onClick={onClose}><li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">New Releases</li></Link>
            </ul>
          </div>

          <div className="py-4 border-b">
            <h3 className="px-6 text-lg font-bold text-gray-900 mb-2">Shop By Category</h3>
            <ul className="text-sm text-gray-700">
              <li className="px-6 py-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                Mobile Phones <ChevronRight size={16} className="text-gray-400" />
              </li>
              <li className="px-6 py-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                Tablets <ChevronRight size={16} className="text-gray-400" />
              </li>
              <li className="px-6 py-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                Accessories <ChevronRight size={16} className="text-gray-400" />
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h3 className="px-6 text-lg font-bold text-gray-900 mb-2">Help & Settings</h3>
            <ul className="text-sm text-gray-700">
              <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Your Account</li>
              <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Customer Service</li>
              <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer">Sign Out</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}