import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Luxury
              <span className="block text-gray-600">Redefined</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover Nepal&apos;s premier destination for luxury fashion, premium accessories, and exclusive lifestyle products. Experience sophistication delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/brands" 
                className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-colors font-medium text-center"
              >
                Explore Brands
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-gray-600" />
                </div>
                <p className="text-gray-600 font-medium">Premium Products</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">NEW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}