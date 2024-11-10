import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const ProductImages = [
    "https://heartthorn.ca/cdn/shop/files/Valentine_sDaySeasonalBouquet_800x.jpg?v=1684400871",
    "https://m.media-amazon.com/images/I/61mMytOBsJL._AC_SL1024_.jpg",
    "https://www.maywishes.com.my/image/janefloristshop/image/cache/data/all_product_images/product-552/d7XHy7LW1655187220-800x800.jpeg",
    "https://assets.arabianflora.com/uploads/product-pics/1650610348_16136370171600777242_large_1790.jpg",
    "https://c8.alamy.com/comp/J3K139/rose-flowers-in-vase-beautiful-romantic-bouquet-copy-space-top-view-J3K139.jpg",
    "https://bloomthis.co/cdn/shop/files/bloomthis-bouquet-ashley-red-rose-bouquet-1080x1080-01-creative.jpg?v=1715843785&width=1080",

  ];

  const FlowerNames = [
    "Valentine's Day Bouquet",
    "Elegant Rose Arrangement",
    "Flower Hand",
    "Luxury Orchid Bouquet",
    "Romantic Rose Vase",
    "Ashley Red Rose Bouquet",
    
  ];

  return (
    <div className="relative text-center md:py-0 p-10 mx-auto max-w-screen-xl sm:py-4 md:px-6">
      <div className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />

      <h1 className="font-semibold text-4xl mb-4 text-amber-800 z-10 relative">
        {"𝑺𝒕𝒖𝒏𝒏𝒊𝒏𝒈 𝑩𝒐𝒖𝒒𝒖𝒆𝒕 𝑫𝒆𝒔𝒊𝒈𝒏𝒔"}
      </h1>
      <h1 className="text-3xl text-[#751c1c] z-10 relative">
        {"𝑶𝒓𝒅𝒆𝒓 𝑵𝒐𝒘..!"}
      </h1>

      <section
        id="Projects"
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-8 gap-x-0 mt-10 mb-5"
      >
        {Array.from({ length: ProductImages.length }).map((__, index) => (
          <div
            key={index}
            className="w-full sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={ProductImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-full object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-full bg-white bg-opacity-80 rounded-b-xl">
                <span className="text-slate-600 mr-3 uppercase text-xs">
                  span
                </span>
                <p className="text-lg font-bold text-pink-700 truncate block capitalize">
                  {FlowerNames[index]} {/* Use the flower name here */}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $149
                  </p>

                  <del>
                    <br />
                    <p className="text-sm text-teal-950 cursor-auto ml-2">
                      {""} $199
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

export default ProductCardGrid;
