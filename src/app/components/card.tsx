import React from "react";

const FloatImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold md:text-4xl mb-4 text-red-950">{"𝑬𝒍𝒆𝒈𝒂𝒏𝒄𝒆 𝑭𝒍𝒐𝒘𝒆𝒓𝒔"}</h2>
        <p className="text-black mb-4 text-xl">
          Elevate any occasion with our fresh, handpicked blooms—arranged to
          bring elegance and joy.
        </p>
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-transform duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-black text-center">
         {"𝑪𝒐𝒎𝒊𝒏𝒈 𝑺𝒐𝒐𝒏: 𝑵𝒆𝒘 𝑺𝒆𝒂𝒔𝒐𝒏𝒂𝒍 𝑪𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏"}
        </h3>
        <ul className="text-black mt-4">
          <li className="mb-2">
            <strong>{"𝑭𝒓𝒆𝒔𝒉 & 𝑽𝒊𝒃𝒓𝒂𝒏𝒕:"}</strong> {" 𝑫𝒆𝒍𝒊𝒗𝒆𝒓𝒆𝒅 𝒘𝒊𝒕𝒉 𝒑𝒆𝒂𝒌 𝒇𝒓𝒆𝒔𝒉𝒏𝒆𝒔𝒔."}
          </li>
          <br />
          <li className="mb-2">
            <strong>{"𝑪𝒖𝒔𝒕𝒐𝒎 𝑫𝒆𝒔𝒊𝒈𝒏𝒔:"}</strong>{" 𝑷𝒆𝒓𝒇𝒆𝒄𝒕 𝒇𝒐𝒓 𝒂𝒏𝒚 𝒐𝒄𝒄𝒂𝒔𝒊𝒐𝒏."}
          </li>
          <br />
          <li className="mb-2">
            <strong>{"𝑬𝒄𝒐-𝑭𝒓𝒊𝒆𝒏𝒅𝒍𝒚:"}</strong>{"𝑺𝒖𝒔𝒕𝒂𝒊𝒏𝒂𝒃𝒍𝒆 𝒑𝒂𝒄𝒌𝒂𝒈𝒊𝒏𝒈."} </li>
          <br />
          <li className="mb-2">
            <strong>{"𝑯𝒂𝒏𝒅𝒄𝒓𝒂𝒇𝒕𝒆𝒅"}:</strong> 
            {" 𝑼𝒏𝒊𝒒𝒖𝒆 𝒇𝒍𝒐𝒓𝒂𝒍 𝒂𝒓𝒕𝒊𝒔𝒕𝒓𝒚 𝒊𝒏 𝒆𝒂𝒄𝒉 𝒑𝒊𝒆𝒄𝒆."}
          </li>
        </ul>
        <button  className="bg-[#f7ab6e] text-white px-4 py-2 rounded hover:bg-[#f59e56] transition-transform duration-200"
        >View Packages</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="https://i.pinimg.com/736x/72/5f/1c/725f1cff2d6454c1accb2f34e1699fe9.jpg"
          alt="Elegance Flowers"
          className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatImageContentBlock;
