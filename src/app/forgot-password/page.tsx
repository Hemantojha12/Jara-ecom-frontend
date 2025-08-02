 "use client"
 export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        {/* 🔹 Heading */}
        <h1 className="text-3xl font-semibold text-center mb-4 text-gray-900">
          Forgot Password?
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        {/* 🔹 Forgot Password Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition"
            />
          </div>

          {/* ✅ Send Reset Link Button */}
          <button
            type="submit"
            className="w-full bg-gold-500 text-white py-3 rounded-lg font-semibold hover:bg-gold-400 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Remember your password?{" "}
          <a href="/login" className="text-gold-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
