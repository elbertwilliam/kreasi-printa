import React from "react"
import Image from "next/image";

//components
import Navbartwo from "@/app/components/Navbartwo";
import brataco from "@/app/asset/brataco.PNG"
import claris from "@/app/asset/claris.png"
import dystar from "@/app/asset/DyStarDark.png"
import indahkiat from "@/app/asset/indahkiat.svg"
import lionstar from "@/app/asset/lionstar.png"
import pindo from "@/app/asset/pindo.svg"
import univenus from "@/app/asset/univenus.svg"


const Industry = () => {
    return ( 
        <div className="relative w-full flex flex-col py-20 px-5 overflow-x-hidden bg-[#fff4ec]">
        <Navbartwo />
        <div className="space-y-1">
            <h3 className="font-anton text-xs opacity-60 text-gray-800">Industrial Label</h3>
            <h1 className="font-sans text-xl font-semibold">Our Prominent Customer</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center place-content-center m-6 gap-8">
            <Image className="md:w-[30%] place-self-center" src={brataco} alt="PT.Brataco"/>
            <Image className="md:w-[20%]" src={claris} alt="PT.Claris"/>
            <Image className="md:w-[25%]" src={dystar} alt="PT.Dystar"/>
            <Image className="md:w-[40%]" src={indahkiat} alt="PT.IndahKiat"/>
            <Image className="md:w-[25%]" src={lionstar} alt="PT.Lionstar"/>
            <Image className="md:w-[30%]" src={pindo} alt="PT.Pindo"/>
            <Image className="md:w-[30%]" src={univenus} alt="PT.Univenus"/>
            
        </div>
    </div>
     );
}
 
export default Industry;