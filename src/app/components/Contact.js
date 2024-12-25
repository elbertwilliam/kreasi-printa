import React from "react";

const Contact = () => {
    return (
    <div className="w-full">
        <div className="flex flex-col items-start bg-[#1e1e1e] text-white scroll-my-24" id='Contact'>
            <div className="flex flex-col space-y-16 p-8">
                <h1 className="font-sans text-6xl font-semibold">Get in Touch</h1>
                <div className="flex flex-col space-y-4 p-2">
                    <div className="flex flex-col space-y-1">
                        <h3>MARKETING OFFICE</h3>
                        <div>
                            <p>Ruko Palem Mutiara A16/No.3, Lingkar Luar Kamal</p>
                            <p>11730 - Cengkareng, Jakarta Barat</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h3>OUR PRINT SHOP</h3>
                        <div>
                            <p>Kawasan Industri Jatake Jl. Industri III Blok AD</p>
                            <p>No. 22,Tangerang</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h3>CONTACT DETAILS </h3>
                        <div>
                            <p>Contact Person: Sheera</p>
                            <p>Mobile: +62-813-1818-7442</p>
                            <p>Email: sheera@kkp.co.id</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#1e1e1e] text-white flex justify-center items-center border-t border-zinc-800 p-1">
                    <p className="opacity-50 text-[8px]">Karunia Kreasi Printa © 2024. All Rights Reserved.</p>
                </div>
    </div>
     );
}
 
export default Contact;