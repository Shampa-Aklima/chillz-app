import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProductCard } from "../shared/product-card"
import { SectionHeader } from "../shared/section-header"
import { meatProducts } from "./data"

export function MeatSection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Meat & Seafood"
          categories={["All", "Beef", "Chicken", "Fish", "Pork"]}
          activeCategory="All"
          onCategoryChange={(category) => console.log(category)}
        />

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-md border p-4">
            <h3 className="font-medium mb-2">Beef</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Breakfast Sausage</li>
              <li>Chicken</li>
              <li>Halal</li>
              <li>Kosher Sausage</li>
            </ul>
            <Link href="/view-all-meat" className="text-xs text-[#004745] flex items-center mt-4">
              View All Meat & Seafood <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </div>

          <div className="bg-[#f3f3f3] rounded-md border p-4">
            <h3 className="font-bold mb-2">Big Discount</h3>
            <p className="text-sm text-gray-600 mb-2">Only this week. Dont miss!</p>
            <div className="flex items-center mb-4">
              <span className="text-sm line-through text-gray-500">$ 129.99</span>
              <span className="text-xl font-bold ml-2">$ 109.99</span>
            </div>
            <button className="bg-[#004745] text-white px-4 py-2 rounded-md text-sm w-full">Shop Now</button>
          </div>

          {meatProducts.map((product) => (
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

