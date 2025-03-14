import React from 'react';

// Product interface
interface Product {
  image: string;
  brand: string;
  name: string;
  regularPrice: number;
  salePrice: number;
  stock: number;
  soldCount: number;
}

const ProductCard = ({ product }: { product: Product }) => {
    const {
      image,
      brand,
      name,
      salePrice,
      stock,
      soldCount
    } = product;
  
    return (
      <div className="w-72 border border-gray-300 rounded-md bg-white overflow-hidden">
        {/* Header banner */}
        <div className="text-xs text-center py-1 border-b border-gray-300">
          Time is running out, don't miss the opportunity.
        </div>
        {/* Rating stars (simplified) */}
        <div className="flex items-center mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(68)</span>
              </div>
         <div className="text-xs font-medium mb-1 leading-tight">
        {/* Product content */}
        <div className="p-2">
          <div className="flex gap-3">
            {/* Product image */}
            <div className="w-16 h-16">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            
            {/* Product details */}
            <div className="flex-1">
              {/* Brand badge */}
              <div className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded-sm mb-1">
                {brand}
              </div>
              
              {/* Product name */}
              <div className="text-xs font-medium mb-1 leading-tight">
                {name}
              </div>
              
              {/* Rating stars (simplified) */}
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(68)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center">
                <span className="text-xs text-gray-500">From</span>
                <span className="text-sm font-bold ml-1">${salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Stock indicator */}
          <div className="mt-2 mb-3">
            <div className="h-1 w-full bg-gray-200">
              <div className="h-full bg-gray-800" style={{ width: `${(soldCount / (stock + soldCount)) * 100}%` }}></div>
            </div>
            <div className="flex justify-between mt-0.5">
              <span className="text-xs text-gray-500">{stock} left</span>
              <span className="text-xs text-gray-500">Sold: {soldCount}</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex border-t border-gray-300">
          <button className="flex-1 bg-black text-white py-1 text-center text-sm">Add</button>
          <button className="w-10 border-l border-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="w-10 border-l border-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="w-10 border-l border-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
