import React from "react";

export default function Carousel() {
  return (
    <section className="bg-white py-4 px-2 mx-auto max-w-screen-xl sm:py-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 h-full">

        {/* First Image */}
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-br from-yellow-200 to-pink-300 h-auto md:h-full flex flex-col">
          <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 shadow-lg pb-4 pt-40 flex-grow">
            <img
              src="https://img.freepik.com/premium-photo/close-up-flower-black-background-generative-ai_902639-2253.jpg"
              alt="Crystal Charm"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400/25 to-cyan-300/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-4 left-4">
              Crystal Charm
            </h3>
          </a>
        </div>

        {/* Second Image with Small Grid for Additional Images */}
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-br from-yellow-200 to-pink-300">
          <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 shadow-lg pt-40 flex-grow">
            <img
              src="https://img.freepik.com/premium-photo/3d-pink-flower-clipart-3d-pink-flower-sublimation-clipart-pink-flowers-generated-by-ai_672969-603.jpg"
              alt="Crystal Charm"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400/25 to-cyan-300/5"></div>
            <h3 className="z-10 text-xl font-medium text-white absolute bottom-4 left-4">
              Crystal Charm
            </h3>
          </a>

          {/* Small Grid for Additional Images */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mt-2">
            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Su2Arsl9wuZTCaHQoDFlklc-8FzjCdJ7Eg&s"
                alt="Flower 3"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pink-400/25 to-cyan-300/5"></div>
              <h3 className="z-10 text-center px-6 text-xl font-medium text-white absolute bottom-4 left-0 right-0">
                Flower 3
              </h3>
            </a>

            <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <img
                src="https://cdn11.bigcommerce.com/s-0d1a4/images/stencil/500x659/products/293/5989/PeachBB-16__79153.1625933043.jpg?c=2"
                alt="Flower 4"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pink-400/25 to-cyan-300/5"></div>
              <h3 className="z-10 text-center px-6 text-xl font-medium text-white absolute bottom-4 left-0 right-0">
                Flower 4
              </h3>
            </a>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-pink-300 to-red-300 h-auto flex flex-col">
          <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
            <img
              src="https://img.freepik.com/premium-photo/colorful-flower-crystal-clear-sparkling-petals-crystal-hd-wallpaper-background-illustration_912113-383492.jpg"
              alt="Flower 5"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400/25 to-cyan-300/5"></div>
            <h3 className="z-10 text-center px-6 text-2xl font-medium text-white absolute bottom-4 left-0 right-0">
              Flower 5
            </h3>
          </a>
        </div>

      </div>
    </section>
  );
}
