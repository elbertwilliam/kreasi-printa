import Image from "next/image";
import React from 'react';
import Link from "next/link";

//Components
import About from "./components/About";
import Technology from "./components/Technology";
import Service from "./components/Service";
import Labels from "./components/Labels";
import home from "./asset/KKP1.png";
import home1 from "./asset/KKP11.png";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="relative w-full flex flex-col space-y-20 justify-center items-center overflow-x-hidden bg-[#fff4ec]">
      <Navbar />
        <div className="w-full h-[500px] flex flex-col space-y-2 justify-center items-center">
          <Image className="w-[40%] object-cover absolute -left-[25%] sm:w-[40%]" alt="bubble1" src={home1}></Image>
          <Image className="w-[30%] absolute -right-[15%] sm:w-[30%]" alt="bubble2" src={home}></Image> 
          <h2 className="font-anton text-2xl md:text-4xl">Labelling & Packaging</h2>
          <h1 className="font-anton text-5xl text-[#b23501] md:text-8xl">Converter</h1>
          <h3 className="font-redhat font-thin text-sm py-4 md:text-lg">PT. Karunia Kreasi Printa (KKP)</h3>
        </div>
        <About />
        <Technology />
        <Service />
        <Labels />
        <div  className="fixed bottom-4 right-4">
          <Link className="flex items-center bg-[#50554f] shadow-sm inline-block px-3 py-1 md:px-3 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300" href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-3" alt="bubble1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
          </Link>
        </div>
    </div>
  );
}
