import React from "react"
import Image from "next/image";

//components
import Navbartwo from "@/app/components/Navbartwo";
import astra from "@/app/asset/astra.png"
import lion from "@/app/asset/lionair.png"
import dnp from "@/app/asset/DNP.png"



const Automotive = () => {
    return ( 
        <div className="relative w-full flex flex-col py-20 px-5 overflow-x-hidden bg-[#fff4ec]">
            <Navbartwo />
            <div className="space-y-1">
                <h3 className="font-anton text-xs opacity-60 text-gray-800">Automotive Label</h3>
                <h1 className="font-sans text-xl font-semibold">Our Prominent Customer</h1>
            </div>

            <div className="grid grid-cols-2 justify-items-center place-content-center m-6">
                <Image className="md:w-[25%]" src={lion} alt="PT.LionAir"/>
                <Image className="md:w-[25%]" src={astra} alt="PT.Astra"/>
                <Image className="md:w-[25%]" src={dnp} alt="PT.DNP"/>
            </div>
        </div>
     );
}
 
export default Automotive;