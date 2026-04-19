import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Apple", logo: "https://ext.same-assets.com/638294991/1076094485.png" },
  { name: "Samsung", logo: "https://ext.same-assets.com/638294991/624725105.png" },
  { name: "Xiaomi", logo: "https://ext.same-assets.com/638294991/4224304900.png" },
  { name: "Oppo", logo: "https://ext.same-assets.com/638294991/835209965.png" },
  { name: "Realme", logo: "https://ext.same-assets.com/638294991/237949170.png" },
  { name: "Infinix", logo: "https://ext.same-assets.com/638294991/3497208467.png" },
  { name: "Tecno", logo: "https://ext.same-assets.com/638294991/2806823664.png" },
  { name: "itel", logo: "https://ext.same-assets.com/638294991/2026177497.png" },
  { name: "Nokia", logo: "https://ext.same-assets.com/638294991/627115793.png" },
  { name: "ZTE", logo: "https://ext.same-assets.com/638294991/3918084263.png" },
  { name: "Honor", logo: "https://ext.same-assets.com/638294991/350687686.png" },
  { name: "Nothing", logo: "https://ext.same-assets.com/638294991/478990092.png" },
  { name: "HMD", logo: "https://ext.same-assets.com/638294991/1496753200.png" },
  { name: "Vivo", logo: "https://ext.same-assets.com/638294991/2726023866.png" },
  { name: "Huawei", logo: "https://ext.same-assets.com/638294991/3508469139.png" },
];

export default function BrandLogos() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href="#"
              className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={40}
                className="object-contain h-8 md:h-10"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
