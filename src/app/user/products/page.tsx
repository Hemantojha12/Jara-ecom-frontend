"use client"
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Luxury Leather Bag",
    price: 350,
    discount: 20,
    image: "/images/Bag1.jpg",
    brand: "Jara-Bags",
    category: "Bags",
    inStock: true,
  },
  {
    id: 2,
    name: "Check Shirt",
    price: 500,
    discount: null,
    image: "/images/Shirt.jpg",
    brand: "Jara",
    category: "Clothing",
    inStock: true,
  },
  {
    id: 3,
    name: "Jeans",
    price: 280,
    discount: 10,
    image: "/images/Jeans.jpg",
    brand: "Jara",
    category: "Clothing",
    inStock: false,
  },
  {
    id: 4,
    name: "T-shirt",
    price: 420,
    discount: null,
    image: "/images/Tshirt.jpg",
    brand: "Jara",
    category: "Clothing",
    inStock: true,
  },
  {
    id: 5,
    name: "Designer Shoes",
    price: 750,
    discount: 15,
    image: "/images/Shoes.jpg",
    brand: "Jara-Shoes",
    category: "Shoes",
    inStock: true,
  },
  {
    id: 6,
    name: "Gold Watch",
    price: 1200,
    discount: 25,
    image: "/images/Watch.jpg",
    brand: "Jara",
    category: "Accessories",
    inStock: true,
  },
];

export default function ProductsPage() {
  const [sort, setSort] = useState("Newest");
  const [filters, setFilters] = useState({
    brands: [],
    priceRange: [50, 1000],
    categories: [],
    discounts: [],
    availability: []
  });

  // Handle filter changes
  const handleBrandChange = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleDiscountChange = (discount) => {
    setFilters(prev => ({
      ...prev,
      discounts: prev.discounts.includes(discount)
        ? prev.discounts.filter(d => d !== discount)
        : [...prev.discounts, discount]
    }));
  };

  const handleAvailabilityChange = (availability) => {
    setFilters(prev => ({
      ...prev,
      availability: prev.availability.includes(availability)
        ? prev.availability.filter(a => a !== availability)
        : [...prev.availability, availability]
    }));
  };

  const handlePriceRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters(prev => ({
      ...prev,
      priceRange: [prev.priceRange[0], value]
    }));
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Discount filter
      if (filters.discounts.length > 0) {
        const hasDiscount = product.discount !== null;
        const discountAmount = product.discount || 0;
        
        const meetsDiscountRequirement = filters.discounts.some(filterDiscount => {
          if (filterDiscount === 10) return hasDiscount && discountAmount >= 10;
          if (filterDiscount === 20) return hasDiscount && discountAmount >= 20;
          if (filterDiscount === 50) return hasDiscount && discountAmount >= 50;
          return false;
        });
        
        if (!meetsDiscountRequirement) return false;
      }

      // Availability filter
      if (filters.availability.length > 0) {
        if (filters.availability.includes('In Stock') && !product.inStock) return false;
        if (filters.availability.includes('Pre-order') && product.inStock) return false;
      }

      return true;
    });

    // Sort products
    switch (sort) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Best Rated":
        // For demo purposes, sort by discount (higher discount = better rated)
        filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default: // Newest
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    return filtered;
  }, [products, filters, sort]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 pr-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Filters
          </h2>

          {/* Brand */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">Brand</h3>
            <ul className="space-y-2 text-sm">
              {['Jara', 'Jara-Shoes', 'Jara-Bags'].map(brand => (
                <li key={brand}>
                  <input 
                    type="checkbox" 
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  /> 
                  <span className="ml-2">{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">Price Range</h3>
            <input 
              type="range" 
              min="50" 
              max="1000" 
              value={filters.priceRange[1]}
              onChange={handlePriceRangeChange}
              className="w-full accent-yellow-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$50</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Category */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">Category</h3>
            <ul className="space-y-2 text-sm">
              {['Bags', 'Shoes', 'Accessories', 'Clothing'].map(category => (
                <li key={category}>
                  <input 
                    type="checkbox" 
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  /> 
                  <span className="ml-2">{category}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Discount */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-gray-700">Discount</h3>
            <ul className="space-y-2 text-sm">
              {[10, 20, 50].map(discount => (
                <li key={discount}>
                  <input 
                    type="checkbox" 
                    checked={filters.discounts.includes(discount)}
                    onChange={() => handleDiscountChange(discount)}
                  /> 
                  <span className="ml-2">{discount}% or more</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-medium mb-2 text-gray-700">Availability</h3>
            <ul className="space-y-2 text-sm">
              {['In Stock', 'Pre-order'].map(availability => (
                <li key={availability}>
                  <input 
                    type="checkbox" 
                    checked={filters.availability.includes(availability)}
                    onChange={() => handleAvailabilityChange(availability)}
                  /> 
                  <span className="ml-2">{availability}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sorting */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Luxury Collection ({filteredAndSortedProducts.length} items)
            </h1>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAndSortedProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center`;
                    }}
                  />
                  
                  {/* Add to Cart Button - Shows on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button 
                      className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                      onClick={() => console.log(`Added ${product.name} to cart`)}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>

                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                  
                  {/* Stock Status Badge */}
                  {!product.inStock && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="text-gray-900 font-medium">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.brand} • {product.category}</p>
                  <p className="text-gray-700 mt-1">
                    ${product.price}{" "}
                    {product.discount && (
                      <span className="line-through text-gray-400 text-sm ml-2">
                        ${(product.price / (1 - product.discount / 100)).toFixed(0)}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products match your filters</p>
              <button 
                onClick={() => setFilters({
                  brands: [],
                  priceRange: [50, 1000],
                  categories: [],
                  discounts: [],
                  availability: []
                })}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredAndSortedProducts.length > 0 && (
            <div className="flex justify-center mt-10">
              <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}