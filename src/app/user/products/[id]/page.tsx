"use client"

import { useState } from "react"
import { Heart, Star } from "lucide-react"

const product = {
  id: 1,
  name: "Luxury Leather Bag",
  price: 350,
  discount: 20,
  stock: "In Stock",
  description:
    "A handcrafted luxury leather bag designed with premium materials and timeless style.",
  specs: ["Genuine leather", "Hand-stitched", "Gold-tone hardware", "Made in Italy"],
  details:
    "This luxury bag is crafted from 100% genuine Italian leather, offering unmatched durability and sophistication.",
  shipping: "Ships within 3-5 business days with complimentary luxury packaging.",
  reviews: [
    { name: "Sophia R.", rating: 5, comment: "Absolutely stunning quality!" },
    { name: "James K.", rating: 4, comment: "Very classy, worth the price." },
  ],
  images: [
    "/images/bag1.jpg",
    "/images/bag2.jpg",
    "/images/bag3.jpg",
    "/images/bag4.jpg",
  ],
}

export default function ProductDetailPage() {
  // ✅ ADD THESE STATES
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("Details")

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* ✅ Main Product Image */}
          <div className="flex-1">
            <div className="border rounded-xl overflow-hidden relative">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* ✅ Thumbnails */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img) => (
                <img
                  key={img}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-md border cursor-pointer ${
                    selectedImage === img
                      ? "border-yellow-500"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ✅ Right: Product Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <div className="flex items-center gap-4 mb-3">
              <p className="text-2xl font-semibold text-gray-900">
                ${product.price}
              </p>
              {product.discount && (
                <p className="line-through text-gray-400">
                  ${(product.price / (1 - product.discount / 100)).toFixed(0)}
                </p>
              )}
            </div>
            <p
              className={`mb-4 ${
                product.stock === "In Stock"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {product.stock}
            </p>

            {/* ✅ Quantity Selector */}
            <div className="flex items-center gap-3 mb-5">
              <label className="text-gray-700 font-medium">Qty:</label>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* ✅ Buttons */}
            <div className="flex items-center gap-4 mb-6">
              <button className="flex-1 bg-gold-500 text-white py-3 rounded-md font-medium hover:bg-gold-400 transition">
                Add to Cart
              </button>
              <button className="flex-1 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition">
                Buy Now
              </button>
              <button className="p-3 border rounded-md hover:bg-gray-100 transition">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* ✅ Short Description */}
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* ✅ Specifications */}
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {product.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ Tabs Section */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex gap-6 mb-6 text-gray-700">
            {["Details", "Reviews", "Shipping Info"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 transition ${
                  activeTab === tab
                    ? "border-gold-500 text-black font-medium"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ✅ Tab Content */}
          {activeTab === "Details" && (
            <p className="text-gray-700">{product.details}</p>
          )}
          {activeTab === "Shipping Info" && (
            <p className="text-gray-700">{product.shipping}</p>
          )}

          {activeTab === "Reviews" && (
            <div className="space-y-6">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-gold-500 text-gold-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600">{review.name}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
              ))}

              <button className="mt-4 px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                Write a Review
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
