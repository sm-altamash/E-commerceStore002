
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import ShopByCategorySection from "@/components/ShopByCategorySection";
import {
  ArrowRight,
  ChevronsDown,
  Star,
  Image,
  ShoppingCart,
  ShoppingBag,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const categoryIcons: Record<string, React.ReactNode> = {
  Laptops: <ShoppingBag className="text-galaxy-purple" size={22} />,
  Smartphones: <ShoppingCart className="text-galaxy-accent-yellow" size={22} />,
  Audio: <Star className="text-yellow-400" size={22} />,
  Accessories: <Image className="text-galaxy-dark-purple" size={22} />,
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

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

      {/* ENHANCED Featured Products */}
      <FeaturedProductsSection />

      {/* ENHANCED Shop by Category */}
      <ShopByCategorySection />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-tr from-galaxy-accent-green/20 via-white/80 to-galaxy-accent-yellow/15 relative overflow-hidden">
        <div className="absolute right-5 bottom-5 w-44 h-28 rounded-full bg-galaxy-accent-yellow/18 blur-2xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-br from-galaxy-dark-purple via-galaxy-accent-yellow to-galaxy-purple bg-clip-text text-transparent animate-gradient">
            <ArrowRight className="inline text-galaxy-purple animate-float" size={22} />
            What Our Customers Say
          </h2>
          <Carousel className="mx-auto max-w-3xl animate-fade-in">
            <CarouselContent>
              {[
                {
                  name: "Alex Johnson",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  tagline: "Verified Tech Enthusiast",
                  text: "Nebula Smartphone is a total game-changer! The camera quality is remarkable, and battery life is phenomenal. Would buy again.",
                  rating: 5,
                  accent: "bg-gradient-to-br from-yellow-100 via-galaxy-accent-yellow to-white",
                  cardFx: "shadow-2xl border-2 border-galaxy-accent-yellow/40 hover:-rotate-1",
                  quote:
                    "“The best gadget experience I’ve ever had. Modern, quick and beautifully packaged!”",
                },
                {
                  name: "Samantha Lee",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  tagline: "Creative Designer",
                  text: "Cosmic Laptop Pro is a powerhouse for my design work. Fast, reliable and beautifully engineered—love the look and feel.",
                  rating: 5,
                  accent: "bg-gradient-to-br from-galaxy-accent-green via-white to-galaxy-accent-yellow",
                  cardFx: "hover:scale-105 shadow-xl border-2 border-galaxy-accent-green/40",
                  quote:
                    "“My every project feels effortless on this laptop. Simply wow.”",
                },
                {
                  name: "Michael Chen",
                  image: "https://randomuser.me/api/portraits/men/88.jpg",
                  tagline: "Music Producer",
                  text: "Orbit Wireless Earbuds have studio-quality sound. The active noise cancellation lets me focus. Incredible value.",
                  rating: 4,
                  accent: "bg-gradient-to-br from-white via-galaxy-accent-green to-galaxy-accent-yellow",
                  cardFx: "hover:scale-105 hover:-rotate-2 shadow-xl border border-galaxy-accent-yellow/40",
                  quote:
                    "“I use them at home and on the go. Unbeatable quality.”",
                },
                {
                  name: "Emma Jones",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  tagline: "Early Adopter",
                  text: "Accessories are super cool and outlast any other brand I've tried. Shopping experience was quick and smooth!",
                  rating: 5,
                  accent: "bg-gradient-to-br from-galaxy-accent-yellow via-white to-galaxy-purple/30",
                  cardFx: "hover:scale-105 shadow-2xl border-2 border-galaxy-purple/25",
                  quote:
                    "“Sleek and durable. Everyone asks where I got mine!”",
                },
              ].map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/1 py-7 animate-scale-in group"
                >
                  <div
                    className={
                      `relative px-7 py-10 rounded-3xl mx-2 ` +
                      `${testimonial.accent} ${testimonial.cardFx} transition duration-300 animate-scale-in`
                    }
                    style={{
                      animationDelay: `${120 + index * 110}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <Star size={48} className="absolute -top-10 left-1/2 -translate-x-1/2 text-yellow-300 animate-float drop-shadow" />
                    <Image
                      size={27}
                      className="absolute -right-6 top-12 text-galaxy-accent-yellow animate-float opacity-50"
                    />
                    <div className="flex items-center mb-6 gap-5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-galaxy-purple/80 shadow-lg animate-scale-in group-hover:scale-110 transition"
                        loading="lazy"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xl ${
                                i < testimonial.rating ? "text-yellow-400 drop-shadow" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="block font-semibold text-galaxy-dark-purple/80 text-xs mt-1">
                          {testimonial.tagline}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-800 italic mb-4 text-base md:text-lg">
                      <span className="opacity-60 mr-2">❝</span>
                      {testimonial.text}
                      <span className="opacity-60 ml-2">❞</span>
                    </p>
                    <div className="text-xs text-galaxy-purple/80 mb-2 font-medium animate-fade-in">
                      {testimonial.quote}
                    </div>
                    <p className="font-bold text-galaxy-dark-purple text-lg mt-2">
                      <span className="inline-block animate-fade-in">{testimonial.name}</span>
                    </p>
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
