import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 return (

    <div className="flex-1 p-10 flex flex-col justify-right w-full min-h-screen flex  items-center p-10">
            <div>
        <h1 className="text-2xl font-bold text-purple-900 leading-tight mb-1"> Get 40% OFF on your first trip</h1>
    </div>
        <div>
        <p className="text-gray-600 text-sm mb-6">Join our community and be the first to know about the latest news, offers and exciting content</p>
  <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        </div>
        <button className="bg-red-600 text-white py-1 px-5 rounded-full font-semibold text-sm">Claim Offer</button>
    </div>
    
        
    




  
 )
}

export default App
