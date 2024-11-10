import React from "react";

export default function Banner() {
  return (

    



    <div className="container">
      {/* Banner Image */}
      <img
        src="https://media.istockphoto.com/id/174655938/photo/rose-background.jpg?s=612x612&w=0&k=20&c=nWPBU5SpfPYmRDtlTlVNzRB-SFRnFAHeeWh08b-YY14="
        alt="banerimg"
        className=" banner-image"
      />

      {/* Overlay Text */}
      <div className="main-box">
        <h1 className="text-offWhite text-3xl text-center mx-[8px] text-[25px] lg:text-5xl font-medium lg:font-bold">
        {"𝑬𝒙𝒑𝒓𝒆𝒔𝒔 𝑳𝒐𝒗𝒆 𝒘𝒊𝒕𝒉 𝑩𝒍𝒐𝒐𝒎𝒔"}
        </h1>
        <p className="mx-[8px] text-[18px] text-center pt-4 font-semibold  lg:text-lg  mb-6 max-w-xl  font-sans text-white lg:text-[20px] flex justify-center items-center">
          {"𝑺𝒉𝒐𝒘 𝒚𝒐𝒖𝒓 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒐𝒏 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒐𝒖𝒓 𝒗𝒊𝒃𝒓𝒂𝒏𝒕 𝒇𝒍𝒐𝒘𝒆𝒓𝒔, 𝒕𝒂𝒊𝒍𝒐𝒓𝒆𝒅 𝒇𝒐𝒓 𝒚𝒐𝒖"}
        </p>
        <button
          type="button"
          className="bg-gradient-to-tr from-white via-red-800 to-white hover:bg-gradient-to-tl shadow-lg hover:text-[20px] lg:font-semibold lg:py-3 lg:px-6
         lg:text-lg font-semibold py-2 px-2 text-center max-w-xl rounded-full transition duration-300 text-white"
        >
          <p>{"𝑺𝒆𝒆 𝑩𝒐𝒖𝒒𝒖𝒆𝒕𝒔"}</p>
        </button>
      </div>
    </div>
  );
}
