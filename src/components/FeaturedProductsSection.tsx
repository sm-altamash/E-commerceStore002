
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import {
  Star,
  ArrowRight,
  Sparkle,
  ShoppingBag,
  ShoppingCart,
  Image,
} from "lucide-react";

const badgeStyles = [
  {
    label: "Editor's Pick",
    color: "bg-gradient-to-r from-[#9b87f5]/90 to-[#FEF7CD]/90 shadow-lg",
    icon: <Sparkle size={16} className="text-galaxy-purple" />,
  },
  {
    label: "Best Seller",
    color: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 shadow-lg",
    icon: <Star size={16} className="text-yellow-600" />,
  },
  {
    label: "Exclusive",
    color: "bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-200 shadow-lg",
    icon: <ArrowRight size={16} className="text-white" />,
  },
];

const bgGradients = [
  "linear-gradient(135deg,#fdfcfb 0%,#e2d1c3 100%)",
  "linear-gradient(102.3deg,#93798F 5.9%,#EAADE8 64%,#F6DBF5 89%)",
  "linear-gradient(60deg,#abecd6 0%,#fbed96 100%)",
  "linear-gradient(225deg,#FFE29F 0%,#FFA99F 48%,#FF719A 100%)",
];

const FeaturedProductsSection = () => {
  const featuredProducts = useMemo(
    () => products.filter((p) => p.featured).slice(0, 6),
    []
  );

  return (
    <section className="py-20 relative overflow-x-clip bg-gradient-to-br from-white to-galaxy-accent-green/10 select-none">
      {/* Background gradient circles & sparkles for softer glow */}
      <div className="absolute left-[-6%] top-0 w-80 h-80 rounded-full bg-galaxy-purple/10 blur-3xl pointer-events-none animate-fade-in" />
      <div className="absolute right-[-4%] bottom-[-6%] w-80 h-72 rounded-full bg-galaxy-accent-yellow/20 blur-2xl animate-fade-in pointer-events-none" />
      {/* Sparkle accent */}
      <Sparkle
        size={42}
        className="absolute right-10 top-24 text-galaxy-purple opacity-40 animate-float"
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-[2.3rem] font-extrabold text-center mb-10 bg-gradient-to-r from-galaxy-dark-purple via-galaxy-accent-yellow to-galaxy-purple bg-clip-text text-transparent animate-gradient tracking-tight flex items-center justify-center gap-2">
          <Star className="animate-float text-yellow-400" size={28} />
          Featured Products
        </h2>
        <p className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-12 text-galaxy-dark-purple/70">
          Discover our highly-curated selection of trendsetting innovation: only the year’s brightest stars in tech, with unique features highlighted.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-16 sm:mb-20 animate-fade-in">
          {featuredProducts.map((product, idx) => {
            const badge = badgeStyles[idx % badgeStyles.length];
            const bg = bgGradients[idx % bgGradients.length];
            return (
              <div
                key={product.id}
                className="relative group"
                style={{
                  animationDelay: `${80+idx*90}ms`,
                  animationFillMode: "backwards",
                }}
              >
                {/* Card base & soft glass gradient */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                  style={{
                    background: bg,
                    opacity: 0.165,
                    filter: "blur(8px)",
                  }}
                />
                {/* Icon+badge overlay */}
                <div className={`absolute left-5 top-4 z-20 px-3 py-1 flex items-center gap-1 rounded-full font-semibold text-xs shadow ${badge.color} animate-fade-in group-hover:scale-110 transition`}>
                  {badge.icon}
                  <span className="drop-shadow">{badge.label}</span>
                </div>
                {/* Animated overlay for low-stock */}
                {!product.inStock && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-black/60 to-galaxy-dark-purple/80 rounded-2xl">
                    <span className="bg-white/90 text-galaxy-deep-space px-5 py-2 rounded-full font-semibold text-base animate-fade-in ring-2 ring-galaxy-purple/60 shadow">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className={`bg-white/80 border border-galaxy-accent-yellow/30 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden card-gradient transition-all duration-300 animate-scale-in backdrop-blur-[2px] z-10 relative`}>
                  <ProductCard product={product} />
                  <div className="absolute -right-5 -bottom-5 opacity-60 blur-md animate-float">
                    <ShoppingBag size={48} className="text-galaxy-accent-yellow" />
                  </div>
                </div>
                {/* Hover sparkle accent */}
                <div className="absolute right-6 top-8 opacity-0 group-hover:opacity-80 transition pointer-events-none animate-float">
                  <Sparkle className="text-pink-400" size={20} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center animate-fade-in">
          <Button
            asChild
            variant="outline"
            className="px-12 py-4 rounded-xl font-semibold hover:scale-105 bg-gradient-to-r from-galaxy-accent-yellow/70 to-galaxy-accent-green/40 border-2 border-galaxy-purple/40 shadow-lg hover:bg-galaxy-purple/10 transition-all duration-200 text-lg"
          >
            <Link to="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight size={22} className="animate-float text-galaxy-purple drop-shadow-md" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
