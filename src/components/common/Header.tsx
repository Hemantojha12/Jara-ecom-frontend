"use client";

import { useState } from "react";
import Link from "next/link";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo - Clickable and links to homepage */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img 
            src="/images/JARA.png" 
            alt="Jara Group Logo"
            className="w-20 h-15 object-contain"
          />
          {/* <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            JARA
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/collections/new"
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            New Arrivals
          </Link>
          <Link
            href="/collections/luxury"
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Luxury
          </Link>
          <Link
            href="/collections/brands"
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Brands
          </Link>
          <Link
            href="/collections/sale"
            className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Sale
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Globe className="h-4 w-4 mr-1" />
                EN
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>नेपाली</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="absolute right-0 top-0 w-64 sm:w-80">
                <Input
                  type="search"
                  placeholder="Search luxury items..."
                  className="pr-10"
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
                className="hidden sm:flex"
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Wishlist */}
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Heart className="h-4 w-4" />
          </Button>

          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/account" className="w-full">
                  My Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="w-full">
                  Order History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/wishlist" className="w-full">
                  Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login" className="w-full">
                  Sign In
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Bag */}
          <Link href="/cart">
      <Button variant="ghost" size="sm" className="relative">
        <ShoppingBag className="h-4 w-4" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
          2
        </span>
      </Button>
    </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetTitle className="text-left mb-6">Menu</SheetTitle>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/collections/new"
                  className="text-lg font-medium transition-colors hover:text-foreground/80"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/collections/luxury"
                  className="text-lg font-medium transition-colors hover:text-foreground/80"
                >
                  Luxury
                </Link>
                <Link
                  href="/collections/brands"
                  className="text-lg font-medium transition-colors hover:text-foreground/80"
                >
                  Brands
                </Link>
                <Link
                  href="/collections/sale"
                  className="text-lg font-medium transition-colors hover:text-foreground/80"
                >
                  Sale
                </Link>
                <div className="pt-4 border-t">
                  <Input
                    type="search"
                    placeholder="Search luxury items..."
                    className="mb-4"
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