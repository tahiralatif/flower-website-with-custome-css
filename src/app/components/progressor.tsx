import React from "react";

export default function Progressor() {
  return (
    <div className="bg-white pt-10">
      <div className="bg-white flex flex-col md:flex-row items-start max-w-screen-lg w-full mx-auto">
        
        {/* Step 1 */}
        <div className="w-full mb-8 md:mb-0">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-teal-700 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-gradient-to-r from-red-700 via-teal-700 to-amber-700 hover:bg-gradient-to-l"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-gray-700">
              Step:1 <p className="text-orange-700">Choose your Flower</p>
            </h6>
            <p className="text-xs text-black">
              Select your favorite flowers and explore the available varieties
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full mb-8 md:mb-0">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-teal-700 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-gradient-to-r from-red-700 via-teal-700 to-amber-700 hover:bg-gradient-to-l"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-gray-800">
              Step:2 <p className="text-orange-700">Customize Your Bouquet</p>
            </h6>
            <p className="text-xs text-black">
              Personalize your flowers and design your unique bouquet.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-teal-700 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-gradient-to-r from-red-700 via-teal-700 to-amber-700 hover:bg-gradient-to-l"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-gray-800">
              Step:3 <p className="text-orange-700">Place Your Order</p>
            </h6>
            <p className="text-xs">
              Complete your order by filling in the delivery details and making the payment.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
