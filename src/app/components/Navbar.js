'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'


//components
import logo from '../asset/kkkp3.png'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['About Us', 'Technology', 'Service', 'Label', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint of the screen

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, clientHeight } = element;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);


  return (
    <nav className="w-full fixed top-0 left-0 bg-[#fff3ec] shadow-sm bg-opacity-80 bg-clip-padding backdrop-blur-sm flex flex-row z-10 mx-auto p-2">
      <div className="max-w-7xl px-4">
        <div className="flex justify-between items-center h-10 space-x-10 md:space-x-24">
          <div className="flex-shrink-0">
        <Link href={"#home"}>
          <Image className="w-20 h-auto hover:-translate-y-1 duration-300" src={logo} alt='KKP logo'></Image>
        </Link>
          </div>
          {/* Links for larger screens */}
          <div className="hidden sm:flex sm:space-x-4 md:space-x-10">
              {sections.map((section) => (
              
                <Link key={section} href={`#${section}`}
                 className={`${activeSection === section ? 'text-orange-500 rounded-xl' : ''} block rounded-md text-xs w-16 hover:text-orange-700`}>
                    {section}
                </Link>
            
              ))}
            </div>
          </div>
      </div> 
      

      {/* Hamburger button for mobile */}
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

        {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
          {sections.map((section) => (
            
            <Link key={section} href={`#${section}`}
                 className={`${activeSection === section ? 'text-orange-500 rounded-xl' : ''} block rounded-md text-xs w-16 hover:text-orange-700`}>
                    {section}
                </Link>
          ))}
            </div>
          </div>    
      )}
      </nav>
  );
};
