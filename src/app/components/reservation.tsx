import React from 'react';

const Reservation = () => {
  return (
    <section className=' py-10 max-w-screen-xl mx-auto'>
      <div className='container mx-auto text-center px-4'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>𝑴𝒂𝒌𝒆 𝒂 𝑹𝒆𝒔𝒆𝒓𝒗𝒂𝒕𝒊𝒐𝒏</h2>
        <form className='max-w-md w-full mx-auto'>

          {/* Name */}
          <div className='mb-4 text-black'>
            <input
              type="text"
              placeholder='Your Name'
              className='w-full p-3 border border-gray-500 rounded-md'
              required
            />
          </div>

          {/* Email */}
          <div className='mb-4'>
            <input
              type="email"
              placeholder='Your Email'
              className='w-full p-3 border border-gray-500 rounded-md'
            />
          </div>

          {/* Date */}
          <div className='mb-4'>
            <input
              type="date"
              className='w-full p-3 border border-gray-500 rounded-md'
            />
          </div>

          {/* Time */}
          <div className='mb-4'>
            <input
              type="time"
              className='w-full p-3 border border-gray-500 rounded-md'
            />
          </div>

          <div>
            <button className='bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900'>
              Reserve
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Reservation;
