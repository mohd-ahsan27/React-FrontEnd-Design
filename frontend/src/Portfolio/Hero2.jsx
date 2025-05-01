import React from 'react'
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div id='skills'>
      <div className='bg-slate-50'>
        <div className='flex flex-col px-6 sm:px-12 py-20 gap-y-4'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-center sm:text-left'>Tech Stack</h1>
          <hr className='border-gray-300' />
        </div>

        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-y-10 md:gap-x-8 px-6 sm:px-14 pb-20'>
          <div className='text-center md:text-left'>
            <FaHtml5 className='text-green-500 text-6xl sm:text-7xl mx-auto md:mx-0 hover:scale-150 cursor-pointer duration-300 ' />
            <h2 className='font-bold text-lg sm:text-xl py-4'>HTML & CSS</h2>
            <p className='text-gray-500 max-w-sm'>
              Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
            </p>
          </div>

          <div className='text-center md:text-left'>
            <FaJs className='text-green-500 text-6xl sm:text-7xl mx-auto md:mx-0 hover:scale-150 cursor-pointer duration-300' />
            <h2 className='font-bold text-lg sm:text-xl py-4'>JavaScript</h2>
            <p className='text-gray-500 max-w-sm'>
              Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.
            </p>
          </div>

          <div className='text-center md:text-left'>
            <FaReact className='text-green-500 text-6xl sm:text-7xl mx-auto md:mx-0 hover:scale-150 cursor-pointer duration-300' />
            <h2 className='font-bold text-lg sm:text-xl py-4'>React</h2>
            <p className='text-gray-500 max-w-sm'>
              Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2;
