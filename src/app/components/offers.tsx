"use client"

import React from 'react'


type Offer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "BOGO Deal",
      description: "Buy One Get One Free"

    },

    {
      title: "Save 20%",
      description: "Using Code 'FLORET20"

    },

    {
      title: "Free Shipping",
      description: " On Orders Over $50"

    },
  ];

  const handleOfferClick = (description:string) => {
    alert(description);
  }
  return(
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-red-600 '>Special Offers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {offers.map  ((offer, index) => (
            <button key={index}
            onClick={() => handleOfferClick(offer.description)}
            className='bg-white shadow-lg rounded-lg text-center hover:bg-[#ddb98a] transition duration-300 transform hover:scale-105'>
              <h3 className='text-2xl font-semibold text-slate-700 '>{offer.title}</h3>
              <p className='text-red-700 mt-3 '>{offer.description}</p>
            </button>
          ))}
        </div>

      </div>
    </section>

  )
}

export default SpecialOffers