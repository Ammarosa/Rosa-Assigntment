import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";

function App() {
  return (
    <div className="w-full min-h-screen flex font-sans">

  
      <div className="flex-1 p-12 flex flex-col justify-center space-y-6">


        <h1 className="text-4xl font-extrabold text-blue-900">
          Book a trip with us
        </h1>

        <p className="text-blue-800 max-w-xl">
          Are you ready to transform your life, achieve your goals, and make a
          positive change? It all starts with taking action. Embrace the
          opportunity to seize your future now.
        </p>

      </div>

      <div className="flex-1 flex items-center justify-end pr-16">

        <div className="w-[360px] flex flex-col space-y-4">

          <h1 className="text-2xl font-bold text-purple-900 leading-tight">
            Get 40% OFF on your first trip
          </h1>

          <p className="text-gray-600 text-sm">
            Join our community and be the first to know about the latest news,
            offers and exciting content
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm
                       focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <button className="bg-red-600 text-white py-2 px-4 rounded-full font-semibold text-sm">
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
