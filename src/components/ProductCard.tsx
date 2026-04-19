
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  discount,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-PK");
  };

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="product-card bg-white border border-gray-200 rounded-lg overflow-hidden relative">
        {discount && (
          <div className="discount-badge">
            {discount}% OFF
          </div>
        )}
        <div className="p-4">
          <div className="aspect-square relative mb-3">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-medium text-gray-800 text-center line-clamp-2 min-h-[40px]">
            {name}
          </h3>
          <div className="mt-2 text-center">
            <span className="text-xs text-gray-500">Rs</span>
            <span className="text-lg font-bold text-[#d21e25] ml-1">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                Rs {formatPrice(originalPrice)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
