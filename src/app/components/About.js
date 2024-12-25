import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//components
import shape from '../asset/kkkp.png'

const About = () => {
    return (
    <div className="w-full h-auto md:scroll-my-20" id='About Us'>
        <div className="flex flex-col md:flex-row-reverse">
        <Image className="w-[479.9px] h-[481.1px] md:w-[240px] md:h-[240px]" src={shape} alt="shape"/>
            <div className="space-y-8 p-8">
            <h1 className="font-anton text-6xl">Our <span className="text-[#b23501]">Story</span></h1>
            <p className="font-redhat font-bold text-xl">With over 10 years of experience in the printing and packaging business serving industrial sectors, we have evolved from off-set printing to become a major player in label and security sticker printing.</p>
            <p className="font-redhat font-thin text-xl">Backed by state-of-the-art machines and equipment, we cater to prominent businesses across a wide range of industries.</p>
        </div>
            </div>
            <div className="space-y-10">
            <div className="flex flex-row space-x-10 px-12 text-xl">
                <ul className="list-disc font-redhat font-thin">
                    <li>Food & Beverage</li>
                    <li>Airlines</li>
                    <li>Automotive</li>
                    <li>Cosmetics</li>
                </ul>
                <ul className="list-disc font-redhat font-thin text-xl">
                    <li>Pulp & Paper processing</li>
                    <li>Banking</li>
                    <li>Pharmacy</li>
                    <li>Etc</li>
                </ul>
            </div>
            <button className="flex items-center justify-center text-xl border rounded-full px-8 py-4 bg-[#fc8541] text-[#ffffff] font-semibold mx-auto hover:bg-orange-700 hover:-translate-y-1 duration-300">
                <Link href={'#Label'}>
                    Browse our portfolio
                    </Link>
            </button>
            </div>
        </div>
    );
}
 
export default About;