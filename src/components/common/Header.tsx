"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, User, Menu, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu, 
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo - Clickable and links to homepage */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/JARA.png"
            alt="Jara Group Logo"
            width={80}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/collections/new"
            className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600"
          >
            New Arrivals
          </Link>
          <Link
            href="/collections/luxury"
            className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600"
          >
            Luxury
          </Link>
          <Link
            href="/collections/brands"
            className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600"
          >
            Brands
          </Link>
          <Link
            href="/collections/sale"
            className="text-sm font-medium transition-colors hover:text-gray-900 text-gray-600"
          >
            Sale
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-700 hover:text-gray-900">
                <Globe className="h-4 w-4 mr-1" />
                EN
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              side="bottom" 
              align="end"
              className="bg-white border border-gray-200 shadow-lg z-50 min-w-[120px]"
            >
              <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                English
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                नेपाली
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="absolute right-0 top-0 w-64 sm:w-80 z-50">
                <Input
                  type="search"
                  placeholder="Search luxury items..."
                  className="pr-10 bg-white border-gray-300"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex text-gray-700 hover:text-gray-900"
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Wishlist - Fixed the Link positioning */}
          <Link href="/user/wishlist">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-gray-700 hover:text-gray-900">
              <Heart className="h-4 w-4" />
            </Button>
          </Link>

          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              side="bottom" 
              align="end"
              className="bg-white border border-gray-200 shadow-lg z-50 min-w-[160px]"
            >
              <DropdownMenuItem className="hover:bg-gray-50">
                <Link href="/user/account/profile" className="w-full block">
                  My Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <Link href="user/orders" className="w-full block">
                  Order History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <Link href="/user/wishlist" className="w-full block">
                  Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <Link href="/signup" className="w-full block">
                  Sign In
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Bag */}
          <Link href="/cart">
            <Button variant="ghost" size="sm" className="relative text-gray-700 hover:text-gray-900">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-gray-700 hover:text-gray-900">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-white">
              <SheetTitle className="text-left mb-6 text-gray-900">Menu</SheetTitle>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/collections/new"
                  className="text-lg font-medium transition-colors hover:text-gray-900 text-gray-700"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/collections/luxury"
                  className="text-lg font-medium transition-colors hover:text-gray-900 text-gray-700"
                >
                  Luxury
                </Link>
                <Link
                  href="/collections/brands"
                  className="text-lg font-medium transition-colors hover:text-gray-900 text-gray-700"
                >
                  Brands
                </Link>
                <Link
                  href="/collections/sale"
                  className="text-lg font-medium transition-colors hover:text-gray-900 text-gray-700"
                >
                  Sale
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Input
                    type="search"
                    placeholder="Search luxury items..."
                    className="mb-4 bg-white border-gray-300"
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}