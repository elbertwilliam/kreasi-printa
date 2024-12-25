import Image from "next/image";
import React from 'react'

//components
import simple from "../asset/simple.jpg"
import special from "../asset/special.jpg"
import security from "../asset/security.jpg"
import printed from "../asset/printed.jpg"

const Service = () => {
    return ( 
        <div className="flex flex-col justify-center items-center scroll-my-20" id='Service'>
            <h1 className="w-screen font-sans text-4xl font-semibold py-2 px-4 md:flex md:justify-center">What We Do</h1>
            <p className="w-screen font-sans text-xl px-4 py-2">Read more on how KKP provides you with packaging and labelling solutions tailored to your every need</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:p-8">
                <div className="w-[115px] md:w-[150px] h-[200px] md:h-[250px] bg-[#1e1e1e] rounded-3xl flex justify-center items-center flex-col space-y-4">
                    <Image className="w-[75px] md:w-[250px] h-[100px] md:h-[150px] border-2" src={simple} alt="serve1" />
                    <h1 className="text-xs md:text-md font-sans font-bold tracking-wide text-white">Simple Labelling</h1>
                </div>
                <div className="w-[115px] md:w-[150px] h-[200px] md:h-[250px] bg-[#ef7130] rounded-3xl flex justify-center items-center flex-col space-y-4">
                    <Image className="w-[75px] md:w-[250px] h-[100px] md:h-[150px] border-2" src={special} alt="serve2" />
                    <h1 className="text-xs md:text-md font-sans font-bold tracking-wide text-white text-center">Special<br></br>Embelishment</h1>
                </div>
                <div className="w-[115px] md:w-[150px] h-[200px] md:h-[250px] bg-[#ef7130] md:bg-[#1e1e1e] rounded-3xl flex justify-center items-center flex-col space-y-4">
                    <Image className="w-[75px] md:w-[250px] h-[100px] md:h-[150px] border-2" src={security} alt="serve3"/>
                    <h1 className="text-xs md:text-md font-sans font-bold tracking-wide text-white text-center">Security &<br></br>Safety Stickers</h1>
                </div>
                <div className="w-[115px] md:w-[150px] h-[200px] md:h-[250px] bg-[#1e1e1e] md:bg-[#ef7130] rounded-3xl flex justify-center items-center flex-col space-y-4">
                    <Image className="w-[75px] md:w-[250px] h-[100px] md:h-[150px] border-2" src={printed} alt="serve4"/>
                    <h1 className="text-xs md:text-md font-sans font-bold tracking-wide text-white">Printed Media</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Service;