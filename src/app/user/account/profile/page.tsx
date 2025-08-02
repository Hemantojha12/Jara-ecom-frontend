"use client"

import { useState } from "react";

export default function ProfileSettings() {
  const [form, setForm] = useState({
    name: "Himansh",
    email: "himansh@example.com",
    phone: "+977 9800000000",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your save logic here
    alert("Changes saved!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full border border-gray-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-3xl font-semibold mb-8">Profile Settings</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info Section */}
          <section>
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                  required
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                  required
                />
              </label>
              <label className="flex flex-col sm:col-span-2">
                <span className="mb-1 font-medium text-gray-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>
            </div>
          </section>

          {/* Password Section */}
          <section>
            <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">
              Change Password
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">New Password</span>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 font-medium text-gray-700">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
                />
              </label>
            </div>
          </section>

          {/* Save Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="bg-gold-500 hover:bg-gold-400 text-white font-semibold py-3 px-8 rounded-md transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
