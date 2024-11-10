import React from "react";

const products = [
  {
    id: 1,
    tittle: "Crystals Flower",
    category: "fixing",
    price: "200.00",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20230321/original/pngtree-red-roses-with-swirls-lovely-flowers-png-image_8998751.png",
    bgColor: "bg-teal-500",
  },
  {
    id: 2,
    tittle: "Crystals Flower",
    category: "florance",
    price: "300.00",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20230321/original/pngtree-set-of-pink-roses-png-image_8998742.png",
    bgColor: "bg-orange-400",
  },
  {
    id: 3,
    tittle: "Crystals Flower",
    category: "fixing",
    price: "400.00",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-beautiful-natural-red-rose-flowers-bouquet-png-image_6603921.png",
    bgColor: "bg-purple-400",
  },
];

export default function Product() {
  return (
    <div className=" bg-white p-4 flex flex-wrap items-center justify-center mb-4">
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
