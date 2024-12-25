import Image from "next/image";
import React from 'react'
import Link from "next/link";

//components
import ninec from "../asset/9cRotary.jpg"
import sevenc from "../asset/7cRotary.jpg"
import fivec from "../asset/5cRotary.jpg"
import fourc from "../asset/4cFlatBed.jpg"
import prepress from "../asset/Prepress.jpg"
import screen from "../asset/screen.jpg"
import slitter from "../asset/Slitter.jpg"
import digitalprint from "../asset/DigitalPrinting.jpg"
import diecut from "../asset/DieCutLaminating.jpg"
import kkp555 from "../asset/KKP555.png"

const Technology = () => {
    return ( 
        <div className="relative w-full h-auto flex flex-col md:flex-row-reverse space-y-[10%] h-[800px] md:-scroll-my-52" id='Technology'>
            <div className="w-full md:w-[50%] h-auto flex items-center justify-center mt-32">
                <div className="w-full flex flex-col items-center justify-center">
                        <div className="space-y-12">
                            <h1 className="font-sans font-semibold tracking-wide text-4xl text-center">Printing<br></br>Technologies</h1>
                            <button className="w-[175px] h-[40px] rounded-full flex items-center justify-center font-semibold bg-[#fc8541] text-white mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300 text-xs">
                                <Link href={"/technology"}>
                                    Printing Technologies
                                </Link>
                            </button>
                        </div>
                    </div>
                        <Image className="absolute -right-10 top-10 w-[150px] h-[100px] overflow-x-hidden md:top-[80%]" src={kkp555} alt="bubble3"></Image>
                </div>
            <div className="w-full h-auto bg-kkp5 bg-cover py-20 ml-2 flex items-center justify-center md:py-32 ">
                <div className="w-[400px] h-auto grid grid-cols-3 gap-2 md:mt-20">
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={ninec} alt="pic1"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={sevenc} alt="pic2"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={fivec} alt="pic3"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={fourc} alt="pic4"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={prepress} alt="pic5"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={screen} alt="pic6"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={slitter} alt="pic7"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={digitalprint} alt="pic8"></Image>
                    <Image className="w-[75px] h-[50px] md:w-[100px] md:h-[80px] shadow-md" src={diecut} alt="pic9"></Image>
                </div>
            </div>
        </div>
     );
}
 
export default Technology;