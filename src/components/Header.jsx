import React from 'react';

function Header() {
  return (
    <header className="relative bg-gradient-to-b from-emerald-400 to-green-500 overflow-hidden font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full translate-x-10 translate-y-10 blur-2xl"></div>

      {/* Reduced padding (pt-12 pb-16) for a smaller height */}
      <div className="max-w-5xl mx-auto px-4 pt-12 pb-16 text-center relative z-10">
        
        {/* Floating Badge */}
        <div className="inline-block mb-3 animate-bounce">
          <span className="bg-yellow-400 text-green-900 text-xs font-extrabold px-3 py-1.5 rounded-full border-b-4 border-yellow-600 shadow-lg transform rotate-[-2deg]">
            🇮🇳 India's Simplest Finance Guide
          </span>
        </div>

        {/* Main Title - Reduced Size (text-5xl md:text-6xl) */}
        <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] tracking-tight mb-3">
          Stock<span className="text-yellow-300">Simple</span>
        </h1>

        {/* Subtitle - Reduced Size */}
        <p className="mt-1 text-green-50 text-lg md:text-xl font-bold tracking-wide">
          No Suits. No Jargon. Just 💰 Gains.
        </p>

        {/* Main Card Content - More Compact */}
        <div className="mt-8 bg-white rounded-[1.5rem] p-6 max-w-2xl mx-auto shadow-[0_8px_0_rgb(0,0,0,0.1)] border-4 border-green-200 transform hover:scale-[1.01] transition-transform duration-300">
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            🚀 Stop wasting months reading boring textbooks.
          </p>
          
          <div className="my-4 border-b-2 border-dashed border-gray-200"></div>

          <p className="text-gray-700 text-base md:text-lg">
            Just scroll down! 👇 <br/>
            We tell the story of the <span className="text-green-600 font-black">Indian Stock Market</span> simply and clearly.
          </p>

          {/* Call to Action Button */}
          <button className="mt-6 bg-green-500 hover:bg-green-400 text-white text-lg font-bold py-2.5 px-8 rounded-full shadow-[0_5px_0_rgb(21,128,61)] active:shadow-[0_0px_0_rgb(21,128,61)] active:translate-y-[5px] transition-all">
            Start Reading Now 📖
          </button>
        </div>

      </div>

      {/* Cartoon Wave Divider at Bottom */}
      <div className="absolute bottom-0 w-full leading-none z-20">
        <svg className="block w-full h-8 md:h-16 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;