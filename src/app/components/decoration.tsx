import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Decoration = () => {
  const products = [
    {
      name: "Crystal Rose Bouquet",
      image:
        "https://the21suns.com/cdn/shop/files/5E42BA55-3B57-49DD-8825-08C986096E8D.jpg?v=1721860581&width=1946",
      price: "$149",
      originalPrice: "$199",
    },
    {
      name: "Golden Bloom Arrangement",
      image: "https://www.fnp.ae/images/pr/m/v20240910153622/bowl-of-happy-flowers.jpg",
      price: "$149",
      originalPrice: "$199",
    },
    {
      name: "Enchanted Lilies",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiQHe8ljzg7jicLyQNl5sosdc5ESi_C7ZzQeVru4GdO5H82vONmHC8KJhja6zBi4knQA&usqp=CAU",
      price: "$149",
      originalPrice: "$199",
    },
    {
      name: "Blossoms Bliss",
      image:
        "https://freshflowersbyanna.com/wp-content/uploads/2024/01/Blushing-Blossom-Bliss-Large.jpeg",
      price: "$149",
      originalPrice: "$199",
    },
    {
      name: "Radiant Petals Vase",
      image:
        "https://res.cloudinary.com/dizexseir/image/upload/v1711717164/ProImages/gxnyvflhqkpjayqduvzi.jpg",
      price: "$149",
      originalPrice: "$199",
    },
    {
      name: "Sunkissed Splendor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYF1bPEAqWwRMPIqEJq-6Z6XWO_2RSLSk3AjrpUGHyieR_WZCI5ClO0vbXrfAV-W4hD0&usqp=CAU",
      price: "$149",
      originalPrice: "$199",
    },

  ];
  

  return (
    <div className="relative text-center md:py-0 p-10 mx-auto max-w-screen-xl sm:py-4 md:px-6">
      <section
        id="Projects"
        className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-8 gap-x-4 mt-10 mb-5"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-full bg-white bg-opacity-80 rounded-b-xl">
                <p className="text-lg font-bold text-pink-700 truncate">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3">
                    {product.price}
                  </p>
                  <del>
                    <p className="text-sm text-teal-950 ml-2">
                      {product.originalPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Decoration;
