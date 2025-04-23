
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
import { Star, Image, ShoppingCart, ArrowRight, ChevronDown, ChevronsUp, ChevronsDown } from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = products.filter(product => product.featured);
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-galaxy-accent-yellow/30 via-white to-galaxy-accent-green/20">
      {/* Hero Section */}
      <HeroSection />

      {/* Unique Selling Points / About */}
      <section id="about-company" className="py-20 bg-gradient-to-tr from-white via-galaxy-accent-yellow/40 to-galaxy-accent-green/20 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-tr from-galaxy-dark-purple to-galaxy-purple bg-clip-text text-transparent animate-gradient">
            Why Shop With Us?
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            {/* Usps */}
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
                  <p className="text-galaxy-dark-purple/80">Join a growing community of technology lovers across the globe.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Image size={30} className="text-galaxy-dark-purple bg-galaxy-accent-yellow/70 rounded-xl p-1 animate-float" />
                <div>
                  <h3 className="font-bold text-lg text-galaxy-dark-purple">Fast & Secure Shipping</h3>
                  <p className="text-galaxy-dark-purple/80">Enjoy peace of mind with reliable, insured delivery for every order.</p>
                </div>
              </div>
            </div>
            {/* Illustration */}
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
      <section className="py-16 bg-gradient-to-br from-white to-galaxy-accent-green/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 animate-fade-in">
            <ShoppingCart className="inline text-galaxy-purple animate-float" size={24} />
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {featuredProducts.map((product, idx) => (
              <div className="animate-fade-in" style={{ animationDelay: `${idx * 90}ms` }} key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="px-8 hover:scale-105 transition-transform duration-200">
              <Link to="/products">
                View All Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-r from-galaxy-accent-green/10 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 animate-fade-in">
            <Image className="inline text-galaxy-purple animate-float" size={22} />
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
            {categories.map((category, idx) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="group relative overflow-hidden bg-gradient-to-tr from-galaxy-accent-yellow/40 via-white to-galaxy-accent-green/30 rounded-xl aspect-square shadow-md hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
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
                  className="absolute inset-0 object-cover w-full h-full brightness-80 group-hover:brightness-100 transition duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-galaxy-deep-space/80 to-transparent flex items-end p-4 transition-all duration-300 group-hover:from-galaxy-purple/80 group-hover:to-galaxy-accent-yellow/50">
                  <h3 className="text-white font-semibold text-lg underline-offset-4 group-hover:underline drop-shadow-lg">
                    {category}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-tr from-galaxy-accent-green/20 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 animate-fade-in">
            <ArrowRight className="inline text-galaxy-purple animate-float" size={22} />
            What Our Customers Say
          </h2>
          <Carousel className="mx-auto max-w-4xl animate-fade-in">
            <CarouselContent>
              {[
                {
                  name: "Alex Johnson",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  text: "The Nebula Smartphone exceeded all my expectations. The camera quality is outstanding, and battery life is impressive!",
                  rating: 5,
                },
                {
                  name: "Samantha Lee",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  text: "I've been using the Cosmic Laptop Pro for my design work, and it handles everything I throw at it effortlessly. Amazing product!",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  image: "https://randomuser.me/api/portraits/men/88.jpg",
                  text: "The Orbit Wireless Earbuds have incredible sound quality. The noise cancellation feature is a game-changer for my daily commute.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 py-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-galaxy-purple/20 transition-transform hover:scale-105">
                    <div className="flex items-center mb-4 gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-galaxy-purple shadow"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg drop-shadow ${
                              i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-6">&quot;{testimonial.text}&quot;</p>
                    <p className="font-medium text-galaxy-dark-purple">{testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-galaxy-purple/50" />
            <CarouselNext className="hover:bg-galaxy-purple/50" />
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
