
import { useState, useEffect } from "react";
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
import { ShoppingCart, ArrowRight, Image } from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = products.filter(product => product.featured);
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-galaxy-accent-yellow/20 via-white to-galaxy-accent-green/20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-bl from-galaxy-accent-yellow/40 to-galaxy-accent-green/10 overflow-hidden">
        <div className="absolute -top-10 -left-20 w-56 h-56 rounded-full bg-galaxy-purple opacity-20 blur-2xl" />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'} `}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex items-center gap-3">
                <Image className="inline-block text-galaxy-dark-purple animate-float" size={38} />
                Discover the Future of{" "}
                <span className="bg-gradient-to-r from-galaxy-purple to-galaxy-dark-purple bg-clip-text text-transparent animate-gradient">
                  Technology
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg animate-fade-in">
                Explore our collection of cutting-edge devices and accessories designed for the modern explorer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-galaxy-purple hover:bg-galaxy-dark-purple text-white px-8 py-6 rounded-md text-lg button-hover-effect hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                  <Link to="/products">
                    <ShoppingCart className="mr-1" size={22} />
                    Shop Now
                    <ArrowRight className="ml-1 animate-slide-in-right" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="px-8 py-6 rounded-md text-lg hover:bg-galaxy-accent-yellow/40 border-galaxy-purple border-2 transition-colors duration-200">
                  <Link to="/products">View Deals</Link>
                </Button>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'} animation-delay-300`}>
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl animate-float shadow-lg border-4 border-galaxy-purple/10">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="Latest technology products"
                  className="object-cover w-full h-full scale-105 transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/95 shadow-lg p-4 rounded-lg flex items-center gap-2 animate-fade-in">
                <ArrowRight className="text-galaxy-purple" size={18} />
                <div>
                  <p className="font-bold text-galaxy-purple">New Arrivals</p>
                  <p className="text-sm text-gray-600">Just launched this week</p>
                </div>
              </div>
            </div>
          </div>
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
                    // Category-specific placeholder
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
                <div className="absolute inset-0 bg-gradient-to-t from-galaxy-deep-space/90 to-transparent flex items-end p-4 transition-all duration-300 group-hover:from-galaxy-purple/90 group-hover:to-galaxy-accent-yellow/30">
                  <h3 className="text-white font-semibold text-lg underline-offset-4 group-hover:underline">{category}</h3>
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

