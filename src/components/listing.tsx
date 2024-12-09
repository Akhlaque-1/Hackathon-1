import React from 'react'
const Listing = () => {
  return (
    <div className='mt-0 h-screen w-screen cursor-pointer'>
      {/* Title Section */}
      <div className='flex justify-center items-center font-extrabold mb-9'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl">NEW ARRIVALS</h1>
      </div>

      {/* Product Listing Section */}
      <div className='flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-10'>
        {/* Product 1 */}
        <div className='flex flex-col items-center'>
          <img src="Frame 32.png" alt="Product 1" className="w-full h-auto" />
          <img src="Frame 35.png" alt="Product 1" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>T-SHIRT WITH TAPE DETAILS</p>
          <span className='mt-2 text-lg font-semibold'>$120</span>
        </div>

        {/* Product 2 */}
        <div className='flex flex-col items-center'>
          <img src="Frame 33.png" alt="Product 2" className="w-full h-auto" />
          <img src="Frame 39.png" alt="Product 2" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>T-SHIRT WITH TAPE DETAILS</p>
          <span className='mt-2 text-lg font-semibold'>$120</span>
        </div>

        {/* Product 3 */}
        <div className='flex flex-col items-center'>
          <img src="Frame 34.png" alt="Product 3" className="w-full h-auto" />
          <img src="Frame 40.png" alt="Product 3" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>T-SHIRT WITH TAPE DETAILS</p>
          <span className='mt-2 text-lg font-semibold'>$120</span>
        </div>

        {/* Product 4 */}
        <div className='flex flex-col items-center'>
          <img src="Frame 38.png" alt="Product 4" className="w-full h-auto" />
          <img src="Frame 44.png" alt="Product 4" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>T-SHIRT WITH TAPE DETAILS</p>
          <span className='mt-2 text-lg font-semibold'>$120</span>
        </div>
      </div>

      {/* View All Button Section */}
      <div className='flex justify-center items-center gap-[12px] font-extrabold mt-8'>
        <button className='px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200'>
          View All
        </button>
      </div>
    </div>
  )
}

export default Listing







