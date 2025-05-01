import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import mobilepic from "../assets/mobilepic.png";

const Hero1 = () => {
  return (
    <div>
      <div className='bg-green-100 px-6 sm:px-12 py-20'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex flex-col gap-y-3 text-center md:text-left'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>I'm Web Developer</h1>
            <h2 className='text-2xl sm:text-3xl text-gray-700 pt-1'>Front-End Developer</h2>
            <p className='text-gray-700'>Turning Ideas Into Interactive Reality</p>
            <div className='flex justify-center md:justify-start items-center text-gray-500 text-3xl sm:text-4xl gap-4 pt-2'>
              <FaGithubSquare className='hover:text-black transition duration-500 cursor-pointer' />
              <FaLinkedin className='hover:text-black transition duration-500 cursor-pointer' />
              <FaTwitterSquare className='hover:text-black transition duration-500 cursor-pointer' />
            </div>
          </div>

          <div className='hidden md:block'>
            <img className='w-60 md:w-80 lg:w-[25rem] md:ml-8 lg:ml-80 cursor-pointer hover:scale-110 duration-500' src={mobilepic} alt="Mobile Pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero1;
