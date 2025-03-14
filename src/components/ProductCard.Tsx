"use client"
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: string;
  discount?: string;
  image: string;
  weight?: string;
  available: string;
  sold: string;
};

export function ProductCard({
  title,
  price,
  image,
  discount,
  weight,
  available,
  sold
}: ProductCardProps) {
  return (
    <div className="w-full max-w-md border-2 border-[#1B1F22] rounded-lg overflow-hidden shadow-sm mt-3">
      {/* Black Header */}
      <div className="bg-black text-white py-3 px-3 text-sm">
        Time is running out, don't miss the opportunity.
      </div>

      {/* Main Content */}
      <div className="flex p-3 gap-3 w-full">
        {/* Left - Product Image */}
        <div className="w-1/3">
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="w-2/3 flex flex-col gap-1">
          {/* Star Rating */}
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                fill={i < 4 ? "yellow" : "none"}
              />
            ))}
            <span className="text-xs ml-1">4</span>
          </div>

          {/* Product Title & Price Section */}
          <h3 className="text-3xl font-bold leading-tight mt-1 underline">
            {title}
          </h3>
          {weight && <p className="text-gray-500 text-xs">{weight}</p>}

          <div className="flex items-baseline mt-1">
            {discount ? (
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 line-through">
                  {discount}
                </span>
                <span className="text-lg font-bold text-red-500">{price}</span>
              </div>
            ) : (
              <span className="text-lg font-bold">{price}</span>
            )}
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">Available: {available}</span>
            <span className="text-xs text-gray-500">Sold: {sold}</span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
