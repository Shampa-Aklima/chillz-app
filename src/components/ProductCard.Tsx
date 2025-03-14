import React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
    showActionButton?: boolean;
};

export function ProductCard({ title, price, image, showActionButton = false }: ProductCardProps) {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Black Header */}
      <div className="bg-black text-white py-1 px-3 text-sm">
        Time is running out, don't miss the opportunity.
      </div>
      
      {/* Main Content */}
      <div className="flex p-3 gap-3">
        {/* Left - Product Image */}
        <div className="w-1/3">
          <div className="relative aspect-square">
            <Image 
              src={image} 
              alt={title} 
              layout="fill"
              objectFit="contain"
              className="rounded"
            />
          </div>
        </div>
        
        {/* Right - Product Details */}
        <div className="w-2/3 flex flex-col gap-1">
          {/* Logo and Rating Row */}
          <div className="flex justify-between items-center">
            {/* Logo Circle */}
            
            
            {/* Favorite Icon (empty) */}
            <div className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center mt-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <svg 
                key={i} 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill={i < 4 ? "gold" : "none"} 
                stroke="gold" 
                strokeWidth="1.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
            <span className="text-xs ml-1">4</span>
          </div>
          
          {/* Product Title */}
          <h3 className="font-medium text-sm leading-tight mt-1">{title}</h3>
          
          {/* Weight */}
          <p className="text-gray-500 text-xs">1.76 oz</p>
          
          {/* Price Row */}
          <div className="flex items-baseline mt-1">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Price</span>
              <span className="text-lg font-bold">{price}</span>
            </div>
            
            <div className="flex flex-col ml-4">
              <span className="text-xs text-gray-500">ea</span>
              <div className="flex items-center">
                <span className="text-sm font-medium">10</span>
              </div>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          {showActionButton && (
            <div className="mt-1">
              <div className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded flex items-center justify-between">
                <span>343.36</span>
                <div className="flex items-center">
                  <Plus size={14} />
                  <span className="ml-1">8</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-1 py-1">
        <button className="p-1 rounded-full bg-gray-300 hover:bg-gray-400">
          <ChevronLeft size={12} className="text-black" />
        </button>
        
        {[1, 2, 3, 4].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
        
        <button className="p-1 rounded-full bg-gray-300 hover:bg-gray-400">
          <ChevronRight size={12} className="text-black" />
        </button>
      </div>
      
      {/* Time Remaining Bar */}
      <div className="flex items-center justify-center gap-1 py-1 text-xs text-gray-500 border-t border-gray-200">
        <Clock size={12} />
        <span>Time remaining until the end of the offer</span>
      </div>
    </div>
  );
}

export default ProductCard;