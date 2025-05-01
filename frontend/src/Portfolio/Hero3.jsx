import React from "react";
import codeimage from "../assets/codeimage.png";

const Hero3 = () => {
  return (
    <div id="about">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 sm:px-12 py-16 md:py-24 gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img className="w-64 sm:w-80 md:w-[23rem] hover:scale-110 cursor-pointer duration-300" src={codeimage} alt="Sample Pic" />
        </div>

        <div className="flex flex-col gap-y-5 w-full md:w-1/2">
          <h2 className="font-semibold text-2xl sm:text-3xl text-center md:text-left">Code And Coffee</h2>
          <hr className="border-gray-300" />
          <p className="text-gray-500 text-justify">
            I'm Unknown, a seasoned web developer with expertise in React and component-based projects.
            With a year of experience, I've mastered Redux for global state management and wield Axios for seamless data fetching.
            Let's collaborate and transform your ideas into digital brilliance!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero3;
