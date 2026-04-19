import { Package, Truck, Star } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "100% Original Products",
    description: "At PakMobiZone.pk, we guarantee the authenticity of every product we sell. Our Mobile Phones, Tablets and Accessories are sourced directly from trusted manufacturers and authorized distributors, ensuring you receive only genuine and high-quality items.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "We understand the importance of getting your purchase quickly and efficiently. That's why PakMobiZone.pk offers fast and reliable delivery services across Pakistan. Once you place your order, our dedicated team ensures it reaches your doorstep in the shortest possible time.",
  },
  {
    icon: Star,
    title: "5-Star Customer Service",
    description: "Customer satisfaction is at the heart of everything we do at PakMobiZone.pk. Our friendly and knowledgeable support team is always ready to assist you, whether it's answering product queries, helping with orders, or resolving concerns.",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#51b478]">
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-[#51b478] mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
