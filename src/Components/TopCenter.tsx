import React from 'react'

const TopCenter = () => {
  return (
    <div className="w-full flex-col">
      <div className="  w-full h-90 overflow ">
        <img className="w-full h-90 overflow brightness-25 shadow-xl" src="https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyaWJiZWFufGVufDB8fDB8fHww" alt="Caribbean Background" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
          Explore the world
        </h1>

        <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-100 leading-relaxed">
          We're constantly trying to express ourselves and actualize our dreams.
          If you have the opportunity to play this game, take it.
        </p>

        <button className="mt-6 bg-red-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base transition duration-300">
            Learn More
          </button>
      </div>


    </div>



  );
};

export default TopCenter;