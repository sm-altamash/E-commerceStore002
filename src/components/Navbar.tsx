
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartQuantity } = useShoppingCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" }
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`px-4 py-2 text-lg font-medium transition-colors hover:text-galaxy-purple ${
            location.pathname === item.path ? "text-galaxy-purple" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-galaxy-purple to-galaxy-dark-purple bg-clip-text text-transparent">
                Galaxy Store
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  aria-label="Open cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartQuantity > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-galaxy-purple text-white text-xs flex items-center justify-center">
                      {cartQuantity}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96">
                <div className="h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                  <div className="flex-1 overflow-y-auto">
                    <CartDrawer />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <nav className="flex flex-col space-y-3">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

const CartDrawer = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useShoppingCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-lg font-medium">Your cart is empty</p>
        <p className="text-sm text-muted-foreground mt-2">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild className="mt-4">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center space-x-3">
              <div className="h-16 w-16 bg-muted rounded overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-6 w-6 rounded border flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-6 w-6 rounded border flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 mt-auto">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </div>
        <Button asChild className="w-full">
          <Link to="/cart">View Cart</Link>
        </Button>
        <Button asChild className="w-full mt-3 bg-galaxy-purple hover:bg-galaxy-dark-purple">
          <Link to="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
