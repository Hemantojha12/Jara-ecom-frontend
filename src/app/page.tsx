import Link from 'next/link';
import HeroSection from '@/components/common/HeroSection';
import { ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Minimal Hero Product */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="max-w-md">
                <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">New Collection</p>
                <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
                  Swiss Precision<br />
                  <span className="font-bold">Redefined</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Discover timepieces that blend traditional craftsmanship with contemporary design.
                </p>
                <div className="mb-8">
                  <span className="text-2xl font-light text-black">From NPR 1,85,000</span>
                </div>
                <Link 
                  href="/categories/watches"
                  className="inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all duration-300 group"
                >
                  Explore Collection 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-gray-600 font-medium">LUXURY TIMEPIECE</span>
                </div>
                <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - Minimal Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-black mb-4">
              Curated <span className="font-bold">Collections</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each piece tells a story of exceptional craftsmanship and timeless elegance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/categories/watches" className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">⌚</span>
                </div>
                <h3 className="text-xl font-medium text-black mb-3">Timepieces</h3>
                <p className="text-gray-600 text-sm mb-6">Swiss heritage meets modern precision</p>
                <span className="text-sm text-black font-medium group-hover:underline">
                  View Collection
                </span>
              </div>
            </Link>
            
            <Link href="/categories/jewelry" className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-medium text-black mb-3">Fine Jewelry</h3>
                <p className="text-gray-600 text-sm mb-6">Precious stones, timeless beauty</p>
                <span className="text-sm text-black font-medium group-hover:underline">
                  View Collection
                </span>
              </div>
            </Link>
            
            <Link href="/categories/fashion" className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">👜</span>
                </div>
                <h3 className="text-xl font-medium text-black mb-3">Luxury Fashion</h3>
                <p className="text-gray-600 text-sm mb-6">Curated designer collections</p>
                <span className="text-sm text-black font-medium group-hover:underline">
                  View Collection
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers - Clean Product Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-black mb-2">
                Customer <span className="font-bold">Favorites</span>
              </h2>
              <p className="text-gray-600">Most loved by our community</p>
            </div>
            <Link href="/products" className="text-sm text-black font-medium hover:underline">
              View All Products
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Classic Chronograph", price: "NPR 1,85,000", rating: 4.9, image: "bg-gray-900" },
              { name: "Diamond Solitaire", price: "NPR 95,000", rating: 4.8, image: "bg-amber-100" },
              { name: "Leather Handbag", price: "NPR 35,000", rating: 4.7, image: "bg-rose-100" },
              { name: "Silk Scarf", price: "NPR 18,000", rating: 4.9, image: "bg-blue-100" }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-2xl mb-4 relative overflow-hidden">
                  <div className={`absolute inset-0 ${product.image} flex items-center justify-center`}>
                    <span className={`font-medium text-sm ${product.image === 'bg-gray-900' ? 'text-white' : 'text-gray-700'}`}>
                      {product.name.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-medium text-black mb-1">{product.name}</h3>
                  <p className="text-gray-900 font-light">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Minimal */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-black mb-4">
            The <span className="font-bold">Jara</span> Promise
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Every purchase is backed by our commitment to authenticity, quality, and exceptional service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Authentic Guarantee</h3>
              <p className="text-gray-600 text-sm">Every item verified for authenticity</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-lg">🚚</span>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Free Delivery</h3>
              <p className="text-gray-600 text-sm">Complimentary shipping across Nepal</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-lg">💬</span>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Personalized service from our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimal */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">
            Stay <span className="font-bold">Connected</span>
          </h2>
          <p className="text-gray-300 mb-12">
            Be first to know about new arrivals and exclusive events.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}