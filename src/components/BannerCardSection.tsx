import React from "react";
import BannerCards from "./BannerCards"; 

const banners = [
  {
    id: 1,
    title: "Breads & Bakery",
    subTitle: "Weekend Discount",
    description: "Breakfast made better...",
    price: 119.99,
    discount: 139.99, // 
    bgImg: "/banner1.png",
  },
  {
    id: 2,
    title: "Organic Beverages",
    subTitle: "Weekend Discount",
    description: "Shine the morning...",
    price: 177.99,
    discount: 200.00,
    bgImg: "/banner2.png",
  },
  {
    id: 3,
    title: "Frozen Foods",
    subTitle: "Weekend Discount",
    description: "Eat one every day...",
    price: 159.99,
    discount: 180.00,
    bgImg: "/banner3.jpeg",
  },
];

const BannerCardSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((banner) => (
          <BannerCards key={banner.id} banners={[banner]} />
        ))}
      </div>
    </div>
  );
};

export default BannerCardSection;
