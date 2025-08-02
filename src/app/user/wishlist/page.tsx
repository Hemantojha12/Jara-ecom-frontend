"use client"
import { useState } from "react";
import { Trash2, ShoppingCart } from "lucide-react";

interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Luxury Leather Bag",
      price: "$250.00",
      image:
        "/images/Bag2.jpg",
    },
    {
      id: 2,
      name: "Shirt",
      price: "$120.00",
      image: "/images/Shirt.jpg",
    },
    {
      id: 3,
      name: "Designer Shoes",
      price: "$500.00",
      image: "/images/Shoes.jpg",
    },
  ]);

  // ✅ Remove item from wishlist
  const handleRemove = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Move item to cart (for now just remove from wishlist)
  const handleMoveToCart = (id: number) => {
    alert("Item moved to cart!"); // replace with cart logic later
    handleRemove(id);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 italic">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-red-500 hover:text-white text-gray-700 p-2 rounded-full shadow transition"
                  title="Remove from Wishlist"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 mt-1">{item.price}</p>
                </div>

                <button
                  onClick={() => handleMoveToCart(item.id)}
                  className="mt-5 flex items-center justify-center gap-2 bg-gold-500 text-white px-4 py-2 rounded-md font-medium hover:bg-gold-400 transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
