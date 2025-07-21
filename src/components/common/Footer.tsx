import Link from "next/link";
import { Separator } from "@/components/ui/seperator";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">JARA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nepal&apos;s premier destination for luxury shopping. Curating the finest products
              with uncompromising quality and service.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collections/new" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/luxury" className="text-gray-400 hover:text-white transition-colors">
                  Luxury Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/brands" className="text-gray-400 hover:text-white transition-colors">
                  Featured Brands
                </Link>
              </li>
              <li>
                <Link href="/collections/sale" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Jara
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 Jara Groups. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Secure payments by</span>
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-gray-800 rounded text-xs">Fonepay</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-xs">Stripe</span>
              <span className="px-2 py-1 bg-gray-800 rounded text-xs">COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
