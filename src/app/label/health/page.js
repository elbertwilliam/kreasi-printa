import React from "react"
import Image from "next/image";

//components
import Navbartwo from "@/app/components/Navbartwo";
import akasha from "@/app/asset/akasha.png"
import body from "@/app/asset/bodyshop.png"
import genero from "@/app/asset/genero.png"
import informa from "@/app/asset/indofarma.png"
import simex from "@/app/asset/simex.png"
import lapi from "@/app/asset/lapi.PNG"
import oriflame from "@/app/asset/oriflame.png"
import novell from "@/app/asset/novell.png"




const health = () => {
    return ( 
        <div className="relative w-full flex flex-col py-20 px-5 overflow-x-hidden bg-[#fff4ec]">
        <Navbartwo />
        <div className="space-y-1">
            <h3 className="font-anton text-xs opacity-60 text-gray-800">Health Label</h3>
            <h1 className="font-sans text-xl font-semibold">Our Prominent Customer</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center place-content-center m-6 gap-8">
            <Image className="md:w-[30%]" src={akasha} alt="PT.Akasha"/>
            <Image className="md:w-[20%]" src={body} alt="PT.BodyShop"/>
            <Image className="md:w-[40%]" src={genero} alt="PT.Genero"/>
            <Image className="md:w-[40%]" src={informa} alt="PT.IndoFarma"/>
            <Image className="md:w-[20%]" src={simex} alt="PT.Simex"/>
            <Image className="md:w-[30%]" src={oriflame} alt="PT.OriFlame"/>
            <Image className="md:w-[15%]" src={lapi} alt="PT.Lapi"/>
            <Image className="md:w-[20%]" src={novell} alt="PT.Novell"/>
            
        </div>
    </div>
     );
}
 
export default health;