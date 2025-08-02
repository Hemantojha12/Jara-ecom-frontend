'use client';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        {/* 🔹 Heading */}
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to access your account
        </p>

        {/* 🔹 Login Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
            />
          </div>

          {/* 🔹 Forgot Password Link */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-gold-600 hover:underline transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* ✅ LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-gold-500 text-white py-3 rounded-lg font-semibold hover:bg-gold-400 transition"
          >
            Login
          </button>
        </form>

        {/* 🔹 Sign Up Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-gold-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
