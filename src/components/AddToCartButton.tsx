"use client"; // Ye line top par hona lazmi hai

export default function AddToCartButton() {
  
  const handleCartClick = () => {
    alert("Coming Soon! 🚀\nThis feature is under development.");
  };

  return (
    <button 
      onClick={handleCartClick}
      className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] py-2 px-4 rounded-full text-sm font-semibold transition-colors shadow-sm"
    >
      Add to Cart
    </button>
  );
}