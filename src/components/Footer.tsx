
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-galaxy-deep-space text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Galaxy Store</h3>
            <p className="text-sm text-gray-300">
              Your one-stop destination for the latest tech gadgets and accessories.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-300 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Laptops" className="text-sm text-gray-300 hover:text-white">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/products?category=Smartphones" className="text-sm text-gray-300 hover:text-white">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/products?category=Audio" className="text-sm text-gray-300 hover:text-white">
                  Audio
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-sm text-gray-300 hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get updates on new products and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm text-black rounded-l focus:outline-none"
              />
              <button className="bg-galaxy-purple hover:bg-galaxy-dark-purple px-4 py-2 rounded-r text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Galaxy Store. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
