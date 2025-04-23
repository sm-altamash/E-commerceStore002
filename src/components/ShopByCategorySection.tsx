
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ShoppingCart,
  Star,
  Image,
  Grid2x2,
  ArrowRight,
  Sparkle,
} from "lucide-react";
import products from "../data/products";
import { useMemo } from "react";

const categoryIcons: Record<string, React.ReactNode> = {
  Laptops: <ShoppingBag className="text-galaxy-purple" size={24} />,
  Smartphones: <ShoppingCart className="text-galaxy-accent-yellow" size={24} />,
  Audio: <Star className="text-yellow-400" size={24} />,
  Accessories: <Image className="text-galaxy-dark-purple" size={24} />,
};

const categoryImgs: Record<string, string> = {
  Laptops:
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  Smartphones:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
  Audio:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
  Accessories:
    "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80",
};

const labelBgGradients = [
  "bg-gradient-to-r from-[#fbed96]/90 via-white/60 to-[#9b87f5]/80",
  "bg-gradient-to-r from-galaxy-purple/30 via-white/70 to-galaxy-accent-yellow/60",
  "bg-gradient-to-r from-[#FFA99F]/70 via-[#FEF7CD]/70 to-[#F2FCE2]/80",
  "bg-gradient-to-r from-pink-200/70 via-white/80 to-galaxy-accent-yellow/60",
];

const ShopByCategorySection = () => {
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );

  return (
    <section className="py-20 relative bg-gradient-to-r from-galaxy-accent-green/20 via-white/90 to-galaxy-accent-yellow/20 overflow-x-clip select-none">
      {/* Animated glow backgrounds */}
      <div className="absolute left-8 top-0 w-44 h-44 rounded-full bg-galaxy-accent-yellow/10 blur-2xl pointer-events-none animate-fade-in" />
      <div className="absolute right-3 top-40 w-36 h-36 rounded-full bg-galaxy-purple/10 blur-2xl pointer-events-none animate-fade-in" />
      <div className="container mx-auto px-4">
        <h2 className="text-[2.2rem] font-extrabold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-tr from-galaxy-dark-purple via-galaxy-accent-yellow to-galaxy-purple bg-clip-text text-transparent animate-gradient">
          <Grid2x2 className="inline animate-float text-galaxy-purple" size={24} />
          Shop by Category
        </h2>
        <p className="text-center text-lg md:text-xl text-galaxy-dark-purple/70 mb-7 max-w-2xl mx-auto">
          Explore gadgets by what excites you the most — from future-ready laptops to creative audio and more.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 animate-fade-in">
          {categories.map((category, idx) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className={`group relative overflow-hidden bg-white/70 rounded-2xl border shadow-lg glass-morphism border-galaxy-accent-yellow/30 aspect-[4/3] hover:scale-105 hover:shadow-xl transition-all duration-300 animate-scale-in`}
              style={{
                animationDelay: `${160 + idx * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              {/* Animated icon and sparkle top left */}
              <div className="absolute z-20 left-5 top-5 flex items-center group-hover:scale-110 transition">
                <span
                  className={`rounded-full p-2 shadow ${labelBgGradients[idx % labelBgGradients.length]} flex items-center`}
                >
                  {categoryIcons[category] || <ShoppingBag size={21} />}
                </span>
                <Sparkle size={18} className="ml-2 text-galaxy-purple animate-float opacity-60" />
              </div>
              {/* Category image bg with soft gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={categoryImgs[category] || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"}
                  alt={category}
                  className="object-cover w-full h-full brightness-[0.93] group-hover:brightness-100 transition duration-300 scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-galaxy-dark-purple/85 to-transparent px-7 py-5 flex items-end z-10 rounded-b-2xl">
                <h3 className="text-white font-bold text-lg md:text-xl underline-offset-4 group-hover:underline tracking-wide animate-fade-in drop-shadow">
                  {category}
                </h3>
                <ArrowRight className="ml-3 text-galaxy-accent-yellow group-hover:translate-x-1 transition" size={19} />
              </div>
              {/* Overlay glass shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white/60 transition duration-200 pointer-events-none rounded-2xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
