import Image from 'next/image'
import React from 'react'
const Listing2 = () => {
  return (
    <div className='mt-12 h-auto w-full mb-10 cursor-pointer'>
      {/* Title Section */}
      <div className='flex justify-center items-center font-extrabold mb-9'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl'>Top Selling</h1>
      </div>

      {/* Product Listing Section */}
      <div className='flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-10'>
        {/* Product 1 */}
        <div className='flex flex-col items-center'>
          <Image width={200} height={200} src="/Frame 3.png" alt="Vertical Striped Shirt" className="w-full h-auto" />
          <Image width={200} height={200} src="/Frame 35 (1).png" alt="Vertical Striped Shirt" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>VERTICAL STRIPED SHIRT</p>
          <span className='mt-2 text-lg font-semibold'>$212</span>
        </div>

        {/* Product 2 */}
        <div className='flex flex-col items-center'>
          <Image width={200} height={200} src="/Frame 33 (1).png" alt="Courage Graphic T-Shirt" className="w-full h-auto" />
          <Image width={200} height={200} src="/Frame 39 (1).png" alt="Courage Graphic T-Shirt" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>COURAGE GRAPHIC T-SHIRT</p>
          <span className='mt-2 text-lg font-semibold'>$145</span>
        </div>

        {/* Product 3 */}
        <div className='flex flex-col items-center'>
          <Image width={200} height={200} src="/Frame 34 (1).png" alt="Loose Fit Bermuda Shorts" className="w-full h-auto" />
          <Image width={200} height={200} src="/Frame 39 (1).png" alt="Loose Fit Bermuda Shorts" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>LOOSE FIT BERMUDA SHORTS</p>
          <span className='mt-2 text-lg font-semibold'>$80</span>
        </div>

        {/* Product 4 */}
        <div className='flex flex-col items-center'>
          <Image width={200} height={200} src="/Frame 38 (1).png" alt="Faded Skinny Jeans" className="w-full h-auto" />
          <Image width={200} height={200} src="/Frame 41.png" alt="Faded Skinny Jeans" className="w-full h-auto mt-3" />
          <p className='mt-4 text-lg sm:text-xl font-medium text-center'>FADED SKINNY JEANS</p>
          <span className='mt-2 text-lg font-semibold'>$210</span>
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

export default Listing2
