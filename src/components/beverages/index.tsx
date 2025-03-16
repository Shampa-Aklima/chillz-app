"use client"

import Image from "next/image"
import { ProductCard } from "../shared/product-card"
import { SectionHeader } from "../shared/section-header"
import { beverageProducts } from "./data"

export function Beverages() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <SectionHeader title="Beverages" viewAllLink="/beverages" />

        <div className="grid grid-cols-5 gap-4">
          <ProductCard
            id={beverageProducts[0].id}
            image={beverageProducts[0].image}
            title={beverageProducts[0].title}
            price={beverageProducts[0].price}
            salePrice={beverageProducts[0].salePrice}
            rating={beverageProducts[0].rating}
            reviewCount={beverageProducts[0].reviewCount}
            badge={beverageProducts[0].badge}
          />
          <ProductCard
            id={beverageProducts[1].id}
            image={beverageProducts[1].image}
            title={beverageProducts[1].title}
            price={beverageProducts[1].price}
            salePrice={beverageProducts[1].salePrice}
            rating={beverageProducts[1].rating}
            reviewCount={beverageProducts[1].reviewCount}
            badge={beverageProducts[1].badge}
          />

          {/* Special Offer Banner */}
          <div className="relative rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Special Organic"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold mb-2">Special Organic</h3>
              <div className="flex items-center text-white mb-2">
                <span className="text-sm">From</span>
                <span className="text-xl font-bold ml-2">$ 124.99</span>
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">Shop Now</button>
            </div>
          </div>

          <ProductCard
            id={beverageProducts[2].id}
            image={beverageProducts[2].image}
            title={beverageProducts[2].title}
            price={beverageProducts[2].price}
            salePrice={beverageProducts[2].salePrice}
            rating={beverageProducts[2].rating}
            reviewCount={beverageProducts[2].reviewCount}
            badge={beverageProducts[2].badge}
          />
          <ProductCard
            id={beverageProducts[3].id}
            image={beverageProducts[3].image}
            title={beverageProducts[3].title}
            price={beverageProducts[3].price}
            salePrice={beverageProducts[3].salePrice}
            rating={beverageProducts[3].rating}
            reviewCount={beverageProducts[3].reviewCount}
            badge={beverageProducts[3].badge}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {beverageProducts.slice(4, 8).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

