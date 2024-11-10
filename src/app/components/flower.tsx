import React from "react";

const products = [
  {
    id: 1,
    tittle: "Red Rose Bouquet",
    category: "Romantic Roses",
    price: "200.00",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/041/493/783/small/ai-generated-red-rose-bouquet-on-transparent-background-png.png",
    bgColor: "bg-rose-700",
  },
  {
    id: 2,
    tittle: "White Rose Bouquet",
    category: "Elegant Florals",
    price: "300.00",
    imageUrl:
      "https://i.pinimg.com/originals/8a/04/47/8a0447fb02fd987950e2c13c130e596b.png",
    bgColor: "bg-slate-700",
  },
  {
    id: 3,
    tittle: "Red Roses and Buds",
    category: "Classic Romance",
    price: "400.00",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20230325/original/pngtree-beautiful-natural-red-rose-flowers-bouquet-png-image_9002652.png",
    bgColor: "bg-teal-700",
  },
];

export default function Product() {
  return (
    <div className="p-4 bg-white flex flex-wrap items-center justify-center mb-4 mx-auto max-w-screen-xl sm:py-4 md:px-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col w-full md:w-64 mx-3 mt-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group`}
        >
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img
              className="relative w-40 h-40 object-cover"
              src={product.imageUrl}
              alt={product.tittle}
            />
          </div>
          
          <div className="relative text-white px-6 py-4 mt-auto">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-lg">{product.tittle}</span>
              <span className="bg-white text-orange-500 text-sm font-bold rounded-xl px-3 py-1">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
