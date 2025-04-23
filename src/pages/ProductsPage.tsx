
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "");
  const [sortBy, setSortBy] = useState("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }
    
    // Category filter
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    
    // In-stock filter
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }
    
    // Price range filter
    if (priceRange.min) {
      result = result.filter((p) => p.price >= Number(priceRange.min));
    }
    
    if (priceRange.max) {
      result = result.filter((p) => p.price <= Number(priceRange.max));
    }
    
    // Sort
    switch (sortBy) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sort: featured first, then by id
        result.sort((a, b) => {
          if (a.featured === b.featured) return a.id - b.id;
          return a.featured ? -1 : 1;
        });
    }
    
    setFilteredProducts(result);
    
    // Update URL params for category
    if (selectedCategory && selectedCategory !== "All") {
      searchParams.set("category", selectedCategory);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
    
  }, [searchTerm, selectedCategory, sortBy, inStockOnly, priceRange, searchParams, setSearchParams]);

  // Set initial category from URL
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block space-y-6">
          <div>
            <h3 className="font-medium mb-3">Search</h3>
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategory === category}
                    onCheckedChange={() => 
                      setSelectedCategory(
                        selectedCategory === category ? "" : category
                      )
                    }
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => 
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className="w-full"
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => 
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <Checkbox
              id="instock"
              checked={inStockOnly}
              onCheckedChange={() => setInStockOnly(!inStockOnly)}
            />
            <label htmlFor="instock" className="ml-2">
              In Stock Only
            </label>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-end sm:items-center justify-between">
            <div className="w-full sm:w-auto">
              <label className="block text-sm mb-1">Sort by</label>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                  <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                  <SelectItem value="nameAsc">Name: A to Z</SelectItem>
                  <SelectItem value="nameDesc">Name: Z to A</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-sm text-gray-500">
              Showing {filteredProducts.length} results
            </p>
          </div>
          
          {/* Mobile Filters */}
          <div className="lg:hidden mb-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="filters">
                <AccordionTrigger>Filters</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <div>
                      <h3 className="font-medium mb-3">Search</h3>
                      <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Category</h3>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All</SelectItem>
                          {categories.filter(c => c !== "All").map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={priceRange.min}
                          onChange={(e) => 
                            setPriceRange({ ...priceRange, min: e.target.value })
                          }
                          className="w-full"
                        />
                        <span>-</span>
                        <Input
                          type="number"
                          placeholder="Max"
                          value={priceRange.max}
                          onChange={(e) => 
                            setPriceRange({ ...priceRange, max: e.target.value })
                          }
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Checkbox
                        id="instock-mobile"
                        checked={inStockOnly}
                        onCheckedChange={() => setInStockOnly(!inStockOnly)}
                      />
                      <label htmlFor="instock-mobile" className="ml-2">
                        In Stock Only
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium mb-4">No products found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
