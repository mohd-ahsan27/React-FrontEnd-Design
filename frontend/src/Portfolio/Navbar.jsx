import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='bg-green-100 px-6 sm:px-12 py-6 flex justify-between items-center'>
      <div className='text-3xl sm:text-4xl font-bold'>
        <h1 className='hover:scale-125 duration-500 cursor-pointer '>
          Web<span className='text-green-700'>Dev</span>
        </h1>
      </div>

      <ul className='hidden md:flex items-center text-lg gap-6'>
        <a href="/" className='hover:text-green-700 transition hover:scale-110 duration-300 hover:underline '>Home</a>
        <a href="#skills" className='hover:text-green-700 transition hover:scale-110 duration-300 hover:underline'>Skills</a>
        <a href="#about" className='hover:text-green-700 transition hover:scale-110 duration-300 hover:underline'>About</a>
        <a href="#projects" className='hover:text-green-700 transition hover:scale-110 duration-300 hover:underline'>Projects</a>
      </ul>

      {/* Mobile Menu Icon */}
      <div className='md:hidden text-2xl cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Links */}
      {navOpen && (
        <div className='absolute top-20 left-0 w-full bg-green-100 flex flex-col items-center gap-6 py-6 shadow-md md:hidden'>
          <a href="#" className='hover:text-green-700 transition'>Home</a>
          <a href="#" className='hover:text-green-700 transition'>Skills</a>
          <a href="#" className='hover:text-green-700 transition'>About</a>
          <a href="#" className='hover:text-green-700 transition'>Projects</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
