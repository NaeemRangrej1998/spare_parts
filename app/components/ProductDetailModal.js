"use client";
import Image from "next/image";

export default function ProductDetailModal({ product, onClose }) {
   const discountPercent = 10;  // you can change anytime
  const originalPrice = product.price;
  const finalPrice = Math.floor(originalPrice - (originalPrice * discountPercent) / 100);
  const savings = originalPrice - finalPrice;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white text-black mx-2 p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10 sm:w-2/3 lg:w-2/4 border border-red-600/50">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          quality={75}
          className="md:w-52 md:h-64 w-full h-52 md:object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold mb-4 text-black tracking-tight">
            {product.title}
          </h2>

          <p className="text-sm leading-6 mb-4 text-muted line-clamp-6">
            {product.description}
          </p>
          <p className="text-3xl font-bold mb-4 text-black">
            {/* <span className="relative -top-2 font-medium text-lg">₹</span>
            {product.price} */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  {/* Final Price */}
                  <span className="text-lg sm:text-xl font-bold text-red-600">
                    ₹{finalPrice}
                  </span>

                  {/* Original Price */}
                  <span className="text-sm text-gray-500 line-through">
                    ₹{originalPrice}
                  </span>

                  {/* Discount Tag */}
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                    {discountPercent}% OFF
                  </span>
                </div>

                {/* Savings */}
                <span className="text-xs text-gray-400 mt-1">
                  You save ₹{savings}!
                </span>
              </div>
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
