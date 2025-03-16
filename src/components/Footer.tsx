import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Do You Need Help?</h3>
            <div className="space-y-2 text-sm">
              <p>Contact Our 24/7 Customer Support</p>
              <p>We&apos;re Always Happy to Help</p>
              <p className="font-bold text-lg">+1 800 555 253</p>
              <p className="text-[#004745]">info@chillz.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="hover:text-[#004745]">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-[#004745]">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#004745]">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#004745]">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-[#004745]">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#004745]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#004745]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#004745]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="hover:text-[#004745]">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Make Money With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sell" className="hover:text-[#004745]">
                  Sell on Chillz
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-[#004745]">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="hover:text-[#004745]">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-[#004745]">
                  Advertise Your Products
                </Link>
              </li>
              <li>
                <Link href="/vendor" className="hover:text-[#004745]">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#004745]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#004745]">
                  Company Info
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#004745]">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#004745]">
                  Events & Promotions
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[#004745]">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#004745]">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#004745]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/investor" className="hover:text-[#004745]">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between py-6 border-t border-b">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium">
              About Us
            </Link>
            <Link href="/" className="text-sm font-medium">
              Contact
            </Link>
            <Link href="/" className="text-sm font-medium">
              Help
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
            <Link href="/" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-gray-600 hover:text-[#004745]" />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Download Our App:</span>
            <Link href="/" className="border rounded px-2 py-1 text-xs">
              App Store
            </Link>
            <Link href="/" className="border rounded px-2 py-1 text-xs">
              Google Play
            </Link>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center">
          <p className="text-xs text-gray-500">© 2023 Chillz. All rights reserved. Powered by Vercel.</p>
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg?height=20&width=30" alt="Visa" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="Mastercard" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="PayPal" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="Apple Pay" className="h-5" />
            <img src="/placeholder.svg?height=20&width=30" alt="Google Pay" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}

