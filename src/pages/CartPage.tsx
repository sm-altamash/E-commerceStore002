
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useShoppingCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="text-gray-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm mb-6">Looks like you haven't added anything to your cart yet.</p>
          </div>
          <Button asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">
                  {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
                </h2>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 text-sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded overflow-hidden mb-4 sm:mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="sm:ml-6 flex-1">
                    <Link
                      to={`/products/${item.id}`}
                      className="text-lg font-medium hover:text-galaxy-purple transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-500 text-sm mb-3">
                      ${item.price.toFixed(2)}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 border-r"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 border-l"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between w-full sm:w-auto">
                        <p className="font-bold sm:ml-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2Icon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${(cartTotal * 0.07).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${(cartTotal + cartTotal * 0.07).toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  Including VAT/GST
                </p>
              </div>
            </div>
            
            <Button asChild className="w-full bg-galaxy-purple hover:bg-galaxy-dark-purple button-hover-effect">
              <Link to="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
            
            <div className="mt-6">
              <div className="text-sm text-gray-600 mb-2">We accept:</div>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
