
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import products from "../data/products";
import {
  Star,
  Image,
  ShoppingCart,
  ArrowRight,
  ChevronsDown,
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Laptops: <ShoppingBag className="text-galaxy-purple" size={22} />,
  Smartphones: <ShoppingCart className="text-galaxy-accent-yellow" size={22} />,
  Audio: <Star className="text-yellow-400" size={22} />,
  Accessories: <Image className="text-galaxy-dark-purple" size={22} />,
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6);
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Additional taglines and badges for enhanced look
  const productBadges = [
    { label: "Top Rated", color: "bg-gradient-to-r from-yellow-300 to-yellow-500", icon: <Star size={16} className="text-yellow-600" /> },
    { label: "Trending", color: "bg-gradient-to-r from-pink-400 to-pink-600", icon: <ArrowRight size={16} className="text-white" /> },
    { label: "Editor's Choice", color: "bg-gradient-to-r from-galaxy-purple to-galaxy-dark-purple", icon: <Image size={16} className="text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-galaxy-accent-yellow/40 via-white to-galaxy-accent-green/20">
      {/* Hero Section */}
      <HeroSection />

      {/* Unique Selling Points / About */}
      <section
        id="about-company"
        className="relative py-20 bg-gradient-to-tr from-white via-galaxy-accent-yellow/40 to-galaxy-accent-green/20 animate-fade-in"
      >
        <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-galaxy-purple opacity-10 blur-2xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-tr from-galaxy-dark-purple to-galaxy-purple bg-clip-text text-transparent animate-gradient">
            Why Shop With Us?
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: "100ms" }}>
                <ShoppingCart size={30} className="text-galaxy-purple bg-galaxy-accent-yellow/60 rounded-xl p-1 animate-float" />
                <div>
                  <h3 className="font-bold text-lg text-galaxy-dark-purple">Curated Premium Products</h3>
                  <p className="text-galaxy-dark-purple/80">Every item is handpicked by tech experts for unmatched quality and innovation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Star size={30} className="text-yellow-400 bg-galaxy-accent-green/40 rounded-xl p-1 animate-float" />
                <div>
                  <h3 className="font-bold text-lg text-galaxy-dark-purple">Trusted by Thousands</h3>
                  <p className="text-galaxy-dark-purple/80">Join a global community of discerning technology lovers.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Image size={30} className="text-galaxy-dark-purple bg-galaxy-accent-yellow/70 rounded-xl p-1 animate-float" />
                <div>
                  <h3 className="font-bold text-lg text-galaxy-dark-purple">Fast & Secure Shipping</h3>
                  <p className="text-galaxy-dark-purple/80">Enjoy peace of mind with reliable, insured next-gen delivery for every order.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center animate-scale-in" style={{ animationDelay: "600ms" }}>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80"
                alt="Tech shopping illustration"
                className="rounded-3xl shadow-2xl border-4 border-galaxy-purple/20 w-[310px] md:w-[370px] animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 animate-bounce">
          <ChevronsDown size={36} className="text-galaxy-purple" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-white to-galaxy-accent-green/10 relative overflow-hidden">
        {/* Glass and gradient accent shapes */}
        <div className="absolute w-96 h-40 bg-galaxy-purple/10 rounded-full blur-3xl left-0 -top-14" />
        <div className="absolute w-72 h-32 bg-galaxy-accent-yellow/20 rounded-full blur-2xl right-0 -bottom-16" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-extrabold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-r from-galaxy-dark-purple via-galaxy-accent-yellow to-galaxy-purple bg-clip-text text-transparent animate-gradient">
            <ShoppingCart className="inline text-galaxy-purple animate-float" size={24} />
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {featuredProducts.map((product, idx) => {
              const badge = productBadges[idx % productBadges.length];
              return (
                <div
                  className={
                    "relative group animate-scale-in hover:scale-105 transition-transform duration-300"
                  }
                  style={{ animationDelay: `${160 + idx * 90}ms`, animationFillMode: "backwards" }}
                  key={product.id}
                >
                  {/* Badge overlay */}
                  <div className={`absolute left-5 top-5 z-10 px-3 py-1 flex items-center gap-1 font-semibold rounded-full shadow ${badge.color} text-xs text-white animate-fade-in`}>
                    {badge.icon}
                    {badge.label}
                  </div>
                  <div className="bg-white/80 border border-galaxy-accent-yellow/30 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md card-gradient hover:shadow-2xl">
                    <ProductCard product={product} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-14 text-center animate-fade-in">
            <Button asChild variant="outline" className="px-10 py-3 rounded-xl font-medium hover:scale-105 bg-gradient-to-r from-galaxy-accent-yellow/50 to-galaxy-accent-green/30 transition-transform duration-200 shadow border-2 border-galaxy-purple/30">
              <Link to="/products" className="flex items-center gap-2">
                View All Products
                <ArrowRight size={20} className="animate-float ml-1 text-galaxy-purple" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-r from-galaxy-accent-green/10 via-white/90 to-galaxy-accent-yellow/10 relative overflow-hidden">
        <div className="absolute left-8 top-0 w-44 h-44 rounded-full bg-galaxy-accent-yellow/10 blur-2xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-tr from-galaxy-dark-purple via-galaxy-accent-yellow to-galaxy-purple bg-clip-text text-transparent animate-gradient">
            <Image className="inline animate-float" size={22} />
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 animate-fade-in">
            {categories.map((category, idx) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className={`group relative overflow-hidden bg-gradient-to-tr from-white via-galaxy-purple/10 to-galaxy-accent-yellow/20 rounded-2xl aspect-[4/3] shadow-lg glass-morphism border border-galaxy-accent-yellow/30 hover:scale-105 hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${140 + idx * 100}ms`, animationFillMode: "backwards" }}
              >
                {/* Modern icon as overlay */}
                <div className="absolute left-4 top-4 flex gap-1 items-center z-10">
                  <span className="rounded-full bg-galaxy-accent-yellow/80 shadow-md px-2 py-1 flex items-center gap-1 font-semibold text-xs text-galaxy-dark-purple animate-fade-in group-hover:scale-110 transition">
                    {categoryIcons[category] || <ShoppingBag size={16} />}
                  </span>
                </div>
                <img
                  src={
                    category === "Laptops"
                      ? "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
                      : category === "Smartphones"
                      ? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
                      : category === "Audio"
                      ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
                      : category === "Accessories"
                      ? "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80"
                      : "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                  }
                  alt={category}
                  className="absolute inset-0 object-cover w-full h-full brightness-90 group-hover:brightness-100 transition duration-300 scale-105"
                />
                {/* Category Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-galaxy-dark-purple/80 to-transparent px-6 py-5 flex items-end z-10 rounded-b-2xl">
                  <h3 className="text-white font-bold text-lg md:text-xl underline-offset-4 drop-shadow group-hover:underline tracking-wide animate-fade-in">
                    {category}
                  </h3>
                  <ChevronRight className="ml-2 text-galaxy-accent-yellow opacity-80" size={19} />
                </div>
                {/* Glass layer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white/90 transition"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-tr from-galaxy-accent-green/20 via-white/80 to-galaxy-accent-yellow/15 relative overflow-hidden">
        {/* Decorative glass accent */}
        <div className="absolute right-5 bottom-5 w-44 h-28 rounded-full bg-galaxy-accent-yellow/15 blur-2xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-br from-galaxy-dark-purple via-galaxy-accent-yellow to-galaxy-purple bg-clip-text text-transparent animate-gradient">
            <ArrowRight className="inline text-galaxy-purple animate-float" size={22} />
            What Our Customers Say
          </h2>
          <Carousel className="mx-auto max-w-3xl animate-fade-in">
            <CarouselContent>
              {/* Add richer testimonials with profiles and more visuals */}
              {[
                {
                  name: "Alex Johnson",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  tagline: "Verified Tech Enthusiast",
                  text: "Nebula Smartphone is a total game-changer! The camera quality is remarkable, and battery life is phenomenal. Would buy again.",
                  rating: 5,
                  accent: "bg-gradient-to-br from-yellow-100 via-galaxy-accent-yellow to-white"
                },
                {
                  name: "Samantha Lee",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  tagline: "Creative Designer",
                  text: "Cosmic Laptop Pro is a powerhouse for my design work. Fast, reliable and beautifully engineered—love the look and feel.",
                  rating: 5,
                  accent: "bg-gradient-to-br from-galaxy-accent-green via-white to-galaxy-accent-yellow"
                },
                {
                  name: "Michael Chen",
                  image: "https://randomuser.me/api/portraits/men/88.jpg",
                  tagline: "Music Producer",
                  text: "Orbit Wireless Earbuds have studio-quality sound. The active noise cancellation lets me focus. Incredible value.",
                  rating: 4,
                  accent: "bg-gradient-to-br from-white via-galaxy-accent-green to-galaxy-accent-yellow"
                },
                {
                  name: "Emma Jones",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  tagline: "Early Adopter",
                  text: "Accessories are super cool and outlast any other brand I've tried. Shopping experience was quick and smooth!",
                  rating: 5,
                  accent: "bg-gradient-to-br from-galaxy-accent-yellow via-white to-galaxy-purple/30"
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 py-6">
                  <div
                    className={
                      `relative px-6 py-8 rounded-2xl shadow-xl border-t-4 border-galaxy-purple/20 mx-2 ` +
                      `${testimonial.accent} animate-scale-in hover:shadow-2xl transition`
                    }
                    style={{ animationDelay: `${120 + index * 110}ms`, animationFillMode: "backwards" }}
                  >
                    {/* Animated icon floating */}
                    <Star size={44} className="absolute -top-7 left-1/2 -translate-x-1/2 text-yellow-300 animate-float" />
                    <div className="flex items-center mb-4 gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-galaxy-purple/80 shadow-lg animate-scale-in"
                      />
                      <div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xl drop-shadow ${
                                i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="block font-semibold text-galaxy-dark-purple/80 text-xs mt-1">{testimonial.tagline}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-3">&ldquo;{testimonial.text}&rdquo;</p>
                    <p className="font-bold text-galaxy-dark-purple text-lg">{testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-galaxy-purple/60 border-none shadow-md bg-white/70 backdrop-blur" />
            <CarouselNext className="hover:bg-galaxy-purple/60 border-none shadow-md bg-white/70 backdrop-blur" />
          </Carousel>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-galaxy-deep-space text-white relative overflow-hidden">
        <div className="absolute right-0 top-20 w-40 h-40 rounded-full bg-galaxy-purple opacity-20 blur-2xl" />
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2 animate-fade-in">
              <Image className="inline text-galaxy-accent-yellow animate-float" size={22} />
              Stay in the Loop
            </h2>
            <p className="mb-8">Subscribe to our newsletter for the latest product updates, exclusive offers, and tech news.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto animate-fade-in">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-galaxy-purple"
              />
              <Button className="bg-galaxy-purple hover:bg-galaxy-dark-purple button-hover-effect hover:scale-105 transition-transform duration-200 flex items-center gap-1">
                <ArrowRight size={18} />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
