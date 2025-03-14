import HeroSlider from "@/component/HeroSlider";
import FeatureCard from "@/component/FeatureCard";
import DiscountBanner from "@/component/DiscountBanner";
import ProductCardGrid from "@/component/ProductCardGrid";
const page = () => {
  return (
    <div className="container mx-auto max-w-[1200px] h-screen">
      <HeroSlider/>
      <FeatureCard title="Featured Products"/>
      <DiscountBanner/>
      <ProductCardGrid/>
    </div>
  );
};

export default page;