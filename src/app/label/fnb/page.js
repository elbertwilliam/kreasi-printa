import React from "react"
import Image from "next/image";

//components
import Navbartwo from "@/app/components/Navbartwo";
import kara from "@/app/asset/kara.png"
import diamondfood from "@/app/asset/diamonfood.png"
import dolphin from "@/app/asset/dolphin.png"
import mayora from "@/app/asset/mayora.png"
import pristine from "@/app/asset/pristine-logo.png"
import smart from "@/app/asset/smart.svg"
import sorin from "@/app/asset/sorin.png"
import kemfood from "@/app/asset/kemfood.png"
import pandurasa from "@/app/asset/pandurasa.PNG"


const Fnb = () => {
    return ( 
        <div className="relative w-full flex flex-col py-20 px-5 overflow-x-hidden bg-[#fff4ec]">
            <Navbartwo />
            <div className="space-y-1">
                <h3 className="font-anton text-xs opacity-60 text-gray-800">Food and Beverage Label</h3>
                <h1 className="font-sans text-xl font-semibold">Our Prominent Customer</h1>
            </div>

            <div className="grid grid-cols-2 justify-items-center place-content-center m-6 gap-8">
                <Image className="md:w-[15%]" src={kara} alt="PT.Kara"/>
                <Image className="md:w-[15%]" src={diamondfood} alt="PT.Diamondfood"/>
                <Image className="md:w-[40%]" src={dolphin} alt="PT.Dolphin"/>
                <Image className="md:w-[25%]" src={mayora} alt="PT.Mayora"/>
                <Image className="md:w-[40%]" src={pristine} alt="PT.Pristine"/>
                <Image className="md:w-[40%]" src={smart} alt="PT.Smart"/>
                <Image className="md:w-[20%]" src={sorin} alt="PT.Sorin"/>
                <Image className="md:w-[20%]" src={kemfood} alt="PT.Kemfood"/>
                <Image className="md:w-[20%]" src={pandurasa} alt="PT.Pandurasa"/>
            </div>
        </div>
     );
}
 
export default Fnb;