import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block">
              <h4 className="text-xl font-bold mb-4">JARA GROUPS</h4>
            </Link>
            <p className="text-gray-300 mb-4">
              Nepal's premier destination for luxury shopping. Discover authentic premium products with unmatched service.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-8 h-8 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Customer Service</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <div className="text-gray-300 space-y-2">
              <p>Kathmandu, Nepal</p>
              <p>
                <Link 
                  href="tel:+977-1-XXXXXXX" 
                  className="hover:text-white transition-colors"
                >
                  Phone: +977-1-XXXXXXX
                </Link>
              </p>
              <p>
                <Link 
                  href="mailto:info@jaragroups.com" 
                  className="hover:text-white transition-colors"
                >
                  Email: info@jaragroups.com
                </Link>
              </p>
              <p>Support: 24/7</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2025 Jara Groups. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}