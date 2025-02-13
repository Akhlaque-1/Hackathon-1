import { RxCross1 } from "react-icons/rx";
export default function TopHeader() {
  return (
    <div className="w-full h-[38px] bg-black flex items-center justify-center text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-center font-sans text-sm">
          Sign up and get 20% off your first order.
          <span className="text-white font-bold underline ml-2 cursor-pointer">
            Sign Up Now
          </span>
        </p>
        <button className="text-white">
          <RxCross1 size={18} />
        </button>
      </div>
    </div>
  );
}



