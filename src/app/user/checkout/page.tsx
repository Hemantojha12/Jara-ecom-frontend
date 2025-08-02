"use client"
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="sm:col-span-2 border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="sm:col-span-2 border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="sm:col-span-2 border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:ring-gold-400 focus:border-gold-400"
                />
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Delivery Options */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
              <div className="space-y-3">
                {["Standard (3-5 days) - Free", "Express (1-2 days) - $20"].map(
                  (option, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-3 border border-gray-200 rounded-md p-3 hover:border-gold-400 cursor-pointer"
                    >
                      <input type="radio" name="delivery" defaultChecked={idx === 0} />
                      <span>{option}</span>
                    </label>
                  )
                )}
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Payment Options */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                {["COD", "Credit/Debit Card", "Fonepay"].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center space-x-3 border rounded-md p-3 cursor-pointer ${
                      paymentMethod === method
                        ? "border-gold-400 bg-gold-50"
                        : "border-gray-200 hover:border-gold-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Right Section - Order Summary */}
          <div className="border border-gray-200 rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            {/* Products */}
            <div className="space-y-4 mb-6">
              {[
                {
                  name: "Luxury Leather Bag",
                  price: 350,
                  qty: 1,
                  image: "https://via.placeholder.com/80",
                },
                {
                  name: "Gold Accent Watch",
                  price: 500,
                  qty: 1,
                  image: "https://via.placeholder.com/80",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <p className="font-medium">${item.price}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 mb-4" />

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$850</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 text-base border-t pt-2 border-gray-200">
                <span>Total</span>
                <span>$850</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6 bg-gold-500 text-white py-3 rounded-md font-medium hover:bg-gold-400 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
