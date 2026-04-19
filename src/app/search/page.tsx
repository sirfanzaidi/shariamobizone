"use client";

import { Suspense } from "react"; // 1. Suspense import karein
import { useSearchParams } from "next/navigation";
import { allProducts } from "@/data/products";
import ProductSection from "@/components/ProductSection";

// Search Logic ko alag component mein le jayein
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredProducts = allProducts.filter((product, index, self) =>
    (product.name.toLowerCase().includes(query) || product.specs.toLowerCase().includes(query)) &&
    self.findIndex(p => p.id === product.id) === index
  );

  return (
    <>
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
          </p>
        </div>
      )}
    </>
  );
}

// Main Page Component
export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      {/* 2. Suspense Boundary lazmi hai build ke liye */}
      <Suspense fallback={<div className="text-center py-10">Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}