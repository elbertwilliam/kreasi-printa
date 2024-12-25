import React from "react"
import Image from "next/image";
import Link from "next/link";

//components
import Navbartwo from "@/app/components/Navbartwo";
import adr from "@/app/asset/adr.PNG"
import antjol from "@/app/asset/antjol.png"
import petro from "@/app/asset/petro.png"
import propan from "@/app/asset/propan.png"
import sungaibudi from "@/app/asset/sungaibudi.png"
import sunpride from "@/app/asset/sunpride.png"

const Material = () => {
    return ( 
        <div className="relative w-full flex flex-col py-20 px-5 overflow-x-hidden bg-[#fff4ec]">
        <Navbartwo />
        <div className="space-y-1">
            <h3 className="font-anton text-xs opacity-60 text-gray-800">Material Label</h3>
            <h1 className="font-sans text-xl font-semibold">Our Prominent Customer</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center place-content-center m-6 gap-8">
            <Image className="md:w-[40%]" src={adr} alt="PT.Adr"/>
            <Image className="md:w-[30%]" src={antjol} alt="PT.Antjol"/>
            <Image className="md:w-[30%]" src={petro} alt="PT.Petro"/>
            <Image className="md:w-[30%]" src={propan} alt="PT.Propan"/>
            <Image className="w-[70%] md:w-[20%]" src={sungaibudi} alt="PT.SungaiBudi"/>
            <Image className="md:w-[25%]" src={sunpride} alt="PT.SunPride"/>
        </div>
    </div>
     );
}
 
export default Material;