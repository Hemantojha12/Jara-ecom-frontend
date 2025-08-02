"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AccountDashboard() {
  const [active, setActive] = useState("Profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Profile", "Address Book", "Orders", "Returns & Refunds", "Logout"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 pr-6">
          <h2 className="text-xl font-semibold mb-6">My Account</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full text-left px-3 py-2 rounded-md font-medium transition ${
                  active === item
                    ? "bg-gold-50 text-gold-600 border-l-4 border-gold-500"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Top Nav */}
        <div className="lg:hidden w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">My Account</h2>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border rounded-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border rounded-md p-3 mb-6">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md font-medium transition ${
                    active === item
                      ? "bg-gold-50 text-gold-600 border-l-4 border-gold-500"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 pl-0 lg:pl-10">
          <h1 className="text-3xl font-bold mb-4">Welcome Back, Himansh!</h1>
          <p className="text-gray-600 mb-8">
            Here’s your account overview. Use the quick links below to manage your profile, check orders, and more.
          </p>

          {/* Quick Links Section */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold mb-2">View Orders</h3>
              <p className="text-gray-600 text-sm mb-4">
                Track, cancel or reorder items from your recent purchases.
              </p>
              <button className="text-gold-600 font-medium hover:underline">Go to Orders →</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold mb-2">Manage Address Book</h3>
              <p className="text-gray-600 text-sm mb-4">
                Update your shipping and billing addresses for faster checkout.
              </p>
              <button className="text-gold-600 font-medium hover:underline">Edit Addresses →</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
              <p className="text-gray-600 text-sm mb-4">
                Change your personal details, email preferences, and more.
              </p>
              <button className="text-gold-600 font-medium hover:underline">Edit Profile →</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
