import React from "react";

export default function Progressor() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 bg-orange-400 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="flex-grow h-1 mx-4 rounded-lg bg-teal-800"></div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <h6 className="text-base font-bold text-gray-700">
              Step 1: <span className="text-orange-700">Explore Our Collection</span>
            </h6>
            <p className="text-sm text-black">
              Browse our beautiful flowers and pick your favorites.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 bg-orange-400 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="flex-grow h-1 mx-4 rounded-lg bg-teal-800"></div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <h6 className="text-base font-bold text-gray-800">
              Step 2: <span className="text-orange-700">Design Your Bouquet</span>
            </h6>
            <p className="text-sm text-black">
              Create your perfect bouquet with our customization options.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 bg-orange-400 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="flex-grow h-1 mx-4 rounded-lg bg-teal-800"></div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <h6 className="text-base font-bold text-gray-800">
              Step 3: <span className="text-orange-700">Enjoy the Discount</span>
            </h6>
            <p className="text-sm text-black">
             {" Use 'FLORET20' at checkout to get 20% off your order."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
