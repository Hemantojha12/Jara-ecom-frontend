"use client"

import { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";

export default function AddressManagement() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Himansh Shrestha",
      phone: "+977 9800000000",
      address: "123 Luxury St, Kathmandu, Nepal",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "+1 555 123 4567",
      address: "456 Premium Ave, New York, USA",
    },
  ]);

  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingId !== null) {
      // Update existing address
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingId ? { ...addr, ...formData } : addr
        )
      );
    } else {
      // Add new address
      setAddresses((prev) => [...prev, { id: Date.now(), ...formData }]);
    }

    setFormData({ name: "", phone: "", address: "" });
    setEditingId(null);
    setFormOpen(false);
  };

  const handleEditClick = (id: number) => {
    const addr = addresses.find((a) => a.id === id);
    if (!addr) return;
    setFormData({ name: addr.name, phone: addr.phone, address: addr.address });
    setEditingId(id);
    setFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Manage Addresses</h1>

      {/* Address List */}
      <div className="space-y-6 mb-10">
        {addresses.length === 0 && (
          <p className="text-gray-600 italic">No addresses saved yet.</p>
        )}
        {addresses.map(({ id, name, phone, address }) => (
          <div
            key={id}
            className="border border-gray-200 rounded-xl p-6 flex justify-between items-start"
          >
            <div>
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-gray-600">{phone}</p>
              <p className="text-gray-600 mt-1 max-w-xl whitespace-pre-wrap">{address}</p>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <button
                onClick={() => handleEditClick(id)}
                aria-label="Edit address"
                className="hover:text-gold-500 transition"
              >
                <Edit2 className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleDelete(id)}
                aria-label="Delete address"
                className="hover:text-red-500 transition"
              >
                <Trash2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Address Button */}
      <button
        onClick={() => {
          setFormOpen(true);
          setEditingId(null);
          setFormData({ name: "", phone: "", address: "" });
        }}
        className="flex items-center gap-2 bg-gold-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-gold-400 transition"
      >
        <Plus className="w-5 h-5" /> Add New Address
      </button>

      {/* Modal Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <form
            onSubmit={handleAddOrEdit}
            className="bg-white rounded-xl max-w-lg w-full p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">
              {editingId ? "Edit Address" : "Add New Address"}
            </h2>

            <div className="space-y-5">
              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Address</span>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
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
                {editingId ? "Save Changes" : "Add Address"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}