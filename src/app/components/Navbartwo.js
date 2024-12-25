'use client'

import logo from '../asset/kkkp3.png'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'



const Navbartwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return ( 
    <nav className="w-full fixed top-0 left-0 bg-[#fff3ec] shadow-sm bg-opacity-80 bg-clip-padding backdrop-blur-sm flex flex-row z-10 mx-auto p-2">
      <div className="max-w-7xl px-4">
        <div className="flex justify-between items-center h-10 sm:space-x-10 md:space-x-24">
          <div className="flex-shrink-0">
        <Link href={"/"}>
          <Image className="w-20 h-auto hover:-translate-y-1 duration-300" src={logo} alt='KKP logo'></Image>
        </Link>
          </div>
            <div className="hidden sm:flex sm:space-x-4 md:space-x-10">
          <Link href={"/#About Us"} className="block rounded-md text-xs w-16 hover:text-orange-700 ">
            About Us
        </Link>
        <Link href={"/#Technology"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Technology
        </Link>
        <Link href={"/#Service"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Service
        </Link>
        <Link href={"/#Label"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Label
        </Link>
        <Link href={"/#Contact"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Contact
        </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${!isMenuOpen ? "ml-40" : ""} inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href={"/#About Us"} className="block rounded-md text-xs w-16 hover:text-orange-700 ">
            About Us
        </Link>
        <Link href={"/#Technology"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Technology
        </Link>
        <Link href={"/#Service"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Service
        </Link>
        <Link href={"/#Label"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Label
        </Link>
        <Link href={"/#Contact"} className="block rounded-md text-xs w-16 hover:text-orange-700">
            Contact
        </Link>
            </div>
          </div>
          )}
    </nav>
     );
}
 
export default Navbartwo;