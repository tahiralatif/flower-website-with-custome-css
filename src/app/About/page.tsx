import React from 'react';
import Image from 'next/image';
import Img from '../../../public/assests/imag.jpg.png';
import image2 from "../../../public/assests/mission.jpg.png"

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto h-full w-full bg-zinc-100">

<div className="bg-white py-14 text-center px-6">
        <h1 className="text-4xl font-bold text-red-950">Our Story</h1>


        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          At Crystal Flower, we believe in the power of flowers to transform any space, elevate moments, and bring joy. Our journey started with a passion for flowers and a desire to share this beauty with the world. Every bouquet tells a story, filled with the vibrant colors of nature and the warmth of a personal touch.
        </p>
      </div>


      {/* About Us Section */}
      <section className=" py-10 px-6">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          

        <div className="md:w-1/2">
            <Image 
              src={Img} 
              alt="team-img"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-red-950 mb-4">Meet Our Team</h2>
            <p className="text-black text-lg mb-6">
              At Crystal Flower, we believe in the power of flowers to transform any space, elevate moments, and bring joy. Our journey started with a love for flowers and a desire to share this beauty with others.
            </p>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg mb-6 hover:bg-teal-600 transition-transform duration-200">
              Order Now
            </button>
            <h3 className="text-2xl font-semibold text-black mt-10 text-center md:text-left">
              {"𝑪𝒐𝒎𝒊𝒏𝒈 𝑺𝒐𝒐𝒏: 𝑵𝒆𝒘 𝑺𝒆𝒂𝒔𝒐𝒏𝒂𝒍 𝑪𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏"}
            </h3>
            <ul className="text-black mt-6 space-y-3">
              <li><strong>Passionate Experts:</strong> Skilled florists crafting stunning arrangements.</li>
              <li><strong>Attention to Detail:</strong> Every bouquet is created with perfection in mind.</li>
              <li><strong>Customer-Centered:</strong> We prioritize your experience and satisfaction.</li>
              <li><strong>Innovative Designs:</strong> Fresh, creative floral arrangements tailored for you.</li>
            </ul>
            <button className="bg-[#f7ab6e] text-white px-6 py-2 rounded-lg mt-6 hover:bg-[#f59e56] transition-transform duration-200">
              Contact Our Team
            </button>
          </div>
          
        </div>
      </section>

      
      

    
      <section className="container mx-auto px-6 py-10 text-gray-800">




      <div className="flex flex-col md:flex-row  items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          

      <div className="md:w-1/2">
            <Image 
              src={image2} 
              alt="team-img"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          
          
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-red-950 mb-4 px-10">{"𝑺𝒑𝒓𝒆𝒂𝒅𝒊𝒏𝒈 𝑱𝒐𝒚, 𝑶𝒏𝒆 𝑩𝒍𝒐𝒐𝒎 𝒂𝒕 𝒂 𝑻𝒊𝒎𝒆"}</h2>
            <p className="text-black text-lg mb-6 px-12">
              {"𝙊𝙪𝙧 𝙢𝙞𝙨𝙨𝙞𝙤𝙣 𝙞𝙨 𝙩𝙤 𝙗𝙧𝙞𝙣𝙜 𝙩𝙝𝙚 𝙗𝙚𝙖𝙪𝙩𝙮 𝙖𝙣𝙙 𝙨𝙚𝙧𝙚𝙣𝙞𝙩𝙮 𝙤𝙛 𝙛𝙡𝙤𝙬𝙚𝙧𝙨 𝙞𝙣𝙩𝙤 𝙚𝙫𝙚𝙧𝙮 𝙘𝙤𝙧𝙣𝙚𝙧 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙡𝙞𝙛𝙚. 𝘼𝙩 𝘾𝙧𝙮𝙨𝙩𝙖𝙡 𝙁𝙡𝙤𝙬𝙚𝙧, 𝙬𝙚 𝙖𝙧𝙚 𝙘𝙤𝙢𝙢𝙞𝙩𝙩𝙚𝙙 𝙩𝙤 𝙨𝙤𝙪𝙧𝙘𝙞𝙣𝙜 𝙤𝙣𝙡𝙮 𝙩𝙝𝙚 𝙛𝙧𝙚𝙨𝙝𝙚𝙨𝙩 𝙖𝙣𝙙 𝙢𝙤𝙨𝙩 𝙚𝙭𝙦𝙪𝙞𝙨𝙞𝙩𝙚 𝙗𝙡𝙤𝙤𝙢𝙨, 𝙝𝙖𝙣𝙙𝙥𝙞𝙘𝙠𝙚𝙙 𝙩𝙤 𝙘𝙧𝙚𝙖𝙩𝙚 𝙢𝙚𝙢𝙤𝙧𝙖𝙗𝙡𝙚 𝙢𝙤𝙢𝙚𝙣𝙩𝙨. 𝙀𝙖𝙘𝙝 𝙗𝙤𝙪𝙦𝙪𝙚𝙩 𝙞𝙨 𝙘𝙧𝙖𝙛𝙩𝙚𝙙 𝙬𝙞𝙩𝙝 𝙘𝙖𝙧𝙚, 𝙧𝙚𝙛𝙡𝙚𝙘𝙩𝙞𝙣𝙜 𝙤𝙪𝙧 𝙙𝙚𝙙𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙩𝙤 𝙦𝙪𝙖𝙡𝙞𝙩𝙮, 𝙨𝙪𝙨𝙩𝙖𝙞𝙣𝙖𝙗𝙞𝙡𝙞𝙩𝙮, 𝙖𝙣𝙙 𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙞𝙯𝙚𝙙 𝙩𝙤𝙪𝙘𝙝 𝙩𝙝𝙖𝙩 𝙢𝙖𝙠𝙚𝙨 𝙚𝙫𝙚𝙧𝙮 𝙖𝙧𝙧𝙖𝙣𝙜𝙚𝙢𝙚𝙣𝙩 𝙪𝙣𝙞𝙦𝙪𝙚𝙡𝙮 𝙮𝙤𝙪𝙧𝙨. 𝙅𝙤𝙞𝙣 𝙪𝙨 𝙞𝙣 𝙘𝙚𝙡𝙚𝙗𝙧𝙖𝙩𝙞𝙣𝙜 𝙩𝙝𝙚 𝙖𝙧𝙩 𝙤𝙛 𝙛𝙡𝙤𝙬𝙚𝙧𝙨 𝙖𝙣𝙙 𝙩𝙝𝙚 𝙟𝙤𝙮 𝙩𝙝𝙚𝙮 𝙗𝙧𝙞𝙣𝙜!"}
            </p>
            
          </div>
          
        </div>
         
        


        <h2 className="text-4xl font-bold mt-12 text-red-900 text-center">
  Why Choose Us?
