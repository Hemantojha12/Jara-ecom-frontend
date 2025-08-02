"use client"
import { useState } from "react";
import { Plus, CheckCircle, Clock, RefreshCw } from "lucide-react";

// ✅ Type definitions
interface ReturnRequest {
  id: string;
  product: string;
  date: string;
  reason: string;
  status: "Pending" | "Approved" | "Refunded";
}

export default function ReturnsAndRefunds() {
  const [requests, setRequests] = useState<ReturnRequest[]>([
    {
      id: "RR-001",
      product: "Luxury Leather Bag",
      date: "July 18, 2025",
      reason: "Item damaged",
      status: "Pending",
    },
    {
      id: "RR-002",
      product: "Gold Wallet",
      date: "June 30, 2025",
      reason: "Wrong color delivered",
      status: "Approved",
    },
    {
      id: "RR-003",
      product: "Designer Shoes",
      date: "June 10, 2025",
      reason: "Size mismatch",
      status: "Refunded",
    },
  ]);

  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    reason: "",
  });

  // ✅ Handle form field updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequests((prev) => [
      ...prev,
      {
        id: `RR-${String(prev.length + 1).padStart(3, "0")}`,
        product: formData.product,
        date: new Date().toLocaleDateString(),
        reason: formData.reason,
        status: "Pending",
      },
    ]);
    setFormData({ product: "", reason: "" });
    setFormOpen(false);
  };

  // ✅ Status Badge Styles
  const getStatusBadge = (status: ReturnRequest["status"]) => {
    switch (status) {
      case "Pending":
        return (
          <span className="flex items-center gap-1 text-sm bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-full">
            <Clock size={14} /> Pending
          </span>
        );
      case "Approved":
        return (
          <span className="flex items-center gap-1 text-sm bg-gold-50 border border-gold-400 text-gold-600 px-3 py-1 rounded-full">
            <CheckCircle size={14} /> Approved
          </span>
        );
      case "Refunded":
        return (
          <span className="flex items-center gap-1 text-sm bg-green-50 border border-green-400 text-green-600 px-3 py-1 rounded-full">
            <RefreshCw size={14} /> Refunded
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Returns & Refunds</h1>

      {/* List of Return Requests */}
      <div className="space-y-6 mb-10">
        {requests.length === 0 && (
          <p className="text-gray-600 italic">No return requests yet.</p>
        )}
        {requests.map((req) => (
          <div
            key={req.id}
            className="border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between"
          >
            <div className="mb-3 sm:mb-0">
              <p className="font-semibold">{req.product}</p>
              <p className="text-sm text-gray-600">
                {req.date} — <span className="italic">{req.reason}</span>
              </p>
            </div>
            {getStatusBadge(req.status)}
          </div>
        ))}
      </div>

      {/* Request Return Button */}
      <button
        onClick={() => setFormOpen(true)}
        className="flex items-center gap-2 bg-gold-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-gold-400 transition"
      >
        <Plus className="w-5 h-5" /> Request Return
      </button>

      {/* Modal Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl max-w-lg w-full p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">New Return Request</h2>

            <div className="space-y-5">
              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Product</span>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Reason</span>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-gold-500 text-white font-semibold hover:bg-gold-400 transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
