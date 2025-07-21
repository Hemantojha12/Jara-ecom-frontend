"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Stay In The Know
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Be the first to discover new arrivals, exclusive collections, and special offers.
            Join our community of luxury enthusiasts.
          </p>

          {isSubscribed ? (
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-gray-300 text-sm">
                Thank you for joining our exclusive newsletter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                  required
                />
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-100 font-medium"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