</h2>
<div className="max-w-2xl mx-auto mt-8 px-6 py-4 bg-[#fef8fc] rounded-lg shadow-md">
  <ul className="space-y-6 text-gray-700 text-lg">
    <li className="flex items-start space-x-4">
      <span className="text-teal-500 text-2xl font-bold">🌸</span>
      <div>
        <strong className="text-red-900">Fresh & Handpicked:</strong>
        <p>Only the freshest blooms, carefully selected for quality and vibrancy.</p>
      </div>
    </li>
    <li className="flex items-start space-x-4">
      <span className="text-teal-500 text-2xl font-bold">🎨</span>
      <div>
        <strong className="text-red-900">Custom Bouquets:</strong>
        <p>Each arrangement is designed uniquely, perfect for every special moment.</p>
      </div>
    </li>
    <li className="flex items-start space-x-4">
      <span className="text-teal-500 text-2xl font-bold">🌍</span>
      <div>
        <strong className="text-red-900">Eco-Friendly Practices:</strong>
        <p>We are committed to sustainability, using eco-friendly materials.</p>
      </div>
    </li>
    <li className="flex items-start space-x-4">
      <span className="text-teal-500 text-2xl font-bold">🚚</span>
      <div>
        <strong className="text-red-900">Fast & Reliable Delivery:</strong>
        <p>Count on us to bring vibrant blooms to your door with dependable delivery.</p>
      </div>
    </li>
  </ul>
</div>

      </section>
    </div>
  );
}
