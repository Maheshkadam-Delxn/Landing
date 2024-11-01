"use client";
import React from 'react';
import { Link } from 'react-scroll';
import Image from "next/image";

const Navbar = () => {
  return (
    <main className="bg-[#121212] flex flex-col sm:flex-row items-center justify-between px-6 py-4 shadow-md">
      <div className="text-white font-mono font-bold text-3xl p-2 flex items-center">
        <Image src="/images/logo.jpg" alt="Logo" width={40} height={32} className="mr-2 rounded-lg " />
        DevServe
      </div>

      <div className="w-full sm:w-auto flex items-center justify-center gap-12 pt-4 sm:pt-0 pb-4 sm:pb-0 text-lg font-medium rounded-b-lg">
        <Link to="Home" smooth={true} className="relative text-white text-base cursor-pointer hover:text-slate-300 after:content-[''] after:block after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full">
          Home
        </Link>
        <Link to="Services" smooth={true}  duration={800}  className="relative text-white text-base cursor-pointer hover:text-slate-300 after:content-[''] after:block after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full">
          Services
        </Link>
        <Link to="About" smooth={true}  duration={800}  className="relative text-white text-base cursor-pointer hover:text-slate-300 after:content-[''] after:block after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full">
          About
        </Link>

        {/* Updated "Contact Us" link for smooth scrolling */}
        <Link
          to="Contacts"
          smooth={true}
          duration={800} // Adjust duration for smoothness in ms
          className="relative bg-blue-500 p-2 rounded-md text-white text-base cursor-pointer hover:bg-[#164574]"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
