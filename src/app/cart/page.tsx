import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* Cart Header */}
        <div className="flex items-center gap-2 mb-8">
          <ShoppingBag className="w-6 h-6" />
          <h2 className="text-2xl font-medium">My Cart</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-6">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-24 h-32 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=128&width=96"
                    alt="Plaid Shirt & Buttoned Skirt Set"
                    width={96}
                    height={128}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="grid grid-cols-4 gap-4 items-start">
                    <div className="col-span-2">
                      <h3 className="font-medium text-gray-900 mb-1">Plaid Shirt & Buttoned Skirt Set</h3>
                      <p className="text-sm text-gray-600 mb-1">Color: OLIVE/MULTI</p>
                      <p className="text-sm text-gray-600 mb-1">Size: S</p>
                      <p className="text-sm text-green-600 font-medium">In Stock</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-medium mb-1">Each</p>
                      <p className="font-bold">$39.99</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-medium mb-1">Quantity</p>
                      <Select defaultValue="1">
                        <SelectTrigger className="w-16 h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-medium mb-1">Total</p>
                      <p className="font-bold">$39.99</p>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 mt-4 text-sm">
                    <button className="text-gray-600 hover:text-gray-800">Edit</button>
                    <button className="text-gray-600 hover:text-gray-800">Remove</button>
                    <button className="text-gray-600 hover:text-gray-800">Move to Wishlist</button>
                    <button className="text-gray-600 hover:text-gray-800">Save for Later</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="flex justify-between items-center mt-6 py-4 border-t">
              <span className="font-medium">1 Items</span>
              <span className="font-bold text-lg">$39.99</span>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            {/* Promo Code */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-3 text-sm">ENTER PROMO CODE</h3>
              <div className="flex gap-2">
                <Input placeholder="Promo Code" className="flex-1 text-sm" />
                <Button className="bg-black text-white px-6 text-sm">Submit</Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Shipping cost</span>
                <span>TBD</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$0</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>TBD</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Estimated Total</span>
                <span>$39.99</span>
              </div>
            </div>

            {/* Afterpay */}
            <div className="text-sm text-gray-600">
              or 4 interest-free payments of <span className="font-medium">$10.00</span> with{" "}
              <span className="font-bold text-black">afterpay</span>
              <span className="ml-1 text-gray-400">ⓘ</span>
            </div>

            {/* Free Shipping Message */}
            <div className="text-sm">
              {"You're "}
              <span className="text-red-600 font-medium">$10.01</span>
              {" away from free shipping!"}
            </div>

            {/* Checkout Button */}
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 text-base">
              🔒 Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

