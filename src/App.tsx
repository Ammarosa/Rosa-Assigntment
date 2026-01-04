import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import LeftColumn from './Components/LeftColumn';
import RightColumn from './Components/RightColumn';
import TopCenter from './Components/TopCenter';


function App() {
  return (

    <div className="w-full min-h-screen flex flex-col font-sans">
      <div className="flex items-center justify-end ">

      </div>

      <div>
        <TopCenter />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 py-12">
        <RightColumn />
        <LeftColumn />
      </div>
      <div>
        
      </div>

    </div>

  );
}

export default App;
