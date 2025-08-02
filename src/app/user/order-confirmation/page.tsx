"use client"

import { CheckCircle } from "lucide-react";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center py-12">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-gold-500" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        {/* Order Details */}
        <div className="border border-gray-200 rounded-xl p-6 text-left mb-8">
          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Order ID:</span>
            <span className="font-medium">#123456789</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Expected Delivery:</span>
            <span className="font-medium">Aug 7 - Aug 10</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Items:</span>
            <span className="font-medium">2 Products</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-gold-500 text-white py-3 rounded-md font-medium hover:bg-gold-400 transition">
            Track Your Order
          </button>
          <button className="flex-1 border border-gray-300 py-3 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
