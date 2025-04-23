
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

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = products.filter(product => product.featured);
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-galaxy-accent-yellow/20 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover the Future of{" "}
                <span className="bg-gradient-to-r from-galaxy-purple to-galaxy-dark-purple bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Explore our collection of cutting-edge devices and accessories designed for the modern explorer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-galaxy-purple hover:bg-galaxy-dark-purple text-white px-8 py-6 rounded-md text-lg button-hover-effect">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" asChild className="px-8 py-6 rounded-md text-lg">
                  <Link to="/products">View Deals</Link>
                </Button>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'} animation-delay-300`}>
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl animate-float">
                <img
                  src="/placeholder.svg"
                  alt="Latest technology products"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-galaxy-purple">New Arrivals</p>
                <p className="text-sm">Just launched this week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="px-8">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="group relative overflow-hidden bg-gray-100 rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-galaxy-deep-space/70 to-transparent flex items-end p-4 transition-all duration-300 group-hover:from-galaxy-deep-space/90">
                  <h3 className="text-white font-medium text-lg">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-galaxy-accent-green/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <Carousel className="mx-auto max-w-4xl">
            <CarouselContent>
              {[
                {
                  name: "Alex Johnson",
                  text: "The Nebula Smartphone exceeded all my expectations. The camera quality is outstanding, and battery life is impressive!",
                  rating: 5,
                },
                {
                  name: "Samantha Lee",
                  text: "I've been using the Cosmic Laptop Pro for my design work, and it handles everything I throw at it effortlessly. Amazing product!",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  text: "The Orbit Wireless Earbuds have incredible sound quality. The noise cancellation feature is a game-changer for my daily commute.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 py-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-galaxy-deep-space text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="mb-8">
              Subscribe to our newsletter for the latest product updates, exclusive offers, and tech news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-galaxy-purple"
              />
              <Button className="bg-galaxy-purple hover:bg-galaxy-dark-purple button-hover-effect">
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
