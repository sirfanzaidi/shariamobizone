"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Mobile Phones by Brands": [
    "APPLE Mobile Phones", "Samsung Mobile Phones", "Xiaomi Mobile Phones",
    "OPPO Mobile Phones", "REALME Mobile Phones", "NOKIA Mobile Phones",
    "INFINIX Mobile Phones", "TECNO Mobile Phones", "VIVO Mobile Phones",
    "Honor Mobile Phones", "HUAWEI Mobile Phones", "Nothing Mobile Phones",
  ],
  "Mobile Phones by Price": [
    "MZN 45,000 and More", "MZN 35,000 - 45,000", "MZN 25,000 - 35,000",
    "MZN 15,000 - 25,000", "MZN 10,000 - 15,000", "MZN 5,000 - 10,000",
    "MZN 5,000 and Less",
  ],
  "Tablets by Brands": [
    "Apple iPads", "Samsung Tab & Tablets", "Xiaomi Pad & Tablets",
    "Huawei Tab & Tablets", "Infinix Pad & Tablets", "Tecno Pad & Tablets",
    "Oppo Tablets", "Poco Tablets",
  ],
  "Accessories": [
    "Cases & Screen Protectors", "Chargers & Cables", "Gaming Consoles",
    "Headphones & Headset", "Laptops", "Memory Cards & USB Sticks",
    "Power Banks", "Smart-Watches & Wearables", "Speakers & Home Audio",
  ],
};

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

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full mt-10">
      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white py-4 text-sm font-medium transition-colors"
      >
        Voltar ao topo
      </button>

      {/* Brand Logos Strip */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-2 border border-gray-100 rounded hover:shadow-sm grayscale hover:grayscale-0 transition-all cursor-pointer">
                <Image src={brand.logo} alt={brand.name} width={80} height={30} className="object-contain h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#232f3e] text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-base mb-4 text-white">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-[13px] text-gray-300 hover:underline">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Address Section */}
          <div className="mt-12 pt-8 border-t border-gray-600 grid md:grid-cols-2 gap-8 text-sm text-gray-300">
            <div>
              <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Nossas Lojas</h3>
              <p className="mb-2 leading-relaxed">
                <span className="text-[#febd69] font-bold">Casa Saad & Casa Sharia:</span><br />
                Xipamanine em frente ao banco BCI (Loja Preta e Loja Verde).
              </p>
              <p className="leading-relaxed">
                <span className="text-[#febd69] font-bold">Guerra Popular:</span><br />
                Esquina com Ahmed Sekou Touré, Maputo.
              </p>
            </div>
            <div className="md:text-right">
              <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Contacto Direto</h3>
              <p className="text-lg font-bold text-white mb-1">847772888 | 840463231</p>
              <p>Email: sharia@mobizone.pkmz</p>
              
              {/* Social Icons Placeholder */}
              <div className="flex md:justify-end gap-4 mt-4">
                 <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#febd69] cursor-pointer">FB</div>
                 <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#febd69] cursor-pointer">IG</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Footer */}
      <div className="bg-[#131921] py-10 text-center border-t border-gray-800">
        <p className="text-[12px] text-gray-400">
          © 2026 Sharia MobiZone. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-gray-500 mt-2 max-w-2xl mx-auto px-4">
          Este site está protegido pelo reCAPTCHA e aplicam-se a Política de Privacidade e os Termos de Serviço do Google.
        </p>
      </div>
    </footer>
  );
}