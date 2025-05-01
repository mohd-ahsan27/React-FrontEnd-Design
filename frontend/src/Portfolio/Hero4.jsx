import React from "react";
import ttt from "../assets/ttt.png";
import rps from "../assets/rps.jfif";
import portfolio from "../assets/portfolio image.jfif";
import { FaGlobe } from "react-icons/fa";

const Hero4 = () => {
  return (
    <div id="projects">
      <div className="bg-slate-50 py-16 px-6 sm:px-12">
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl text-center sm:text-left">Web Creations</h2>
          <hr className="mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
          <div className="border rounded-xl bg-white hover:scale-105 transition duration-300 cursor-pointer shadow-md">
            <img
              className="rounded-t-xl h-56 sm:h-72 w-full object-cover"
              src={ttt}
              alt="Tic Tac Toe"
            />
            <div className="px-6">
              <h2 className="font-semibold text-lg py-5">Tic Tac Toe Project</h2>
              <p>
                Built a Tic Tac Toe game using HTML, CSS, and JavaScript! This
                classic strategy game is a great way to challenge your friends
                and family.
              </p>
              <FaGlobe className="text-slate-500 text-3xl hover:text-black transition duration-500 mt-7 mb-10" />
            </div>
          </div>

          <div className="border rounded-xl bg-white hover:scale-105 transition duration-300 cursor-pointer shadow-md">
            <img
              className="rounded-t-xl h-56 sm:h-72 w-full object-cover"
              src={rps}
              alt="Rock Paper Scissors"
            />
            <div className="px-6">
              <h2 className="font-semibold text-lg py-5">Rock Paper Scissors Project</h2>
              <p>
                Built a Rock Paper Scissors game using HTML, CSS, and JavaScript! This
                classic strategy game is a great way to challenge your friends
                and family.
              </p>
              <FaGlobe className="text-slate-500 text-3xl hover:text-black transition duration-500 mt-7 mb-10" />
            </div>
          </div>

          <div className="border rounded-xl bg-white hover:scale-105 transition duration-300 cursor-pointer shadow-md">
            <img
              className="rounded-t-xl h-56 sm:h-72 w-full object-cover"
              src={portfolio}
              alt="Portfolio Project"
            />
            <div className="px-6">
              <h2 className="font-semibold text-lg py-5">Portfolio Project</h2>
              <p>
                I am learning Web development. I make small projects like Tic Tac Toe & a Rock Paper Scissors Game.
              </p>
              <FaGlobe className="text-slate-500 text-3xl hover:text-black transition duration-500 mt-7 mb-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
