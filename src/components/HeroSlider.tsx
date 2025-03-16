"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      content: {
        tag: "EXCLUSIVE OFFER",
        title: "We're More Than A Store, We're A Food Festival.",
        description: "Take advantage of discounted prices and special deals...",
        buttonText: "SHOP NOW"
      },
      image: "/hero.jpeg" 
    },
   
    {
      content: {
        tag: "Exclusive Offer  ",
        title: "We’re More Than A Store, We’re A Food Festival.",
        description: "Take advantage of discounted prices and special deals...",
        buttonText: "SHOP NOW"
      },
      image: "/hero.jpeg" 
    },
    {
        content: {
        tag: "Exclusive Offer  ",
        title: "We’re More Than A Store, We’re A Food Festival.",
        description: "Take advantage of discounted prices and special deals...",
        buttonText: "SHOP NOW"
      },
      image: "/hero.jpeg" 
    },

    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-96 overflow-hidden bg-black rounded-lg">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-row h-full">
            <div className="flex-1 flex flex-col justify-center text-white p-8">
              <div className="bg-red-600 text-xs font-bold py-1 px-1 rounded-full mb-4">
                {slide.content.tag}
              </div>
              <h2 className="text-3xl font-bold mb-3">{slide.content.title}</h2>
              <p className="mb-6 text-gray-300">{slide.content.description}</p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full text-sm transition-colors w-24">
                {slide.content.buttonText}
              </button>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
              <Image 
                src={slide.image} 
                alt="Product image" 
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;