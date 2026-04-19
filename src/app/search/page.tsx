"use client";
import { useSearchParams } from "next/navigation";
import { allProducts } from "@/data/products"; // Data yahan se aayega
import ProductSection from "@/components/ProductSection";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filtering Logic
  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query) || 
    p.specs.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-red-600">"{query}"</span>
      </h1>
      
      {filteredProducts.length > 0 ? (
        <ProductSection title="Products Found" products={filteredProducts} />
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <h2 className="text-xl font-bold text-gray-800 mb-2">No products found</h2>
          <p className="text-gray-500">
            We couldn't find any products matching <span className="font-bold">"{query}"</span>. 
            Try a different keyword or check for typos.
          </p>
        </div>
      )}
    </div>
  );
}