"use client";

import { useState } from "react";

interface OrderItem {
  name: string;
  qty: number;
  price: string;
}

interface Order {
  id: string;
  date: string;
  total: string;
  status: "Processing" | "Shipped" | "Delivered";
  items: OrderItem[];
}

export default function UserOrders() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const orders: Order[] = [
    {
      id: "ORD-001",
      date: "July 20, 2025",
      total: "$250.00",
      status: "Processing",
      items: [
        { name: "Luxury Leather Bag", qty: 1, price: "$200.00" },
        { name: "Gold Wallet", qty: 1, price: "$50.00" },
      ],
    },
    {
      id: "ORD-002",
      date: "June 15, 2025",
      total: "$120.00",
      status: "Shipped",
      items: [{ name: "Silk Scarf", qty: 2, price: "$60.00" }],
    },
    {
      id: "ORD-003",
      date: "May 5, 2025",
      total: "$500.00",
      status: "Delivered",
      items: [{ name: "Designer Shoes", qty: 1, price: "$500.00" }],
    },
  ];

  // Helper function for status badge colors
  const getStatusStyles = (status: Order["status"]): string => {
    switch (status) {
      case "Processing":
        return "bg-gray-100 text-gray-700 border border-gray-300";
      case "Shipped":
        return "bg-yellow-50 text-yellow-600 border border-yellow-400";
      case "Delivered":
        return "bg-green-50 text-green-600 border border-green-400";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            {/* Order Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="mb-3 sm:mb-0">
                <p className="text-lg font-semibold">{order.id}</p>
                <p className="text-gray-600 text-sm">{order.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusStyles(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
                <p className="text-lg font-semibold">{order.total}</p>
              </div>
            </div>

            {/* Expandable Details */}
            {expandedOrder === order.id && (
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="text-md font-medium mb-2">Order Items:</h3>
                <ul className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-sm text-gray-700"
                    >
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-right">
                  <button className="text-yellow-600 hover:underline text-sm font-medium">
                    View Full Details →
                  </button>
                </div>
              </div>
            )}

            {/* Toggle Button */}
            <div className="mt-4">
              <button
                onClick={() =>
                  setExpandedOrder(expandedOrder === order.id ? null : order.id)
                }
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition"
              >
                {expandedOrder === order.id ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}