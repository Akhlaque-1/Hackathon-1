import Image from "next/image";

export default function Custmer(){
    return(
        <div>
            <div className=" w-[800px] h-[200px] top-[3363px] left[10px] flex font-extrabold ml-[50px]">OUR HAPPY CUSTOMERS
                <Image src="/arrow-down-bold 2.png" width={200} height={200} alt="" className="ml-[1250px] w-[24px] h-[24px] top-[3421px] left-[1300px]"/>
                <Image src="/arrow-down-bold 1.png" width={200} height={200} alt="" className=" w-[24px] h-[24px] top-[3421px] left-[1316px]"/>
            </div>
            <div className="flex w-[400px] ml-20">
            <Image src="/Frame 63 (1).png" alt="" width={200} height={200} />
             <Image src="/Frame 22.png" alt="" width={200} height={200}              />
<Image src="/Frame 61 (1).png" alt="" width={200} height={200} />
             <Image src="/Frame 62 (1).png" alt="" width={200} height={200} />
             <Image src="/Frame 64 (2).png" alt="" width={200} height={200} />

            </div>
        </div>
    )
}