import React from "react"
import Image from "next/image";

//components
import Navbartwo from "../components/Navbartwo";
import ninec from "../asset/9cRotary.jpg"
import sevenc from "../asset/7cRotary.jpg"
import fivec from "../asset/5cRotary.jpg"
import fourc from "../asset/4cFlatBed.jpg"
import prepress from "../asset/Prepress.jpg"
import screen from "../asset/screen.jpg"
import slitter from "../asset/Slitter.jpg"
import diecut from "../asset/DieCutLaminating.jpg"


const Technology = () => {
    return ( 
    <div className="relative w-full flex flex-col py-20 justify-center items-center overflow-x-hidden bg-[#fff4ec]">
      <Navbartwo />
        <div className="space-y-5">
          <div className="flex justify-center items-center">
            <h1 className="font-anton text-xl text-black md:text-4xl text-center">Technology and Production Capacity</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={ninec} className="h-[75px] md:h-[250px]" alt="9rotary"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">9C Rotary</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Printing Machine with 675 M²/H Capacity</h2>
              </div>
            </div>
            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={sevenc} className="h-[75px] md:h-[250px]" alt="7rotary"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">7C Rotary</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Printing Machine with 675 M²/H Capacity</h2>
              </div>
            </div>

            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={fivec} className="h-[75px] md:h-[250px]" alt="5rotary"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">5C Rotary</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Printing Machine with 720 M²/H Capacity</h2>
              </div>
            </div>

            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={fourc} className="h-[75px] md:h-[250px]" alt="4rotary"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">4C Flat Bed</h1>
              </div>
            <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Printing Machine with 675 M²/H Capacity</h2>
                </div>
            </div>

            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={prepress} className="h-[75px] md:h-[250px]" alt="prepress"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">Plate Maker & Image Setter</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Pre-press Machine with in house Capacity</h2>
              </div>
            </div>

            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={screen} className="h-[75px] md:h-[250px]" alt="screen"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">Screen</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Printing Machine with 200 M²/H Capacity</h2>
              </div>
            </div>

            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={slitter} className="h-[75px] md:h-[250px]" alt="slitter"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">330mm Slitter</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Slitter Machine with 1000 M²/H Capacity</h2>
              </div>
            </div>

            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col border-2 w-[40%] items-center p-1 border-black">
                <Image src={diecut} className="h-[75px] md:h-[250px]" alt="diecut"></Image>
                <h1 className="font-sans font-semibold tracking-wide md:text-xl text-center">Finishing</h1>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <h2 className="font-sans md:text-xl text-center">Die cut, Hot foil, Laminating with 675 M²/H Capacity</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
     );
}
 
export default Technology;