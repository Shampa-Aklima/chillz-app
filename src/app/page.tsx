import Navbar from "@/components/Navbar"

import { FeaturedProducts } from "@/components/FeaturedProducts"
import { DiscountBanner } from "@/components/DiscountBanner"
import { Recipes } from "@/components/recipes"
import { Categories } from "@/components/categories"
import { Beverages } from "@/components/beverages"
import { PromoBanners } from "@/components/PromoBanners"
import { MeatSection } from "@/components/meatSection"
import { CocaColaBanner } from "@/components/CocaColaBanner"
import { BlogSection } from "@/components/BlogSection"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/Footer"
import HeroSlider from "@/components/HeroSlider"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <HeroSlider/>
      <FeaturedProducts />
      <DiscountBanner />
      <Recipes />
      <Categories />
      <Beverages />
      <PromoBanners />
      <MeatSection />
      <CocaColaBanner />
      <BlogSection blogs={[
        {
          id: "1",
          title: "Healthy Eating Tips",
          excerpt: "Discover the best practices for healthy eating...",
          image: "/blog1.jpg",
          category: "Tips",
          date: "2024-03-20"
        },
        {
          id: "2",
          title: "Spring Recipes",
          excerpt: "Fresh and delicious spring recipes...",
          image: "/blog2.jpg",
          category: "Recipes",
          date: "2024-03-19"
        }
      ]} />
      <Newsletter />
      <Footer />
    </main>
  )
}





