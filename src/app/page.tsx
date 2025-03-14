import HeroSlider from "@/components/HeroSlider";
import FeatureCard from "@/components/FeatureCard";
import DiscountBanner from "@/components/DiscountBanner";

import ProductGrid from "@/components/ProductGrid";
const products = [
  {
    id: "1",
    title: "Product 1",
    price: "100",
    image: "/promo1.png",
    
  },
  {
    id: "2",
    title: "Product 2",
    price: "100",
    image: "/promo2.png",
    
  }
];
const page = () => {
  return (
    <div className="container mx-auto max-w-[1200px] h-screen">
      <HeroSlider/>
      <FeatureCard title="Featured Products"/>
      <DiscountBanner/>
      <ProductGrid products={products}/>
    </div>
  );
};

export default page;