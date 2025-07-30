"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ product, onSelect }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            onError={handleImageError}
          />
        ) : (
          <div className="flex items-center justify-center h-full p-3 sm:p-4">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 capitalize">{product.category}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-3 sm:p-4">
        <div className="space-y-2 sm:space-y-3">
          {/* Title */}
          <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
            {product.title}
          </h3>
          
          {/* Category */}
          <div className="flex items-center justify-between">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium capitalize">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-600">{product.rating.rate}</span>
            </div>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-base sm:text-lg font-bold text-gray-900">${product.price}</span>
              {product.price < 50 && (
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                  Great Deal
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">({product.rating.count} reviews)</span>
          </div>
        </div>
        
        {/* Action Button */}
        <button
          onClick={() => onSelect(product)}
          className="mt-3 sm:mt-4 w-full bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
