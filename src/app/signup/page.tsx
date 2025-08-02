"use client"
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        {/* 🔹 Heading */}
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900">
          Create Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign up to start shopping with us
        </p>

        {/* 🔹 Signup Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
            />
          </div>

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

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
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

          {/* 🔹 Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gold-500 text-black py-3 rounded-lg font-semibold hover:bg-gold-400 transition"
          >
            Sign Up
          </button>
        </form>

        {/* 🔹 Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>

        {/* 🔹 Social Signup Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-gray-700 hover:bg-gray-50 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-gray-700 hover:bg-gray-50 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            Sign up with Facebook
          </button>
        </div>

        {/* 🔹 Link to Login */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-gold-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
