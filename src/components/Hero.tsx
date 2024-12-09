
import Image from "next/image";
export default function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-12">
          <h1 className="font-bold text-4xl md:text-5xl text-black leading-tight">
            FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
          </h1>
          <p className="mt-4 text-gray-600 font-normal">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-5 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Shop Now
          </button>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-9">
          <div className="relative w-full max-w-md">
            <Image
              src="/Vector 3.png"
              alt="Fashion Image"
              layout="responsive"
              width={500}
              height={500}
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
