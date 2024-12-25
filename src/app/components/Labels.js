import Image  from "next/image";
import React from 'react'
import Link from "next/link";

//components
import fnb from '../asset/fnb.png'
import health from '../asset/Health.png'
import industrial from '../asset/Industrial.png'
import materials from '../asset/Materials.png'
import automotive from '../asset/Automotive.png'

const lasection =[]

const Labels = () => {
    return ( 
        <div className="w-screen grid grid-cols-2 md:grid-cols-3 gap-8 px-2 py-10 justify-items-center scroll-my-28" id='Label'>
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[100px] flex flex-col items-center justify-center space-y-2 mx-auto my-auto">
                <h1 className="flex font-sans font-bold text-sm md:text-lg flex tracking-wide text-center">Our Digital<br></br>Portfolio</h1>
                <p className="font-sans text-xs md:text-sm text-center tracking-wide">Browse our printing, labelling,<br></br>and packaging solutions per<br></br>market sector.</p>
            </div>
            <div className="flex flex-col items-center gap-6">
            <Image className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-lg" src={industrial} alt="industry" />
            <button className="w-[80px] h-[35px] md:w-[175px] md:h-[40px] text-xs md:text-lg rounded-full flex items-center justify-center font-semibold bg-[#fc8541] text-white mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300">
            <Link href={"/label/industry"}>
                Industrial
            </Link>
            </button>
            </div>
            <div className="flex flex-col items-center gap-6">
            <Image className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-lg" src={materials} alt="material"/>
            <button className="w-[80px] h-[35px] md:w-[175px] md:h-[40px] text-xs md:text-lg rounded-full flex items-center justify-center font-semibold bg-[#fc8541] text-white mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300">
                <Link href={"/label/material"}>
                    Materials
                </Link>
            </button>
            </div>
            <div className="flex flex-col items-center gap-6">
            <Image className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-lg" src={fnb} alt="fnb"/>
            <button className="w-[80px] h-[35px] md:w-[175px] md:h-[40px] text-xs md:text-lg rounded-full flex items-center justify-center font-semibold bg-[#fc8541] text-white mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300">
                <Link href={"/label/fnb"}>
                    Food and Beverage
                </Link>
            </button>
            </div>
            <div className="flex flex-col items-center gap-6">
            <Image className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-lg" src={health} alt="health"/>
            <button className="w-[80px] h-[35px] md:w-[175px] md:h-[40px] text-xs md:text-lg rounded-full flex items-center justify-center font-semibold bg-[#fc8541] text-white mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300">
                <Link href={"/label/health"}>
                    Health Care
                </Link>
                </button>
            </div>
            <div className="flex flex-col items-center gap-6">
            <Image className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-lg" src={automotive} alt="automotive"/>
            <button className="w-[80px] h-[35px] md:w-[175px] md:h-[40px] text-xs md:text-lg rounded-full flex items-center justify-center font-semibold bg-[#fc8541] text-white mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300">
                <Link href={"/label/automotive"}>Automotive</Link>
            </button>
            </div>
        </div>
     );
}
 
export default Labels;