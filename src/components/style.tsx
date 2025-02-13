import Image from "next/image";

export default function Style() {
    return (
      <div className="w-full">
        {/* Title Section */}
        <div className="flex justify-center items-center font-extrabold bg-[#F0F0F0] py-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center">BROWSE BY DRESS STYLE</h1>
        </div>
  
        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F0F0F0] py-6 px-4">
          {/* Row 1: Image 1 and Image 2 */}
          <div className="flex justify-center">
            <Image width={200} height={200} src="/Frame 61.png" alt="Dress Style 1" className="w-full h-auto max-w-[407px]" />
          </div>
          <div className="flex justify-center">
            <Image width={200} height={200} src="/Frame 62.png" alt="Dress Style 2" className="w-full h-auto max-w-[500px]" />
          </div>
  
          {/* Row 2: Image 3 and Image 4 */}
          <div className="flex justify-center">
            <Image width={200} height={200} src="/Frame 64.png" alt="Dress Style 3" className="w-full h-auto max-w-[684px]" />
          </div>
          <div className="flex justify-center">
            <Image width={200} height={200} src="/Frame 63.png" alt="Dress Style 4" className="w-full h-auto max-w-[407px]" />
          </div>
        </div>
      </div>
    );
  }
  