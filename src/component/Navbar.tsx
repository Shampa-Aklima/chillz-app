"use client"

import { useState } from "react"
import { MapPin, Search, User, Heart, ShoppingCart, Gift, Timer, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <header className="w-full">
      {/* Top black bar */}
      <div className="bg-black text-white text-xs py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left links */}
          <div className="flex items-center space-x-4">
            <Link href="/track" className="hover:text-gray-300">
              Track Order
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>

          {/* Center delivery info */}
          <div className="hidden md:flex items-center">
            <span className="text-gray-400 mr-1">We deliver to you every day from</span>
            <span className="font-medium">7:00 to 23:00</span>
          </div>

          {/* Right options */}
          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-white text-xs border-none outline-none">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <select className="bg-transparent text-white text-xs border-none outline-none">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center">
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="ml-1">Dark Theme</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
            <h2 className="text-2xl font-bold">Chillz </h2>
              <Image 
              src="/placeholder.svg?height=40&width=120" 
              alt="Chillz" 
              className="h-10" 
              width={120}
              height={40}
              />
            </Link>

            {/* Location selector */}
            <button className="hidden md:flex items-center text-sm bg-gray-100 px-3 py-2 rounded-md mx-4">
              <MapPin className="h-4 w-4 text-teal-600 mr-2" />
              <span>Select Location</span>
            </button>

            {/* Search bar */}
            <div className="flex-grow max-w-2xl mx-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-teal-500"
                />
                <button className="px-6 bg-teal-600 text-white rounded-r-md hover:bg-teal-700">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center text-sm">
                <User className="h-5 w-5" />
                <span className="hidden md:inline ml-2">Account</span>
              </button>

              <button className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="flex-grow">
              <ul className="flex items-center space-x-8 py-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-teal-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-teal-600">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/frozen" className="hover:text-teal-600">
                    Frozen Foods
                  </Link>
                </li>
                <li>
                  <Link href="/beverages" className="hover:text-teal-600">
                    Beverages
                  </Link>
                </li>
                <li>
                  <Link href="/bakery" className="hover:text-teal-600">
                    Bakery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-teal-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/discounts" className="flex items-center text-teal-600">
                    <Timer className="h-4 w-4 mr-1" />
                    Best Discounts
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Gift icon */}
            <button className="ml-4">
              <Gift className="h-5 w-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

