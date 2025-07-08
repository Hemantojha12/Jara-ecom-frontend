import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/images/JARA.png" // relative to the /public folder
                alt="JARA GROUPS Logo"
                width={60} // adjust as needed
                height={60}
              />
              {/* <span className="text-2xl font-bold text-black">JARA GROUPS</span> */}
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-black transition-colors">
              Products
            </Link>
            <Link href="/brands" className="text-gray-600 hover:text-black transition-colors">
              Brands
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-black transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <User className="h-5 w-5" />
            </button>

            <Link href="/cart">
              <button className="p-2 text-gray-600 hover:text-black transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-black transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}