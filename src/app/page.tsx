import HeroSlider from "@/components/HeroSlider";
import FeatureCard from "@/components/FeatureCard";
import DiscountBanner from "@/components/DiscountBanner";

import ProductGrid from "@/components/ProductGrid";
import BannerCardSection from "@/components/BannerCardSection";
const products = [
  {
    id: "1",
    title: "Great Value Peanut Dark Chocolate Protein",
    price: "$4.00",
    discount: "$2.75",
    weight:"1kg",
    image: "/promo1.png",
    available: "44",
    sold: "12",
    
  },
  {
    id: "2",
    title: "Fresh Green Giant Veggie Spirals Zucchini",
    price: "$5.30",
    discount: "$4.25",
    weight:"1kg",
    image: "/promo2.png",
    available: "44",
    sold: "12",
  },

];
const page = () => {
  return (
    <div className="container mx-auto max-w-[1200px] h-screen">
      <HeroSlider/>
      <FeatureCard title="Featured Products"/>
      <DiscountBanner/>
      <ProductGrid products={products}/>
      <BannerCardSection/>
    </div>
  );
};

export default page;