
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Image, Star, ShoppingCart, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowAnim(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-20 pb-28 lg:pb-36 bg-gradient-to-br from-galaxy-purple/50 to-galaxy-accent-green/55 flex items-center min-h-[600px]">
      {/* Decorative blurred shapes */}
      <div className="absolute w-96 h-96 bg-galaxy-accent-yellow rounded-full opacity-25 blur-3xl -left-32 -top-20 z-0" />
      <div className="absolute w-60 h-60 bg-galaxy-accent-green rounded-full opacity-15 blur-2xl right-0 bottom-0 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              showAnim ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <Star className="text-yellow-400 animate-float" size={28} />
              <span className="text-lg font-semibold text-galaxy-dark-purple bg-white px-4 py-1.5 rounded-full border shadow animate-scale-in">
                #1 Tech Marketplace
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-br from-galaxy-purple to-galaxy-dark-purple bg-clip-text text-transparent animate-gradient">
              The Future <br />
              <span className="text-galaxy-accent-yellow inline-block animate-fade-in" style={{ animationDelay: '0.3s' }}>
                of Shopping
              </span>
              <br />
              is Here
            </h1>
            <p className="mt-6 text-lg text-galaxy-dark-purple/90 max-w-lg animate-fade-in" style={{ animationDelay: '0.55s', animationFillMode: 'backwards' }}>
              Discover trend-setting tech and must-have gadgets curated just for you. Your next innovation obsession is only a click away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-galaxy-purple hover:bg-galaxy-dark-purple text-white px-10 py-5 rounded-md text-lg button-hover-effect hover:scale-105 shadow-lg animate-scale-in">
                <a href="/products">
                  <ShoppingCart className="inline mb-0.5" size={22} />
                  Shop Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-10 py-5 rounded-md text-lg border-galaxy-purple border-2 text-galaxy-dark-purple backdrop-blur-md bg-white/80 hover:bg-galaxy-accent-yellow/40 shadow animate-fade-in"
              >
                <a href="#about-company">
                  <Image className="mr-1 text-galaxy-purple" size={21} />
                  Learn More
                </a>
              </Button>
            </div>
            <div className="mt-8 flex cursor-pointer items-center gap-2 animate-bounce" tabIndex={0}>
              <span className="font-medium text-galaxy-dark-purple/80">Scroll for More</span>
              <ChevronDown className="text-galaxy-purple" />
            </div>
          </div>
          {/* Right */}
          <div
            className={`relative flex items-center justify-center ${showAnim ? "animate-scale-in" : "scale-95 opacity-0"}`}
            style={{ minHeight: 400 }}
          >
            {/* Hero image mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-galaxy-accent-yellow/70 to-galaxy-accent-green/70 rounded-3xl blur-2xl scale-105" />
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=650&q=80"
              alt="Futuristic gadget mockup"
              className="relative rounded-xl shadow-2xl border-4 border-galaxy-purple/20 w-full max-w-md object-cover animate-float"
              loading="eager"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-3 rounded-xl shadow flex gap-2 items-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <Star className="text-yellow-400" size={21} />
              <span className="text-gray-800 font-medium">
                4.98/5.0 <span className="ml-2 text-galaxy-purple font-semibold">Rated by Customers</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
