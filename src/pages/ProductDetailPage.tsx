
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, ShoppingCart, ArrowLeft } from "lucide-react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import products from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useShoppingCart();
  
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the product you were looking for.</p>
        <Button asChild variant="outline">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const handleAddToCart = () => {
    // Add item to cart the specified number of times
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    
    // Reset quantity
    setQuantity(1);
  };
  
  // Get similar products (same category, excluding this one)
  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="mb-1">
              <span className="bg-galaxy-accent-yellow/50 text-galaxy-deep-space px-3 py-1 rounded text-sm font-medium">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-gray-600">
                {product.rating} Rating
              </span>
            </div>
          </div>
          
          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
          
          <div className="border-t border-b py-6">
            <p className="text-gray-700 leading-relaxed mb-4">{product.fullDescription}</p>
            
            <div className="mt-4">
              <div className="font-medium mb-2">Availability:</div>
              <div className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full ${
                    product.inStock ? "bg-green-500" : "bg-red-500"
                  } mr-2`}
                ></span>
                <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
              </div>
            </div>
          </div>
          
          {product.inStock && (
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-4 font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="px-3 py-1 border-r"
                    aria-label="Decrease quantity"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-1 font-medium">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-1 border-l"
                    aria-label="Increase quantity"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="bg-galaxy-purple hover:bg-galaxy-dark-purple button-hover-effect flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button asChild className="flex-1" variant="outline">
                  <Link to="/cart">View Cart</Link>
                </Button>
              </div>
            </div>
          )}
          
          {!product.inStock && (
            <div className="space-y-4">
              <p className="text-red-500 font-medium">
                This product is currently out of stock.
              </p>
              <Button disabled variant="outline">
                Notify When Available
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <span className="text-sm text-yellow-400 mr-1">★</span>
                      <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
