"use client";
import { useCartStore } from "@/store/useCartStore";
import { useCurrency } from "@/context/CurrencyContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const { formatPrice } = useCurrency();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
        <Link href="/" className="bg-[#ffd814] px-6 py-2 rounded-lg font-medium shadow-sm">
          Voltar para as compras
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Items List */}
        <div className="lg:col-span-3 bg-white p-6 shadow-sm rounded-sm">
          <h1 className="text-2xl font-bold border-b pb-4 mb-6">Carrinho de Compras</h1>
          
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 border-b pb-6 mb-6 last:border-0">
              <div className="relative w-32 h-32 flex-shrink-0 mx-auto">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-lg font-medium text-[#007185] hover:underline cursor-pointer">{item.name}</h2>
                <p className="text-sm text-green-700 font-bold my-1">Em estoque</p>
                
                <div className="flex items-center gap-4 mt-4">
                  {/* Quantity Controller */}
                  <div className="flex items-center border rounded-lg bg-[#F0F2F2] shadow-sm">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-200"><Minus size={16}/></button>
                    <span className="px-4 font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-200"><Plus size={16}/></button>
                  </div>
                  
                  <div className="h-4 w-[1px] bg-gray-300"></div>
                  
                  <button onClick={() => removeFromCart(item.id)} className="text-[#007185] text-sm hover:underline flex items-center gap-1">
                    <Trash2 size={14} /> Excluir
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-xl font-bold">{formatPrice(item.price)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Checkout Sidebar */}
        <div className="lg:col-span-1 h-fit">
          <div className="bg-white p-5 shadow-sm rounded-sm sticky top-24">
            <h3 className="text-lg">
              Subtotal ({cart.length} itens): <span className="font-bold">{formatPrice(subtotal)}</span>
            </h3>
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="gift" />
              <label htmlFor="gift" className="text-sm">Este pedido contém um presente</label>
            </div>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-lg mt-4 font-medium shadow-sm border border-[#fcd200]">
              Fechar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}