'use client';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';



const newArrivals = [
  {
    id: 1,
    name: 'premium Jara Bag',
    price: 1299,
    image: '/images/Bag3.jpg'
  },
  {
    id: 2,
    name: 'Premium Shoes',
    price: 899,
    image: '/images/Shoes.jpg'
  },
  {
    id: 3,
    name: 'Jeans',
    price: 2199,
    image: '/images/Jeans.jpg'
  },
  {
    id: 4,
    name: 'shirt',
    price: 1899,
    image: '/images/Shirt.jpg'
  }
];

const trendingOffers = [
  {
    id: 1,
    title: 'Winter Collection 2025',
    subtitle: 'Luxurious warmth for the sophisticated',
    image: '/images/Winter.jpg',
    cta: 'Explore Collection'
  },
  {
    id: 2,
    title: 'Summer collection',
    subtitle: 'Exclusive summer Wears',
    image: '/images/Summer.jpg',
    cta: 'Explore Collection '
  },
  // {
  //   id: 3,
  //   title: 'Exclusive Member Sale',
  //   subtitle: 'Up to 30% off selected luxury items',
  //   image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
  //   cta: 'Shop Sale'
  // }
];

export default function PremiumHomepage() {
  const [, setHeaderStyle] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const header = document.querySelector('header');
      
      if (heroSection && header) {
        const heroRect = heroSection.getBoundingClientRect();
        const headerHeight = header.offsetHeight;
        
        // Check if header is overlapping with hero section (dark background)
        const isOverDark = heroRect.top < headerHeight && heroRect.bottom > 0;
        
        if (isOverDark) {
          setHeaderStyle('dark');
          header.classList.add('text-white');
          header.classList.remove('text-black');
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
          header.style.backdropFilter = 'blur(10px)';
        } else {
          setHeaderStyle('light');
          header.classList.add('text-black');
          header.classList.remove('text-white');
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
        }
      }
    };

    // Wait for DOM to be ready, then check initial state
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section id="hero-section" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/Background.jpg"
            alt="Luxury Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Luxury Delivered to
            <span className="block text-yellow-400">Your Doorstep</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Nepal's premier destination for luxury fashion, accessories, and lifestyle products
          </p>
         <Link href='/user/products'>
  <button className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg font-medium tracking-wide group">
    <span className="mr-3">Shop Now</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>

        </div>
      </section>

      {/* CSS for header styling */}
      <style jsx global>{`
        header {
          transition: all 0.3s ease-in-out !important;
        }
        
        header.text-white * {
          color: white !important;
        }
        
        header.text-white .text-foreground\\/60 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        
        header.text-white button {
          color: white !important;
        }
        
        header.text-white button:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        header.text-white .bg-black {
          background-color: white !important;
          color: black !important;
        }
      `}</style>

     
      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">New Arrivals</h2>
            <p className="text-gray-600">Discover our latest curated selection of premium fashion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-4 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Hover Button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200 shadow-lg">
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    NPR {(product.price * 132).toLocaleString()} {/* Converting to NPR */}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium tracking-wide">
              <span className="mr-2">View All New Arrivals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Trending / Seasonal Offers */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">Trending Collections</h2>
            <p className="text-gray-600">Curated collections for the modern connoisseur</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {trendingOffers.map((offer, index) => (
              <div key={offer.id} className={`group cursor-pointer ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className={`relative ${index === 0 ? 'h-80' : 'h-96'}`}>
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-xs font-semibold text-yellow-400 tracking-wide uppercase">Featured</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                        {offer.title}
                      </h3>
                      <p className="text-gray-200 mb-4 text-sm">
                        {offer.subtitle}
                      </p>
                      <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide group/btn rounded">
                        <span className="mr-2">{offer.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm font-medium tracking-wide">
              <span className="mr-3">Explore All Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose JARA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">Why Choose JARA</h2>
            <p className="text-gray-600">Nepal's trusted luxury shopping destination</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                <Star className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every product is carefully curated and authenticated to ensure the highest standards of luxury and craftsmanship.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                <div className="w-8 h-8 text-white group-hover:text-black flex items-center justify-center font-bold">24</div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Swift and secure delivery across Nepal, ensuring your luxury purchases reach you in perfect condition.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                <div className="w-8 h-8 text-white group-hover:text-black flex items-center justify-center text-lg">♕</div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">VIP Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized shopping experience with dedicated customer support and exclusive member benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Trusted by luxury enthusiasts across Nepal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Kathmandu",
                review: "Exceptional quality and service. JARA has become my go-to destination for luxury shopping in Nepal.",
                rating: 5
              },
              {
                name: "Raj Patel", 
                location: "Pokhara",
                review: "The authenticity guarantee and fast delivery make JARA stand out. Highly recommended!",
                rating: 5
              },
              {
                name: "Anita Thapa",
                location: "Lalitpur", 
                review: "Beautiful curated collection and excellent customer service. Love shopping with JARA!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}