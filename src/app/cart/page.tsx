"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Heart, 
  Trash2, 
  ArrowLeft, 
  Gift, 
  Shield, 
  Truck, 
  RotateCcw,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

// Define types for better TypeScript support
interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

interface RecommendedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

export default function EnhancedCart() {
  const router = useRouter();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Plaid Shirt & Buttoned Skirt Set",
      color: "OLIVE/MULTI",
      size: "S",
      price: 39.99,
      quantity: 1,
      image: "/api/placeholder/96/128",
      inStock: true,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "Organic Cotton Dress",
      color: "Navy Blue",
      size: "M",
      price: 49.99,
      quantity: 2,
      image: "/api/placeholder/96/128",
      inStock: true,
      rating: 4.8,
      reviews: 89
    }
  ]);

  const [promoCode, setPromoCode] = useState<string>('');
  const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);
  const [showGiftNote, setShowGiftNote] = useState<boolean>(false);
  const [giftNote, setGiftNote] = useState<string>('');
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number): void => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const saveForLater = (item: CartItem): void => {
    setSavedItems([...savedItems, item]);
    setCartItems(cartItems.filter(i => i.id !== item.id));
  };

  const moveToCart = (item: CartItem): void => {
    setCartItems([...cartItems, item]);
    setSavedItems(savedItems.filter(i => i.id !== item.id));
  };

  const applyPromo = (): void => {
    if (promoCode.toLowerCase() === 'save10') {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal - discount + tax + shipping;

  const recommendedProducts: RecommendedProduct[] = [
    { id: 101, name: "Silk Scarf", price: 18.99, image: "/api/placeholder/80/80", rating: 4.7 },
    { id: 102, name: "Leather Handbag", price: 79.99, image: "/api/placeholder/80/80", rating: 4.9 },
    { id: 103, name: "Statement Earrings", price: 24.99, image: "/api/placeholder/80/80", rating: 4.6 },
    { id: 104, name: "Cashmere Cardigan", price: 89.99, image: "/api/placeholder/80/80", rating: 4.8 }
  ];

  const EmptyCartState = () => (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
        <ShoppingBag className="w-12 h-12 text-gray-400" />
      </div>
      <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
      <p className="text-gray-600 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>

      <button 
        onClick={() => router.push('/')}
        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );

  if (cartItems.length === 0 && savedItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <div className="flex items-center gap-2 mb-8">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-medium">My Cart</h2>
          </div>
          <EmptyCartState />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span className="font-medium">Shopping Cart</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs">2</div>
                <span>Checkout</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs">3</div>
                <span>Payment</span>
              </div>
            </div>
            <button 
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Free Shipping Progress */}
            <div className="bg-white rounded-lg p-4 border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Free shipping progress</span>
                <Truck className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {subtotal >= 50 ? (
                  <span className="text-green-600 font-medium">🎉 You qualify for free shipping!</span>
                ) : (
                  <>Add <span className="font-medium text-black">${(50 - subtotal).toFixed(2)}</span> more for free shipping</>
                )}
              </p>
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <h3 className="font-medium text-lg">Your Items ({cartItems.length})</h3>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 border-b last:border-b-0">
                  <div className="flex gap-4">
                    <div className="w-24 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-600 font-medium">PRODUCT</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                          <p className="text-sm text-gray-600">Color: {item.color}</p>
                          <p className="text-sm text-gray-600">Size: {item.size}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600">{item.rating}</span>
                              <span className="text-xs text-gray-400">({item.reviews})</span>
                            </div>
                            {item.inStock && (
                              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                In Stock
                              </span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 min-w-[40px] text-center font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => saveForLater(item)}
                            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <Heart className="w-4 h-4" />
                            Save for Later
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Saved for Later */}
            {savedItems.length > 0 && (
              <div className="bg-white rounded-lg border">
                <div className="p-6 border-b">
                  <h3 className="font-medium text-lg">Saved for Later ({savedItems.length})</h3>
                </div>
                {savedItems.map((item) => (
                  <div key={item.id} className="p-6 border-b last:border-b-0">
                    <div className="flex gap-4">
                      <div className="w-16 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-xs text-gray-600">IMG</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">${item.price}</p>
                        <div className="flex gap-3">
                          <button 
                            onClick={() => moveToCart(item)}
                            className="text-sm text-black hover:underline"
                          >
                            Move to Cart
                          </button>
                          <button className="text-sm text-gray-600 hover:text-red-500">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recommended Products */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <h3 className="font-medium text-lg">You might also like</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-xs text-gray-600">PRODUCT</span>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">${product.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <button className="w-full mt-2 text-xs bg-black text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Order Summary */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-lg border p-6 space-y-6">
              {/* Order Summary Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">Order Summary</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Est. delivery: 3-5 days</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-3 text-sm">PROMO CODE</h4>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button 
                    onClick={applyPromo}
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {isPromoApplied && (
                  <p className="text-sm text-green-600 mt-2">✓ Promo code applied!</p>
                )}
              </div>

              {/* Gift Note */}
              <div className="border rounded-lg p-4">
                <button 
                  onClick={() => setShowGiftNote(!showGiftNote)}
                  className="flex items-center gap-2 text-sm font-medium w-full"
                >
                  <Gift className="w-4 h-4" />
                  Add gift note
                </button>
                {showGiftNote && (
                  <textarea 
                    placeholder="Enter your gift message..."
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    className="w-full mt-3 p-3 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
                    rows={3}
                  />
                )}
              </div>

              {/* Order Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-3 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="text-sm text-gray-600 text-center">
                or 4 interest-free payments of <span className="font-medium">${(total / 4).toFixed(2)}</span> with{" "}
                <span className="font-bold text-black">afterpay</span>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
                <div className="text-center">
                  <Shield className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">Secure Payment</span>
                </div>
                <div className="text-center">
                  <Truck className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">Free Shipping</span>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">Easy Returns</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-4 rounded-lg font-medium text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <span>🔒</span>
                Secure Checkout
              </button>

              {/* Additional Security */}
              <div className="text-center text-xs text-gray-500">
                <p>Secure 256-bit SSL encryption</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span>💳</span>
                  <span>🔒</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}