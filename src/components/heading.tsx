// import React from 'react'

// const Heading = () => {
//   return (
//     <div >
//       <div className="w-[1440px] h-[122px] top-[797px] flex bg-[#000000] justify-evenly items-center text-[#F5F5F5] mt-4">
//     <p>VERSACE</p>
//     <p>ZARA</p>
//     <p>GUCCI</p>
//     <p>PRADA</p>
//     <p>Calvin Klein</p>
// </div>
//     </div>
//   )
// }







// export default Heading







import React from 'react';

const Heading = () => {
  return (
    <div>
      <div className="w-full h-[122px] flex bg-[#000000] justify-evenly items-center text-[#F5F5F5] mt-4">
        <p className="font-serif text-lg">VERSACE</p> {/* Example: Serif font */}
        <p className="font-sans text-xl">ZARA</p> {/* Example: Sans-serif font */}
        <p className="font-mono text-2xl">GUCCI</p> {/* Example: Monospace font */}
        <p className="font-[cursive] text-lg">PRADA</p> {/* Example: Cursive font */}
        <p className="font-[georgia] text-2xl">Calvin Klein</p> {/* Example: Georgia font */}
      </div>
    </div>
  );
};

export default Heading;
