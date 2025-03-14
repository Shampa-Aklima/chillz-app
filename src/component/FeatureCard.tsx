import React from 'react';
import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  image: string;
  price?: string;
  originalPrice?: string;
  discountPrice?: string;
  category: string;
  saleTag?: string;
}


interface FeaturedProductsProps {
  title?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title = "Featured Products" }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Coca-Cola, 12oz (Per Case)",
      image: "/p1.png",
      originalPrice: "$22",
      discountPrice: "$19",
      category: "Hot Pick"
    },
    {
      id: 2,
      name: "Heineken, Cold Brew Lager, Dutch Brand Alcohol",
      image: "/p2.png",
      price: "$15",
      category: ""
    },
    {
      id: 3,
      name: "NITRO IPA Smooth Dry Hop Feed O'clock",
      image: "/p3.png",
      originalPrice: "$23",
      discountPrice: "$20",
      category: ""
    },
    {
      id: 4,
      name: "Elite Energy Drink, Total Fizz Boost (Set of 2)",
      image: "/p4.png",
      price: "$21",
      saleTag: "20%",
      category: ""
    },
    {
      id: 5,
      name: "Malt Dry Hop Alcohol Bavarian Stout",
      image: "/p5.png",
      price: "$18",
      category: ""
    },
  ];

  const categories: string[] = [
    "Featured Products",
    "Beverages",
    "Breads & Snacks",
    "Drinks & Juices"
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-8">
            <h2 className="text-2xl font-bold">{title}</h2>
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`text-sm font-medium ${index === 0 ? 'text-black' : 'text-gray-500'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>View All</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>

     
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg relative">
            {product.saleTag && (
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                {product.saleTag}
              </div>
            )}
            <div className="h-40 flex items-center justify-center mb-4">
              <div className="relative w-20 h-32">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium line-clamp-2 mb-2">{product.name}</h3>
              <div className="flex items-center">
                {product.discountPrice ? (
                  <>
                    <span className="text-sm font-bold">{product.discountPrice}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </>
                ) : (
                  <span className="text-sm font-bold">{product.price}</span>
                )}
              </div>
              {product.category === "Hot Pick" && (
                <div className="mt-1 text-xs text-red-500 font-medium">
                  {product.category}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;