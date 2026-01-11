import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center w-full min-h-[150px]">
      {/* Container for the spinner */}
      <div className="relative w-10 h-10">
        
        {/* 1. Background Circle (Grey) */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
        
        {/* 2. Spinning Arc (Blue) */}
        {/* 'border-t-transparent' creates the gap that makes it look like it's spinning */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      
      </div>
    </div>
  );
}

export default Loader;