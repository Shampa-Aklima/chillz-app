
import React from "react";


interface Banner {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  price: number;
  discount?: number;
  bgImg: string;
}


interface BannerCardsProps {
  banners: Banner[];
}

const BannerCards = ({ banners }: BannerCardsProps) => {
  return (
    <div className="w-full flex flex-wrap gap-4">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="w-80 h-60 bg-cover bg-center rounded-lg shadow-lg text-white flex items-end p-4"
          style={{ backgroundImage: `url(${banner.bgImg})` }}
        >
          <div className=" bg-opacity-50 p-4 rounded w-full">
            <h2 className="text-2xl font-bold text-[#1B1F22]">{banner.title}</h2>
            <h3 className="text-lg text-[#004745]">{banner.subTitle}</h3>
            <p className="text-sm mt-2 text-[#1B1F22]" >{banner.description}</p>
            <div className="mt-2">
              <span className="text-lg text-[#1B1F22] font-bold">from ${banner.price}</span>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCards;
